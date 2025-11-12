// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMeshUserPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#id ServiceMeshUserPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#sub_account_user_id ServiceMeshUserPermission#sub_account_user_id}
  */
  readonly subAccountUserId: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#permissions ServiceMeshUserPermission#permissions}
  */
  readonly permissions?: ServiceMeshUserPermissionPermissions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#timeouts ServiceMeshUserPermission#timeouts}
  */
  readonly timeouts?: ServiceMeshUserPermissionTimeouts;
}
export interface ServiceMeshUserPermissionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#is_custom ServiceMeshUserPermission#is_custom}
  */
  readonly isCustom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#is_ram_role ServiceMeshUserPermission#is_ram_role}
  */
  readonly isRamRole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#role_name ServiceMeshUserPermission#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#role_type ServiceMeshUserPermission#role_type}
  */
  readonly roleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#service_mesh_id ServiceMeshUserPermission#service_mesh_id}
  */
  readonly serviceMeshId?: string;
}

export function serviceMeshUserPermissionPermissionsToTerraform(struct?: ServiceMeshUserPermissionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_custom: cdktf.booleanToTerraform(struct!.isCustom),
    is_ram_role: cdktf.booleanToTerraform(struct!.isRamRole),
    role_name: cdktf.stringToTerraform(struct!.roleName),
    role_type: cdktf.stringToTerraform(struct!.roleType),
    service_mesh_id: cdktf.stringToTerraform(struct!.serviceMeshId),
  }
}


export function serviceMeshUserPermissionPermissionsToHclTerraform(struct?: ServiceMeshUserPermissionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_custom: {
      value: cdktf.booleanToHclTerraform(struct!.isCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_ram_role: {
      value: cdktf.booleanToHclTerraform(struct!.isRamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_type: {
      value: cdktf.stringToHclTerraform(struct!.roleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_mesh_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceMeshId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshUserPermissionPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServiceMeshUserPermissionPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustom = this._isCustom;
    }
    if (this._isRamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRamRole = this._isRamRole;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    if (this._serviceMeshId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMeshId = this._serviceMeshId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshUserPermissionPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isCustom = undefined;
      this._isRamRole = undefined;
      this._roleName = undefined;
      this._roleType = undefined;
      this._serviceMeshId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isCustom = value.isCustom;
      this._isRamRole = value.isRamRole;
      this._roleName = value.roleName;
      this._roleType = value.roleType;
      this._serviceMeshId = value.serviceMeshId;
    }
  }

  // is_custom - computed: true, optional: true, required: false
  private _isCustom?: boolean | cdktf.IResolvable; 
  public get isCustom() {
    return this.getBooleanAttribute('is_custom');
  }
  public set isCustom(value: boolean | cdktf.IResolvable) {
    this._isCustom = value;
  }
  public resetIsCustom() {
    this._isCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomInput() {
    return this._isCustom;
  }

  // is_ram_role - computed: true, optional: true, required: false
  private _isRamRole?: boolean | cdktf.IResolvable; 
  public get isRamRole() {
    return this.getBooleanAttribute('is_ram_role');
  }
  public set isRamRole(value: boolean | cdktf.IResolvable) {
    this._isRamRole = value;
  }
  public resetIsRamRole() {
    this._isRamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRamRoleInput() {
    return this._isRamRole;
  }

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_type - computed: true, optional: true, required: false
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  public resetRoleType() {
    this._roleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // service_mesh_id - computed: true, optional: true, required: false
  private _serviceMeshId?: string; 
  public get serviceMeshId() {
    return this.getStringAttribute('service_mesh_id');
  }
  public set serviceMeshId(value: string) {
    this._serviceMeshId = value;
  }
  public resetServiceMeshId() {
    this._serviceMeshId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMeshIdInput() {
    return this._serviceMeshId;
  }
}

export class ServiceMeshUserPermissionPermissionsList extends cdktf.ComplexList {
  public internalValue? : ServiceMeshUserPermissionPermissions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceMeshUserPermissionPermissionsOutputReference {
    return new ServiceMeshUserPermissionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshUserPermissionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#create ServiceMeshUserPermission#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#update ServiceMeshUserPermission#update}
  */
  readonly update?: string;
}

export function serviceMeshUserPermissionTimeoutsToTerraform(struct?: ServiceMeshUserPermissionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceMeshUserPermissionTimeoutsToHclTerraform(struct?: ServiceMeshUserPermissionTimeouts | cdktf.IResolvable): any {
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

export class ServiceMeshUserPermissionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceMeshUserPermissionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshUserPermissionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission alicloud_service_mesh_user_permission}
*/
export class ServiceMeshUserPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_service_mesh_user_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceMeshUserPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceMeshUserPermission to import
  * @param importFromId The id of the existing ServiceMeshUserPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceMeshUserPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_service_mesh_user_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/service_mesh_user_permission alicloud_service_mesh_user_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMeshUserPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMeshUserPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_service_mesh_user_permission',
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
    this._id = config.id;
    this._subAccountUserId = config.subAccountUserId;
    this._permissions.internalValue = config.permissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sub_account_user_id - computed: false, optional: false, required: true
  private _subAccountUserId?: string; 
  public get subAccountUserId() {
    return this.getStringAttribute('sub_account_user_id');
  }
  public set subAccountUserId(value: string) {
    this._subAccountUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subAccountUserIdInput() {
    return this._subAccountUserId;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new ServiceMeshUserPermissionPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: ServiceMeshUserPermissionPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceMeshUserPermissionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceMeshUserPermissionTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      sub_account_user_id: cdktf.stringToTerraform(this._subAccountUserId),
      permissions: cdktf.listMapper(serviceMeshUserPermissionPermissionsToTerraform, true)(this._permissions.internalValue),
      timeouts: serviceMeshUserPermissionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_account_user_id: {
        value: cdktf.stringToHclTerraform(this._subAccountUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(serviceMeshUserPermissionPermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceMeshUserPermissionPermissionsList",
      },
      timeouts: {
        value: serviceMeshUserPermissionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceMeshUserPermissionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
