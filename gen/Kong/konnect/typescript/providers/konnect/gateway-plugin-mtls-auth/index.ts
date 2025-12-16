// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginMtlsAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#config GatewayPluginMtlsAuth#config}
  */
  readonly config: GatewayPluginMtlsAuthConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#control_plane_id GatewayPluginMtlsAuth#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#created_at GatewayPluginMtlsAuth#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#enabled GatewayPluginMtlsAuth#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#id GatewayPluginMtlsAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#instance_name GatewayPluginMtlsAuth#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#ordering GatewayPluginMtlsAuth#ordering}
  */
  readonly ordering?: GatewayPluginMtlsAuthOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#partials GatewayPluginMtlsAuth#partials}
  */
  readonly partials?: GatewayPluginMtlsAuthPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#protocols GatewayPluginMtlsAuth#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#route GatewayPluginMtlsAuth#route}
  */
  readonly route?: GatewayPluginMtlsAuthRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#service GatewayPluginMtlsAuth#service}
  */
  readonly service?: GatewayPluginMtlsAuthService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#tags GatewayPluginMtlsAuth#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#updated_at GatewayPluginMtlsAuth#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginMtlsAuthConfigA {
  /**
  * Allow certificate verification with only an intermediate certificate. When this is enabled, you don't need to upload the full chain to Kong Certificates. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#allow_partial_chain GatewayPluginMtlsAuth#allow_partial_chain}
  */
  readonly allowPartialChain?: boolean | cdktf.IResolvable;
  /**
  * An optional string (consumer UUID or username) value to use as an “anonymous” consumer if authentication fails. If empty (default null), the request fails with an authentication failure `4xx`. Note that this value must refer to the consumer `id` or `username` attribute, and **not** its `custom_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#anonymous GatewayPluginMtlsAuth#anonymous}
  */
  readonly anonymous?: string;
  /**
  * Certificate property to use as the authenticated group. Valid values are `CN` (Common Name) or `DN` (Distinguished Name). Once `skip_consumer_lookup` is applied, any client with a valid certificate can access the Service/API. To restrict usage to only some of the authenticated users, also add the ACL plugin (not covered here) and create allowed or denied groups of users. Default: "CN"; must be one of ["CN", "DN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#authenticated_group_by GatewayPluginMtlsAuth#authenticated_group_by}
  */
  readonly authenticatedGroupBy?: string;
  /**
  * List of CA Certificates strings to use as Certificate Authorities (CA) when validating a client certificate. At least one is required but you can specify as many as needed. The value of this array is comprised of primary keys (`id`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#ca_certificates GatewayPluginMtlsAuth#ca_certificates}
  */
  readonly caCertificates: string[];
  /**
  * Cache expiry time in seconds. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#cache_ttl GatewayPluginMtlsAuth#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * The length of time in seconds between refreshes of the revocation check status cache. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#cert_cache_ttl GatewayPluginMtlsAuth#cert_cache_ttl}
  */
  readonly certCacheTtl?: number;
  /**
  * Whether to match the subject name of the client-supplied certificate against consumer's `username` and/or `custom_id` attribute. If set to `[]` (the empty array), then auto-matching is disabled. Default: ["custom_id","username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#consumer_by GatewayPluginMtlsAuth#consumer_by}
  */
  readonly consumerBy?: string[];
  /**
  * The UUID or username of the consumer to use when a trusted client certificate is presented but no consumer matches. Note that this value must refer to the consumer `id` or `username` attribute, and **not** its `custom_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#default_consumer GatewayPluginMtlsAuth#default_consumer}
  */
  readonly defaultConsumer?: string;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#http_proxy_host GatewayPluginMtlsAuth#http_proxy_host}
  */
  readonly httpProxyHost?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#http_proxy_port GatewayPluginMtlsAuth#http_proxy_port}
  */
  readonly httpProxyPort?: number;
  /**
  * HTTP timeout threshold in milliseconds when communicating with the OCSP server or downloading CRL. Default: 30000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#http_timeout GatewayPluginMtlsAuth#http_timeout}
  */
  readonly httpTimeout?: number;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#https_proxy_host GatewayPluginMtlsAuth#https_proxy_host}
  */
  readonly httpsProxyHost?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#https_proxy_port GatewayPluginMtlsAuth#https_proxy_port}
  */
  readonly httpsProxyPort?: number;
  /**
  * Controls client certificate revocation check behavior. If set to `SKIP`, no revocation check is performed. If set to `IGNORE_CA_ERROR`, the plugin respects the revocation status when either OCSP or CRL URL is set, and doesn't fail on network issues. If set to `STRICT`, the plugin only treats the certificate as valid when it's able to verify the revocation status. Default: "IGNORE_CA_ERROR"; must be one of ["IGNORE_CA_ERROR", "SKIP", "STRICT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#revocation_check_mode GatewayPluginMtlsAuth#revocation_check_mode}
  */
  readonly revocationCheckMode?: string;
  /**
  * Sends the distinguished names (DN) of the configured CA list in the TLS handshake message. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#send_ca_dn GatewayPluginMtlsAuth#send_ca_dn}
  */
  readonly sendCaDn?: boolean | cdktf.IResolvable;
  /**
  * Skip consumer lookup once certificate is trusted against the configured CA list. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#skip_consumer_lookup GatewayPluginMtlsAuth#skip_consumer_lookup}
  */
  readonly skipConsumerLookup?: boolean | cdktf.IResolvable;
}

