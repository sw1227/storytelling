import React, { useState } from "react";
import scrollama from "scrollama";
import "./App.css";
import shuri from "./shuri.glb";

import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { FlyToInterpolator } from "deck.gl";
import { ScenegraphLayer } from "@deck.gl/mesh-layers";
import { GLTFScenegraphLoader, GLTFEnvironment } from "@luma.gl/addons";
import GL from "@luma.gl/constants";
import { registerLoaders } from "@loaders.gl/core";



const alignments = {
    "left": "lefty",
    "center": "centered",
    "right": "righty"
};

registerLoaders([GLTFScenegraphLoader]);

// Constants to load GLTF environment
const GLTF_BASE_URL =
    "https://raw.githubusercontent.com/uber-common/deck.gl-data/master/luma.gl/examples/gltf/";

const CUBE_FACE_TO_DIRECTION = {
    [GL.TEXTURE_CUBE_MAP_POSITIVE_X]: "right",
    [GL.TEXTURE_CUBE_MAP_NEGATIVE_X]: "left",
    [GL.TEXTURE_CUBE_MAP_POSITIVE_Y]: "top",
    [GL.TEXTURE_CUBE_MAP_NEGATIVE_Y]: "bottom",
    [GL.TEXTURE_CUBE_MAP_POSITIVE_Z]: "front",
    [GL.TEXTURE_CUBE_MAP_NEGATIVE_Z]: "back"
};

const IMAGE_BASED_LIGHTING_ENVIRONMENT = {
    brdfLutUrl: `${GLTF_BASE_URL}/brdfLUT.png`,
    getTexUrl: (type, dir, mipLevel) =>
        `${GLTF_BASE_URL}/papermill/${type}/${type}_${CUBE_FACE_TO_DIRECTION[dir]}_${mipLevel}.jpg`
};



const App = config => {

    const mapStart = config.chapters[0].location;
    const [currentChapter, setCurrentChapter] = useState(config.chapters[0]);
    const [viewState, setViewState] = useState({
        longitude: mapStart.center[0],
        latitude: mapStart.center[1],
        zoom: mapStart.zoom,
        pitch: mapStart.pitch,
        bearing: mapStart.bearing,
    });
    const theme = config.theme;
    const currentChapterID = currentChapter.id;

    // Layer to render the glTF object
    const scenegraphLayer = new ScenegraphLayer({
        id: "scene",
        scenegraph: shuri,
        data: [[127.71945, 26.21688]],
        getPosition: f => f,
        sizeScale: 2.8,
        getOrientation: [0, 270, 90],
        getTranslation: [0, 0, 30],
        getScale: [1, 1, 1],
        _lighting: "pbr",
        _imageBasedLightingEnvironment: ({ gl }) =>
            new GLTFEnvironment(gl, IMAGE_BASED_LIGHTING_ENVIRONMENT),
    });


    const handleMapLoad = () => {
        // instantiate the scrollama
        const scroller = scrollama();

        // setup the instance, pass callback functions
        scroller
            .setup({
                step: ".step",
                offset: 0.5,
                progress: true
            })
            .onStepEnter(response => {
                const chapter = config.chapters.find(chap => chap.id === response.element.id);
                setCurrentChapter(chapter);
                // Transition
                setViewState({
                    ...viewState,
                    longitude: chapter.location.center[0],
                    latitude: chapter.location.center[1],
                    zoom: chapter.location.zoom,
                    pitch: chapter.location.pitch,
                    bearing: chapter.location.bearing,
                    transitionDuration: 3000,
                    transitionInterpolator: new FlyToInterpolator()
                });
            });
    };


    return (
        <div>
            <DeckGL
                viewState={viewState}
                onViewStateChange={({ viewState }) => setViewState(viewState)}
                controller={true}
                layers={[scenegraphLayer]}
            >
                <StaticMap
                    mapboxApiAccessToken={config.accessToken}
                    onLoad={handleMapLoad}
                    mapStyle={config.style}
                />
            </DeckGL>
            <div id="story">
                <div id="header" className={theme}>
                    <h1>首里城デジタル復元マップ</h1>
                    <h2>Digital reconstruction from crowdsourced photogrammetry</h2>
                    <p>
                        By <a href="https://twitter.com/_sw1227_">@_sw1227_</a>
                    </p>
                </div>

                <div id="features" className={alignments[config.alignment]}>
                    {
                        config.chapters.map(chapter =>
                            <Chapter key={chapter.id} theme={theme} {...chapter} currentChapterID={currentChapterID} />
                        )
                    }
                </div>
                <div className="blur">
                    <div id="footer" className={theme}>
                        3D model is downloaded from <a href="https://sketchfab.com/3d-models/shuri-castle-shurijo-naha-okinawa-wip-45f901e4d6fa4192a6f329e35f2dc5b8">OUR Shurijo: Shuri Castle Digital Reconstruction</a>
                        , licensed under the CC Attribution License, with modification to texture size and color.
                        <br />
                        Storytelling based on <a href="https://github.com/mapbox/storytelling">mapbox/storytelling</a> template, licensed under the BSD 3-Clause "New" or "Revised" License.
                        <br />
                        GLTF environment by <a href="https://github.com/uber-common/deck.gl-data">uber-common/deck.gl-data</a>, licensed under the MIT License.
                        <br />
                        説明文は<a href="https://ja.wikipedia.org/wiki/%E9%A6%96%E9%87%8C%E5%9F%8E">首里城 - Wikipedia</a>を参考に作成
                    </div>
                </div>
            </div>
        </div>
    );
};


function Chapter({ id, theme, title, currentChapterID, component }) {
    const classList = id === currentChapterID ? "step active" : "step";
    return (
        <div id={id} className={classList}>
            <div className={theme}>
                {title &&
                    <h3 className="title">{title}</h3>
                }
                {component}
            </div>
        </div>
    )
}

export default App;
