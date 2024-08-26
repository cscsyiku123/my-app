/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserEntity {
  id: number;
  name: string;
  avatarImageLink: string;
  brief: string;
  validStatus: 0 | 1;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  updateTime: string;
}

export interface AuthRequest {
  signInType: 0 | 1;
  account: string;
  password: string;
  userId: number;
}

export interface UserVo {
  userId: number;
  userName: string;
  avatarImageLink: string;
  brief: string;
}

export interface Page {
  pageIndex: number;
  pageSize: number;
  totalCount?: number;
  totalPageCount?: number;
}

export interface VideoRequest {
  videoId?: number;
  name?: string;
  brief?: string;
  coverImageLink?: string;
  categoryTag?: string;
  secondDuration?: number;
  playCount?: number;
  likeCount?: number;
  followCount?: number;
  commentCount?: number;
  shareCount?: number;
  playLink?: string;
  authorId?: number;
  validStatus?: 0 | 1;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  updateTime?: string;
  page?: Page;
}

export interface VideoVo {
  id: number;
  name: string;
  brief: string;
  coverImageLink: string;
  categoryTag: string;
  secondDuration: number;
  playCount: number;
  likeCount: number;
  followCount: number;
  commentCount: number;
  shareCount: number;
  playLink: string;
  authorId: number;
  authorName: string;
  authorAvatarImageLink: string;
  authorBrief: string;
  validStatus: 0 | 1;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  updateTime: string;
  page: Page;
  detail: VideoVo[];
}

export interface CommentRequest {
  commentId?: number;
  commentatorId?: number;
  commentatorName?: number;
  commentatorAvatarImageLink?: string;
  commentContent?: string;
  likeCount?: number;
  unlikeCount?: number;
  childrenComment?: CommentRequest[];
  parentCommentId?: number;
  parentCommentatorId?: number;
  parentCommentatorName?: number;
  /** @format date-time */
  createTime?: string;
  page?: Page;
  postId?: number;
  postType?: 0 | 1;
}

export interface CommentVo {
  id: number;
  commentatorId: number;
  commentatorName: string;
  commentatorAvatarImageLink: string;
  commentContent: string;
  likeCount: number;
  unlikeCount: number;
  childrenComment?: CommentVo[];
  parentCommentId?: number;
  parentCommentatorId?: number;
  parentCommentatorName?: string;
  /** @format date-time */
  createTime: string;
  page?: Page;
  rootCommentId?: number;
  detail?: CommentVo[];
}

export interface BarrageRequest {
  startSecond?: number;
  endSecond?: number;
  postId?: number;
  postType?: 0 | 1;
  secondAppears?: number;
  commentContent?: string;
  commentatorId?: number;
  barrageId?: number;
}

export interface BarrageEntity {
  id: number;
  commentatorId: number;
  likeCount: number;
  unlikeCount: number;
  commentContent: string;
  postId: number;
  postType: 0 | 1;
  parentCommentId?: number;
  rootCommentId?: number;
  secondAppears: number;
  validStatus: 0 | 1;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  updateTime: string;
}
