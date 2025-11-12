// https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortBlueprintPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#blueprint_identifier PortBlueprintPermissions#blueprint_identifier}
  */
  readonly blueprintIdentifier: string;
  /**
  * Entities permissions to read the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#entities PortBlueprintPermissions#entities}
  */
  readonly entities: PortBlueprintPermissionsEntities;
}
export interface PortBlueprintPermissionsEntitiesRegister {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with register permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with register permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with register permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesRegisterToTerraform(struct?: PortBlueprintPermissionsEntitiesRegister | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesRegisterToHclTerraform(struct?: PortBlueprintPermissionsEntitiesRegister | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesRegisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesRegister | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesRegister | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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
export interface PortBlueprintPermissionsEntitiesUnregister {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with unregister permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with unregister permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with unregister permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesUnregisterToTerraform(struct?: PortBlueprintPermissionsEntitiesUnregister | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesUnregisterToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUnregister | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesUnregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUnregister | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesUnregister | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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
export interface PortBlueprintPermissionsEntitiesUpdate {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with update permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with update permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with update permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesUpdateToTerraform(struct?: PortBlueprintPermissionsEntitiesUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesUpdateToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUpdate | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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
export interface PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIcon {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with update `$icon` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with update `$icon` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with update `$icon` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesIconToTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesIconToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIcon | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIcon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIcon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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
export interface PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifier {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with update `$identifier` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with update `$identifier` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with update `$identifier` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifierToTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifierToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifier | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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
export interface PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeam {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with update `$team` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with update `$team` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with update `$team` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeamToTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeamToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeam | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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
export interface PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitle {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with update `$title` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with update `$title` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with update `$title` metadata permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitleToTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitleToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitle | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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
export interface PortBlueprintPermissionsEntitiesUpdateMetadataProperties {
  /**
  * The entity's icon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#icon PortBlueprintPermissions#icon}
  */
  readonly icon: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIcon;
  /**
  * Unique Entity identifier, used for API calls, programmatic access and distinguishing between different entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#identifier PortBlueprintPermissions#identifier}
  */
  readonly identifier: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifier;
  /**
  * The team this entity belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#team PortBlueprintPermissions#team}
  */
  readonly team: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeam;
  /**
  * A human-readable name for the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#title PortBlueprintPermissions#title}
  */
  readonly title: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitle;
}

export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesToTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesIconToTerraform(struct!.icon),
    identifier: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifierToTerraform(struct!.identifier),
    team: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeamToTerraform(struct!.team),
    title: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitleToTerraform(struct!.title),
  }
}


export function portBlueprintPermissionsEntitiesUpdateMetadataPropertiesToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateMetadataProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon: {
      value: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesIconToHclTerraform(struct!.icon),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIcon",
    },
    identifier: {
      value: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifierToHclTerraform(struct!.identifier),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifier",
    },
    team: {
      value: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeamToHclTerraform(struct!.team),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeam",
    },
    title: {
      value: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitleToHclTerraform(struct!.title),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUpdateMetadataProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon?.internalValue;
    }
    if (this._identifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier?.internalValue;
    }
    if (this._team?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPermissionsEntitiesUpdateMetadataProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icon.internalValue = undefined;
      this._identifier.internalValue = undefined;
      this._team.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icon.internalValue = value.icon;
      this._identifier.internalValue = value.identifier;
      this._team.internalValue = value.team;
      this._title.internalValue = value.title;
    }
  }

  // icon - computed: false, optional: false, required: true
  private _icon = new PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIcon) {
    this._icon.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier = new PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifierOutputReference(this, "identifier");
  public get identifier() {
    return this._identifier;
  }
  public putIdentifier(value: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesIdentifier) {
    this._identifier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier.internalValue;
  }

  // team - computed: false, optional: false, required: true
  private _team = new PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeamOutputReference(this, "team");
  public get team() {
    return this._team;
  }
  public putTeam(value: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTeam) {
    this._team.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team.internalValue;
  }

  // title - computed: false, optional: false, required: true
  private _title = new PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesTitle) {
    this._title.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }
}
export interface PortBlueprintPermissionsEntitiesUpdateProperties {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with update specific property permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with update specific property permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with update specific property permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesUpdatePropertiesToTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesUpdatePropertiesToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateProperties | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesUpdatePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUpdateProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesUpdateProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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

export class PortBlueprintPermissionsEntitiesUpdatePropertiesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintPermissionsEntitiesUpdateProperties } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintPermissionsEntitiesUpdatePropertiesOutputReference {
    return new PortBlueprintPermissionsEntitiesUpdatePropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintPermissionsEntitiesUpdateRelations {
  /**
  * Owned by team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#owned_by_team PortBlueprintPermissions#owned_by_team}
  */
  readonly ownedByTeam?: boolean | cdktf.IResolvable;
  /**
  * Roles with update specific relation permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#roles PortBlueprintPermissions#roles}
  */
  readonly roles?: string[];
  /**
  * Teams with update specific relation permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#teams PortBlueprintPermissions#teams}
  */
  readonly teams?: string[];
  /**
  * Users with update specific relation permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#users PortBlueprintPermissions#users}
  */
  readonly users?: string[];
}

export function portBlueprintPermissionsEntitiesUpdateRelationsToTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owned_by_team: cdktf.booleanToTerraform(struct!.ownedByTeam),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portBlueprintPermissionsEntitiesUpdateRelationsToHclTerraform(struct?: PortBlueprintPermissionsEntitiesUpdateRelations | cdktf.IResolvable): any {
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

export class PortBlueprintPermissionsEntitiesUpdateRelationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortBlueprintPermissionsEntitiesUpdateRelations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownedByTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownedByTeam = this._ownedByTeam;
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

  public set internalValue(value: PortBlueprintPermissionsEntitiesUpdateRelations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownedByTeam = undefined;
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

  // roles - computed: false, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
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

  // users - computed: false, optional: true, required: false
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

export class PortBlueprintPermissionsEntitiesUpdateRelationsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortBlueprintPermissionsEntitiesUpdateRelations } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortBlueprintPermissionsEntitiesUpdateRelationsOutputReference {
    return new PortBlueprintPermissionsEntitiesUpdateRelationsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortBlueprintPermissionsEntities {
  /**
  * Manage permissions to register entities of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#register PortBlueprintPermissions#register}
  */
  readonly register: PortBlueprintPermissionsEntitiesRegister;
  /**
  * Manage permissions to unregister entities of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#unregister PortBlueprintPermissions#unregister}
  */
  readonly unregister: PortBlueprintPermissionsEntitiesUnregister;
  /**
  * Manage permissions to update entities of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#update PortBlueprintPermissions#update}
  */
  readonly update: PortBlueprintPermissionsEntitiesUpdate;
  /**
  * Manage permissions to the metadata properties (`$icon|$title|$team|$identifier`)
  * These are translated to the updateProperties in the Port Api, proxied since we can't have Terraform properties starting with `$`signs.
  * See [here](https://docs.getport.io/build-your-software-catalog/customize-integrations/configure-data-model/setup-blueprint/properties/meta-properties/) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#update_metadata_properties PortBlueprintPermissions#update_metadata_properties}
  */
  readonly updateMetadataProperties: PortBlueprintPermissionsEntitiesUpdateMetadataProperties;
  /**
  * Manage permissions to update the entity properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#update_properties PortBlueprintPermissions#update_properties}
  */
  readonly updateProperties?: { [key: string]: PortBlueprintPermissionsEntitiesUpdateProperties } | cdktf.IResolvable;
  /**
  * Manage permissions to update the entity relations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#update_relations PortBlueprintPermissions#update_relations}
  */
  readonly updateRelations?: { [key: string]: PortBlueprintPermissionsEntitiesUpdateRelations } | cdktf.IResolvable;
}

export function portBlueprintPermissionsEntitiesToTerraform(struct?: PortBlueprintPermissionsEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    register: portBlueprintPermissionsEntitiesRegisterToTerraform(struct!.register),
    unregister: portBlueprintPermissionsEntitiesUnregisterToTerraform(struct!.unregister),
    update: portBlueprintPermissionsEntitiesUpdateToTerraform(struct!.update),
    update_metadata_properties: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesToTerraform(struct!.updateMetadataProperties),
    update_properties: cdktf.hashMapper(portBlueprintPermissionsEntitiesUpdatePropertiesToTerraform)(struct!.updateProperties),
    update_relations: cdktf.hashMapper(portBlueprintPermissionsEntitiesUpdateRelationsToTerraform)(struct!.updateRelations),
  }
}


export function portBlueprintPermissionsEntitiesToHclTerraform(struct?: PortBlueprintPermissionsEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    register: {
      value: portBlueprintPermissionsEntitiesRegisterToHclTerraform(struct!.register),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPermissionsEntitiesRegister",
    },
    unregister: {
      value: portBlueprintPermissionsEntitiesUnregisterToHclTerraform(struct!.unregister),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPermissionsEntitiesUnregister",
    },
    update: {
      value: portBlueprintPermissionsEntitiesUpdateToHclTerraform(struct!.update),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPermissionsEntitiesUpdate",
    },
    update_metadata_properties: {
      value: portBlueprintPermissionsEntitiesUpdateMetadataPropertiesToHclTerraform(struct!.updateMetadataProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "PortBlueprintPermissionsEntitiesUpdateMetadataProperties",
    },
    update_properties: {
      value: cdktf.hashMapperHcl(portBlueprintPermissionsEntitiesUpdatePropertiesToHclTerraform)(struct!.updateProperties),
      isBlock: true,
      type: "map",
      storageClassType: "PortBlueprintPermissionsEntitiesUpdatePropertiesMap",
    },
    update_relations: {
      value: cdktf.hashMapperHcl(portBlueprintPermissionsEntitiesUpdateRelationsToHclTerraform)(struct!.updateRelations),
      isBlock: true,
      type: "map",
      storageClassType: "PortBlueprintPermissionsEntitiesUpdateRelationsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortBlueprintPermissionsEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBlueprintPermissionsEntities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._register?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.register = this._register?.internalValue;
    }
    if (this._unregister?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unregister = this._unregister?.internalValue;
    }
    if (this._update?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update?.internalValue;
    }
    if (this._updateMetadataProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMetadataProperties = this._updateMetadataProperties?.internalValue;
    }
    if (this._updateProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateProperties = this._updateProperties?.internalValue;
    }
    if (this._updateRelations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateRelations = this._updateRelations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBlueprintPermissionsEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._register.internalValue = undefined;
      this._unregister.internalValue = undefined;
      this._update.internalValue = undefined;
      this._updateMetadataProperties.internalValue = undefined;
      this._updateProperties.internalValue = undefined;
      this._updateRelations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._register.internalValue = value.register;
      this._unregister.internalValue = value.unregister;
      this._update.internalValue = value.update;
      this._updateMetadataProperties.internalValue = value.updateMetadataProperties;
      this._updateProperties.internalValue = value.updateProperties;
      this._updateRelations.internalValue = value.updateRelations;
    }
  }

  // register - computed: false, optional: false, required: true
  private _register = new PortBlueprintPermissionsEntitiesRegisterOutputReference(this, "register");
  public get register() {
    return this._register;
  }
  public putRegister(value: PortBlueprintPermissionsEntitiesRegister) {
    this._register.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register.internalValue;
  }

  // unregister - computed: false, optional: false, required: true
  private _unregister = new PortBlueprintPermissionsEntitiesUnregisterOutputReference(this, "unregister");
  public get unregister() {
    return this._unregister;
  }
  public putUnregister(value: PortBlueprintPermissionsEntitiesUnregister) {
    this._unregister.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unregisterInput() {
    return this._unregister.internalValue;
  }

  // update - computed: false, optional: false, required: true
  private _update = new PortBlueprintPermissionsEntitiesUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
  public putUpdate(value: PortBlueprintPermissionsEntitiesUpdate) {
    this._update.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }

  // update_metadata_properties - computed: false, optional: false, required: true
  private _updateMetadataProperties = new PortBlueprintPermissionsEntitiesUpdateMetadataPropertiesOutputReference(this, "update_metadata_properties");
  public get updateMetadataProperties() {
    return this._updateMetadataProperties;
  }
  public putUpdateMetadataProperties(value: PortBlueprintPermissionsEntitiesUpdateMetadataProperties) {
    this._updateMetadataProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMetadataPropertiesInput() {
    return this._updateMetadataProperties.internalValue;
  }

  // update_properties - computed: false, optional: true, required: false
  private _updateProperties = new PortBlueprintPermissionsEntitiesUpdatePropertiesMap(this, "update_properties");
  public get updateProperties() {
    return this._updateProperties;
  }
  public putUpdateProperties(value: { [key: string]: PortBlueprintPermissionsEntitiesUpdateProperties } | cdktf.IResolvable) {
    this._updateProperties.internalValue = value;
  }
  public resetUpdateProperties() {
    this._updateProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePropertiesInput() {
    return this._updateProperties.internalValue;
  }

  // update_relations - computed: false, optional: true, required: false
  private _updateRelations = new PortBlueprintPermissionsEntitiesUpdateRelationsMap(this, "update_relations");
  public get updateRelations() {
    return this._updateRelations;
  }
  public putUpdateRelations(value: { [key: string]: PortBlueprintPermissionsEntitiesUpdateRelations } | cdktf.IResolvable) {
    this._updateRelations.internalValue = value;
  }
  public resetUpdateRelations() {
    this._updateRelations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRelationsInput() {
    return this._updateRelations.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions port_blueprint_permissions}
*/
export class PortBlueprintPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_blueprint_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortBlueprintPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortBlueprintPermissions to import
  * @param importFromId The id of the existing PortBlueprintPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortBlueprintPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_blueprint_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.0/docs/resources/port_blueprint_permissions port_blueprint_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortBlueprintPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: PortBlueprintPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'port_blueprint_permissions',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintIdentifier = config.blueprintIdentifier;
    this._entities.internalValue = config.entities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_identifier - computed: false, optional: false, required: true
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }

  // entities - computed: false, optional: false, required: true
  private _entities = new PortBlueprintPermissionsEntitiesOutputReference(this, "entities");
  public get entities() {
    return this._entities;
  }
  public putEntities(value: PortBlueprintPermissionsEntities) {
    this._entities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_identifier: cdktf.stringToTerraform(this._blueprintIdentifier),
      entities: portBlueprintPermissionsEntitiesToTerraform(this._entities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_identifier: {
        value: cdktf.stringToHclTerraform(this._blueprintIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entities: {
        value: portBlueprintPermissionsEntitiesToHclTerraform(this._entities.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortBlueprintPermissionsEntities",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
