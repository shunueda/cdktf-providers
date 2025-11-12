// https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CircleciProviderConfig {
  /**
  * The token key for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs#api_token CircleciProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * The CircleCI organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs#organization CircleciProvider#organization}
  */
  readonly organization?: string;
  /**
  * The URL of the Circle CI API (v2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs#url CircleciProvider#url}
  */
  readonly url?: string;
  /**
  * The VCS type for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs#vcs_type CircleciProvider#vcs_type}
  */
  readonly vcsType?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs#alias CircleciProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs circleci}
*/
export class CircleciProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circleci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CircleciProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CircleciProvider to import
  * @param importFromId The id of the existing CircleciProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CircleciProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circleci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs circleci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CircleciProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CircleciProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'circleci',
      terraformGeneratorMetadata: {
        providerName: 'circleci',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      terraformProviderSource: 'mrolla/circleci'
    });
    this._apiToken = config.apiToken;
    this._organization = config.organization;
    this._url = config.url;
    this._vcsType = config.vcsType;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // vcs_type - computed: false, optional: true, required: false
  private _vcsType?: string; 
  public get vcsType() {
    return this._vcsType;
  }
  public set vcsType(value: string | undefined) {
    this._vcsType = value;
  }
  public resetVcsType() {
    this._vcsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsTypeInput() {
    return this._vcsType;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      organization: cdktf.stringToTerraform(this._organization),
      url: cdktf.stringToTerraform(this._url),
      vcs_type: cdktf.stringToTerraform(this._vcsType),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcs_type: {
        value: cdktf.stringToHclTerraform(this._vcsType),
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
