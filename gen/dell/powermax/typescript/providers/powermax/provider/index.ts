// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowermaxProviderConfig {
  /**
  * IP or FQDN of the PowerMax host. This can also be set using the environment variable POWERMAX_ENDPOINT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs#endpoint PowermaxProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Boolean variable to specify whether to validate SSL certificate or not. This can also be set using the environment variable POWERMAX_INSECURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs#insecure PowermaxProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password of the PowerMax host. This can also be set using the environment variable POWERMAX_PASSWORD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs#password PowermaxProvider#password}
  */
  readonly password?: string;
  /**
  * The version of the PowerMax host. This can also be set using the environment variable POWERMAX_POWERMAX_VERSION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs#pmax_version PowermaxProvider#pmax_version}
  */
  readonly pmaxVersion?: string;
  /**
  * The serial_number of the PowerMax host. This can also be set using the environment variable POWERMAX_SERIAL_NUMBER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs#serial_number PowermaxProvider#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The username of the PowerMax host. This can also be set using the environment variable POWERMAX_USERNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs#username PowermaxProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs#alias PowermaxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs powermax}
*/
export class PowermaxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowermaxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowermaxProvider to import
  * @param importFromId The id of the existing PowermaxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowermaxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs powermax} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowermaxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PowermaxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powermax',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3',
        providerVersionConstraint: '1.0.3'
      },
      terraformProviderSource: 'dell/powermax'
    });
    this._endpoint = config.endpoint;
    this._insecure = config.insecure;
    this._password = config.password;
    this._pmaxVersion = config.pmaxVersion;
    this._serialNumber = config.serialNumber;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pmax_version - computed: false, optional: true, required: false
  private _pmaxVersion?: string; 
  public get pmaxVersion() {
    return this._pmaxVersion;
  }
  public set pmaxVersion(value: string | undefined) {
    this._pmaxVersion = value;
  }
  public resetPmaxVersion() {
    this._pmaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmaxVersionInput() {
    return this._pmaxVersion;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this._serialNumber;
  }
  public set serialNumber(value: string | undefined) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      pmax_version: cdktf.stringToTerraform(this._pmaxVersion),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
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
      pmax_version: {
        value: cdktf.stringToHclTerraform(this._pmaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
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
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
