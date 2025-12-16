// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the groups claim.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"groups"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#access_level_groups_claim_name OauthProfile#access_level_groups_claim_name}
  */
  readonly accessLevelGroupsClaimName?: string;
  /**
  * The format of the access level groups claim value when it is a string.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"single"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "single" - When the claim is a string, it is interpreted as as single group.
  * "space-delimited" - When the claim is a string, it is interpreted as a space-delimited list of groups, similar to the "scope" claim.
  * </pre>
  *  Available since SEMP API version 2.32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#access_level_groups_claim_string_format OauthProfile#access_level_groups_claim_string_format}
  */
  readonly accessLevelGroupsClaimStringFormat?: string;
  /**
  * The PEM formatted content for the client certificate used by the broker to login to the token and introspection endpoints. To be used when authentication_scheme is "client-certificate".
  * 
  * The minimum access scope/level required to change this attribute is "global/admin". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). The default value is `""`. Available since SEMP API version 2.47.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#authentication_client_cert_content OauthProfile#authentication_client_cert_content}
  */
  readonly authenticationClientCertContent?: string;
  /**
  * The password for the client certificate. To be used when authentication_scheme is "client-certificate".
  * 
  * The minimum access scope/level required to change this attribute is "global/admin". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). The default value is `""`. Available since SEMP API version 2.47.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#authentication_client_cert_password OauthProfile#authentication_client_cert_password}
  */
  readonly authenticationClientCertPassword?: string;
  /**
  * The authentication scheme for token and introspection requests.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"basic"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "basic" - Basic Authentication Scheme (via client id and client secret).
  * "client-certificate" - Client Certificate Authentication Scheme (via certificate file or content).
  * </pre>
  *  Available since SEMP API version 2.47.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#authentication_scheme OauthProfile#authentication_scheme}
  */
  readonly authenticationScheme?: string;
  /**
  * The OAuth client id.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#client_id OauthProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth redirect URI.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#client_redirect_uri OauthProfile#client_redirect_uri}
  */
  readonly clientRedirectUri?: string;
  /**
  * The required value for the TYP field in the ID token header.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"JWT"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#client_required_type OauthProfile#client_required_type}
  */
  readonly clientRequiredType?: string;
  /**
  * The OAuth scope.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"openid email"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#client_scope OauthProfile#client_scope}
  */
  readonly clientScope?: string;
  /**
  * The OAuth client secret.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#client_secret OauthProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Enable or disable verification of the TYP field in the ID token header.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#client_validate_type_enabled OauthProfile#client_validate_type_enabled}
  */
  readonly clientValidateTypeEnabled?: boolean | cdktf.IResolvable;
  /**
  * The default global access level for this OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"none"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - User has no access to global data.
  * "read-only" - User has read-only access to global data.
  * "mesh-manager" - User has read-write access to global data required to administer this broker as a member of a mesh of brokers.
  * "read-write" - User has read-write access to most global data.
  * "admin" - User has read-write access to all global data.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#default_global_access_level OauthProfile#default_global_access_level}
  */
  readonly defaultGlobalAccessLevel?: string;
  /**
  * The default message VPN access level for the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"none"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - User has no access to a Message VPN.
  * "read-only" - User has read-only access to a Message VPN.
  * "read-write" - User has read-write access to most Message VPN settings.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#default_msg_vpn_access_level OauthProfile#default_msg_vpn_access_level}
  */
  readonly defaultMsgVpnAccessLevel?: string;
  /**
  * The user friendly name for the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#display_name OauthProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Enable or disable the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#enabled OauthProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The OAuth authorization endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_authorization OauthProfile#endpoint_authorization}
  */
  readonly endpointAuthorization?: string;
  /**
  * The OpenID Connect discovery endpoint or OAuth Authorization Server Metadata endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_discovery OauthProfile#endpoint_discovery}
  */
  readonly endpointDiscovery?: string;
  /**
  * The number of seconds between discovery endpoint requests.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_discovery_refresh_interval OauthProfile#endpoint_discovery_refresh_interval}
  */
  readonly endpointDiscoveryRefreshInterval?: number;
  /**
  * The OAuth introspection endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_introspection OauthProfile#endpoint_introspection}
  */
  readonly endpointIntrospection?: string;
  /**
  * The maximum time in seconds a token introspection request is allowed to take.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_introspection_timeout OauthProfile#endpoint_introspection_timeout}
  */
  readonly endpointIntrospectionTimeout?: number;
  /**
  * The OAuth JWKS endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_jwks OauthProfile#endpoint_jwks}
  */
  readonly endpointJwks?: string;
  /**
  * The number of seconds between JWKS endpoint requests.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_jwks_refresh_interval OauthProfile#endpoint_jwks_refresh_interval}
  */
  readonly endpointJwksRefreshInterval?: number;
  /**
  * The OAuth token endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_token OauthProfile#endpoint_token}
  */
  readonly endpointToken?: string;
  /**
  * The maximum time in seconds a token request is allowed to take.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_token_timeout OauthProfile#endpoint_token_timeout}
  */
  readonly endpointTokenTimeout?: number;
  /**
  * The OpenID Connect Userinfo endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_userinfo OauthProfile#endpoint_userinfo}
  */
  readonly endpointUserinfo?: string;
  /**
  * The maximum time in seconds a userinfo request is allowed to take.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#endpoint_userinfo_timeout OauthProfile#endpoint_userinfo_timeout}
  */
  readonly endpointUserinfoTimeout?: number;
  /**
  * Enable or disable interactive logins via this OAuth provider.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#interactive_enabled OauthProfile#interactive_enabled}
  */
  readonly interactiveEnabled?: boolean | cdktf.IResolvable;
  /**
  * The value of the prompt parameter provided to the OAuth authorization server for login requests where the session has expired.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#interactive_prompt_for_expired_session OauthProfile#interactive_prompt_for_expired_session}
  */
  readonly interactivePromptForExpiredSession?: string;
  /**
  * The value of the prompt parameter provided to the OAuth authorization server for login requests where the session is new or the user has explicitly logged out.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"select_account"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#interactive_prompt_for_new_session OauthProfile#interactive_prompt_for_new_session}
  */
  readonly interactivePromptForNewSession?: string;
  /**
  * The Issuer Identifier for the OAuth provider.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#issuer OauthProfile#issuer}
  */
  readonly issuer?: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#oauth_profile_name OauthProfile#oauth_profile_name}
  */
  readonly oauthProfileName: string;
  /**
  * The OAuth role of the broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"client"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "client" - The broker is in the OAuth client role.
  * "resource-server" - The broker is in the OAuth resource server role.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#oauth_role OauthProfile#oauth_role}
  */
  readonly oauthRole?: string;
  /**
  * The name of the proxy to use for discovery, user info, jwks, introspection, and token requests. Leave empty for no proxy.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`. Available since SEMP API version 2.41.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#proxy_name OauthProfile#proxy_name}
  */
  readonly proxyName?: string;
  /**
  * Enable or disable parsing of the access token as a JWT.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_parse_access_token_enabled OauthProfile#resource_server_parse_access_token_enabled}
  */
  readonly resourceServerParseAccessTokenEnabled?: boolean | cdktf.IResolvable;
  /**
  * The required audience value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_required_audience OauthProfile#resource_server_required_audience}
  */
  readonly resourceServerRequiredAudience?: string;
  /**
  * The required issuer value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_required_issuer OauthProfile#resource_server_required_issuer}
  */
  readonly resourceServerRequiredIssuer?: string;
  /**
  * A space-separated list of scopes that must be present in the scope claim.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_required_scope OauthProfile#resource_server_required_scope}
  */
  readonly resourceServerRequiredScope?: string;
  /**
  * The required TYP value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"at+jwt"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_required_type OauthProfile#resource_server_required_type}
  */
  readonly resourceServerRequiredType?: string;
  /**
  * Enable or disable verification of the audience claim in the access token or introspection response.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_validate_audience_enabled OauthProfile#resource_server_validate_audience_enabled}
  */
  readonly resourceServerValidateAudienceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable verification of the issuer claim in the access token or introspection response.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_validate_issuer_enabled OauthProfile#resource_server_validate_issuer_enabled}
  */
  readonly resourceServerValidateIssuerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable verification of the scope claim in the access token or introspection response.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_validate_scope_enabled OauthProfile#resource_server_validate_scope_enabled}
  */
  readonly resourceServerValidateScopeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable verification of the TYP field in the access token header.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#resource_server_validate_type_enabled OauthProfile#resource_server_validate_type_enabled}
  */
  readonly resourceServerValidateTypeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable authentication of SEMP requests with OAuth tokens.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#semp_enabled OauthProfile#semp_enabled}
  */
  readonly sempEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the username claim.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"sub"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#username_claim_name OauthProfile#username_claim_name}
  */
  readonly usernameClaimName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile solacebroker_oauth_profile}
