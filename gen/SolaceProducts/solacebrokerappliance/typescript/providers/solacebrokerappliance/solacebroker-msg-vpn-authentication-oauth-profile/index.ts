// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnAuthenticationOauthProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the groups claim. If non-empty, the specified claim will be used to determine groups for authorization. If empty, the authorization_type attribute of the Message VPN will be used to determine authorization.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"groups"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#authorization_groups_claim_name SolacebrokerMsgVpnAuthenticationOauthProfile#authorization_groups_claim_name}
  */
  readonly authorizationGroupsClaimName?: string;
  /**
  * The format of the authorization groups claim value when it is a string.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"single"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "single" - When the claim is a string, it is interpreted as as single group.
  * "space-delimited" - When the claim is a string, it is interpreted as a space-delimited list of groups, similar to the "scope" claim.
  * </pre>
  *  Available since SEMP API version 2.32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#authorization_groups_claim_string_format SolacebrokerMsgVpnAuthenticationOauthProfile#authorization_groups_claim_string_format}
  */
  readonly authorizationGroupsClaimStringFormat?: string;
  /**
  * The OAuth client id.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#client_id SolacebrokerMsgVpnAuthenticationOauthProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * The required value for the TYP field in the ID token header.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"JWT"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#client_required_type SolacebrokerMsgVpnAuthenticationOauthProfile#client_required_type}
  */
  readonly clientRequiredType?: string;
  /**
  * The OAuth client secret.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#client_secret SolacebrokerMsgVpnAuthenticationOauthProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Enable or disable verification of the TYP field in the ID token header.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#client_validate_type_enabled SolacebrokerMsgVpnAuthenticationOauthProfile#client_validate_type_enabled}
  */
  readonly clientValidateTypeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the disconnection of clients when their tokens expire. Changing this value does not affect existing clients, only new client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#disconnect_on_token_expiration_enabled SolacebrokerMsgVpnAuthenticationOauthProfile#disconnect_on_token_expiration_enabled}
  */
  readonly disconnectOnTokenExpirationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#enabled SolacebrokerMsgVpnAuthenticationOauthProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The OpenID Connect discovery endpoint or OAuth Authorization Server Metadata endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#endpoint_discovery SolacebrokerMsgVpnAuthenticationOauthProfile#endpoint_discovery}
  */
  readonly endpointDiscovery?: string;
  /**
  * The number of seconds between discovery endpoint requests.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#endpoint_discovery_refresh_interval SolacebrokerMsgVpnAuthenticationOauthProfile#endpoint_discovery_refresh_interval}
  */
  readonly endpointDiscoveryRefreshInterval?: number;
  /**
  * The OAuth introspection endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#endpoint_introspection SolacebrokerMsgVpnAuthenticationOauthProfile#endpoint_introspection}
  */
  readonly endpointIntrospection?: string;
  /**
  * The maximum time in seconds a token introspection request is allowed to take.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#endpoint_introspection_timeout SolacebrokerMsgVpnAuthenticationOauthProfile#endpoint_introspection_timeout}
  */
  readonly endpointIntrospectionTimeout?: number;
  /**
  * The OAuth JWKS endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#endpoint_jwks SolacebrokerMsgVpnAuthenticationOauthProfile#endpoint_jwks}
  */
  readonly endpointJwks?: string;
  /**
  * The number of seconds between JWKS endpoint requests.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#endpoint_jwks_refresh_interval SolacebrokerMsgVpnAuthenticationOauthProfile#endpoint_jwks_refresh_interval}
  */
  readonly endpointJwksRefreshInterval?: number;
  /**
  * The OpenID Connect Userinfo endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#endpoint_userinfo SolacebrokerMsgVpnAuthenticationOauthProfile#endpoint_userinfo}
  */
  readonly endpointUserinfo?: string;
  /**
  * The maximum time in seconds a userinfo request is allowed to take.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#endpoint_userinfo_timeout SolacebrokerMsgVpnAuthenticationOauthProfile#endpoint_userinfo_timeout}
  */
  readonly endpointUserinfoTimeout?: number;
  /**
  * The Issuer Identifier for the OAuth provider.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#issuer SolacebrokerMsgVpnAuthenticationOauthProfile#issuer}
  */
  readonly issuer?: string;
  /**
  * Enable or disable whether the API provided MQTT client username will be validated against the username calculated from the token(s). When enabled, connection attempts by MQTT clients are rejected if they differ. Note that this value only applies to MQTT clients; SMF client usernames will not be validated.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#mqtt_username_validate_enabled SolacebrokerMsgVpnAuthenticationOauthProfile#mqtt_username_validate_enabled}
  */
  readonly mqttUsernameValidateEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#msg_vpn_name SolacebrokerMsgVpnAuthenticationOauthProfile#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#oauth_profile_name SolacebrokerMsgVpnAuthenticationOauthProfile#oauth_profile_name}
  */
  readonly oauthProfileName: string;
  /**
  * The OAuth role of the broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"client"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "client" - The broker is in the OAuth client role.
  * "resource-server" - The broker is in the OAuth resource server role.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#oauth_role SolacebrokerMsgVpnAuthenticationOauthProfile#oauth_role}
  */
  readonly oauthRole?: string;
  /**
  * The name of the proxy to use for discovery, user info, jwks, and introspection requests. Leave empty for no proxy.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.41.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#proxy_name SolacebrokerMsgVpnAuthenticationOauthProfile#proxy_name}
  */
  readonly proxyName?: string;
  /**
  * Enable or disable parsing of the access token as a JWT.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_parse_access_token_enabled SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_parse_access_token_enabled}
  */
  readonly resourceServerParseAccessTokenEnabled?: boolean | cdktf.IResolvable;
  /**
  * The required audience value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_required_audience SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_required_audience}
  */
  readonly resourceServerRequiredAudience?: string;
  /**
  * The required issuer value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_required_issuer SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_required_issuer}
  */
  readonly resourceServerRequiredIssuer?: string;
  /**
  * A space-separated list of scopes that must be present in the scope claim.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_required_scope SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_required_scope}
  */
  readonly resourceServerRequiredScope?: string;
  /**
  * The required TYP value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"at+jwt"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_required_type SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_required_type}
  */
  readonly resourceServerRequiredType?: string;
  /**
  * Enable or disable verification of the audience claim in the access token or introspection response.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_validate_audience_enabled SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_validate_audience_enabled}
  */
  readonly resourceServerValidateAudienceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable verification of the issuer claim in the access token or introspection response.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_validate_issuer_enabled SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_validate_issuer_enabled}
  */
  readonly resourceServerValidateIssuerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable verification of the scope claim in the access token or introspection response.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_validate_scope_enabled SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_validate_scope_enabled}
  */
  readonly resourceServerValidateScopeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable verification of the TYP field in the access token header.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#resource_server_validate_type_enabled SolacebrokerMsgVpnAuthenticationOauthProfile#resource_server_validate_type_enabled}
  */
  readonly resourceServerValidateTypeEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the username claim.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"sub"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#username_claim_name SolacebrokerMsgVpnAuthenticationOauthProfile#username_claim_name}
  */
  readonly usernameClaimName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile solacebroker_msg_vpn_authentication_oauth_profile}
