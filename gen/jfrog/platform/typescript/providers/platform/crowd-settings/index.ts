// https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrowdSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto created users will have access to their profile page and will be able to perform actions such as generating an API key. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#allow_user_to_access_profile CrowdSettings#allow_user_to_access_profile}
  */
  readonly allowUserToAccessProfile?: boolean | cdktf.IResolvable;
  /**
  * The application name configured for JPD in Crowd/JIRA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#application_name CrowdSettings#application_name}
  */
  readonly applicationName: string;
  /**
  * When set, authenticated users are automatically created in Artifactory. When not set, for every request from a Crowd user, the user is temporarily associated with default groups (if such groups are defined), and the permissions for these groups apply. Without automatic user creation, you must manually create the user in Artifactory to manage user permissions not attached to their default groups. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#auto_user_creation CrowdSettings#auto_user_creation}
  */
  readonly autoUserCreation?: boolean | cdktf.IResolvable;
  /**
  * This corresponds to 'Users Management Server' option in Artifactory UI (`true` = JIRA, `false` = Crowd). Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#direct_authentication CrowdSettings#direct_authentication}
  */
  readonly directAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Use this to enable security integration with Atlassian Crowd or JIRA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#enable CrowdSettings#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * When a user logs in with CROWD, only groups retrieved from CROWD will be associated with the user. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#override_all_groups_upon_login CrowdSettings#override_all_groups_upon_login}
  */
  readonly overrideAllGroupsUponLogin?: boolean | cdktf.IResolvable;
  /**
  * The application password configured for JPD in Crowd/JIRA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#password CrowdSettings#password}
  */
  readonly password: string;
  /**
  * The full URL of the server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#server_url CrowdSettings#server_url}
  */
  readonly serverUrl: string;
  /**
  * The time window (min) during which the session does not need to be validated. If set to `0`, the token expires only when the session expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#session_validation_interval CrowdSettings#session_validation_interval}
  */
  readonly sessionValidationInterval: number;
  /**
  * If a default proxy definition exists, it is used to pass through to the Crowd Server. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#use_default_proxy CrowdSettings#use_default_proxy}
  */
  readonly useDefaultProxy?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings platform_crowd_settings}
*/
export class CrowdSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_crowd_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrowdSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrowdSettings to import
  * @param importFromId The id of the existing CrowdSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrowdSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_crowd_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/crowd_settings platform_crowd_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrowdSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: CrowdSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_crowd_settings',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUserToAccessProfile = config.allowUserToAccessProfile;
    this._applicationName = config.applicationName;
    this._autoUserCreation = config.autoUserCreation;
    this._directAuthentication = config.directAuthentication;
    this._enable = config.enable;
    this._overrideAllGroupsUponLogin = config.overrideAllGroupsUponLogin;
    this._password = config.password;
    this._serverUrl = config.serverUrl;
    this._sessionValidationInterval = config.sessionValidationInterval;
    this._useDefaultProxy = config.useDefaultProxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_user_to_access_profile - computed: true, optional: true, required: false
  private _allowUserToAccessProfile?: boolean | cdktf.IResolvable; 
  public get allowUserToAccessProfile() {
    return this.getBooleanAttribute('allow_user_to_access_profile');
  }
  public set allowUserToAccessProfile(value: boolean | cdktf.IResolvable) {
    this._allowUserToAccessProfile = value;
  }
  public resetAllowUserToAccessProfile() {
    this._allowUserToAccessProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToAccessProfileInput() {
    return this._allowUserToAccessProfile;
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // auto_user_creation - computed: true, optional: true, required: false
  private _autoUserCreation?: boolean | cdktf.IResolvable; 
  public get autoUserCreation() {
    return this.getBooleanAttribute('auto_user_creation');
  }
  public set autoUserCreation(value: boolean | cdktf.IResolvable) {
    this._autoUserCreation = value;
  }
  public resetAutoUserCreation() {
    this._autoUserCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUserCreationInput() {
    return this._autoUserCreation;
  }

  // direct_authentication - computed: true, optional: true, required: false
  private _directAuthentication?: boolean | cdktf.IResolvable; 
  public get directAuthentication() {
    return this.getBooleanAttribute('direct_authentication');
  }
  public set directAuthentication(value: boolean | cdktf.IResolvable) {
    this._directAuthentication = value;
  }
  public resetDirectAuthentication() {
    this._directAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directAuthenticationInput() {
    return this._directAuthentication;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // override_all_groups_upon_login - computed: true, optional: true, required: false
  private _overrideAllGroupsUponLogin?: boolean | cdktf.IResolvable; 
  public get overrideAllGroupsUponLogin() {
    return this.getBooleanAttribute('override_all_groups_upon_login');
  }
  public set overrideAllGroupsUponLogin(value: boolean | cdktf.IResolvable) {
    this._overrideAllGroupsUponLogin = value;
  }
  public resetOverrideAllGroupsUponLogin() {
    this._overrideAllGroupsUponLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAllGroupsUponLoginInput() {
    return this._overrideAllGroupsUponLogin;
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

  // server_url - computed: false, optional: false, required: true
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // session_validation_interval - computed: false, optional: false, required: true
  private _sessionValidationInterval?: number; 
  public get sessionValidationInterval() {
    return this.getNumberAttribute('session_validation_interval');
  }
  public set sessionValidationInterval(value: number) {
    this._sessionValidationInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionValidationIntervalInput() {
    return this._sessionValidationInterval;
  }

  // use_default_proxy - computed: true, optional: true, required: false
  private _useDefaultProxy?: boolean | cdktf.IResolvable; 
  public get useDefaultProxy() {
    return this.getBooleanAttribute('use_default_proxy');
  }
  public set useDefaultProxy(value: boolean | cdktf.IResolvable) {
    this._useDefaultProxy = value;
  }
  public resetUseDefaultProxy() {
    this._useDefaultProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultProxyInput() {
    return this._useDefaultProxy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_user_to_access_profile: cdktf.booleanToTerraform(this._allowUserToAccessProfile),
      application_name: cdktf.stringToTerraform(this._applicationName),
      auto_user_creation: cdktf.booleanToTerraform(this._autoUserCreation),
      direct_authentication: cdktf.booleanToTerraform(this._directAuthentication),
      enable: cdktf.booleanToTerraform(this._enable),
      override_all_groups_upon_login: cdktf.booleanToTerraform(this._overrideAllGroupsUponLogin),
      password: cdktf.stringToTerraform(this._password),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      session_validation_interval: cdktf.numberToTerraform(this._sessionValidationInterval),
      use_default_proxy: cdktf.booleanToTerraform(this._useDefaultProxy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_user_to_access_profile: {
        value: cdktf.booleanToHclTerraform(this._allowUserToAccessProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_user_creation: {
        value: cdktf.booleanToHclTerraform(this._autoUserCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direct_authentication: {
        value: cdktf.booleanToHclTerraform(this._directAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_all_groups_upon_login: {
        value: cdktf.booleanToHclTerraform(this._overrideAllGroupsUponLogin),
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
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_validation_interval: {
        value: cdktf.numberToHclTerraform(this._sessionValidationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_default_proxy: {
        value: cdktf.booleanToHclTerraform(this._useDefaultProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
