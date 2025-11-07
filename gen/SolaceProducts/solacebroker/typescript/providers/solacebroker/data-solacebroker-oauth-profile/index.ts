// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerOauthProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile#oauth_profile_name DataSolacebrokerOauthProfile#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile solacebroker_oauth_profile}
*/
export class DataSolacebrokerOauthProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerOauthProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerOauthProfile to import
  * @param importFromId The id of the existing DataSolacebrokerOauthProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerOauthProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile solacebroker_oauth_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerOauthProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerOauthProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._oauthProfileName = config.oauthProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level_groups_claim_name - computed: true, optional: false, required: false
  public get accessLevelGroupsClaimName() {
    return this.getStringAttribute('access_level_groups_claim_name');
  }

  // access_level_groups_claim_string_format - computed: true, optional: false, required: false
  public get accessLevelGroupsClaimStringFormat() {
    return this.getStringAttribute('access_level_groups_claim_string_format');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_redirect_uri - computed: true, optional: false, required: false
  public get clientRedirectUri() {
    return this.getStringAttribute('client_redirect_uri');
  }

  // client_required_type - computed: true, optional: false, required: false
  public get clientRequiredType() {
    return this.getStringAttribute('client_required_type');
  }

  // client_scope - computed: true, optional: false, required: false
  public get clientScope() {
    return this.getStringAttribute('client_scope');
  }

  // client_validate_type_enabled - computed: true, optional: false, required: false
  public get clientValidateTypeEnabled() {
    return this.getBooleanAttribute('client_validate_type_enabled');
  }

  // default_global_access_level - computed: true, optional: false, required: false
  public get defaultGlobalAccessLevel() {
    return this.getStringAttribute('default_global_access_level');
  }

  // default_msg_vpn_access_level - computed: true, optional: false, required: false
  public get defaultMsgVpnAccessLevel() {
    return this.getStringAttribute('default_msg_vpn_access_level');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // endpoint_authorization - computed: true, optional: false, required: false
  public get endpointAuthorization() {
    return this.getStringAttribute('endpoint_authorization');
  }

  // endpoint_discovery - computed: true, optional: false, required: false
  public get endpointDiscovery() {
    return this.getStringAttribute('endpoint_discovery');
  }

  // endpoint_discovery_refresh_interval - computed: true, optional: false, required: false
  public get endpointDiscoveryRefreshInterval() {
    return this.getNumberAttribute('endpoint_discovery_refresh_interval');
  }

  // endpoint_introspection - computed: true, optional: false, required: false
  public get endpointIntrospection() {
    return this.getStringAttribute('endpoint_introspection');
  }

  // endpoint_introspection_timeout - computed: true, optional: false, required: false
  public get endpointIntrospectionTimeout() {
    return this.getNumberAttribute('endpoint_introspection_timeout');
  }

  // endpoint_jwks - computed: true, optional: false, required: false
  public get endpointJwks() {
    return this.getStringAttribute('endpoint_jwks');
  }

  // endpoint_jwks_refresh_interval - computed: true, optional: false, required: false
  public get endpointJwksRefreshInterval() {
    return this.getNumberAttribute('endpoint_jwks_refresh_interval');
  }

  // endpoint_token - computed: true, optional: false, required: false
  public get endpointToken() {
    return this.getStringAttribute('endpoint_token');
  }

  // endpoint_token_timeout - computed: true, optional: false, required: false
  public get endpointTokenTimeout() {
    return this.getNumberAttribute('endpoint_token_timeout');
  }

  // endpoint_userinfo - computed: true, optional: false, required: false
  public get endpointUserinfo() {
    return this.getStringAttribute('endpoint_userinfo');
  }

  // endpoint_userinfo_timeout - computed: true, optional: false, required: false
  public get endpointUserinfoTimeout() {
    return this.getNumberAttribute('endpoint_userinfo_timeout');
  }

  // interactive_enabled - computed: true, optional: false, required: false
  public get interactiveEnabled() {
    return this.getBooleanAttribute('interactive_enabled');
  }

  // interactive_prompt_for_expired_session - computed: true, optional: false, required: false
  public get interactivePromptForExpiredSession() {
    return this.getStringAttribute('interactive_prompt_for_expired_session');
  }

  // interactive_prompt_for_new_session - computed: true, optional: false, required: false
  public get interactivePromptForNewSession() {
    return this.getStringAttribute('interactive_prompt_for_new_session');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // oauth_profile_name - computed: false, optional: false, required: true
  private _oauthProfileName?: string; 
  public get oauthProfileName() {
    return this.getStringAttribute('oauth_profile_name');
  }
  public set oauthProfileName(value: string) {
    this._oauthProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileNameInput() {
    return this._oauthProfileName;
  }

  // oauth_role - computed: true, optional: false, required: false
  public get oauthRole() {
    return this.getStringAttribute('oauth_role');
  }

  // proxy_name - computed: true, optional: false, required: false
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }

  // resource_server_parse_access_token_enabled - computed: true, optional: false, required: false
  public get resourceServerParseAccessTokenEnabled() {
    return this.getBooleanAttribute('resource_server_parse_access_token_enabled');
  }

  // resource_server_required_audience - computed: true, optional: false, required: false
  public get resourceServerRequiredAudience() {
    return this.getStringAttribute('resource_server_required_audience');
  }

  // resource_server_required_issuer - computed: true, optional: false, required: false
  public get resourceServerRequiredIssuer() {
    return this.getStringAttribute('resource_server_required_issuer');
  }

  // resource_server_required_scope - computed: true, optional: false, required: false
  public get resourceServerRequiredScope() {
    return this.getStringAttribute('resource_server_required_scope');
  }

  // resource_server_required_type - computed: true, optional: false, required: false
  public get resourceServerRequiredType() {
    return this.getStringAttribute('resource_server_required_type');
  }

  // resource_server_validate_audience_enabled - computed: true, optional: false, required: false
  public get resourceServerValidateAudienceEnabled() {
    return this.getBooleanAttribute('resource_server_validate_audience_enabled');
  }

  // resource_server_validate_issuer_enabled - computed: true, optional: false, required: false
  public get resourceServerValidateIssuerEnabled() {
    return this.getBooleanAttribute('resource_server_validate_issuer_enabled');
  }

  // resource_server_validate_scope_enabled - computed: true, optional: false, required: false
  public get resourceServerValidateScopeEnabled() {
    return this.getBooleanAttribute('resource_server_validate_scope_enabled');
  }

  // resource_server_validate_type_enabled - computed: true, optional: false, required: false
  public get resourceServerValidateTypeEnabled() {
    return this.getBooleanAttribute('resource_server_validate_type_enabled');
  }

  // semp_enabled - computed: true, optional: false, required: false
  public get sempEnabled() {
    return this.getBooleanAttribute('semp_enabled');
  }

  // username_claim_name - computed: true, optional: false, required: false
  public get usernameClaimName() {
    return this.getStringAttribute('username_claim_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oauth_profile_name: {
        value: cdktf.stringToHclTerraform(this._oauthProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
