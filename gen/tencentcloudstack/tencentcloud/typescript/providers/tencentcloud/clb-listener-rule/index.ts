// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbListenerRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the client certificate. NOTES: Only supports listeners of HTTPS protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#certificate_ca_id ClbListenerRule#certificate_ca_id}
  */
  readonly certificateCaId?: string;
  /**
  * ID of the server certificate. NOTES: Only supports listeners of HTTPS protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#certificate_id ClbListenerRule#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Type of certificate. Valid values: `UNIDIRECTIONAL`, `MUTUAL`. NOTES: Only supports listeners of HTTPS protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#certificate_ssl_mode ClbListenerRule#certificate_ssl_mode}
  */
  readonly certificateSslMode?: string;
  /**
  * ID of CLB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#clb_id ClbListenerRule#clb_id}
  */
  readonly clbId: string;
  /**
  * Domain name of the listener rule. Single domain rules are passed to `domain`, and multi domain rules are passed to `domains`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#domain ClbListenerRule#domain}
  */
  readonly domain?: string;
  /**
  * Domain name list of the listener rule. Single domain rules are passed to `domain`, and multi domain rules are passed to `domains`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#domains ClbListenerRule#domains}
  */
  readonly domains?: string[];
  /**
  * Forwarding protocol between the CLB instance and real server. Valid values: `HTTP`, `HTTPS`, `GRPC`, `GRPCS`, `TRPC`. The default is `HTTP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#forward_type ClbListenerRule#forward_type}
  */
  readonly forwardType?: string;
  /**
  * Health threshold of health check, and the default is `3`. If a success result is returned for the health check 3 consecutive times, indicates that the forwarding is normal. The value range is [2-10]. NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_health_num ClbListenerRule#health_check_health_num}
  */
  readonly healthCheckHealthNum?: number;
  /**
  * HTTP Status Code. The default is 31. Valid value ranges: [1~31]. `1 means the return value '1xx' is health. `2` means the return value '2xx' is health. `4` means the return value '3xx' is health. `8` means the return value '4xx' is health. 16 means the return value '5xx' is health. If you want multiple return codes to indicate health, need to add the corresponding values. NOTES: The 'HTTP' health check of the 'TCP' listener only supports specifying one health check status code. NOTES: Only supports listeners of 'HTTP' and 'HTTPS' protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_http_code ClbListenerRule#health_check_http_code}
  */
  readonly healthCheckHttpCode?: number;
  /**
  * Domain name of health check. NOTES: Only supports listeners of `HTTP` and `HTTPS` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_http_domain ClbListenerRule#health_check_http_domain}
  */
  readonly healthCheckHttpDomain?: string;
  /**
  * Methods of health check. NOTES: Only supports listeners of `HTTP` and `HTTPS` protocol. The default is `HEAD`, the available value are `HEAD` and `GET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_http_method ClbListenerRule#health_check_http_method}
  */
  readonly healthCheckHttpMethod?: string;
  /**
  * Path of health check. NOTES: Only supports listeners of `HTTP` and `HTTPS` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_http_path ClbListenerRule#health_check_http_path}
  */
  readonly healthCheckHttpPath?: string;
  /**
  * Interval time of health check. Valid value ranges: (2~300) sec. and the default is `5` sec. NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_interval_time ClbListenerRule#health_check_interval_time}
  */
  readonly healthCheckIntervalTime?: number;
  /**
  * Customize detection related parameters. Health check port, defaults to the port of the backend service, unless you want to specify a specific port, it is recommended to leave it blank. (Applicable only to TCP/UDP listeners).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_port ClbListenerRule#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Indicates whether health check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_switch ClbListenerRule#health_check_switch}
  */
  readonly healthCheckSwitch?: boolean | cdktf.IResolvable;
  /**
  * Time out of health check. The value range is [2-60](SEC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_time_out ClbListenerRule#health_check_time_out}
  */
  readonly healthCheckTimeOut?: number;
  /**
  * Type of health check. Valid value is `CUSTOM`, `PING`, `TCP`, `HTTP`, `HTTPS`, `GRPC`, `GRPCS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_type ClbListenerRule#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Unhealthy threshold of health check, and the default is `3`. If the unhealthy result is returned 3 consecutive times, indicates that the forwarding is abnormal. The value range is [2-10].  NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_check_unhealth_num ClbListenerRule#health_check_unhealth_num}
  */
  readonly healthCheckUnhealthNum?: number;
  /**
  * Specifies the type of health check source IP. `0` (default): CLB VIP. `1`: 100.64 IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#health_source_ip_type ClbListenerRule#health_source_ip_type}
  */
  readonly healthSourceIpType?: number;
  /**
  * Indicate to apply HTTP2.0 protocol or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#http2_switch ClbListenerRule#http2_switch}
  */
  readonly http2Switch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#id ClbListenerRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of CLB listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#listener_id ClbListenerRule#listener_id}
  */
  readonly listenerId: string;
  /**
  * Whether to enable QUIC. Note: QUIC can be enabled only for HTTPS domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#quic ClbListenerRule#quic}
  */
  readonly quic?: boolean | cdktf.IResolvable;
  /**
  * Scheduling method of the CLB listener rules. Valid values: `WRR`, `IP HASH`, `LEAST_CONN`. The default is `WRR`.  NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#scheduler ClbListenerRule#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Time of session persistence within the CLB listener. NOTES: Available when scheduler is specified as `WRR`, and not available when listener protocol is `TCP_SSL`.  NOTES: TCP/UDP/TCP_SSL listener allows direct configuration, HTTP/HTTPS listener needs to be configured in `tencentcloud_clb_listener_rule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#session_expire_time ClbListenerRule#session_expire_time}
  */
  readonly sessionExpireTime?: number;
  /**
  * Backend target type. Valid values: `NODE`, `TARGETGROUP`. `NODE` means to bind ordinary nodes, `TARGETGROUP` means to bind target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#target_type ClbListenerRule#target_type}
  */
  readonly targetType?: string;
  /**
  * Url of the listener rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#url ClbListenerRule#url}
  */
  readonly url: string;
  /**
  * multi_cert_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#multi_cert_info ClbListenerRule#multi_cert_info}
  */
  readonly multiCertInfo?: ClbListenerRuleMultiCertInfo;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#oauth ClbListenerRule#oauth}
  */
  readonly oauth?: ClbListenerRuleOauth;
}
export interface ClbListenerRuleMultiCertInfo {
  /**
  * List of server certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#cert_id_list ClbListenerRule#cert_id_list}
  */
  readonly certIdList: string[];
  /**
  * Authentication type. Values: UNIDIRECTIONAL (one-way authentication), MUTUAL (two-way authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#ssl_mode ClbListenerRule#ssl_mode}
  */
  readonly sslMode: string;
}

