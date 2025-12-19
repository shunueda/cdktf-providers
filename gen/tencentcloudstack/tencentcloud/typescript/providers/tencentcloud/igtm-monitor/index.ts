// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IgtmMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Check interval (seconds), optional values 15 60 120 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#check_interval IgtmMonitor#check_interval}
  */
  readonly checkInterval: number;
  /**
  * Detection protocol, optional values `PING`, `TCP`, `HTTP`, `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#check_protocol IgtmMonitor#check_protocol}
  */
  readonly checkProtocol: string;
  /**
  * Continuous period count, optional values 1-5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#continue_period IgtmMonitor#continue_period}
  */
  readonly continuePeriod?: number;
  /**
  * Detector group ID list separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#detector_group_ids IgtmMonitor#detector_group_ids}
  */
  readonly detectorGroupIds: number[];
  /**
  * Monitoring node type, optional values AUTO INTERNAL OVERSEAS IPV6 ALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#detector_style IgtmMonitor#detector_style}
  */
  readonly detectorStyle: string;
  /**
  * Follow 3XX redirect, DISABLED for disabled, ENABLED for enabled, default disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#enable_redirect IgtmMonitor#enable_redirect}
  */
  readonly enableRedirect?: string;
  /**
  * Enable SNI, DISABLED for disabled, ENABLED for enabled, default disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#enable_sni IgtmMonitor#enable_sni}
  */
  readonly enableSni?: string;
  /**
  * Failure rate, values 20 30 40 50 60 70 80 100, default value 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#fail_rate IgtmMonitor#fail_rate}
  */
  readonly failRate: number;
  /**
  * Retry count, optional values 0, 1, 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#fail_times IgtmMonitor#fail_times}
  */
  readonly failTimes: number;
  /**
  * Host setting, default is business domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#host IgtmMonitor#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#id IgtmMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#monitor_name IgtmMonitor#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Packet loss rate alarm threshold, required when CheckProtocol=ping, values 10 30 50 80 90 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#packet_loss_rate IgtmMonitor#packet_loss_rate}
  */
  readonly packetLossRate?: number;
  /**
  * URL path, default is "/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#path IgtmMonitor#path}
  */
  readonly path?: string;
  /**
  * PING packet count, required when CheckProtocol=ping, optional values 20 50 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#ping_num IgtmMonitor#ping_num}
  */
  readonly pingNum?: number;
  /**
  * Return error code threshold, optional values 400 and 500, default value 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#return_code_threshold IgtmMonitor#return_code_threshold}
  */
  readonly returnCodeThreshold?: number;
  /**
  * Check port, optional values between 1-65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#tcp_port IgtmMonitor#tcp_port}
  */
  readonly tcpPort?: number;
  /**
  * Timeout time, unit seconds, optional values 2 3 5 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#timeout IgtmMonitor#timeout}
  */
  readonly timeout: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor tencentcloud_igtm_monitor}
