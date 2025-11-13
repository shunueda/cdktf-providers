// https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to create Resource either in active or disabled state. `True` - the content from CDN is available to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#active CdnResource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * CDN endpoint CNAME, must be unique among resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#cname CdnResource#cname}
  */
  readonly cname: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#folder_id CdnResource#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#id CdnResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#labels CdnResource#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The ID of a specific origin group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#origin_group_id CdnResource#origin_group_id}
  */
  readonly originGroupId?: string;
  /**
  * The name of a specific origin group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#origin_group_name CdnResource#origin_group_name}
  */
  readonly originGroupName?: string;
  /**
  * Protocol of origin resource. `http` or `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#origin_protocol CdnResource#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * CDN provider is a content delivery service provider. Possible values: "ourcdn" (default) or "gcore"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#provider_type CdnResource#provider_type}
  */
  readonly providerType?: string;
  /**
  * List of secondary hostname strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#secondary_hostnames CdnResource#secondary_hostnames}
  */
  readonly secondaryHostnames?: string[];
  /**
  * Shielding is a Cloud CDN feature that helps reduce the load on content origins from CDN servers.
  * Specify location id to enable shielding. See https://yandex.cloud/en/docs/cdn/operations/resources/enable-shielding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#shielding CdnResource#shielding}
  */
  readonly shielding?: string;
  /**
  * Last update timestamp. Computed value for read and update operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#updated_at CdnResource#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#options CdnResource#options}
  */
  readonly options?: CdnResourceOptions;
  /**
  * ssl_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#ssl_certificate CdnResource#ssl_certificate}
  */
  readonly sslCertificate?: CdnResourceSslCertificate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#timeouts CdnResource#timeouts}
  */
  readonly timeouts?: CdnResourceTimeouts;
}
export interface CdnResourceOptionsEdgeCacheSettingsCodes {
  /**
  * Caching time for a response with specific codes. These settings have a higher priority than the `value` field. Response code (`304`, `404` for example). Use `any` to specify caching time for all response codes. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#custom_values CdnResource#custom_values}
  */
  readonly customValues?: { [key: string]: number };
  /**
  * Caching time for a response with codes 200, 206, 301, 302. Responses with codes 4xx, 5xx will not be cached. Use `0` disable to caching. Use `custom_values` field to specify a custom caching time for a response with specific codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#value CdnResource#value}
  */
  readonly value?: number;
}

