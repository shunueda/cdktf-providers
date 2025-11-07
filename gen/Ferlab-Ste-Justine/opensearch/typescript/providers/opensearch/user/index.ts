// https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom roles to assign to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user#backend_roles User#backend_roles}
  */
  readonly backendRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prebuilt security roles to assign to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user#opendistro_security_roles User#opendistro_security_roles}
  */
  readonly opendistroSecurityRoles?: string[];
  /**
  * Password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Username of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user opensearch_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/user opensearch_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'opensearch_user',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendRoles = config.backendRoles;
    this._id = config.id;
    this._opendistroSecurityRoles = config.opendistroSecurityRoles;
    this._password = config.password;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_roles - computed: false, optional: true, required: false
  private _backendRoles?: string[]; 
  public get backendRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('backend_roles'));
  }
  public set backendRoles(value: string[]) {
    this._backendRoles = value;
  }
  public resetBackendRoles() {
    this._backendRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRolesInput() {
    return this._backendRoles;
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

  // opendistro_security_roles - computed: false, optional: true, required: false
  private _opendistroSecurityRoles?: string[]; 
  public get opendistroSecurityRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('opendistro_security_roles'));
  }
  public set opendistroSecurityRoles(value: string[]) {
    this._opendistroSecurityRoles = value;
  }
  public resetOpendistroSecurityRoles() {
    this._opendistroSecurityRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opendistroSecurityRolesInput() {
    return this._opendistroSecurityRoles;
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
      backend_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backendRoles),
      id: cdktf.stringToTerraform(this._id),
      opendistro_security_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._opendistroSecurityRoles),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backendRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opendistro_security_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._opendistroSecurityRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
