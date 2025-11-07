// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the OME user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#description User#description}
  */
  readonly description?: string;
  /**
  * Directory Service ID of the OME user. If the value of `directory_service_id` changes, Terraform will destroy and recreate the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#directory_service_id User#directory_service_id}
  */
  readonly directoryServiceId?: number;
  /**
  * Enable OME user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#enabled User#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Lock OME user. If the value of `locked` changes, Terraform will destroy and recreate the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#locked User#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Password of the OME user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Role ID of the OME user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#role_id User#role_id}
  */
  readonly roleId: string;
  /**
  * User Type ID of the OME user. If the value of `user_type_id` changes, Terraform will destroy and recreate the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#user_type_id User#user_type_id}
  */
  readonly userTypeId?: number;
  /**
  * Username of the OME user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user ome_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/user ome_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_user',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._directoryServiceId = config.directoryServiceId;
    this._enabled = config.enabled;
    this._locked = config.locked;
    this._password = config.password;
    this._roleId = config.roleId;
    this._userTypeId = config.userTypeId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // directory_service_id - computed: true, optional: true, required: false
  private _directoryServiceId?: number; 
  public get directoryServiceId() {
    return this.getNumberAttribute('directory_service_id');
  }
  public set directoryServiceId(value: number) {
    this._directoryServiceId = value;
  }
  public resetDirectoryServiceId() {
    this._directoryServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryServiceIdInput() {
    return this._directoryServiceId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // user_type_id - computed: true, optional: true, required: false
  private _userTypeId?: number; 
  public get userTypeId() {
    return this.getNumberAttribute('user_type_id');
  }
  public set userTypeId(value: number) {
    this._userTypeId = value;
  }
  public resetUserTypeId() {
    this._userTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeIdInput() {
    return this._userTypeId;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      directory_service_id: cdktf.numberToTerraform(this._directoryServiceId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      locked: cdktf.booleanToTerraform(this._locked),
      password: cdktf.stringToTerraform(this._password),
      role_id: cdktf.stringToTerraform(this._roleId),
      user_type_id: cdktf.numberToTerraform(this._userTypeId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_service_id: {
        value: cdktf.numberToHclTerraform(this._directoryServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type_id: {
        value: cdktf.numberToHclTerraform(this._userTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
