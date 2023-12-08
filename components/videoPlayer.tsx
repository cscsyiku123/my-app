import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'
import {FaPause, FaPlay} from "react-icons/fa";
import {IoPlaySkipBack, IoPlaySkipForward} from "react-icons/io5";
import {RiPictureInPictureFill} from "react-icons/ri";
import {FaGear} from "react-icons/fa6";
import {BiSolidVolumeFull} from "react-icons/bi";
import {BsFullscreen} from "react-icons/bs";

//接口类型
interface IVideoOptions {
    height: number | undefined,
    width: number | undefined,
    autoplay: boolean;
    muted: boolean;
    controls: boolean,
    sources: [{
        src: string;
        type: string;
    }];
    playbackRates: number[];
    controlBar: {
        // 竖直的音量控制
        volumePanel: {
            inline: boolean
        },
    },
    loop?: boolean
}

interface IProps {
    options: IVideoOptions
}

interface IState {
    videoRef?: HTMLElement | HTMLVideoElement | HTMLDivElement | null ;
    player?: any,
    playing? :boolean,
}


export class VideoPlayer extends Component<IProps, IState> {

    public state: IState = {};
    // 属性默认值
    public static defaultProps:IProps = {
        options: {
            autoplay: true,
            muted: true,
            controls: false,
            playbackRates: [0.5, 1, 1.5, 2],
            sources: [{
                src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
                type: 'video/mp4'
            }],
            controlBar: {
                // 竖直的音量控制
                volumePanel: {
                    inline: false
                },
            },
            loop: true,
            height: undefined,
            width: undefined
        }
    };

    public render() {
        return (
            <div className="videoPlayer w-full h-full bg-transparent relative group">
                <div className="fullController bg-opacity-70  w-full h-full  absolute bg z-20 flex flex-col items-center justify-between">
                    <div className="topControllerBar">
                        123
                    </div>
                    <div className="bottomControllBar w-full transition-all duration-500 opacity-0 h-[100px] group-hover:opacity-100   bg-gradient-to-t from-black/20 to-transparent    flex flex-col items-start justify-center px-5">

                        <div className="progressBar h-[2px] bg-sky-400 w-[100px]"></div>
                        <div className="flex items-center justify-between h-full w-full px-5 text-gray-200 ">
                            <div className="flex items-center justify-between h-full gap-6 ">
                                <IoPlaySkipBack className=" text-[25px] " />
                                <FaPlay className="text-[30px] "/>
                                {/*<FaPause className="text-[35px] "/>*/}
                                <IoPlaySkipForward className=" text-[25px] "/>
                                <div className="text-[14px] text-white">{"01:26 / 01:26"}</div>
                            </div>
                            <div className="flex items-center justify-between h-full gap-6">
                                <div className="text-[20px] font-medium">自动</div>
                                <div className="text-[20px] font-medium">倍速</div>
                                <BiSolidVolumeFull className="text-[25px] "/>
                                {/*<BiSolidVolumeMute />*/}
                                <FaGear className="text-[25px] "/>
                                <RiPictureInPictureFill className="text-[25px] "/>
                                {/*<RiPictureInPicture2Fill />*/}
                                {/*<RiPictureInPictureExitFill />*/}
                                <BsFullscreen className="text-[25px] "/>
                                <BsFullscreen className="text-[25px] "/>
                                <BsFullscreen className="text-[25px] "/>
                            </div>
                        </div>
                    </div>
                </div>
                <video
                    className="video-js vjs-big-play-centered w-full h-full z-10" //控制栏样式 必需
                    ref={component => this.state.videoRef = component}
                    controls>
                </video>
            </div>
        )
    }
    componentDidMount() {
        const { options } = this.props;
        // @ts-ignore
        const player = videojs(this.state.videoRef, options);
        // @ts-ignore
        videojs(this.state.videoRef).ready(function () {
            //监听
            player.on('play', function () {
                console.log('开始播放')
            });
            player.on('pause', function () {
                console.log('播放暂停')
            });
            player.on('timeupdate', function () {
                var currentTime = Math.floor(player.currentTime() as number);
                if (currentTime > 0 && (currentTime % 5 == 0)) {
                    //每隔5秒，向服务器提交播放时间(秒)
                }
                console.log(`播放时间：${currentTime}`)
            });
        });
        console.log(player)
    }
}
export default VideoPlayer

