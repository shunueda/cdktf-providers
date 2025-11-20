// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PullzoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the Canonical header is added to the responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#add_canonical_header Pullzone#add_canonical_header}
  */
  readonly addCanonicalHeader?: boolean | cdktf.IResolvable;
  /**
  * The list of referrer hostnames that are allowed to access the pull zone. Requests containing the header "Referer: hostname" that is not on the list will be rejected. If empty, all the referrers are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#allow_referers Pullzone#allow_referers}
  */
  readonly allowReferers?: string[];
  /**
  * The list of IPs that are blocked from accessing the pull zone. Requests coming from the following IPs will be rejected. If empty, all the IPs will be allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#block_ips Pullzone#block_ips}
  */
  readonly blockIps?: string[];
  /**
  * Indicates whether requests without a referer should be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#block_no_referer Pullzone#block_no_referer}
  */
  readonly blockNoReferer?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to block POST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#block_post_requests Pullzone#block_post_requests}
  */
  readonly blockPostRequests?: boolean | cdktf.IResolvable;
  /**
  * The list of referrer hostnames that are blocked to access the pull zone. Requests containing the header "Referer: hostname" that is not on the list will be rejected. If empty, all the referrers are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#block_referers Pullzone#block_referers}
  */
  readonly blockReferers?: string[];
  /**
  * This property indicates whether to block the root path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#block_root_path Pullzone#block_root_path}
  */
  readonly blockRootPath?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the cache slice (Optimize for large object delivery) feature is enabled for the Pull Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_chunked Pullzone#cache_chunked}
  */
  readonly cacheChunked?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether smart caching is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_enabled Pullzone#cache_enabled}
  */
  readonly cacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether bunny.net should be caching error responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_errors Pullzone#cache_errors}
  */
  readonly cacheErrors?: boolean | cdktf.IResolvable;
  /**
  * The override cache time, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_expiration_time Pullzone#cache_expiration_time}
  */
  readonly cacheExpirationTime?: number;
  /**
  * The override cache time for the end client, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_expiration_time_browser Pullzone#cache_expiration_time_browser}
  */
  readonly cacheExpirationTimeBrowser?: number;
  /**
  * Options: `offline`, `updating`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_stale Pullzone#cache_stale}
  */
  readonly cacheStale?: string[];
  /**
  * Options: `avif`, `cookie`, `country`, `hostname`, `mobile`, `querystring`, `state`, `webp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_vary Pullzone#cache_vary}
  */
  readonly cacheVary?: string[];
  /**
  * Contains the list of vary parameters that will be used for vary cache by cookie string. If empty, cookie vary will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_vary_cookie Pullzone#cache_vary_cookie}
  */
  readonly cacheVaryCookie?: string[];
  /**
  * Contains the list of vary parameters that will be used for vary cache by query string. If empty, all parameters will be used to construct the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cache_vary_querystring Pullzone#cache_vary_querystring}
  */
  readonly cacheVaryQuerystring?: string[];
  /**
  * Indicates whether CORS (Cross-Origin Resource Sharing) is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cors_enabled Pullzone#cors_enabled}
  */
  readonly corsEnabled?: boolean | cdktf.IResolvable;
  /**
  * A list of file extensions for which CORS is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#cors_extensions Pullzone#cors_extensions}
  */
  readonly corsExtensions?: string[];
  /**
  * If true, the built-in let's encrypt is disabled and requests are passed to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#disable_letsencrypt Pullzone#disable_letsencrypt}
  */
  readonly disableLetsencrypt?: boolean | cdktf.IResolvable;
  /**
  * Contains the custom error page code that will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#errorpage_custom_content Pullzone#errorpage_custom_content}
  */
  readonly errorpageCustomContent?: string;
  /**
  * Indicates whether custom error page code should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#errorpage_custom_enabled Pullzone#errorpage_custom_enabled}
  */
  readonly errorpageCustomEnabled?: boolean | cdktf.IResolvable;
  /**
  * The statuspage code that will be used to build the status widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#errorpage_statuspage_code Pullzone#errorpage_statuspage_code}
  */
  readonly errorpageStatuspageCode?: string;
  /**
  * Indicates whether the statuspage widget should be displayed on the error pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#errorpage_statuspage_enabled Pullzone#errorpage_statuspage_enabled}
  */
  readonly errorpageStatuspageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the error pages should be white-labelled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#errorpage_whitelabel Pullzone#errorpage_whitelabel}
  */
  readonly errorpageWhitelabel?: boolean | cdktf.IResolvable;
  /**
  * The amount of data after the rate limit will be activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#limit_after Pullzone#limit_after}
  */
  readonly limitAfter?: number;
  /**
  * The maximum bandwidth limit in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#limit_bandwidth Pullzone#limit_bandwidth}
  */
  readonly limitBandwidth?: number;
  /**
  * Excessive requests are delayed until their number exceeds the maximum burst size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#limit_burst Pullzone#limit_burst}
  */
  readonly limitBurst?: number;
  /**
  * The number of connections limited per IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#limit_connections Pullzone#limit_connections}
  */
  readonly limitConnections?: number;
  /**
  * The maximum download speed, in kb/s. Use 0 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#limit_download_speed Pullzone#limit_download_speed}
  */
  readonly limitDownloadSpeed?: number;
  /**
  * The maximum amount of requests per IP per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#limit_requests Pullzone#limit_requests}
  */
  readonly limitRequests?: number;
  /**
  * Indicates whether logs are anonymized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_anonymized Pullzone#log_anonymized}
  */
  readonly logAnonymized?: boolean | cdktf.IResolvable;
  /**
  * Options: `Drop`, `OneDigit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_anonymized_style Pullzone#log_anonymized_style}
  */
  readonly logAnonymizedStyle?: string;
  /**
  * Indicates whether logging is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_enabled Pullzone#log_enabled}
  */
  readonly logEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log forwarding is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_forward_enabled Pullzone#log_forward_enabled}
  */
  readonly logForwardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Options: `JSON`, `Plain`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_forward_format Pullzone#log_forward_format}
  */
  readonly logForwardFormat?: string;
  /**
  * The port number for log forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_forward_port Pullzone#log_forward_port}
  */
  readonly logForwardPort?: number;
  /**
  * Options: `DataDog`, `TCP`, `TCPEncrypted`, `UDP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_forward_protocol Pullzone#log_forward_protocol}
  */
  readonly logForwardProtocol?: string;
  /**
  * The server address for log forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_forward_server Pullzone#log_forward_server}
  */
  readonly logForwardServer?: string;
  /**
  * The token used for log forwarding authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_forward_token Pullzone#log_forward_token}
  */
  readonly logForwardToken?: string;
  /**
  * Indicates whether log storage is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_storage_enabled Pullzone#log_storage_enabled}
  */
  readonly logStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * The storage zone ID for log storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#log_storage_zone Pullzone#log_storage_zone}
  */
  readonly logStorageZone?: number;
  /**
  * The name of the pull zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#name Pullzone#name}
  */
  readonly name: string;
  /**
  * Indicates whether Burrow Smart Routing should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_burrow Pullzone#optimizer_burrow}
  */
  readonly optimizerBurrow?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the optimizer class list should be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_classes_force Pullzone#optimizer_classes_force}
  */
  readonly optimizerClassesForce?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the image manipulation should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_dynamic_image_api Pullzone#optimizer_dynamic_image_api}
  */
  readonly optimizerDynamicImageApi?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether Bunny Optimizer should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_enabled Pullzone#optimizer_enabled}
  */
  readonly optimizerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether HTML Prerender should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_html_prerender Pullzone#optimizer_html_prerender}
  */
  readonly optimizerHtmlPrerender?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the CSS minification should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_minify_css Pullzone#optimizer_minify_css}
  */
  readonly optimizerMinifyCss?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the JavaScript minification should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_minify_js Pullzone#optimizer_minify_js}
  */
  readonly optimizerMinifyJs?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the automatic image optimization should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_smartimage Pullzone#optimizer_smartimage}
  */
  readonly optimizerSmartimage?: boolean | cdktf.IResolvable;
  /**
  * The maximum automatic image size for desktop clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_smartimage_desktop_maxwidth Pullzone#optimizer_smartimage_desktop_maxwidth}
  */
  readonly optimizerSmartimageDesktopMaxwidth?: number;
  /**
  * The image quality for desktop clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_smartimage_desktop_quality Pullzone#optimizer_smartimage_desktop_quality}
  */
  readonly optimizerSmartimageDesktopQuality?: number;
  /**
  * The maximum automatic image size for mobile clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_smartimage_mobile_maxwidth Pullzone#optimizer_smartimage_mobile_maxwidth}
  */
  readonly optimizerSmartimageMobileMaxwidth?: number;
  /**
  * Determines the image quality for mobile clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_smartimage_mobile_quality Pullzone#optimizer_smartimage_mobile_quality}
  */
  readonly optimizerSmartimageMobileQuality?: number;
  /**
  * Indicates whether image watermarking should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_watermark Pullzone#optimizer_watermark}
  */
  readonly optimizerWatermark?: boolean | cdktf.IResolvable;
  /**
  * The offset of the watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_watermark_borderoffset Pullzone#optimizer_watermark_borderoffset}
  */
  readonly optimizerWatermarkBorderoffset?: number;
  /**
  * The minimum image size to which the watermark will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_watermark_minsize Pullzone#optimizer_watermark_minsize}
  */
  readonly optimizerWatermarkMinsize?: number;
  /**
  * Options: `BottomLeft`, `BottomRight`, `Center`, `CenterStretch`, `TopLeft`, `TopRight`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_watermark_position Pullzone#optimizer_watermark_position}
  */
  readonly optimizerWatermarkPosition?: string;
  /**
  * The URL of the watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_watermark_url Pullzone#optimizer_watermark_url}
  */
  readonly optimizerWatermarkUrl?: string;
  /**
  * Indicates whether the WebP optimization should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#optimizer_webp Pullzone#optimizer_webp}
  */
  readonly optimizerWebp?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether there is a concurrency limit for Origin Shield.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#originshield_concurrency_limit Pullzone#originshield_concurrency_limit}
  */
  readonly originshieldConcurrencyLimit?: boolean | cdktf.IResolvable;
  /**
  * The number of concurrent requests for Origin Shield.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#originshield_concurrency_requests Pullzone#originshield_concurrency_requests}
  */
  readonly originshieldConcurrencyRequests?: number;
  /**
  * Indicates whether Origin Shield is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#originshield_enabled Pullzone#originshield_enabled}
  */
  readonly originshieldEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of queued requests for Origin Shield.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#originshield_queue_requests Pullzone#originshield_queue_requests}
  */
  readonly originshieldQueueRequests?: number;
  /**
  * The maximum wait time for queued requests in Origin Shield, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#originshield_queue_wait Pullzone#originshield_queue_wait}
  */
  readonly originshieldQueueWait?: number;
  /**
  * Options: `FR`, `IL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#originshield_zone Pullzone#originshield_zone}
  */
  readonly originshieldZone?: string;
  /**
  * The storage zone ID for Perma-Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#permacache_storagezone Pullzone#permacache_storagezone}
  */
  readonly permacacheStoragezone?: number;
  /**
  * Indicates whether request coalescing is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#request_coalescing_enabled Pullzone#request_coalescing_enabled}
  */
  readonly requestCoalescingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the timeout period, in seconds, for request coalescing, determining how long to wait before sending combined requests to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#request_coalescing_timeout Pullzone#request_coalescing_timeout}
  */
  readonly requestCoalescingTimeout?: number;
  /**
  * Indicates whether requests to origin will be signed with AWS Signature Version 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#s3_auth_enabled Pullzone#s3_auth_enabled}
  */
  readonly s3AuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * The access key used to authenticate the requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#s3_auth_key Pullzone#s3_auth_key}
  */
  readonly s3AuthKey?: string;
  /**
  * The region name of the bucket used to authenticate the requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#s3_auth_region Pullzone#s3_auth_region}
  */
  readonly s3AuthRegion?: string;
  /**
  * The secret key used to authenticate the requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#s3_auth_secret Pullzone#s3_auth_secret}
  */
  readonly s3AuthSecret?: string;
  /**
  * The amount of seconds to wait when connecting to the origin. Otherwise the request will fail or retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#safehop_connection_timeout Pullzone#safehop_connection_timeout}
  */
  readonly safehopConnectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#safehop_enabled Pullzone#safehop_enabled}
  */
  readonly safehopEnabled?: boolean | cdktf.IResolvable;
  /**
  * The amount of seconds to wait when waiting for the origin reply. Otherwise the request will fail or retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#safehop_response_timeout Pullzone#safehop_response_timeout}
  */
  readonly safehopResponseTimeout?: number;
  /**
  * The number of retries to the origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#safehop_retry_count Pullzone#safehop_retry_count}
  */
  readonly safehopRetryCount?: number;
  /**
  * The amount of time that the CDN should wait before retrying an origin request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#safehop_retry_delay Pullzone#safehop_retry_delay}
  */
  readonly safehopRetryDelay?: number;
  /**
  * Options: `5xxResponse`, `connectionTimeout`, `responseTimeout`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#safehop_retry_reasons Pullzone#safehop_retry_reasons}
  */
  readonly safehopRetryReasons?: string[];
  /**
  * If enabled, the query parameters will be automatically sorted into a consistent order before checking the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#sort_querystring Pullzone#sort_querystring}
  */
  readonly sortQuerystring?: boolean | cdktf.IResolvable;
  /**
  * If enabled, bunny.net will strip all the Set-Cookie headers from the HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#strip_cookies Pullzone#strip_cookies}
  */
  readonly stripCookies?: boolean | cdktf.IResolvable;
  /**
  * Options: `TLSv1.0`, `TLSv1.1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#tls_support Pullzone#tls_support}
  */
  readonly tlsSupport?: string[];
  /**
  * Indicates whether requests without a valid token and expiry timestamp will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#token_auth_enabled Pullzone#token_auth_enabled}
  */
  readonly tokenAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the secure hash generated by the server will also include an IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#token_auth_ip_validation Pullzone#token_auth_ip_validation}
  */
  readonly tokenAuthIpValidation?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether cache update is performed in the background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#use_background_update Pullzone#use_background_update}
  */
  readonly useBackgroundUpdate?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the WebSocket support is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#websockets_enabled Pullzone#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum allowed concurrent WebSocket connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#websockets_max_connections Pullzone#websockets_max_connections}
  */
  readonly websocketsMaxConnections?: number;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#origin Pullzone#origin}
  */
  readonly origin?: PullzoneOrigin;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#routing Pullzone#routing}
  */
  readonly routing?: PullzoneRouting;
}
export interface PullzoneOrigin {
  /**
  * The ID if the compute container app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#container_app_id Pullzone#container_app_id}
  */
  readonly containerAppId?: string;
  /**
  * The ID if the compute container app endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#container_endpoint_id Pullzone#container_endpoint_id}
  */
  readonly containerEndpointId?: string;
  /**
  * Indicates whether the zone will follow origin redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#follow_redirects Pullzone#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the current hostname is forwarded to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#forward_host_header Pullzone#forward_host_header}
  */
  readonly forwardHostHeader?: boolean | cdktf.IResolvable;
  /**
  * The host header that will be sent to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#host_header Pullzone#host_header}
  */
  readonly hostHeader?: string;
  /**
  * The ID of the compute script used as a middleware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#middleware_script Pullzone#middleware_script}
  */
  readonly middlewareScript?: number;
  /**
  * The ID of the linked compute script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#script Pullzone#script}
  */
  readonly script?: number;
  /**
  * The ID of the linked storage zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#storagezone Pullzone#storagezone}
  */
  readonly storagezone?: number;
  /**
  * Options: `ComputeContainer`, `ComputeScript`, `DnsAccelerate`, `OriginUrl`, `StorageZone`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#type Pullzone#type}
  */
  readonly type: string;
  /**
  * The origin URL from where the files are fetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#url Pullzone#url}
  */
  readonly url?: string;
  /**
  * Indicates whether the Origin's TLS certificate should be verified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#verify_ssl Pullzone#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
}

export function pullzoneOriginToTerraform(struct?: PullzoneOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_app_id: cdktf.stringToTerraform(struct!.containerAppId),
    container_endpoint_id: cdktf.stringToTerraform(struct!.containerEndpointId),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    forward_host_header: cdktf.booleanToTerraform(struct!.forwardHostHeader),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    middleware_script: cdktf.numberToTerraform(struct!.middlewareScript),
    script: cdktf.numberToTerraform(struct!.script),
    storagezone: cdktf.numberToTerraform(struct!.storagezone),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    verify_ssl: cdktf.booleanToTerraform(struct!.verifySsl),
  }
}


export function pullzoneOriginToHclTerraform(struct?: PullzoneOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_app_id: {
      value: cdktf.stringToHclTerraform(struct!.containerAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.containerEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
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
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middleware_script: {
      value: cdktf.numberToHclTerraform(struct!.middlewareScript),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    script: {
      value: cdktf.numberToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storagezone: {
      value: cdktf.numberToHclTerraform(struct!.storagezone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.verifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PullzoneOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerAppId = this._containerAppId;
    }
    if (this._containerEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEndpointId = this._containerEndpointId;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._forwardHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHostHeader = this._forwardHostHeader;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._middlewareScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.middlewareScript = this._middlewareScript;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._storagezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagezone = this._storagezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._verifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySsl = this._verifySsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerAppId = undefined;
      this._containerEndpointId = undefined;
      this._followRedirects = undefined;
      this._forwardHostHeader = undefined;
      this._hostHeader = undefined;
      this._middlewareScript = undefined;
      this._script = undefined;
      this._storagezone = undefined;
      this._type = undefined;
      this._url = undefined;
      this._verifySsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerAppId = value.containerAppId;
      this._containerEndpointId = value.containerEndpointId;
      this._followRedirects = value.followRedirects;
      this._forwardHostHeader = value.forwardHostHeader;
      this._hostHeader = value.hostHeader;
      this._middlewareScript = value.middlewareScript;
      this._script = value.script;
      this._storagezone = value.storagezone;
      this._type = value.type;
      this._url = value.url;
      this._verifySsl = value.verifySsl;
    }
  }

  // container_app_id - computed: true, optional: true, required: false
  private _containerAppId?: string; 
  public get containerAppId() {
    return this.getStringAttribute('container_app_id');
  }
  public set containerAppId(value: string) {
    this._containerAppId = value;
  }
  public resetContainerAppId() {
    this._containerAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAppIdInput() {
    return this._containerAppId;
  }

  // container_endpoint_id - computed: true, optional: true, required: false
  private _containerEndpointId?: string; 
  public get containerEndpointId() {
    return this.getStringAttribute('container_endpoint_id');
  }
  public set containerEndpointId(value: string) {
    this._containerEndpointId = value;
  }
  public resetContainerEndpointId() {
    this._containerEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEndpointIdInput() {
    return this._containerEndpointId;
  }

  // follow_redirects - computed: true, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
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

  // host_header - computed: true, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // middleware_script - computed: true, optional: true, required: false
  private _middlewareScript?: number; 
  public get middlewareScript() {
    return this.getNumberAttribute('middleware_script');
  }
  public set middlewareScript(value: number) {
    this._middlewareScript = value;
  }
  public resetMiddlewareScript() {
    this._middlewareScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middlewareScriptInput() {
    return this._middlewareScript;
  }

  // script - computed: false, optional: true, required: false
  private _script?: number; 
  public get script() {
    return this.getNumberAttribute('script');
  }
  public set script(value: number) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // storagezone - computed: false, optional: true, required: false
  private _storagezone?: number; 
  public get storagezone() {
    return this.getNumberAttribute('storagezone');
  }
  public set storagezone(value: number) {
    this._storagezone = value;
  }
  public resetStoragezone() {
    this._storagezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagezoneInput() {
    return this._storagezone;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verify_ssl - computed: true, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }
}
export interface PullzoneRouting {
  /**
  * The list of blocked countries with the two-letter Alpha2 ISO codes. Traffic connecting from a blocked country will be rejected on the DNS level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#blocked_countries Pullzone#blocked_countries}
  */
  readonly blockedCountries?: string[];
  /**
  * Options: `all`, `eu`, `scripting`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#filters Pullzone#filters}
  */
  readonly filters?: string[];
  /**
  * The list of budget redirected countries with the two-letter Alpha2 ISO codes. Traffic from a redirected country will connect to the cheapest possible node in North America or Europe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#redirected_countries Pullzone#redirected_countries}
  */
  readonly redirectedCountries?: string[];
  /**
  * Options: `Standard`, `Volume`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#tier Pullzone#tier}
  */
  readonly tier?: string;
  /**
  * Options: `AF`, `ASIA`, `EU`, `SA`, `US`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#zones Pullzone#zones}
  */
  readonly zones?: string[];
}

