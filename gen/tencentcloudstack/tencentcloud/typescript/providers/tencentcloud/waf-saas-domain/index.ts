// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafSaasDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable active health detection, 0 represents disable and 1 represents enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#active_check WafSaasDomain#active_check}
  */
  readonly activeCheck?: number;
  /**
  * Whether to enable api safe, 1 enable, 0 disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#api_safe_status WafSaasDomain#api_safe_status}
  */
  readonly apiSafeStatus?: number;
  /**
  * Whether to enable bot, 1 enable, 0 disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#bot_status WafSaasDomain#bot_status}
  */
  readonly botStatus?: number;
  /**
  * Certificate content, When CertType=1, this parameter needs to be filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#cert WafSaasDomain#cert}
  */
  readonly cert?: string;
  /**
  * Certificate type, 0 represents no certificate, CertType=1 represents self owned certificate, and 2 represents managed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#cert_type WafSaasDomain#cert_type}
  */
  readonly certType?: number;
  /**
  * Encryption Suite Template, 0:default  1:Universal template 2:Security template 3:Custom template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#cipher_template WafSaasDomain#cipher_template}
  */
  readonly cipherTemplate?: number;
  /**
  * Encryption Suite Information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#ciphers WafSaasDomain#ciphers}
  */
  readonly ciphers?: number[];
  /**
  * Whether to enable access logs, 1 enable, 0 disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#cls_status WafSaasDomain#cls_status}
  */
  readonly clsStatus?: number;
  /**
  * Domain names that require defense.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#domain WafSaasDomain#domain}
  */
  readonly domain: string;
  /**
  * Whether redirect to https, 1 will redirect and 0 will not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#https_rewrite WafSaasDomain#https_rewrite}
  */
  readonly httpsRewrite?: number;
  /**
  * Upstream port for https, When listen ports has https port and UpstreamScheme is HTTP, the current field needs to be filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#https_upstream_port WafSaasDomain#https_upstream_port}
  */
  readonly httpsUpstreamPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#id WafSaasDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique ID of Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#instance_id WafSaasDomain#instance_id}
  */
  readonly instanceId: string;
  /**
  * When is_cdn=3, this parameter needs to be filled in to indicate a custom header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#ip_headers WafSaasDomain#ip_headers}
  */
  readonly ipHeaders?: string[];
  /**
  * Whether a proxy has been enabled before WAF, 0 no deployment, 1 deployment and use first IP in X-Forwarded-For as client IP, 2 deployment and use remote_addr as client IP, 3 deployment and use values of custom headers as client IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#is_cdn WafSaasDomain#is_cdn}
  */
  readonly isCdn?: number;
  /**
  * Whether enable HTTP2, Enabling HTTP2 requires HTTPS support, 1 means enabled, 0 does not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#is_http2 WafSaasDomain#is_http2}
  */
  readonly isHttp2?: number;
  /**
  * Whether to enable keep-alive, 0 disable, 1 enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#is_keep_alive WafSaasDomain#is_keep_alive}
  */
  readonly isKeepAlive?: string;
  /**
  * Is WebSocket support enabled. 1 means enabled, 0 does not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#is_websocket WafSaasDomain#is_websocket}
  */
  readonly isWebsocket?: number;
  /**
  * Load balancing strategy, where 0 represents polling and 1 represents IP hash and 2 weighted round robin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#load_balance WafSaasDomain#load_balance}
  */
  readonly loadBalance?: string;
  /**
  * Certificate key, When CertType=1, this parameter needs to be filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#private_key WafSaasDomain#private_key}
  */
  readonly privateKey?: string;
  /**
  * 300s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#proxy_read_timeout WafSaasDomain#proxy_read_timeout}
  */
  readonly proxyReadTimeout?: number;
  /**
  * 300s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#proxy_send_timeout WafSaasDomain#proxy_send_timeout}
  */
  readonly proxySendTimeout?: number;
  /**
  * When SniType=3, this parameter needs to be filled in to represent a custom host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#sni_host WafSaasDomain#sni_host}
  */
  readonly sniHost?: string;
  /**
  * Sni type fo upstream, 0:disable SNI; 1:enable SNI and SNI equal original request host; 2:and SNI equal upstream host 3:enable SNI and equal customize host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#sni_type WafSaasDomain#sni_type}
  */
  readonly sniType?: number;
  /**
  * Upstream IP List, When UpstreamType=0, this parameter needs to be filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#src_list WafSaasDomain#src_list}
  */
  readonly srcList?: string[];
  /**
  * Certificate ID, When CertType=2, this parameter needs to be filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#ssl_id WafSaasDomain#ssl_id}
  */
  readonly sslId?: string;
  /**
  * WAF switch status, 1: turn on WAF switch; 0: turn off WAF switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#status WafSaasDomain#status}
  */
  readonly status?: number;
  /**
  * Version of TLS Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#tls_version WafSaasDomain#tls_version}
  */
  readonly tlsVersion?: number;
  /**
  * Upstream domain, When UpstreamType=1, this parameter needs to be filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#upstream_domain WafSaasDomain#upstream_domain}
  */
  readonly upstreamDomain?: string;
  /**
  * Upstream scheme for https, http or https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#upstream_scheme WafSaasDomain#upstream_scheme}
  */
  readonly upstreamScheme?: string;
  /**
  * Upstream type, 0 represents IP, 1 represents domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#upstream_type WafSaasDomain#upstream_type}
  */
  readonly upstreamType?: number;
  /**
  * Weight of each upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#weights WafSaasDomain#weights}
  */
  readonly weights?: number[];
  /**
  * 0:disable xff reset; 1:enable xff reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#xff_reset WafSaasDomain#xff_reset}
  */
  readonly xffReset?: number;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#ports WafSaasDomain#ports}
  */
  readonly ports: WafSaasDomainPorts[] | cdktf.IResolvable;
}
export interface WafSaasDomainPorts {
  /**
  * Listening port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#port WafSaasDomain#port}
  */
  readonly port: string;
  /**
  * The listening protocol of listening port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#protocol WafSaasDomain#protocol}
  */
  readonly protocol: string;
  /**
  * The upstream port for listening port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#upstream_port WafSaasDomain#upstream_port}
  */
  readonly upstreamPort: string;
  /**
  * The upstream protocol for listening port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#upstream_protocol WafSaasDomain#upstream_protocol}
  */
  readonly upstreamProtocol: string;
}

