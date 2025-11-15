// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiMcpOauth2Config extends cdktf.TerraformMetaArguments {
  /**
  * The configuration for MCP authorization in OAuth2. If this is enabled, make sure the configured metadata_endpoint is also covered by the same route so the authorization can be applied correctly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#config GatewayPluginAiMcpOauth2#config}
  */
  readonly config?: GatewayPluginAiMcpOauth2ConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#control_plane_id GatewayPluginAiMcpOauth2#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#created_at GatewayPluginAiMcpOauth2#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#enabled GatewayPluginAiMcpOauth2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#id GatewayPluginAiMcpOauth2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#instance_name GatewayPluginAiMcpOauth2#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#ordering GatewayPluginAiMcpOauth2#ordering}
  */
  readonly ordering?: GatewayPluginAiMcpOauth2Ordering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#partials GatewayPluginAiMcpOauth2#partials}
  */
  readonly partials?: GatewayPluginAiMcpOauth2Partials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#protocols GatewayPluginAiMcpOauth2#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#route GatewayPluginAiMcpOauth2#route}
  */
  readonly route?: GatewayPluginAiMcpOauth2Route;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#service GatewayPluginAiMcpOauth2#service}
  */
  readonly service?: GatewayPluginAiMcpOauth2Service;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#tags GatewayPluginAiMcpOauth2#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#updated_at GatewayPluginAiMcpOauth2#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiMcpOauth2ConfigClaimToHeader {
  /**
  * The claim name to be used in the access token. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#claim GatewayPluginAiMcpOauth2#claim}
  */
  readonly claim?: string;
  /**
  * The HTTP header name to be used for forwarding the claim value to the upstream. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#header GatewayPluginAiMcpOauth2#header}
  */
  readonly header?: string;
}

export function gatewayPluginAiMcpOauth2ConfigClaimToHeaderToTerraform(struct?: GatewayPluginAiMcpOauth2ConfigClaimToHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    header: cdktf.stringToTerraform(struct!.header),
  }
}


