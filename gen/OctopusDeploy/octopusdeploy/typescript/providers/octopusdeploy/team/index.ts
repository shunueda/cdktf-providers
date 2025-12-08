// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#can_be_deleted Team#can_be_deleted}
  */
  readonly canBeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#can_be_renamed Team#can_be_renamed}
  */
  readonly canBeRenamed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#can_change_members Team#can_change_members}
  */
  readonly canChangeMembers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#can_change_roles Team#can_change_roles}
  */
  readonly canChangeRoles?: boolean | cdktf.IResolvable;
  /**
  * The description of this team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * The space ID associated with this team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#space_id Team#space_id}
  */
  readonly spaceId?: string;
  /**
  * A list of user IDs designated to be members of this team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#users Team#users}
  */
  readonly users?: string[];
  /**
  * external_security_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#external_security_group Team#external_security_group}
  */
  readonly externalSecurityGroup?: TeamExternalSecurityGroup[] | cdktf.IResolvable;
  /**
  * user_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#user_role Team#user_role}
  */
  readonly userRole?: TeamUserRole[] | cdktf.IResolvable;
}
export interface TeamExternalSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#display_id_and_name Team#display_id_and_name}
  */
  readonly displayIdAndName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#display_name Team#display_name}
  */
  readonly displayName?: string;
  /**
  * The unique ID of this external security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function teamExternalSecurityGroupToTerraform(struct?: TeamExternalSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_id_and_name: cdktf.booleanToTerraform(struct!.displayIdAndName),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function teamExternalSecurityGroupToHclTerraform(struct?: TeamExternalSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_id_and_name: {
      value: cdktf.booleanToHclTerraform(struct!.displayIdAndName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamExternalSecurityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamExternalSecurityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayIdAndName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayIdAndName = this._displayIdAndName;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamExternalSecurityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayIdAndName = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayIdAndName = value.displayIdAndName;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_id_and_name - computed: true, optional: true, required: false
  private _displayIdAndName?: boolean | cdktf.IResolvable; 
  public get displayIdAndName() {
    return this.getBooleanAttribute('display_id_and_name');
  }
  public set displayIdAndName(value: boolean | cdktf.IResolvable) {
    this._displayIdAndName = value;
  }
  public resetDisplayIdAndName() {
    this._displayIdAndName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayIdAndNameInput() {
    return this._displayIdAndName;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class TeamExternalSecurityGroupList extends cdktf.ComplexList {
  public internalValue? : TeamExternalSecurityGroup[] | cdktf.IResolvable

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
  public get(index: number): TeamExternalSecurityGroupOutputReference {
    return new TeamExternalSecurityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamUserRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#environment_ids Team#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#project_group_ids Team#project_group_ids}
  */
  readonly projectGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#project_ids Team#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#space_id Team#space_id}
  */
  readonly spaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#tenant_ids Team#tenant_ids}
  */
  readonly tenantIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#user_role_id Team#user_role_id}
  */
  readonly userRoleId: string;
}

export function teamUserRoleToTerraform(struct?: TeamUserRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentIds),
    project_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectGroupIds),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    space_id: cdktf.stringToTerraform(struct!.spaceId),
    tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantIds),
    user_role_id: cdktf.stringToTerraform(struct!.userRoleId),
  }
}