export function gatewayPluginMtlsAuthConfigAToTerraform(struct?: GatewayPluginMtlsAuthConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_partial_chain: cdktf.booleanToTerraform(struct!.allowPartialChain),
    anonymous: cdktf.stringToTerraform(struct!.anonymous),
    authenticated_group_by: cdktf.stringToTerraform(struct!.authenticatedGroupBy),
    ca_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caCertificates),
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    cert_cache_ttl: cdktf.numberToTerraform(struct!.certCacheTtl),
    consumer_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerBy),
    default_consumer: cdktf.stringToTerraform(struct!.defaultConsumer),
    http_proxy_host: cdktf.stringToTerraform(struct!.httpProxyHost),
    http_proxy_port: cdktf.numberToTerraform(struct!.httpProxyPort),
    http_timeout: cdktf.numberToTerraform(struct!.httpTimeout),
    https_proxy_host: cdktf.stringToTerraform(struct!.httpsProxyHost),
    https_proxy_port: cdktf.numberToTerraform(struct!.httpsProxyPort),
    revocation_check_mode: cdktf.stringToTerraform(struct!.revocationCheckMode),
    send_ca_dn: cdktf.booleanToTerraform(struct!.sendCaDn),
    skip_consumer_lookup: cdktf.booleanToTerraform(struct!.skipConsumerLookup),
  }
}


