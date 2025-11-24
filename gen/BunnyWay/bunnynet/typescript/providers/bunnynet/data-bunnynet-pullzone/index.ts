// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBunnynetPullzoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the pull zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone#id DataBunnynetPullzone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}
export interface DataBunnynetPullzoneOrigin {
}

export function dataBunnynetPullzoneOriginToTerraform(struct?: DataBunnynetPullzoneOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBunnynetPullzoneOriginToHclTerraform(struct?: DataBunnynetPullzoneOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBunnynetPullzoneOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBunnynetPullzoneOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBunnynetPullzoneOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // container_app_id - computed: true, optional: false, required: false
  public get containerAppId() {
    return this.getStringAttribute('container_app_id');
  }

  // container_endpoint_id - computed: true, optional: false, required: false
  public get containerEndpointId() {
    return this.getStringAttribute('container_endpoint_id');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // forward_host_header - computed: true, optional: false, required: false
  public get forwardHostHeader() {
    return this.getBooleanAttribute('forward_host_header');
  }

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }

  // middleware_script - computed: true, optional: false, required: false
  public get middlewareScript() {
    return this.getNumberAttribute('middleware_script');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getNumberAttribute('script');
  }

  // storagezone - computed: true, optional: false, required: false
  public get storagezone() {
    return this.getNumberAttribute('storagezone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // verify_ssl - computed: true, optional: false, required: false
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
}
export interface DataBunnynetPullzoneRouting {
}

export function dataBunnynetPullzoneRoutingToTerraform(struct?: DataBunnynetPullzoneRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBunnynetPullzoneRoutingToHclTerraform(struct?: DataBunnynetPullzoneRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBunnynetPullzoneRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBunnynetPullzoneRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBunnynetPullzoneRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // blocked_countries - computed: true, optional: false, required: false
  public get blockedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_countries'));
  }

  // filters - computed: true, optional: false, required: false
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }

  // redirected_countries - computed: true, optional: false, required: false
  public get redirectedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('redirected_countries'));
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone bunnynet_pullzone}
*/
export class DataBunnynetPullzone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBunnynetPullzone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBunnynetPullzone to import
  * @param importFromId The id of the existing DataBunnynetPullzone that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBunnynetPullzone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone bunnynet_pullzone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBunnynetPullzoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataBunnynetPullzoneConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_canonical_header - computed: true, optional: false, required: false
  public get addCanonicalHeader() {
    return this.getBooleanAttribute('add_canonical_header');
  }

  // allow_referers - computed: true, optional: false, required: false
  public get allowReferers() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_referers'));
  }

  // block_ips - computed: true, optional: false, required: false
  public get blockIps() {
    return cdktf.Fn.tolist(this.getListAttribute('block_ips'));
  }

  // block_no_referer - computed: true, optional: false, required: false
  public get blockNoReferer() {
    return this.getBooleanAttribute('block_no_referer');
  }

  // block_post_requests - computed: true, optional: false, required: false
  public get blockPostRequests() {
    return this.getBooleanAttribute('block_post_requests');
  }

  // block_referers - computed: true, optional: false, required: false
  public get blockReferers() {
    return cdktf.Fn.tolist(this.getListAttribute('block_referers'));
  }

  // block_root_path - computed: true, optional: false, required: false
  public get blockRootPath() {
    return this.getBooleanAttribute('block_root_path');
  }

  // cache_chunked - computed: true, optional: false, required: false
  public get cacheChunked() {
    return this.getBooleanAttribute('cache_chunked');
  }

  // cache_enabled - computed: true, optional: false, required: false
  public get cacheEnabled() {
    return this.getBooleanAttribute('cache_enabled');
  }

  // cache_errors - computed: true, optional: false, required: false
  public get cacheErrors() {
    return this.getBooleanAttribute('cache_errors');
  }

  // cache_expiration_time - computed: true, optional: false, required: false
  public get cacheExpirationTime() {
    return this.getNumberAttribute('cache_expiration_time');
  }

  // cache_expiration_time_browser - computed: true, optional: false, required: false
  public get cacheExpirationTimeBrowser() {
    return this.getNumberAttribute('cache_expiration_time_browser');
  }

  // cache_stale - computed: true, optional: false, required: false
  public get cacheStale() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_stale'));
  }

  // cache_vary - computed: true, optional: false, required: false
  public get cacheVary() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_vary'));
  }

  // cache_vary_cookie - computed: true, optional: false, required: false
  public get cacheVaryCookie() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_vary_cookie'));
  }

  // cache_vary_querystring - computed: true, optional: false, required: false
  public get cacheVaryQuerystring() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_vary_querystring'));
  }

  // cdn_domain - computed: true, optional: false, required: false
  public get cdnDomain() {
    return this.getStringAttribute('cdn_domain');
  }

  // cors_enabled - computed: true, optional: false, required: false
  public get corsEnabled() {
    return this.getBooleanAttribute('cors_enabled');
  }

  // cors_extensions - computed: true, optional: false, required: false
  public get corsExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_extensions'));
  }

  // disable_letsencrypt - computed: true, optional: false, required: false
  public get disableLetsencrypt() {
    return this.getBooleanAttribute('disable_letsencrypt');
  }

  // errorpage_custom_content - computed: true, optional: false, required: false
  public get errorpageCustomContent() {
    return this.getStringAttribute('errorpage_custom_content');
  }

  // errorpage_custom_enabled - computed: true, optional: false, required: false
  public get errorpageCustomEnabled() {
    return this.getBooleanAttribute('errorpage_custom_enabled');
  }

  // errorpage_statuspage_code - computed: true, optional: false, required: false
  public get errorpageStatuspageCode() {
    return this.getStringAttribute('errorpage_statuspage_code');
  }

  // errorpage_statuspage_enabled - computed: true, optional: false, required: false
  public get errorpageStatuspageEnabled() {
    return this.getBooleanAttribute('errorpage_statuspage_enabled');
  }

  // errorpage_whitelabel - computed: true, optional: false, required: false
  public get errorpageWhitelabel() {
    return this.getBooleanAttribute('errorpage_whitelabel');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // limit_after - computed: true, optional: false, required: false
  public get limitAfter() {
    return this.getNumberAttribute('limit_after');
  }

  // limit_bandwidth - computed: true, optional: false, required: false
  public get limitBandwidth() {
    return this.getNumberAttribute('limit_bandwidth');
  }

  // limit_burst - computed: true, optional: false, required: false
  public get limitBurst() {
    return this.getNumberAttribute('limit_burst');
  }

  // limit_connections - computed: true, optional: false, required: false
  public get limitConnections() {
    return this.getNumberAttribute('limit_connections');
  }

  // limit_download_speed - computed: true, optional: false, required: false
  public get limitDownloadSpeed() {
    return this.getNumberAttribute('limit_download_speed');
  }

  // limit_requests - computed: true, optional: false, required: false
  public get limitRequests() {
    return this.getNumberAttribute('limit_requests');
  }

  // log_anonymized - computed: true, optional: false, required: false
  public get logAnonymized() {
    return this.getBooleanAttribute('log_anonymized');
  }

  // log_anonymized_style - computed: true, optional: false, required: false
  public get logAnonymizedStyle() {
    return this.getStringAttribute('log_anonymized_style');
  }

  // log_enabled - computed: true, optional: false, required: false
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }

  // log_forward_enabled - computed: true, optional: false, required: false
  public get logForwardEnabled() {
    return this.getBooleanAttribute('log_forward_enabled');
  }

  // log_forward_format - computed: true, optional: false, required: false
  public get logForwardFormat() {
    return this.getStringAttribute('log_forward_format');
  }

  // log_forward_port - computed: true, optional: false, required: false
  public get logForwardPort() {
    return this.getNumberAttribute('log_forward_port');
  }

  // log_forward_protocol - computed: true, optional: false, required: false
  public get logForwardProtocol() {
    return this.getStringAttribute('log_forward_protocol');
  }

  // log_forward_server - computed: true, optional: false, required: false
  public get logForwardServer() {
    return this.getStringAttribute('log_forward_server');
  }

  // log_forward_token - computed: true, optional: false, required: false
  public get logForwardToken() {
    return this.getStringAttribute('log_forward_token');
  }

  // log_storage_enabled - computed: true, optional: false, required: false
  public get logStorageEnabled() {
    return this.getBooleanAttribute('log_storage_enabled');
  }

  // log_storage_zone - computed: true, optional: false, required: false
  public get logStorageZone() {
    return this.getNumberAttribute('log_storage_zone');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optimizer_burrow - computed: true, optional: false, required: false
  public get optimizerBurrow() {
    return this.getBooleanAttribute('optimizer_burrow');
  }

  // optimizer_classes_force - computed: true, optional: false, required: false
  public get optimizerClassesForce() {
    return this.getBooleanAttribute('optimizer_classes_force');
  }

  // optimizer_dynamic_image_api - computed: true, optional: false, required: false
  public get optimizerDynamicImageApi() {
    return this.getBooleanAttribute('optimizer_dynamic_image_api');
  }

  // optimizer_enabled - computed: true, optional: false, required: false
  public get optimizerEnabled() {
    return this.getBooleanAttribute('optimizer_enabled');
  }

  // optimizer_html_prerender - computed: true, optional: false, required: false
  public get optimizerHtmlPrerender() {
    return this.getBooleanAttribute('optimizer_html_prerender');
  }

  // optimizer_minify_css - computed: true, optional: false, required: false
  public get optimizerMinifyCss() {
    return this.getBooleanAttribute('optimizer_minify_css');
  }

  // optimizer_minify_js - computed: true, optional: false, required: false
  public get optimizerMinifyJs() {
    return this.getBooleanAttribute('optimizer_minify_js');
  }

  // optimizer_smartimage - computed: true, optional: false, required: false
  public get optimizerSmartimage() {
    return this.getBooleanAttribute('optimizer_smartimage');
  }

  // optimizer_smartimage_desktop_maxwidth - computed: true, optional: false, required: false
  public get optimizerSmartimageDesktopMaxwidth() {
    return this.getNumberAttribute('optimizer_smartimage_desktop_maxwidth');
  }

  // optimizer_smartimage_desktop_quality - computed: true, optional: false, required: false
  public get optimizerSmartimageDesktopQuality() {
    return this.getNumberAttribute('optimizer_smartimage_desktop_quality');
  }

  // optimizer_smartimage_mobile_maxwidth - computed: true, optional: false, required: false
  public get optimizerSmartimageMobileMaxwidth() {
    return this.getNumberAttribute('optimizer_smartimage_mobile_maxwidth');
  }

  // optimizer_smartimage_mobile_quality - computed: true, optional: false, required: false
  public get optimizerSmartimageMobileQuality() {
    return this.getNumberAttribute('optimizer_smartimage_mobile_quality');
  }

  // optimizer_watermark - computed: true, optional: false, required: false
  public get optimizerWatermark() {
    return this.getBooleanAttribute('optimizer_watermark');
  }

  // optimizer_watermark_borderoffset - computed: true, optional: false, required: false
  public get optimizerWatermarkBorderoffset() {
    return this.getNumberAttribute('optimizer_watermark_borderoffset');
  }

  // optimizer_watermark_minsize - computed: true, optional: false, required: false
  public get optimizerWatermarkMinsize() {
    return this.getNumberAttribute('optimizer_watermark_minsize');
  }

  // optimizer_watermark_position - computed: true, optional: false, required: false
  public get optimizerWatermarkPosition() {
    return this.getStringAttribute('optimizer_watermark_position');
  }

  // optimizer_watermark_url - computed: true, optional: false, required: false
  public get optimizerWatermarkUrl() {
    return this.getStringAttribute('optimizer_watermark_url');
  }

  // optimizer_webp - computed: true, optional: false, required: false
  public get optimizerWebp() {
    return this.getBooleanAttribute('optimizer_webp');
  }

  // originshield_concurrency_limit - computed: true, optional: false, required: false
  public get originshieldConcurrencyLimit() {
    return this.getBooleanAttribute('originshield_concurrency_limit');
  }

  // originshield_concurrency_requests - computed: true, optional: false, required: false
  public get originshieldConcurrencyRequests() {
    return this.getNumberAttribute('originshield_concurrency_requests');
  }

  // originshield_enabled - computed: true, optional: false, required: false
  public get originshieldEnabled() {
    return this.getBooleanAttribute('originshield_enabled');
  }

  // originshield_queue_requests - computed: true, optional: false, required: false
  public get originshieldQueueRequests() {
    return this.getNumberAttribute('originshield_queue_requests');
  }

  // originshield_queue_wait - computed: true, optional: false, required: false
  public get originshieldQueueWait() {
    return this.getNumberAttribute('originshield_queue_wait');
  }

  // originshield_zone - computed: true, optional: false, required: false
  public get originshieldZone() {
    return this.getStringAttribute('originshield_zone');
  }

  // permacache_storagezone - computed: true, optional: false, required: false
  public get permacacheStoragezone() {
    return this.getNumberAttribute('permacache_storagezone');
  }

  // request_coalescing_enabled - computed: true, optional: false, required: false
  public get requestCoalescingEnabled() {
    return this.getBooleanAttribute('request_coalescing_enabled');
  }

  // request_coalescing_timeout - computed: true, optional: false, required: false
  public get requestCoalescingTimeout() {
    return this.getNumberAttribute('request_coalescing_timeout');
  }

  // s3_auth_enabled - computed: true, optional: false, required: false
  public get s3AuthEnabled() {
    return this.getBooleanAttribute('s3_auth_enabled');
  }

  // s3_auth_key - computed: true, optional: false, required: false
  public get s3AuthKey() {
    return this.getStringAttribute('s3_auth_key');
  }

  // s3_auth_region - computed: true, optional: false, required: false
  public get s3AuthRegion() {
    return this.getStringAttribute('s3_auth_region');
  }

  // s3_auth_secret - computed: true, optional: false, required: false
  public get s3AuthSecret() {
    return this.getStringAttribute('s3_auth_secret');
  }

  // safehop_connection_timeout - computed: true, optional: false, required: false
  public get safehopConnectionTimeout() {
    return this.getNumberAttribute('safehop_connection_timeout');
  }

  // safehop_enabled - computed: true, optional: false, required: false
  public get safehopEnabled() {
    return this.getBooleanAttribute('safehop_enabled');
  }

  // safehop_response_timeout - computed: true, optional: false, required: false
  public get safehopResponseTimeout() {
    return this.getNumberAttribute('safehop_response_timeout');
  }

  // safehop_retry_count - computed: true, optional: false, required: false
  public get safehopRetryCount() {
    return this.getNumberAttribute('safehop_retry_count');
  }

  // safehop_retry_delay - computed: true, optional: false, required: false
  public get safehopRetryDelay() {
    return this.getNumberAttribute('safehop_retry_delay');
  }

  // safehop_retry_reasons - computed: true, optional: false, required: false
  public get safehopRetryReasons() {
    return cdktf.Fn.tolist(this.getListAttribute('safehop_retry_reasons'));
  }

  // sort_querystring - computed: true, optional: false, required: false
  public get sortQuerystring() {
    return this.getBooleanAttribute('sort_querystring');
  }

  // strip_cookies - computed: true, optional: false, required: false
  public get stripCookies() {
    return this.getBooleanAttribute('strip_cookies');
  }

  // tls_support - computed: true, optional: false, required: false
  public get tlsSupport() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_support'));
  }

  // token_auth_enabled - computed: true, optional: false, required: false
  public get tokenAuthEnabled() {
    return this.getBooleanAttribute('token_auth_enabled');
  }

  // token_auth_ip_validation - computed: true, optional: false, required: false
  public get tokenAuthIpValidation() {
    return this.getBooleanAttribute('token_auth_ip_validation');
  }

  // token_auth_key - computed: true, optional: false, required: false
  public get tokenAuthKey() {
    return this.getStringAttribute('token_auth_key');
  }

  // use_background_update - computed: true, optional: false, required: false
  public get useBackgroundUpdate() {
    return this.getBooleanAttribute('use_background_update');
  }

  // websockets_enabled - computed: true, optional: false, required: false
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled');
  }

  // websockets_max_connections - computed: true, optional: false, required: false
  public get websocketsMaxConnections() {
    return this.getNumberAttribute('websockets_max_connections');
  }

  // origin - computed: false, optional: false, required: false
  private _origin = new DataBunnynetPullzoneOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }

  // routing - computed: false, optional: false, required: false
  private _routing = new DataBunnynetPullzoneRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
