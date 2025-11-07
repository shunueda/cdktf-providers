// https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortActionPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#action_identifier PortActionPermissions#action_identifier}
  */
  readonly actionIdentifier: string;
  /**
  * The ID of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#blueprint_identifier PortActionPermissions#blueprint_identifier}
  */
  readonly blueprintIdentifier?: string;
  /**
  * The permissions for the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#permissions PortActionPermissions#permissions}
  */
  readonly permissions: PortActionPermissionsPermissions;
}
export interface PortActionPermissionsPermissionsApprove {
  /**
  * The policy to use for approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#policy PortActionPermissions#policy}
  */
  readonly policy?: string;
  /**
  * The roles with approval permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#roles PortActionPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * The teams with approval permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#teams PortActionPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * The users with approval permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#users PortActionPermissions#users}
  */
  readonly users?: string[];
}

export function portActionPermissionsPermissionsApproveToTerraform(struct?: PortActionPermissionsPermissionsApprove | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portActionPermissionsPermissionsApproveToHclTerraform(struct?: PortActionPermissionsPermissionsApprove | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionPermissionsPermissionsApproveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionPermissionsPermissionsApprove | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionPermissionsPermissionsApprove | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._roles = undefined;
      this._teams = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._roles = value.roles;
      this._teams = value.teams;
      this._users = value.users;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // teams - computed: true, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
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
}
export interface PortActionPermissionsPermissionsExecute {
  /**
  * Give execution permission to the teams who own the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#owned_by_team PortActionPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * The policy to use for execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#policy PortActionPermissions#policy}
  */
  readonly policy?: string;
  /**
  * The roles with execution permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#roles PortActionPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * The teams with execution permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#teams PortActionPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * The users with execution permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#users PortActionPermissions#users}
  */
  readonly users?: string[];
}

export function portActionPermissionsPermissionsExecuteToTerraform(struct?: PortActionPermissionsPermissionsExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    policy: cdktf.stringToTerraform(struct!.policy),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portActionPermissionsPermissionsExecuteToHclTerraform(struct?: PortActionPermissionsPermissionsExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owned_by_team: {
      value: cdktf.booleanToHclTerraform(struct!.ownedByTeam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionPermissionsPermissionsExecuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionPermissionsPermissionsExecute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionPermissionsPermissionsExecute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
      this._policy = undefined;
      this._roles = undefined;
      this._teams = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ownedByTeam = value.ownedByTeam;
      this._policy = value.policy;
      this._roles = value.roles;
      this._teams = value.teams;
      this._users = value.users;
    }
  }

  // owned_by_team - computed: true, optional: true, required: false
  private _ownedByTeam?: boolean | cdktf.IResolvable; 
  public get ownedByTeam() {
    return this.getBooleanAttribute('owned_by_team');
  }
  public set ownedByTeam(value: boolean | cdktf.IResolvable) {
    this._ownedByTeam = value;
  }
  public resetOwnedByTeam() {
    this._ownedByTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownedByTeamInput() {
    return this._ownedByTeam;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // teams - computed: true, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
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
}
export interface PortActionPermissionsPermissions {
  /**
  * The permission to approve the action's runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#approve PortActionPermissions#approve}
  */
  readonly approve: PortActionPermissionsPermissionsApprove;
  /**
  * The permission to execute the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#execute PortActionPermissions#execute}
  */
  readonly execute: PortActionPermissionsPermissionsExecute;
}

export function portActionPermissionsPermissionsToTerraform(struct?: PortActionPermissionsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approve: portActionPermissionsPermissionsApproveToTerraform(struct!.approve),
    execute: portActionPermissionsPermissionsExecuteToTerraform(struct!.execute),
  }
}


export function portActionPermissionsPermissionsToHclTerraform(struct?: PortActionPermissionsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approve: {
      value: portActionPermissionsPermissionsApproveToHclTerraform(struct!.approve),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionPermissionsPermissionsApprove",
    },
    execute: {
      value: portActionPermissionsPermissionsExecuteToHclTerraform(struct!.execute),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionPermissionsPermissionsExecute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionPermissionsPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionPermissionsPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approve?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approve = this._approve?.internalValue;
    }
    if (this._execute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionPermissionsPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approve.internalValue = undefined;
      this._execute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approve.internalValue = value.approve;
      this._execute.internalValue = value.execute;
    }
  }

  // approve - computed: false, optional: false, required: true
  private _approve = new PortActionPermissionsPermissionsApproveOutputReference(this, "approve");
  public get approve() {
    return this._approve;
  }
  public putApprove(value: PortActionPermissionsPermissionsApprove) {
    this._approve.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approveInput() {
    return this._approve.internalValue;
  }

  // execute - computed: false, optional: false, required: true
  private _execute = new PortActionPermissionsPermissionsExecuteOutputReference(this, "execute");
  public get execute() {
    return this._execute;
  }
  public putExecute(value: PortActionPermissionsPermissionsExecute) {
    this._execute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions port_action_permissions}
*/
export class PortActionPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_action_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortActionPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortActionPermissions to import
  * @param importFromId The id of the existing PortActionPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortActionPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_action_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_action_permissions port_action_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortActionPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: PortActionPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'port_action_permissions',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionIdentifier = config.actionIdentifier;
    this._blueprintIdentifier = config.blueprintIdentifier;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_identifier - computed: false, optional: false, required: true
  private _actionIdentifier?: string; 
  public get actionIdentifier() {
    return this.getStringAttribute('action_identifier');
  }
  public set actionIdentifier(value: string) {
    this._actionIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdentifierInput() {
    return this._actionIdentifier;
  }

  // blueprint_identifier - computed: false, optional: true, required: false
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  public resetBlueprintIdentifier() {
    this._blueprintIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions = new PortActionPermissionsPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: PortActionPermissionsPermissions) {
    this._permissions.internalValue = value;
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
      action_identifier: cdktf.stringToTerraform(this._actionIdentifier),
      blueprint_identifier: cdktf.stringToTerraform(this._blueprintIdentifier),
      permissions: portActionPermissionsPermissionsToTerraform(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_identifier: {
        value: cdktf.stringToHclTerraform(this._actionIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_identifier: {
        value: cdktf.stringToHclTerraform(this._blueprintIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: portActionPermissionsPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionPermissionsPermissions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