export function gatewayPluginAiMcpOauth2ConfigClaimToHeaderToHclTerraform(struct?: GatewayPluginAiMcpOauth2ConfigClaimToHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpOauth2ConfigClaimToHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GatewayPluginAiMcpOauth2ConfigClaimToHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpOauth2ConfigClaimToHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._header = value.header;
    }
  }

  // claim - computed: true, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class GatewayPluginAiMcpOauth2ConfigClaimToHeaderList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiMcpOauth2ConfigClaimToHeader[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GatewayPluginAiMcpOauth2ConfigClaimToHeaderOutputReference {
    return new GatewayPluginAiMcpOauth2ConfigClaimToHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiMcpOauth2ConfigA {
  /**
  * Additional arguments to send in the POST body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#args GatewayPluginAiMcpOauth2#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#authorization_servers GatewayPluginAiMcpOauth2#authorization_servers}
  */
  readonly authorizationServers: string[];
  /**
  * If enabled, the plugin will cache the introspection response for the access token. This can improve performance by reducing the number of introspection requests to the authorization server. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#cache_introspection GatewayPluginAiMcpOauth2#cache_introspection}
  */
  readonly cacheIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#claim_to_header GatewayPluginAiMcpOauth2#claim_to_header}
  */
  readonly claimToHeader?: GatewayPluginAiMcpOauth2ConfigClaimToHeader[] | cdktf.IResolvable;
  /**
  * The client JWT signing algorithm. must be one of ["ES256", "ES384", "ES512", "EdDSA", "HS256", "HS384", "HS512", "PS256", "PS384", "PS512", "RS256", "RS384", "RS512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#client_alg GatewayPluginAiMcpOauth2#client_alg}
  */
  readonly clientAlg?: string;
  /**
  * The client authentication method. must be one of ["client_secret_basic", "client_secret_jwt", "client_secret_post", "none", "private_key_jwt", "self_signed_tls_client_auth", "tls_client_auth"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#client_auth GatewayPluginAiMcpOauth2#client_auth}
  */
  readonly clientAuth?: string;
  /**
  * The client ID for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#client_id GatewayPluginAiMcpOauth2#client_id}
  */
  readonly clientId: string;
  /**
  * The client JWK for private_key_jwt authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#client_jwk GatewayPluginAiMcpOauth2#client_jwk}
  */
  readonly clientJwk?: string;
  /**
  * The client secret for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#client_secret GatewayPluginAiMcpOauth2#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Additional headers for the introspection request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#headers GatewayPluginAiMcpOauth2#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * HTTP proxy to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#http_proxy GatewayPluginAiMcpOauth2#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTP proxy authorization header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#http_proxy_authorization GatewayPluginAiMcpOauth2#http_proxy_authorization}
  */
  readonly httpProxyAuthorization?: string;
  /**
  * The HTTP version used for requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#http_version GatewayPluginAiMcpOauth2#http_version}
  */
  readonly httpVersion?: number;
  /**
  * HTTPS proxy to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#https_proxy GatewayPluginAiMcpOauth2#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * HTTPS proxy authorization header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#https_proxy_authorization GatewayPluginAiMcpOauth2#https_proxy_authorization}
  */
  readonly httpsProxyAuthorization?: string;
  /**
  * If enabled, the plugin will not validate the audience of the access token. Disable it if the authorization server does not correctly set the audience claim according to RFC 8707 and MCP specification. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#insecure_relaxed_audience_validation GatewayPluginAiMcpOauth2#insecure_relaxed_audience_validation}
  */
  readonly insecureRelaxedAudienceValidation?: boolean | cdktf.IResolvable;
  /**
  * The introspection endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#introspection_endpoint GatewayPluginAiMcpOauth2#introspection_endpoint}
  */
  readonly introspectionEndpoint: string;
  /**
  * Controls introspection response format. must be one of ["base64", "base64url", "string"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#introspection_format GatewayPluginAiMcpOauth2#introspection_format}
  */
  readonly introspectionFormat?: string;
  /**
  * Enable HTTP keepalive for requests. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#keepalive GatewayPluginAiMcpOauth2#keepalive}
  */
  readonly keepalive?: boolean | cdktf.IResolvable;
  /**
  * max allowed body size allowed to be handled as MCP request. Default: 8192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#max_request_body_size GatewayPluginAiMcpOauth2#max_request_body_size}
  */
  readonly maxRequestBodySize?: number;
  /**
  * The path for OAuth 2.0 Protected Resource Metadata. Default to $resource/.well-known/oauth-protected-resource. For example, if the configured resource is https://api.example.com/mcp, the metadata endpoint is /mcp/.well-known/oauth-protected-resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#metadata_endpoint GatewayPluginAiMcpOauth2#metadata_endpoint}
  */
  readonly metadataEndpoint?: string;
  /**
  * The mTLS alias for the introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#mtls_introspection_endpoint GatewayPluginAiMcpOauth2#mtls_introspection_endpoint}
  */
  readonly mtlsIntrospectionEndpoint?: string;
  /**
  * Comma-separated list of hosts to exclude from proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#no_proxy GatewayPluginAiMcpOauth2#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#resource GatewayPluginAiMcpOauth2#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#scopes_supported GatewayPluginAiMcpOauth2#scopes_supported}
  */
  readonly scopesSupported?: string[];
  /**
  * Verify the SSL certificate. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#ssl_verify GatewayPluginAiMcpOauth2#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Network I/O timeout in milliseconds. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#timeout GatewayPluginAiMcpOauth2#timeout}
  */
  readonly timeout?: number;
  /**
  * PEM-encoded client certificate for mTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#tls_client_auth_cert GatewayPluginAiMcpOauth2#tls_client_auth_cert}
  */
  readonly tlsClientAuthCert?: string;
  /**
  * PEM-encoded private key for mTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#tls_client_auth_key GatewayPluginAiMcpOauth2#tls_client_auth_key}
  */
  readonly tlsClientAuthKey?: string;
  /**
  * Verify server certificate in mTLS. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#tls_client_auth_ssl_verify GatewayPluginAiMcpOauth2#tls_client_auth_ssl_verify}
  */
  readonly tlsClientAuthSslVerify?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiMcpOauth2ConfigAToTerraform(struct?: GatewayPluginAiMcpOauth2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    authorization_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizationServers),
    cache_introspection: cdktf.booleanToTerraform(struct!.cacheIntrospection),
    claim_to_header: cdktf.listMapper(gatewayPluginAiMcpOauth2ConfigClaimToHeaderToTerraform, false)(struct!.claimToHeader),
    client_alg: cdktf.stringToTerraform(struct!.clientAlg),
    client_auth: cdktf.stringToTerraform(struct!.clientAuth),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_jwk: cdktf.stringToTerraform(struct!.clientJwk),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    http_proxy_authorization: cdktf.stringToTerraform(struct!.httpProxyAuthorization),
    http_version: cdktf.numberToTerraform(struct!.httpVersion),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    https_proxy_authorization: cdktf.stringToTerraform(struct!.httpsProxyAuthorization),
    insecure_relaxed_audience_validation: cdktf.booleanToTerraform(struct!.insecureRelaxedAudienceValidation),
    introspection_endpoint: cdktf.stringToTerraform(struct!.introspectionEndpoint),
    introspection_format: cdktf.stringToTerraform(struct!.introspectionFormat),
    keepalive: cdktf.booleanToTerraform(struct!.keepalive),
    max_request_body_size: cdktf.numberToTerraform(struct!.maxRequestBodySize),
    metadata_endpoint: cdktf.stringToTerraform(struct!.metadataEndpoint),
    mtls_introspection_endpoint: cdktf.stringToTerraform(struct!.mtlsIntrospectionEndpoint),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    resource: cdktf.stringToTerraform(struct!.resource),
    scopes_supported: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopesSupported),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tls_client_auth_cert: cdktf.stringToTerraform(struct!.tlsClientAuthCert),
    tls_client_auth_key: cdktf.stringToTerraform(struct!.tlsClientAuthKey),
    tls_client_auth_ssl_verify: cdktf.booleanToTerraform(struct!.tlsClientAuthSslVerify),
  }
}