export function gatewayPluginMtlsAuthConfigAToHclTerraform(struct?: GatewayPluginMtlsAuthConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_partial_chain: {
      value: cdktf.booleanToHclTerraform(struct!.allowPartialChain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anonymous: {
      value: cdktf.stringToHclTerraform(struct!.anonymous),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticated_group_by: {
      value: cdktf.stringToHclTerraform(struct!.authenticatedGroupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caCertificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.certCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumerBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_consumer: {
      value: cdktf.stringToHclTerraform(struct!.defaultConsumer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.httpProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.httpProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revocation_check_mode: {
      value: cdktf.stringToHclTerraform(struct!.revocationCheckMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_ca_dn: {
      value: cdktf.booleanToHclTerraform(struct!.sendCaDn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_consumer_lookup: {
      value: cdktf.booleanToHclTerraform(struct!.skipConsumerLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginMtlsAuthConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginMtlsAuthConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPartialChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPartialChain = this._allowPartialChain;
    }
    if (this._anonymous !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous;
    }
    if (this._authenticatedGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatedGroupBy = this._authenticatedGroupBy;
    }
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._certCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certCacheTtl = this._certCacheTtl;
    }
    if (this._consumerBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerBy = this._consumerBy;
    }
    if (this._defaultConsumer !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConsumer = this._defaultConsumer;
    }
    if (this._httpProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyHost = this._httpProxyHost;
    }
    if (this._httpProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyPort = this._httpProxyPort;
    }
    if (this._httpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTimeout = this._httpTimeout;
    }
    if (this._httpsProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyHost = this._httpsProxyHost;
    }
    if (this._httpsProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyPort = this._httpsProxyPort;
    }
    if (this._revocationCheckMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationCheckMode = this._revocationCheckMode;
    }
    if (this._sendCaDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCaDn = this._sendCaDn;
    }
    if (this._skipConsumerLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipConsumerLookup = this._skipConsumerLookup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginMtlsAuthConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPartialChain = undefined;
      this._anonymous = undefined;
      this._authenticatedGroupBy = undefined;
      this._caCertificates = undefined;
      this._cacheTtl = undefined;
      this._certCacheTtl = undefined;
      this._consumerBy = undefined;
      this._defaultConsumer = undefined;
      this._httpProxyHost = undefined;
      this._httpProxyPort = undefined;
      this._httpTimeout = undefined;
      this._httpsProxyHost = undefined;
      this._httpsProxyPort = undefined;
      this._revocationCheckMode = undefined;
      this._sendCaDn = undefined;
      this._skipConsumerLookup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPartialChain = value.allowPartialChain;
      this._anonymous = value.anonymous;
      this._authenticatedGroupBy = value.authenticatedGroupBy;
      this._caCertificates = value.caCertificates;
      this._cacheTtl = value.cacheTtl;
      this._certCacheTtl = value.certCacheTtl;
      this._consumerBy = value.consumerBy;
      this._defaultConsumer = value.defaultConsumer;
      this._httpProxyHost = value.httpProxyHost;
      this._httpProxyPort = value.httpProxyPort;
      this._httpTimeout = value.httpTimeout;
      this._httpsProxyHost = value.httpsProxyHost;
      this._httpsProxyPort = value.httpsProxyPort;
      this._revocationCheckMode = value.revocationCheckMode;
      this._sendCaDn = value.sendCaDn;
      this._skipConsumerLookup = value.skipConsumerLookup;
    }
  }

  // allow_partial_chain - computed: true, optional: true, required: false
  private _allowPartialChain?: boolean | cdktf.IResolvable; 
  public get allowPartialChain() {
    return this.getBooleanAttribute('allow_partial_chain');
  }
  public set allowPartialChain(value: boolean | cdktf.IResolvable) {
    this._allowPartialChain = value;
  }
  public resetAllowPartialChain() {
    this._allowPartialChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPartialChainInput() {
    return this._allowPartialChain;
  }

  // anonymous - computed: false, optional: true, required: false
  private _anonymous?: string; 
  public get anonymous() {
    return this.getStringAttribute('anonymous');
  }
  public set anonymous(value: string) {
    this._anonymous = value;
  }
  public resetAnonymous() {
    this._anonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous;
  }

  // authenticated_group_by - computed: true, optional: true, required: false
  private _authenticatedGroupBy?: string; 
  public get authenticatedGroupBy() {
    return this.getStringAttribute('authenticated_group_by');
  }
  public set authenticatedGroupBy(value: string) {
    this._authenticatedGroupBy = value;
  }
  public resetAuthenticatedGroupBy() {
    this._authenticatedGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedGroupByInput() {
    return this._authenticatedGroupBy;
  }

  // ca_certificates - computed: false, optional: false, required: true
  private _caCertificates?: string[]; 
  public get caCertificates() {
    return this.getListAttribute('ca_certificates');
  }
  public set caCertificates(value: string[]) {
    this._caCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // cache_ttl - computed: true, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // cert_cache_ttl - computed: true, optional: true, required: false
  private _certCacheTtl?: number; 
  public get certCacheTtl() {
    return this.getNumberAttribute('cert_cache_ttl');
  }
  public set certCacheTtl(value: number) {
    this._certCacheTtl = value;
  }
  public resetCertCacheTtl() {
    this._certCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCacheTtlInput() {
    return this._certCacheTtl;
  }

  // consumer_by - computed: true, optional: true, required: false
  private _consumerBy?: string[]; 
  public get consumerBy() {
    return this.getListAttribute('consumer_by');
  }
  public set consumerBy(value: string[]) {
    this._consumerBy = value;
  }
  public resetConsumerBy() {
    this._consumerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerByInput() {
    return this._consumerBy;
  }

  // default_consumer - computed: false, optional: true, required: false
  private _defaultConsumer?: string; 
  public get defaultConsumer() {
    return this.getStringAttribute('default_consumer');
  }
  public set defaultConsumer(value: string) {
    this._defaultConsumer = value;
  }
  public resetDefaultConsumer() {
    this._defaultConsumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConsumerInput() {
    return this._defaultConsumer;
  }

  // http_proxy_host - computed: false, optional: true, required: false
  private _httpProxyHost?: string; 
  public get httpProxyHost() {
    return this.getStringAttribute('http_proxy_host');
  }
  public set httpProxyHost(value: string) {
    this._httpProxyHost = value;
  }
  public resetHttpProxyHost() {
    this._httpProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyHostInput() {
    return this._httpProxyHost;
  }

  // http_proxy_port - computed: false, optional: true, required: false
  private _httpProxyPort?: number; 
  public get httpProxyPort() {
    return this.getNumberAttribute('http_proxy_port');
  }
  public set httpProxyPort(value: number) {
    this._httpProxyPort = value;
  }
  public resetHttpProxyPort() {
    this._httpProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyPortInput() {
    return this._httpProxyPort;
  }

  // http_timeout - computed: true, optional: true, required: false
  private _httpTimeout?: number; 
  public get httpTimeout() {
    return this.getNumberAttribute('http_timeout');
  }
  public set httpTimeout(value: number) {
    this._httpTimeout = value;
  }
  public resetHttpTimeout() {
    this._httpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeoutInput() {
    return this._httpTimeout;
  }

  // https_proxy_host - computed: false, optional: true, required: false
  private _httpsProxyHost?: string; 
  public get httpsProxyHost() {
    return this.getStringAttribute('https_proxy_host');
  }
  public set httpsProxyHost(value: string) {
    this._httpsProxyHost = value;
  }
  public resetHttpsProxyHost() {
    this._httpsProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyHostInput() {
    return this._httpsProxyHost;
  }

  // https_proxy_port - computed: false, optional: true, required: false
  private _httpsProxyPort?: number; 
  public get httpsProxyPort() {
    return this.getNumberAttribute('https_proxy_port');
  }
  public set httpsProxyPort(value: number) {
    this._httpsProxyPort = value;
  }
  public resetHttpsProxyPort() {
    this._httpsProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyPortInput() {
    return this._httpsProxyPort;
  }

  // revocation_check_mode - computed: true, optional: true, required: false
  private _revocationCheckMode?: string; 
  public get revocationCheckMode() {
    return this.getStringAttribute('revocation_check_mode');
  }
  public set revocationCheckMode(value: string) {
    this._revocationCheckMode = value;
  }
  public resetRevocationCheckMode() {
    this._revocationCheckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationCheckModeInput() {
    return this._revocationCheckMode;
  }

  // send_ca_dn - computed: true, optional: true, required: false
  private _sendCaDn?: boolean | cdktf.IResolvable; 
  public get sendCaDn() {
    return this.getBooleanAttribute('send_ca_dn');
  }
  public set sendCaDn(value: boolean | cdktf.IResolvable) {
    this._sendCaDn = value;
  }
  public resetSendCaDn() {
    this._sendCaDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCaDnInput() {
    return this._sendCaDn;
  }

  // skip_consumer_lookup - computed: true, optional: true, required: false
  private _skipConsumerLookup?: boolean | cdktf.IResolvable; 
  public get skipConsumerLookup() {
    return this.getBooleanAttribute('skip_consumer_lookup');
  }
  public set skipConsumerLookup(value: boolean | cdktf.IResolvable) {
    this._skipConsumerLookup = value;
  }
  public resetSkipConsumerLookup() {
    this._skipConsumerLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConsumerLookupInput() {
    return this._skipConsumerLookup;
  }
}
export interface GatewayPluginMtlsAuthOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#access GatewayPluginMtlsAuth#access}
  */
  readonly access?: string[];
}

export function gatewayPluginMtlsAuthOrderingAfterToTerraform(struct?: GatewayPluginMtlsAuthOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginMtlsAuthOrderingAfterToHclTerraform(struct?: GatewayPluginMtlsAuthOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginMtlsAuthOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginMtlsAuthOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginMtlsAuthOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginMtlsAuthOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#access GatewayPluginMtlsAuth#access}
  */
  readonly access?: string[];
}

export function gatewayPluginMtlsAuthOrderingBeforeToTerraform(struct?: GatewayPluginMtlsAuthOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginMtlsAuthOrderingBeforeToHclTerraform(struct?: GatewayPluginMtlsAuthOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginMtlsAuthOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginMtlsAuthOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginMtlsAuthOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginMtlsAuthOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#after GatewayPluginMtlsAuth#after}
  */
  readonly after?: GatewayPluginMtlsAuthOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#before GatewayPluginMtlsAuth#before}
  */
  readonly before?: GatewayPluginMtlsAuthOrderingBefore;
}

export function gatewayPluginMtlsAuthOrderingToTerraform(struct?: GatewayPluginMtlsAuthOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginMtlsAuthOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginMtlsAuthOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginMtlsAuthOrderingToHclTerraform(struct?: GatewayPluginMtlsAuthOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginMtlsAuthOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginMtlsAuthOrderingAfter",
    },
    before: {
      value: gatewayPluginMtlsAuthOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginMtlsAuthOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginMtlsAuthOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginMtlsAuthOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginMtlsAuthOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginMtlsAuthOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginMtlsAuthOrderingAfter) {
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
  private _before = new GatewayPluginMtlsAuthOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginMtlsAuthOrderingBefore) {
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
export interface GatewayPluginMtlsAuthPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#id GatewayPluginMtlsAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#name GatewayPluginMtlsAuth#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#path GatewayPluginMtlsAuth#path}
  */
  readonly path?: string;
}

export function gatewayPluginMtlsAuthPartialsToTerraform(struct?: GatewayPluginMtlsAuthPartials | cdktf.IResolvable): any {
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


export function gatewayPluginMtlsAuthPartialsToHclTerraform(struct?: GatewayPluginMtlsAuthPartials | cdktf.IResolvable): any {
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

export class GatewayPluginMtlsAuthPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginMtlsAuthPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginMtlsAuthPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginMtlsAuthPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginMtlsAuthPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginMtlsAuthPartialsOutputReference {
    return new GatewayPluginMtlsAuthPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginMtlsAuthRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#id GatewayPluginMtlsAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginMtlsAuthRouteToTerraform(struct?: GatewayPluginMtlsAuthRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginMtlsAuthRouteToHclTerraform(struct?: GatewayPluginMtlsAuthRoute | cdktf.IResolvable): any {
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

export class GatewayPluginMtlsAuthRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginMtlsAuthRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginMtlsAuthRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginMtlsAuthService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#id GatewayPluginMtlsAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginMtlsAuthServiceToTerraform(struct?: GatewayPluginMtlsAuthService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginMtlsAuthServiceToHclTerraform(struct?: GatewayPluginMtlsAuthService | cdktf.IResolvable): any {
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

export class GatewayPluginMtlsAuthServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginMtlsAuthService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginMtlsAuthService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth konnect_gateway_plugin_mtls_auth}
*/
export class GatewayPluginMtlsAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_mtls_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginMtlsAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginMtlsAuth to import
  * @param importFromId The id of the existing GatewayPluginMtlsAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginMtlsAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_mtls_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_mtls_auth konnect_gateway_plugin_mtls_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginMtlsAuthConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginMtlsAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_mtls_auth',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
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

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginMtlsAuthConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginMtlsAuthConfigA) {
    this._config.internalValue = value;
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
  private _ordering = new GatewayPluginMtlsAuthOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginMtlsAuthOrdering) {
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
  private _partials = new GatewayPluginMtlsAuthPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginMtlsAuthPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginMtlsAuthRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginMtlsAuthRoute) {
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
  private _service = new GatewayPluginMtlsAuthServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginMtlsAuthService) {
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
      config: gatewayPluginMtlsAuthConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginMtlsAuthOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginMtlsAuthPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginMtlsAuthRouteToTerraform(this._route.internalValue),
      service: gatewayPluginMtlsAuthServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginMtlsAuthConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginMtlsAuthConfigA",
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
        value: gatewayPluginMtlsAuthOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginMtlsAuthOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginMtlsAuthPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginMtlsAuthPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginMtlsAuthRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginMtlsAuthRoute",
      },
      service: {
        value: gatewayPluginMtlsAuthServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginMtlsAuthService",
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