*/
export class IgtmMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_igtm_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IgtmMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IgtmMonitor to import
  * @param importFromId The id of the existing IgtmMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IgtmMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_igtm_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/igtm_monitor tencentcloud_igtm_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IgtmMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: IgtmMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_igtm_monitor',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkInterval = config.checkInterval;
    this._checkProtocol = config.checkProtocol;
    this._continuePeriod = config.continuePeriod;
    this._detectorGroupIds = config.detectorGroupIds;
    this._detectorStyle = config.detectorStyle;
    this._enableRedirect = config.enableRedirect;
    this._enableSni = config.enableSni;
    this._failRate = config.failRate;
    this._failTimes = config.failTimes;
    this._host = config.host;
    this._id = config.id;
    this._monitorName = config.monitorName;
    this._packetLossRate = config.packetLossRate;
    this._path = config.path;
    this._pingNum = config.pingNum;
    this._returnCodeThreshold = config.returnCodeThreshold;
    this._tcpPort = config.tcpPort;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_interval - computed: false, optional: false, required: true
  private _checkInterval?: number; 
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }
  public set checkInterval(value: number) {
    this._checkInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // check_protocol - computed: false, optional: false, required: true
  private _checkProtocol?: string; 
  public get checkProtocol() {
    return this.getStringAttribute('check_protocol');
  }
  public set checkProtocol(value: string) {
    this._checkProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkProtocolInput() {
    return this._checkProtocol;
  }

  // continue_period - computed: true, optional: true, required: false
  private _continuePeriod?: number; 
  public get continuePeriod() {
    return this.getNumberAttribute('continue_period');
  }
  public set continuePeriod(value: number) {
    this._continuePeriod = value;
  }
  public resetContinuePeriod() {
    this._continuePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuePeriodInput() {
    return this._continuePeriod;
  }

  // detector_group_ids - computed: false, optional: false, required: true
  private _detectorGroupIds?: number[]; 
  public get detectorGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('detector_group_ids')));
  }
  public set detectorGroupIds(value: number[]) {
    this._detectorGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorGroupIdsInput() {
    return this._detectorGroupIds;
  }

  // detector_style - computed: false, optional: false, required: true
  private _detectorStyle?: string; 
  public get detectorStyle() {
    return this.getStringAttribute('detector_style');
  }
  public set detectorStyle(value: string) {
    this._detectorStyle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorStyleInput() {
    return this._detectorStyle;
  }

  // enable_redirect - computed: true, optional: true, required: false
  private _enableRedirect?: string; 
  public get enableRedirect() {
    return this.getStringAttribute('enable_redirect');
  }
  public set enableRedirect(value: string) {
    this._enableRedirect = value;
  }
  public resetEnableRedirect() {
    this._enableRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRedirectInput() {
    return this._enableRedirect;
  }

  // enable_sni - computed: true, optional: true, required: false
  private _enableSni?: string; 
  public get enableSni() {
    return this.getStringAttribute('enable_sni');
  }
  public set enableSni(value: string) {
    this._enableSni = value;
  }
  public resetEnableSni() {
    this._enableSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSniInput() {
    return this._enableSni;
  }

  // fail_rate - computed: false, optional: false, required: true
  private _failRate?: number; 
  public get failRate() {
    return this.getNumberAttribute('fail_rate');
  }
  public set failRate(value: number) {
    this._failRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failRateInput() {
    return this._failRate;
  }

  // fail_times - computed: false, optional: false, required: true
  private _failTimes?: number; 
  public get failTimes() {
    return this.getNumberAttribute('fail_times');
  }
  public set failTimes(value: number) {
    this._failTimes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failTimesInput() {
    return this._failTimes;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // monitor_id - computed: true, optional: false, required: false
  public get monitorId() {
    return this.getNumberAttribute('monitor_id');
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // packet_loss_rate - computed: true, optional: true, required: false
  private _packetLossRate?: number; 
  public get packetLossRate() {
    return this.getNumberAttribute('packet_loss_rate');
  }
  public set packetLossRate(value: number) {
    this._packetLossRate = value;
  }
  public resetPacketLossRate() {
    this._packetLossRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossRateInput() {
    return this._packetLossRate;
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

  // ping_num - computed: true, optional: true, required: false
  private _pingNum?: number; 
  public get pingNum() {
    return this.getNumberAttribute('ping_num');
  }
  public set pingNum(value: number) {
    this._pingNum = value;
  }
  public resetPingNum() {
    this._pingNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingNumInput() {
    return this._pingNum;
  }

  // return_code_threshold - computed: true, optional: true, required: false
  private _returnCodeThreshold?: number; 
  public get returnCodeThreshold() {
    return this.getNumberAttribute('return_code_threshold');
  }
  public set returnCodeThreshold(value: number) {
    this._returnCodeThreshold = value;
  }
  public resetReturnCodeThreshold() {
    this._returnCodeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCodeThresholdInput() {
    return this._returnCodeThreshold;
  }

  // tcp_port - computed: true, optional: true, required: false
  private _tcpPort?: number; 
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }
  public set tcpPort(value: number) {
    this._tcpPort = value;
  }
  public resetTcpPort() {
    this._tcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortInput() {
    return this._tcpPort;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_interval: cdktf.numberToTerraform(this._checkInterval),
      check_protocol: cdktf.stringToTerraform(this._checkProtocol),
      continue_period: cdktf.numberToTerraform(this._continuePeriod),
      detector_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._detectorGroupIds),
      detector_style: cdktf.stringToTerraform(this._detectorStyle),
      enable_redirect: cdktf.stringToTerraform(this._enableRedirect),
      enable_sni: cdktf.stringToTerraform(this._enableSni),
      fail_rate: cdktf.numberToTerraform(this._failRate),
      fail_times: cdktf.numberToTerraform(this._failTimes),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      packet_loss_rate: cdktf.numberToTerraform(this._packetLossRate),
      path: cdktf.stringToTerraform(this._path),
      ping_num: cdktf.numberToTerraform(this._pingNum),
      return_code_threshold: cdktf.numberToTerraform(this._returnCodeThreshold),
      tcp_port: cdktf.numberToTerraform(this._tcpPort),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_interval: {
        value: cdktf.numberToHclTerraform(this._checkInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_protocol: {
        value: cdktf.stringToHclTerraform(this._checkProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continue_period: {
        value: cdktf.numberToHclTerraform(this._continuePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detector_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._detectorGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      detector_style: {
        value: cdktf.stringToHclTerraform(this._detectorStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_redirect: {
        value: cdktf.stringToHclTerraform(this._enableRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_sni: {
        value: cdktf.stringToHclTerraform(this._enableSni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_rate: {
        value: cdktf.numberToHclTerraform(this._failRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fail_times: {
        value: cdktf.numberToHclTerraform(this._failTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_loss_rate: {
        value: cdktf.numberToHclTerraform(this._packetLossRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_num: {
        value: cdktf.numberToHclTerraform(this._pingNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      return_code_threshold: {
        value: cdktf.numberToHclTerraform(this._returnCodeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_port: {
        value: cdktf.numberToHclTerraform(this._tcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
