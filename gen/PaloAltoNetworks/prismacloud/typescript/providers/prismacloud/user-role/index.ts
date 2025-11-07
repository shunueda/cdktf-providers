// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accessible account group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#account_group_ids UserRole#account_group_ids}
  */
  readonly accountGroupIds?: string[];
  /**
  * Code repository IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#code_repository_ids UserRole#code_repository_ids}
  */
  readonly codeRepositoryIds?: string[];
  /**
  * Delete any associated users on role deletion. This is use useful when SSO is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#delete_associated_users UserRole#delete_associated_users}
  */
  readonly deleteAssociatedUsers?: boolean | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#description UserRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#id UserRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#name UserRole#name}
  */
  readonly name: string;
  /**
  * Resource list IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#resource_list_ids UserRole#resource_list_ids}
  */
  readonly resourceListIds?: string[];
  /**
  * Restrict dismissal access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#restrict_dismissal_access UserRole#restrict_dismissal_access}
  */
  readonly restrictDismissalAccess?: boolean | cdktf.IResolvable;
  /**
  * User role type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#role_type UserRole#role_type}
  */
  readonly roleType: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#additional_attributes UserRole#additional_attributes}
  */
  readonly additionalAttributes?: UserRoleAdditionalAttributes;
}
export interface UserRoleAccountGroups {
}

