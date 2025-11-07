// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScopedRolePermissionListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list#permissions ScopedRolePermissionList#permissions}
  */
  readonly permissions: ScopedRolePermissionListPermissions[] | cdktf.IResolvable;
  /**
  * The ID of the resource whose scoped role permissions belong to. Must be of OPAL_SCOPED_ROLE resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list#resource_id ScopedRolePermissionList#resource_id}
  */
  readonly resourceId: string;
}
export interface ScopedRolePermissionListPermissions {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list#allow_all ScopedRolePermissionList#allow_all}
  */
  readonly allowAll?: boolean | cdktf.IResolvable;
  /**
  * The name of the role permission. Not Null; must be one of ["READ", "READ_ASSIGNMENTS", "CREATE", "IMPORT", "EXPORT", "SYNC", "DELETE", "READ_SETTINGS", "EDIT_TAGS", "EDIT_SETTINGS", "EDIT_SYNC_SETTINGS", "EDIT_ASSIGNMENTS", "EDIT_REQUEST_CONFIGURATIONS", "EDIT_EVENT_STREAM", "ASSIGN_UAR_REVIEWERS", "SEND_REMINDERS", "STOP", "REQUEST_ON_BEHALF", "RESET_MFA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list#permission_name ScopedRolePermissionList#permission_name}
  */
  readonly permissionName?: string;
  /**
  * The IDs of the entities that this permission applies to. If empty of missing, the permission will have untargeted scope. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list#target_ids ScopedRolePermissionList#target_ids}
  */
  readonly targetIds?: string[];
  /**
  * The type of the target for the role permission. Not Null; must be one of ["RESOURCE", "CONNECTION", "GROUP", "BUNDLE", "USER", "ACCESS_REVIEW", "OWNER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list#target_type ScopedRolePermissionList#target_type}
  */
  readonly targetType?: string;
}

export function scopedRolePermissionListPermissionsToTerraform(struct?: ScopedRolePermissionListPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all: cdktf.booleanToTerraform(struct!.allowAll),
    permission_name: cdktf.stringToTerraform(struct!.permissionName),
    target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetIds),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function scopedRolePermissionListPermissionsToHclTerraform(struct?: ScopedRolePermissionListPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.allowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permission_name: {
      value: cdktf.stringToHclTerraform(struct!.permissionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScopedRolePermissionListPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScopedRolePermissionListPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAll = this._allowAll;
    }
    if (this._permissionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionName = this._permissionName;
    }
    if (this._targetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIds = this._targetIds;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScopedRolePermissionListPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAll = undefined;
      this._permissionName = undefined;
      this._targetIds = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAll = value.allowAll;
      this._permissionName = value.permissionName;
      this._targetIds = value.targetIds;
      this._targetType = value.targetType;
    }
  }

  // allow_all - computed: true, optional: true, required: false
  private _allowAll?: boolean | cdktf.IResolvable; 
  public get allowAll() {
    return this.getBooleanAttribute('allow_all');
  }
  public set allowAll(value: boolean | cdktf.IResolvable) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
  }

  // permission_name - computed: true, optional: true, required: false
  private _permissionName?: string; 
  public get permissionName() {
    return this.getStringAttribute('permission_name');
  }
  public set permissionName(value: string) {
    this._permissionName = value;
  }
  public resetPermissionName() {
    this._permissionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionNameInput() {
    return this._permissionName;
  }

  // target_ids - computed: true, optional: true, required: false
  private _targetIds?: string[]; 
  public get targetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('target_ids'));
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  public resetTargetIds() {
    this._targetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds;
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class ScopedRolePermissionListPermissionsList extends cdktf.ComplexList {
  public internalValue? : ScopedRolePermissionListPermissions[] | cdktf.IResolvable

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
  public get(index: number): ScopedRolePermissionListPermissionsOutputReference {
    return new ScopedRolePermissionListPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list opal_scoped_role_permission_list}
*/
export class ScopedRolePermissionList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_scoped_role_permission_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScopedRolePermissionList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScopedRolePermissionList to import
  * @param importFromId The id of the existing ScopedRolePermissionList that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScopedRolePermissionList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_scoped_role_permission_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/scoped_role_permission_list opal_scoped_role_permission_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScopedRolePermissionListConfig
  */
  public constructor(scope: Construct, id: string, config: ScopedRolePermissionListConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_scoped_role_permission_list',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._permissions.internalValue = config.permissions;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // permissions - computed: false, optional: false, required: true
  private _permissions = new ScopedRolePermissionListPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: ScopedRolePermissionListPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      permissions: cdktf.listMapper(scopedRolePermissionListPermissionsToTerraform, false)(this._permissions.internalValue),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      permissions: {
        value: cdktf.listMapperHcl(scopedRolePermissionListPermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ScopedRolePermissionListPermissionsList",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