export function pullzoneRoutingToTerraform(struct?: PullzoneRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedCountries),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    redirected_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectedCountries),
    tier: cdktf.stringToTerraform(struct!.tier),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function pullzoneRoutingToHclTerraform(struct?: PullzoneRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedCountries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    redirected_countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectedCountries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PullzoneRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedCountries = this._blockedCountries;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._redirectedCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectedCountries = this._redirectedCountries;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockedCountries = undefined;
      this._filters = undefined;
      this._redirectedCountries = undefined;
      this._tier = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockedCountries = value.blockedCountries;
      this._filters = value.filters;
      this._redirectedCountries = value.redirectedCountries;
      this._tier = value.tier;
      this._zones = value.zones;
    }
  }

  // blocked_countries - computed: true, optional: true, required: false
  private _blockedCountries?: string[]; 
  public get blockedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_countries'));
  }
  public set blockedCountries(value: string[]) {
    this._blockedCountries = value;
  }
  public resetBlockedCountries() {
    this._blockedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedCountriesInput() {
    return this._blockedCountries;
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // redirected_countries - computed: true, optional: true, required: false
  private _redirectedCountries?: string[]; 
  public get redirectedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('redirected_countries'));
  }
  public set redirectedCountries(value: string[]) {
    this._redirectedCountries = value;
  }
  public resetRedirectedCountries() {
    this._redirectedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectedCountriesInput() {
    return this._redirectedCountries;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone bunnynet_pullzone}
*/
export class Pullzone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pullzone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pullzone to import
  * @param importFromId The id of the existing Pullzone that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pullzone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/pullzone bunnynet_pullzone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PullzoneConfig
  */
  public constructor(scope: Construct, id: string, config: PullzoneConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addCanonicalHeader = config.addCanonicalHeader;
    this._allowReferers = config.allowReferers;
    this._blockIps = config.blockIps;
    this._blockNoReferer = config.blockNoReferer;
    this._blockPostRequests = config.blockPostRequests;
    this._blockReferers = config.blockReferers;
    this._blockRootPath = config.blockRootPath;
    this._cacheChunked = config.cacheChunked;
    this._cacheEnabled = config.cacheEnabled;
    this._cacheErrors = config.cacheErrors;
    this._cacheExpirationTime = config.cacheExpirationTime;
    this._cacheExpirationTimeBrowser = config.cacheExpirationTimeBrowser;
    this._cacheStale = config.cacheStale;
    this._cacheVary = config.cacheVary;
    this._cacheVaryCookie = config.cacheVaryCookie;
    this._cacheVaryQuerystring = config.cacheVaryQuerystring;
    this._corsEnabled = config.corsEnabled;
    this._corsExtensions = config.corsExtensions;
    this._disableLetsencrypt = config.disableLetsencrypt;
    this._errorpageCustomContent = config.errorpageCustomContent;
    this._errorpageCustomEnabled = config.errorpageCustomEnabled;
    this._errorpageStatuspageCode = config.errorpageStatuspageCode;
    this._errorpageStatuspageEnabled = config.errorpageStatuspageEnabled;
    this._errorpageWhitelabel = config.errorpageWhitelabel;
    this._limitAfter = config.limitAfter;
    this._limitBandwidth = config.limitBandwidth;
    this._limitBurst = config.limitBurst;
    this._limitConnections = config.limitConnections;
    this._limitDownloadSpeed = config.limitDownloadSpeed;
    this._limitRequests = config.limitRequests;
    this._logAnonymized = config.logAnonymized;
    this._logAnonymizedStyle = config.logAnonymizedStyle;
    this._logEnabled = config.logEnabled;
    this._logForwardEnabled = config.logForwardEnabled;
    this._logForwardFormat = config.logForwardFormat;
    this._logForwardPort = config.logForwardPort;
    this._logForwardProtocol = config.logForwardProtocol;
    this._logForwardServer = config.logForwardServer;
    this._logForwardToken = config.logForwardToken;
    this._logStorageEnabled = config.logStorageEnabled;
    this._logStorageZone = config.logStorageZone;
    this._name = config.name;
    this._optimizerBurrow = config.optimizerBurrow;
    this._optimizerClassesForce = config.optimizerClassesForce;
    this._optimizerDynamicImageApi = config.optimizerDynamicImageApi;
    this._optimizerEnabled = config.optimizerEnabled;
    this._optimizerHtmlPrerender = config.optimizerHtmlPrerender;
    this._optimizerMinifyCss = config.optimizerMinifyCss;
    this._optimizerMinifyJs = config.optimizerMinifyJs;
    this._optimizerSmartimage = config.optimizerSmartimage;
    this._optimizerSmartimageDesktopMaxwidth = config.optimizerSmartimageDesktopMaxwidth;
    this._optimizerSmartimageDesktopQuality = config.optimizerSmartimageDesktopQuality;
    this._optimizerSmartimageMobileMaxwidth = config.optimizerSmartimageMobileMaxwidth;
    this._optimizerSmartimageMobileQuality = config.optimizerSmartimageMobileQuality;
    this._optimizerWatermark = config.optimizerWatermark;
    this._optimizerWatermarkBorderoffset = config.optimizerWatermarkBorderoffset;
    this._optimizerWatermarkMinsize = config.optimizerWatermarkMinsize;
    this._optimizerWatermarkPosition = config.optimizerWatermarkPosition;
    this._optimizerWatermarkUrl = config.optimizerWatermarkUrl;
    this._optimizerWebp = config.optimizerWebp;
    this._originshieldConcurrencyLimit = config.originshieldConcurrencyLimit;
    this._originshieldConcurrencyRequests = config.originshieldConcurrencyRequests;
    this._originshieldEnabled = config.originshieldEnabled;
    this._originshieldQueueRequests = config.originshieldQueueRequests;
    this._originshieldQueueWait = config.originshieldQueueWait;
    this._originshieldZone = config.originshieldZone;
    this._permacacheStoragezone = config.permacacheStoragezone;
    this._requestCoalescingEnabled = config.requestCoalescingEnabled;
    this._requestCoalescingTimeout = config.requestCoalescingTimeout;
    this._s3AuthEnabled = config.s3AuthEnabled;
    this._s3AuthKey = config.s3AuthKey;
    this._s3AuthRegion = config.s3AuthRegion;
    this._s3AuthSecret = config.s3AuthSecret;
    this._safehopConnectionTimeout = config.safehopConnectionTimeout;
    this._safehopEnabled = config.safehopEnabled;
    this._safehopResponseTimeout = config.safehopResponseTimeout;
    this._safehopRetryCount = config.safehopRetryCount;
    this._safehopRetryDelay = config.safehopRetryDelay;
    this._safehopRetryReasons = config.safehopRetryReasons;
    this._sortQuerystring = config.sortQuerystring;
    this._stripCookies = config.stripCookies;
    this._tlsSupport = config.tlsSupport;
    this._tokenAuthEnabled = config.tokenAuthEnabled;
    this._tokenAuthIpValidation = config.tokenAuthIpValidation;
    this._useBackgroundUpdate = config.useBackgroundUpdate;
    this._websocketsEnabled = config.websocketsEnabled;
    this._websocketsMaxConnections = config.websocketsMaxConnections;
    this._origin.internalValue = config.origin;
    this._routing.internalValue = config.routing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_canonical_header - computed: true, optional: true, required: false
  private _addCanonicalHeader?: boolean | cdktf.IResolvable; 
  public get addCanonicalHeader() {
    return this.getBooleanAttribute('add_canonical_header');
  }
  public set addCanonicalHeader(value: boolean | cdktf.IResolvable) {
    this._addCanonicalHeader = value;
  }
  public resetAddCanonicalHeader() {
    this._addCanonicalHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCanonicalHeaderInput() {
    return this._addCanonicalHeader;
  }

  // allow_referers - computed: true, optional: true, required: false
  private _allowReferers?: string[]; 
  public get allowReferers() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_referers'));
  }
  public set allowReferers(value: string[]) {
    this._allowReferers = value;
  }
  public resetAllowReferers() {
    this._allowReferers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReferersInput() {
    return this._allowReferers;
  }

  // block_ips - computed: true, optional: true, required: false
  private _blockIps?: string[]; 
  public get blockIps() {
    return cdktf.Fn.tolist(this.getListAttribute('block_ips'));
  }
  public set blockIps(value: string[]) {
    this._blockIps = value;
  }
  public resetBlockIps() {
    this._blockIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpsInput() {
    return this._blockIps;
  }

  // block_no_referer - computed: true, optional: true, required: false
  private _blockNoReferer?: boolean | cdktf.IResolvable; 
  public get blockNoReferer() {
    return this.getBooleanAttribute('block_no_referer');
  }
  public set blockNoReferer(value: boolean | cdktf.IResolvable) {
    this._blockNoReferer = value;
  }
  public resetBlockNoReferer() {
    this._blockNoReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNoRefererInput() {
    return this._blockNoReferer;
  }

  // block_post_requests - computed: true, optional: true, required: false
  private _blockPostRequests?: boolean | cdktf.IResolvable; 
  public get blockPostRequests() {
    return this.getBooleanAttribute('block_post_requests');
  }
  public set blockPostRequests(value: boolean | cdktf.IResolvable) {
    this._blockPostRequests = value;
  }
  public resetBlockPostRequests() {
    this._blockPostRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPostRequestsInput() {
    return this._blockPostRequests;
  }

  // block_referers - computed: true, optional: true, required: false
  private _blockReferers?: string[]; 
  public get blockReferers() {
    return cdktf.Fn.tolist(this.getListAttribute('block_referers'));
  }
  public set blockReferers(value: string[]) {
    this._blockReferers = value;
  }
  public resetBlockReferers() {
    this._blockReferers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockReferersInput() {
    return this._blockReferers;
  }

  // block_root_path - computed: true, optional: true, required: false
  private _blockRootPath?: boolean | cdktf.IResolvable; 
  public get blockRootPath() {
    return this.getBooleanAttribute('block_root_path');
  }
  public set blockRootPath(value: boolean | cdktf.IResolvable) {
    this._blockRootPath = value;
  }
  public resetBlockRootPath() {
    this._blockRootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockRootPathInput() {
    return this._blockRootPath;
  }

  // cache_chunked - computed: true, optional: true, required: false
  private _cacheChunked?: boolean | cdktf.IResolvable; 
  public get cacheChunked() {
    return this.getBooleanAttribute('cache_chunked');
  }
  public set cacheChunked(value: boolean | cdktf.IResolvable) {
    this._cacheChunked = value;
  }
  public resetCacheChunked() {
    this._cacheChunked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheChunkedInput() {
    return this._cacheChunked;
  }

  // cache_enabled - computed: true, optional: true, required: false
  private _cacheEnabled?: boolean | cdktf.IResolvable; 
  public get cacheEnabled() {
    return this.getBooleanAttribute('cache_enabled');
  }
  public set cacheEnabled(value: boolean | cdktf.IResolvable) {
    this._cacheEnabled = value;
  }
  public resetCacheEnabled() {
    this._cacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEnabledInput() {
    return this._cacheEnabled;
  }

  // cache_errors - computed: true, optional: true, required: false
  private _cacheErrors?: boolean | cdktf.IResolvable; 
  public get cacheErrors() {
    return this.getBooleanAttribute('cache_errors');
  }
  public set cacheErrors(value: boolean | cdktf.IResolvable) {
    this._cacheErrors = value;
  }
  public resetCacheErrors() {
    this._cacheErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheErrorsInput() {
    return this._cacheErrors;
  }

  // cache_expiration_time - computed: true, optional: true, required: false
  private _cacheExpirationTime?: number; 
  public get cacheExpirationTime() {
    return this.getNumberAttribute('cache_expiration_time');
  }
  public set cacheExpirationTime(value: number) {
    this._cacheExpirationTime = value;
  }
  public resetCacheExpirationTime() {
    this._cacheExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpirationTimeInput() {
    return this._cacheExpirationTime;
  }

  // cache_expiration_time_browser - computed: true, optional: true, required: false
  private _cacheExpirationTimeBrowser?: number; 
  public get cacheExpirationTimeBrowser() {
    return this.getNumberAttribute('cache_expiration_time_browser');
  }
  public set cacheExpirationTimeBrowser(value: number) {
    this._cacheExpirationTimeBrowser = value;
  }
  public resetCacheExpirationTimeBrowser() {
    this._cacheExpirationTimeBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpirationTimeBrowserInput() {
    return this._cacheExpirationTimeBrowser;
  }

  // cache_stale - computed: true, optional: true, required: false
  private _cacheStale?: string[]; 
  public get cacheStale() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_stale'));
  }
  public set cacheStale(value: string[]) {
    this._cacheStale = value;
  }
  public resetCacheStale() {
    this._cacheStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheStaleInput() {
    return this._cacheStale;
  }

  // cache_vary - computed: true, optional: true, required: false
  private _cacheVary?: string[]; 
  public get cacheVary() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_vary'));
  }
  public set cacheVary(value: string[]) {
    this._cacheVary = value;
  }
  public resetCacheVary() {
    this._cacheVary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheVaryInput() {
    return this._cacheVary;
  }

  // cache_vary_cookie - computed: true, optional: true, required: false
  private _cacheVaryCookie?: string[]; 
  public get cacheVaryCookie() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_vary_cookie'));
  }
  public set cacheVaryCookie(value: string[]) {
    this._cacheVaryCookie = value;
  }
  public resetCacheVaryCookie() {
    this._cacheVaryCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheVaryCookieInput() {
    return this._cacheVaryCookie;
  }

  // cache_vary_querystring - computed: true, optional: true, required: false
  private _cacheVaryQuerystring?: string[]; 
  public get cacheVaryQuerystring() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_vary_querystring'));
  }
  public set cacheVaryQuerystring(value: string[]) {
    this._cacheVaryQuerystring = value;
  }
  public resetCacheVaryQuerystring() {
    this._cacheVaryQuerystring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheVaryQuerystringInput() {
    return this._cacheVaryQuerystring;
  }

  // cdn_domain - computed: true, optional: false, required: false
  public get cdnDomain() {
    return this.getStringAttribute('cdn_domain');
  }

  // cors_enabled - computed: true, optional: true, required: false
  private _corsEnabled?: boolean | cdktf.IResolvable; 
  public get corsEnabled() {
    return this.getBooleanAttribute('cors_enabled');
  }
  public set corsEnabled(value: boolean | cdktf.IResolvable) {
    this._corsEnabled = value;
  }
  public resetCorsEnabled() {
    this._corsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsEnabledInput() {
    return this._corsEnabled;
  }

  // cors_extensions - computed: true, optional: true, required: false
  private _corsExtensions?: string[]; 
  public get corsExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_extensions'));
  }
  public set corsExtensions(value: string[]) {
    this._corsExtensions = value;
  }
  public resetCorsExtensions() {
    this._corsExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsExtensionsInput() {
    return this._corsExtensions;
  }

  // disable_letsencrypt - computed: true, optional: true, required: false
  private _disableLetsencrypt?: boolean | cdktf.IResolvable; 
  public get disableLetsencrypt() {
    return this.getBooleanAttribute('disable_letsencrypt');
  }
  public set disableLetsencrypt(value: boolean | cdktf.IResolvable) {
    this._disableLetsencrypt = value;
  }
  public resetDisableLetsencrypt() {
    this._disableLetsencrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLetsencryptInput() {
    return this._disableLetsencrypt;
  }

  // errorpage_custom_content - computed: true, optional: true, required: false
  private _errorpageCustomContent?: string; 
  public get errorpageCustomContent() {
    return this.getStringAttribute('errorpage_custom_content');
  }
  public set errorpageCustomContent(value: string) {
    this._errorpageCustomContent = value;
  }
  public resetErrorpageCustomContent() {
    this._errorpageCustomContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorpageCustomContentInput() {
    return this._errorpageCustomContent;
  }

  // errorpage_custom_enabled - computed: true, optional: true, required: false
  private _errorpageCustomEnabled?: boolean | cdktf.IResolvable; 
  public get errorpageCustomEnabled() {
    return this.getBooleanAttribute('errorpage_custom_enabled');
  }
  public set errorpageCustomEnabled(value: boolean | cdktf.IResolvable) {
    this._errorpageCustomEnabled = value;
  }
  public resetErrorpageCustomEnabled() {
    this._errorpageCustomEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorpageCustomEnabledInput() {
    return this._errorpageCustomEnabled;
  }

  // errorpage_statuspage_code - computed: true, optional: true, required: false
  private _errorpageStatuspageCode?: string; 
  public get errorpageStatuspageCode() {
    return this.getStringAttribute('errorpage_statuspage_code');
  }
  public set errorpageStatuspageCode(value: string) {
    this._errorpageStatuspageCode = value;
  }
  public resetErrorpageStatuspageCode() {
    this._errorpageStatuspageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorpageStatuspageCodeInput() {
    return this._errorpageStatuspageCode;
  }

  // errorpage_statuspage_enabled - computed: true, optional: true, required: false
  private _errorpageStatuspageEnabled?: boolean | cdktf.IResolvable; 
  public get errorpageStatuspageEnabled() {
    return this.getBooleanAttribute('errorpage_statuspage_enabled');
  }
  public set errorpageStatuspageEnabled(value: boolean | cdktf.IResolvable) {
    this._errorpageStatuspageEnabled = value;
  }
  public resetErrorpageStatuspageEnabled() {
    this._errorpageStatuspageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorpageStatuspageEnabledInput() {
    return this._errorpageStatuspageEnabled;
  }

  // errorpage_whitelabel - computed: true, optional: true, required: false
  private _errorpageWhitelabel?: boolean | cdktf.IResolvable; 
  public get errorpageWhitelabel() {
    return this.getBooleanAttribute('errorpage_whitelabel');
  }
  public set errorpageWhitelabel(value: boolean | cdktf.IResolvable) {
    this._errorpageWhitelabel = value;
  }
  public resetErrorpageWhitelabel() {
    this._errorpageWhitelabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorpageWhitelabelInput() {
    return this._errorpageWhitelabel;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // limit_after - computed: true, optional: true, required: false
  private _limitAfter?: number; 
  public get limitAfter() {
    return this.getNumberAttribute('limit_after');
  }
  public set limitAfter(value: number) {
    this._limitAfter = value;
  }
  public resetLimitAfter() {
    this._limitAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAfterInput() {
    return this._limitAfter;
  }

  // limit_bandwidth - computed: true, optional: true, required: false
  private _limitBandwidth?: number; 
  public get limitBandwidth() {
    return this.getNumberAttribute('limit_bandwidth');
  }
  public set limitBandwidth(value: number) {
    this._limitBandwidth = value;
  }
  public resetLimitBandwidth() {
    this._limitBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBandwidthInput() {
    return this._limitBandwidth;
  }

  // limit_burst - computed: true, optional: true, required: false
  private _limitBurst?: number; 
  public get limitBurst() {
    return this.getNumberAttribute('limit_burst');
  }
  public set limitBurst(value: number) {
    this._limitBurst = value;
  }
  public resetLimitBurst() {
    this._limitBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBurstInput() {
    return this._limitBurst;
  }

  // limit_connections - computed: true, optional: true, required: false
  private _limitConnections?: number; 
  public get limitConnections() {
    return this.getNumberAttribute('limit_connections');
  }
  public set limitConnections(value: number) {
    this._limitConnections = value;
  }
  public resetLimitConnections() {
    this._limitConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitConnectionsInput() {
    return this._limitConnections;
  }

  // limit_download_speed - computed: true, optional: true, required: false
  private _limitDownloadSpeed?: number; 
  public get limitDownloadSpeed() {
    return this.getNumberAttribute('limit_download_speed');
  }
  public set limitDownloadSpeed(value: number) {
    this._limitDownloadSpeed = value;
  }
  public resetLimitDownloadSpeed() {
    this._limitDownloadSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitDownloadSpeedInput() {
    return this._limitDownloadSpeed;
  }

  // limit_requests - computed: true, optional: true, required: false
  private _limitRequests?: number; 
  public get limitRequests() {
    return this.getNumberAttribute('limit_requests');
  }
  public set limitRequests(value: number) {
    this._limitRequests = value;
  }
  public resetLimitRequests() {
    this._limitRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitRequestsInput() {
    return this._limitRequests;
  }

  // log_anonymized - computed: true, optional: true, required: false
  private _logAnonymized?: boolean | cdktf.IResolvable; 
  public get logAnonymized() {
    return this.getBooleanAttribute('log_anonymized');
  }
  public set logAnonymized(value: boolean | cdktf.IResolvable) {
    this._logAnonymized = value;
  }
  public resetLogAnonymized() {
    this._logAnonymized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnonymizedInput() {
    return this._logAnonymized;
  }

  // log_anonymized_style - computed: true, optional: true, required: false
  private _logAnonymizedStyle?: string; 
  public get logAnonymizedStyle() {
    return this.getStringAttribute('log_anonymized_style');
  }
  public set logAnonymizedStyle(value: string) {
    this._logAnonymizedStyle = value;
  }
  public resetLogAnonymizedStyle() {
    this._logAnonymizedStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnonymizedStyleInput() {
    return this._logAnonymizedStyle;
  }

  // log_enabled - computed: true, optional: true, required: false
  private _logEnabled?: boolean | cdktf.IResolvable; 
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }
  public set logEnabled(value: boolean | cdktf.IResolvable) {
    this._logEnabled = value;
  }
  public resetLogEnabled() {
    this._logEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnabledInput() {
    return this._logEnabled;
  }

  // log_forward_enabled - computed: true, optional: true, required: false
  private _logForwardEnabled?: boolean | cdktf.IResolvable; 
  public get logForwardEnabled() {
    return this.getBooleanAttribute('log_forward_enabled');
  }
  public set logForwardEnabled(value: boolean | cdktf.IResolvable) {
    this._logForwardEnabled = value;
  }
  public resetLogForwardEnabled() {
    this._logForwardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardEnabledInput() {
    return this._logForwardEnabled;
  }

  // log_forward_format - computed: true, optional: true, required: false
  private _logForwardFormat?: string; 
  public get logForwardFormat() {
    return this.getStringAttribute('log_forward_format');
  }
  public set logForwardFormat(value: string) {
    this._logForwardFormat = value;
  }
  public resetLogForwardFormat() {
    this._logForwardFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardFormatInput() {
    return this._logForwardFormat;
  }

  // log_forward_port - computed: true, optional: true, required: false
  private _logForwardPort?: number; 
  public get logForwardPort() {
    return this.getNumberAttribute('log_forward_port');
  }
  public set logForwardPort(value: number) {
    this._logForwardPort = value;
  }
  public resetLogForwardPort() {
    this._logForwardPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardPortInput() {
    return this._logForwardPort;
  }

  // log_forward_protocol - computed: true, optional: true, required: false
  private _logForwardProtocol?: string; 
  public get logForwardProtocol() {
    return this.getStringAttribute('log_forward_protocol');
  }
  public set logForwardProtocol(value: string) {
    this._logForwardProtocol = value;
  }
  public resetLogForwardProtocol() {
    this._logForwardProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardProtocolInput() {
    return this._logForwardProtocol;
  }

  // log_forward_server - computed: true, optional: true, required: false
  private _logForwardServer?: string; 
  public get logForwardServer() {
    return this.getStringAttribute('log_forward_server');
  }
  public set logForwardServer(value: string) {
    this._logForwardServer = value;
  }
  public resetLogForwardServer() {
    this._logForwardServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardServerInput() {
    return this._logForwardServer;
  }

  // log_forward_token - computed: true, optional: true, required: false
  private _logForwardToken?: string; 
  public get logForwardToken() {
    return this.getStringAttribute('log_forward_token');
  }
  public set logForwardToken(value: string) {
    this._logForwardToken = value;
  }
  public resetLogForwardToken() {
    this._logForwardToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardTokenInput() {
    return this._logForwardToken;
  }

  // log_storage_enabled - computed: true, optional: true, required: false
  private _logStorageEnabled?: boolean | cdktf.IResolvable; 
  public get logStorageEnabled() {
    return this.getBooleanAttribute('log_storage_enabled');
  }
  public set logStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._logStorageEnabled = value;
  }
  public resetLogStorageEnabled() {
    this._logStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStorageEnabledInput() {
    return this._logStorageEnabled;
  }

  // log_storage_zone - computed: true, optional: true, required: false
  private _logStorageZone?: number; 
  public get logStorageZone() {
    return this.getNumberAttribute('log_storage_zone');
  }
  public set logStorageZone(value: number) {
    this._logStorageZone = value;
  }
  public resetLogStorageZone() {
    this._logStorageZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStorageZoneInput() {
    return this._logStorageZone;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optimizer_burrow - computed: true, optional: true, required: false
  private _optimizerBurrow?: boolean | cdktf.IResolvable; 
  public get optimizerBurrow() {
    return this.getBooleanAttribute('optimizer_burrow');
  }
  public set optimizerBurrow(value: boolean | cdktf.IResolvable) {
    this._optimizerBurrow = value;
  }
  public resetOptimizerBurrow() {
    this._optimizerBurrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerBurrowInput() {
    return this._optimizerBurrow;
  }

  // optimizer_classes_force - computed: true, optional: true, required: false
  private _optimizerClassesForce?: boolean | cdktf.IResolvable; 
  public get optimizerClassesForce() {
    return this.getBooleanAttribute('optimizer_classes_force');
  }
  public set optimizerClassesForce(value: boolean | cdktf.IResolvable) {
    this._optimizerClassesForce = value;
  }
  public resetOptimizerClassesForce() {
    this._optimizerClassesForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerClassesForceInput() {
    return this._optimizerClassesForce;
  }

  // optimizer_dynamic_image_api - computed: true, optional: true, required: false
  private _optimizerDynamicImageApi?: boolean | cdktf.IResolvable; 
  public get optimizerDynamicImageApi() {
    return this.getBooleanAttribute('optimizer_dynamic_image_api');
  }
  public set optimizerDynamicImageApi(value: boolean | cdktf.IResolvable) {
    this._optimizerDynamicImageApi = value;
  }
  public resetOptimizerDynamicImageApi() {
    this._optimizerDynamicImageApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerDynamicImageApiInput() {
    return this._optimizerDynamicImageApi;
  }

  // optimizer_enabled - computed: true, optional: true, required: false
  private _optimizerEnabled?: boolean | cdktf.IResolvable; 
  public get optimizerEnabled() {
    return this.getBooleanAttribute('optimizer_enabled');
  }
  public set optimizerEnabled(value: boolean | cdktf.IResolvable) {
    this._optimizerEnabled = value;
  }
  public resetOptimizerEnabled() {
    this._optimizerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerEnabledInput() {
    return this._optimizerEnabled;
  }

  // optimizer_html_prerender - computed: true, optional: true, required: false
  private _optimizerHtmlPrerender?: boolean | cdktf.IResolvable; 
  public get optimizerHtmlPrerender() {
    return this.getBooleanAttribute('optimizer_html_prerender');
  }
  public set optimizerHtmlPrerender(value: boolean | cdktf.IResolvable) {
    this._optimizerHtmlPrerender = value;
  }
  public resetOptimizerHtmlPrerender() {
    this._optimizerHtmlPrerender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerHtmlPrerenderInput() {
    return this._optimizerHtmlPrerender;
  }

  // optimizer_minify_css - computed: true, optional: true, required: false
  private _optimizerMinifyCss?: boolean | cdktf.IResolvable; 
  public get optimizerMinifyCss() {
    return this.getBooleanAttribute('optimizer_minify_css');
  }
  public set optimizerMinifyCss(value: boolean | cdktf.IResolvable) {
    this._optimizerMinifyCss = value;
  }
  public resetOptimizerMinifyCss() {
    this._optimizerMinifyCss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerMinifyCssInput() {
    return this._optimizerMinifyCss;
  }

  // optimizer_minify_js - computed: true, optional: true, required: false
  private _optimizerMinifyJs?: boolean | cdktf.IResolvable; 
  public get optimizerMinifyJs() {
    return this.getBooleanAttribute('optimizer_minify_js');
  }
  public set optimizerMinifyJs(value: boolean | cdktf.IResolvable) {
    this._optimizerMinifyJs = value;
  }
  public resetOptimizerMinifyJs() {
    this._optimizerMinifyJs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerMinifyJsInput() {
    return this._optimizerMinifyJs;
  }

  // optimizer_smartimage - computed: true, optional: true, required: false
  private _optimizerSmartimage?: boolean | cdktf.IResolvable; 
  public get optimizerSmartimage() {
    return this.getBooleanAttribute('optimizer_smartimage');
  }
  public set optimizerSmartimage(value: boolean | cdktf.IResolvable) {
    this._optimizerSmartimage = value;
  }
  public resetOptimizerSmartimage() {
    this._optimizerSmartimage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerSmartimageInput() {
    return this._optimizerSmartimage;
  }

  // optimizer_smartimage_desktop_maxwidth - computed: true, optional: true, required: false
  private _optimizerSmartimageDesktopMaxwidth?: number; 
  public get optimizerSmartimageDesktopMaxwidth() {
    return this.getNumberAttribute('optimizer_smartimage_desktop_maxwidth');
  }
  public set optimizerSmartimageDesktopMaxwidth(value: number) {
    this._optimizerSmartimageDesktopMaxwidth = value;
  }
  public resetOptimizerSmartimageDesktopMaxwidth() {
    this._optimizerSmartimageDesktopMaxwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerSmartimageDesktopMaxwidthInput() {
    return this._optimizerSmartimageDesktopMaxwidth;
  }

  // optimizer_smartimage_desktop_quality - computed: true, optional: true, required: false
  private _optimizerSmartimageDesktopQuality?: number; 
  public get optimizerSmartimageDesktopQuality() {
    return this.getNumberAttribute('optimizer_smartimage_desktop_quality');
  }
  public set optimizerSmartimageDesktopQuality(value: number) {
    this._optimizerSmartimageDesktopQuality = value;
  }
  public resetOptimizerSmartimageDesktopQuality() {
    this._optimizerSmartimageDesktopQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerSmartimageDesktopQualityInput() {
    return this._optimizerSmartimageDesktopQuality;
  }

  // optimizer_smartimage_mobile_maxwidth - computed: true, optional: true, required: false
  private _optimizerSmartimageMobileMaxwidth?: number; 
  public get optimizerSmartimageMobileMaxwidth() {
    return this.getNumberAttribute('optimizer_smartimage_mobile_maxwidth');
  }
  public set optimizerSmartimageMobileMaxwidth(value: number) {
    this._optimizerSmartimageMobileMaxwidth = value;
  }
  public resetOptimizerSmartimageMobileMaxwidth() {
    this._optimizerSmartimageMobileMaxwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerSmartimageMobileMaxwidthInput() {
    return this._optimizerSmartimageMobileMaxwidth;
  }

  // optimizer_smartimage_mobile_quality - computed: true, optional: true, required: false
  private _optimizerSmartimageMobileQuality?: number; 
  public get optimizerSmartimageMobileQuality() {
    return this.getNumberAttribute('optimizer_smartimage_mobile_quality');
  }
  public set optimizerSmartimageMobileQuality(value: number) {
    this._optimizerSmartimageMobileQuality = value;
  }
  public resetOptimizerSmartimageMobileQuality() {
    this._optimizerSmartimageMobileQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerSmartimageMobileQualityInput() {
    return this._optimizerSmartimageMobileQuality;
  }

  // optimizer_watermark - computed: true, optional: true, required: false
  private _optimizerWatermark?: boolean | cdktf.IResolvable; 
  public get optimizerWatermark() {
    return this.getBooleanAttribute('optimizer_watermark');
  }
  public set optimizerWatermark(value: boolean | cdktf.IResolvable) {
    this._optimizerWatermark = value;
  }
  public resetOptimizerWatermark() {
    this._optimizerWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerWatermarkInput() {
    return this._optimizerWatermark;
  }

  // optimizer_watermark_borderoffset - computed: true, optional: true, required: false
  private _optimizerWatermarkBorderoffset?: number; 
  public get optimizerWatermarkBorderoffset() {
    return this.getNumberAttribute('optimizer_watermark_borderoffset');
  }
  public set optimizerWatermarkBorderoffset(value: number) {
    this._optimizerWatermarkBorderoffset = value;
  }
  public resetOptimizerWatermarkBorderoffset() {
    this._optimizerWatermarkBorderoffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerWatermarkBorderoffsetInput() {
    return this._optimizerWatermarkBorderoffset;
  }

  // optimizer_watermark_minsize - computed: true, optional: true, required: false
  private _optimizerWatermarkMinsize?: number; 
  public get optimizerWatermarkMinsize() {
    return this.getNumberAttribute('optimizer_watermark_minsize');
  }
  public set optimizerWatermarkMinsize(value: number) {
    this._optimizerWatermarkMinsize = value;
  }
  public resetOptimizerWatermarkMinsize() {
    this._optimizerWatermarkMinsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerWatermarkMinsizeInput() {
    return this._optimizerWatermarkMinsize;
  }

  // optimizer_watermark_position - computed: true, optional: true, required: false
  private _optimizerWatermarkPosition?: string; 
  public get optimizerWatermarkPosition() {
    return this.getStringAttribute('optimizer_watermark_position');
  }
  public set optimizerWatermarkPosition(value: string) {
    this._optimizerWatermarkPosition = value;
  }
  public resetOptimizerWatermarkPosition() {
    this._optimizerWatermarkPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerWatermarkPositionInput() {
    return this._optimizerWatermarkPosition;
  }

  // optimizer_watermark_url - computed: true, optional: true, required: false
  private _optimizerWatermarkUrl?: string; 
  public get optimizerWatermarkUrl() {
    return this.getStringAttribute('optimizer_watermark_url');
  }
  public set optimizerWatermarkUrl(value: string) {
    this._optimizerWatermarkUrl = value;
  }
  public resetOptimizerWatermarkUrl() {
    this._optimizerWatermarkUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerWatermarkUrlInput() {
    return this._optimizerWatermarkUrl;
  }

  // optimizer_webp - computed: true, optional: true, required: false
  private _optimizerWebp?: boolean | cdktf.IResolvable; 
  public get optimizerWebp() {
    return this.getBooleanAttribute('optimizer_webp');
  }
  public set optimizerWebp(value: boolean | cdktf.IResolvable) {
    this._optimizerWebp = value;
  }
  public resetOptimizerWebp() {
    this._optimizerWebp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerWebpInput() {
    return this._optimizerWebp;
  }

  // originshield_concurrency_limit - computed: true, optional: true, required: false
  private _originshieldConcurrencyLimit?: boolean | cdktf.IResolvable; 
  public get originshieldConcurrencyLimit() {
    return this.getBooleanAttribute('originshield_concurrency_limit');
  }
  public set originshieldConcurrencyLimit(value: boolean | cdktf.IResolvable) {
    this._originshieldConcurrencyLimit = value;
  }
  public resetOriginshieldConcurrencyLimit() {
    this._originshieldConcurrencyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originshieldConcurrencyLimitInput() {
    return this._originshieldConcurrencyLimit;
  }

  // originshield_concurrency_requests - computed: true, optional: true, required: false
  private _originshieldConcurrencyRequests?: number; 
  public get originshieldConcurrencyRequests() {
    return this.getNumberAttribute('originshield_concurrency_requests');
  }
  public set originshieldConcurrencyRequests(value: number) {
    this._originshieldConcurrencyRequests = value;
  }
  public resetOriginshieldConcurrencyRequests() {
    this._originshieldConcurrencyRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originshieldConcurrencyRequestsInput() {
    return this._originshieldConcurrencyRequests;
  }

  // originshield_enabled - computed: true, optional: true, required: false
  private _originshieldEnabled?: boolean | cdktf.IResolvable; 
  public get originshieldEnabled() {
    return this.getBooleanAttribute('originshield_enabled');
  }
  public set originshieldEnabled(value: boolean | cdktf.IResolvable) {
    this._originshieldEnabled = value;
  }
  public resetOriginshieldEnabled() {
    this._originshieldEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originshieldEnabledInput() {
    return this._originshieldEnabled;
  }

  // originshield_queue_requests - computed: true, optional: true, required: false
  private _originshieldQueueRequests?: number; 
  public get originshieldQueueRequests() {
    return this.getNumberAttribute('originshield_queue_requests');
  }
  public set originshieldQueueRequests(value: number) {
    this._originshieldQueueRequests = value;
  }
  public resetOriginshieldQueueRequests() {
    this._originshieldQueueRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originshieldQueueRequestsInput() {
    return this._originshieldQueueRequests;
  }

  // originshield_queue_wait - computed: true, optional: true, required: false
  private _originshieldQueueWait?: number; 
  public get originshieldQueueWait() {
    return this.getNumberAttribute('originshield_queue_wait');
  }
  public set originshieldQueueWait(value: number) {
    this._originshieldQueueWait = value;
  }
  public resetOriginshieldQueueWait() {
    this._originshieldQueueWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originshieldQueueWaitInput() {
    return this._originshieldQueueWait;
  }

  // originshield_zone - computed: true, optional: true, required: false
  private _originshieldZone?: string; 
  public get originshieldZone() {
    return this.getStringAttribute('originshield_zone');
  }
  public set originshieldZone(value: string) {
    this._originshieldZone = value;
  }
  public resetOriginshieldZone() {
    this._originshieldZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originshieldZoneInput() {
    return this._originshieldZone;
  }

  // permacache_storagezone - computed: true, optional: true, required: false
  private _permacacheStoragezone?: number; 
  public get permacacheStoragezone() {
    return this.getNumberAttribute('permacache_storagezone');
  }
  public set permacacheStoragezone(value: number) {
    this._permacacheStoragezone = value;
  }
  public resetPermacacheStoragezone() {
    this._permacacheStoragezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permacacheStoragezoneInput() {
    return this._permacacheStoragezone;
  }

  // request_coalescing_enabled - computed: true, optional: true, required: false
  private _requestCoalescingEnabled?: boolean | cdktf.IResolvable; 
  public get requestCoalescingEnabled() {
    return this.getBooleanAttribute('request_coalescing_enabled');
  }
  public set requestCoalescingEnabled(value: boolean | cdktf.IResolvable) {
    this._requestCoalescingEnabled = value;
  }
  public resetRequestCoalescingEnabled() {
    this._requestCoalescingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCoalescingEnabledInput() {
    return this._requestCoalescingEnabled;
  }

  // request_coalescing_timeout - computed: true, optional: true, required: false
  private _requestCoalescingTimeout?: number; 
  public get requestCoalescingTimeout() {
    return this.getNumberAttribute('request_coalescing_timeout');
  }
  public set requestCoalescingTimeout(value: number) {
    this._requestCoalescingTimeout = value;
  }
  public resetRequestCoalescingTimeout() {
    this._requestCoalescingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCoalescingTimeoutInput() {
    return this._requestCoalescingTimeout;
  }

  // s3_auth_enabled - computed: true, optional: true, required: false
  private _s3AuthEnabled?: boolean | cdktf.IResolvable; 
  public get s3AuthEnabled() {
    return this.getBooleanAttribute('s3_auth_enabled');
  }
  public set s3AuthEnabled(value: boolean | cdktf.IResolvable) {
    this._s3AuthEnabled = value;
  }
  public resetS3AuthEnabled() {
    this._s3AuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AuthEnabledInput() {
    return this._s3AuthEnabled;
  }

  // s3_auth_key - computed: true, optional: true, required: false
  private _s3AuthKey?: string; 
  public get s3AuthKey() {
    return this.getStringAttribute('s3_auth_key');
  }
  public set s3AuthKey(value: string) {
    this._s3AuthKey = value;
  }
  public resetS3AuthKey() {
    this._s3AuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AuthKeyInput() {
    return this._s3AuthKey;
  }

  // s3_auth_region - computed: true, optional: true, required: false
  private _s3AuthRegion?: string; 
  public get s3AuthRegion() {
    return this.getStringAttribute('s3_auth_region');
  }
  public set s3AuthRegion(value: string) {
    this._s3AuthRegion = value;
  }
  public resetS3AuthRegion() {
    this._s3AuthRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AuthRegionInput() {
    return this._s3AuthRegion;
  }

  // s3_auth_secret - computed: true, optional: true, required: false
  private _s3AuthSecret?: string; 
  public get s3AuthSecret() {
    return this.getStringAttribute('s3_auth_secret');
  }
  public set s3AuthSecret(value: string) {
    this._s3AuthSecret = value;
  }
  public resetS3AuthSecret() {
    this._s3AuthSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AuthSecretInput() {
    return this._s3AuthSecret;
  }

  // safehop_connection_timeout - computed: true, optional: true, required: false
  private _safehopConnectionTimeout?: number; 
  public get safehopConnectionTimeout() {
    return this.getNumberAttribute('safehop_connection_timeout');
  }
  public set safehopConnectionTimeout(value: number) {
    this._safehopConnectionTimeout = value;
  }
  public resetSafehopConnectionTimeout() {
    this._safehopConnectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safehopConnectionTimeoutInput() {
    return this._safehopConnectionTimeout;
  }

  // safehop_enabled - computed: true, optional: true, required: false
  private _safehopEnabled?: boolean | cdktf.IResolvable; 
  public get safehopEnabled() {
    return this.getBooleanAttribute('safehop_enabled');
  }
  public set safehopEnabled(value: boolean | cdktf.IResolvable) {
    this._safehopEnabled = value;
  }
  public resetSafehopEnabled() {
    this._safehopEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safehopEnabledInput() {
    return this._safehopEnabled;
  }

  // safehop_response_timeout - computed: true, optional: true, required: false
  private _safehopResponseTimeout?: number; 
  public get safehopResponseTimeout() {
    return this.getNumberAttribute('safehop_response_timeout');
  }
  public set safehopResponseTimeout(value: number) {
    this._safehopResponseTimeout = value;
  }
  public resetSafehopResponseTimeout() {
    this._safehopResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safehopResponseTimeoutInput() {
    return this._safehopResponseTimeout;
  }

  // safehop_retry_count - computed: true, optional: true, required: false
  private _safehopRetryCount?: number; 
  public get safehopRetryCount() {
    return this.getNumberAttribute('safehop_retry_count');
  }
  public set safehopRetryCount(value: number) {
    this._safehopRetryCount = value;
  }
  public resetSafehopRetryCount() {
    this._safehopRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safehopRetryCountInput() {
    return this._safehopRetryCount;
  }

  // safehop_retry_delay - computed: true, optional: true, required: false
  private _safehopRetryDelay?: number; 
  public get safehopRetryDelay() {
    return this.getNumberAttribute('safehop_retry_delay');
  }
  public set safehopRetryDelay(value: number) {
    this._safehopRetryDelay = value;
  }
  public resetSafehopRetryDelay() {
    this._safehopRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safehopRetryDelayInput() {
    return this._safehopRetryDelay;
  }

  // safehop_retry_reasons - computed: true, optional: true, required: false
  private _safehopRetryReasons?: string[]; 
  public get safehopRetryReasons() {
    return cdktf.Fn.tolist(this.getListAttribute('safehop_retry_reasons'));
  }
  public set safehopRetryReasons(value: string[]) {
    this._safehopRetryReasons = value;
  }
  public resetSafehopRetryReasons() {
    this._safehopRetryReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safehopRetryReasonsInput() {
    return this._safehopRetryReasons;
  }

  // sort_querystring - computed: true, optional: true, required: false
  private _sortQuerystring?: boolean | cdktf.IResolvable; 
  public get sortQuerystring() {
    return this.getBooleanAttribute('sort_querystring');
  }
  public set sortQuerystring(value: boolean | cdktf.IResolvable) {
    this._sortQuerystring = value;
  }
  public resetSortQuerystring() {
    this._sortQuerystring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQuerystringInput() {
    return this._sortQuerystring;
  }

  // strip_cookies - computed: true, optional: true, required: false
  private _stripCookies?: boolean | cdktf.IResolvable; 
  public get stripCookies() {
    return this.getBooleanAttribute('strip_cookies');
  }
  public set stripCookies(value: boolean | cdktf.IResolvable) {
    this._stripCookies = value;
  }
  public resetStripCookies() {
    this._stripCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripCookiesInput() {
    return this._stripCookies;
  }

  // tls_support - computed: true, optional: true, required: false
  private _tlsSupport?: string[]; 
  public get tlsSupport() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_support'));
  }
  public set tlsSupport(value: string[]) {
    this._tlsSupport = value;
  }
  public resetTlsSupport() {
    this._tlsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSupportInput() {
    return this._tlsSupport;
  }

  // token_auth_enabled - computed: true, optional: true, required: false
  private _tokenAuthEnabled?: boolean | cdktf.IResolvable; 
  public get tokenAuthEnabled() {
    return this.getBooleanAttribute('token_auth_enabled');
  }
  public set tokenAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._tokenAuthEnabled = value;
  }
  public resetTokenAuthEnabled() {
    this._tokenAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthEnabledInput() {
    return this._tokenAuthEnabled;
  }

  // token_auth_ip_validation - computed: true, optional: true, required: false
  private _tokenAuthIpValidation?: boolean | cdktf.IResolvable; 
  public get tokenAuthIpValidation() {
    return this.getBooleanAttribute('token_auth_ip_validation');
  }
  public set tokenAuthIpValidation(value: boolean | cdktf.IResolvable) {
    this._tokenAuthIpValidation = value;
  }
  public resetTokenAuthIpValidation() {
    this._tokenAuthIpValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthIpValidationInput() {
    return this._tokenAuthIpValidation;
  }

  // token_auth_key - computed: true, optional: false, required: false
  public get tokenAuthKey() {
    return this.getStringAttribute('token_auth_key');
  }

  // use_background_update - computed: true, optional: true, required: false
  private _useBackgroundUpdate?: boolean | cdktf.IResolvable; 
  public get useBackgroundUpdate() {
    return this.getBooleanAttribute('use_background_update');
  }
  public set useBackgroundUpdate(value: boolean | cdktf.IResolvable) {
    this._useBackgroundUpdate = value;
  }
  public resetUseBackgroundUpdate() {
    this._useBackgroundUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBackgroundUpdateInput() {
    return this._useBackgroundUpdate;
  }

  // websockets_enabled - computed: true, optional: true, required: false
  private _websocketsEnabled?: boolean | cdktf.IResolvable; 
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled');
  }
  public set websocketsEnabled(value: boolean | cdktf.IResolvable) {
    this._websocketsEnabled = value;
  }
  public resetWebsocketsEnabled() {
    this._websocketsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsEnabledInput() {
    return this._websocketsEnabled;
  }

  // websockets_max_connections - computed: true, optional: true, required: false
  private _websocketsMaxConnections?: number; 
  public get websocketsMaxConnections() {
    return this.getNumberAttribute('websockets_max_connections');
  }
  public set websocketsMaxConnections(value: number) {
    this._websocketsMaxConnections = value;
  }
  public resetWebsocketsMaxConnections() {
    this._websocketsMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsMaxConnectionsInput() {
    return this._websocketsMaxConnections;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new PullzoneOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: PullzoneOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new PullzoneRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: PullzoneRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_canonical_header: cdktf.booleanToTerraform(this._addCanonicalHeader),
      allow_referers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowReferers),
      block_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockIps),
      block_no_referer: cdktf.booleanToTerraform(this._blockNoReferer),
      block_post_requests: cdktf.booleanToTerraform(this._blockPostRequests),
      block_referers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockReferers),
      block_root_path: cdktf.booleanToTerraform(this._blockRootPath),
      cache_chunked: cdktf.booleanToTerraform(this._cacheChunked),
      cache_enabled: cdktf.booleanToTerraform(this._cacheEnabled),
      cache_errors: cdktf.booleanToTerraform(this._cacheErrors),
      cache_expiration_time: cdktf.numberToTerraform(this._cacheExpirationTime),
      cache_expiration_time_browser: cdktf.numberToTerraform(this._cacheExpirationTimeBrowser),
      cache_stale: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheStale),
      cache_vary: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheVary),
      cache_vary_cookie: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheVaryCookie),
      cache_vary_querystring: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheVaryQuerystring),
      cors_enabled: cdktf.booleanToTerraform(this._corsEnabled),
      cors_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._corsExtensions),
      disable_letsencrypt: cdktf.booleanToTerraform(this._disableLetsencrypt),
      errorpage_custom_content: cdktf.stringToTerraform(this._errorpageCustomContent),
      errorpage_custom_enabled: cdktf.booleanToTerraform(this._errorpageCustomEnabled),
      errorpage_statuspage_code: cdktf.stringToTerraform(this._errorpageStatuspageCode),
      errorpage_statuspage_enabled: cdktf.booleanToTerraform(this._errorpageStatuspageEnabled),
      errorpage_whitelabel: cdktf.booleanToTerraform(this._errorpageWhitelabel),
      limit_after: cdktf.numberToTerraform(this._limitAfter),
      limit_bandwidth: cdktf.numberToTerraform(this._limitBandwidth),
      limit_burst: cdktf.numberToTerraform(this._limitBurst),
      limit_connections: cdktf.numberToTerraform(this._limitConnections),
      limit_download_speed: cdktf.numberToTerraform(this._limitDownloadSpeed),
      limit_requests: cdktf.numberToTerraform(this._limitRequests),
      log_anonymized: cdktf.booleanToTerraform(this._logAnonymized),
      log_anonymized_style: cdktf.stringToTerraform(this._logAnonymizedStyle),
      log_enabled: cdktf.booleanToTerraform(this._logEnabled),
      log_forward_enabled: cdktf.booleanToTerraform(this._logForwardEnabled),
      log_forward_format: cdktf.stringToTerraform(this._logForwardFormat),
      log_forward_port: cdktf.numberToTerraform(this._logForwardPort),
      log_forward_protocol: cdktf.stringToTerraform(this._logForwardProtocol),
      log_forward_server: cdktf.stringToTerraform(this._logForwardServer),
      log_forward_token: cdktf.stringToTerraform(this._logForwardToken),
      log_storage_enabled: cdktf.booleanToTerraform(this._logStorageEnabled),
      log_storage_zone: cdktf.numberToTerraform(this._logStorageZone),
      name: cdktf.stringToTerraform(this._name),
      optimizer_burrow: cdktf.booleanToTerraform(this._optimizerBurrow),
      optimizer_classes_force: cdktf.booleanToTerraform(this._optimizerClassesForce),
      optimizer_dynamic_image_api: cdktf.booleanToTerraform(this._optimizerDynamicImageApi),
      optimizer_enabled: cdktf.booleanToTerraform(this._optimizerEnabled),
      optimizer_html_prerender: cdktf.booleanToTerraform(this._optimizerHtmlPrerender),
      optimizer_minify_css: cdktf.booleanToTerraform(this._optimizerMinifyCss),
      optimizer_minify_js: cdktf.booleanToTerraform(this._optimizerMinifyJs),
      optimizer_smartimage: cdktf.booleanToTerraform(this._optimizerSmartimage),
      optimizer_smartimage_desktop_maxwidth: cdktf.numberToTerraform(this._optimizerSmartimageDesktopMaxwidth),
      optimizer_smartimage_desktop_quality: cdktf.numberToTerraform(this._optimizerSmartimageDesktopQuality),
      optimizer_smartimage_mobile_maxwidth: cdktf.numberToTerraform(this._optimizerSmartimageMobileMaxwidth),
      optimizer_smartimage_mobile_quality: cdktf.numberToTerraform(this._optimizerSmartimageMobileQuality),
      optimizer_watermark: cdktf.booleanToTerraform(this._optimizerWatermark),
      optimizer_watermark_borderoffset: cdktf.numberToTerraform(this._optimizerWatermarkBorderoffset),
      optimizer_watermark_minsize: cdktf.numberToTerraform(this._optimizerWatermarkMinsize),
      optimizer_watermark_position: cdktf.stringToTerraform(this._optimizerWatermarkPosition),
      optimizer_watermark_url: cdktf.stringToTerraform(this._optimizerWatermarkUrl),
      optimizer_webp: cdktf.booleanToTerraform(this._optimizerWebp),
      originshield_concurrency_limit: cdktf.booleanToTerraform(this._originshieldConcurrencyLimit),
      originshield_concurrency_requests: cdktf.numberToTerraform(this._originshieldConcurrencyRequests),
      originshield_enabled: cdktf.booleanToTerraform(this._originshieldEnabled),
      originshield_queue_requests: cdktf.numberToTerraform(this._originshieldQueueRequests),
      originshield_queue_wait: cdktf.numberToTerraform(this._originshieldQueueWait),
      originshield_zone: cdktf.stringToTerraform(this._originshieldZone),
      permacache_storagezone: cdktf.numberToTerraform(this._permacacheStoragezone),
      request_coalescing_enabled: cdktf.booleanToTerraform(this._requestCoalescingEnabled),
      request_coalescing_timeout: cdktf.numberToTerraform(this._requestCoalescingTimeout),
      s3_auth_enabled: cdktf.booleanToTerraform(this._s3AuthEnabled),
      s3_auth_key: cdktf.stringToTerraform(this._s3AuthKey),
      s3_auth_region: cdktf.stringToTerraform(this._s3AuthRegion),
      s3_auth_secret: cdktf.stringToTerraform(this._s3AuthSecret),
      safehop_connection_timeout: cdktf.numberToTerraform(this._safehopConnectionTimeout),
      safehop_enabled: cdktf.booleanToTerraform(this._safehopEnabled),
      safehop_response_timeout: cdktf.numberToTerraform(this._safehopResponseTimeout),
      safehop_retry_count: cdktf.numberToTerraform(this._safehopRetryCount),
      safehop_retry_delay: cdktf.numberToTerraform(this._safehopRetryDelay),
      safehop_retry_reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._safehopRetryReasons),
      sort_querystring: cdktf.booleanToTerraform(this._sortQuerystring),
      strip_cookies: cdktf.booleanToTerraform(this._stripCookies),
      tls_support: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsSupport),
      token_auth_enabled: cdktf.booleanToTerraform(this._tokenAuthEnabled),
      token_auth_ip_validation: cdktf.booleanToTerraform(this._tokenAuthIpValidation),
      use_background_update: cdktf.booleanToTerraform(this._useBackgroundUpdate),
      websockets_enabled: cdktf.booleanToTerraform(this._websocketsEnabled),
      websockets_max_connections: cdktf.numberToTerraform(this._websocketsMaxConnections),
      origin: pullzoneOriginToTerraform(this._origin.internalValue),
      routing: pullzoneRoutingToTerraform(this._routing.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_canonical_header: {
        value: cdktf.booleanToHclTerraform(this._addCanonicalHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_referers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowReferers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      block_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      block_no_referer: {
        value: cdktf.booleanToHclTerraform(this._blockNoReferer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_post_requests: {
        value: cdktf.booleanToHclTerraform(this._blockPostRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_referers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockReferers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      block_root_path: {
        value: cdktf.booleanToHclTerraform(this._blockRootPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_chunked: {
        value: cdktf.booleanToHclTerraform(this._cacheChunked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._cacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_errors: {
        value: cdktf.booleanToHclTerraform(this._cacheErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_expiration_time: {
        value: cdktf.numberToHclTerraform(this._cacheExpirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_expiration_time_browser: {
        value: cdktf.numberToHclTerraform(this._cacheExpirationTimeBrowser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_stale: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacheStale),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_vary: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacheVary),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_vary_cookie: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacheVaryCookie),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_vary_querystring: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacheVaryQuerystring),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cors_enabled: {
        value: cdktf.booleanToHclTerraform(this._corsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cors_extensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._corsExtensions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disable_letsencrypt: {
        value: cdktf.booleanToHclTerraform(this._disableLetsencrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      errorpage_custom_content: {
        value: cdktf.stringToHclTerraform(this._errorpageCustomContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      errorpage_custom_enabled: {
        value: cdktf.booleanToHclTerraform(this._errorpageCustomEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      errorpage_statuspage_code: {
        value: cdktf.stringToHclTerraform(this._errorpageStatuspageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      errorpage_statuspage_enabled: {
        value: cdktf.booleanToHclTerraform(this._errorpageStatuspageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      errorpage_whitelabel: {
        value: cdktf.booleanToHclTerraform(this._errorpageWhitelabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit_after: {
        value: cdktf.numberToHclTerraform(this._limitAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_bandwidth: {
        value: cdktf.numberToHclTerraform(this._limitBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_burst: {
        value: cdktf.numberToHclTerraform(this._limitBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_connections: {
        value: cdktf.numberToHclTerraform(this._limitConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_download_speed: {
        value: cdktf.numberToHclTerraform(this._limitDownloadSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_requests: {
        value: cdktf.numberToHclTerraform(this._limitRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_anonymized: {
        value: cdktf.booleanToHclTerraform(this._logAnonymized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_anonymized_style: {
        value: cdktf.stringToHclTerraform(this._logAnonymizedStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_enabled: {
        value: cdktf.booleanToHclTerraform(this._logEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_forward_enabled: {
        value: cdktf.booleanToHclTerraform(this._logForwardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_forward_format: {
        value: cdktf.stringToHclTerraform(this._logForwardFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_forward_port: {
        value: cdktf.numberToHclTerraform(this._logForwardPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_forward_protocol: {
        value: cdktf.stringToHclTerraform(this._logForwardProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_forward_server: {
        value: cdktf.stringToHclTerraform(this._logForwardServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_forward_token: {
        value: cdktf.stringToHclTerraform(this._logForwardToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_storage_enabled: {
        value: cdktf.booleanToHclTerraform(this._logStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_storage_zone: {
        value: cdktf.numberToHclTerraform(this._logStorageZone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimizer_burrow: {
        value: cdktf.booleanToHclTerraform(this._optimizerBurrow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_classes_force: {
        value: cdktf.booleanToHclTerraform(this._optimizerClassesForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_dynamic_image_api: {
        value: cdktf.booleanToHclTerraform(this._optimizerDynamicImageApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_enabled: {
        value: cdktf.booleanToHclTerraform(this._optimizerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_html_prerender: {
        value: cdktf.booleanToHclTerraform(this._optimizerHtmlPrerender),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_minify_css: {
        value: cdktf.booleanToHclTerraform(this._optimizerMinifyCss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_minify_js: {
        value: cdktf.booleanToHclTerraform(this._optimizerMinifyJs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_smartimage: {
        value: cdktf.booleanToHclTerraform(this._optimizerSmartimage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_smartimage_desktop_maxwidth: {
        value: cdktf.numberToHclTerraform(this._optimizerSmartimageDesktopMaxwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimizer_smartimage_desktop_quality: {
        value: cdktf.numberToHclTerraform(this._optimizerSmartimageDesktopQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimizer_smartimage_mobile_maxwidth: {
        value: cdktf.numberToHclTerraform(this._optimizerSmartimageMobileMaxwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimizer_smartimage_mobile_quality: {
        value: cdktf.numberToHclTerraform(this._optimizerSmartimageMobileQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimizer_watermark: {
        value: cdktf.booleanToHclTerraform(this._optimizerWatermark),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimizer_watermark_borderoffset: {
        value: cdktf.numberToHclTerraform(this._optimizerWatermarkBorderoffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimizer_watermark_minsize: {
        value: cdktf.numberToHclTerraform(this._optimizerWatermarkMinsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimizer_watermark_position: {
        value: cdktf.stringToHclTerraform(this._optimizerWatermarkPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimizer_watermark_url: {
        value: cdktf.stringToHclTerraform(this._optimizerWatermarkUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimizer_webp: {
        value: cdktf.booleanToHclTerraform(this._optimizerWebp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      originshield_concurrency_limit: {
        value: cdktf.booleanToHclTerraform(this._originshieldConcurrencyLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      originshield_concurrency_requests: {
        value: cdktf.numberToHclTerraform(this._originshieldConcurrencyRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      originshield_enabled: {
        value: cdktf.booleanToHclTerraform(this._originshieldEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      originshield_queue_requests: {
        value: cdktf.numberToHclTerraform(this._originshieldQueueRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      originshield_queue_wait: {
        value: cdktf.numberToHclTerraform(this._originshieldQueueWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      originshield_zone: {
        value: cdktf.stringToHclTerraform(this._originshieldZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permacache_storagezone: {
        value: cdktf.numberToHclTerraform(this._permacacheStoragezone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_coalescing_enabled: {
        value: cdktf.booleanToHclTerraform(this._requestCoalescingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_coalescing_timeout: {
        value: cdktf.numberToHclTerraform(this._requestCoalescingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      s3_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._s3AuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      s3_auth_key: {
        value: cdktf.stringToHclTerraform(this._s3AuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_auth_region: {
        value: cdktf.stringToHclTerraform(this._s3AuthRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_auth_secret: {
        value: cdktf.stringToHclTerraform(this._s3AuthSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safehop_connection_timeout: {
        value: cdktf.numberToHclTerraform(this._safehopConnectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      safehop_enabled: {
        value: cdktf.booleanToHclTerraform(this._safehopEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      safehop_response_timeout: {
        value: cdktf.numberToHclTerraform(this._safehopResponseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      safehop_retry_count: {
        value: cdktf.numberToHclTerraform(this._safehopRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      safehop_retry_delay: {
        value: cdktf.numberToHclTerraform(this._safehopRetryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      safehop_retry_reasons: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._safehopRetryReasons),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sort_querystring: {
        value: cdktf.booleanToHclTerraform(this._sortQuerystring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strip_cookies: {
        value: cdktf.booleanToHclTerraform(this._stripCookies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_support: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsSupport),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._tokenAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_auth_ip_validation: {
        value: cdktf.booleanToHclTerraform(this._tokenAuthIpValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_background_update: {
        value: cdktf.booleanToHclTerraform(this._useBackgroundUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      websockets_enabled: {
        value: cdktf.booleanToHclTerraform(this._websocketsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      websockets_max_connections: {
        value: cdktf.numberToHclTerraform(this._websocketsMaxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      origin: {
        value: pullzoneOriginToHclTerraform(this._origin.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PullzoneOrigin",
      },
      routing: {
        value: pullzoneRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PullzoneRouting",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
