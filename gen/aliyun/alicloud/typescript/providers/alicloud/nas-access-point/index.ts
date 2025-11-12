// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NasAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#access_group NasAccessPoint#access_group}
  */
  readonly accessGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#access_point_name NasAccessPoint#access_point_name}
  */
  readonly accessPointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#enabled_ram NasAccessPoint#enabled_ram}
  */
  readonly enabledRam?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#file_system_id NasAccessPoint#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#id NasAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#root_path NasAccessPoint#root_path}
  */
  readonly rootPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#vpc_id NasAccessPoint#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#vswitch_id NasAccessPoint#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * posix_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#posix_user NasAccessPoint#posix_user}
  */
  readonly posixUser?: NasAccessPointPosixUser;
  /**
  * root_path_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#root_path_permission NasAccessPoint#root_path_permission}
  */
  readonly rootPathPermission?: NasAccessPointRootPathPermission;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#timeouts NasAccessPoint#timeouts}
  */
  readonly timeouts?: NasAccessPointTimeouts;
}
export interface NasAccessPointPosixUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#posix_group_id NasAccessPoint#posix_group_id}
  */
  readonly posixGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#posix_user_id NasAccessPoint#posix_user_id}
  */
  readonly posixUserId?: number;
}

export function nasAccessPointPosixUserToTerraform(struct?: NasAccessPointPosixUserOutputReference | NasAccessPointPosixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    posix_group_id: cdktf.numberToTerraform(struct!.posixGroupId),
    posix_user_id: cdktf.numberToTerraform(struct!.posixUserId),
  }
}


