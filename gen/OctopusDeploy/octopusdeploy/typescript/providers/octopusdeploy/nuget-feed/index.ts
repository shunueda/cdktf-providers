// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NugetFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of times a deployment should attempt to download a package from this feed before failing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#download_attempts NugetFeed#download_attempts}
  */
  readonly downloadAttempts?: number;
  /**
  * The number of seconds to apply as a linear back off between download attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#download_retry_backoff_seconds NugetFeed#download_retry_backoff_seconds}
  */
  readonly downloadRetryBackoffSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#feed_uri NugetFeed#feed_uri}
  */
  readonly feedUri: string;
  /**
  * This will improve performance of the NuGet feed but may not be supported by some older feeds. Disable if the operation, Create Release does not return the latest version for a package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#is_enhanced_mode NugetFeed#is_enhanced_mode}
  */
  readonly isEnhancedMode?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#name NugetFeed#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#package_acquisition_location_options NugetFeed#package_acquisition_location_options}
  */
  readonly packageAcquisitionLocationOptions?: string[];
  /**
  * The password associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#password NugetFeed#password}
  */
  readonly password?: string;
  /**
  * The space ID associated with this nuget feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#space_id NugetFeed#space_id}
  */
  readonly spaceId?: string;
  /**
  * The username associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#username NugetFeed#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed octopusdeploy_nuget_feed}
*/
export class NugetFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_nuget_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NugetFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NugetFeed to import
  * @param importFromId The id of the existing NugetFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NugetFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_nuget_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/nuget_feed octopusdeploy_nuget_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NugetFeedConfig
  */
  public constructor(scope: Construct, id: string, config: NugetFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_nuget_feed',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._downloadAttempts = config.downloadAttempts;
    this._downloadRetryBackoffSeconds = config.downloadRetryBackoffSeconds;
    this._feedUri = config.feedUri;
    this._isEnhancedMode = config.isEnhancedMode;
    this._name = config.name;
    this._packageAcquisitionLocationOptions = config.packageAcquisitionLocationOptions;
    this._password = config.password;
    this._spaceId = config.spaceId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // download_attempts - computed: true, optional: true, required: false
  private _downloadAttempts?: number; 
  public get downloadAttempts() {
    return this.getNumberAttribute('download_attempts');
  }
  public set downloadAttempts(value: number) {
    this._downloadAttempts = value;
  }
  public resetDownloadAttempts() {
    this._downloadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadAttemptsInput() {
    return this._downloadAttempts;
  }

  // download_retry_backoff_seconds - computed: true, optional: true, required: false
  private _downloadRetryBackoffSeconds?: number; 
  public get downloadRetryBackoffSeconds() {
    return this.getNumberAttribute('download_retry_backoff_seconds');
  }
  public set downloadRetryBackoffSeconds(value: number) {
    this._downloadRetryBackoffSeconds = value;
  }
  public resetDownloadRetryBackoffSeconds() {
    this._downloadRetryBackoffSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadRetryBackoffSecondsInput() {
    return this._downloadRetryBackoffSeconds;
  }

  // feed_uri - computed: false, optional: false, required: true
  private _feedUri?: string; 
  public get feedUri() {
    return this.getStringAttribute('feed_uri');
  }
  public set feedUri(value: string) {
    this._feedUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedUriInput() {
    return this._feedUri;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enhanced_mode - computed: true, optional: true, required: false
  private _isEnhancedMode?: boolean | cdktf.IResolvable; 
  public get isEnhancedMode() {
    return this.getBooleanAttribute('is_enhanced_mode');
  }
  public set isEnhancedMode(value: boolean | cdktf.IResolvable) {
    this._isEnhancedMode = value;
  }
  public resetIsEnhancedMode() {
    this._isEnhancedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnhancedModeInput() {
    return this._isEnhancedMode;
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

  // package_acquisition_location_options - computed: true, optional: true, required: false
  private _packageAcquisitionLocationOptions?: string[]; 
  public get packageAcquisitionLocationOptions() {
    return this.getListAttribute('package_acquisition_location_options');
  }
  public set packageAcquisitionLocationOptions(value: string[]) {
    this._packageAcquisitionLocationOptions = value;
  }
  public resetPackageAcquisitionLocationOptions() {
    this._packageAcquisitionLocationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageAcquisitionLocationOptionsInput() {
    return this._packageAcquisitionLocationOptions;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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
      download_attempts: cdktf.numberToTerraform(this._downloadAttempts),
      download_retry_backoff_seconds: cdktf.numberToTerraform(this._downloadRetryBackoffSeconds),
      feed_uri: cdktf.stringToTerraform(this._feedUri),
      is_enhanced_mode: cdktf.booleanToTerraform(this._isEnhancedMode),
      name: cdktf.stringToTerraform(this._name),
      package_acquisition_location_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageAcquisitionLocationOptions),
      password: cdktf.stringToTerraform(this._password),
      space_id: cdktf.stringToTerraform(this._spaceId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      download_attempts: {
        value: cdktf.numberToHclTerraform(this._downloadAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      download_retry_backoff_seconds: {
        value: cdktf.numberToHclTerraform(this._downloadRetryBackoffSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feed_uri: {
        value: cdktf.stringToHclTerraform(this._feedUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enhanced_mode: {
        value: cdktf.booleanToHclTerraform(this._isEnhancedMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_acquisition_location_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageAcquisitionLocationOptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
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