export function clbListenerRuleMultiCertInfoToTerraform(struct?: ClbListenerRuleMultiCertInfoOutputReference | ClbListenerRuleMultiCertInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certIdList),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
  }
}


export function clbListenerRuleMultiCertInfoToHclTerraform(struct?: ClbListenerRuleMultiCertInfoOutputReference | ClbListenerRuleMultiCertInfo): any {
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

export class ClbListenerRuleMultiCertInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClbListenerRuleMultiCertInfo | undefined {
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

  public set internalValue(value: ClbListenerRuleMultiCertInfo | undefined) {
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
export interface ClbListenerRuleOauth {
  /**
  * Enable or disable authentication. True: Enabled; False: Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#oauth_enable ClbListenerRule#oauth_enable}
  */
  readonly oauthEnable?: boolean | cdktf.IResolvable;
  /**
  * After all IAPs fail, the request is rejected or released. BYPASS: PASS; REJECT: Reject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#oauth_failure_status ClbListenerRule#oauth_failure_status}
  */
  readonly oauthFailureStatus?: string;
}

export function clbListenerRuleOauthToTerraform(struct?: ClbListenerRuleOauthOutputReference | ClbListenerRuleOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_enable: cdktf.booleanToTerraform(struct!.oauthEnable),
    oauth_failure_status: cdktf.stringToTerraform(struct!.oauthFailureStatus),
  }
}


export function clbListenerRuleOauthToHclTerraform(struct?: ClbListenerRuleOauthOutputReference | ClbListenerRuleOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth_enable: {
      value: cdktf.booleanToHclTerraform(struct!.oauthEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth_failure_status: {
      value: cdktf.stringToHclTerraform(struct!.oauthFailureStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClbListenerRuleOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClbListenerRuleOauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthEnable = this._oauthEnable;
    }
    if (this._oauthFailureStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthFailureStatus = this._oauthFailureStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClbListenerRuleOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauthEnable = undefined;
      this._oauthFailureStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauthEnable = value.oauthEnable;
      this._oauthFailureStatus = value.oauthFailureStatus;
    }
  }

  // oauth_enable - computed: true, optional: true, required: false
  private _oauthEnable?: boolean | cdktf.IResolvable; 
  public get oauthEnable() {
    return this.getBooleanAttribute('oauth_enable');
  }
  public set oauthEnable(value: boolean | cdktf.IResolvable) {
    this._oauthEnable = value;
  }
  public resetOauthEnable() {
    this._oauthEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthEnableInput() {
    return this._oauthEnable;
  }

  // oauth_failure_status - computed: true, optional: true, required: false
  private _oauthFailureStatus?: string; 
  public get oauthFailureStatus() {
    return this.getStringAttribute('oauth_failure_status');
  }
  public set oauthFailureStatus(value: string) {
    this._oauthFailureStatus = value;
  }
  public resetOauthFailureStatus() {
    this._oauthFailureStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthFailureStatusInput() {
    return this._oauthFailureStatus;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule tencentcloud_clb_listener_rule}
*/
export class ClbListenerRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_listener_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbListenerRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbListenerRule to import
  * @param importFromId The id of the existing ClbListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbListenerRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_listener_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/clb_listener_rule tencentcloud_clb_listener_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbListenerRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ClbListenerRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_listener_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._domain = config.domain;
    this._domains = config.domains;
    this._forwardType = config.forwardType;
    this._healthCheckHealthNum = config.healthCheckHealthNum;
    this._healthCheckHttpCode = config.healthCheckHttpCode;
    this._healthCheckHttpDomain = config.healthCheckHttpDomain;
    this._healthCheckHttpMethod = config.healthCheckHttpMethod;
    this._healthCheckHttpPath = config.healthCheckHttpPath;
    this._healthCheckIntervalTime = config.healthCheckIntervalTime;
    this._healthCheckPort = config.healthCheckPort;
    this._healthCheckSwitch = config.healthCheckSwitch;
    this._healthCheckTimeOut = config.healthCheckTimeOut;
    this._healthCheckType = config.healthCheckType;
    this._healthCheckUnhealthNum = config.healthCheckUnhealthNum;
    this._healthSourceIpType = config.healthSourceIpType;
    this._http2Switch = config.http2Switch;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._quic = config.quic;
    this._scheduler = config.scheduler;
    this._sessionExpireTime = config.sessionExpireTime;
    this._targetType = config.targetType;
    this._url = config.url;
    this._multiCertInfo.internalValue = config.multiCertInfo;
    this._oauth.internalValue = config.oauth;
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

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // forward_type - computed: true, optional: true, required: false
  private _forwardType?: string; 
  public get forwardType() {
    return this.getStringAttribute('forward_type');
  }
  public set forwardType(value: string) {
    this._forwardType = value;
  }
  public resetForwardType() {
    this._forwardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTypeInput() {
    return this._forwardType;
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

  // health_check_http_code - computed: true, optional: true, required: false
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

  // health_check_http_domain - computed: true, optional: true, required: false
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

  // health_check_http_path - computed: true, optional: true, required: false
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

  // http2_switch - computed: true, optional: true, required: false
  private _http2Switch?: boolean | cdktf.IResolvable; 
  public get http2Switch() {
    return this.getBooleanAttribute('http2_switch');
  }
  public set http2Switch(value: boolean | cdktf.IResolvable) {
    this._http2Switch = value;
  }
  public resetHttp2Switch() {
    this._http2Switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2SwitchInput() {
    return this._http2Switch;
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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // quic - computed: true, optional: true, required: false
  private _quic?: boolean | cdktf.IResolvable; 
  public get quic() {
    return this.getBooleanAttribute('quic');
  }
  public set quic(value: boolean | cdktf.IResolvable) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
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

  // target_type - computed: false, optional: true, required: false
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // multi_cert_info - computed: false, optional: true, required: false
  private _multiCertInfo = new ClbListenerRuleMultiCertInfoOutputReference(this, "multi_cert_info");
  public get multiCertInfo() {
    return this._multiCertInfo;
  }
  public putMultiCertInfo(value: ClbListenerRuleMultiCertInfo) {
    this._multiCertInfo.internalValue = value;
  }
  public resetMultiCertInfo() {
    this._multiCertInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiCertInfoInput() {
    return this._multiCertInfo.internalValue;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new ClbListenerRuleOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: ClbListenerRuleOauth) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
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
      domain: cdktf.stringToTerraform(this._domain),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      forward_type: cdktf.stringToTerraform(this._forwardType),
      health_check_health_num: cdktf.numberToTerraform(this._healthCheckHealthNum),
      health_check_http_code: cdktf.numberToTerraform(this._healthCheckHttpCode),
      health_check_http_domain: cdktf.stringToTerraform(this._healthCheckHttpDomain),
      health_check_http_method: cdktf.stringToTerraform(this._healthCheckHttpMethod),
      health_check_http_path: cdktf.stringToTerraform(this._healthCheckHttpPath),
      health_check_interval_time: cdktf.numberToTerraform(this._healthCheckIntervalTime),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      health_check_switch: cdktf.booleanToTerraform(this._healthCheckSwitch),
      health_check_time_out: cdktf.numberToTerraform(this._healthCheckTimeOut),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      health_check_unhealth_num: cdktf.numberToTerraform(this._healthCheckUnhealthNum),
      health_source_ip_type: cdktf.numberToTerraform(this._healthSourceIpType),
      http2_switch: cdktf.booleanToTerraform(this._http2Switch),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      quic: cdktf.booleanToTerraform(this._quic),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      session_expire_time: cdktf.numberToTerraform(this._sessionExpireTime),
      target_type: cdktf.stringToTerraform(this._targetType),
      url: cdktf.stringToTerraform(this._url),
      multi_cert_info: clbListenerRuleMultiCertInfoToTerraform(this._multiCertInfo.internalValue),
      oauth: clbListenerRuleOauthToTerraform(this._oauth.internalValue),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      forward_type: {
        value: cdktf.stringToHclTerraform(this._forwardType),
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
      http2_switch: {
        value: cdktf.booleanToHclTerraform(this._http2Switch),
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quic: {
        value: cdktf.booleanToHclTerraform(this._quic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_cert_info: {
        value: clbListenerRuleMultiCertInfoToHclTerraform(this._multiCertInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClbListenerRuleMultiCertInfoList",
      },
      oauth: {
        value: clbListenerRuleOauthToHclTerraform(this._oauth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClbListenerRuleOauthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