export function teamUserRoleToHclTerraform(struct?: TeamUserRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    space_id: {
      value: cdktf.stringToHclTerraform(struct!.spaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_role_id: {
      value: cdktf.stringToHclTerraform(struct!.userRoleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamUserRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamUserRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentIds = this._environmentIds;
    }
    if (this._projectGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectGroupIds = this._projectGroupIds;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._spaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceId = this._spaceId;
    }
    if (this._tenantIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantIds = this._tenantIds;
    }
    if (this._userRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRoleId = this._userRoleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamUserRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentIds = undefined;
      this._projectGroupIds = undefined;
      this._projectIds = undefined;
      this._spaceId = undefined;
      this._tenantIds = undefined;
      this._userRoleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentIds = value.environmentIds;
      this._projectGroupIds = value.projectGroupIds;
      this._projectIds = value.projectIds;
      this._spaceId = value.spaceId;
      this._tenantIds = value.tenantIds;
      this._userRoleId = value.userRoleId;
    }
  }

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_ids'));
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_group_ids - computed: false, optional: true, required: false
  private _projectGroupIds?: string[]; 
  public get projectGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_group_ids'));
  }
  public set projectGroupIds(value: string[]) {
    this._projectGroupIds = value;
  }
  public resetProjectGroupIds() {
    this._projectGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectGroupIdsInput() {
    return this._projectGroupIds;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tenant_ids'));
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }

  // user_role_id - computed: false, optional: false, required: true
  private _userRoleId?: string; 
  public get userRoleId() {
    return this.getStringAttribute('user_role_id');
  }
  public set userRoleId(value: string) {
    this._userRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleIdInput() {
    return this._userRoleId;
  }
}

export class TeamUserRoleList extends cdktf.ComplexList {
  public internalValue? : TeamUserRole[] | cdktf.IResolvable

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
  public get(index: number): TeamUserRoleOutputReference {
    return new TeamUserRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team octopusdeploy_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/team octopusdeploy_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_team',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canBeDeleted = config.canBeDeleted;
    this._canBeRenamed = config.canBeRenamed;
    this._canChangeMembers = config.canChangeMembers;
    this._canChangeRoles = config.canChangeRoles;
    this._description = config.description;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._users = config.users;
    this._externalSecurityGroup.internalValue = config.externalSecurityGroup;
    this._userRole.internalValue = config.userRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_be_deleted - computed: true, optional: true, required: false
  private _canBeDeleted?: boolean | cdktf.IResolvable; 
  public get canBeDeleted() {
    return this.getBooleanAttribute('can_be_deleted');
  }
  public set canBeDeleted(value: boolean | cdktf.IResolvable) {
    this._canBeDeleted = value;
  }
  public resetCanBeDeleted() {
    this._canBeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeDeletedInput() {
    return this._canBeDeleted;
  }

  // can_be_renamed - computed: true, optional: true, required: false
  private _canBeRenamed?: boolean | cdktf.IResolvable; 
  public get canBeRenamed() {
    return this.getBooleanAttribute('can_be_renamed');
  }
  public set canBeRenamed(value: boolean | cdktf.IResolvable) {
    this._canBeRenamed = value;
  }
  public resetCanBeRenamed() {
    this._canBeRenamed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeRenamedInput() {
    return this._canBeRenamed;
  }

  // can_change_members - computed: true, optional: true, required: false
  private _canChangeMembers?: boolean | cdktf.IResolvable; 
  public get canChangeMembers() {
    return this.getBooleanAttribute('can_change_members');
  }
  public set canChangeMembers(value: boolean | cdktf.IResolvable) {
    this._canChangeMembers = value;
  }
  public resetCanChangeMembers() {
    this._canChangeMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canChangeMembersInput() {
    return this._canChangeMembers;
  }

  // can_change_roles - computed: true, optional: true, required: false
  private _canChangeRoles?: boolean | cdktf.IResolvable; 
  public get canChangeRoles() {
    return this.getBooleanAttribute('can_change_roles');
  }
  public set canChangeRoles(value: boolean | cdktf.IResolvable) {
    this._canChangeRoles = value;
  }
  public resetCanChangeRoles() {
    this._canChangeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canChangeRolesInput() {
    return this._canChangeRoles;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // external_security_group - computed: false, optional: true, required: false
  private _externalSecurityGroup = new TeamExternalSecurityGroupList(this, "external_security_group", false);
  public get externalSecurityGroup() {
    return this._externalSecurityGroup;
  }
  public putExternalSecurityGroup(value: TeamExternalSecurityGroup[] | cdktf.IResolvable) {
    this._externalSecurityGroup.internalValue = value;
  }
  public resetExternalSecurityGroup() {
    this._externalSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecurityGroupInput() {
    return this._externalSecurityGroup.internalValue;
  }

  // user_role - computed: false, optional: true, required: false
  private _userRole = new TeamUserRoleList(this, "user_role", true);
  public get userRole() {
    return this._userRole;
  }
  public putUserRole(value: TeamUserRole[] | cdktf.IResolvable) {
    this._userRole.internalValue = value;
  }
  public resetUserRole() {
    this._userRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleInput() {
    return this._userRole.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_be_deleted: cdktf.booleanToTerraform(this._canBeDeleted),
      can_be_renamed: cdktf.booleanToTerraform(this._canBeRenamed),
      can_change_members: cdktf.booleanToTerraform(this._canChangeMembers),
      can_change_roles: cdktf.booleanToTerraform(this._canChangeRoles),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      external_security_group: cdktf.listMapper(teamExternalSecurityGroupToTerraform, true)(this._externalSecurityGroup.internalValue),
      user_role: cdktf.listMapper(teamUserRoleToTerraform, true)(this._userRole.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_be_deleted: {
        value: cdktf.booleanToHclTerraform(this._canBeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_be_renamed: {
        value: cdktf.booleanToHclTerraform(this._canBeRenamed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_change_members: {
        value: cdktf.booleanToHclTerraform(this._canChangeMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_change_roles: {
        value: cdktf.booleanToHclTerraform(this._canChangeRoles),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      external_security_group: {
        value: cdktf.listMapperHcl(teamExternalSecurityGroupToHclTerraform, true)(this._externalSecurityGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamExternalSecurityGroupList",
      },
      user_role: {
        value: cdktf.listMapperHcl(teamUserRoleToHclTerraform, true)(this._userRole.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TeamUserRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
