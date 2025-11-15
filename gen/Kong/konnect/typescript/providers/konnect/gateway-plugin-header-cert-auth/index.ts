// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginHeaderCertAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#config GatewayPluginHeaderCertAuth#config}
  */
  readonly config: GatewayPluginHeaderCertAuthConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#control_plane_id GatewayPluginHeaderCertAuth#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#created_at GatewayPluginHeaderCertAuth#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#enabled GatewayPluginHeaderCertAuth#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#id GatewayPluginHeaderCertAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#instance_name GatewayPluginHeaderCertAuth#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#ordering GatewayPluginHeaderCertAuth#ordering}
  */
  readonly ordering?: GatewayPluginHeaderCertAuthOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#partials GatewayPluginHeaderCertAuth#partials}
  */
  readonly partials?: GatewayPluginHeaderCertAuthPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#protocols GatewayPluginHeaderCertAuth#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#route GatewayPluginHeaderCertAuth#route}
  */
  readonly route?: GatewayPluginHeaderCertAuthRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#service GatewayPluginHeaderCertAuth#service}
  */
  readonly service?: GatewayPluginHeaderCertAuthService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#tags GatewayPluginHeaderCertAuth#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#updated_at GatewayPluginHeaderCertAuth#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginHeaderCertAuthConfigA {
  /**
  * Allow certificate verification with only an intermediate certificate. When this is enabled, you don't need to upload the full chain to Kong Certificates. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#allow_partial_chain GatewayPluginHeaderCertAuth#allow_partial_chain}
  */
  readonly allowPartialChain?: boolean | cdktf.IResolvable;
  /**
  * An optional string (consumer UUID or username) value to use as an “anonymous” consumer if authentication fails. If empty (default null), the request fails with an authentication failure `4xx`. Note that this value must refer to the consumer `id` or `username` attribute, and **not** its `custom_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#anonymous GatewayPluginHeaderCertAuth#anonymous}
  */
  readonly anonymous?: string;
  /**
  * Certificate property to use as the authenticated group. Valid values are `CN` (Common Name) or `DN` (Distinguished Name). Once `skip_consumer_lookup` is applied, any client with a valid certificate can access the Service/API. To restrict usage to only some of the authenticated users, also add the ACL plugin (not covered here) and create allowed or denied groups of users. Default: "CN"; must be one of ["CN", "DN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#authenticated_group_by GatewayPluginHeaderCertAuth#authenticated_group_by}
  */
  readonly authenticatedGroupBy?: string;
  /**
  * List of CA Certificates strings to use as Certificate Authorities (CA) when validating a client certificate. At least one is required but you can specify as many as needed. The value of this array is comprised of primary keys (`id`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#ca_certificates GatewayPluginHeaderCertAuth#ca_certificates}
  */
  readonly caCertificates: string[];
  /**
  * Cache expiry time in seconds. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#cache_ttl GatewayPluginHeaderCertAuth#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * The length of time in milliseconds between refreshes of the revocation check status cache. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#cert_cache_ttl GatewayPluginHeaderCertAuth#cert_cache_ttl}
  */
  readonly certCacheTtl?: number;
  /**
  * Format of the certificate header. Supported formats: `base64_encoded`, `url_encoded`. must be one of ["base64_encoded", "url_encoded"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#certificate_header_format GatewayPluginHeaderCertAuth#certificate_header_format}
  */
  readonly certificateHeaderFormat: string;
  /**
  * Name of the header that contains the certificate, received from the WAF or other L7 downstream proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#certificate_header_name GatewayPluginHeaderCertAuth#certificate_header_name}
  */
  readonly certificateHeaderName: string;
  /**
  * Whether to match the subject name of the client-supplied certificate against consumer's `username` and/or `custom_id` attribute. If set to `[]` (the empty array), then auto-matching is disabled. Default: ["custom_id","username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#consumer_by GatewayPluginHeaderCertAuth#consumer_by}
  */
  readonly consumerBy?: string[];
  /**
  * The UUID or username of the consumer to use when a trusted client certificate is presented but no consumer matches. Note that this value must refer to the consumer `id` or `username` attribute, and **not** its `custom_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#default_consumer GatewayPluginHeaderCertAuth#default_consumer}
  */
  readonly defaultConsumer?: string;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#http_proxy_host GatewayPluginHeaderCertAuth#http_proxy_host}
  */
  readonly httpProxyHost?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#http_proxy_port GatewayPluginHeaderCertAuth#http_proxy_port}
  */
  readonly httpProxyPort?: number;
  /**
  * HTTP timeout threshold in milliseconds when communicating with the OCSP server or downloading CRL. Default: 30000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#http_timeout GatewayPluginHeaderCertAuth#http_timeout}
  */
  readonly httpTimeout?: number;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#https_proxy_host GatewayPluginHeaderCertAuth#https_proxy_host}
  */
  readonly httpsProxyHost?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#https_proxy_port GatewayPluginHeaderCertAuth#https_proxy_port}
  */
  readonly httpsProxyPort?: number;
  /**
  * Controls client certificate revocation check behavior. If set to `SKIP`, no revocation check is performed. If set to `IGNORE_CA_ERROR`, the plugin respects the revocation status when either OCSP or CRL URL is set, and doesn't fail on network issues. If set to `STRICT`, the plugin only treats the certificate as valid when it's able to verify the revocation status. Default: "IGNORE_CA_ERROR"; must be one of ["IGNORE_CA_ERROR", "SKIP", "STRICT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#revocation_check_mode GatewayPluginHeaderCertAuth#revocation_check_mode}
  */
  readonly revocationCheckMode?: string;
  /**
  * Whether to secure the source of the request. If set to `true`, the plugin will only allow requests from trusted IPs (configured by the `trusted_ips` config option). Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#secure_source GatewayPluginHeaderCertAuth#secure_source}
  */
  readonly secureSource?: boolean | cdktf.IResolvable;
  /**
  * Skip consumer lookup once certificate is trusted against the configured CA list. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#skip_consumer_lookup GatewayPluginHeaderCertAuth#skip_consumer_lookup}
  */
  readonly skipConsumerLookup?: boolean | cdktf.IResolvable;
}