export function cdnResourceOptionsEdgeCacheSettingsCodesToTerraform(struct?: CdnResourceOptionsEdgeCacheSettingsCodesOutputReference | CdnResourceOptionsEdgeCacheSettingsCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_values: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.customValues),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function cdnResourceOptionsEdgeCacheSettingsCodesToHclTerraform(struct?: CdnResourceOptionsEdgeCacheSettingsCodesOutputReference | CdnResourceOptionsEdgeCacheSettingsCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_values: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.customValues),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsEdgeCacheSettingsCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsEdgeCacheSettingsCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValues = this._customValues;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsEdgeCacheSettingsCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customValues = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customValues = value.customValues;
      this._value = value.value;
    }
  }

  // custom_values - computed: false, optional: true, required: false
  private _customValues?: { [key: string]: number }; 
  public get customValues() {
    return this.getNumberMapAttribute('custom_values');
  }
  public set customValues(value: { [key: string]: number }) {
    this._customValues = value;
  }
  public resetCustomValues() {
    this._customValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesInput() {
    return this._customValues;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnResourceOptionsIpAddressAcl {
  /**
  * The list of specified IP addresses to be allowed or denied depending on acl policy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#excepted_values CdnResource#excepted_values}
  */
  readonly exceptedValues?: string[];
  /**
  * The policy type for ACL. One of `allow` or `deny` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#policy_type CdnResource#policy_type}
  */
  readonly policyType?: string;
}

export function cdnResourceOptionsIpAddressAclToTerraform(struct?: CdnResourceOptionsIpAddressAclOutputReference | CdnResourceOptionsIpAddressAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excepted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptedValues),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function cdnResourceOptionsIpAddressAclToHclTerraform(struct?: CdnResourceOptionsIpAddressAclOutputReference | CdnResourceOptionsIpAddressAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excepted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsIpAddressAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptionsIpAddressAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptedValues = this._exceptedValues;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptionsIpAddressAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceptedValues = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceptedValues = value.exceptedValues;
      this._policyType = value.policyType;
    }
  }

  // excepted_values - computed: true, optional: true, required: false
  private _exceptedValues?: string[]; 
  public get exceptedValues() {
    return this.getListAttribute('excepted_values');
  }
  public set exceptedValues(value: string[]) {
    this._exceptedValues = value;
  }
  public resetExceptedValues() {
    this._exceptedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptedValuesInput() {
    return this._exceptedValues;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface CdnResourceOptions {
  /**
  * HTTP methods for your CDN content. By default the following methods are allowed: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS. In case some methods are not allowed to the user, they will get the 405 (Method Not Allowed) response. If the method is not supported, the user gets the 501 (Not Implemented) response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#allowed_http_methods CdnResource#allowed_http_methods}
  */
  readonly allowedHttpMethods?: string[];
  /**
  * Set up a cache period for the end-users browser. Content will be cached due to origin settings. If there are no cache settings on your origin, the content will not be cached. The list of HTTP response codes that can be cached in browsers: 200, 201, 204, 206, 301, 302, 303, 304, 307, 308. Other response codes will not be cached. The default value is 4 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#browser_cache_settings CdnResource#browser_cache_settings}
  */
  readonly browserCacheSettings?: number;
  /**
  * List HTTP headers that must be included in responses to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#cache_http_headers CdnResource#cache_http_headers}
  */
  readonly cacheHttpHeaders?: string[];
  /**
  * Parameter that lets browsers get access to selected resources from a domain different to a domain from which the request is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#cors CdnResource#cors}
  */
  readonly cors?: string[];
  /**
  * Custom value for the Host header. Your server must be able to process requests with the chosen header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#custom_host_header CdnResource#custom_host_header}
  */
  readonly customHostHeader?: string;
  /**
  * Wildcard additional CNAME. If a resource has a wildcard additional CNAME, you can use your own certificate for content delivery via HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#custom_server_name CdnResource#custom_server_name}
  */
  readonly customServerName?: string;
  /**
  * Setup a cache status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#disable_cache CdnResource#disable_cache}
  */
  readonly disableCache?: boolean | cdktf.IResolvable;
  /**
  * Disabling proxy force ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#disable_proxy_force_ranges CdnResource#disable_proxy_force_ranges}
  */
  readonly disableProxyForceRanges?: boolean | cdktf.IResolvable;
  /**
  * Content will be cached according to origin cache settings. The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308 if an origin server does not have caching HTTP headers. Responses with other codes will not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#edge_cache_settings CdnResource#edge_cache_settings}
  */
  readonly edgeCacheSettings?: number;
  /**
  * Enable access limiting by IP addresses, option available only with setting secure_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#enable_ip_url_signing CdnResource#enable_ip_url_signing}
  */
  readonly enableIpUrlSigning?: boolean | cdktf.IResolvable;
  /**
  * Option helps you to reduce the bandwidth between origin and CDN servers. Also, content delivery speed becomes higher because of reducing the time for compressing files in a CDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#fetched_compressed CdnResource#fetched_compressed}
  */
  readonly fetchedCompressed?: boolean | cdktf.IResolvable;
  /**
  * Choose the Forward Host header option if is important to send in the request to the Origin the same Host header as was sent in the request to CDN server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#forward_host_header CdnResource#forward_host_header}
  */
  readonly forwardHostHeader?: boolean | cdktf.IResolvable;
  /**
  * GZip compression at CDN servers reduces file size by 70% and can be as high as 90%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#gzip_on CdnResource#gzip_on}
  */
  readonly gzipOn?: boolean | cdktf.IResolvable;
  /**
  * Set for ignoring cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#ignore_cookie CdnResource#ignore_cookie}
  */
  readonly ignoreCookie?: boolean | cdktf.IResolvable;
  /**
  * Files with different query parameters are cached as objects with the same key regardless of the parameter value. selected by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#ignore_query_params CdnResource#ignore_query_params}
  */
  readonly ignoreQueryParams?: boolean | cdktf.IResolvable;
  /**
  * Allows caching for GET, HEAD and POST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#proxy_cache_methods_set CdnResource#proxy_cache_methods_set}
  */
  readonly proxyCacheMethodsSet?: boolean | cdktf.IResolvable;
  /**
  * Files with the specified query parameters are cached as objects with the same key, files with other parameters are cached as objects with different keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#query_params_blacklist CdnResource#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: string[];
  /**
  * Files with the specified query parameters are cached as objects with different keys, files with other parameters are cached as objects with the same key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#query_params_whitelist CdnResource#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: string[];
  /**
  * Set up a redirect from HTTP to HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#redirect_http_to_https CdnResource#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: boolean | cdktf.IResolvable;
  /**
  * Set up a redirect from HTTPS to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#redirect_https_to_http CdnResource#redirect_https_to_http}
  */
  readonly redirectHttpsToHttp?: boolean | cdktf.IResolvable;
  /**
  * Defines flag for the Rewrite option (default: `BREAK`).
  * `LAST` - Stops processing of the current set of ngx_http_rewrite_module directives and starts a search for a new location matching changed URI.
  * `BREAK` - Stops processing of the current set of the Rewrite option.
  * `REDIRECT` - Returns a temporary redirect with the 302 code; It is used when a replacement string does not start with "http://", "https://", or "$scheme"
  * `PERMANENT` - Returns a permanent redirect with the 301 code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#rewrite_flag CdnResource#rewrite_flag}
  */
  readonly rewriteFlag?: string;
  /**
  * An option for changing or redirecting query paths. The value must have the following format: `<source path> <destination path>`, where both paths are regular expressions which use at least one group. E.g., `/foo/(.*) /bar/$1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#rewrite_pattern CdnResource#rewrite_pattern}
  */
  readonly rewritePattern?: string;
  /**
  * Set secure key for url encoding to protect contect and limit access by IP addresses and time limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#secure_key CdnResource#secure_key}
  */
  readonly secureKey?: string;
  /**
  * Files larger than 10 MB will be requested and cached in parts (no larger than 10 MB each part). It reduces time to first byte. The origin must support HTTP Range requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#slice CdnResource#slice}
  */
  readonly slice?: boolean | cdktf.IResolvable;
  /**
  * List of errors which instruct CDN servers to serve stale content to clients. Possible values: `error`, `http_403`, `http_404`, `http_429`, `http_500`, `http_502`, `http_503`, `http_504`, `invalid_header`, `timeout`, `updating`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#stale CdnResource#stale}
  */
  readonly stale?: string[];
  /**
  * Set up custom headers that CDN servers will send in requests to origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#static_request_headers CdnResource#static_request_headers}
  */
  readonly staticRequestHeaders?: { [key: string]: string };
  /**
  * Set up a static response header. The header name must be lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#static_response_headers CdnResource#static_response_headers}
  */
  readonly staticResponseHeaders?: { [key: string]: string };
  /**
  * edge_cache_settings_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#edge_cache_settings_codes CdnResource#edge_cache_settings_codes}
  */
  readonly edgeCacheSettingsCodes?: CdnResourceOptionsEdgeCacheSettingsCodes;
  /**
  * ip_address_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#ip_address_acl CdnResource#ip_address_acl}
  */
  readonly ipAddressAcl?: CdnResourceOptionsIpAddressAcl;
}

export function cdnResourceOptionsToTerraform(struct?: CdnResourceOptionsOutputReference | CdnResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpMethods),
    browser_cache_settings: cdktf.numberToTerraform(struct!.browserCacheSettings),
    cache_http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacheHttpHeaders),
    cors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cors),
    custom_host_header: cdktf.stringToTerraform(struct!.customHostHeader),
    custom_server_name: cdktf.stringToTerraform(struct!.customServerName),
    disable_cache: cdktf.booleanToTerraform(struct!.disableCache),
    disable_proxy_force_ranges: cdktf.booleanToTerraform(struct!.disableProxyForceRanges),
    edge_cache_settings: cdktf.numberToTerraform(struct!.edgeCacheSettings),
    enable_ip_url_signing: cdktf.booleanToTerraform(struct!.enableIpUrlSigning),
    fetched_compressed: cdktf.booleanToTerraform(struct!.fetchedCompressed),
    forward_host_header: cdktf.booleanToTerraform(struct!.forwardHostHeader),
    gzip_on: cdktf.booleanToTerraform(struct!.gzipOn),
    ignore_cookie: cdktf.booleanToTerraform(struct!.ignoreCookie),
    ignore_query_params: cdktf.booleanToTerraform(struct!.ignoreQueryParams),
    proxy_cache_methods_set: cdktf.booleanToTerraform(struct!.proxyCacheMethodsSet),
    query_params_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryParamsBlacklist),
    query_params_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryParamsWhitelist),
    redirect_http_to_https: cdktf.booleanToTerraform(struct!.redirectHttpToHttps),
    redirect_https_to_http: cdktf.booleanToTerraform(struct!.redirectHttpsToHttp),
    rewrite_flag: cdktf.stringToTerraform(struct!.rewriteFlag),
    rewrite_pattern: cdktf.stringToTerraform(struct!.rewritePattern),
    secure_key: cdktf.stringToTerraform(struct!.secureKey),
    slice: cdktf.booleanToTerraform(struct!.slice),
    stale: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stale),
    static_request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticRequestHeaders),
    static_response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticResponseHeaders),
    edge_cache_settings_codes: cdnResourceOptionsEdgeCacheSettingsCodesToTerraform(struct!.edgeCacheSettingsCodes),
    ip_address_acl: cdnResourceOptionsIpAddressAclToTerraform(struct!.ipAddressAcl),
  }
}


