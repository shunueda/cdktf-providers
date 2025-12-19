// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformHubVersionControlUsernamePasswordSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base path within the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings#base_path PlatformHubVersionControlUsernamePasswordSettings#base_path}
  */
  readonly basePath: string;
  /**
  * The default branch of the git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings#default_branch PlatformHubVersionControlUsernamePasswordSettings#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * The password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings#password PlatformHubVersionControlUsernamePasswordSettings#password}
  */
  readonly password: string;
  /**
  * The URL of the git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings#url PlatformHubVersionControlUsernamePasswordSettings#url}
  */
  readonly url: string;
  /**
  * The username for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings#username PlatformHubVersionControlUsernamePasswordSettings#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings octopusdeploy_platform_hub_version_control_username_password_settings}
*/
export class PlatformHubVersionControlUsernamePasswordSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_platform_hub_version_control_username_password_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformHubVersionControlUsernamePasswordSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformHubVersionControlUsernamePasswordSettings to import
  * @param importFromId The id of the existing PlatformHubVersionControlUsernamePasswordSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformHubVersionControlUsernamePasswordSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_platform_hub_version_control_username_password_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/platform_hub_version_control_username_password_settings octopusdeploy_platform_hub_version_control_username_password_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformHubVersionControlUsernamePasswordSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformHubVersionControlUsernamePasswordSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_platform_hub_version_control_username_password_settings',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
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
    this._password = config.password;
    this._url = config.url;
    this._username = config.username;
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
      base_path: cdktf.stringToTerraform(this._basePath),
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      password: cdktf.stringToTerraform(this._password),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
