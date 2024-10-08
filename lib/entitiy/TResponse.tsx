
export class ResponseCodeConstants {
    public static readonly SUCCESS = new ResponseCodeConstants(0, "成功");
    public static readonly ERROR = new ResponseCodeConstants(-1, "系统错误");
    public static readonly NO_PERMISSION = new ResponseCodeConstants(-403, "无权限");
    public static readonly NO_LOGIN = new ResponseCodeConstants(-401, "未登录");

    code: number;
    message: string;

    private constructor(code: number, message: string) {
        this.code = code;
        this.message = message;
    }
}

export class TResponse<T> {
    code: number;
    message: string;
    data: T;
    success: boolean;

    private constructor(code: number, message: string, data: T, success: boolean) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.success = success;
    }

    public static getSuccessResponse<T>(data: T): TResponse<T> {
        return this.getResponse(data, ResponseCodeConstants.SUCCESS);
    }

    public static getErrorResponse<T>(data: T): TResponse<T> {
        return this.getResponse(data, ResponseCodeConstants.ERROR);
    }

    public static getErrorResponseDetail<T>(code: number, message: string, data: T): TResponse<T> {
        return new TResponse<T>(code, message, data, false);
    }

    public static getResponse<T>(data: T, responseCode: ResponseCodeConstants): TResponse<T> {
        return new TResponse<T>(responseCode.code, responseCode.message, data, responseCode.code >= 0);
    }
    public toString():string{
        return JSON.stringify(this);
    }
}
