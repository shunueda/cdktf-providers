// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZitadelProviderConfig {
  /**
  * Domain used to connect to the ZITADEL instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#domain ZitadelProvider#domain}
  */
  readonly domain: string;
  /**
  * Use insecure connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#insecure ZitadelProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Path to the file containing presigned JWT to connect to ZITADEL. Either 'jwt_file', 'jwt_profile_file' or 'jwt_profile_json' is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#jwt_file ZitadelProvider#jwt_file}
  */
  readonly jwtFile?: string;
  /**
  * Path to the file containing credentials to connect to ZITADEL. Either 'jwt_file', 'jwt_profile_file' or 'jwt_profile_json' is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#jwt_profile_file ZitadelProvider#jwt_profile_file}
  */
  readonly jwtProfileFile?: string;
  /**
  * JSON value of credentials to connect to ZITADEL. Either 'jwt_file', 'jwt_profile_file' or 'jwt_profile_json' is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#jwt_profile_json ZitadelProvider#jwt_profile_json}
  */
  readonly jwtProfileJson?: string;
  /**
  * Used port if not the default ports 80 or 443 are configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#port ZitadelProvider#port}
  */
  readonly port?: string;
  /**
  * Path to the file containing credentials to connect to ZITADEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#token ZitadelProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#alias ZitadelProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs zitadel}
*/
export class ZitadelProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZitadelProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZitadelProvider to import
  * @param importFromId The id of the existing ZitadelProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZitadelProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs zitadel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZitadelProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ZitadelProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      terraformProviderSource: 'zitadel/zitadel'
    });
    this._domain = config.domain;
    this._insecure = config.insecure;
    this._jwtFile = config.jwtFile;
    this._jwtProfileFile = config.jwtProfileFile;
    this._jwtProfileJson = config.jwtProfileJson;
    this._port = config.port;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // jwt_file - computed: false, optional: true, required: false
  private _jwtFile?: string; 
  public get jwtFile() {
    return this._jwtFile;
  }
  public set jwtFile(value: string | undefined) {
    this._jwtFile = value;
  }
  public resetJwtFile() {
    this._jwtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtFileInput() {
    return this._jwtFile;
  }

  // jwt_profile_file - computed: false, optional: true, required: false
  private _jwtProfileFile?: string; 
  public get jwtProfileFile() {
    return this._jwtProfileFile;
  }
  public set jwtProfileFile(value: string | undefined) {
    this._jwtProfileFile = value;
  }
  public resetJwtProfileFile() {
    this._jwtProfileFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtProfileFileInput() {
    return this._jwtProfileFile;
  }

  // jwt_profile_json - computed: false, optional: true, required: false
  private _jwtProfileJson?: string; 
  public get jwtProfileJson() {
    return this._jwtProfileJson;
  }
  public set jwtProfileJson(value: string | undefined) {
    this._jwtProfileJson = value;
  }
  public resetJwtProfileJson() {
    this._jwtProfileJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtProfileJsonInput() {
    return this._jwtProfileJson;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this._port;
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      domain: cdktf.stringToTerraform(this._domain),
      insecure: cdktf.booleanToTerraform(this._insecure),
      jwt_file: cdktf.stringToTerraform(this._jwtFile),
      jwt_profile_file: cdktf.stringToTerraform(this._jwtProfileFile),
      jwt_profile_json: cdktf.stringToTerraform(this._jwtProfileJson),
      port: cdktf.stringToTerraform(this._port),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      jwt_file: {
        value: cdktf.stringToHclTerraform(this._jwtFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_profile_file: {
        value: cdktf.stringToHclTerraform(this._jwtProfileFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_profile_json: {
        value: cdktf.stringToHclTerraform(this._jwtProfileJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
