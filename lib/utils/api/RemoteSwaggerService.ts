import { fetcher } from './fetcher';

  export const createComment = fetcher<
  {
    requestBody: CommentRequest;
  },
  CommentVo
>("createComment", ({ requestBody }) => ({
  url: `/api/pn/comment/replyComment`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const deleteBarrageById = fetcher<
  {
    requestBody: BarrageRequest;
  },
  number
>("deleteBarrageById", ({ requestBody }) => ({
  url: `/api/pn/barrage/deleteBarrageById`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const deleteCommentByCommentId = fetcher<
  {
    requestBody: CommentRequest;
  },
  number
>("deleteCommentByCommentId", ({ requestBody }) => ({
  url: `/api/pn/comment/deleteCommentByCommentId`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const deleteVideoByVideoId = fetcher<
  {
    requestBody: VideoRequest;
  },
  number
>("deleteVideoByVideoId", ({ requestBody }) => ({
  url: `/api/pn/video/deleteVideoByVideoId`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const findBarrageBySecondRang = fetcher<
  {
    requestBody: BarrageRequest;
  },
  BarrageEntity[]
>("findBarrageBySecondRang", ({ requestBody }) => ({
  url: `/api/pn/barrage/findBarrageBySecondRang`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const findCommentByPostId = fetcher<
  {
    requestBody: CommentRequest;
  },
  CommentVo
>("findCommentByPostId", ({ requestBody }) => ({
  url: `/api/pn/comment/findCommentByPostId`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const findVideoByAuthorId = fetcher<
  {
    requestBody: VideoRequest;
  },
  VideoVo[]
>("findVideoByAuthorId", ({ requestBody }) => ({
  url: `/api/pn/video/findVideoByAuthorId`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const findVideoByRecommand = fetcher<
  {
    requestBody: VideoRequest;
  },
  VideoVo
>("findVideoByRecommand", ({ requestBody }) => ({
  url: `/api/pn/video/findVideoByRecommand`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const findVideoByVideoId = fetcher<
  {
    requestBody: VideoRequest;
  },
  VideoVo
>("findVideoByVideoId", ({ requestBody }) => ({
  url: `/api/pn/video/findVideoByVideoId`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const getConfigService = fetcher<undefined, string>("getConfigService", () => ({
  url: `/api/pn/getConfigService`,
  method: "GET",
}));

export const getException = fetcher<undefined, string>("getException", () => ({
  url: `/api/pn/getException`,
  method: "GET",
}));

export const getParams = fetcher<undefined, string>("getParams", () => ({ url: `/api/pn`, method: "GET" }));

export const getProfile = fetcher<undefined, UserVo>("getProfile", () => ({
  url: `/api/pn/user/profile`,
  method: "POST",
}));

export const getUser = fetcher<undefined, UserEntity[]>("getUser", () => ({ url: `/api/pn/getUser`, method: "GET" }));

export const postParams = fetcher<undefined, string>("postParams", () => ({ url: `/api/pn`, method: "POST" }));

export const sendBarrage = fetcher<
  {
    requestBody: BarrageRequest;
  },
  number
>("sendBarrage", ({ requestBody }) => ({
  url: `/api/pn/barrage/sendBarrage`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const signIn = fetcher<{
  requestBody: AuthRequest;
}>("signIn", ({ requestBody }) => ({
  url: `/api/pn/auth/signIn`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const signUp = fetcher<{
  requestBody: AuthRequest;
}>("signUp", ({ requestBody }) => ({
  url: `/api/pn/auth/signUp`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export const uploadVideo = fetcher<{
  requestBody: VideoRequest;
}>("uploadVideo", ({ requestBody }) => ({
  url: `/api/pn/video/uploadVideo`,
  method: "POST",
  data: requestBody,
  headers: { "Content-Type": "application/json" },
}));

export interface AuthRequest {
  account: string;
  password: string;
  signInType: AuthRequestSignInType;
  userId: number;
}

export type AuthRequestSignInType = "0" | "1";

export interface BarrageEntity {
  commentContent: string;
  commentatorId: number;
  createTime: string;
  id: number;
  likeCount: number;
  parentCommentId?: number;
  postId: number;
  postType: BarrageEntityPostType;
  rootCommentId?: number;
  secondAppears: number;
  unlikeCount: number;
  updateTime: string;
  validStatus: BarrageEntityValidStatus;
}

export type BarrageEntityPostType = "0" | "1";

export type BarrageEntityValidStatus = "0" | "1";

export interface BarrageRequest {
  barrageId?: number;
  commentContent?: string;
  commentatorId?: number;
  endSecond?: number;
  postId?: number;
  postType?: BarrageRequestPostType;
  secondAppears?: number;
  startSecond?: number;
}

export type BarrageRequestPostType = "0" | "1";

export interface CommentRequest {
  childrenComment?: CommentRequest[];
  commentContent?: string;
  commentId?: number;
  commentatorAvatarImageLink?: string;
  commentatorId?: number;
  commentatorName?: number;
  createTime?: string;
  likeCount?: number;
  page?: Page;
  parentCommentId?: number;
  parentCommentatorId?: number;
  parentCommentatorName?: number;
  postId?: number;
  postType?: CommentRequestPostType;
  unlikeCount?: number;
}

export type CommentRequestPostType = "0" | "1";

export interface CommentVo {
  childrenComment?: CommentVo[];
  commentContent: string;
  commentatorAvatarImageLink: string;
  commentatorId: number;
  commentatorName: string;
  createTime: string;
  detail?: CommentVo[];
  id: number;
  likeCount: number;
  page?: Page;
  parentCommentId?: number;
  parentCommentatorId?: number;
  parentCommentatorName?: string;
  rootCommentId?: number;
  unlikeCount: number;
}

export interface Page {
  pageIndex: number;
  pageSize: number;
  totalCount?: number;
  totalPageCount?: number;
}

export interface UserEntity {
  avatarImageLink: string;
  brief: string;
  createTime: string;
  id: number;
  name: string;
  updateTime: string;
  validStatus: UserEntityValidStatus;
}

export type UserEntityValidStatus = "0" | "1";

export interface UserVo {
  avatarImageLink: string;
  brief: string;
  userId: number;
  userName: string;
}

export interface VideoRequest {
  authorId?: number;
  brief?: string;
  categoryTag?: string;
  commentCount?: number;
  coverImageLink?: string;
  createTime?: string;
  followCount?: number;
  likeCount?: number;
  name?: string;
  page?: Page;
  playCount?: number;
  playLink?: string;
  secondDuration?: number;
  shareCount?: number;
  updateTime?: string;
  validStatus?: VideoRequestValidStatus;
  videoId?: number;
}

export type VideoRequestValidStatus = "0" | "1";

export interface VideoVo {
  authorAvatarImageLink: string;
  authorBrief: string;
  authorId: number;
  authorName: string;
  brief: string;
  categoryTag: string;
  commentCount: number;
  coverImageLink: string;
  createTime: string;
  detail: VideoVo[];
  followCount: number;
  id: number;
  likeCount: number;
  name: string;
  page: Page;
  playCount: number;
  playLink: string;
  secondDuration: number;
  shareCount: number;
  updateTime: string;
  validStatus: VideoVoValidStatus;
}

export type VideoVoValidStatus = "0" | "1";
