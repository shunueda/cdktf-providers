// https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortPagePermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions#page_identifier PortPagePermissions#page_identifier}
  */
  readonly pageIdentifier: string;
  /**
  * The permission to read the page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions#read PortPagePermissions#read}
  */
  readonly read: PortPagePermissionsRead;
}
export interface PortPagePermissionsRead {
  /**
  * The roles with read permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions#roles PortPagePermissions#roles}
  */
  readonly roles?: string[];
  /**
  * The teams with read permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions#teams PortPagePermissions#teams}
  */
  readonly teams?: string[];
  /**
  * The users with read permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions#users PortPagePermissions#users}
  */
  readonly users?: string[];
}

export function portPagePermissionsReadToTerraform(struct?: PortPagePermissionsRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function portPagePermissionsReadToHclTerraform(struct?: PortPagePermissionsRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class PortPagePermissionsReadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortPagePermissionsRead | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: PortPagePermissionsRead | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._roles = value.roles;
      this._teams = value.teams;
      this._users = value.users;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions port_page_permissions}
*/
export class PortPagePermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_page_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortPagePermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortPagePermissions to import
  * @param importFromId The id of the existing PortPagePermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortPagePermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_page_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_page_permissions port_page_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortPagePermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: PortPagePermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'port_page_permissions',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.17.2',
        providerVersionConstraint: '2.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pageIdentifier = config.pageIdentifier;
    this._read.internalValue = config.read;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // page_identifier - computed: false, optional: false, required: true
  private _pageIdentifier?: string; 
  public get pageIdentifier() {
    return this.getStringAttribute('page_identifier');
  }
  public set pageIdentifier(value: string) {
    this._pageIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdentifierInput() {
    return this._pageIdentifier;
  }

  // read - computed: false, optional: false, required: true
  private _read = new PortPagePermissionsReadOutputReference(this, "read");
  public get read() {
    return this._read;
  }
  public putRead(value: PortPagePermissionsRead) {
    this._read.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_identifier: cdktf.stringToTerraform(this._pageIdentifier),
      read: portPagePermissionsReadToTerraform(this._read.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_identifier: {
        value: cdktf.stringToHclTerraform(this._pageIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read: {
        value: portPagePermissionsReadToHclTerraform(this._read.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortPagePermissionsRead",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
