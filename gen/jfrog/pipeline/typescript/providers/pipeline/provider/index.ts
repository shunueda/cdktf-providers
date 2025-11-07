// https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineProviderConfig {
  /**
  * This is a Bearer token that can be given to you by your admin under `Identity and Access`. This can also be sourced from the `PIPELINES_ACCESS_TOKEN` or `JFROG_ACCESS_TOKEN` environment variable. Defauult to empty string if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs#access_token PipelineProvider#access_token}
  */
  readonly accessToken: string;
  /**
  * Toggle for pre-flight checking of Artifactory Enterprise license. Default to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs#check_license PipelineProvider#check_license}
  */
  readonly checkLicense?: boolean | cdktf.IResolvable;
  /**
  * URL of Artifactory. This can also be sourced from the `PIPELINES_URL` or `JFROG_URL` environment variable. Default to 'http://localhost:8082' if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs#url PipelineProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs#alias PipelineProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs pipeline}
*/
export class PipelineProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineProvider to import
  * @param importFromId The id of the existing PipelineProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pipeline',
      terraformGeneratorMetadata: {
        providerName: 'pipeline',
        providerVersion: '1.2.4'
      },
      terraformProviderSource: 'jfrog/pipeline'
    });
    this._accessToken = config.accessToken;
    this._checkLicense = config.checkLicense;
    this._url = config.url;
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

  // check_license - computed: false, optional: true, required: false
  private _checkLicense?: boolean | cdktf.IResolvable; 
  public get checkLicense() {
    return this._checkLicense;
  }
  public set checkLicense(value: boolean | cdktf.IResolvable | undefined) {
    this._checkLicense = value;
  }
  public resetCheckLicense() {
    this._checkLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkLicenseInput() {
    return this._checkLicense;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      check_license: cdktf.booleanToTerraform(this._checkLicense),
      url: cdktf.stringToTerraform(this._url),
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
      check_license: {
        value: cdktf.booleanToHclTerraform(this._checkLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
