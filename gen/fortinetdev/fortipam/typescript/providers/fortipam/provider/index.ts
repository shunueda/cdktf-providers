// https://registry.terraform.io/providers/fortinetdev/fortipam/1.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FortipamProviderConfig {
  /**
  * FortiPAM API user access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortipam/1.0.0/docs#access_token FortipamProvider#access_token}
  */
  readonly accessToken: string;
  /**
  * FortiPAM server URL https://192.168.1.99
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortipam/1.0.0/docs#base_url FortipamProvider#base_url}
  */
  readonly baseUrl: string;
  /**
  * FortiPAM API require verify SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortipam/1.0.0/docs#verify_ssl FortipamProvider#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortipam/1.0.0/docs#alias FortipamProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortipam/1.0.0/docs fortipam}
*/
export class FortipamProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortipam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FortipamProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FortipamProvider to import
  * @param importFromId The id of the existing FortipamProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortipam/1.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FortipamProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortipam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortipam/1.0.0/docs fortipam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FortipamProviderConfig
  */
  public constructor(scope: Construct, id: string, config: FortipamProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'fortipam',
      terraformGeneratorMetadata: {
        providerName: 'fortipam',
        providerVersion: '1.0.0'
      },
      terraformProviderSource: 'fortinetdev/fortipam'
    });
    this._accessToken = config.accessToken;
    this._baseUrl = config.baseUrl;
    this._verifySsl = config.verifySsl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // verify_ssl - computed: false, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this._verifySsl;
  }
  public set verifySsl(value: boolean | cdktf.IResolvable | undefined) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      verify_ssl: cdktf.booleanToTerraform(this._verifySsl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_ssl: {
        value: cdktf.booleanToHclTerraform(this._verifySsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