export function nasAccessPointPosixUserToHclTerraform(struct?: NasAccessPointPosixUserOutputReference | NasAccessPointPosixUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    posix_group_id: {
      value: cdktf.numberToHclTerraform(struct!.posixGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    posix_user_id: {
      value: cdktf.numberToHclTerraform(struct!.posixUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasAccessPointPosixUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NasAccessPointPosixUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._posixGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixGroupId = this._posixGroupId;
    }
    if (this._posixUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixUserId = this._posixUserId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasAccessPointPosixUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._posixGroupId = undefined;
      this._posixUserId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._posixGroupId = value.posixGroupId;
      this._posixUserId = value.posixUserId;
    }
  }

  // posix_group_id - computed: true, optional: true, required: false
  private _posixGroupId?: number; 
  public get posixGroupId() {
    return this.getNumberAttribute('posix_group_id');
  }
  public set posixGroupId(value: number) {
    this._posixGroupId = value;
  }
  public resetPosixGroupId() {
    this._posixGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixGroupIdInput() {
    return this._posixGroupId;
  }

  // posix_secondary_group_ids - computed: true, optional: false, required: false
  public get posixSecondaryGroupIds() {
    return this.getNumberListAttribute('posix_secondary_group_ids');
  }

  // posix_user_id - computed: true, optional: true, required: false
  private _posixUserId?: number; 
  public get posixUserId() {
    return this.getNumberAttribute('posix_user_id');
  }
  public set posixUserId(value: number) {
    this._posixUserId = value;
  }
  public resetPosixUserId() {
    this._posixUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserIdInput() {
    return this._posixUserId;
  }
}
export interface NasAccessPointRootPathPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#owner_group_id NasAccessPoint#owner_group_id}
  */
  readonly ownerGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#owner_user_id NasAccessPoint#owner_user_id}
  */
  readonly ownerUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#permission NasAccessPoint#permission}
  */
  readonly permission?: string;
}

export function nasAccessPointRootPathPermissionToTerraform(struct?: NasAccessPointRootPathPermissionOutputReference | NasAccessPointRootPathPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner_group_id: cdktf.numberToTerraform(struct!.ownerGroupId),
    owner_user_id: cdktf.numberToTerraform(struct!.ownerUserId),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function nasAccessPointRootPathPermissionToHclTerraform(struct?: NasAccessPointRootPathPermissionOutputReference | NasAccessPointRootPathPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner_group_id: {
      value: cdktf.numberToHclTerraform(struct!.ownerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    owner_user_id: {
      value: cdktf.numberToHclTerraform(struct!.ownerUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasAccessPointRootPathPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NasAccessPointRootPathPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerGroupId = this._ownerGroupId;
    }
    if (this._ownerUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUserId = this._ownerUserId;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasAccessPointRootPathPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ownerGroupId = undefined;
      this._ownerUserId = undefined;
      this._permission = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ownerGroupId = value.ownerGroupId;
      this._ownerUserId = value.ownerUserId;
      this._permission = value.permission;
    }
  }

  // owner_group_id - computed: true, optional: true, required: false
  private _ownerGroupId?: number; 
  public get ownerGroupId() {
    return this.getNumberAttribute('owner_group_id');
  }
  public set ownerGroupId(value: number) {
    this._ownerGroupId = value;
  }
  public resetOwnerGroupId() {
    this._ownerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGroupIdInput() {
    return this._ownerGroupId;
  }

  // owner_user_id - computed: true, optional: true, required: false
  private _ownerUserId?: number; 
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }
  public set ownerUserId(value: number) {
    this._ownerUserId = value;
  }
  public resetOwnerUserId() {
    this._ownerUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserIdInput() {
    return this._ownerUserId;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface NasAccessPointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#create NasAccessPoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#delete NasAccessPoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#update NasAccessPoint#update}
  */
  readonly update?: string;
}

export function nasAccessPointTimeoutsToTerraform(struct?: NasAccessPointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function nasAccessPointTimeoutsToHclTerraform(struct?: NasAccessPointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasAccessPointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NasAccessPointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasAccessPointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point alicloud_nas_access_point}
*/
export class NasAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nas_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NasAccessPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NasAccessPoint to import
  * @param importFromId The id of the existing NasAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NasAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nas_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_access_point alicloud_nas_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NasAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: NasAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nas_access_point',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroup = config.accessGroup;
    this._accessPointName = config.accessPointName;
    this._enabledRam = config.enabledRam;
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._rootPath = config.rootPath;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._posixUser.internalValue = config.posixUser;
    this._rootPathPermission.internalValue = config.rootPathPermission;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group - computed: false, optional: false, required: true
  private _accessGroup?: string; 
  public get accessGroup() {
    return this.getStringAttribute('access_group');
  }
  public set accessGroup(value: string) {
    this._accessGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupInput() {
    return this._accessGroup;
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // access_point_name - computed: false, optional: true, required: false
  private _accessPointName?: string; 
  public get accessPointName() {
    return this.getStringAttribute('access_point_name');
  }
  public set accessPointName(value: string) {
    this._accessPointName = value;
  }
  public resetAccessPointName() {
    this._accessPointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointNameInput() {
    return this._accessPointName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enabled_ram - computed: false, optional: true, required: false
  private _enabledRam?: boolean | cdktf.IResolvable; 
  public get enabledRam() {
    return this.getBooleanAttribute('enabled_ram');
  }
  public set enabledRam(value: boolean | cdktf.IResolvable) {
    this._enabledRam = value;
  }
  public resetEnabledRam() {
    this._enabledRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledRamInput() {
    return this._enabledRam;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // root_path - computed: true, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // posix_user - computed: false, optional: true, required: false
  private _posixUser = new NasAccessPointPosixUserOutputReference(this, "posix_user");
  public get posixUser() {
    return this._posixUser;
  }
  public putPosixUser(value: NasAccessPointPosixUser) {
    this._posixUser.internalValue = value;
  }
  public resetPosixUser() {
    this._posixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserInput() {
    return this._posixUser.internalValue;
  }

  // root_path_permission - computed: false, optional: true, required: false
  private _rootPathPermission = new NasAccessPointRootPathPermissionOutputReference(this, "root_path_permission");
  public get rootPathPermission() {
    return this._rootPathPermission;
  }
  public putRootPathPermission(value: NasAccessPointRootPathPermission) {
    this._rootPathPermission.internalValue = value;
  }
  public resetRootPathPermission() {
    this._rootPathPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathPermissionInput() {
    return this._rootPathPermission.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NasAccessPointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NasAccessPointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group: cdktf.stringToTerraform(this._accessGroup),
      access_point_name: cdktf.stringToTerraform(this._accessPointName),
      enabled_ram: cdktf.booleanToTerraform(this._enabledRam),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      root_path: cdktf.stringToTerraform(this._rootPath),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      posix_user: nasAccessPointPosixUserToTerraform(this._posixUser.internalValue),
      root_path_permission: nasAccessPointRootPathPermissionToTerraform(this._rootPathPermission.internalValue),
      timeouts: nasAccessPointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group: {
        value: cdktf.stringToHclTerraform(this._accessGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_point_name: {
        value: cdktf.stringToHclTerraform(this._accessPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_ram: {
        value: cdktf.booleanToHclTerraform(this._enabledRam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_path: {
        value: cdktf.stringToHclTerraform(this._rootPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      posix_user: {
        value: nasAccessPointPosixUserToHclTerraform(this._posixUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NasAccessPointPosixUserList",
      },
      root_path_permission: {
        value: nasAccessPointRootPathPermissionToHclTerraform(this._rootPathPermission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NasAccessPointRootPathPermissionList",
      },
      timeouts: {
        value: nasAccessPointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NasAccessPointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
