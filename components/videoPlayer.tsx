import React, {Component, createRef, DetailedHTMLProps, HTMLAttributes, useRef} from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'
import {FaPause, FaPlay} from "react-icons/fa";
import {IoPlaySkipBack, IoPlaySkipForward} from "react-icons/io5";
import {RiPictureInPictureFill} from "react-icons/ri";
import {FaGear} from "react-icons/fa6";
import {BiSolidVolumeFull, BiSolidVolumeMute} from "react-icons/bi";
import {BsFullscreen} from "react-icons/bs";
import {formatTime, transHumanTime} from "@/lib/utils/utils";
import Player from "video.js/dist/types/player";

//接口类型
export interface IVideoOptions {
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
    options: IVideoOptions,
    src?: string,
}

interface IState {
    videoRef?: HTMLElement | HTMLVideoElement | HTMLDivElement | null ;
    player?: Player,
    playing? :boolean,
    currentTime?: number,
    duration?: number,
    videoPlayRef?: React.RefObject<HTMLDivElement>
    isFullScreen?: boolean
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
            <div className="videoPlayer w-full h-full bg-transparent relative group cursor-pointer " ref={this.state.videoPlayRef}
                 onDoubleClick={()=>{
                     const container = this.state.videoPlayRef?.current;
                     if(this.state.isFullScreen) {
                         this.setState({isFullScreen: false})
                         document.exitFullscreen()
                     }else{
                         this.setState({isFullScreen: true})
                         container?.requestFullscreen()
                    }
                 }}
                 onClick={()=>{
                     if(this.state.player?.paused()){
                         this.state.player.play()
                     }else{
                         this.state.player?.pause()
                     }
                 }}
            >
                <div className="fullController bg-opacity-70  w-full h-full  absolute bg z-20 flex flex-col items-center justify-between">
                    <div className="topControllerBar">
                        123
                    </div>
                    <div className="bottomControllBar w-full transition-all duration-500 opacity-0 h-[100px] group-hover:opacity-100   bg-gradient-to-t from-black/20 to-transparent    flex flex-col items-start justify-center px-5">

                        <div className="progressBar   w-full">
                            <div className={`h-[5px]  bg-sky-400 transition-all`}
                                    style={{width: `${((this.state.currentTime??0)/(this.state.duration??1))*100}%`}}
                            ></div>
                        </div>
                        <div className="flex items-center justify-between h-full w-full px-5 text-gray-200 "
                            onClick={(e)=>{
                                e.stopPropagation()
                            }}
                        >
                            <div className="flex items-center justify-between h-full gap-6 ">
                                <IoPlaySkipBack className=" text-[25px] "
                                    onClick={() => {
                                        this.state.player?.currentTime(this.state.player?.currentTime()?? - 10)
                                    }}
                                />
                                {
                                    this.state.player?.paused() ? <FaPlay className="text-[30px] " onClick={()=>{
                                        this.state.player?.play()
                                    }}/>:<FaPause className="text-[30px]"
                                        onClick={()=>{
                                            this.state.player?.pause()
                                        }}
                                    />
                                }
                                {/*<FaPlay className="text-[30px] "/>*/}
                                {/*<FaPause className="text-[35px] "/>*/}
                                <IoPlaySkipForward className=" text-[25px] "
                                    onClick={()=>{
                                        this.state.player?.currentTime(this.state.player?.currentTime()??+10)
                                    }}
                                />
                                <div className="text-[14px] text-white">{`${formatTime((this.state.currentTime??0)*1000,"mm:ss")} / ${formatTime((this.state.duration??0)*1000,"mm:ss")}`}</div>
                            </div>
                            <div className="flex items-center justify-between h-full gap-6">
                                <div className="text-[20px] font-medium">自动</div>
                                <div className="text-[20px] font-medium">倍速</div>
                                {
                                    this.state.player?.muted() ? <BiSolidVolumeMute className="text-[25px] " onClick={()=>{
                                        this.state.player?.muted(false)
                                    }}/> :  <BiSolidVolumeFull className="text-[25px] " onClick={()=>{
                                        this.state.player?.muted(true)
                                    }}/>
                                }
                                {/*<BiSolidVolumeMute />*/}
                                <FaGear className="text-[25px] "/>
                                <RiPictureInPictureFill className="text-[25px] "/>
                                {/*<RiPictureInPicture2Fill />*/}
                                {/*<RiPictureInPictureExitFill />*/}
                                <BsFullscreen className="text-[25px] "
                                    onClick={()=>{
                                        this.state.player?.requestFullscreen()
                                    }}
                                />
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
        let videoPlayerThis = this;
        const { options } = videoPlayerThis.props;
        console.log(`options: ${JSON.stringify(options)}`)
        // @ts-ignore
        const player = videojs(videoPlayerThis.state.videoRef, options,function () {
            //监听
            player.on('play', function () {
                console.log('开始播放')
                videoPlayerThis.setState({duration: player.duration()})
            });
            player.on('pause', function () {
                console.log('播放暂停')
            });
            player.on('timeupdate', function () {
                var currentTime = Math.floor(player.currentTime() as number);
                if (currentTime > 0 && (currentTime % 5 == 0)) {
                    //每隔5秒，向服务器提交播放时间(秒)
                }
                videoPlayerThis.setState({currentTime: currentTime})
                // console.log(`播放时间：${currentTime}`)
            });
        });
        videoPlayerThis.setState({player: player})
        videoPlayerThis.setState({videoPlayRef: createRef()})
        // @ts-ignore
        // videojs(videoPlayerThis.state.videoRef).ready();
    }


}
export default VideoPlayer

