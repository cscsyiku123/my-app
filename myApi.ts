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

export interface VideoRequest {
  id: number;
  videoId: number;
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
  validStatus: 0 | 1;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  updateTime: string;
}

export interface VideoEntity {
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
  validStatus: 0 | 1;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  updateTime: string;
}

export interface Page {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPageCount: number;
}

export interface CommentRequest {
  commentId: number;
  commentatorId: number;
  commentatorName: number;
  commentatorAvatarImageLink: string;
  commentContent: string;
  likeCount: number;
  unlikeCount: number;
  childrenComment: CommentRequest[];
  parentCommentId?: number;
  parentCommentatorId: number;
  parentCommentatorName: number;
  /** @format date-time */
  create_time: string;
  page: Page;
  postId: number;
  postType: number;
}

export interface CommentEntity {
  id: number;
  commentatorId: number;
  likeCount: number;
  unlikeCount: number;
  commentContent: string;
  postId: number;
  postType: 0 | 1;
  parentCommentId?: number;
  parentCommentatorId?: number;
  rootCommentId?: number;
  validStatus: 0 | 1;
  /** @format date-time */
  createTime: string;
  /** @format date-time */
  updateTime: string;
}

export interface CommentVo {
  id: number;
  commentatorId: number;
  commentatorName: string;
  commentatorAvatarImageLink: string;
  commentContent: string;
  likeCount: number;
  unlikeCount: number;
  childrenComment: CommentVo[];
  parentCommentId?: number;
  parentCommentatorId: number;
  parentCommentatorName: string;
  /** @format date-time */
  createTime: string;
  page: Page;
}

export interface BarrageRequest {
  startSecond: number;
  endSecond: number;
  postId: number;
  postType: 0 | 1;
  secondAppears: number;
  commentContent: string;
  commentatorId: number;
  barrageId: number;
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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title No title
 * @version 1.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @name AppControllerGetParams
     * @request GET:/api/pn
     */
    appControllerGetParams: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/pn`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AppControllerPostParams
     * @request POST:/api/pn
     */
    appControllerPostParams: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/pn`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AppControllerGetException
     * @request GET:/api/pn/getException
     */
    appControllerGetException: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/pn/getException`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AppControllerGetConfigService
     * @request GET:/api/pn/getConfigService
     */
    appControllerGetConfigService: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/pn/getConfigService`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AppControllerGetUser
     * @request GET:/api/pn/getUser
     */
    appControllerGetUser: (params: RequestParams = {}) =>
      this.request<UserEntity[], any>({
        path: `/api/pn/getUser`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerSignIn
     * @request POST:/api/pn/auth/signIn
     */
    authControllerSignIn: (data: AuthRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/pn/auth/signIn`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerSignUp
     * @request POST:/api/pn/auth/signUp
     */
    authControllerSignUp: (data: AuthRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/pn/auth/signUp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerGetProfile
     * @request GET:/api/pn/auth/profile
     */
    authControllerGetProfile: (params: RequestParams = {}) =>
      this.request<UserEntity, any>({
        path: `/api/pn/auth/profile`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name VideoControllerFindVideoByVideoId
     * @request POST:/api/pn/video/findVideoByVideoId
     */
    videoControllerFindVideoByVideoId: (data: VideoRequest, params: RequestParams = {}) =>
      this.request<VideoEntity, any>({
        path: `/api/pn/video/findVideoByVideoId`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name VideoControllerDeleteVideoByVideoId
     * @request POST:/api/pn/video/deleteVideoByVideoId
     */
    videoControllerDeleteVideoByVideoId: (data: VideoRequest, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pn/video/deleteVideoByVideoId`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name VideoControllerFindVideoByAuthorId
     * @request POST:/api/pn/video/findVideoByAuthorId
     */
    videoControllerFindVideoByAuthorId: (data: VideoRequest, params: RequestParams = {}) =>
      this.request<VideoEntity[], any>({
        path: `/api/pn/video/findVideoByAuthorId`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name VideoControllerUploadVideo
     * @request POST:/api/pn/video/uploadVideo
     */
    videoControllerUploadVideo: (data: VideoRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/pn/video/uploadVideo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentControllerCreateComment
     * @request POST:/api/pn/comment/replyComment
     */
    commentControllerCreateComment: (data: CommentRequest, params: RequestParams = {}) =>
      this.request<CommentEntity, any>({
        path: `/api/pn/comment/replyComment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentControllerFindCommentByPostId
     * @request POST:/api/pn/comment/findCommentByPostId
     */
    commentControllerFindCommentByPostId: (data: CommentRequest, params: RequestParams = {}) =>
      this.request<CommentVo[], any>({
        path: `/api/pn/comment/findCommentByPostId`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentControllerDeleteCommentByCommentId
     * @request POST:/api/pn/comment/deleteCommentByCommentId
     */
    commentControllerDeleteCommentByCommentId: (data: CommentRequest, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pn/comment/deleteCommentByCommentId`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BarrageControllerFindBarrageBySecondRang
     * @request POST:/api/pn/barrage/findBarrageBySecondRang
     */
    barrageControllerFindBarrageBySecondRang: (data: BarrageRequest, params: RequestParams = {}) =>
      this.request<BarrageEntity[], any>({
        path: `/api/pn/barrage/findBarrageBySecondRang`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BarrageControllerSendBarrage
     * @request POST:/api/pn/barrage/sendBarrage
     */
    barrageControllerSendBarrage: (data: BarrageRequest, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/api/pn/barrage/sendBarrage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BarrageControllerDeleteBarrageById
     * @request POST:/api/pn/barrage/deleteBarrageById
     */
    barrageControllerDeleteBarrageById: (data: BarrageRequest, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pn/barrage/deleteBarrageById`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
