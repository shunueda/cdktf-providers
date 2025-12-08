// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/platform_hub_version_control_anonymous_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformHubVersionControlAnonymousSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base path within the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/platform_hub_version_control_anonymous_settings#base_path PlatformHubVersionControlAnonymousSettings#base_path}
  */
  readonly basePath: string;
  /**
  * The default branch of the git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/platform_hub_version_control_anonymous_settings#default_branch PlatformHubVersionControlAnonymousSettings#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * The URL of the git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/platform_hub_version_control_anonymous_settings#url PlatformHubVersionControlAnonymousSettings#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/platform_hub_version_control_anonymous_settings octopusdeploy_platform_hub_version_control_anonymous_settings}
*/
export class PlatformHubVersionControlAnonymousSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_platform_hub_version_control_anonymous_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformHubVersionControlAnonymousSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformHubVersionControlAnonymousSettings to import
  * @param importFromId The id of the existing PlatformHubVersionControlAnonymousSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/platform_hub_version_control_anonymous_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformHubVersionControlAnonymousSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_platform_hub_version_control_anonymous_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/platform_hub_version_control_anonymous_settings octopusdeploy_platform_hub_version_control_anonymous_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformHubVersionControlAnonymousSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformHubVersionControlAnonymousSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_platform_hub_version_control_anonymous_settings',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basePath = config.basePath;
    this._defaultBranch = config.defaultBranch;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_path - computed: false, optional: false, required: true
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // default_branch - computed: false, optional: false, required: true
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_path: cdktf.stringToTerraform(this._basePath),
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_path: {
        value: cdktf.stringToHclTerraform(this._basePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_branch: {
        value: cdktf.stringToHclTerraform(this._defaultBranch),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
