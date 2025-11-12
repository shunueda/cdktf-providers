// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#email PlatformUser#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#id PlatformUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization identifier of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#org_id PlatformUser#org_id}
  */
  readonly orgId?: string;
  /**
  * Project identifier of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#project_id PlatformUser#project_id}
  */
  readonly projectId?: string;
  /**
  * The user group of the user. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#user_groups PlatformUser#user_groups}
  */
  readonly userGroups: string[];
  /**
  * role_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#role_bindings PlatformUser#role_bindings}
  */
  readonly roleBindings?: PlatformUserRoleBindings[] | cdktf.IResolvable;
}
export interface PlatformUserRoleBindings {
  /**
  * Managed Role of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#managed_role PlatformUser#managed_role}
  */
  readonly managedRole?: boolean | cdktf.IResolvable;
  /**
  * Resource Group Identifier of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#resource_group_identifier PlatformUser#resource_group_identifier}
  */
  readonly resourceGroupIdentifier?: string;
  /**
  * Resource Group Name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#resource_group_name PlatformUser#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Role Identifier of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#role_identifier PlatformUser#role_identifier}
  */
  readonly roleIdentifier?: string;
  /**
  * Role Name Identifier of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#role_name PlatformUser#role_name}
  */
  readonly roleName?: string;
}

export function platformUserRoleBindingsToTerraform(struct?: PlatformUserRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_role: cdktf.booleanToTerraform(struct!.managedRole),
    resource_group_identifier: cdktf.stringToTerraform(struct!.resourceGroupIdentifier),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    role_identifier: cdktf.stringToTerraform(struct!.roleIdentifier),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function platformUserRoleBindingsToHclTerraform(struct?: PlatformUserRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_role: {
      value: cdktf.booleanToHclTerraform(struct!.managedRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_group_identifier: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_identifier: {
      value: cdktf.stringToHclTerraform(struct!.roleIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformUserRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformUserRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRole = this._managedRole;
    }
    if (this._resourceGroupIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupIdentifier = this._resourceGroupIdentifier;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._roleIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleIdentifier = this._roleIdentifier;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformUserRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedRole = undefined;
      this._resourceGroupIdentifier = undefined;
      this._resourceGroupName = undefined;
      this._roleIdentifier = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedRole = value.managedRole;
      this._resourceGroupIdentifier = value.resourceGroupIdentifier;
      this._resourceGroupName = value.resourceGroupName;
      this._roleIdentifier = value.roleIdentifier;
      this._roleName = value.roleName;
    }
  }

  // managed_role - computed: false, optional: true, required: false
  private _managedRole?: boolean | cdktf.IResolvable; 
  public get managedRole() {
    return this.getBooleanAttribute('managed_role');
  }
  public set managedRole(value: boolean | cdktf.IResolvable) {
    this._managedRole = value;
  }
  public resetManagedRole() {
    this._managedRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRoleInput() {
    return this._managedRole;
  }

  // resource_group_identifier - computed: false, optional: true, required: false
  private _resourceGroupIdentifier?: string; 
  public get resourceGroupIdentifier() {
    return this.getStringAttribute('resource_group_identifier');
  }
  public set resourceGroupIdentifier(value: string) {
    this._resourceGroupIdentifier = value;
  }
  public resetResourceGroupIdentifier() {
    this._resourceGroupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdentifierInput() {
    return this._resourceGroupIdentifier;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // role_identifier - computed: false, optional: true, required: false
  private _roleIdentifier?: string; 
  public get roleIdentifier() {
    return this.getStringAttribute('role_identifier');
  }
  public set roleIdentifier(value: string) {
    this._roleIdentifier = value;
  }
  public resetRoleIdentifier() {
    this._roleIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdentifierInput() {
    return this._roleIdentifier;
  }

  // role_name - computed: false, optional: true, required: false
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
}

export class PlatformUserRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : PlatformUserRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): PlatformUserRoleBindingsOutputReference {
    return new PlatformUserRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user harness_platform_user}
*/
export class PlatformUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformUser to import
  * @param importFromId The id of the existing PlatformUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_user harness_platform_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformUserConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformUserConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_user',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._userGroups = config.userGroups;
    this._roleBindings.internalValue = config.roleBindings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // externally_managed - computed: true, optional: false, required: false
  public get externallyManaged() {
    return this.getBooleanAttribute('externally_managed');
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // user_groups - computed: false, optional: false, required: true
  private _userGroups?: string[]; 
  public get userGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('user_groups'));
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // role_bindings - computed: false, optional: true, required: false
  private _roleBindings = new PlatformUserRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
  public putRoleBindings(value: PlatformUserRoleBindings[] | cdktf.IResolvable) {
    this._roleBindings.internalValue = value;
  }
  public resetRoleBindings() {
    this._roleBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingsInput() {
    return this._roleBindings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroups),
      role_bindings: cdktf.listMapper(platformUserRoleBindingsToTerraform, true)(this._roleBindings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_bindings: {
        value: cdktf.listMapperHcl(platformUserRoleBindingsToHclTerraform, true)(this._roleBindings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformUserRoleBindingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
