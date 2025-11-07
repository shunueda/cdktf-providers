// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A more aggressive method of compression is applied with the goal of minimizing the image file size, possibly impacting the final quality of the image displayed. Applies to JPEG compression only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#aggressive_compression ApplicationDelivery#aggressive_compression}
  */
  readonly aggressiveCompression?: boolean | cdktf.IResolvable;
  /**
  * Compress JPEG images. Compression reduces download time by reducing the file size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#compress_jpeg ApplicationDelivery#compress_jpeg}
  */
  readonly compressJpeg?: boolean | cdktf.IResolvable;
  /**
  * Compress PNG images. Compression reduces download time by reducing the file size. PNG compression removes only image meta-data with no impact on quality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#compress_png ApplicationDelivery#compress_png}
  */
  readonly compressPng?: boolean | cdktf.IResolvable;
  /**
  * Gzip (default). Brotli (recommended for more efficient compression)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#compression_type ApplicationDelivery#compression_type}
  */
  readonly compressionType?: string;
  /**
  * The default error page HTML template. $TITLE$ and $BODY$ placeholders are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#default_error_page_template ApplicationDelivery#default_error_page_template}
  */
  readonly defaultErrorPageTemplate?: string;
  /**
  * Allows supporting browsers to take advantage of the performance enhancements provided by HTTP/2 for your website. Non-supporting browsers can connect via HTTP/1.0 or HTTP/1.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#enable_http2 ApplicationDelivery#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * The inner HTML template for 'ABP identification failed' error. Only HTML elements located inside the body tag are supported. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_abp_identification_failed ApplicationDelivery#error_abp_identification_failed}
  */
  readonly errorAbpIdentificationFailed?: string;
  /**
  * The HTML template for 'Access Denied' error. $TITLE$ and $BODY$ placeholders are required. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_access_denied ApplicationDelivery#error_access_denied}
  */
  readonly errorAccessDenied?: string;
  /**
  * The HTML template for 'Unable to connect to origin server' error. $TITLE$ and $BODY$ placeholders are required. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_connection_failed ApplicationDelivery#error_connection_failed}
  */
  readonly errorConnectionFailed?: string;
  /**
  * The HTML template for 'Connection Timeout' error. $TITLE$ and $BODY$ placeholders are required. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_connection_timeout ApplicationDelivery#error_connection_timeout}
  */
  readonly errorConnectionTimeout?: string;
  /**
  * The HTML template for 'Initial connection denied - CAPTCHA required' error. $TITLE$ and $BODY$ placeholders are required. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_deny_and_captcha ApplicationDelivery#error_deny_and_captcha}
  */
  readonly errorDenyAndCaptcha?: string;
  /**
  * The HTML template for 'Site not configured for SSL' error. $TITLE$ and $BODY$ placeholders are required. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_no_ssl_config ApplicationDelivery#error_no_ssl_config}
  */
  readonly errorNoSslConfig?: string;
  /**
  * The HTML template for 'Unable to parse request' error. $TITLE$ and $BODY$ placeholders are required. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_parse_req_error ApplicationDelivery#error_parse_req_error}
  */
  readonly errorParseReqError?: string;
  /**
  * The HTML template for 'Unable to parse response' error. $TITLE$ and $BODY$ placeholders are required. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_parse_resp_error ApplicationDelivery#error_parse_resp_error}
  */
  readonly errorParseRespError?: string;
  /**
  * The HTML template for 'Unable to establish SSL connection' error. $TITLE$ and $BODY$ placeholders are required. Set empty value to return to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#error_ssl_failed ApplicationDelivery#error_ssl_failed}
  */
  readonly errorSslFailed?: string;
  /**
  * When this option is enabled, files such as JavaScript, CSS and HTML are dynamically compressed using the selected format as they are transferred. They are automatically unzipped within the browser. If Brotli is not supported by the browser, files are automatically sent in Gzip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#file_compression ApplicationDelivery#file_compression}
  */
  readonly fileCompression?: boolean | cdktf.IResolvable;
  /**
  * Enables HTTP/2 for the connection between Imperva and your origin server. (HTTP/2 must also be supported by the origin server.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#http2_to_origin ApplicationDelivery#http2_to_origin}
  */
  readonly http2ToOrigin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#id ApplicationDelivery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Content minification can applied only to cached Javascript, CSS and HTML content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#minify_css ApplicationDelivery#minify_css}
  */
  readonly minifyCss?: boolean | cdktf.IResolvable;
  /**
  * Minify JavaScript. Minification removes characters that are not necessary for rendering the page, such as whitespace and comments. This makes the files smaller and therefore reduces their access time. Minification has no impact on the functionality of the Javascript, CSS, and HTML files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#minify_js ApplicationDelivery#minify_js}
  */
  readonly minifyJs?: boolean | cdktf.IResolvable;
  /**
  * Minify static HTML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#minify_static_html ApplicationDelivery#minify_static_html}
  */
  readonly minifyStaticHtml?: boolean | cdktf.IResolvable;
  /**
  * TCP connections that are opened for a client request remain open for a short time to handle additional requests that may arrive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#origin_connection_reuse ApplicationDelivery#origin_connection_reuse}
  */
  readonly originConnectionReuse?: boolean | cdktf.IResolvable;
  /**
  * The port number. If field is set to 80 (the default value), rewrite port will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#port_to ApplicationDelivery#port_to}
  */
  readonly portTo?: number;
  /**
  * The image is rendered with progressively finer resolution, potentially causing a pixelated effect until the final image is rendered with no loss of quality. This option reduces page load times and allows images to gradually load after the page is rendered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#progressive_image_rendering ApplicationDelivery#progressive_image_rendering}
  */
  readonly progressiveImageRendering?: boolean | cdktf.IResolvable;
  /**
  * Sites that require an HTTPS connection force all HTTP requests to be redirected to HTTPS. This option is displayed only for an SSL site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#redirect_http_to_https ApplicationDelivery#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: boolean | cdktf.IResolvable;
  /**
  * Redirect all visitors to your site’s full domain (which includes www). This option is displayed only for a naked domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#redirect_naked_to_full ApplicationDelivery#redirect_naked_to_full}
  */
  readonly redirectNakedToFull?: boolean | cdktf.IResolvable;
  /**
  * Numeric identifier of the site to operate on. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#site_id ApplicationDelivery#site_id}
  */
  readonly siteId: number;
  /**
  * The port number to rewrite default SSL port to. if field is set to 443 (the default value), rewrite SSL port will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#ssl_port_to ApplicationDelivery#ssl_port_to}
  */
  readonly sslPortTo?: number;
  /**
  * By default, non-SNI clients are supported. Disable this option to block non-SNI clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#support_non_sni_clients ApplicationDelivery#support_non_sni_clients}
  */
  readonly supportNonSniClients?: boolean | cdktf.IResolvable;
  /**
  * Maintain a set of idle TCP connections to the origin server to eliminate the latency associated with opening new connections or new requests (TCP handshake).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#tcp_pre_pooling ApplicationDelivery#tcp_pre_pooling}
  */
  readonly tcpPrePooling?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery incapsula_application_delivery}
