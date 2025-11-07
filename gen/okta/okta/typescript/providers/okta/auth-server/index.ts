// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The recipients that the tokens are intended for. This becomes the `aud` claim in an access token. Currently Okta only supports a single value here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server#audiences AuthServer#audiences}
  */
  readonly audiences: string[];
  /**
  * The key rotation mode for the authorization server. Can be `AUTO` or `MANUAL`. Default: `AUTO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server#credentials_rotation_mode AuthServer#credentials_rotation_mode}
  */
  readonly credentialsRotationMode?: string;
  /**
  * The description of the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server#description AuthServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server#id AuthServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * *Early Access Property*. Allows you to use a custom issuer URL. It can be set to `CUSTOM_URL`, `ORG_URL`, or `DYNAMIC`. Default: `ORG_URL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server#issuer_mode AuthServer#issuer_mode}
  */
  readonly issuerMode?: string;
  /**
  * The name of the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server#name AuthServer#name}
  */
  readonly name: string;
  /**
  * Default to `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server#status AuthServer#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server okta_auth_server}
*/
export class AuthServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_auth_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthServer to import
  * @param importFromId The id of the existing AuthServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_auth_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/auth_server okta_auth_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthServerConfig
  */
  public constructor(scope: Construct, id: string, config: AuthServerConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audiences = config.audiences;
    this._credentialsRotationMode = config.credentialsRotationMode;
    this._description = config.description;
    this._id = config.id;
    this._issuerMode = config.issuerMode;
    this._name = config.name;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audiences - computed: false, optional: false, required: true
  private _audiences?: string[]; 
  public get audiences() {
    return cdktf.Fn.tolist(this.getListAttribute('audiences'));
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // credentials_last_rotated - computed: true, optional: false, required: false
  public get credentialsLastRotated() {
    return this.getStringAttribute('credentials_last_rotated');
  }

  // credentials_next_rotation - computed: true, optional: false, required: false
  public get credentialsNextRotation() {
    return this.getStringAttribute('credentials_next_rotation');
  }

  // credentials_rotation_mode - computed: false, optional: true, required: false
  private _credentialsRotationMode?: string; 
  public get credentialsRotationMode() {
    return this.getStringAttribute('credentials_rotation_mode');
  }
  public set credentialsRotationMode(value: string) {
    this._credentialsRotationMode = value;
  }
  public resetCredentialsRotationMode() {
    this._credentialsRotationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsRotationModeInput() {
    return this._credentialsRotationMode;
  }

  // description - computed: false, optional: true, required: false
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

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // issuer_mode - computed: false, optional: true, required: false
  private _issuerMode?: string; 
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }
  public set issuerMode(value: string) {
    this._issuerMode = value;
  }
  public resetIssuerMode() {
    this._issuerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerModeInput() {
    return this._issuerMode;
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._audiences),
      credentials_rotation_mode: cdktf.stringToTerraform(this._credentialsRotationMode),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      issuer_mode: cdktf.stringToTerraform(this._issuerMode),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audiences: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._audiences),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      credentials_rotation_mode: {
        value: cdktf.stringToHclTerraform(this._credentialsRotationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      issuer_mode: {
        value: cdktf.stringToHclTerraform(this._issuerMode),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