export function gatewayPluginAiMcpOauth2ConfigAToHclTerraform(struct?: GatewayPluginAiMcpOauth2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizationServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.cacheIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    claim_to_header: {
      value: cdktf.listMapperHcl(gatewayPluginAiMcpOauth2ConfigClaimToHeaderToHclTerraform, false)(struct!.claimToHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiMcpOauth2ConfigClaimToHeaderList",
    },
    client_alg: {
      value: cdktf.stringToHclTerraform(struct!.clientAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_auth: {
      value: cdktf.stringToHclTerraform(struct!.clientAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_jwk: {
      value: cdktf.stringToHclTerraform(struct!.clientJwk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpProxyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.numberToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_relaxed_audience_validation: {
      value: cdktf.booleanToHclTerraform(struct!.insecureRelaxedAudienceValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    introspection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.introspectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    introspection_format: {
      value: cdktf.stringToHclTerraform(struct!.introspectionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive: {
      value: cdktf.booleanToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_body_size: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.metadataEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_introspection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.mtlsIntrospectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes_supported: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopesSupported),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_client_auth_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientAuthCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientAuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_auth_ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsClientAuthSslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpOauth2ConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpOauth2ConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._authorizationServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationServers = this._authorizationServers;
    }
    if (this._cacheIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheIntrospection = this._cacheIntrospection;
    }
    if (this._claimToHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimToHeader = this._claimToHeader?.internalValue;
    }
    if (this._clientAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAlg = this._clientAlg;
    }
    if (this._clientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientJwk !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientJwk = this._clientJwk;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpProxyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyAuthorization = this._httpProxyAuthorization;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._httpsProxyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyAuthorization = this._httpsProxyAuthorization;
    }
    if (this._insecureRelaxedAudienceValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureRelaxedAudienceValidation = this._insecureRelaxedAudienceValidation;
    }
    if (this._introspectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionEndpoint = this._introspectionEndpoint;
    }
    if (this._introspectionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionFormat = this._introspectionFormat;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._maxRequestBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBodySize = this._maxRequestBodySize;
    }
    if (this._metadataEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataEndpoint = this._metadataEndpoint;
    }
    if (this._mtlsIntrospectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsIntrospectionEndpoint = this._mtlsIntrospectionEndpoint;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._scopesSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopesSupported = this._scopesSupported;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tlsClientAuthCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientAuthCert = this._tlsClientAuthCert;
    }
    if (this._tlsClientAuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientAuthKey = this._tlsClientAuthKey;
    }
    if (this._tlsClientAuthSslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientAuthSslVerify = this._tlsClientAuthSslVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpOauth2ConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._authorizationServers = undefined;
      this._cacheIntrospection = undefined;
      this._claimToHeader.internalValue = undefined;
      this._clientAlg = undefined;
      this._clientAuth = undefined;
      this._clientId = undefined;
      this._clientJwk = undefined;
      this._clientSecret = undefined;
      this._headers = undefined;
      this._httpProxy = undefined;
      this._httpProxyAuthorization = undefined;
      this._httpVersion = undefined;
      this._httpsProxy = undefined;
      this._httpsProxyAuthorization = undefined;
      this._insecureRelaxedAudienceValidation = undefined;
      this._introspectionEndpoint = undefined;
      this._introspectionFormat = undefined;
      this._keepalive = undefined;
      this._maxRequestBodySize = undefined;
      this._metadataEndpoint = undefined;
      this._mtlsIntrospectionEndpoint = undefined;
      this._noProxy = undefined;
      this._resource = undefined;
      this._scopesSupported = undefined;
      this._sslVerify = undefined;
      this._timeout = undefined;
      this._tlsClientAuthCert = undefined;
      this._tlsClientAuthKey = undefined;
      this._tlsClientAuthSslVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._authorizationServers = value.authorizationServers;
      this._cacheIntrospection = value.cacheIntrospection;
      this._claimToHeader.internalValue = value.claimToHeader;
      this._clientAlg = value.clientAlg;
      this._clientAuth = value.clientAuth;
      this._clientId = value.clientId;
      this._clientJwk = value.clientJwk;
      this._clientSecret = value.clientSecret;
      this._headers = value.headers;
      this._httpProxy = value.httpProxy;
      this._httpProxyAuthorization = value.httpProxyAuthorization;
      this._httpVersion = value.httpVersion;
      this._httpsProxy = value.httpsProxy;
      this._httpsProxyAuthorization = value.httpsProxyAuthorization;
      this._insecureRelaxedAudienceValidation = value.insecureRelaxedAudienceValidation;
      this._introspectionEndpoint = value.introspectionEndpoint;
      this._introspectionFormat = value.introspectionFormat;
      this._keepalive = value.keepalive;
      this._maxRequestBodySize = value.maxRequestBodySize;
      this._metadataEndpoint = value.metadataEndpoint;
      this._mtlsIntrospectionEndpoint = value.mtlsIntrospectionEndpoint;
      this._noProxy = value.noProxy;
      this._resource = value.resource;
      this._scopesSupported = value.scopesSupported;
      this._sslVerify = value.sslVerify;
      this._timeout = value.timeout;
      this._tlsClientAuthCert = value.tlsClientAuthCert;
      this._tlsClientAuthKey = value.tlsClientAuthKey;
      this._tlsClientAuthSslVerify = value.tlsClientAuthSslVerify;
    }
  }

  // args - computed: true, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // authorization_servers - computed: true, optional: false, required: true
  private _authorizationServers?: string[]; 
  public get authorizationServers() {
    return this.getListAttribute('authorization_servers');
  }
  public set authorizationServers(value: string[]) {
    this._authorizationServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServersInput() {
    return this._authorizationServers;
  }

  // cache_introspection - computed: true, optional: true, required: false
  private _cacheIntrospection?: boolean | cdktf.IResolvable; 
  public get cacheIntrospection() {
    return this.getBooleanAttribute('cache_introspection');
  }
  public set cacheIntrospection(value: boolean | cdktf.IResolvable) {
    this._cacheIntrospection = value;
  }
  public resetCacheIntrospection() {
    this._cacheIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheIntrospectionInput() {
    return this._cacheIntrospection;
  }

  // claim_to_header - computed: true, optional: true, required: false
  private _claimToHeader = new GatewayPluginAiMcpOauth2ConfigClaimToHeaderList(this, "claim_to_header", false);
  public get claimToHeader() {
    return this._claimToHeader;
  }
  public putClaimToHeader(value: GatewayPluginAiMcpOauth2ConfigClaimToHeader[] | cdktf.IResolvable) {
    this._claimToHeader.internalValue = value;
  }
  public resetClaimToHeader() {
    this._claimToHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimToHeaderInput() {
    return this._claimToHeader.internalValue;
  }

  // client_alg - computed: true, optional: true, required: false
  private _clientAlg?: string; 
  public get clientAlg() {
    return this.getStringAttribute('client_alg');
  }
  public set clientAlg(value: string) {
    this._clientAlg = value;
  }
  public resetClientAlg() {
    this._clientAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAlgInput() {
    return this._clientAlg;
  }

  // client_auth - computed: true, optional: true, required: false
  private _clientAuth?: string; 
  public get clientAuth() {
    return this.getStringAttribute('client_auth');
  }
  public set clientAuth(value: string) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // client_id - computed: true, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_jwk - computed: true, optional: true, required: false
  private _clientJwk?: string; 
  public get clientJwk() {
    return this.getStringAttribute('client_jwk');
  }
  public set clientJwk(value: string) {
    this._clientJwk = value;
  }
  public resetClientJwk() {
    this._clientJwk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientJwkInput() {
    return this._clientJwk;
  }

  // client_secret - computed: true, optional: true, required: false
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

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_proxy - computed: true, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // http_proxy_authorization - computed: true, optional: true, required: false
  private _httpProxyAuthorization?: string; 
  public get httpProxyAuthorization() {
    return this.getStringAttribute('http_proxy_authorization');
  }
  public set httpProxyAuthorization(value: string) {
    this._httpProxyAuthorization = value;
  }
  public resetHttpProxyAuthorization() {
    this._httpProxyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyAuthorizationInput() {
    return this._httpProxyAuthorization;
  }

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: number; 
  public get httpVersion() {
    return this.getNumberAttribute('http_version');
  }
  public set httpVersion(value: number) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // https_proxy - computed: true, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // https_proxy_authorization - computed: true, optional: true, required: false
  private _httpsProxyAuthorization?: string; 
  public get httpsProxyAuthorization() {
    return this.getStringAttribute('https_proxy_authorization');
  }
  public set httpsProxyAuthorization(value: string) {
    this._httpsProxyAuthorization = value;
  }
  public resetHttpsProxyAuthorization() {
    this._httpsProxyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyAuthorizationInput() {
    return this._httpsProxyAuthorization;
  }

  // insecure_relaxed_audience_validation - computed: true, optional: true, required: false
  private _insecureRelaxedAudienceValidation?: boolean | cdktf.IResolvable; 
  public get insecureRelaxedAudienceValidation() {
    return this.getBooleanAttribute('insecure_relaxed_audience_validation');
  }
  public set insecureRelaxedAudienceValidation(value: boolean | cdktf.IResolvable) {
    this._insecureRelaxedAudienceValidation = value;
  }
  public resetInsecureRelaxedAudienceValidation() {
    this._insecureRelaxedAudienceValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureRelaxedAudienceValidationInput() {
    return this._insecureRelaxedAudienceValidation;
  }

  // introspection_endpoint - computed: true, optional: false, required: true
  private _introspectionEndpoint?: string; 
  public get introspectionEndpoint() {
    return this.getStringAttribute('introspection_endpoint');
  }
  public set introspectionEndpoint(value: string) {
    this._introspectionEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionEndpointInput() {
    return this._introspectionEndpoint;
  }

  // introspection_format - computed: true, optional: true, required: false
  private _introspectionFormat?: string; 
  public get introspectionFormat() {
    return this.getStringAttribute('introspection_format');
  }
  public set introspectionFormat(value: string) {
    this._introspectionFormat = value;
  }
  public resetIntrospectionFormat() {
    this._introspectionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionFormatInput() {
    return this._introspectionFormat;
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: boolean | cdktf.IResolvable; 
  public get keepalive() {
    return this.getBooleanAttribute('keepalive');
  }
  public set keepalive(value: boolean | cdktf.IResolvable) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // max_request_body_size - computed: true, optional: true, required: false
  private _maxRequestBodySize?: number; 
  public get maxRequestBodySize() {
    return this.getNumberAttribute('max_request_body_size');
  }
  public set maxRequestBodySize(value: number) {
    this._maxRequestBodySize = value;
  }
  public resetMaxRequestBodySize() {
    this._maxRequestBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBodySizeInput() {
    return this._maxRequestBodySize;
  }

  // metadata_endpoint - computed: true, optional: true, required: false
  private _metadataEndpoint?: string; 
  public get metadataEndpoint() {
    return this.getStringAttribute('metadata_endpoint');
  }
  public set metadataEndpoint(value: string) {
    this._metadataEndpoint = value;
  }
  public resetMetadataEndpoint() {
    this._metadataEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEndpointInput() {
    return this._metadataEndpoint;
  }

  // mtls_introspection_endpoint - computed: true, optional: true, required: false
  private _mtlsIntrospectionEndpoint?: string; 
  public get mtlsIntrospectionEndpoint() {
    return this.getStringAttribute('mtls_introspection_endpoint');
  }
  public set mtlsIntrospectionEndpoint(value: string) {
    this._mtlsIntrospectionEndpoint = value;
  }
  public resetMtlsIntrospectionEndpoint() {
    this._mtlsIntrospectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsIntrospectionEndpointInput() {
    return this._mtlsIntrospectionEndpoint;
  }

  // no_proxy - computed: true, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // resource - computed: true, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // scopes_supported - computed: true, optional: true, required: false
  private _scopesSupported?: string[]; 
  public get scopesSupported() {
    return this.getListAttribute('scopes_supported');
  }
  public set scopesSupported(value: string[]) {
    this._scopesSupported = value;
  }
  public resetScopesSupported() {
    this._scopesSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesSupportedInput() {
    return this._scopesSupported;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_client_auth_cert - computed: true, optional: true, required: false
  private _tlsClientAuthCert?: string; 
  public get tlsClientAuthCert() {
    return this.getStringAttribute('tls_client_auth_cert');
  }
  public set tlsClientAuthCert(value: string) {
    this._tlsClientAuthCert = value;
  }
  public resetTlsClientAuthCert() {
    this._tlsClientAuthCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientAuthCertInput() {
    return this._tlsClientAuthCert;
  }

  // tls_client_auth_key - computed: true, optional: true, required: false
  private _tlsClientAuthKey?: string; 
  public get tlsClientAuthKey() {
    return this.getStringAttribute('tls_client_auth_key');
  }
  public set tlsClientAuthKey(value: string) {
    this._tlsClientAuthKey = value;
  }
  public resetTlsClientAuthKey() {
    this._tlsClientAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientAuthKeyInput() {
    return this._tlsClientAuthKey;
  }

  // tls_client_auth_ssl_verify - computed: true, optional: true, required: false
  private _tlsClientAuthSslVerify?: boolean | cdktf.IResolvable; 
  public get tlsClientAuthSslVerify() {
    return this.getBooleanAttribute('tls_client_auth_ssl_verify');
  }
  public set tlsClientAuthSslVerify(value: boolean | cdktf.IResolvable) {
    this._tlsClientAuthSslVerify = value;
  }
  public resetTlsClientAuthSslVerify() {
    this._tlsClientAuthSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientAuthSslVerifyInput() {
    return this._tlsClientAuthSslVerify;
  }
}
export interface GatewayPluginAiMcpOauth2OrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#access GatewayPluginAiMcpOauth2#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiMcpOauth2OrderingAfterToTerraform(struct?: GatewayPluginAiMcpOauth2OrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiMcpOauth2OrderingAfterToHclTerraform(struct?: GatewayPluginAiMcpOauth2OrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpOauth2OrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpOauth2OrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpOauth2OrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginAiMcpOauth2OrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#access GatewayPluginAiMcpOauth2#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiMcpOauth2OrderingBeforeToTerraform(struct?: GatewayPluginAiMcpOauth2OrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiMcpOauth2OrderingBeforeToHclTerraform(struct?: GatewayPluginAiMcpOauth2OrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpOauth2OrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpOauth2OrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpOauth2OrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginAiMcpOauth2Ordering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#after GatewayPluginAiMcpOauth2#after}
  */
  readonly after?: GatewayPluginAiMcpOauth2OrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#before GatewayPluginAiMcpOauth2#before}
  */
  readonly before?: GatewayPluginAiMcpOauth2OrderingBefore;
}

export function gatewayPluginAiMcpOauth2OrderingToTerraform(struct?: GatewayPluginAiMcpOauth2Ordering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiMcpOauth2OrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiMcpOauth2OrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiMcpOauth2OrderingToHclTerraform(struct?: GatewayPluginAiMcpOauth2Ordering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiMcpOauth2OrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiMcpOauth2OrderingAfter",
    },
    before: {
      value: gatewayPluginAiMcpOauth2OrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiMcpOauth2OrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpOauth2OrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpOauth2Ordering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpOauth2Ordering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginAiMcpOauth2OrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiMcpOauth2OrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginAiMcpOauth2OrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiMcpOauth2OrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginAiMcpOauth2Partials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#id GatewayPluginAiMcpOauth2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#name GatewayPluginAiMcpOauth2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#path GatewayPluginAiMcpOauth2#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiMcpOauth2PartialsToTerraform(struct?: GatewayPluginAiMcpOauth2Partials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginAiMcpOauth2PartialsToHclTerraform(struct?: GatewayPluginAiMcpOauth2Partials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpOauth2PartialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GatewayPluginAiMcpOauth2Partials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpOauth2Partials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GatewayPluginAiMcpOauth2PartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiMcpOauth2Partials[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GatewayPluginAiMcpOauth2PartialsOutputReference {
    return new GatewayPluginAiMcpOauth2PartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiMcpOauth2Route {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#id GatewayPluginAiMcpOauth2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiMcpOauth2RouteToTerraform(struct?: GatewayPluginAiMcpOauth2Route | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiMcpOauth2RouteToHclTerraform(struct?: GatewayPluginAiMcpOauth2Route | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpOauth2RouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpOauth2Route | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpOauth2Route | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface GatewayPluginAiMcpOauth2Service {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#id GatewayPluginAiMcpOauth2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiMcpOauth2ServiceToTerraform(struct?: GatewayPluginAiMcpOauth2Service | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiMcpOauth2ServiceToHclTerraform(struct?: GatewayPluginAiMcpOauth2Service | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpOauth2ServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpOauth2Service | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpOauth2Service | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2 konnect_gateway_plugin_ai_mcp_oauth2}
*/
export class GatewayPluginAiMcpOauth2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_mcp_oauth2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiMcpOauth2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiMcpOauth2 to import
  * @param importFromId The id of the existing GatewayPluginAiMcpOauth2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiMcpOauth2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_mcp_oauth2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_ai_mcp_oauth2 konnect_gateway_plugin_ai_mcp_oauth2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiMcpOauth2Config
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiMcpOauth2Config) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_mcp_oauth2',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginAiMcpOauth2ConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiMcpOauth2ConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginAiMcpOauth2OrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiMcpOauth2Ordering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginAiMcpOauth2PartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiMcpOauth2Partials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginAiMcpOauth2RouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiMcpOauth2Route) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginAiMcpOauth2ServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiMcpOauth2Service) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginAiMcpOauth2ConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiMcpOauth2OrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiMcpOauth2PartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiMcpOauth2RouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiMcpOauth2ServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiMcpOauth2ConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiMcpOauth2ConfigA",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginAiMcpOauth2OrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiMcpOauth2Ordering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiMcpOauth2PartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiMcpOauth2PartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiMcpOauth2RouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiMcpOauth2Route",
      },
      service: {
        value: gatewayPluginAiMcpOauth2ServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiMcpOauth2Service",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
