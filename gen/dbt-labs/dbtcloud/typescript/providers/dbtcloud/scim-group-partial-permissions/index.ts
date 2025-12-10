// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScimGroupPartialPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the existing group to manage partial permissions for. This group must already exist and is typically from an external identity provider synced via SCIM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions#group_id ScimGroupPartialPermissions#group_id}
  */
  readonly groupId: number;
  /**
  * Partial set of permissions to apply to the group. These permissions will be added to any existing permissions. Other permissions on the group will not be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions#permissions ScimGroupPartialPermissions#permissions}
  */
  readonly permissions?: ScimGroupPartialPermissionsPermissions[] | cdktf.IResolvable;
}
export interface ScimGroupPartialPermissionsPermissions {
  /**
  * Whether access should be provided for all projects or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions#all_projects ScimGroupPartialPermissions#all_projects}
  */
  readonly allProjects: boolean | cdktf.IResolvable;
  /**
  * Set of permissions to apply. The permissions allowed are the same as the ones for the `dbtcloud_group` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions#permission_set ScimGroupPartialPermissions#permission_set}
  */
  readonly permissionSet: string;
  /**
  * Project ID to apply this permission to for this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions#project_id ScimGroupPartialPermissions#project_id}
  */
  readonly projectId?: number;
  /**
  * What types of environments to apply Write permissions to. 
  * Even if Write access is restricted to some environment types, the permission set will have Read access to all environments. 
  * The values allowed are `all`, `development`, `staging`, `production` and `other`. 
  * Not setting a value is the same as selecting `all`. 
  * Not all permission sets support environment level write settings, only `analyst`, `database_admin`, `developer`, `git_admin` and `team_admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions#writable_environment_categories ScimGroupPartialPermissions#writable_environment_categories}
  */
  readonly writableEnvironmentCategories?: string[];
}

export function scimGroupPartialPermissionsPermissionsToTerraform(struct?: ScimGroupPartialPermissionsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_projects: cdktf.booleanToTerraform(struct!.allProjects),
    permission_set: cdktf.stringToTerraform(struct!.permissionSet),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    writable_environment_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.writableEnvironmentCategories),
  }
}


export function scimGroupPartialPermissionsPermissionsToHclTerraform(struct?: ScimGroupPartialPermissionsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_projects: {
      value: cdktf.booleanToHclTerraform(struct!.allProjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permission_set: {
      value: cdktf.stringToHclTerraform(struct!.permissionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writable_environment_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.writableEnvironmentCategories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScimGroupPartialPermissionsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScimGroupPartialPermissionsPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allProjects = this._allProjects;
    }
    if (this._permissionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionSet = this._permissionSet;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._writableEnvironmentCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.writableEnvironmentCategories = this._writableEnvironmentCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScimGroupPartialPermissionsPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allProjects = undefined;
      this._permissionSet = undefined;
      this._projectId = undefined;
      this._writableEnvironmentCategories = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allProjects = value.allProjects;
      this._permissionSet = value.permissionSet;
      this._projectId = value.projectId;
      this._writableEnvironmentCategories = value.writableEnvironmentCategories;
    }
  }

  // all_projects - computed: false, optional: false, required: true
  private _allProjects?: boolean | cdktf.IResolvable; 
  public get allProjects() {
    return this.getBooleanAttribute('all_projects');
  }
  public set allProjects(value: boolean | cdktf.IResolvable) {
    this._allProjects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allProjectsInput() {
    return this._allProjects;
  }

  // permission_set - computed: false, optional: false, required: true
  private _permissionSet?: string; 
  public get permissionSet() {
    return this.getStringAttribute('permission_set');
  }
  public set permissionSet(value: string) {
    this._permissionSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetInput() {
    return this._permissionSet;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // writable_environment_categories - computed: false, optional: true, required: false
  private _writableEnvironmentCategories?: string[]; 
  public get writableEnvironmentCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('writable_environment_categories'));
  }
  public set writableEnvironmentCategories(value: string[]) {
    this._writableEnvironmentCategories = value;
  }
  public resetWritableEnvironmentCategories() {
    this._writableEnvironmentCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writableEnvironmentCategoriesInput() {
    return this._writableEnvironmentCategories;
  }
}

export class ScimGroupPartialPermissionsPermissionsList extends cdktf.ComplexList {
  public internalValue? : ScimGroupPartialPermissionsPermissions[] | cdktf.IResolvable

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
  public get(index: number): ScimGroupPartialPermissionsPermissionsOutputReference {
    return new ScimGroupPartialPermissionsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions dbtcloud_scim_group_partial_permissions}
*/
export class ScimGroupPartialPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_scim_group_partial_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScimGroupPartialPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScimGroupPartialPermissions to import
  * @param importFromId The id of the existing ScimGroupPartialPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScimGroupPartialPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_scim_group_partial_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/scim_group_partial_permissions dbtcloud_scim_group_partial_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimGroupPartialPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: ScimGroupPartialPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_scim_group_partial_permissions',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new ScimGroupPartialPermissionsPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: ScimGroupPartialPermissionsPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      permissions: cdktf.listMapper(scimGroupPartialPermissionsPermissionsToTerraform, false)(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permissions: {
        value: cdktf.listMapperHcl(scimGroupPartialPermissionsPermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ScimGroupPartialPermissionsPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