export function userRoleAccountGroupsToTerraform(struct?: UserRoleAccountGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userRoleAccountGroupsToHclTerraform(struct?: UserRoleAccountGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserRoleAccountGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserRoleAccountGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoleAccountGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class UserRoleAccountGroupsList extends cdktf.ComplexList {

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
  public get(index: number): UserRoleAccountGroupsOutputReference {
    return new UserRoleAccountGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRoleAdditionalAttributes {
  /**
  * Has defender Permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#has_defender_permissions UserRole#has_defender_permissions}
  */
  readonly hasDefenderPermissions?: boolean | cdktf.IResolvable;
  /**
  * Allows only CI Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#only_allow_ci_access UserRole#only_allow_ci_access}
  */
  readonly onlyAllowCiAccess?: boolean | cdktf.IResolvable;
  /**
  * Give access to only compute tab and access key tab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#only_allow_compute_access UserRole#only_allow_compute_access}
  */
  readonly onlyAllowComputeAccess?: boolean | cdktf.IResolvable;
  /**
  * Allow only read access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#only_allow_read_access UserRole#only_allow_read_access}
  */
  readonly onlyAllowReadAccess?: boolean | cdktf.IResolvable;
}

export function userRoleAdditionalAttributesToTerraform(struct?: UserRoleAdditionalAttributesOutputReference | UserRoleAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    has_defender_permissions: cdktf.booleanToTerraform(struct!.hasDefenderPermissions),
    only_allow_ci_access: cdktf.booleanToTerraform(struct!.onlyAllowCiAccess),
    only_allow_compute_access: cdktf.booleanToTerraform(struct!.onlyAllowComputeAccess),
    only_allow_read_access: cdktf.booleanToTerraform(struct!.onlyAllowReadAccess),
  }
}


export function userRoleAdditionalAttributesToHclTerraform(struct?: UserRoleAdditionalAttributesOutputReference | UserRoleAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    has_defender_permissions: {
      value: cdktf.booleanToHclTerraform(struct!.hasDefenderPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_allow_ci_access: {
      value: cdktf.booleanToHclTerraform(struct!.onlyAllowCiAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_allow_compute_access: {
      value: cdktf.booleanToHclTerraform(struct!.onlyAllowComputeAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_allow_read_access: {
      value: cdktf.booleanToHclTerraform(struct!.onlyAllowReadAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoleAdditionalAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserRoleAdditionalAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hasDefenderPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasDefenderPermissions = this._hasDefenderPermissions;
    }
    if (this._onlyAllowCiAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyAllowCiAccess = this._onlyAllowCiAccess;
    }
    if (this._onlyAllowComputeAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyAllowComputeAccess = this._onlyAllowComputeAccess;
    }
    if (this._onlyAllowReadAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyAllowReadAccess = this._onlyAllowReadAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoleAdditionalAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hasDefenderPermissions = undefined;
      this._onlyAllowCiAccess = undefined;
      this._onlyAllowComputeAccess = undefined;
      this._onlyAllowReadAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hasDefenderPermissions = value.hasDefenderPermissions;
      this._onlyAllowCiAccess = value.onlyAllowCiAccess;
      this._onlyAllowComputeAccess = value.onlyAllowComputeAccess;
      this._onlyAllowReadAccess = value.onlyAllowReadAccess;
    }
  }

  // has_defender_permissions - computed: true, optional: true, required: false
  private _hasDefenderPermissions?: boolean | cdktf.IResolvable; 
  public get hasDefenderPermissions() {
    return this.getBooleanAttribute('has_defender_permissions');
  }
  public set hasDefenderPermissions(value: boolean | cdktf.IResolvable) {
    this._hasDefenderPermissions = value;
  }
  public resetHasDefenderPermissions() {
    this._hasDefenderPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDefenderPermissionsInput() {
    return this._hasDefenderPermissions;
  }

  // only_allow_ci_access - computed: true, optional: true, required: false
  private _onlyAllowCiAccess?: boolean | cdktf.IResolvable; 
  public get onlyAllowCiAccess() {
    return this.getBooleanAttribute('only_allow_ci_access');
  }
  public set onlyAllowCiAccess(value: boolean | cdktf.IResolvable) {
    this._onlyAllowCiAccess = value;
  }
  public resetOnlyAllowCiAccess() {
    this._onlyAllowCiAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyAllowCiAccessInput() {
    return this._onlyAllowCiAccess;
  }

  // only_allow_compute_access - computed: true, optional: true, required: false
  private _onlyAllowComputeAccess?: boolean | cdktf.IResolvable; 
  public get onlyAllowComputeAccess() {
    return this.getBooleanAttribute('only_allow_compute_access');
  }
  public set onlyAllowComputeAccess(value: boolean | cdktf.IResolvable) {
    this._onlyAllowComputeAccess = value;
  }
  public resetOnlyAllowComputeAccess() {
    this._onlyAllowComputeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyAllowComputeAccessInput() {
    return this._onlyAllowComputeAccess;
  }

  // only_allow_read_access - computed: true, optional: true, required: false
  private _onlyAllowReadAccess?: boolean | cdktf.IResolvable; 
  public get onlyAllowReadAccess() {
    return this.getBooleanAttribute('only_allow_read_access');
  }
  public set onlyAllowReadAccess(value: boolean | cdktf.IResolvable) {
    this._onlyAllowReadAccess = value;
  }
  public resetOnlyAllowReadAccess() {
    this._onlyAllowReadAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyAllowReadAccessInput() {
    return this._onlyAllowReadAccess;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role prismacloud_user_role}
*/
export class UserRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_user_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRole to import
  * @param importFromId The id of the existing UserRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_user_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_role prismacloud_user_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRoleConfig
  */
  public constructor(scope: Construct, id: string, config: UserRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_user_role',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountGroupIds = config.accountGroupIds;
    this._codeRepositoryIds = config.codeRepositoryIds;
    this._deleteAssociatedUsers = config.deleteAssociatedUsers;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._resourceListIds = config.resourceListIds;
    this._restrictDismissalAccess = config.restrictDismissalAccess;
    this._roleType = config.roleType;
    this._additionalAttributes.internalValue = config.additionalAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_group_ids - computed: false, optional: true, required: false
  private _accountGroupIds?: string[]; 
  public get accountGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('account_group_ids'));
  }
  public set accountGroupIds(value: string[]) {
    this._accountGroupIds = value;
  }
  public resetAccountGroupIds() {
    this._accountGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupIdsInput() {
    return this._accountGroupIds;
  }

  // account_groups - computed: true, optional: false, required: false
  private _accountGroups = new UserRoleAccountGroupsList(this, "account_groups", false);
  public get accountGroups() {
    return this._accountGroups;
  }

  // associated_users - computed: true, optional: false, required: false
  public get associatedUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_users'));
  }

  // code_repository_ids - computed: false, optional: true, required: false
  private _codeRepositoryIds?: string[]; 
  public get codeRepositoryIds() {
    return cdktf.Fn.tolist(this.getListAttribute('code_repository_ids'));
  }
  public set codeRepositoryIds(value: string[]) {
    this._codeRepositoryIds = value;
  }
  public resetCodeRepositoryIds() {
    this._codeRepositoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryIdsInput() {
    return this._codeRepositoryIds;
  }

  // delete_associated_users - computed: false, optional: true, required: false
  private _deleteAssociatedUsers?: boolean | cdktf.IResolvable; 
  public get deleteAssociatedUsers() {
    return this.getBooleanAttribute('delete_associated_users');
  }
  public set deleteAssociatedUsers(value: boolean | cdktf.IResolvable) {
    this._deleteAssociatedUsers = value;
  }
  public resetDeleteAssociatedUsers() {
    this._deleteAssociatedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAssociatedUsersInput() {
    return this._deleteAssociatedUsers;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_ts - computed: true, optional: false, required: false
  public get lastModifiedTs() {
    return this.getNumberAttribute('last_modified_ts');
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

  // resource_list_ids - computed: false, optional: true, required: false
  private _resourceListIds?: string[]; 
  public get resourceListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_list_ids'));
  }
  public set resourceListIds(value: string[]) {
    this._resourceListIds = value;
  }
  public resetResourceListIds() {
    this._resourceListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceListIdsInput() {
    return this._resourceListIds;
  }

  // restrict_dismissal_access - computed: true, optional: true, required: false
  private _restrictDismissalAccess?: boolean | cdktf.IResolvable; 
  public get restrictDismissalAccess() {
    return this.getBooleanAttribute('restrict_dismissal_access');
  }
  public set restrictDismissalAccess(value: boolean | cdktf.IResolvable) {
    this._restrictDismissalAccess = value;
  }
  public resetRestrictDismissalAccess() {
    this._restrictDismissalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDismissalAccessInput() {
    return this._restrictDismissalAccess;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new UserRoleAdditionalAttributesOutputReference(this, "additional_attributes");
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: UserRoleAdditionalAttributes) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountGroupIds),
      code_repository_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._codeRepositoryIds),
      delete_associated_users: cdktf.booleanToTerraform(this._deleteAssociatedUsers),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceListIds),
      restrict_dismissal_access: cdktf.booleanToTerraform(this._restrictDismissalAccess),
      role_type: cdktf.stringToTerraform(this._roleType),
      additional_attributes: userRoleAdditionalAttributesToTerraform(this._additionalAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      code_repository_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._codeRepositoryIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      delete_associated_users: {
        value: cdktf.booleanToHclTerraform(this._deleteAssociatedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_list_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceListIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      restrict_dismissal_access: {
        value: cdktf.booleanToHclTerraform(this._restrictDismissalAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_type: {
        value: cdktf.stringToHclTerraform(this._roleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_attributes: {
        value: userRoleAdditionalAttributesToHclTerraform(this._additionalAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserRoleAdditionalAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
