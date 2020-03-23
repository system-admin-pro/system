export interface Session {
    username: string;
    token: string;
}

export interface AppInfo {
    id: string;
    name: string;
    icon?: string;
    url?: string;
    description?: string;
    createTime?: string
}

export interface Pagination<T> {
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
    content: T[];
}

export interface ResourceProperties {
    resId: string;
    page?: number;
}

export interface RoleInfo {
    id: string;
    appId: string;
    name: string;
    description: string;
    seq: number;
    active: boolean;
    createTime: string
}

/**
 * * 1 = 男
 * * 2 = 女
 */
export type Sex = "1" | "2";
export interface UserInfo{
    id: string;
    username: string;
    nickname: string;
    sex: Sex;
    phoneNumber: string;
    admin: string;
    lastSignInTime: string;
    createTime: string
}

/**
 * * `01` 表示 `功能模块`
 * * `02` 表示 `程序模块`
 * * `03` 表示 `操作按钮`
 */
export type ResourceType = "01" | "02" | "03";
export interface Menu {
    id: string;
    appId: string;
    name: string;
    parentId: string;
    url: string;
    icon: string;
    type: ResourceType;
    childrenLoaded: boolean;
}

export interface Routing {
	outlet: string;
	params: { [index: string]: string };
}

//[index: string]: string[];
export interface Errors {
    globalErrors: string[];
    [index: string]: string[];
}

export interface State {
    routing: Routing;
    session: Session;
    errors: Errors;
    menus: Menu[];
    // FIXME: 为每个页面定义一个接口？
    app: AppInfo
}