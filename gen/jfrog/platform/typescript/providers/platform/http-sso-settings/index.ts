// https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpSsoSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto created users will have access to their profile page and will be able to perform actions such as generating an API key. Default to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings#allow_user_to_access_profile HttpSsoSettings#allow_user_to_access_profile}
  */
  readonly allowUserToAccessProfile?: boolean | cdktf.IResolvable;
  /**
  * When set, authenticated users are automatically created in Artifactory. When not set, for every request from an SSO user, the user is temporarily associated with default groups (if such groups are defined), and the permissions for these groups apply. Without automatic user creation, you must manually create the user inside Artifactory to manage user permissions not attached to their default groups. Default to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings#auto_create_user HttpSsoSettings#auto_create_user}
  */
  readonly autoCreateUser?: boolean | cdktf.IResolvable;
  /**
  * When set, Artifactory trusts incoming requests and reuses the remote user originally set on the request by the SSO of the HTTP server. This is useful if you want to use existing enterprise SSO integrations, such as the powerful authentication schemes provided by Apache (mod_auth_ldap, mod_auth_ntlm, mod_auth_kerb, etc.). When Artifactory is deployed as a webapp on Tomcat behind Apache: If using mod_jk, be sure to use the `JkEnvVar REMOTE_USER` directive in Apache's configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings#proxied HttpSsoSettings#proxied}
  */
  readonly proxied: boolean | cdktf.IResolvable;
  /**
  * The name of the HTTP request variable to use for extracting the user identity. Default to `REMOTE_USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings#remote_user_request_variable HttpSsoSettings#remote_user_request_variable}
  */
  readonly remoteUserRequestVariable?: string;
  /**
  * When set, the user will be associated with the groups returned in the LDAP login response. Note that the user's association with the returned groups is persistent if the `auto_create_user` is set. Default to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings#sync_ldap_groups HttpSsoSettings#sync_ldap_groups}
  */
  readonly syncLdapGroups?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings platform_http_sso_settings}
*/
export class HttpSsoSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_http_sso_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpSsoSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpSsoSettings to import
  * @param importFromId The id of the existing HttpSsoSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpSsoSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_http_sso_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/http_sso_settings platform_http_sso_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpSsoSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: HttpSsoSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_http_sso_settings',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.6',
        providerVersionConstraint: '2.2.6'
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
    this._autoCreateUser = config.autoCreateUser;
    this._proxied = config.proxied;
    this._remoteUserRequestVariable = config.remoteUserRequestVariable;
    this._syncLdapGroups = config.syncLdapGroups;
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

  // auto_create_user - computed: true, optional: true, required: false
  private _autoCreateUser?: boolean | cdktf.IResolvable; 
  public get autoCreateUser() {
    return this.getBooleanAttribute('auto_create_user');
  }
  public set autoCreateUser(value: boolean | cdktf.IResolvable) {
    this._autoCreateUser = value;
  }
  public resetAutoCreateUser() {
    this._autoCreateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateUserInput() {
    return this._autoCreateUser;
  }

  // proxied - computed: false, optional: false, required: true
  private _proxied?: boolean | cdktf.IResolvable; 
  public get proxied() {
    return this.getBooleanAttribute('proxied');
  }
  public set proxied(value: boolean | cdktf.IResolvable) {
    this._proxied = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiedInput() {
    return this._proxied;
  }

  // remote_user_request_variable - computed: true, optional: true, required: false
  private _remoteUserRequestVariable?: string; 
  public get remoteUserRequestVariable() {
    return this.getStringAttribute('remote_user_request_variable');
  }
  public set remoteUserRequestVariable(value: string) {
    this._remoteUserRequestVariable = value;
  }
  public resetRemoteUserRequestVariable() {
    this._remoteUserRequestVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUserRequestVariableInput() {
    return this._remoteUserRequestVariable;
  }

  // sync_ldap_groups - computed: true, optional: true, required: false
  private _syncLdapGroups?: boolean | cdktf.IResolvable; 
  public get syncLdapGroups() {
    return this.getBooleanAttribute('sync_ldap_groups');
  }
  public set syncLdapGroups(value: boolean | cdktf.IResolvable) {
    this._syncLdapGroups = value;
  }
  public resetSyncLdapGroups() {
    this._syncLdapGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncLdapGroupsInput() {
    return this._syncLdapGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_user_to_access_profile: cdktf.booleanToTerraform(this._allowUserToAccessProfile),
      auto_create_user: cdktf.booleanToTerraform(this._autoCreateUser),
      proxied: cdktf.booleanToTerraform(this._proxied),
      remote_user_request_variable: cdktf.stringToTerraform(this._remoteUserRequestVariable),
      sync_ldap_groups: cdktf.booleanToTerraform(this._syncLdapGroups),
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
      auto_create_user: {
        value: cdktf.booleanToHclTerraform(this._autoCreateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxied: {
        value: cdktf.booleanToHclTerraform(this._proxied),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_user_request_variable: {
        value: cdktf.stringToHclTerraform(this._remoteUserRequestVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_ldap_groups: {
        value: cdktf.booleanToHclTerraform(this._syncLdapGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
