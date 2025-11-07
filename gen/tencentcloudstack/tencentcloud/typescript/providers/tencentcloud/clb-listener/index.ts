// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the client certificate. NOTES: Only supports listeners of `HTTPS` and `TCP_SSL` protocol and must be set when the ssl mode is `MUTUAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#certificate_ca_id ClbListener#certificate_ca_id}
  */
  readonly certificateCaId?: string;
  /**
  * ID of the server certificate. NOTES: Only supports listeners of `HTTPS` and `TCP_SSL` protocol and must be set when it is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#certificate_id ClbListener#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Type of certificate. Valid values: `UNIDIRECTIONAL`, `MUTUAL`. NOTES: Only supports listeners of `HTTPS` and `TCP_SSL` protocol and must be set when it is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#certificate_ssl_mode ClbListener#certificate_ssl_mode}
  */
  readonly certificateSslMode?: string;
  /**
  * ID of the CLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#clb_id ClbListener#clb_id}
  */
  readonly clbId: string;
  /**
  * Whether to send the TCP RST packet to the client when unbinding a real server. This parameter is applicable to TCP listeners only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#deregister_target_rst ClbListener#deregister_target_rst}
  */
  readonly deregisterTargetRst?: boolean | cdktf.IResolvable;
  /**
  * This parameter is used to specify the end port and is required when creating a port range listener. Only one member can be passed in when inputting the `Ports` parameter, which is used to specify the start port. If you want to try the port range feature, please [submit a ticket](https://console.cloud.tencent.com/workorder/category).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#end_port ClbListener#end_port}
  */
  readonly endPort?: number;
  /**
  * Enable H2C switch for intranet HTTP listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#h2c_switch ClbListener#h2c_switch}
  */
  readonly h2CSwitch?: boolean | cdktf.IResolvable;
  /**
  * Health check protocol. When the value of `health_check_type` of the health check protocol is `CUSTOM`, this field is required, which represents the input format of the health check. Valid values: `HEX`, `TEXT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_context_type ClbListener#health_check_context_type}
  */
  readonly healthCheckContextType?: string;
  /**
  * Health threshold of health check, and the default is `3`. If a success result is returned for the health check for 3 consecutive times, the backend CVM is identified as healthy. The value range is 2-10. NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in tencentcloud_clb_listener_rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_health_num ClbListener#health_check_health_num}
  */
  readonly healthCheckHealthNum?: number;
  /**
  * HTTP health check code of TCP listener, Valid value ranges: [1~31]. When the value of `health_check_type` of the health check protocol is `HTTP`, this field is required. Valid values: `1`, `2`, `4`, `8`, `16`. `1` means http_1xx, `2` means http_2xx, `4` means http_3xx, `8` means http_4xx, `16` means http_5xx.If you want multiple return codes to indicate health, need to add the corresponding values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_http_code ClbListener#health_check_http_code}
  */
  readonly healthCheckHttpCode?: number;
  /**
  * HTTP health check domain of TCP listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_http_domain ClbListener#health_check_http_domain}
  */
  readonly healthCheckHttpDomain?: string;
  /**
  * HTTP health check method of TCP listener. Valid values: `HEAD`, `GET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_http_method ClbListener#health_check_http_method}
  */
  readonly healthCheckHttpMethod?: string;
  /**
  * HTTP health check path of TCP listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_http_path ClbListener#health_check_http_path}
  */
  readonly healthCheckHttpPath?: string;
  /**
  * The HTTP version of the backend service. When the value of `health_check_type` of the health check protocol is `HTTP`, this field is required. Valid values: `HTTP/1.0`, `HTTP/1.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_http_version ClbListener#health_check_http_version}
  */
  readonly healthCheckHttpVersion?: string;
  /**
  * Interval time of health check. Valid value ranges: [2~300] sec. and the default is 5 sec. NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_interval_time ClbListener#health_check_interval_time}
  */
  readonly healthCheckIntervalTime?: number;
  /**
  * The health check port is the port of the backend service by default. Unless you want to specify a specific port, it is recommended to leave it blank. Only applicable to TCP/UDP listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_port ClbListener#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * It represents the result returned by the health check. When the value of `health_check_type` of the health check protocol is `CUSTOM`, this field is required. Only ASCII visible characters are allowed and the maximum length is 500. When `health_check_context_type` value is `HEX`, the characters of SendContext and RecvContext can only be selected in `0123456789ABCDEF` and the length must be even digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_recv_context ClbListener#health_check_recv_context}
  */
  readonly healthCheckRecvContext?: string;
  /**
  * It represents the content of the request sent by the health check. When the value of `health_check_type` of the health check protocol is `CUSTOM`, this field is required. Only visible ASCII characters are allowed and the maximum length is 500. When `health_check_context_type` value is `HEX`, the characters of SendContext and RecvContext can only be selected in `0123456789ABCDEF` and the length must be even digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_send_context ClbListener#health_check_send_context}
  */
  readonly healthCheckSendContext?: string;
  /**
  * Indicates whether health check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_switch ClbListener#health_check_switch}
  */
  readonly healthCheckSwitch?: boolean | cdktf.IResolvable;
  /**
  * Response timeout of health check. Valid value ranges: [2~60] sec. Default is 2 sec. Response timeout needs to be less than check interval. NOTES: Only supports listeners of `TCP`,`UDP`,`TCP_SSL` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_time_out ClbListener#health_check_time_out}
  */
  readonly healthCheckTimeOut?: number;
  /**
  * Protocol used for health check. Valid values: `CUSTOM`, `TCP`, `HTTP`,`HTTPS`, `PING`, `GRPC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_type ClbListener#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Unhealthy threshold of health check, and the default is `3`. If a success result is returned for the health check 3 consecutive times, the CVM is identified as unhealthy. The value range is [2-10]. NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_check_unhealth_num ClbListener#health_check_unhealth_num}
  */
  readonly healthCheckUnhealthNum?: number;
  /**
  * Specifies the type of health check source IP. `0` (default): CLB VIP. `1`: 100.64 IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#health_source_ip_type ClbListener#health_source_ip_type}
  */
  readonly healthSourceIpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#id ClbListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Connection idle timeout period (in seconds). It's only available to TCP listeners. Value range: 300-900 for shared and dedicated instances; 300-2000 for LCU-supported CLB instances. It defaults to 900. To set a period longer than 2000 seconds (up to 3600 seconds). Please submit a work order for processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#idle_connect_timeout ClbListener#idle_connect_timeout}
  */
  readonly idleConnectTimeout?: number;
  /**
  * Whether to enable a persistent connection. This parameter is applicable only to HTTP and HTTPS listeners. Valid values: 0 (disable; default value) and 1 (enable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#keepalive_enable ClbListener#keepalive_enable}
  */
  readonly keepaliveEnable?: number;
  /**
  * Name of the CLB listener, and available values can only be Chinese characters, English letters, numbers, underscore and hyphen '-'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#listener_name ClbListener#listener_name}
  */
  readonly listenerName: string;
  /**
  * Port of the CLB listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#port ClbListener#port}
  */
  readonly port?: number;
  /**
  * Type of protocol within the listener. Valid values: `TCP`, `UDP`, `HTTP`, `HTTPS`, `TCP_SSL` and `QUIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#protocol ClbListener#protocol}
  */
  readonly protocol: string;
  /**
  * Scheduling method of the CLB listener, and available values are 'WRR' and 'LEAST_CONN'. The default is 'WRR'. NOTES: The listener of `HTTP` and `HTTPS` protocol additionally supports the `IP Hash` method. NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#scheduler ClbListener#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Time of session persistence within the CLB listener. NOTES: Available when scheduler is specified as `WRR`, and not available when listener protocol is `TCP_SSL`. NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#session_expire_time ClbListener#session_expire_time}
  */
  readonly sessionExpireTime?: number;
  /**
  * Session persistence type. Valid values: `NORMAL`: the default session persistence type; `QUIC_CID`: session persistence by QUIC connection ID. The `QUIC_CID` value can only be configured in UDP listeners. If this field is not specified, the default session persistence type will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#session_type ClbListener#session_type}
  */
  readonly sessionType?: string;
  /**
  * Whether to enable SNAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#snat_enable ClbListener#snat_enable}
  */
  readonly snatEnable?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether SNI is enabled, and only supported with protocol `HTTPS`. If enabled, you can set a certificate for each rule in `tencentcloud_clb_listener_rule`, otherwise all rules have a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#sni_switch ClbListener#sni_switch}
  */
  readonly sniSwitch?: boolean | cdktf.IResolvable;
  /**
  * Backend target type. Valid values: `NODE`, `TARGETGROUP`. `NODE` means to bind ordinary nodes, `TARGETGROUP` means to bind target group. NOTES: TCP/UDP/TCP_SSL listener must configuration, HTTP/HTTPS listener needs to be configured in tencentcloud_clb_listener_rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#target_type ClbListener#target_type}
  */
  readonly targetType?: string;
  /**
  * multi_cert_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#multi_cert_info ClbListener#multi_cert_info}
  */
  readonly multiCertInfo?: ClbListenerMultiCertInfo;
}
export interface ClbListenerMultiCertInfo {
  /**
  * List of server certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#cert_id_list ClbListener#cert_id_list}
  */
  readonly certIdList: string[];
  /**
  * Authentication type. Values: UNIDIRECTIONAL (one-way authentication), MUTUAL (two-way authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#ssl_mode ClbListener#ssl_mode}
  */
  readonly sslMode: string;
}