export function wafSaasDomainPortsToTerraform(struct?: WafSaasDomainPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    upstream_port: cdktf.stringToTerraform(struct!.upstreamPort),
    upstream_protocol: cdktf.stringToTerraform(struct!.upstreamProtocol),
  }
}


export function wafSaasDomainPortsToHclTerraform(struct?: WafSaasDomainPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_port: {
      value: cdktf.stringToHclTerraform(struct!.upstreamPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_protocol: {
      value: cdktf.stringToHclTerraform(struct!.upstreamProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafSaasDomainPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafSaasDomainPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._upstreamPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamPort = this._upstreamPort;
    }
    if (this._upstreamProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamProtocol = this._upstreamProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafSaasDomainPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._upstreamPort = undefined;
      this._upstreamProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._upstreamPort = value.upstreamPort;
      this._upstreamProtocol = value.upstreamProtocol;
    }
  }

  // nginx_server_id - computed: true, optional: false, required: false
  public get nginxServerId() {
    return this.getStringAttribute('nginx_server_id');
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // upstream_port - computed: false, optional: false, required: true
  private _upstreamPort?: string; 
  public get upstreamPort() {
    return this.getStringAttribute('upstream_port');
  }
  public set upstreamPort(value: string) {
    this._upstreamPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamPortInput() {
    return this._upstreamPort;
  }

  // upstream_protocol - computed: false, optional: false, required: true
  private _upstreamProtocol?: string; 
  public get upstreamProtocol() {
    return this.getStringAttribute('upstream_protocol');
  }
  public set upstreamProtocol(value: string) {
    this._upstreamProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamProtocolInput() {
    return this._upstreamProtocol;
  }
}

export class WafSaasDomainPortsList extends cdktf.ComplexList {
  public internalValue? : WafSaasDomainPorts[] | cdktf.IResolvable

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
  public get(index: number): WafSaasDomainPortsOutputReference {
    return new WafSaasDomainPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain tencentcloud_waf_saas_domain}
*/
export class WafSaasDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_saas_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafSaasDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafSaasDomain to import
  * @param importFromId The id of the existing WafSaasDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafSaasDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_saas_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/waf_saas_domain tencentcloud_waf_saas_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafSaasDomainConfig
  */
  public constructor(scope: Construct, id: string, config: WafSaasDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_saas_domain',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeCheck = config.activeCheck;
    this._apiSafeStatus = config.apiSafeStatus;
    this._botStatus = config.botStatus;
    this._cert = config.cert;
    this._certType = config.certType;
    this._cipherTemplate = config.cipherTemplate;
    this._ciphers = config.ciphers;
    this._clsStatus = config.clsStatus;
    this._domain = config.domain;
    this._httpsRewrite = config.httpsRewrite;
    this._httpsUpstreamPort = config.httpsUpstreamPort;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ipHeaders = config.ipHeaders;
    this._isCdn = config.isCdn;
    this._isHttp2 = config.isHttp2;
    this._isKeepAlive = config.isKeepAlive;
    this._isWebsocket = config.isWebsocket;
    this._loadBalance = config.loadBalance;
    this._privateKey = config.privateKey;
    this._proxyReadTimeout = config.proxyReadTimeout;
    this._proxySendTimeout = config.proxySendTimeout;
    this._sniHost = config.sniHost;
    this._sniType = config.sniType;
    this._srcList = config.srcList;
    this._sslId = config.sslId;
    this._status = config.status;
    this._tlsVersion = config.tlsVersion;
    this._upstreamDomain = config.upstreamDomain;
    this._upstreamScheme = config.upstreamScheme;
    this._upstreamType = config.upstreamType;
    this._weights = config.weights;
    this._xffReset = config.xffReset;
    this._ports.internalValue = config.ports;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_check - computed: false, optional: true, required: false
  private _activeCheck?: number; 
  public get activeCheck() {
    return this.getNumberAttribute('active_check');
  }
  public set activeCheck(value: number) {
    this._activeCheck = value;
  }
  public resetActiveCheck() {
    this._activeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeCheckInput() {
    return this._activeCheck;
  }

  // api_safe_status - computed: false, optional: true, required: false
  private _apiSafeStatus?: number; 
  public get apiSafeStatus() {
    return this.getNumberAttribute('api_safe_status');
  }
  public set apiSafeStatus(value: number) {
    this._apiSafeStatus = value;
  }
  public resetApiSafeStatus() {
    this._apiSafeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSafeStatusInput() {
    return this._apiSafeStatus;
  }

  // bot_status - computed: false, optional: true, required: false
  private _botStatus?: number; 
  public get botStatus() {
    return this.getNumberAttribute('bot_status');
  }
  public set botStatus(value: number) {
    this._botStatus = value;
  }
  public resetBotStatus() {
    this._botStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botStatusInput() {
    return this._botStatus;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cert_type - computed: false, optional: true, required: false
  private _certType?: number; 
  public get certType() {
    return this.getNumberAttribute('cert_type');
  }
  public set certType(value: number) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // cipher_template - computed: false, optional: true, required: false
  private _cipherTemplate?: number; 
  public get cipherTemplate() {
    return this.getNumberAttribute('cipher_template');
  }
  public set cipherTemplate(value: number) {
    this._cipherTemplate = value;
  }
  public resetCipherTemplate() {
    this._cipherTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherTemplateInput() {
    return this._cipherTemplate;
  }

  // ciphers - computed: true, optional: true, required: false
  private _ciphers?: number[]; 
  public get ciphers() {
    return this.getNumberListAttribute('ciphers');
  }
  public set ciphers(value: number[]) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // cls_status - computed: false, optional: true, required: false
  private _clsStatus?: number; 
  public get clsStatus() {
    return this.getNumberAttribute('cls_status');
  }
  public set clsStatus(value: number) {
    this._clsStatus = value;
  }
  public resetClsStatus() {
    this._clsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsStatusInput() {
    return this._clsStatus;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // https_rewrite - computed: false, optional: true, required: false
  private _httpsRewrite?: number; 
  public get httpsRewrite() {
    return this.getNumberAttribute('https_rewrite');
  }
  public set httpsRewrite(value: number) {
    this._httpsRewrite = value;
  }
  public resetHttpsRewrite() {
    this._httpsRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRewriteInput() {
    return this._httpsRewrite;
  }

  // https_upstream_port - computed: false, optional: true, required: false
  private _httpsUpstreamPort?: string; 
  public get httpsUpstreamPort() {
    return this.getStringAttribute('https_upstream_port');
  }
  public set httpsUpstreamPort(value: string) {
    this._httpsUpstreamPort = value;
  }
  public resetHttpsUpstreamPort() {
    this._httpsUpstreamPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsUpstreamPortInput() {
    return this._httpsUpstreamPort;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip_headers - computed: false, optional: true, required: false
  private _ipHeaders?: string[]; 
  public get ipHeaders() {
    return this.getListAttribute('ip_headers');
  }
  public set ipHeaders(value: string[]) {
    this._ipHeaders = value;
  }
  public resetIpHeaders() {
    this._ipHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHeadersInput() {
    return this._ipHeaders;
  }

  // is_cdn - computed: false, optional: true, required: false
  private _isCdn?: number; 
  public get isCdn() {
    return this.getNumberAttribute('is_cdn');
  }
  public set isCdn(value: number) {
    this._isCdn = value;
  }
  public resetIsCdn() {
    this._isCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCdnInput() {
    return this._isCdn;
  }

  // is_http2 - computed: false, optional: true, required: false
  private _isHttp2?: number; 
  public get isHttp2() {
    return this.getNumberAttribute('is_http2');
  }
  public set isHttp2(value: number) {
    this._isHttp2 = value;
  }
  public resetIsHttp2() {
    this._isHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttp2Input() {
    return this._isHttp2;
  }

  // is_keep_alive - computed: false, optional: true, required: false
  private _isKeepAlive?: string; 
  public get isKeepAlive() {
    return this.getStringAttribute('is_keep_alive');
  }
  public set isKeepAlive(value: string) {
    this._isKeepAlive = value;
  }
  public resetIsKeepAlive() {
    this._isKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepAliveInput() {
    return this._isKeepAlive;
  }

  // is_websocket - computed: false, optional: true, required: false
  private _isWebsocket?: number; 
  public get isWebsocket() {
    return this.getNumberAttribute('is_websocket');
  }
  public set isWebsocket(value: number) {
    this._isWebsocket = value;
  }
  public resetIsWebsocket() {
    this._isWebsocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWebsocketInput() {
    return this._isWebsocket;
  }

  // load_balance - computed: false, optional: true, required: false
  private _loadBalance?: string; 
  public get loadBalance() {
    return this.getStringAttribute('load_balance');
  }
  public set loadBalance(value: string) {
    this._loadBalance = value;
  }
  public resetLoadBalance() {
    this._loadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // proxy_read_timeout - computed: false, optional: true, required: false
  private _proxyReadTimeout?: number; 
  public get proxyReadTimeout() {
    return this.getNumberAttribute('proxy_read_timeout');
  }
  public set proxyReadTimeout(value: number) {
    this._proxyReadTimeout = value;
  }
  public resetProxyReadTimeout() {
    this._proxyReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyReadTimeoutInput() {
    return this._proxyReadTimeout;
  }

  // proxy_send_timeout - computed: false, optional: true, required: false
  private _proxySendTimeout?: number; 
  public get proxySendTimeout() {
    return this.getNumberAttribute('proxy_send_timeout');
  }
  public set proxySendTimeout(value: number) {
    this._proxySendTimeout = value;
  }
  public resetProxySendTimeout() {
    this._proxySendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySendTimeoutInput() {
    return this._proxySendTimeout;
  }

  // sni_host - computed: false, optional: true, required: false
  private _sniHost?: string; 
  public get sniHost() {
    return this.getStringAttribute('sni_host');
  }
  public set sniHost(value: string) {
    this._sniHost = value;
  }
  public resetSniHost() {
    this._sniHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniHostInput() {
    return this._sniHost;
  }

  // sni_type - computed: false, optional: true, required: false
  private _sniType?: number; 
  public get sniType() {
    return this.getNumberAttribute('sni_type');
  }
  public set sniType(value: number) {
    this._sniType = value;
  }
  public resetSniType() {
    this._sniType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniTypeInput() {
    return this._sniType;
  }

  // src_list - computed: false, optional: true, required: false
  private _srcList?: string[]; 
  public get srcList() {
    return this.getListAttribute('src_list');
  }
  public set srcList(value: string[]) {
    this._srcList = value;
  }
  public resetSrcList() {
    this._srcList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcListInput() {
    return this._srcList;
  }

  // ssl_id - computed: false, optional: true, required: false
  private _sslId?: string; 
  public get sslId() {
    return this.getStringAttribute('ssl_id');
  }
  public set sslId(value: string) {
    this._sslId = value;
  }
  public resetSslId() {
    this._sslId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslIdInput() {
    return this._sslId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: number; 
  public get tlsVersion() {
    return this.getNumberAttribute('tls_version');
  }
  public set tlsVersion(value: number) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }

  // upstream_domain - computed: false, optional: true, required: false
  private _upstreamDomain?: string; 
  public get upstreamDomain() {
    return this.getStringAttribute('upstream_domain');
  }
  public set upstreamDomain(value: string) {
    this._upstreamDomain = value;
  }
  public resetUpstreamDomain() {
    this._upstreamDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamDomainInput() {
    return this._upstreamDomain;
  }

  // upstream_scheme - computed: false, optional: true, required: false
  private _upstreamScheme?: string; 
  public get upstreamScheme() {
    return this.getStringAttribute('upstream_scheme');
  }
  public set upstreamScheme(value: string) {
    this._upstreamScheme = value;
  }
  public resetUpstreamScheme() {
    this._upstreamScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamSchemeInput() {
    return this._upstreamScheme;
  }

  // upstream_type - computed: false, optional: true, required: false
  private _upstreamType?: number; 
  public get upstreamType() {
    return this.getNumberAttribute('upstream_type');
  }
  public set upstreamType(value: number) {
    this._upstreamType = value;
  }
  public resetUpstreamType() {
    this._upstreamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamTypeInput() {
    return this._upstreamType;
  }

  // weights - computed: false, optional: true, required: false
  private _weights?: number[]; 
  public get weights() {
    return this.getNumberListAttribute('weights');
  }
  public set weights(value: number[]) {
    this._weights = value;
  }
  public resetWeights() {
    this._weights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightsInput() {
    return this._weights;
  }

  // xff_reset - computed: false, optional: true, required: false
  private _xffReset?: number; 
  public get xffReset() {
    return this.getNumberAttribute('xff_reset');
  }
  public set xffReset(value: number) {
    this._xffReset = value;
  }
  public resetXffReset() {
    this._xffReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffResetInput() {
    return this._xffReset;
  }

  // ports - computed: false, optional: false, required: true
  private _ports = new WafSaasDomainPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: WafSaasDomainPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_check: cdktf.numberToTerraform(this._activeCheck),
      api_safe_status: cdktf.numberToTerraform(this._apiSafeStatus),
      bot_status: cdktf.numberToTerraform(this._botStatus),
      cert: cdktf.stringToTerraform(this._cert),
      cert_type: cdktf.numberToTerraform(this._certType),
      cipher_template: cdktf.numberToTerraform(this._cipherTemplate),
      ciphers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ciphers),
      cls_status: cdktf.numberToTerraform(this._clsStatus),
      domain: cdktf.stringToTerraform(this._domain),
      https_rewrite: cdktf.numberToTerraform(this._httpsRewrite),
      https_upstream_port: cdktf.stringToTerraform(this._httpsUpstreamPort),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipHeaders),
      is_cdn: cdktf.numberToTerraform(this._isCdn),
      is_http2: cdktf.numberToTerraform(this._isHttp2),
      is_keep_alive: cdktf.stringToTerraform(this._isKeepAlive),
      is_websocket: cdktf.numberToTerraform(this._isWebsocket),
      load_balance: cdktf.stringToTerraform(this._loadBalance),
      private_key: cdktf.stringToTerraform(this._privateKey),
      proxy_read_timeout: cdktf.numberToTerraform(this._proxyReadTimeout),
      proxy_send_timeout: cdktf.numberToTerraform(this._proxySendTimeout),
      sni_host: cdktf.stringToTerraform(this._sniHost),
      sni_type: cdktf.numberToTerraform(this._sniType),
      src_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcList),
      ssl_id: cdktf.stringToTerraform(this._sslId),
      status: cdktf.numberToTerraform(this._status),
      tls_version: cdktf.numberToTerraform(this._tlsVersion),
      upstream_domain: cdktf.stringToTerraform(this._upstreamDomain),
      upstream_scheme: cdktf.stringToTerraform(this._upstreamScheme),
      upstream_type: cdktf.numberToTerraform(this._upstreamType),
      weights: cdktf.listMapper(cdktf.numberToTerraform, false)(this._weights),
      xff_reset: cdktf.numberToTerraform(this._xffReset),
      ports: cdktf.listMapper(wafSaasDomainPortsToTerraform, true)(this._ports.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_check: {
        value: cdktf.numberToHclTerraform(this._activeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_safe_status: {
        value: cdktf.numberToHclTerraform(this._apiSafeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bot_status: {
        value: cdktf.numberToHclTerraform(this._botStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_type: {
        value: cdktf.numberToHclTerraform(this._certType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cipher_template: {
        value: cdktf.numberToHclTerraform(this._cipherTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ciphers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ciphers),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      cls_status: {
        value: cdktf.numberToHclTerraform(this._clsStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_rewrite: {
        value: cdktf.numberToHclTerraform(this._httpsRewrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_upstream_port: {
        value: cdktf.stringToHclTerraform(this._httpsUpstreamPort),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipHeaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_cdn: {
        value: cdktf.numberToHclTerraform(this._isCdn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_http2: {
        value: cdktf.numberToHclTerraform(this._isHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_keep_alive: {
        value: cdktf.stringToHclTerraform(this._isKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_websocket: {
        value: cdktf.numberToHclTerraform(this._isWebsocket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balance: {
        value: cdktf.stringToHclTerraform(this._loadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_read_timeout: {
        value: cdktf.numberToHclTerraform(this._proxyReadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_send_timeout: {
        value: cdktf.numberToHclTerraform(this._proxySendTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sni_host: {
        value: cdktf.stringToHclTerraform(this._sniHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_type: {
        value: cdktf.numberToHclTerraform(this._sniType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_id: {
        value: cdktf.stringToHclTerraform(this._sslId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_version: {
        value: cdktf.numberToHclTerraform(this._tlsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upstream_domain: {
        value: cdktf.stringToHclTerraform(this._upstreamDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_scheme: {
        value: cdktf.stringToHclTerraform(this._upstreamScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_type: {
        value: cdktf.numberToHclTerraform(this._upstreamType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weights: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._weights),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      xff_reset: {
        value: cdktf.numberToHclTerraform(this._xffReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ports: {
        value: cdktf.listMapperHcl(wafSaasDomainPortsToHclTerraform, true)(this._ports.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafSaasDomainPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
