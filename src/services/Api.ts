
// npx swagger-ts-cli -u http://192.168.1.200:3100/api/pn/swagger-ui.html-json  -t swaggerTemplate

// /* eslint-disable */
// /* tslint:disable */
// /*
//  * ---------------------------------------------------------------
//  * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
//  * ##                                                           ##
//  * ## AUTHOR: acacode                                           ##
//  * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
//  * ---------------------------------------------------------------
//  */
//
// import {
//   AuthRequest,
//   BarrageEntity,
//   BarrageRequest,
//   CommentRequest,
//   CommentVo,
//   UserEntity,
//   UserVo,
//   VideoRequest,
//   VideoVo,
// } from "./data-contracts";
//
// import { request, RequestConfig } from "./request";
//
// class ApiService {
//   /**
//    * No description
//    *
//    * @name GetParams
//    * @request GET:/api/pn
//    */
//   static getParams = (options: RequestConfig = {}) =>
//     request<string>(`/api/api/pn`, {
//       method: "GET",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name PostParams
//    * @request POST:/api/pn
//    */
//   static postParams = (options: RequestConfig = {}) =>
//     request<string>(`/api/api/pn`, {
//       method: "POST",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name GetException
//    * @request GET:/api/pn/getException
//    */
//   static getException = (options: RequestConfig = {}) =>
//     request<string>(`/api/api/pn/getException`, {
//       method: "GET",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name GetConfigService
//    * @request GET:/api/pn/getConfigService
//    */
//   static getConfigService = (options: RequestConfig = {}) =>
//     request<string>(`/api/api/pn/getConfigService`, {
//       method: "GET",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name GetUser
//    * @request GET:/api/pn/getUser
//    */
//   static getUser = (options: RequestConfig = {}) =>
//     request<UserEntity[]>(`/api/api/pn/getUser`, {
//       method: "GET",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name SignIn
//    * @request POST:/api/pn/auth/signIn
//    */
//   static signIn = (data: AuthRequest, options: RequestConfig = {}) =>
//     request<any>(`/api/api/pn/auth/signIn`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name SignUp
//    * @request POST:/api/pn/auth/signUp
//    */
//   static signUp = (data: AuthRequest, options: RequestConfig = {}) =>
//     request<any>(`/api/api/pn/auth/signUp`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name GetProfile
//    * @request POST:/api/pn/user/profile
//    */
//   static getProfile = (options: RequestConfig = {}) =>
//     request<UserVo>(`/api/api/pn/user/profile`, {
//       method: "POST",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name FindVideoByVideoId
//    * @request POST:/api/pn/video/findVideoByVideoId
//    */
//   static findVideoByVideoId = (data: VideoRequest, options: RequestConfig = {}) =>
//     request<VideoVo>(`/api/api/pn/video/findVideoByVideoId`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name DeleteVideoByVideoId
//    * @request POST:/api/pn/video/deleteVideoByVideoId
//    */
//   static deleteVideoByVideoId = (data: VideoRequest, options: RequestConfig = {}) =>
//     request<number>(`/api/api/pn/video/deleteVideoByVideoId`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name FindVideoByAuthorId
//    * @request POST:/api/pn/video/findVideoByAuthorId
//    */
//   static findVideoByAuthorId = (data: VideoRequest, options: RequestConfig = {}) =>
//     request<VideoVo[]>(`/api/api/pn/video/findVideoByAuthorId`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name FindVideoByRecommand
//    * @request POST:/api/pn/video/findVideoByRecommand
//    */
//   static findVideoByRecommand = (data: VideoRequest, options: RequestConfig = {}) =>
//     request<VideoVo>(`/api/api/pn/video/findVideoByRecommand`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name UploadVideo
//    * @request POST:/api/pn/video/uploadVideo
//    */
//   static uploadVideo = (data: VideoRequest, options: RequestConfig = {}) =>
//     request<any>(`/api/api/pn/video/uploadVideo`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name CreateComment
//    * @request POST:/api/pn/comment/replyComment
//    */
//   static createComment = (data: CommentRequest, options: RequestConfig = {}) =>
//     request<CommentVo>(`/api/api/pn/comment/replyComment`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name FindCommentByPostId
//    * @request POST:/api/pn/comment/findCommentByPostId
//    */
//   static findCommentByPostId = (data: CommentRequest, options: RequestConfig = {}) =>
//     request<CommentVo>(`/api/api/pn/comment/findCommentByPostId`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name DeleteCommentByCommentId
//    * @request POST:/api/pn/comment/deleteCommentByCommentId
//    */
//   static deleteCommentByCommentId = (data: CommentRequest, options: RequestConfig = {}) =>
//     request<number>(`/api/api/pn/comment/deleteCommentByCommentId`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name FindBarrageBySecondRang
//    * @request POST:/api/pn/barrage/findBarrageBySecondRang
//    */
//   static findBarrageBySecondRang = (data: BarrageRequest, options: RequestConfig = {}) =>
//     request<BarrageEntity[]>(`/api/api/pn/barrage/findBarrageBySecondRang`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name SendBarrage
//    * @request POST:/api/pn/barrage/sendBarrage
//    */
//   static sendBarrage = (data: BarrageRequest, options: RequestConfig = {}) =>
//     request<number>(`/api/api/pn/barrage/sendBarrage`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
//   /**
//    * No description
//    *
//    * @name DeleteBarrageById
//    * @request POST:/api/pn/barrage/deleteBarrageById
//    */
//   static deleteBarrageById = (data: BarrageRequest, options: RequestConfig = {}) =>
//     request<number>(`/api/api/pn/barrage/deleteBarrageById`, {
//       method: "POST",
//       data: data,
//       type: "application/json",
//       format: "json",
//       ...options,
//     });
// }
//
// export default ApiService;