*/
export class OauthProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthProfile to import
  * @param importFromId The id of the existing OauthProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/oauth_profile solacebroker_oauth_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthProfileConfig
  */
  public constructor(scope: Construct, id: string, config: OauthProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevelGroupsClaimName = config.accessLevelGroupsClaimName;
    this._accessLevelGroupsClaimStringFormat = config.accessLevelGroupsClaimStringFormat;
    this._authenticationClientCertContent = config.authenticationClientCertContent;
    this._authenticationClientCertPassword = config.authenticationClientCertPassword;
    this._authenticationScheme = config.authenticationScheme;
    this._clientId = config.clientId;
    this._clientRedirectUri = config.clientRedirectUri;
    this._clientRequiredType = config.clientRequiredType;
    this._clientScope = config.clientScope;
    this._clientSecret = config.clientSecret;
    this._clientValidateTypeEnabled = config.clientValidateTypeEnabled;
    this._defaultGlobalAccessLevel = config.defaultGlobalAccessLevel;
    this._defaultMsgVpnAccessLevel = config.defaultMsgVpnAccessLevel;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._endpointAuthorization = config.endpointAuthorization;
    this._endpointDiscovery = config.endpointDiscovery;
    this._endpointDiscoveryRefreshInterval = config.endpointDiscoveryRefreshInterval;
    this._endpointIntrospection = config.endpointIntrospection;
    this._endpointIntrospectionTimeout = config.endpointIntrospectionTimeout;
    this._endpointJwks = config.endpointJwks;
    this._endpointJwksRefreshInterval = config.endpointJwksRefreshInterval;
    this._endpointToken = config.endpointToken;
    this._endpointTokenTimeout = config.endpointTokenTimeout;
    this._endpointUserinfo = config.endpointUserinfo;
    this._endpointUserinfoTimeout = config.endpointUserinfoTimeout;
    this._interactiveEnabled = config.interactiveEnabled;
    this._interactivePromptForExpiredSession = config.interactivePromptForExpiredSession;
    this._interactivePromptForNewSession = config.interactivePromptForNewSession;
    this._issuer = config.issuer;
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
    this._sempEnabled = config.sempEnabled;
    this._usernameClaimName = config.usernameClaimName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level_groups_claim_name - computed: false, optional: true, required: false
  private _accessLevelGroupsClaimName?: string; 
  public get accessLevelGroupsClaimName() {
    return this.getStringAttribute('access_level_groups_claim_name');
  }
  public set accessLevelGroupsClaimName(value: string) {
    this._accessLevelGroupsClaimName = value;
  }
  public resetAccessLevelGroupsClaimName() {
    this._accessLevelGroupsClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelGroupsClaimNameInput() {
    return this._accessLevelGroupsClaimName;
  }

  // access_level_groups_claim_string_format - computed: false, optional: true, required: false
  private _accessLevelGroupsClaimStringFormat?: string; 
  public get accessLevelGroupsClaimStringFormat() {
    return this.getStringAttribute('access_level_groups_claim_string_format');
  }
  public set accessLevelGroupsClaimStringFormat(value: string) {
    this._accessLevelGroupsClaimStringFormat = value;
  }
  public resetAccessLevelGroupsClaimStringFormat() {
    this._accessLevelGroupsClaimStringFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelGroupsClaimStringFormatInput() {
    return this._accessLevelGroupsClaimStringFormat;
  }

  // authentication_client_cert_content - computed: false, optional: true, required: false
  private _authenticationClientCertContent?: string; 
  public get authenticationClientCertContent() {
    return this.getStringAttribute('authentication_client_cert_content');
  }
  public set authenticationClientCertContent(value: string) {
    this._authenticationClientCertContent = value;
  }
  public resetAuthenticationClientCertContent() {
    this._authenticationClientCertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertContentInput() {
    return this._authenticationClientCertContent;
  }

  // authentication_client_cert_password - computed: false, optional: true, required: false
  private _authenticationClientCertPassword?: string; 
  public get authenticationClientCertPassword() {
    return this.getStringAttribute('authentication_client_cert_password');
  }
  public set authenticationClientCertPassword(value: string) {
    this._authenticationClientCertPassword = value;
  }
  public resetAuthenticationClientCertPassword() {
    this._authenticationClientCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClientCertPasswordInput() {
    return this._authenticationClientCertPassword;
  }

  // authentication_scheme - computed: false, optional: true, required: false
  private _authenticationScheme?: string; 
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }
  public set authenticationScheme(value: string) {
    this._authenticationScheme = value;
  }
  public resetAuthenticationScheme() {
    this._authenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSchemeInput() {
    return this._authenticationScheme;
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

  // client_redirect_uri - computed: false, optional: true, required: false
  private _clientRedirectUri?: string; 
  public get clientRedirectUri() {
    return this.getStringAttribute('client_redirect_uri');
  }
  public set clientRedirectUri(value: string) {
    this._clientRedirectUri = value;
  }
  public resetClientRedirectUri() {
    this._clientRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRedirectUriInput() {
    return this._clientRedirectUri;
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

  // client_scope - computed: false, optional: true, required: false
  private _clientScope?: string; 
  public get clientScope() {
    return this.getStringAttribute('client_scope');
  }
  public set clientScope(value: string) {
    this._clientScope = value;
  }
  public resetClientScope() {
    this._clientScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopeInput() {
    return this._clientScope;
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

  // default_global_access_level - computed: false, optional: true, required: false
  private _defaultGlobalAccessLevel?: string; 
  public get defaultGlobalAccessLevel() {
    return this.getStringAttribute('default_global_access_level');
  }
  public set defaultGlobalAccessLevel(value: string) {
    this._defaultGlobalAccessLevel = value;
  }
  public resetDefaultGlobalAccessLevel() {
    this._defaultGlobalAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGlobalAccessLevelInput() {
    return this._defaultGlobalAccessLevel;
  }

  // default_msg_vpn_access_level - computed: false, optional: true, required: false
  private _defaultMsgVpnAccessLevel?: string; 
  public get defaultMsgVpnAccessLevel() {
    return this.getStringAttribute('default_msg_vpn_access_level');
  }
  public set defaultMsgVpnAccessLevel(value: string) {
    this._defaultMsgVpnAccessLevel = value;
  }
  public resetDefaultMsgVpnAccessLevel() {
    this._defaultMsgVpnAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMsgVpnAccessLevelInput() {
    return this._defaultMsgVpnAccessLevel;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // endpoint_authorization - computed: false, optional: true, required: false
  private _endpointAuthorization?: string; 
  public get endpointAuthorization() {
    return this.getStringAttribute('endpoint_authorization');
  }
  public set endpointAuthorization(value: string) {
    this._endpointAuthorization = value;
  }
  public resetEndpointAuthorization() {
    this._endpointAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAuthorizationInput() {
    return this._endpointAuthorization;
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

  // endpoint_token - computed: false, optional: true, required: false
  private _endpointToken?: string; 
  public get endpointToken() {
    return this.getStringAttribute('endpoint_token');
  }
  public set endpointToken(value: string) {
    this._endpointToken = value;
  }
  public resetEndpointToken() {
    this._endpointToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTokenInput() {
    return this._endpointToken;
  }

  // endpoint_token_timeout - computed: false, optional: true, required: false
  private _endpointTokenTimeout?: number; 
  public get endpointTokenTimeout() {
    return this.getNumberAttribute('endpoint_token_timeout');
  }
  public set endpointTokenTimeout(value: number) {
    this._endpointTokenTimeout = value;
  }
  public resetEndpointTokenTimeout() {
    this._endpointTokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTokenTimeoutInput() {
    return this._endpointTokenTimeout;
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

  // interactive_enabled - computed: false, optional: true, required: false
  private _interactiveEnabled?: boolean | cdktf.IResolvable; 
  public get interactiveEnabled() {
    return this.getBooleanAttribute('interactive_enabled');
  }
  public set interactiveEnabled(value: boolean | cdktf.IResolvable) {
    this._interactiveEnabled = value;
  }
  public resetInteractiveEnabled() {
    this._interactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveEnabledInput() {
    return this._interactiveEnabled;
  }

  // interactive_prompt_for_expired_session - computed: false, optional: true, required: false
  private _interactivePromptForExpiredSession?: string; 
  public get interactivePromptForExpiredSession() {
    return this.getStringAttribute('interactive_prompt_for_expired_session');
  }
  public set interactivePromptForExpiredSession(value: string) {
    this._interactivePromptForExpiredSession = value;
  }
  public resetInteractivePromptForExpiredSession() {
    this._interactivePromptForExpiredSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactivePromptForExpiredSessionInput() {
    return this._interactivePromptForExpiredSession;
  }

  // interactive_prompt_for_new_session - computed: false, optional: true, required: false
  private _interactivePromptForNewSession?: string; 
  public get interactivePromptForNewSession() {
    return this.getStringAttribute('interactive_prompt_for_new_session');
  }
  public set interactivePromptForNewSession(value: string) {
    this._interactivePromptForNewSession = value;
  }
  public resetInteractivePromptForNewSession() {
    this._interactivePromptForNewSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactivePromptForNewSessionInput() {
    return this._interactivePromptForNewSession;
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

  // semp_enabled - computed: false, optional: true, required: false
  private _sempEnabled?: boolean | cdktf.IResolvable; 
  public get sempEnabled() {
    return this.getBooleanAttribute('semp_enabled');
  }
  public set sempEnabled(value: boolean | cdktf.IResolvable) {
    this._sempEnabled = value;
  }
  public resetSempEnabled() {
    this._sempEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sempEnabledInput() {
    return this._sempEnabled;
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
      access_level_groups_claim_name: cdktf.stringToTerraform(this._accessLevelGroupsClaimName),
      access_level_groups_claim_string_format: cdktf.stringToTerraform(this._accessLevelGroupsClaimStringFormat),
      authentication_client_cert_content: cdktf.stringToTerraform(this._authenticationClientCertContent),
      authentication_client_cert_password: cdktf.stringToTerraform(this._authenticationClientCertPassword),
      authentication_scheme: cdktf.stringToTerraform(this._authenticationScheme),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_redirect_uri: cdktf.stringToTerraform(this._clientRedirectUri),
      client_required_type: cdktf.stringToTerraform(this._clientRequiredType),
      client_scope: cdktf.stringToTerraform(this._clientScope),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_validate_type_enabled: cdktf.booleanToTerraform(this._clientValidateTypeEnabled),
      default_global_access_level: cdktf.stringToTerraform(this._defaultGlobalAccessLevel),
      default_msg_vpn_access_level: cdktf.stringToTerraform(this._defaultMsgVpnAccessLevel),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_authorization: cdktf.stringToTerraform(this._endpointAuthorization),
      endpoint_discovery: cdktf.stringToTerraform(this._endpointDiscovery),
      endpoint_discovery_refresh_interval: cdktf.numberToTerraform(this._endpointDiscoveryRefreshInterval),
      endpoint_introspection: cdktf.stringToTerraform(this._endpointIntrospection),
      endpoint_introspection_timeout: cdktf.numberToTerraform(this._endpointIntrospectionTimeout),
      endpoint_jwks: cdktf.stringToTerraform(this._endpointJwks),
      endpoint_jwks_refresh_interval: cdktf.numberToTerraform(this._endpointJwksRefreshInterval),
      endpoint_token: cdktf.stringToTerraform(this._endpointToken),
      endpoint_token_timeout: cdktf.numberToTerraform(this._endpointTokenTimeout),
      endpoint_userinfo: cdktf.stringToTerraform(this._endpointUserinfo),
      endpoint_userinfo_timeout: cdktf.numberToTerraform(this._endpointUserinfoTimeout),
      interactive_enabled: cdktf.booleanToTerraform(this._interactiveEnabled),
      interactive_prompt_for_expired_session: cdktf.stringToTerraform(this._interactivePromptForExpiredSession),
      interactive_prompt_for_new_session: cdktf.stringToTerraform(this._interactivePromptForNewSession),
      issuer: cdktf.stringToTerraform(this._issuer),
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
      semp_enabled: cdktf.booleanToTerraform(this._sempEnabled),
      username_claim_name: cdktf.stringToTerraform(this._usernameClaimName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level_groups_claim_name: {
        value: cdktf.stringToHclTerraform(this._accessLevelGroupsClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_level_groups_claim_string_format: {
        value: cdktf.stringToHclTerraform(this._accessLevelGroupsClaimStringFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_content: {
        value: cdktf.stringToHclTerraform(this._authenticationClientCertContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_client_cert_password: {
        value: cdktf.stringToHclTerraform(this._authenticationClientCertPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._authenticationScheme),
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
      client_redirect_uri: {
        value: cdktf.stringToHclTerraform(this._clientRedirectUri),
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
      client_scope: {
        value: cdktf.stringToHclTerraform(this._clientScope),
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
      default_global_access_level: {
        value: cdktf.stringToHclTerraform(this._defaultGlobalAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_msg_vpn_access_level: {
        value: cdktf.stringToHclTerraform(this._defaultMsgVpnAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_authorization: {
        value: cdktf.stringToHclTerraform(this._endpointAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      endpoint_token: {
        value: cdktf.stringToHclTerraform(this._endpointToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_token_timeout: {
        value: cdktf.numberToHclTerraform(this._endpointTokenTimeout),
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
      interactive_enabled: {
        value: cdktf.booleanToHclTerraform(this._interactiveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interactive_prompt_for_expired_session: {
        value: cdktf.stringToHclTerraform(this._interactivePromptForExpiredSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interactive_prompt_for_new_session: {
        value: cdktf.stringToHclTerraform(this._interactivePromptForNewSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      semp_enabled: {
        value: cdktf.booleanToHclTerraform(this._sempEnabled),
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
