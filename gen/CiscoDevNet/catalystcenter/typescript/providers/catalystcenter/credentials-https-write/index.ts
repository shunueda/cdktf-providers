// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_https_write
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialsHttpsWriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the HTTPS credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_https_write#description CredentialsHttpsWrite#description}
  */
  readonly description: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_https_write#password CredentialsHttpsWrite#password}
  */
  readonly password: string;
  /**
  * HTTPS port
  *   - Default value: `443`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_https_write#port CredentialsHttpsWrite#port}
  */
  readonly port?: number;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_https_write#username CredentialsHttpsWrite#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_https_write catalystcenter_credentials_https_write}
*/
export class CredentialsHttpsWrite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_credentials_https_write";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialsHttpsWrite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialsHttpsWrite to import
  * @param importFromId The id of the existing CredentialsHttpsWrite that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_https_write#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialsHttpsWrite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_credentials_https_write", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_https_write catalystcenter_credentials_https_write} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialsHttpsWriteConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialsHttpsWriteConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_credentials_https_write',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
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
    this._password = config.password;
    this._port = config.port;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
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