export function clbListenerMultiCertInfoToTerraform(struct?: ClbListenerMultiCertInfoOutputReference | ClbListenerMultiCertInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certIdList),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
  }
}


export function clbListenerMultiCertInfoToHclTerraform(struct?: ClbListenerMultiCertInfoOutputReference | ClbListenerMultiCertInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certIdList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClbListenerMultiCertInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClbListenerMultiCertInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.certIdList = this._certIdList;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClbListenerMultiCertInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certIdList = undefined;
      this._sslMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certIdList = value.certIdList;
      this._sslMode = value.sslMode;
    }
  }

  // cert_id_list - computed: false, optional: false, required: true
  private _certIdList?: string[]; 
  public get certIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('cert_id_list'));
  }
  public set certIdList(value: string[]) {
    this._certIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdListInput() {
    return this._certIdList;
  }

  // ssl_mode - computed: false, optional: false, required: true
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener tencentcloud_clb_listener}
*/
export class ClbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbListener to import
  * @param importFromId The id of the existing ClbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_listener tencentcloud_clb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: ClbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_listener',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateCaId = config.certificateCaId;
    this._certificateId = config.certificateId;
    this._certificateSslMode = config.certificateSslMode;
    this._clbId = config.clbId;
    this._deregisterTargetRst = config.deregisterTargetRst;
    this._endPort = config.endPort;
    this._h2CSwitch = config.h2CSwitch;
    this._healthCheckContextType = config.healthCheckContextType;
    this._healthCheckHealthNum = config.healthCheckHealthNum;
    this._healthCheckHttpCode = config.healthCheckHttpCode;
    this._healthCheckHttpDomain = config.healthCheckHttpDomain;
    this._healthCheckHttpMethod = config.healthCheckHttpMethod;
    this._healthCheckHttpPath = config.healthCheckHttpPath;
    this._healthCheckHttpVersion = config.healthCheckHttpVersion;
    this._healthCheckIntervalTime = config.healthCheckIntervalTime;
    this._healthCheckPort = config.healthCheckPort;
    this._healthCheckRecvContext = config.healthCheckRecvContext;
    this._healthCheckSendContext = config.healthCheckSendContext;
    this._healthCheckSwitch = config.healthCheckSwitch;
    this._healthCheckTimeOut = config.healthCheckTimeOut;
    this._healthCheckType = config.healthCheckType;
    this._healthCheckUnhealthNum = config.healthCheckUnhealthNum;
    this._healthSourceIpType = config.healthSourceIpType;
    this._id = config.id;
    this._idleConnectTimeout = config.idleConnectTimeout;
    this._keepaliveEnable = config.keepaliveEnable;
    this._listenerName = config.listenerName;
    this._port = config.port;
    this._protocol = config.protocol;
    this._scheduler = config.scheduler;
    this._sessionExpireTime = config.sessionExpireTime;
    this._sessionType = config.sessionType;
    this._snatEnable = config.snatEnable;
    this._sniSwitch = config.sniSwitch;
    this._targetType = config.targetType;
    this._multiCertInfo.internalValue = config.multiCertInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_ca_id - computed: false, optional: true, required: false
  private _certificateCaId?: string; 
  public get certificateCaId() {
    return this.getStringAttribute('certificate_ca_id');
  }
  public set certificateCaId(value: string) {
    this._certificateCaId = value;
  }
  public resetCertificateCaId() {
    this._certificateCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCaIdInput() {
    return this._certificateCaId;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_ssl_mode - computed: false, optional: true, required: false
  private _certificateSslMode?: string; 
  public get certificateSslMode() {
    return this.getStringAttribute('certificate_ssl_mode');
  }
  public set certificateSslMode(value: string) {
    this._certificateSslMode = value;
  }
  public resetCertificateSslMode() {
    this._certificateSslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSslModeInput() {
    return this._certificateSslMode;
  }

  // clb_id - computed: false, optional: false, required: true
  private _clbId?: string; 
  public get clbId() {
    return this.getStringAttribute('clb_id');
  }
  public set clbId(value: string) {
    this._clbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clbIdInput() {
    return this._clbId;
  }

  // deregister_target_rst - computed: true, optional: true, required: false
  private _deregisterTargetRst?: boolean | cdktf.IResolvable; 
  public get deregisterTargetRst() {
    return this.getBooleanAttribute('deregister_target_rst');
  }
  public set deregisterTargetRst(value: boolean | cdktf.IResolvable) {
    this._deregisterTargetRst = value;
  }
  public resetDeregisterTargetRst() {
    this._deregisterTargetRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterTargetRstInput() {
    return this._deregisterTargetRst;
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // h2c_switch - computed: true, optional: true, required: false
  private _h2CSwitch?: boolean | cdktf.IResolvable; 
  public get h2CSwitch() {
    return this.getBooleanAttribute('h2c_switch');
  }
  public set h2CSwitch(value: boolean | cdktf.IResolvable) {
    this._h2CSwitch = value;
  }
  public resetH2CSwitch() {
    this._h2CSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2CSwitchInput() {
    return this._h2CSwitch;
  }

  // health_check_context_type - computed: true, optional: true, required: false
  private _healthCheckContextType?: string; 
  public get healthCheckContextType() {
    return this.getStringAttribute('health_check_context_type');
  }
  public set healthCheckContextType(value: string) {
    this._healthCheckContextType = value;
  }
  public resetHealthCheckContextType() {
    this._healthCheckContextType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckContextTypeInput() {
    return this._healthCheckContextType;
  }

  // health_check_health_num - computed: true, optional: true, required: false
  private _healthCheckHealthNum?: number; 
  public get healthCheckHealthNum() {
    return this.getNumberAttribute('health_check_health_num');
  }
  public set healthCheckHealthNum(value: number) {
    this._healthCheckHealthNum = value;
  }
  public resetHealthCheckHealthNum() {
    this._healthCheckHealthNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHealthNumInput() {
    return this._healthCheckHealthNum;
  }

  // health_check_http_code - computed: false, optional: true, required: false
  private _healthCheckHttpCode?: number; 
  public get healthCheckHttpCode() {
    return this.getNumberAttribute('health_check_http_code');
  }
  public set healthCheckHttpCode(value: number) {
    this._healthCheckHttpCode = value;
  }
  public resetHealthCheckHttpCode() {
    this._healthCheckHttpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpCodeInput() {
    return this._healthCheckHttpCode;
  }

  // health_check_http_domain - computed: false, optional: true, required: false
  private _healthCheckHttpDomain?: string; 
  public get healthCheckHttpDomain() {
    return this.getStringAttribute('health_check_http_domain');
  }
  public set healthCheckHttpDomain(value: string) {
    this._healthCheckHttpDomain = value;
  }
  public resetHealthCheckHttpDomain() {
    this._healthCheckHttpDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpDomainInput() {
    return this._healthCheckHttpDomain;
  }

  // health_check_http_method - computed: true, optional: true, required: false
  private _healthCheckHttpMethod?: string; 
  public get healthCheckHttpMethod() {
    return this.getStringAttribute('health_check_http_method');
  }
  public set healthCheckHttpMethod(value: string) {
    this._healthCheckHttpMethod = value;
  }
  public resetHealthCheckHttpMethod() {
    this._healthCheckHttpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpMethodInput() {
    return this._healthCheckHttpMethod;
  }

  // health_check_http_path - computed: false, optional: true, required: false
  private _healthCheckHttpPath?: string; 
  public get healthCheckHttpPath() {
    return this.getStringAttribute('health_check_http_path');
  }
  public set healthCheckHttpPath(value: string) {
    this._healthCheckHttpPath = value;
  }
  public resetHealthCheckHttpPath() {
    this._healthCheckHttpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpPathInput() {
    return this._healthCheckHttpPath;
  }

  // health_check_http_version - computed: false, optional: true, required: false
  private _healthCheckHttpVersion?: string; 
  public get healthCheckHttpVersion() {
    return this.getStringAttribute('health_check_http_version');
  }
  public set healthCheckHttpVersion(value: string) {
    this._healthCheckHttpVersion = value;
  }
  public resetHealthCheckHttpVersion() {
    this._healthCheckHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpVersionInput() {
    return this._healthCheckHttpVersion;
  }

  // health_check_interval_time - computed: true, optional: true, required: false
  private _healthCheckIntervalTime?: number; 
  public get healthCheckIntervalTime() {
    return this.getNumberAttribute('health_check_interval_time');
  }
  public set healthCheckIntervalTime(value: number) {
    this._healthCheckIntervalTime = value;
  }
  public resetHealthCheckIntervalTime() {
    this._healthCheckIntervalTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalTimeInput() {
    return this._healthCheckIntervalTime;
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_recv_context - computed: false, optional: true, required: false
  private _healthCheckRecvContext?: string; 
  public get healthCheckRecvContext() {
    return this.getStringAttribute('health_check_recv_context');
  }
  public set healthCheckRecvContext(value: string) {
    this._healthCheckRecvContext = value;
  }
  public resetHealthCheckRecvContext() {
    this._healthCheckRecvContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRecvContextInput() {
    return this._healthCheckRecvContext;
  }

  // health_check_send_context - computed: false, optional: true, required: false
  private _healthCheckSendContext?: string; 
  public get healthCheckSendContext() {
    return this.getStringAttribute('health_check_send_context');
  }
  public set healthCheckSendContext(value: string) {
    this._healthCheckSendContext = value;
  }
  public resetHealthCheckSendContext() {
    this._healthCheckSendContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSendContextInput() {
    return this._healthCheckSendContext;
  }

  // health_check_switch - computed: true, optional: true, required: false
  private _healthCheckSwitch?: boolean | cdktf.IResolvable; 
  public get healthCheckSwitch() {
    return this.getBooleanAttribute('health_check_switch');
  }
  public set healthCheckSwitch(value: boolean | cdktf.IResolvable) {
    this._healthCheckSwitch = value;
  }
  public resetHealthCheckSwitch() {
    this._healthCheckSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSwitchInput() {
    return this._healthCheckSwitch;
  }

  // health_check_time_out - computed: true, optional: true, required: false
  private _healthCheckTimeOut?: number; 
  public get healthCheckTimeOut() {
    return this.getNumberAttribute('health_check_time_out');
  }
  public set healthCheckTimeOut(value: number) {
    this._healthCheckTimeOut = value;
  }
  public resetHealthCheckTimeOut() {
    this._healthCheckTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeOutInput() {
    return this._healthCheckTimeOut;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // health_check_unhealth_num - computed: true, optional: true, required: false
  private _healthCheckUnhealthNum?: number; 
  public get healthCheckUnhealthNum() {
    return this.getNumberAttribute('health_check_unhealth_num');
  }
  public set healthCheckUnhealthNum(value: number) {
    this._healthCheckUnhealthNum = value;
  }
  public resetHealthCheckUnhealthNum() {
    this._healthCheckUnhealthNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUnhealthNumInput() {
    return this._healthCheckUnhealthNum;
  }

  // health_source_ip_type - computed: true, optional: true, required: false
  private _healthSourceIpType?: number; 
  public get healthSourceIpType() {
    return this.getNumberAttribute('health_source_ip_type');
  }
  public set healthSourceIpType(value: number) {
    this._healthSourceIpType = value;
  }
  public resetHealthSourceIpType() {
    this._healthSourceIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthSourceIpTypeInput() {
    return this._healthSourceIpType;
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

  // idle_connect_timeout - computed: true, optional: true, required: false
  private _idleConnectTimeout?: number; 
  public get idleConnectTimeout() {
    return this.getNumberAttribute('idle_connect_timeout');
  }
  public set idleConnectTimeout(value: number) {
    this._idleConnectTimeout = value;
  }
  public resetIdleConnectTimeout() {
    this._idleConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleConnectTimeoutInput() {
    return this._idleConnectTimeout;
  }

  // keepalive_enable - computed: true, optional: true, required: false
  private _keepaliveEnable?: number; 
  public get keepaliveEnable() {
    return this.getNumberAttribute('keepalive_enable');
  }
  public set keepaliveEnable(value: number) {
    this._keepaliveEnable = value;
  }
  public resetKeepaliveEnable() {
    this._keepaliveEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveEnableInput() {
    return this._keepaliveEnable;
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // listener_name - computed: false, optional: false, required: true
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
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

  // scheduler - computed: false, optional: true, required: false
  private _scheduler?: string; 
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }
  public set scheduler(value: string) {
    this._scheduler = value;
  }
  public resetScheduler() {
    this._scheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }

  // session_expire_time - computed: false, optional: true, required: false
  private _sessionExpireTime?: number; 
  public get sessionExpireTime() {
    return this.getNumberAttribute('session_expire_time');
  }
  public set sessionExpireTime(value: number) {
    this._sessionExpireTime = value;
  }
  public resetSessionExpireTime() {
    this._sessionExpireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExpireTimeInput() {
    return this._sessionExpireTime;
  }

  // session_type - computed: true, optional: true, required: false
  private _sessionType?: string; 
  public get sessionType() {
    return this.getStringAttribute('session_type');
  }
  public set sessionType(value: string) {
    this._sessionType = value;
  }
  public resetSessionType() {
    this._sessionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTypeInput() {
    return this._sessionType;
  }

  // snat_enable - computed: true, optional: true, required: false
  private _snatEnable?: boolean | cdktf.IResolvable; 
  public get snatEnable() {
    return this.getBooleanAttribute('snat_enable');
  }
  public set snatEnable(value: boolean | cdktf.IResolvable) {
    this._snatEnable = value;
  }
  public resetSnatEnable() {
    this._snatEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatEnableInput() {
    return this._snatEnable;
  }

  // sni_switch - computed: false, optional: true, required: false
  private _sniSwitch?: boolean | cdktf.IResolvable; 
  public get sniSwitch() {
    return this.getBooleanAttribute('sni_switch');
  }
  public set sniSwitch(value: boolean | cdktf.IResolvable) {
    this._sniSwitch = value;
  }
  public resetSniSwitch() {
    this._sniSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniSwitchInput() {
    return this._sniSwitch;
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // multi_cert_info - computed: false, optional: true, required: false
  private _multiCertInfo = new ClbListenerMultiCertInfoOutputReference(this, "multi_cert_info");
  public get multiCertInfo() {
    return this._multiCertInfo;
  }
  public putMultiCertInfo(value: ClbListenerMultiCertInfo) {
    this._multiCertInfo.internalValue = value;
  }
  public resetMultiCertInfo() {
    this._multiCertInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiCertInfoInput() {
    return this._multiCertInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_ca_id: cdktf.stringToTerraform(this._certificateCaId),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      certificate_ssl_mode: cdktf.stringToTerraform(this._certificateSslMode),
      clb_id: cdktf.stringToTerraform(this._clbId),
      deregister_target_rst: cdktf.booleanToTerraform(this._deregisterTargetRst),
      end_port: cdktf.numberToTerraform(this._endPort),
      h2c_switch: cdktf.booleanToTerraform(this._h2CSwitch),
      health_check_context_type: cdktf.stringToTerraform(this._healthCheckContextType),
      health_check_health_num: cdktf.numberToTerraform(this._healthCheckHealthNum),
      health_check_http_code: cdktf.numberToTerraform(this._healthCheckHttpCode),
      health_check_http_domain: cdktf.stringToTerraform(this._healthCheckHttpDomain),
      health_check_http_method: cdktf.stringToTerraform(this._healthCheckHttpMethod),
      health_check_http_path: cdktf.stringToTerraform(this._healthCheckHttpPath),
      health_check_http_version: cdktf.stringToTerraform(this._healthCheckHttpVersion),
      health_check_interval_time: cdktf.numberToTerraform(this._healthCheckIntervalTime),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      health_check_recv_context: cdktf.stringToTerraform(this._healthCheckRecvContext),
      health_check_send_context: cdktf.stringToTerraform(this._healthCheckSendContext),
      health_check_switch: cdktf.booleanToTerraform(this._healthCheckSwitch),
      health_check_time_out: cdktf.numberToTerraform(this._healthCheckTimeOut),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      health_check_unhealth_num: cdktf.numberToTerraform(this._healthCheckUnhealthNum),
      health_source_ip_type: cdktf.numberToTerraform(this._healthSourceIpType),
      id: cdktf.stringToTerraform(this._id),
      idle_connect_timeout: cdktf.numberToTerraform(this._idleConnectTimeout),
      keepalive_enable: cdktf.numberToTerraform(this._keepaliveEnable),
      listener_name: cdktf.stringToTerraform(this._listenerName),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      session_expire_time: cdktf.numberToTerraform(this._sessionExpireTime),
      session_type: cdktf.stringToTerraform(this._sessionType),
      snat_enable: cdktf.booleanToTerraform(this._snatEnable),
      sni_switch: cdktf.booleanToTerraform(this._sniSwitch),
      target_type: cdktf.stringToTerraform(this._targetType),
      multi_cert_info: clbListenerMultiCertInfoToTerraform(this._multiCertInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_ca_id: {
        value: cdktf.stringToHclTerraform(this._certificateCaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_ssl_mode: {
        value: cdktf.stringToHclTerraform(this._certificateSslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clb_id: {
        value: cdktf.stringToHclTerraform(this._clbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deregister_target_rst: {
        value: cdktf.booleanToHclTerraform(this._deregisterTargetRst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_port: {
        value: cdktf.numberToHclTerraform(this._endPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      h2c_switch: {
        value: cdktf.booleanToHclTerraform(this._h2CSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_context_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckContextType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_health_num: {
        value: cdktf.numberToHclTerraform(this._healthCheckHealthNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_http_code: {
        value: cdktf.numberToHclTerraform(this._healthCheckHttpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_http_domain: {
        value: cdktf.stringToHclTerraform(this._healthCheckHttpDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_http_method: {
        value: cdktf.stringToHclTerraform(this._healthCheckHttpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_http_path: {
        value: cdktf.stringToHclTerraform(this._healthCheckHttpPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_http_version: {
        value: cdktf.stringToHclTerraform(this._healthCheckHttpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_interval_time: {
        value: cdktf.numberToHclTerraform(this._healthCheckIntervalTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_recv_context: {
        value: cdktf.stringToHclTerraform(this._healthCheckRecvContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_send_context: {
        value: cdktf.stringToHclTerraform(this._healthCheckSendContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_switch: {
        value: cdktf.booleanToHclTerraform(this._healthCheckSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_time_out: {
        value: cdktf.numberToHclTerraform(this._healthCheckTimeOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_unhealth_num: {
        value: cdktf.numberToHclTerraform(this._healthCheckUnhealthNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_source_ip_type: {
        value: cdktf.numberToHclTerraform(this._healthSourceIpType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_connect_timeout: {
        value: cdktf.numberToHclTerraform(this._idleConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive_enable: {
        value: cdktf.numberToHclTerraform(this._keepaliveEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_name: {
        value: cdktf.stringToHclTerraform(this._listenerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler: {
        value: cdktf.stringToHclTerraform(this._scheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_expire_time: {
        value: cdktf.numberToHclTerraform(this._sessionExpireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_type: {
        value: cdktf.stringToHclTerraform(this._sessionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_enable: {
        value: cdktf.booleanToHclTerraform(this._snatEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sni_switch: {
        value: cdktf.booleanToHclTerraform(this._sniSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_cert_info: {
        value: clbListenerMultiCertInfoToHclTerraform(this._multiCertInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClbListenerMultiCertInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