*/
export class ApplicationDelivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_application_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationDelivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationDelivery to import
  * @param importFromId The id of the existing ApplicationDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationDelivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_application_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/application_delivery incapsula_application_delivery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationDeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationDeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_application_delivery',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggressiveCompression = config.aggressiveCompression;
    this._compressJpeg = config.compressJpeg;
    this._compressPng = config.compressPng;
    this._compressionType = config.compressionType;
    this._defaultErrorPageTemplate = config.defaultErrorPageTemplate;
    this._enableHttp2 = config.enableHttp2;
    this._errorAbpIdentificationFailed = config.errorAbpIdentificationFailed;
    this._errorAccessDenied = config.errorAccessDenied;
    this._errorConnectionFailed = config.errorConnectionFailed;
    this._errorConnectionTimeout = config.errorConnectionTimeout;
    this._errorDenyAndCaptcha = config.errorDenyAndCaptcha;
    this._errorNoSslConfig = config.errorNoSslConfig;
    this._errorParseReqError = config.errorParseReqError;
    this._errorParseRespError = config.errorParseRespError;
    this._errorSslFailed = config.errorSslFailed;
    this._fileCompression = config.fileCompression;
    this._http2ToOrigin = config.http2ToOrigin;
    this._id = config.id;
    this._minifyCss = config.minifyCss;
    this._minifyJs = config.minifyJs;
    this._minifyStaticHtml = config.minifyStaticHtml;
    this._originConnectionReuse = config.originConnectionReuse;
    this._portTo = config.portTo;
    this._progressiveImageRendering = config.progressiveImageRendering;
    this._redirectHttpToHttps = config.redirectHttpToHttps;
    this._redirectNakedToFull = config.redirectNakedToFull;
    this._siteId = config.siteId;
    this._sslPortTo = config.sslPortTo;
    this._supportNonSniClients = config.supportNonSniClients;
    this._tcpPrePooling = config.tcpPrePooling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggressive_compression - computed: false, optional: true, required: false
  private _aggressiveCompression?: boolean | cdktf.IResolvable; 
  public get aggressiveCompression() {
    return this.getBooleanAttribute('aggressive_compression');
  }
  public set aggressiveCompression(value: boolean | cdktf.IResolvable) {
    this._aggressiveCompression = value;
  }
  public resetAggressiveCompression() {
    this._aggressiveCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveCompressionInput() {
    return this._aggressiveCompression;
  }

  // compress_jpeg - computed: false, optional: true, required: false
  private _compressJpeg?: boolean | cdktf.IResolvable; 
  public get compressJpeg() {
    return this.getBooleanAttribute('compress_jpeg');
  }
  public set compressJpeg(value: boolean | cdktf.IResolvable) {
    this._compressJpeg = value;
  }
  public resetCompressJpeg() {
    this._compressJpeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressJpegInput() {
    return this._compressJpeg;
  }

  // compress_png - computed: false, optional: true, required: false
  private _compressPng?: boolean | cdktf.IResolvable; 
  public get compressPng() {
    return this.getBooleanAttribute('compress_png');
  }
  public set compressPng(value: boolean | cdktf.IResolvable) {
    this._compressPng = value;
  }
  public resetCompressPng() {
    this._compressPng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressPngInput() {
    return this._compressPng;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // default_error_page_template - computed: false, optional: true, required: false
  private _defaultErrorPageTemplate?: string; 
  public get defaultErrorPageTemplate() {
    return this.getStringAttribute('default_error_page_template');
  }
  public set defaultErrorPageTemplate(value: string) {
    this._defaultErrorPageTemplate = value;
  }
  public resetDefaultErrorPageTemplate() {
    this._defaultErrorPageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultErrorPageTemplateInput() {
    return this._defaultErrorPageTemplate;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // error_abp_identification_failed - computed: false, optional: true, required: false
  private _errorAbpIdentificationFailed?: string; 
  public get errorAbpIdentificationFailed() {
    return this.getStringAttribute('error_abp_identification_failed');
  }
  public set errorAbpIdentificationFailed(value: string) {
    this._errorAbpIdentificationFailed = value;
  }
  public resetErrorAbpIdentificationFailed() {
    this._errorAbpIdentificationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAbpIdentificationFailedInput() {
    return this._errorAbpIdentificationFailed;
  }

  // error_access_denied - computed: false, optional: true, required: false
  private _errorAccessDenied?: string; 
  public get errorAccessDenied() {
    return this.getStringAttribute('error_access_denied');
  }
  public set errorAccessDenied(value: string) {
    this._errorAccessDenied = value;
  }
  public resetErrorAccessDenied() {
    this._errorAccessDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAccessDeniedInput() {
    return this._errorAccessDenied;
  }

  // error_connection_failed - computed: false, optional: true, required: false
  private _errorConnectionFailed?: string; 
  public get errorConnectionFailed() {
    return this.getStringAttribute('error_connection_failed');
  }
  public set errorConnectionFailed(value: string) {
    this._errorConnectionFailed = value;
  }
  public resetErrorConnectionFailed() {
    this._errorConnectionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorConnectionFailedInput() {
    return this._errorConnectionFailed;
  }

  // error_connection_timeout - computed: false, optional: true, required: false
  private _errorConnectionTimeout?: string; 
  public get errorConnectionTimeout() {
    return this.getStringAttribute('error_connection_timeout');
  }
  public set errorConnectionTimeout(value: string) {
    this._errorConnectionTimeout = value;
  }
  public resetErrorConnectionTimeout() {
    this._errorConnectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorConnectionTimeoutInput() {
    return this._errorConnectionTimeout;
  }

  // error_deny_and_captcha - computed: false, optional: true, required: false
  private _errorDenyAndCaptcha?: string; 
  public get errorDenyAndCaptcha() {
    return this.getStringAttribute('error_deny_and_captcha');
  }
  public set errorDenyAndCaptcha(value: string) {
    this._errorDenyAndCaptcha = value;
  }
  public resetErrorDenyAndCaptcha() {
    this._errorDenyAndCaptcha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDenyAndCaptchaInput() {
    return this._errorDenyAndCaptcha;
  }

  // error_no_ssl_config - computed: false, optional: true, required: false
  private _errorNoSslConfig?: string; 
  public get errorNoSslConfig() {
    return this.getStringAttribute('error_no_ssl_config');
  }
  public set errorNoSslConfig(value: string) {
    this._errorNoSslConfig = value;
  }
  public resetErrorNoSslConfig() {
    this._errorNoSslConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoSslConfigInput() {
    return this._errorNoSslConfig;
  }

  // error_parse_req_error - computed: false, optional: true, required: false
  private _errorParseReqError?: string; 
  public get errorParseReqError() {
    return this.getStringAttribute('error_parse_req_error');
  }
  public set errorParseReqError(value: string) {
    this._errorParseReqError = value;
  }
  public resetErrorParseReqError() {
    this._errorParseReqError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorParseReqErrorInput() {
    return this._errorParseReqError;
  }

  // error_parse_resp_error - computed: false, optional: true, required: false
  private _errorParseRespError?: string; 
  public get errorParseRespError() {
    return this.getStringAttribute('error_parse_resp_error');
  }
  public set errorParseRespError(value: string) {
    this._errorParseRespError = value;
  }
  public resetErrorParseRespError() {
    this._errorParseRespError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorParseRespErrorInput() {
    return this._errorParseRespError;
  }

  // error_ssl_failed - computed: false, optional: true, required: false
  private _errorSslFailed?: string; 
  public get errorSslFailed() {
    return this.getStringAttribute('error_ssl_failed');
  }
  public set errorSslFailed(value: string) {
    this._errorSslFailed = value;
  }
  public resetErrorSslFailed() {
    this._errorSslFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorSslFailedInput() {
    return this._errorSslFailed;
  }

  // file_compression - computed: false, optional: true, required: false
  private _fileCompression?: boolean | cdktf.IResolvable; 
  public get fileCompression() {
    return this.getBooleanAttribute('file_compression');
  }
  public set fileCompression(value: boolean | cdktf.IResolvable) {
    this._fileCompression = value;
  }
  public resetFileCompression() {
    this._fileCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCompressionInput() {
    return this._fileCompression;
  }

  // http2_to_origin - computed: false, optional: true, required: false
  private _http2ToOrigin?: boolean | cdktf.IResolvable; 
  public get http2ToOrigin() {
    return this.getBooleanAttribute('http2_to_origin');
  }
  public set http2ToOrigin(value: boolean | cdktf.IResolvable) {
    this._http2ToOrigin = value;
  }
  public resetHttp2ToOrigin() {
    this._http2ToOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ToOriginInput() {
    return this._http2ToOrigin;
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

  // minify_css - computed: false, optional: true, required: false
  private _minifyCss?: boolean | cdktf.IResolvable; 
  public get minifyCss() {
    return this.getBooleanAttribute('minify_css');
  }
  public set minifyCss(value: boolean | cdktf.IResolvable) {
    this._minifyCss = value;
  }
  public resetMinifyCss() {
    this._minifyCss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minifyCssInput() {
    return this._minifyCss;
  }

  // minify_js - computed: false, optional: true, required: false
  private _minifyJs?: boolean | cdktf.IResolvable; 
  public get minifyJs() {
    return this.getBooleanAttribute('minify_js');
  }
  public set minifyJs(value: boolean | cdktf.IResolvable) {
    this._minifyJs = value;
  }
  public resetMinifyJs() {
    this._minifyJs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minifyJsInput() {
    return this._minifyJs;
  }

  // minify_static_html - computed: false, optional: true, required: false
  private _minifyStaticHtml?: boolean | cdktf.IResolvable; 
  public get minifyStaticHtml() {
    return this.getBooleanAttribute('minify_static_html');
  }
  public set minifyStaticHtml(value: boolean | cdktf.IResolvable) {
    this._minifyStaticHtml = value;
  }
  public resetMinifyStaticHtml() {
    this._minifyStaticHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minifyStaticHtmlInput() {
    return this._minifyStaticHtml;
  }

  // origin_connection_reuse - computed: false, optional: true, required: false
  private _originConnectionReuse?: boolean | cdktf.IResolvable; 
  public get originConnectionReuse() {
    return this.getBooleanAttribute('origin_connection_reuse');
  }
  public set originConnectionReuse(value: boolean | cdktf.IResolvable) {
    this._originConnectionReuse = value;
  }
  public resetOriginConnectionReuse() {
    this._originConnectionReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originConnectionReuseInput() {
    return this._originConnectionReuse;
  }

  // port_to - computed: false, optional: true, required: false
  private _portTo?: number; 
  public get portTo() {
    return this.getNumberAttribute('port_to');
  }
  public set portTo(value: number) {
    this._portTo = value;
  }
  public resetPortTo() {
    this._portTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portToInput() {
    return this._portTo;
  }

  // progressive_image_rendering - computed: false, optional: true, required: false
  private _progressiveImageRendering?: boolean | cdktf.IResolvable; 
  public get progressiveImageRendering() {
    return this.getBooleanAttribute('progressive_image_rendering');
  }
  public set progressiveImageRendering(value: boolean | cdktf.IResolvable) {
    this._progressiveImageRendering = value;
  }
  public resetProgressiveImageRendering() {
    this._progressiveImageRendering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressiveImageRenderingInput() {
    return this._progressiveImageRendering;
  }

  // redirect_http_to_https - computed: false, optional: true, required: false
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

  // redirect_naked_to_full - computed: false, optional: true, required: false
  private _redirectNakedToFull?: boolean | cdktf.IResolvable; 
  public get redirectNakedToFull() {
    return this.getBooleanAttribute('redirect_naked_to_full');
  }
  public set redirectNakedToFull(value: boolean | cdktf.IResolvable) {
    this._redirectNakedToFull = value;
  }
  public resetRedirectNakedToFull() {
    this._redirectNakedToFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectNakedToFullInput() {
    return this._redirectNakedToFull;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // ssl_port_to - computed: false, optional: true, required: false
  private _sslPortTo?: number; 
  public get sslPortTo() {
    return this.getNumberAttribute('ssl_port_to');
  }
  public set sslPortTo(value: number) {
    this._sslPortTo = value;
  }
  public resetSslPortTo() {
    this._sslPortTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPortToInput() {
    return this._sslPortTo;
  }

  // support_non_sni_clients - computed: false, optional: true, required: false
  private _supportNonSniClients?: boolean | cdktf.IResolvable; 
  public get supportNonSniClients() {
    return this.getBooleanAttribute('support_non_sni_clients');
  }
  public set supportNonSniClients(value: boolean | cdktf.IResolvable) {
    this._supportNonSniClients = value;
  }
  public resetSupportNonSniClients() {
    this._supportNonSniClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportNonSniClientsInput() {
    return this._supportNonSniClients;
  }

  // tcp_pre_pooling - computed: false, optional: true, required: false
  private _tcpPrePooling?: boolean | cdktf.IResolvable; 
  public get tcpPrePooling() {
    return this.getBooleanAttribute('tcp_pre_pooling');
  }
  public set tcpPrePooling(value: boolean | cdktf.IResolvable) {
    this._tcpPrePooling = value;
  }
  public resetTcpPrePooling() {
    this._tcpPrePooling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPrePoolingInput() {
    return this._tcpPrePooling;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggressive_compression: cdktf.booleanToTerraform(this._aggressiveCompression),
      compress_jpeg: cdktf.booleanToTerraform(this._compressJpeg),
      compress_png: cdktf.booleanToTerraform(this._compressPng),
      compression_type: cdktf.stringToTerraform(this._compressionType),
      default_error_page_template: cdktf.stringToTerraform(this._defaultErrorPageTemplate),
      enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
      error_abp_identification_failed: cdktf.stringToTerraform(this._errorAbpIdentificationFailed),
      error_access_denied: cdktf.stringToTerraform(this._errorAccessDenied),
      error_connection_failed: cdktf.stringToTerraform(this._errorConnectionFailed),
      error_connection_timeout: cdktf.stringToTerraform(this._errorConnectionTimeout),
      error_deny_and_captcha: cdktf.stringToTerraform(this._errorDenyAndCaptcha),
      error_no_ssl_config: cdktf.stringToTerraform(this._errorNoSslConfig),
      error_parse_req_error: cdktf.stringToTerraform(this._errorParseReqError),
      error_parse_resp_error: cdktf.stringToTerraform(this._errorParseRespError),
      error_ssl_failed: cdktf.stringToTerraform(this._errorSslFailed),
      file_compression: cdktf.booleanToTerraform(this._fileCompression),
      http2_to_origin: cdktf.booleanToTerraform(this._http2ToOrigin),
      id: cdktf.stringToTerraform(this._id),
      minify_css: cdktf.booleanToTerraform(this._minifyCss),
      minify_js: cdktf.booleanToTerraform(this._minifyJs),
      minify_static_html: cdktf.booleanToTerraform(this._minifyStaticHtml),
      origin_connection_reuse: cdktf.booleanToTerraform(this._originConnectionReuse),
      port_to: cdktf.numberToTerraform(this._portTo),
      progressive_image_rendering: cdktf.booleanToTerraform(this._progressiveImageRendering),
      redirect_http_to_https: cdktf.booleanToTerraform(this._redirectHttpToHttps),
      redirect_naked_to_full: cdktf.booleanToTerraform(this._redirectNakedToFull),
      site_id: cdktf.numberToTerraform(this._siteId),
      ssl_port_to: cdktf.numberToTerraform(this._sslPortTo),
      support_non_sni_clients: cdktf.booleanToTerraform(this._supportNonSniClients),
      tcp_pre_pooling: cdktf.booleanToTerraform(this._tcpPrePooling),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggressive_compression: {
        value: cdktf.booleanToHclTerraform(this._aggressiveCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compress_jpeg: {
        value: cdktf.booleanToHclTerraform(this._compressJpeg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compress_png: {
        value: cdktf.booleanToHclTerraform(this._compressPng),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compression_type: {
        value: cdktf.stringToHclTerraform(this._compressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_error_page_template: {
        value: cdktf.stringToHclTerraform(this._defaultErrorPageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_http2: {
        value: cdktf.booleanToHclTerraform(this._enableHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_abp_identification_failed: {
        value: cdktf.stringToHclTerraform(this._errorAbpIdentificationFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_access_denied: {
        value: cdktf.stringToHclTerraform(this._errorAccessDenied),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_connection_failed: {
        value: cdktf.stringToHclTerraform(this._errorConnectionFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_connection_timeout: {
        value: cdktf.stringToHclTerraform(this._errorConnectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_deny_and_captcha: {
        value: cdktf.stringToHclTerraform(this._errorDenyAndCaptcha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_no_ssl_config: {
        value: cdktf.stringToHclTerraform(this._errorNoSslConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_parse_req_error: {
        value: cdktf.stringToHclTerraform(this._errorParseReqError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_parse_resp_error: {
        value: cdktf.stringToHclTerraform(this._errorParseRespError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_ssl_failed: {
        value: cdktf.stringToHclTerraform(this._errorSslFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_compression: {
        value: cdktf.booleanToHclTerraform(this._fileCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http2_to_origin: {
        value: cdktf.booleanToHclTerraform(this._http2ToOrigin),
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
      minify_css: {
        value: cdktf.booleanToHclTerraform(this._minifyCss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minify_js: {
        value: cdktf.booleanToHclTerraform(this._minifyJs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minify_static_html: {
        value: cdktf.booleanToHclTerraform(this._minifyStaticHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origin_connection_reuse: {
        value: cdktf.booleanToHclTerraform(this._originConnectionReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_to: {
        value: cdktf.numberToHclTerraform(this._portTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      progressive_image_rendering: {
        value: cdktf.booleanToHclTerraform(this._progressiveImageRendering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redirect_http_to_https: {
        value: cdktf.booleanToHclTerraform(this._redirectHttpToHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redirect_naked_to_full: {
        value: cdktf.booleanToHclTerraform(this._redirectNakedToFull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_port_to: {
        value: cdktf.numberToHclTerraform(this._sslPortTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_non_sni_clients: {
        value: cdktf.booleanToHclTerraform(this._supportNonSniClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_pre_pooling: {
        value: cdktf.booleanToHclTerraform(this._tcpPrePooling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
