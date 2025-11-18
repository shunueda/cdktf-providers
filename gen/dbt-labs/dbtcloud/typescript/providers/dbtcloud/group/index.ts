// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the group will be assigned by default to users. The value needs to be the same for all partial permissions for the same group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#assign_by_default Group#assign_by_default}
  */
  readonly assignByDefault?: boolean | cdktf.IResolvable;
  /**
  * The name of the group. This is used to identify an existing group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Mapping groups from the IdP. At the moment the complete list needs to be provided in each partial permission for the same group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#sso_mapping_groups Group#sso_mapping_groups}
  */
  readonly ssoMappingGroups?: string[];
  /**
  * group_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#group_permissions Group#group_permissions}
  */
  readonly groupPermissions?: GroupGroupPermissions[] | cdktf.IResolvable;
}
export interface GroupGroupPermissions {
  /**
  * Whether access should be provided for all projects or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#all_projects Group#all_projects}
  */
  readonly allProjects: boolean | cdktf.IResolvable;
  /**
  * Set of permissions to apply. The permissions allowed are the same as the ones for the `dbtcloud_group` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#permission_set Group#permission_set}
  */
  readonly permissionSet: string;
  /**
  * Project ID to apply this permission to for this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#project_id Group#project_id}
  */
  readonly projectId?: number;
  /**
  * What types of environments to apply Write permissions to. 
  * Even if Write access is restricted to some environment types, the permission set will have Read access to all environments. 
  * The values allowed are `all`, `development`, `staging`, `production` and `other`. 
  * Not setting a value is the same as selecting `all`. 
  * Not all permission sets support environment level write settings, only `analyst`, `database_admin`, `developer`, `git_admin` and `team_admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#writable_environment_categories Group#writable_environment_categories}
  */
  readonly writableEnvironmentCategories?: string[];
}

export function groupGroupPermissionsToTerraform(struct?: GroupGroupPermissions | cdktf.IResolvable): any {
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


export function groupGroupPermissionsToHclTerraform(struct?: GroupGroupPermissions | cdktf.IResolvable): any {
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

export class GroupGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGroupPermissions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupGroupPermissions | cdktf.IResolvable | undefined) {
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

  // writable_environment_categories - computed: true, optional: true, required: false
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

export class GroupGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupGroupPermissionsOutputReference {
    return new GroupGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group dbtcloud_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/group dbtcloud_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_group',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignByDefault = config.assignByDefault;
    this._name = config.name;
    this._ssoMappingGroups = config.ssoMappingGroups;
    this._groupPermissions.internalValue = config.groupPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_by_default - computed: true, optional: true, required: false
  private _assignByDefault?: boolean | cdktf.IResolvable; 
  public get assignByDefault() {
    return this.getBooleanAttribute('assign_by_default');
  }
  public set assignByDefault(value: boolean | cdktf.IResolvable) {
    this._assignByDefault = value;
  }
  public resetAssignByDefault() {
    this._assignByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignByDefaultInput() {
    return this._assignByDefault;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sso_mapping_groups - computed: true, optional: true, required: false
  private _ssoMappingGroups?: string[]; 
  public get ssoMappingGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('sso_mapping_groups'));
  }
  public set ssoMappingGroups(value: string[]) {
    this._ssoMappingGroups = value;
  }
  public resetSsoMappingGroups() {
    this._ssoMappingGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoMappingGroupsInput() {
    return this._ssoMappingGroups;
  }

  // group_permissions - computed: false, optional: true, required: false
  private _groupPermissions = new GroupGroupPermissionsList(this, "group_permissions", true);
  public get groupPermissions() {
    return this._groupPermissions;
  }
  public putGroupPermissions(value: GroupGroupPermissions[] | cdktf.IResolvable) {
    this._groupPermissions.internalValue = value;
  }
  public resetGroupPermissions() {
    this._groupPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPermissionsInput() {
    return this._groupPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_by_default: cdktf.booleanToTerraform(this._assignByDefault),
      name: cdktf.stringToTerraform(this._name),
      sso_mapping_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ssoMappingGroups),
      group_permissions: cdktf.listMapper(groupGroupPermissionsToTerraform, true)(this._groupPermissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_by_default: {
        value: cdktf.booleanToHclTerraform(this._assignByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_mapping_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ssoMappingGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_permissions: {
        value: cdktf.listMapperHcl(groupGroupPermissionsToHclTerraform, true)(this._groupPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupGroupPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