*/
export class SolacebrokerMsgVpnAuthenticationOauthProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_authentication_oauth_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnAuthenticationOauthProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnAuthenticationOauthProfile to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnAuthenticationOauthProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnAuthenticationOauthProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_authentication_oauth_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_authentication_oauth_profile solacebroker_msg_vpn_authentication_oauth_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnAuthenticationOauthProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnAuthenticationOauthProfileConfig) {
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
    this._authorizationGroupsClaimName = config.authorizationGroupsClaimName;
    this._authorizationGroupsClaimStringFormat = config.authorizationGroupsClaimStringFormat;
    this._clientId = config.clientId;
    this._clientRequiredType = config.clientRequiredType;
    this._clientSecret = config.clientSecret;
    this._clientValidateTypeEnabled = config.clientValidateTypeEnabled;
    this._disconnectOnTokenExpirationEnabled = config.disconnectOnTokenExpirationEnabled;
    this._enabled = config.enabled;
    this._endpointDiscovery = config.endpointDiscovery;
    this._endpointDiscoveryRefreshInterval = config.endpointDiscoveryRefreshInterval;
    this._endpointIntrospection = config.endpointIntrospection;
    this._endpointIntrospectionTimeout = config.endpointIntrospectionTimeout;
    this._endpointJwks = config.endpointJwks;
    this._endpointJwksRefreshInterval = config.endpointJwksRefreshInterval;
    this._endpointUserinfo = config.endpointUserinfo;
    this._endpointUserinfoTimeout = config.endpointUserinfoTimeout;
    this._issuer = config.issuer;
    this._mqttUsernameValidateEnabled = config.mqttUsernameValidateEnabled;
    this._msgVpnName = config.msgVpnName;
    this._oauthProfileName = config.oauthProfileName;
    this._oauthRole = config.oauthRole;
    this._proxyName = config.proxyName;
    this._resourceServerParseAccessTokenEnabled = config.resourceServerParseAccessTokenEnabled;
    this._resourceServerRequiredAudience = config.resourceServerRequiredAudience;
    this._resourceServerRequiredIssuer = config.resourceServerRequiredIssuer;
    this._resourceServerRequiredScope = config.resourceServerRequiredScope;
    this._resourceServerRequiredType = config.resourceServerRequiredType;
    this._resourceServerValidateAudienceEnabled = config.resourceServerValidateAudienceEnabled;
    this._resourceServerValidateIssuerEnabled = config.resourceServerValidateIssuerEnabled;
    this._resourceServerValidateScopeEnabled = config.resourceServerValidateScopeEnabled;
    this._resourceServerValidateTypeEnabled = config.resourceServerValidateTypeEnabled;
    this._usernameClaimName = config.usernameClaimName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_groups_claim_name - computed: false, optional: true, required: false
  private _authorizationGroupsClaimName?: string; 
  public get authorizationGroupsClaimName() {
    return this.getStringAttribute('authorization_groups_claim_name');
  }
  public set authorizationGroupsClaimName(value: string) {
    this._authorizationGroupsClaimName = value;
  }
  public resetAuthorizationGroupsClaimName() {
    this._authorizationGroupsClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationGroupsClaimNameInput() {
    return this._authorizationGroupsClaimName;
  }

  // authorization_groups_claim_string_format - computed: false, optional: true, required: false
  private _authorizationGroupsClaimStringFormat?: string; 
  public get authorizationGroupsClaimStringFormat() {
    return this.getStringAttribute('authorization_groups_claim_string_format');
  }
  public set authorizationGroupsClaimStringFormat(value: string) {
    this._authorizationGroupsClaimStringFormat = value;
  }
  public resetAuthorizationGroupsClaimStringFormat() {
    this._authorizationGroupsClaimStringFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationGroupsClaimStringFormatInput() {
    return this._authorizationGroupsClaimStringFormat;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_required_type - computed: false, optional: true, required: false
  private _clientRequiredType?: string; 
  public get clientRequiredType() {
    return this.getStringAttribute('client_required_type');
  }
  public set clientRequiredType(value: string) {
    this._clientRequiredType = value;
  }
  public resetClientRequiredType() {
    this._clientRequiredType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequiredTypeInput() {
    return this._clientRequiredType;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_validate_type_enabled - computed: false, optional: true, required: false
  private _clientValidateTypeEnabled?: boolean | cdktf.IResolvable; 
  public get clientValidateTypeEnabled() {
    return this.getBooleanAttribute('client_validate_type_enabled');
  }
  public set clientValidateTypeEnabled(value: boolean | cdktf.IResolvable) {
    this._clientValidateTypeEnabled = value;
  }
  public resetClientValidateTypeEnabled() {
    this._clientValidateTypeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientValidateTypeEnabledInput() {
    return this._clientValidateTypeEnabled;
  }

  // disconnect_on_token_expiration_enabled - computed: false, optional: true, required: false
  private _disconnectOnTokenExpirationEnabled?: boolean | cdktf.IResolvable; 
  public get disconnectOnTokenExpirationEnabled() {
    return this.getBooleanAttribute('disconnect_on_token_expiration_enabled');
  }
  public set disconnectOnTokenExpirationEnabled(value: boolean | cdktf.IResolvable) {
    this._disconnectOnTokenExpirationEnabled = value;
  }
  public resetDisconnectOnTokenExpirationEnabled() {
    this._disconnectOnTokenExpirationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectOnTokenExpirationEnabledInput() {
    return this._disconnectOnTokenExpirationEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint_discovery - computed: false, optional: true, required: false
  private _endpointDiscovery?: string; 
  public get endpointDiscovery() {
    return this.getStringAttribute('endpoint_discovery');
  }
  public set endpointDiscovery(value: string) {
    this._endpointDiscovery = value;
  }
  public resetEndpointDiscovery() {
    this._endpointDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDiscoveryInput() {
    return this._endpointDiscovery;
  }

  // endpoint_discovery_refresh_interval - computed: false, optional: true, required: false
  private _endpointDiscoveryRefreshInterval?: number; 
  public get endpointDiscoveryRefreshInterval() {
    return this.getNumberAttribute('endpoint_discovery_refresh_interval');
  }
  public set endpointDiscoveryRefreshInterval(value: number) {
    this._endpointDiscoveryRefreshInterval = value;
  }
  public resetEndpointDiscoveryRefreshInterval() {
    this._endpointDiscoveryRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDiscoveryRefreshIntervalInput() {
    return this._endpointDiscoveryRefreshInterval;
  }

  // endpoint_introspection - computed: false, optional: true, required: false
  private _endpointIntrospection?: string; 
  public get endpointIntrospection() {
    return this.getStringAttribute('endpoint_introspection');
  }
  public set endpointIntrospection(value: string) {
    this._endpointIntrospection = value;
  }
  public resetEndpointIntrospection() {
    this._endpointIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIntrospectionInput() {
    return this._endpointIntrospection;
  }

  // endpoint_introspection_timeout - computed: false, optional: true, required: false
  private _endpointIntrospectionTimeout?: number; 
  public get endpointIntrospectionTimeout() {
    return this.getNumberAttribute('endpoint_introspection_timeout');
  }
  public set endpointIntrospectionTimeout(value: number) {
    this._endpointIntrospectionTimeout = value;
  }
  public resetEndpointIntrospectionTimeout() {
    this._endpointIntrospectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIntrospectionTimeoutInput() {
    return this._endpointIntrospectionTimeout;
  }

  // endpoint_jwks - computed: false, optional: true, required: false
  private _endpointJwks?: string; 
  public get endpointJwks() {
    return this.getStringAttribute('endpoint_jwks');
  }
  public set endpointJwks(value: string) {
    this._endpointJwks = value;
  }
  public resetEndpointJwks() {
    this._endpointJwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointJwksInput() {
    return this._endpointJwks;
  }

  // endpoint_jwks_refresh_interval - computed: false, optional: true, required: false
  private _endpointJwksRefreshInterval?: number; 
  public get endpointJwksRefreshInterval() {
    return this.getNumberAttribute('endpoint_jwks_refresh_interval');
  }
  public set endpointJwksRefreshInterval(value: number) {
    this._endpointJwksRefreshInterval = value;
  }
  public resetEndpointJwksRefreshInterval() {
    this._endpointJwksRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointJwksRefreshIntervalInput() {
    return this._endpointJwksRefreshInterval;
  }

  // endpoint_userinfo - computed: false, optional: true, required: false
  private _endpointUserinfo?: string; 
  public get endpointUserinfo() {
    return this.getStringAttribute('endpoint_userinfo');
  }
  public set endpointUserinfo(value: string) {
    this._endpointUserinfo = value;
  }
  public resetEndpointUserinfo() {
    this._endpointUserinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUserinfoInput() {
    return this._endpointUserinfo;
  }

  // endpoint_userinfo_timeout - computed: false, optional: true, required: false
  private _endpointUserinfoTimeout?: number; 
  public get endpointUserinfoTimeout() {
    return this.getNumberAttribute('endpoint_userinfo_timeout');
  }
  public set endpointUserinfoTimeout(value: number) {
    this._endpointUserinfoTimeout = value;
  }
  public resetEndpointUserinfoTimeout() {
    this._endpointUserinfoTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUserinfoTimeoutInput() {
    return this._endpointUserinfoTimeout;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // mqtt_username_validate_enabled - computed: false, optional: true, required: false
  private _mqttUsernameValidateEnabled?: boolean | cdktf.IResolvable; 
  public get mqttUsernameValidateEnabled() {
    return this.getBooleanAttribute('mqtt_username_validate_enabled');
  }
  public set mqttUsernameValidateEnabled(value: boolean | cdktf.IResolvable) {
    this._mqttUsernameValidateEnabled = value;
  }
  public resetMqttUsernameValidateEnabled() {
    this._mqttUsernameValidateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttUsernameValidateEnabledInput() {
    return this._mqttUsernameValidateEnabled;
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

  // oauth_role - computed: false, optional: true, required: false
  private _oauthRole?: string; 
  public get oauthRole() {
    return this.getStringAttribute('oauth_role');
  }
  public set oauthRole(value: string) {
    this._oauthRole = value;
  }
  public resetOauthRole() {
    this._oauthRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRoleInput() {
    return this._oauthRole;
  }

  // proxy_name - computed: false, optional: true, required: false
  private _proxyName?: string; 
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }
  public set proxyName(value: string) {
    this._proxyName = value;
  }
  public resetProxyName() {
    this._proxyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNameInput() {
    return this._proxyName;
  }

  // resource_server_parse_access_token_enabled - computed: false, optional: true, required: false
  private _resourceServerParseAccessTokenEnabled?: boolean | cdktf.IResolvable; 
  public get resourceServerParseAccessTokenEnabled() {
    return this.getBooleanAttribute('resource_server_parse_access_token_enabled');
  }
  public set resourceServerParseAccessTokenEnabled(value: boolean | cdktf.IResolvable) {
    this._resourceServerParseAccessTokenEnabled = value;
  }
  public resetResourceServerParseAccessTokenEnabled() {
    this._resourceServerParseAccessTokenEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerParseAccessTokenEnabledInput() {
    return this._resourceServerParseAccessTokenEnabled;
  }

  // resource_server_required_audience - computed: false, optional: true, required: false
  private _resourceServerRequiredAudience?: string; 
  public get resourceServerRequiredAudience() {
    return this.getStringAttribute('resource_server_required_audience');
  }
  public set resourceServerRequiredAudience(value: string) {
    this._resourceServerRequiredAudience = value;
  }
  public resetResourceServerRequiredAudience() {
    this._resourceServerRequiredAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerRequiredAudienceInput() {
    return this._resourceServerRequiredAudience;
  }

  // resource_server_required_issuer - computed: false, optional: true, required: false
  private _resourceServerRequiredIssuer?: string; 
  public get resourceServerRequiredIssuer() {
    return this.getStringAttribute('resource_server_required_issuer');
  }
  public set resourceServerRequiredIssuer(value: string) {
    this._resourceServerRequiredIssuer = value;
  }
  public resetResourceServerRequiredIssuer() {
    this._resourceServerRequiredIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerRequiredIssuerInput() {
    return this._resourceServerRequiredIssuer;
  }

  // resource_server_required_scope - computed: false, optional: true, required: false
  private _resourceServerRequiredScope?: string; 
  public get resourceServerRequiredScope() {
    return this.getStringAttribute('resource_server_required_scope');
  }
  public set resourceServerRequiredScope(value: string) {
    this._resourceServerRequiredScope = value;
  }
  public resetResourceServerRequiredScope() {
    this._resourceServerRequiredScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerRequiredScopeInput() {
    return this._resourceServerRequiredScope;
  }

  // resource_server_required_type - computed: false, optional: true, required: false
  private _resourceServerRequiredType?: string; 
  public get resourceServerRequiredType() {
    return this.getStringAttribute('resource_server_required_type');
  }
  public set resourceServerRequiredType(value: string) {
    this._resourceServerRequiredType = value;
  }
  public resetResourceServerRequiredType() {
    this._resourceServerRequiredType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerRequiredTypeInput() {
    return this._resourceServerRequiredType;
  }

  // resource_server_validate_audience_enabled - computed: false, optional: true, required: false
  private _resourceServerValidateAudienceEnabled?: boolean | cdktf.IResolvable; 
  public get resourceServerValidateAudienceEnabled() {
    return this.getBooleanAttribute('resource_server_validate_audience_enabled');
  }
  public set resourceServerValidateAudienceEnabled(value: boolean | cdktf.IResolvable) {
    this._resourceServerValidateAudienceEnabled = value;
  }
  public resetResourceServerValidateAudienceEnabled() {
    this._resourceServerValidateAudienceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerValidateAudienceEnabledInput() {
    return this._resourceServerValidateAudienceEnabled;
  }

  // resource_server_validate_issuer_enabled - computed: false, optional: true, required: false
  private _resourceServerValidateIssuerEnabled?: boolean | cdktf.IResolvable; 
  public get resourceServerValidateIssuerEnabled() {
    return this.getBooleanAttribute('resource_server_validate_issuer_enabled');
  }
  public set resourceServerValidateIssuerEnabled(value: boolean | cdktf.IResolvable) {
    this._resourceServerValidateIssuerEnabled = value;
  }
  public resetResourceServerValidateIssuerEnabled() {
    this._resourceServerValidateIssuerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerValidateIssuerEnabledInput() {
    return this._resourceServerValidateIssuerEnabled;
  }

  // resource_server_validate_scope_enabled - computed: false, optional: true, required: false
  private _resourceServerValidateScopeEnabled?: boolean | cdktf.IResolvable; 
  public get resourceServerValidateScopeEnabled() {
    return this.getBooleanAttribute('resource_server_validate_scope_enabled');
  }
  public set resourceServerValidateScopeEnabled(value: boolean | cdktf.IResolvable) {
    this._resourceServerValidateScopeEnabled = value;
  }
  public resetResourceServerValidateScopeEnabled() {
    this._resourceServerValidateScopeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerValidateScopeEnabledInput() {
    return this._resourceServerValidateScopeEnabled;
  }

  // resource_server_validate_type_enabled - computed: false, optional: true, required: false
  private _resourceServerValidateTypeEnabled?: boolean | cdktf.IResolvable; 
  public get resourceServerValidateTypeEnabled() {
    return this.getBooleanAttribute('resource_server_validate_type_enabled');
  }
  public set resourceServerValidateTypeEnabled(value: boolean | cdktf.IResolvable) {
    this._resourceServerValidateTypeEnabled = value;
  }
  public resetResourceServerValidateTypeEnabled() {
    this._resourceServerValidateTypeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerValidateTypeEnabledInput() {
    return this._resourceServerValidateTypeEnabled;
  }

  // username_claim_name - computed: false, optional: true, required: false
  private _usernameClaimName?: string; 
  public get usernameClaimName() {
    return this.getStringAttribute('username_claim_name');
  }
  public set usernameClaimName(value: string) {
    this._usernameClaimName = value;
  }
  public resetUsernameClaimName() {
    this._usernameClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimNameInput() {
    return this._usernameClaimName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_groups_claim_name: cdktf.stringToTerraform(this._authorizationGroupsClaimName),
      authorization_groups_claim_string_format: cdktf.stringToTerraform(this._authorizationGroupsClaimStringFormat),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_required_type: cdktf.stringToTerraform(this._clientRequiredType),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_validate_type_enabled: cdktf.booleanToTerraform(this._clientValidateTypeEnabled),
      disconnect_on_token_expiration_enabled: cdktf.booleanToTerraform(this._disconnectOnTokenExpirationEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_discovery: cdktf.stringToTerraform(this._endpointDiscovery),
      endpoint_discovery_refresh_interval: cdktf.numberToTerraform(this._endpointDiscoveryRefreshInterval),
      endpoint_introspection: cdktf.stringToTerraform(this._endpointIntrospection),
      endpoint_introspection_timeout: cdktf.numberToTerraform(this._endpointIntrospectionTimeout),
      endpoint_jwks: cdktf.stringToTerraform(this._endpointJwks),
      endpoint_jwks_refresh_interval: cdktf.numberToTerraform(this._endpointJwksRefreshInterval),
      endpoint_userinfo: cdktf.stringToTerraform(this._endpointUserinfo),
      endpoint_userinfo_timeout: cdktf.numberToTerraform(this._endpointUserinfoTimeout),
      issuer: cdktf.stringToTerraform(this._issuer),
      mqtt_username_validate_enabled: cdktf.booleanToTerraform(this._mqttUsernameValidateEnabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
      oauth_role: cdktf.stringToTerraform(this._oauthRole),
      proxy_name: cdktf.stringToTerraform(this._proxyName),
      resource_server_parse_access_token_enabled: cdktf.booleanToTerraform(this._resourceServerParseAccessTokenEnabled),
      resource_server_required_audience: cdktf.stringToTerraform(this._resourceServerRequiredAudience),
      resource_server_required_issuer: cdktf.stringToTerraform(this._resourceServerRequiredIssuer),
      resource_server_required_scope: cdktf.stringToTerraform(this._resourceServerRequiredScope),
      resource_server_required_type: cdktf.stringToTerraform(this._resourceServerRequiredType),
      resource_server_validate_audience_enabled: cdktf.booleanToTerraform(this._resourceServerValidateAudienceEnabled),
      resource_server_validate_issuer_enabled: cdktf.booleanToTerraform(this._resourceServerValidateIssuerEnabled),
      resource_server_validate_scope_enabled: cdktf.booleanToTerraform(this._resourceServerValidateScopeEnabled),
      resource_server_validate_type_enabled: cdktf.booleanToTerraform(this._resourceServerValidateTypeEnabled),
      username_claim_name: cdktf.stringToTerraform(this._usernameClaimName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_groups_claim_name: {
        value: cdktf.stringToHclTerraform(this._authorizationGroupsClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_groups_claim_string_format: {
        value: cdktf.stringToHclTerraform(this._authorizationGroupsClaimStringFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_required_type: {
        value: cdktf.stringToHclTerraform(this._clientRequiredType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_validate_type_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientValidateTypeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disconnect_on_token_expiration_enabled: {
        value: cdktf.booleanToHclTerraform(this._disconnectOnTokenExpirationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_discovery: {
        value: cdktf.stringToHclTerraform(this._endpointDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_discovery_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._endpointDiscoveryRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint_introspection: {
        value: cdktf.stringToHclTerraform(this._endpointIntrospection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_introspection_timeout: {
        value: cdktf.numberToHclTerraform(this._endpointIntrospectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint_jwks: {
        value: cdktf.stringToHclTerraform(this._endpointJwks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_jwks_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._endpointJwksRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint_userinfo: {
        value: cdktf.stringToHclTerraform(this._endpointUserinfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_userinfo_timeout: {
        value: cdktf.numberToHclTerraform(this._endpointUserinfoTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqtt_username_validate_enabled: {
        value: cdktf.booleanToHclTerraform(this._mqttUsernameValidateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      oauth_role: {
        value: cdktf.stringToHclTerraform(this._oauthRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_name: {
        value: cdktf.stringToHclTerraform(this._proxyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_parse_access_token_enabled: {
        value: cdktf.booleanToHclTerraform(this._resourceServerParseAccessTokenEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_server_required_audience: {
        value: cdktf.stringToHclTerraform(this._resourceServerRequiredAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_required_issuer: {
        value: cdktf.stringToHclTerraform(this._resourceServerRequiredIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_required_scope: {
        value: cdktf.stringToHclTerraform(this._resourceServerRequiredScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_required_type: {
        value: cdktf.stringToHclTerraform(this._resourceServerRequiredType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_validate_audience_enabled: {
        value: cdktf.booleanToHclTerraform(this._resourceServerValidateAudienceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_server_validate_issuer_enabled: {
        value: cdktf.booleanToHclTerraform(this._resourceServerValidateIssuerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_server_validate_scope_enabled: {
        value: cdktf.booleanToHclTerraform(this._resourceServerValidateScopeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_server_validate_type_enabled: {
        value: cdktf.booleanToHclTerraform(this._resourceServerValidateTypeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username_claim_name: {
        value: cdktf.stringToHclTerraform(this._usernameClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
