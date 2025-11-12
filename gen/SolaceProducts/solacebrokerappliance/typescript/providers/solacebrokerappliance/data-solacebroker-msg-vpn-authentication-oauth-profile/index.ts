// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_authentication_oauth_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnAuthenticationOauthProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_authentication_oauth_profile#msg_vpn_name DataSolacebrokerMsgVpnAuthenticationOauthProfile#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_authentication_oauth_profile#oauth_profile_name DataSolacebrokerMsgVpnAuthenticationOauthProfile#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_authentication_oauth_profile solacebroker_msg_vpn_authentication_oauth_profile}
*/
export class DataSolacebrokerMsgVpnAuthenticationOauthProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_authentication_oauth_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnAuthenticationOauthProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnAuthenticationOauthProfile to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnAuthenticationOauthProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_authentication_oauth_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnAuthenticationOauthProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_authentication_oauth_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_authentication_oauth_profile solacebroker_msg_vpn_authentication_oauth_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnAuthenticationOauthProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnAuthenticationOauthProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_authentication_oauth_profile',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._msgVpnName = config.msgVpnName;
    this._oauthProfileName = config.oauthProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_groups_claim_name - computed: true, optional: false, required: false
  public get authorizationGroupsClaimName() {
    return this.getStringAttribute('authorization_groups_claim_name');
  }

  // authorization_groups_claim_string_format - computed: true, optional: false, required: false
  public get authorizationGroupsClaimStringFormat() {
    return this.getStringAttribute('authorization_groups_claim_string_format');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_required_type - computed: true, optional: false, required: false
  public get clientRequiredType() {
    return this.getStringAttribute('client_required_type');
  }

  // client_validate_type_enabled - computed: true, optional: false, required: false
  public get clientValidateTypeEnabled() {
    return this.getBooleanAttribute('client_validate_type_enabled');
  }

  // disconnect_on_token_expiration_enabled - computed: true, optional: false, required: false
  public get disconnectOnTokenExpirationEnabled() {
    return this.getBooleanAttribute('disconnect_on_token_expiration_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // endpoint_userinfo - computed: true, optional: false, required: false
  public get endpointUserinfo() {
    return this.getStringAttribute('endpoint_userinfo');
  }

  // endpoint_userinfo_timeout - computed: true, optional: false, required: false
  public get endpointUserinfoTimeout() {
    return this.getNumberAttribute('endpoint_userinfo_timeout');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // mqtt_username_validate_enabled - computed: true, optional: false, required: false
  public get mqttUsernameValidateEnabled() {
    return this.getBooleanAttribute('mqtt_username_validate_enabled');
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
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

  // username_claim_name - computed: true, optional: false, required: false
  public get usernameClaimName() {
    return this.getStringAttribute('username_claim_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