export function cdnResourceOptionsToHclTerraform(struct?: CdnResourceOptionsOutputReference | CdnResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHttpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    browser_cache_settings: {
      value: cdktf.numberToHclTerraform(struct!.browserCacheSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_http_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacheHttpHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_host_header: {
      value: cdktf.stringToHclTerraform(struct!.customHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_server_name: {
      value: cdktf.stringToHclTerraform(struct!.customServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_cache: {
      value: cdktf.booleanToHclTerraform(struct!.disableCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_proxy_force_ranges: {
      value: cdktf.booleanToHclTerraform(struct!.disableProxyForceRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edge_cache_settings: {
      value: cdktf.numberToHclTerraform(struct!.edgeCacheSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_ip_url_signing: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpUrlSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fetched_compressed: {
      value: cdktf.booleanToHclTerraform(struct!.fetchedCompressed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_host_header: {
      value: cdktf.booleanToHclTerraform(struct!.forwardHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gzip_on: {
      value: cdktf.booleanToHclTerraform(struct!.gzipOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_query_params: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreQueryParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_cache_methods_set: {
      value: cdktf.booleanToHclTerraform(struct!.proxyCacheMethodsSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_params_blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryParamsBlacklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_params_whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryParamsWhitelist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redirect_http_to_https: {
      value: cdktf.booleanToHclTerraform(struct!.redirectHttpToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_https_to_http: {
      value: cdktf.booleanToHclTerraform(struct!.redirectHttpsToHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rewrite_flag: {
      value: cdktf.stringToHclTerraform(struct!.rewriteFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_pattern: {
      value: cdktf.stringToHclTerraform(struct!.rewritePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_key: {
      value: cdktf.stringToHclTerraform(struct!.secureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slice: {
      value: cdktf.booleanToHclTerraform(struct!.slice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stale),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    static_request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.staticRequestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    static_response_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.staticResponseHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    edge_cache_settings_codes: {
      value: cdnResourceOptionsEdgeCacheSettingsCodesToHclTerraform(struct!.edgeCacheSettingsCodes),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsEdgeCacheSettingsCodesList",
    },
    ip_address_acl: {
      value: cdnResourceOptionsIpAddressAclToHclTerraform(struct!.ipAddressAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnResourceOptionsIpAddressAclList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpMethods = this._allowedHttpMethods;
    }
    if (this._browserCacheSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserCacheSettings = this._browserCacheSettings;
    }
    if (this._cacheHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheHttpHeaders = this._cacheHttpHeaders;
    }
    if (this._cors !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors;
    }
    if (this._customHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostHeader = this._customHostHeader;
    }
    if (this._customServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customServerName = this._customServerName;
    }
    if (this._disableCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCache = this._disableCache;
    }
    if (this._disableProxyForceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxyForceRanges = this._disableProxyForceRanges;
    }
    if (this._edgeCacheSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeCacheSettings = this._edgeCacheSettings;
    }
    if (this._enableIpUrlSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpUrlSigning = this._enableIpUrlSigning;
    }
    if (this._fetchedCompressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchedCompressed = this._fetchedCompressed;
    }
    if (this._forwardHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHostHeader = this._forwardHostHeader;
    }
    if (this._gzipOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipOn = this._gzipOn;
    }
    if (this._ignoreCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCookie = this._ignoreCookie;
    }
    if (this._ignoreQueryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreQueryParams = this._ignoreQueryParams;
    }
    if (this._proxyCacheMethodsSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyCacheMethodsSet = this._proxyCacheMethodsSet;
    }
    if (this._queryParamsBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsBlacklist = this._queryParamsBlacklist;
    }
    if (this._queryParamsWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsWhitelist = this._queryParamsWhitelist;
    }
    if (this._redirectHttpToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpToHttps = this._redirectHttpToHttps;
    }
    if (this._redirectHttpsToHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpsToHttp = this._redirectHttpsToHttp;
    }
    if (this._rewriteFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteFlag = this._rewriteFlag;
    }
    if (this._rewritePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePattern = this._rewritePattern;
    }
    if (this._secureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureKey = this._secureKey;
    }
    if (this._slice !== undefined) {
      hasAnyValues = true;
      internalValueResult.slice = this._slice;
    }
    if (this._stale !== undefined) {
      hasAnyValues = true;
      internalValueResult.stale = this._stale;
    }
    if (this._staticRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRequestHeaders = this._staticRequestHeaders;
    }
    if (this._staticResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticResponseHeaders = this._staticResponseHeaders;
    }
    if (this._edgeCacheSettingsCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeCacheSettingsCodes = this._edgeCacheSettingsCodes?.internalValue;
    }
    if (this._ipAddressAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressAcl = this._ipAddressAcl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHttpMethods = undefined;
      this._browserCacheSettings = undefined;
      this._cacheHttpHeaders = undefined;
      this._cors = undefined;
      this._customHostHeader = undefined;
      this._customServerName = undefined;
      this._disableCache = undefined;
      this._disableProxyForceRanges = undefined;
      this._edgeCacheSettings = undefined;
      this._enableIpUrlSigning = undefined;
      this._fetchedCompressed = undefined;
      this._forwardHostHeader = undefined;
      this._gzipOn = undefined;
      this._ignoreCookie = undefined;
      this._ignoreQueryParams = undefined;
      this._proxyCacheMethodsSet = undefined;
      this._queryParamsBlacklist = undefined;
      this._queryParamsWhitelist = undefined;
      this._redirectHttpToHttps = undefined;
      this._redirectHttpsToHttp = undefined;
      this._rewriteFlag = undefined;
      this._rewritePattern = undefined;
      this._secureKey = undefined;
      this._slice = undefined;
      this._stale = undefined;
      this._staticRequestHeaders = undefined;
      this._staticResponseHeaders = undefined;
      this._edgeCacheSettingsCodes.internalValue = undefined;
      this._ipAddressAcl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHttpMethods = value.allowedHttpMethods;
      this._browserCacheSettings = value.browserCacheSettings;
      this._cacheHttpHeaders = value.cacheHttpHeaders;
      this._cors = value.cors;
      this._customHostHeader = value.customHostHeader;
      this._customServerName = value.customServerName;
      this._disableCache = value.disableCache;
      this._disableProxyForceRanges = value.disableProxyForceRanges;
      this._edgeCacheSettings = value.edgeCacheSettings;
      this._enableIpUrlSigning = value.enableIpUrlSigning;
      this._fetchedCompressed = value.fetchedCompressed;
      this._forwardHostHeader = value.forwardHostHeader;
      this._gzipOn = value.gzipOn;
      this._ignoreCookie = value.ignoreCookie;
      this._ignoreQueryParams = value.ignoreQueryParams;
      this._proxyCacheMethodsSet = value.proxyCacheMethodsSet;
      this._queryParamsBlacklist = value.queryParamsBlacklist;
      this._queryParamsWhitelist = value.queryParamsWhitelist;
      this._redirectHttpToHttps = value.redirectHttpToHttps;
      this._redirectHttpsToHttp = value.redirectHttpsToHttp;
      this._rewriteFlag = value.rewriteFlag;
      this._rewritePattern = value.rewritePattern;
      this._secureKey = value.secureKey;
      this._slice = value.slice;
      this._stale = value.stale;
      this._staticRequestHeaders = value.staticRequestHeaders;
      this._staticResponseHeaders = value.staticResponseHeaders;
      this._edgeCacheSettingsCodes.internalValue = value.edgeCacheSettingsCodes;
      this._ipAddressAcl.internalValue = value.ipAddressAcl;
    }
  }

  // allowed_http_methods - computed: true, optional: true, required: false
  private _allowedHttpMethods?: string[]; 
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }
  public set allowedHttpMethods(value: string[]) {
    this._allowedHttpMethods = value;
  }
  public resetAllowedHttpMethods() {
    this._allowedHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpMethodsInput() {
    return this._allowedHttpMethods;
  }

  // browser_cache_settings - computed: false, optional: true, required: false
  private _browserCacheSettings?: number; 
  public get browserCacheSettings() {
    return this.getNumberAttribute('browser_cache_settings');
  }
  public set browserCacheSettings(value: number) {
    this._browserCacheSettings = value;
  }
  public resetBrowserCacheSettings() {
    this._browserCacheSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCacheSettingsInput() {
    return this._browserCacheSettings;
  }

  // cache_http_headers - computed: true, optional: true, required: false
  private _cacheHttpHeaders?: string[]; 
  public get cacheHttpHeaders() {
    return this.getListAttribute('cache_http_headers');
  }
  public set cacheHttpHeaders(value: string[]) {
    this._cacheHttpHeaders = value;
  }
  public resetCacheHttpHeaders() {
    this._cacheHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheHttpHeadersInput() {
    return this._cacheHttpHeaders;
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: string[]; 
  public get cors() {
    return this.getListAttribute('cors');
  }
  public set cors(value: string[]) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
  }

  // custom_host_header - computed: true, optional: true, required: false
  private _customHostHeader?: string; 
  public get customHostHeader() {
    return this.getStringAttribute('custom_host_header');
  }
  public set customHostHeader(value: string) {
    this._customHostHeader = value;
  }
  public resetCustomHostHeader() {
    this._customHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostHeaderInput() {
    return this._customHostHeader;
  }

  // custom_server_name - computed: true, optional: true, required: false
  private _customServerName?: string; 
  public get customServerName() {
    return this.getStringAttribute('custom_server_name');
  }
  public set customServerName(value: string) {
    this._customServerName = value;
  }
  public resetCustomServerName() {
    this._customServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServerNameInput() {
    return this._customServerName;
  }

  // disable_cache - computed: true, optional: true, required: false
  private _disableCache?: boolean | cdktf.IResolvable; 
  public get disableCache() {
    return this.getBooleanAttribute('disable_cache');
  }
  public set disableCache(value: boolean | cdktf.IResolvable) {
    this._disableCache = value;
  }
  public resetDisableCache() {
    this._disableCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCacheInput() {
    return this._disableCache;
  }

  // disable_proxy_force_ranges - computed: true, optional: true, required: false
  private _disableProxyForceRanges?: boolean | cdktf.IResolvable; 
  public get disableProxyForceRanges() {
    return this.getBooleanAttribute('disable_proxy_force_ranges');
  }
  public set disableProxyForceRanges(value: boolean | cdktf.IResolvable) {
    this._disableProxyForceRanges = value;
  }
  public resetDisableProxyForceRanges() {
    this._disableProxyForceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyForceRangesInput() {
    return this._disableProxyForceRanges;
  }

  // edge_cache_settings - computed: true, optional: true, required: false
  private _edgeCacheSettings?: number; 
  public get edgeCacheSettings() {
    return this.getNumberAttribute('edge_cache_settings');
  }
  public set edgeCacheSettings(value: number) {
    this._edgeCacheSettings = value;
  }
  public resetEdgeCacheSettings() {
    this._edgeCacheSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCacheSettingsInput() {
    return this._edgeCacheSettings;
  }

  // enable_ip_url_signing - computed: true, optional: true, required: false
  private _enableIpUrlSigning?: boolean | cdktf.IResolvable; 
  public get enableIpUrlSigning() {
    return this.getBooleanAttribute('enable_ip_url_signing');
  }
  public set enableIpUrlSigning(value: boolean | cdktf.IResolvable) {
    this._enableIpUrlSigning = value;
  }
  public resetEnableIpUrlSigning() {
    this._enableIpUrlSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpUrlSigningInput() {
    return this._enableIpUrlSigning;
  }

  // fetched_compressed - computed: true, optional: true, required: false
  private _fetchedCompressed?: boolean | cdktf.IResolvable; 
  public get fetchedCompressed() {
    return this.getBooleanAttribute('fetched_compressed');
  }
  public set fetchedCompressed(value: boolean | cdktf.IResolvable) {
    this._fetchedCompressed = value;
  }
  public resetFetchedCompressed() {
    this._fetchedCompressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchedCompressedInput() {
    return this._fetchedCompressed;
  }

  // forward_host_header - computed: true, optional: true, required: false
  private _forwardHostHeader?: boolean | cdktf.IResolvable; 
  public get forwardHostHeader() {
    return this.getBooleanAttribute('forward_host_header');
  }
  public set forwardHostHeader(value: boolean | cdktf.IResolvable) {
    this._forwardHostHeader = value;
  }
  public resetForwardHostHeader() {
    this._forwardHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostHeaderInput() {
    return this._forwardHostHeader;
  }

  // gzip_on - computed: true, optional: true, required: false
  private _gzipOn?: boolean | cdktf.IResolvable; 
  public get gzipOn() {
    return this.getBooleanAttribute('gzip_on');
  }
  public set gzipOn(value: boolean | cdktf.IResolvable) {
    this._gzipOn = value;
  }
  public resetGzipOn() {
    this._gzipOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipOnInput() {
    return this._gzipOn;
  }

  // ignore_cookie - computed: false, optional: true, required: false
  private _ignoreCookie?: boolean | cdktf.IResolvable; 
  public get ignoreCookie() {
    return this.getBooleanAttribute('ignore_cookie');
  }
  public set ignoreCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreCookie = value;
  }
  public resetIgnoreCookie() {
    this._ignoreCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCookieInput() {
    return this._ignoreCookie;
  }

  // ignore_query_params - computed: true, optional: true, required: false
  private _ignoreQueryParams?: boolean | cdktf.IResolvable; 
  public get ignoreQueryParams() {
    return this.getBooleanAttribute('ignore_query_params');
  }
  public set ignoreQueryParams(value: boolean | cdktf.IResolvable) {
    this._ignoreQueryParams = value;
  }
  public resetIgnoreQueryParams() {
    this._ignoreQueryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreQueryParamsInput() {
    return this._ignoreQueryParams;
  }

  // proxy_cache_methods_set - computed: true, optional: true, required: false
  private _proxyCacheMethodsSet?: boolean | cdktf.IResolvable; 
  public get proxyCacheMethodsSet() {
    return this.getBooleanAttribute('proxy_cache_methods_set');
  }
  public set proxyCacheMethodsSet(value: boolean | cdktf.IResolvable) {
    this._proxyCacheMethodsSet = value;
  }
  public resetProxyCacheMethodsSet() {
    this._proxyCacheMethodsSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCacheMethodsSetInput() {
    return this._proxyCacheMethodsSet;
  }

  // query_params_blacklist - computed: true, optional: true, required: false
  private _queryParamsBlacklist?: string[]; 
  public get queryParamsBlacklist() {
    return this.getListAttribute('query_params_blacklist');
  }
  public set queryParamsBlacklist(value: string[]) {
    this._queryParamsBlacklist = value;
  }
  public resetQueryParamsBlacklist() {
    this._queryParamsBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsBlacklistInput() {
    return this._queryParamsBlacklist;
  }

  // query_params_whitelist - computed: true, optional: true, required: false
  private _queryParamsWhitelist?: string[]; 
  public get queryParamsWhitelist() {
    return this.getListAttribute('query_params_whitelist');
  }
  public set queryParamsWhitelist(value: string[]) {
    this._queryParamsWhitelist = value;
  }
  public resetQueryParamsWhitelist() {
    this._queryParamsWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsWhitelistInput() {
    return this._queryParamsWhitelist;
  }

  // redirect_http_to_https - computed: true, optional: true, required: false
  private _redirectHttpToHttps?: boolean | cdktf.IResolvable; 
  public get redirectHttpToHttps() {
    return this.getBooleanAttribute('redirect_http_to_https');
  }
  public set redirectHttpToHttps(value: boolean | cdktf.IResolvable) {
    this._redirectHttpToHttps = value;
  }
  public resetRedirectHttpToHttps() {
    this._redirectHttpToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpToHttpsInput() {
    return this._redirectHttpToHttps;
  }

  // redirect_https_to_http - computed: true, optional: true, required: false
  private _redirectHttpsToHttp?: boolean | cdktf.IResolvable; 
  public get redirectHttpsToHttp() {
    return this.getBooleanAttribute('redirect_https_to_http');
  }
  public set redirectHttpsToHttp(value: boolean | cdktf.IResolvable) {
    this._redirectHttpsToHttp = value;
  }
  public resetRedirectHttpsToHttp() {
    this._redirectHttpsToHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpsToHttpInput() {
    return this._redirectHttpsToHttp;
  }

  // rewrite_flag - computed: true, optional: true, required: false
  private _rewriteFlag?: string; 
  public get rewriteFlag() {
    return this.getStringAttribute('rewrite_flag');
  }
  public set rewriteFlag(value: string) {
    this._rewriteFlag = value;
  }
  public resetRewriteFlag() {
    this._rewriteFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteFlagInput() {
    return this._rewriteFlag;
  }

  // rewrite_pattern - computed: false, optional: true, required: false
  private _rewritePattern?: string; 
  public get rewritePattern() {
    return this.getStringAttribute('rewrite_pattern');
  }
  public set rewritePattern(value: string) {
    this._rewritePattern = value;
  }
  public resetRewritePattern() {
    this._rewritePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePatternInput() {
    return this._rewritePattern;
  }

  // secure_key - computed: true, optional: true, required: false
  private _secureKey?: string; 
  public get secureKey() {
    return this.getStringAttribute('secure_key');
  }
  public set secureKey(value: string) {
    this._secureKey = value;
  }
  public resetSecureKey() {
    this._secureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureKeyInput() {
    return this._secureKey;
  }

  // slice - computed: false, optional: true, required: false
  private _slice?: boolean | cdktf.IResolvable; 
  public get slice() {
    return this.getBooleanAttribute('slice');
  }
  public set slice(value: boolean | cdktf.IResolvable) {
    this._slice = value;
  }
  public resetSlice() {
    this._slice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceInput() {
    return this._slice;
  }

  // stale - computed: false, optional: true, required: false
  private _stale?: string[]; 
  public get stale() {
    return this.getListAttribute('stale');
  }
  public set stale(value: string[]) {
    this._stale = value;
  }
  public resetStale() {
    this._stale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleInput() {
    return this._stale;
  }

  // static_request_headers - computed: false, optional: true, required: false
  private _staticRequestHeaders?: { [key: string]: string }; 
  public get staticRequestHeaders() {
    return this.getStringMapAttribute('static_request_headers');
  }
  public set staticRequestHeaders(value: { [key: string]: string }) {
    this._staticRequestHeaders = value;
  }
  public resetStaticRequestHeaders() {
    this._staticRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRequestHeadersInput() {
    return this._staticRequestHeaders;
  }

  // static_response_headers - computed: false, optional: true, required: false
  private _staticResponseHeaders?: { [key: string]: string }; 
  public get staticResponseHeaders() {
    return this.getStringMapAttribute('static_response_headers');
  }
  public set staticResponseHeaders(value: { [key: string]: string }) {
    this._staticResponseHeaders = value;
  }
  public resetStaticResponseHeaders() {
    this._staticResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticResponseHeadersInput() {
    return this._staticResponseHeaders;
  }

  // edge_cache_settings_codes - computed: false, optional: true, required: false
  private _edgeCacheSettingsCodes = new CdnResourceOptionsEdgeCacheSettingsCodesOutputReference(this, "edge_cache_settings_codes");
  public get edgeCacheSettingsCodes() {
    return this._edgeCacheSettingsCodes;
  }
  public putEdgeCacheSettingsCodes(value: CdnResourceOptionsEdgeCacheSettingsCodes) {
    this._edgeCacheSettingsCodes.internalValue = value;
  }
  public resetEdgeCacheSettingsCodes() {
    this._edgeCacheSettingsCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCacheSettingsCodesInput() {
    return this._edgeCacheSettingsCodes.internalValue;
  }

  // ip_address_acl - computed: false, optional: true, required: false
  private _ipAddressAcl = new CdnResourceOptionsIpAddressAclOutputReference(this, "ip_address_acl");
  public get ipAddressAcl() {
    return this._ipAddressAcl;
  }
  public putIpAddressAcl(value: CdnResourceOptionsIpAddressAcl) {
    this._ipAddressAcl.internalValue = value;
  }
  public resetIpAddressAcl() {
    this._ipAddressAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressAclInput() {
    return this._ipAddressAcl.internalValue;
  }
}
export interface CdnResourceSslCertificate {
  /**
  * Certificate Manager ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#certificate_manager_id CdnResource#certificate_manager_id}
  */
  readonly certificateManagerId?: string;
  /**
  * SSL certificate type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#type CdnResource#type}
  */
  readonly type: string;
}

export function cdnResourceSslCertificateToTerraform(struct?: CdnResourceSslCertificateOutputReference | CdnResourceSslCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_manager_id: cdktf.stringToTerraform(struct!.certificateManagerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cdnResourceSslCertificateToHclTerraform(struct?: CdnResourceSslCertificateOutputReference | CdnResourceSslCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_manager_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateManagerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceSslCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnResourceSslCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateManagerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateManagerId = this._certificateManagerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceSslCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateManagerId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateManagerId = value.certificateManagerId;
      this._type = value.type;
    }
  }

  // certificate_manager_id - computed: false, optional: true, required: false
  private _certificateManagerId?: string; 
  public get certificateManagerId() {
    return this.getStringAttribute('certificate_manager_id');
  }
  public set certificateManagerId(value: string) {
    this._certificateManagerId = value;
  }
  public resetCertificateManagerId() {
    this._certificateManagerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagerIdInput() {
    return this._certificateManagerId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CdnResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#create CdnResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#delete CdnResource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#read CdnResource#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#update CdnResource#update}
  */
  readonly update?: string;
}

export function cdnResourceTimeoutsToTerraform(struct?: CdnResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cdnResourceTimeoutsToHclTerraform(struct?: CdnResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnResourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource yandex_cdn_resource}
*/
export class CdnResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_cdn_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnResource to import
  * @param importFromId The id of the existing CdnResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_cdn_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/cdn_resource yandex_cdn_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnResourceConfig
  */
  public constructor(scope: Construct, id: string, config: CdnResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_cdn_resource',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.170.0',
        providerVersionConstraint: '0.170.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._cname = config.cname;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._originGroupId = config.originGroupId;
    this._originGroupName = config.originGroupName;
    this._originProtocol = config.originProtocol;
    this._providerType = config.providerType;
    this._secondaryHostnames = config.secondaryHostnames;
    this._shielding = config.shielding;
    this._updatedAt = config.updatedAt;
    this._options.internalValue = config.options;
    this._sslCertificate.internalValue = config.sslCertificate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // cname - computed: false, optional: false, required: true
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // origin_group_id - computed: false, optional: true, required: false
  private _originGroupId?: string; 
  public get originGroupId() {
    return this.getStringAttribute('origin_group_id');
  }
  public set originGroupId(value: string) {
    this._originGroupId = value;
  }
  public resetOriginGroupId() {
    this._originGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupIdInput() {
    return this._originGroupId;
  }

  // origin_group_name - computed: false, optional: true, required: false
  private _originGroupName?: string; 
  public get originGroupName() {
    return this.getStringAttribute('origin_group_name');
  }
  public set originGroupName(value: string) {
    this._originGroupName = value;
  }
  public resetOriginGroupName() {
    this._originGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupNameInput() {
    return this._originGroupName;
  }

  // origin_protocol - computed: false, optional: true, required: false
  private _originProtocol?: string; 
  public get originProtocol() {
    return this.getStringAttribute('origin_protocol');
  }
  public set originProtocol(value: string) {
    this._originProtocol = value;
  }
  public resetOriginProtocol() {
    this._originProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolInput() {
    return this._originProtocol;
  }

  // provider_cname - computed: true, optional: false, required: false
  public get providerCname() {
    return this.getStringAttribute('provider_cname');
  }

  // provider_type - computed: false, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // secondary_hostnames - computed: false, optional: true, required: false
  private _secondaryHostnames?: string[]; 
  public get secondaryHostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_hostnames'));
  }
  public set secondaryHostnames(value: string[]) {
    this._secondaryHostnames = value;
  }
  public resetSecondaryHostnames() {
    this._secondaryHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryHostnamesInput() {
    return this._secondaryHostnames;
  }

  // shielding - computed: false, optional: true, required: false
  private _shielding?: string; 
  public get shielding() {
    return this.getStringAttribute('shielding');
  }
  public set shielding(value: string) {
    this._shielding = value;
  }
  public resetShielding() {
    this._shielding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldingInput() {
    return this._shielding;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // options - computed: false, optional: true, required: false
  private _options = new CdnResourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: CdnResourceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate = new CdnResourceSslCertificateOutputReference(this, "ssl_certificate");
  public get sslCertificate() {
    return this._sslCertificate;
  }
  public putSslCertificate(value: CdnResourceSslCertificate) {
    this._sslCertificate.internalValue = value;
  }
  public resetSslCertificate() {
    this._sslCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnResourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      cname: cdktf.stringToTerraform(this._cname),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      origin_group_id: cdktf.stringToTerraform(this._originGroupId),
      origin_group_name: cdktf.stringToTerraform(this._originGroupName),
      origin_protocol: cdktf.stringToTerraform(this._originProtocol),
      provider_type: cdktf.stringToTerraform(this._providerType),
      secondary_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryHostnames),
      shielding: cdktf.stringToTerraform(this._shielding),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      options: cdnResourceOptionsToTerraform(this._options.internalValue),
      ssl_certificate: cdnResourceSslCertificateToTerraform(this._sslCertificate.internalValue),
      timeouts: cdnResourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cname: {
        value: cdktf.stringToHclTerraform(this._cname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      origin_group_id: {
        value: cdktf.stringToHclTerraform(this._originGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_group_name: {
        value: cdktf.stringToHclTerraform(this._originGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_protocol: {
        value: cdktf.stringToHclTerraform(this._originProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryHostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      shielding: {
        value: cdktf.stringToHclTerraform(this._shielding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdnResourceOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnResourceOptionsList",
      },
      ssl_certificate: {
        value: cdnResourceSslCertificateToHclTerraform(this._sslCertificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnResourceSslCertificateList",
      },
      timeouts: {
        value: cdnResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
