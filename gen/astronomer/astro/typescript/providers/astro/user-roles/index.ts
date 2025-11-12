// https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The roles to assign to the deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#deployment_roles UserRoles#deployment_roles}
  */
  readonly deploymentRoles?: UserRolesDeploymentRoles[] | cdktf.IResolvable;
  /**
  * The role to assign to the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#organization_role UserRoles#organization_role}
  */
  readonly organizationRole: string;
  /**
  * The ID of the user to assign the roles to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#user_id UserRoles#user_id}
  */
  readonly userId: string;
  /**
  * The roles to assign to the workspaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#workspace_roles UserRoles#workspace_roles}
  */
  readonly workspaceRoles?: UserRolesWorkspaceRoles[] | cdktf.IResolvable;
}
export interface UserRolesDeploymentRoles {
  /**
  * The ID of the deployment to assign the role to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#deployment_id UserRoles#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * The role to assign to the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#role UserRoles#role}
  */
  readonly role: string;
}

export function userRolesDeploymentRolesToTerraform(struct?: UserRolesDeploymentRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function userRolesDeploymentRolesToHclTerraform(struct?: UserRolesDeploymentRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRolesDeploymentRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRolesDeploymentRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRolesDeploymentRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentId = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentId = value.deploymentId;
      this._role = value.role;
    }
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class UserRolesDeploymentRolesList extends cdktf.ComplexList {
  public internalValue? : UserRolesDeploymentRoles[] | cdktf.IResolvable

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
  public get(index: number): UserRolesDeploymentRolesOutputReference {
    return new UserRolesDeploymentRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserRolesWorkspaceRoles {
  /**
  * The role to assign to the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#role UserRoles#role}
  */
  readonly role: string;
  /**
  * The ID of the workspace to assign the role to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#workspace_id UserRoles#workspace_id}
  */
  readonly workspaceId: string;
}

export function userRolesWorkspaceRolesToTerraform(struct?: UserRolesWorkspaceRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function userRolesWorkspaceRolesToHclTerraform(struct?: UserRolesWorkspaceRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRolesWorkspaceRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRolesWorkspaceRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRolesWorkspaceRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._workspaceId = value.workspaceId;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class UserRolesWorkspaceRolesList extends cdktf.ComplexList {
  public internalValue? : UserRolesWorkspaceRoles[] | cdktf.IResolvable

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
  public get(index: number): UserRolesWorkspaceRolesOutputReference {
    return new UserRolesWorkspaceRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles astro_user_roles}
*/
export class UserRoles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_user_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRoles to import
  * @param importFromId The id of the existing UserRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_user_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/resources/user_roles astro_user_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRolesConfig
  */
  public constructor(scope: Construct, id: string, config: UserRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'astro_user_roles',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentRoles.internalValue = config.deploymentRoles;
    this._organizationRole = config.organizationRole;
    this._userId = config.userId;
    this._workspaceRoles.internalValue = config.workspaceRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_roles - computed: false, optional: true, required: false
  private _deploymentRoles = new UserRolesDeploymentRolesList(this, "deployment_roles", true);
  public get deploymentRoles() {
    return this._deploymentRoles;
  }
  public putDeploymentRoles(value: UserRolesDeploymentRoles[] | cdktf.IResolvable) {
    this._deploymentRoles.internalValue = value;
  }
  public resetDeploymentRoles() {
    this._deploymentRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentRolesInput() {
    return this._deploymentRoles.internalValue;
  }

  // organization_role - computed: false, optional: false, required: true
  private _organizationRole?: string; 
  public get organizationRole() {
    return this.getStringAttribute('organization_role');
  }
  public set organizationRole(value: string) {
    this._organizationRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRoleInput() {
    return this._organizationRole;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // workspace_roles - computed: false, optional: true, required: false
  private _workspaceRoles = new UserRolesWorkspaceRolesList(this, "workspace_roles", true);
  public get workspaceRoles() {
    return this._workspaceRoles;
  }
  public putWorkspaceRoles(value: UserRolesWorkspaceRoles[] | cdktf.IResolvable) {
    this._workspaceRoles.internalValue = value;
  }
  public resetWorkspaceRoles() {
    this._workspaceRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceRolesInput() {
    return this._workspaceRoles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_roles: cdktf.listMapper(userRolesDeploymentRolesToTerraform, false)(this._deploymentRoles.internalValue),
      organization_role: cdktf.stringToTerraform(this._organizationRole),
      user_id: cdktf.stringToTerraform(this._userId),
      workspace_roles: cdktf.listMapper(userRolesWorkspaceRolesToTerraform, false)(this._workspaceRoles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_roles: {
        value: cdktf.listMapperHcl(userRolesDeploymentRolesToHclTerraform, false)(this._deploymentRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserRolesDeploymentRolesList",
      },
      organization_role: {
        value: cdktf.stringToHclTerraform(this._organizationRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_roles: {
        value: cdktf.listMapperHcl(userRolesWorkspaceRolesToHclTerraform, false)(this._workspaceRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserRolesWorkspaceRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
