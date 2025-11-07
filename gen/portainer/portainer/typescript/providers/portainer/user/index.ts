// https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#api_key_description User#api_key_description}
  */
  readonly apiKeyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#generate_api_key User#generate_api_key}
  */
  readonly generateApiKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#ldap_user User#ldap_user}
  */
  readonly ldapUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#role User#role}
  */
  readonly role?: number;
  /**
  * Optional Portainer team ID. Only applicable for standard users (role = 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#team_id User#team_id}
  */
  readonly teamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user portainer_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/user portainer_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_user',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKeyDescription = config.apiKeyDescription;
    this._generateApiKey = config.generateApiKey;
    this._id = config.id;
    this._ldapUser = config.ldapUser;
    this._password = config.password;
    this._role = config.role;
    this._teamId = config.teamId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_description - computed: false, optional: true, required: false
  private _apiKeyDescription?: string; 
  public get apiKeyDescription() {
    return this.getStringAttribute('api_key_description');
  }
  public set apiKeyDescription(value: string) {
    this._apiKeyDescription = value;
  }
  public resetApiKeyDescription() {
    this._apiKeyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyDescriptionInput() {
    return this._apiKeyDescription;
  }

  // api_key_raw - computed: true, optional: false, required: false
  public get apiKeyRaw() {
    return this.getStringAttribute('api_key_raw');
  }

  // generate_api_key - computed: false, optional: true, required: false
  private _generateApiKey?: boolean | cdktf.IResolvable; 
  public get generateApiKey() {
    return this.getBooleanAttribute('generate_api_key');
  }
  public set generateApiKey(value: boolean | cdktf.IResolvable) {
    this._generateApiKey = value;
  }
  public resetGenerateApiKey() {
    this._generateApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateApiKeyInput() {
    return this._generateApiKey;
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

  // ldap_user - computed: false, optional: true, required: false
  private _ldapUser?: boolean | cdktf.IResolvable; 
  public get ldapUser() {
    return this.getBooleanAttribute('ldap_user');
  }
  public set ldapUser(value: boolean | cdktf.IResolvable) {
    this._ldapUser = value;
  }
  public resetLdapUser() {
    this._ldapUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUserInput() {
    return this._ldapUser;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // role - computed: false, optional: true, required: false
  private _role?: number; 
  public get role() {
    return this.getNumberAttribute('role');
  }
  public set role(value: number) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: number; 
  public get teamId() {
    return this.getNumberAttribute('team_id');
  }
  public set teamId(value: number) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
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
      api_key_description: cdktf.stringToTerraform(this._apiKeyDescription),
      generate_api_key: cdktf.booleanToTerraform(this._generateApiKey),
      id: cdktf.stringToTerraform(this._id),
      ldap_user: cdktf.booleanToTerraform(this._ldapUser),
      password: cdktf.stringToTerraform(this._password),
      role: cdktf.numberToTerraform(this._role),
      team_id: cdktf.numberToTerraform(this._teamId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_description: {
        value: cdktf.stringToHclTerraform(this._apiKeyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_api_key: {
        value: cdktf.booleanToHclTerraform(this._generateApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_user: {
        value: cdktf.booleanToHclTerraform(this._ldapUser),
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
      role: {
        value: cdktf.numberToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team_id: {
        value: cdktf.numberToHclTerraform(this._teamId),
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