export function gatewayPluginHeaderCertAuthConfigAToTerraform(struct?: GatewayPluginHeaderCertAuthConfigA | cdktf.IResolvable): any {
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
    certificate_header_format: cdktf.stringToTerraform(struct!.certificateHeaderFormat),
    certificate_header_name: cdktf.stringToTerraform(struct!.certificateHeaderName),
    consumer_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerBy),
    default_consumer: cdktf.stringToTerraform(struct!.defaultConsumer),
    http_proxy_host: cdktf.stringToTerraform(struct!.httpProxyHost),
    http_proxy_port: cdktf.numberToTerraform(struct!.httpProxyPort),
    http_timeout: cdktf.numberToTerraform(struct!.httpTimeout),
    https_proxy_host: cdktf.stringToTerraform(struct!.httpsProxyHost),
    https_proxy_port: cdktf.numberToTerraform(struct!.httpsProxyPort),
    revocation_check_mode: cdktf.stringToTerraform(struct!.revocationCheckMode),
    secure_source: cdktf.booleanToTerraform(struct!.secureSource),
    skip_consumer_lookup: cdktf.booleanToTerraform(struct!.skipConsumerLookup),
  }
}


export function gatewayPluginHeaderCertAuthConfigAToHclTerraform(struct?: GatewayPluginHeaderCertAuthConfigA | cdktf.IResolvable): any {
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
    certificate_header_format: {
      value: cdktf.stringToHclTerraform(struct!.certificateHeaderFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_header_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    secure_source: {
      value: cdktf.booleanToHclTerraform(struct!.secureSource),
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

export class GatewayPluginHeaderCertAuthConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginHeaderCertAuthConfigA | cdktf.IResolvable | undefined {
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
    if (this._certificateHeaderFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateHeaderFormat = this._certificateHeaderFormat;
    }
    if (this._certificateHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateHeaderName = this._certificateHeaderName;
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
    if (this._secureSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureSource = this._secureSource;
    }
    if (this._skipConsumerLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipConsumerLookup = this._skipConsumerLookup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginHeaderCertAuthConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPartialChain = undefined;
      this._anonymous = undefined;
      this._authenticatedGroupBy = undefined;
      this._caCertificates = undefined;
      this._cacheTtl = undefined;
      this._certCacheTtl = undefined;
      this._certificateHeaderFormat = undefined;
      this._certificateHeaderName = undefined;
      this._consumerBy = undefined;
      this._defaultConsumer = undefined;
      this._httpProxyHost = undefined;
      this._httpProxyPort = undefined;
      this._httpTimeout = undefined;
      this._httpsProxyHost = undefined;
      this._httpsProxyPort = undefined;
      this._revocationCheckMode = undefined;
      this._secureSource = undefined;
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
      this._certificateHeaderFormat = value.certificateHeaderFormat;
      this._certificateHeaderName = value.certificateHeaderName;
      this._consumerBy = value.consumerBy;
      this._defaultConsumer = value.defaultConsumer;
      this._httpProxyHost = value.httpProxyHost;
      this._httpProxyPort = value.httpProxyPort;
      this._httpTimeout = value.httpTimeout;
      this._httpsProxyHost = value.httpsProxyHost;
      this._httpsProxyPort = value.httpsProxyPort;
      this._revocationCheckMode = value.revocationCheckMode;
      this._secureSource = value.secureSource;
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

  // certificate_header_format - computed: false, optional: false, required: true
  private _certificateHeaderFormat?: string; 
  public get certificateHeaderFormat() {
    return this.getStringAttribute('certificate_header_format');
  }
  public set certificateHeaderFormat(value: string) {
    this._certificateHeaderFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateHeaderFormatInput() {
    return this._certificateHeaderFormat;
  }

  // certificate_header_name - computed: false, optional: false, required: true
  private _certificateHeaderName?: string; 
  public get certificateHeaderName() {
    return this.getStringAttribute('certificate_header_name');
  }
  public set certificateHeaderName(value: string) {
    this._certificateHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateHeaderNameInput() {
    return this._certificateHeaderName;
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

  // secure_source - computed: true, optional: true, required: false
  private _secureSource?: boolean | cdktf.IResolvable; 
  public get secureSource() {
    return this.getBooleanAttribute('secure_source');
  }
  public set secureSource(value: boolean | cdktf.IResolvable) {
    this._secureSource = value;
  }
  public resetSecureSource() {
    this._secureSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSourceInput() {
    return this._secureSource;
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
export interface GatewayPluginHeaderCertAuthOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#access GatewayPluginHeaderCertAuth#access}
  */
  readonly access?: string[];
}

export function gatewayPluginHeaderCertAuthOrderingAfterToTerraform(struct?: GatewayPluginHeaderCertAuthOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginHeaderCertAuthOrderingAfterToHclTerraform(struct?: GatewayPluginHeaderCertAuthOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginHeaderCertAuthOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginHeaderCertAuthOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginHeaderCertAuthOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginHeaderCertAuthOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#access GatewayPluginHeaderCertAuth#access}
  */
  readonly access?: string[];
}

export function gatewayPluginHeaderCertAuthOrderingBeforeToTerraform(struct?: GatewayPluginHeaderCertAuthOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginHeaderCertAuthOrderingBeforeToHclTerraform(struct?: GatewayPluginHeaderCertAuthOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginHeaderCertAuthOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginHeaderCertAuthOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginHeaderCertAuthOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginHeaderCertAuthOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#after GatewayPluginHeaderCertAuth#after}
  */
  readonly after?: GatewayPluginHeaderCertAuthOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#before GatewayPluginHeaderCertAuth#before}
  */
  readonly before?: GatewayPluginHeaderCertAuthOrderingBefore;
}

export function gatewayPluginHeaderCertAuthOrderingToTerraform(struct?: GatewayPluginHeaderCertAuthOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginHeaderCertAuthOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginHeaderCertAuthOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginHeaderCertAuthOrderingToHclTerraform(struct?: GatewayPluginHeaderCertAuthOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginHeaderCertAuthOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginHeaderCertAuthOrderingAfter",
    },
    before: {
      value: gatewayPluginHeaderCertAuthOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginHeaderCertAuthOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginHeaderCertAuthOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginHeaderCertAuthOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginHeaderCertAuthOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginHeaderCertAuthOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginHeaderCertAuthOrderingAfter) {
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
  private _before = new GatewayPluginHeaderCertAuthOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginHeaderCertAuthOrderingBefore) {
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
export interface GatewayPluginHeaderCertAuthPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#id GatewayPluginHeaderCertAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#name GatewayPluginHeaderCertAuth#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#path GatewayPluginHeaderCertAuth#path}
  */
  readonly path?: string;
}

export function gatewayPluginHeaderCertAuthPartialsToTerraform(struct?: GatewayPluginHeaderCertAuthPartials | cdktf.IResolvable): any {
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


export function gatewayPluginHeaderCertAuthPartialsToHclTerraform(struct?: GatewayPluginHeaderCertAuthPartials | cdktf.IResolvable): any {
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

export class GatewayPluginHeaderCertAuthPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginHeaderCertAuthPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginHeaderCertAuthPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginHeaderCertAuthPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginHeaderCertAuthPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginHeaderCertAuthPartialsOutputReference {
    return new GatewayPluginHeaderCertAuthPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginHeaderCertAuthRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#id GatewayPluginHeaderCertAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginHeaderCertAuthRouteToTerraform(struct?: GatewayPluginHeaderCertAuthRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginHeaderCertAuthRouteToHclTerraform(struct?: GatewayPluginHeaderCertAuthRoute | cdktf.IResolvable): any {
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

export class GatewayPluginHeaderCertAuthRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginHeaderCertAuthRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginHeaderCertAuthRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginHeaderCertAuthService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#id GatewayPluginHeaderCertAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginHeaderCertAuthServiceToTerraform(struct?: GatewayPluginHeaderCertAuthService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginHeaderCertAuthServiceToHclTerraform(struct?: GatewayPluginHeaderCertAuthService | cdktf.IResolvable): any {
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

export class GatewayPluginHeaderCertAuthServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginHeaderCertAuthService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginHeaderCertAuthService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth konnect_gateway_plugin_header_cert_auth}
*/
export class GatewayPluginHeaderCertAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_header_cert_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginHeaderCertAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginHeaderCertAuth to import
  * @param importFromId The id of the existing GatewayPluginHeaderCertAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginHeaderCertAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_header_cert_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_header_cert_auth konnect_gateway_plugin_header_cert_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginHeaderCertAuthConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginHeaderCertAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_header_cert_auth',
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

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginHeaderCertAuthConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginHeaderCertAuthConfigA) {
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
  private _ordering = new GatewayPluginHeaderCertAuthOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginHeaderCertAuthOrdering) {
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
  private _partials = new GatewayPluginHeaderCertAuthPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginHeaderCertAuthPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginHeaderCertAuthRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginHeaderCertAuthRoute) {
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
  private _service = new GatewayPluginHeaderCertAuthServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginHeaderCertAuthService) {
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
      config: gatewayPluginHeaderCertAuthConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginHeaderCertAuthOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginHeaderCertAuthPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginHeaderCertAuthRouteToTerraform(this._route.internalValue),
      service: gatewayPluginHeaderCertAuthServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginHeaderCertAuthConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginHeaderCertAuthConfigA",
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
        value: gatewayPluginHeaderCertAuthOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginHeaderCertAuthOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginHeaderCertAuthPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginHeaderCertAuthPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginHeaderCertAuthRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginHeaderCertAuthRoute",
      },
      service: {
        value: gatewayPluginHeaderCertAuthServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginHeaderCertAuthService",
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
