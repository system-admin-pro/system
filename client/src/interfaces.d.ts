import { ValidateStatus } from "./constant";

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
	createTime?: string;
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
}

export interface RoleInfo {
	id: string;
	appId: string;
	appName: string;
	name: string;
	description: string;
	seq: number;
	active: boolean;
	createTime: string;
}

export interface DeptInfo {
	id: string;
	name: string;
	parentId: string;
	active: boolean;
	createTime: string;

	childrenLoaded: boolean;
	hasChildren: boolean; // 从后台查数据
}

export interface ResourceInfo {
	id: string;
	parentId: string;
	appId: string;
	name: string;
	url: string;
	icon: string;
	resourceType: ResourceType;
	description: string;
	active: boolean;
	auth: string;
	createTime: string;
	childrenLoaded: boolean;
	level: number;
}

/**
 * * 1 = 男
 * * 2 = 女
 */
export type Sex = "1" | "2";
export interface UserInfo {
	id: string;
	username: string;
	nickname: string;
	deptId: string;
	deptName: string;
	password?: string;
	sex: Sex;
	phoneNumber: string;
	admin: string;
	lastSignInTime: string;
	createTime: string;
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

export interface ResourcePermission {
	id: string;
	canAccess: boolean;
	permission: string[];
}

export interface InputValidation {
	status: ValidateStatus;
	message: string;
}

export interface State {
	routing: Routing;
	session: Session;
	errors: Errors; // TODO: 被 validation 对象代替，可删除
	menus: Menu[];
	permission: ResourcePermission;
	pageView: string;
	globalTip: string; // 全局信息，通常显示在页面的中上方，用于显示保存成功等无阻碍提示信息
	// FIXME: 为每个页面定义一个接口？
	formValidation: { [key: string]: InputValidation };
	// APP 管理
	app: AppInfo;
	pagedApp: Pagination<AppInfo>;
	// 用户管理
	user: UserInfo;
	pagedUser: Pagination<UserInfo>;
	// 角色管理
	role: RoleInfo;
	pagedRole: Pagination<RoleInfo>;
	// 机构管理
	dept: DeptInfo;
	depts: DeptInfo[];
	// 资源管理
	resource: ResourceInfo;
	resources: ResourceInfo[];
	// 角色用户关联
	users: UserInfo[];
	// 角色资源关联
	roleResources: string[]; // 存放与角色关联的资源标识
}
