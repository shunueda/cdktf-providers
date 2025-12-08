// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ToolNetwatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#___path___ ToolNetwatch#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#___skip___ ToolNetwatch#___skip___}
  */
  readonly skip?: string;
  /**
  * If the ICMP `time exceeded` message should be considered a valid response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#accept_icmp_time_exceeded ToolNetwatch#accept_icmp_time_exceeded}
  */
  readonly acceptIcmpTimeExceeded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#comment ToolNetwatch#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#disabled ToolNetwatch#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The DNS server that the probe should send its requests to, if not specified it will use the value from `/ip dns`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#dns_server ToolNetwatch#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Script to execute on the event of probe state change `OK` --> `fail`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#down_script ToolNetwatch#down_script}
  */
  readonly downScript?: string;
  /**
  * Netwatch will not wait to finish all the packets to be processed to change probe status if it is already known that host will be considered as `down`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#early_failure_detection ToolNetwatch#early_failure_detection}
  */
  readonly earlyFailureDetection?: boolean | cdktf.IResolvable;
  /**
  * Netwatch will not wait to finish all the packets to be processed to change probe status if it is already known that host will be considered as `up`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#early_success_detection ToolNetwatch#early_success_detection}
  */
  readonly earlySuccessDetection?: boolean | cdktf.IResolvable;
  /**
  * The IP address of the server to be probed. Formats:
  *   * ipv4
  *   * ipv4@vrf
  *   * ipv6 
  *   * ipv6@vrf
  *   * ipv6-linklocal%interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#host ToolNetwatch#host}
  */
  readonly host: string;
  /**
  * Response in the range [http-code-min , http-code-max] is a probe pass/OK; outside - a probe fail. See [mozilla-http-status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) or [rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#http_code_max ToolNetwatch#http_code_max}
  */
  readonly httpCodeMax?: number;
  /**
  * OK/fail criteria for HTTP response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#http_code_min ToolNetwatch#http_code_min}
  */
  readonly httpCodeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#id ToolNetwatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The time interval between probe tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#interval ToolNetwatch#interval}
  */
  readonly interval?: string;
  /**
  * Task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#name ToolNetwatch#name}
  */
  readonly name: string;
  /**
  * Total count of ICMP packets to send out within a single test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#packet_count ToolNetwatch#packet_count}
  */
  readonly packetCount?: number;
  /**
  * The time between ICMP-request packet send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#packet_interval ToolNetwatch#packet_interval}
  */
  readonly packetInterval?: string;
  /**
  * The total size of the IP ICMP packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#packet_size ToolNetwatch#packet_size}
  */
  readonly packetSize?: number;
  /**
  * TCP port (for both tcp-conn and http-get probes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#port ToolNetwatch#port}
  */
  readonly port?: number;
  /**
  * Record type that will be used for DNS probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#record_type ToolNetwatch#record_type}
  */
  readonly recordType?: string;
  /**
  * Source IP address which the Netwatch will try to use in order to reach the host. If address is not present, then the host will be considered as `down`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#src_address ToolNetwatch#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Time to wait before starting probe (on add, enable, or system start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#start_delay ToolNetwatch#start_delay}
  */
  readonly startDelay?: string;
  /**
  * Time to wait until starting Netwatch probe after system startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#startup_delay ToolNetwatch#startup_delay}
  */
  readonly startupDelay?: string;
  /**
  * Script to execute at the end of every probe test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#test_script ToolNetwatch#test_script}
  */
  readonly testScript?: string;
  /**
  * Fail threshold for rtt-avg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#thr_avg ToolNetwatch#thr_avg}
  */
  readonly thrAvg?: string;
  /**
  * Fail threshold for http-resp-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#thr_http_time ToolNetwatch#thr_http_time}
  */
  readonly thrHttpTime?: string;
  /**
  * Fail threshold for rtt-jitter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#thr_jitter ToolNetwatch#thr_jitter}
  */
  readonly thrJitter?: string;
  /**
  * Fail threshold for loss-count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#thr_loss_count ToolNetwatch#thr_loss_count}
  */
  readonly thrLossCount?: number;
  /**
  * Fail threshold for loss-percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#thr_loss_percent ToolNetwatch#thr_loss_percent}
  */
  readonly thrLossPercent?: number;
  /**
  * Fail threshold for rtt-max (a value above thr-max is a probe fail).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#thr_max ToolNetwatch#thr_max}
  */
  readonly thrMax?: string;
  /**
  * Fail threshold for rtt-stdev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#thr_stdev ToolNetwatch#thr_stdev}
  */
  readonly thrStdev?: string;
  /**
  * Fail threshold for tcp-connect-time, the configuration uses microseconds, if the time unit is not specified (s/m/h), log and status pages display the same value in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#thr_tcp_conn_time ToolNetwatch#thr_tcp_conn_time}
  */
  readonly thrTcpConnTime?: string;
  /**
  * Max time limit to wait for a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#timeout ToolNetwatch#timeout}
  */
  readonly timeout?: string;
  /**
  * Manually set time to live value for ICMP packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#ttl ToolNetwatch#ttl}
  */
  readonly ttl?: number;
  /**
  * Type of the probe:
  *   *  icmp - (ping-style) series of ICMP request-response with statistics
  *   *  tcp-conn - test TCP connection (3-way handshake) to a server specified by IP and port
  *   *  http-get - do an HTTP Get request and test for a range of correct replies
  *   *  simple - simplified ICMP probe, with fewer options than **ICMP** type, used for backward compatibility with the older Netwatch version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#type ToolNetwatch#type}
  */
  readonly type?: string;
  /**
  * Script to execute on the event of probe state change `fail` --> `OK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#up_script ToolNetwatch#up_script}
  */
  readonly upScript?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch routeros_tool_netwatch}
*/
export class ToolNetwatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_tool_netwatch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ToolNetwatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ToolNetwatch to import
  * @param importFromId The id of the existing ToolNetwatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ToolNetwatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_tool_netwatch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/tool_netwatch routeros_tool_netwatch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ToolNetwatchConfig
  */
  public constructor(scope: Construct, id: string, config: ToolNetwatchConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_tool_netwatch',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._acceptIcmpTimeExceeded = config.acceptIcmpTimeExceeded;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._dnsServer = config.dnsServer;
    this._downScript = config.downScript;
    this._earlyFailureDetection = config.earlyFailureDetection;
    this._earlySuccessDetection = config.earlySuccessDetection;
    this._host = config.host;
    this._httpCodeMax = config.httpCodeMax;
    this._httpCodeMin = config.httpCodeMin;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._packetCount = config.packetCount;
    this._packetInterval = config.packetInterval;
    this._packetSize = config.packetSize;
    this._port = config.port;
    this._recordType = config.recordType;
    this._srcAddress = config.srcAddress;
    this._startDelay = config.startDelay;
    this._startupDelay = config.startupDelay;
    this._testScript = config.testScript;
    this._thrAvg = config.thrAvg;
    this._thrHttpTime = config.thrHttpTime;
    this._thrJitter = config.thrJitter;
    this._thrLossCount = config.thrLossCount;
    this._thrLossPercent = config.thrLossPercent;
    this._thrMax = config.thrMax;
    this._thrStdev = config.thrStdev;
    this._thrTcpConnTime = config.thrTcpConnTime;
    this._timeout = config.timeout;
    this._ttl = config.ttl;
    this._type = config.type;
    this._upScript = config.upScript;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
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

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // accept_icmp_time_exceeded - computed: false, optional: true, required: false
  private _acceptIcmpTimeExceeded?: boolean | cdktf.IResolvable; 
  public get acceptIcmpTimeExceeded() {
    return this.getBooleanAttribute('accept_icmp_time_exceeded');
  }
  public set acceptIcmpTimeExceeded(value: boolean | cdktf.IResolvable) {
    this._acceptIcmpTimeExceeded = value;
  }
  public resetAcceptIcmpTimeExceeded() {
    this._acceptIcmpTimeExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptIcmpTimeExceededInput() {
    return this._acceptIcmpTimeExceeded;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // down_script - computed: false, optional: true, required: false
  private _downScript?: string; 
  public get downScript() {
    return this.getStringAttribute('down_script');
  }
  public set downScript(value: string) {
    this._downScript = value;
  }
  public resetDownScript() {
    this._downScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downScriptInput() {
    return this._downScript;
  }

  // early_failure_detection - computed: false, optional: true, required: false
  private _earlyFailureDetection?: boolean | cdktf.IResolvable; 
  public get earlyFailureDetection() {
    return this.getBooleanAttribute('early_failure_detection');
  }
  public set earlyFailureDetection(value: boolean | cdktf.IResolvable) {
    this._earlyFailureDetection = value;
  }
  public resetEarlyFailureDetection() {
    this._earlyFailureDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyFailureDetectionInput() {
    return this._earlyFailureDetection;
  }

  // early_success_detection - computed: false, optional: true, required: false
  private _earlySuccessDetection?: boolean | cdktf.IResolvable; 
  public get earlySuccessDetection() {
    return this.getBooleanAttribute('early_success_detection');
  }
  public set earlySuccessDetection(value: boolean | cdktf.IResolvable) {
    this._earlySuccessDetection = value;
  }
  public resetEarlySuccessDetection() {
    this._earlySuccessDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlySuccessDetectionInput() {
    return this._earlySuccessDetection;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_code_max - computed: false, optional: true, required: false
  private _httpCodeMax?: number; 
  public get httpCodeMax() {
    return this.getNumberAttribute('http_code_max');
  }
  public set httpCodeMax(value: number) {
    this._httpCodeMax = value;
  }
  public resetHttpCodeMax() {
    this._httpCodeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodeMaxInput() {
    return this._httpCodeMax;
  }

  // http_code_min - computed: false, optional: true, required: false
  private _httpCodeMin?: number; 
  public get httpCodeMin() {
    return this.getNumberAttribute('http_code_min');
  }
  public set httpCodeMin(value: number) {
    this._httpCodeMin = value;
  }
  public resetHttpCodeMin() {
    this._httpCodeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodeMinInput() {
    return this._httpCodeMin;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // packet_count - computed: false, optional: true, required: false
  private _packetCount?: number; 
  public get packetCount() {
    return this.getNumberAttribute('packet_count');
  }
  public set packetCount(value: number) {
    this._packetCount = value;
  }
  public resetPacketCount() {
    this._packetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCountInput() {
    return this._packetCount;
  }

  // packet_interval - computed: false, optional: true, required: false
  private _packetInterval?: string; 
  public get packetInterval() {
    return this.getStringAttribute('packet_interval');
  }
  public set packetInterval(value: string) {
    this._packetInterval = value;
  }
  public resetPacketInterval() {
    this._packetInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetIntervalInput() {
    return this._packetInterval;
  }

  // packet_size - computed: false, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
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

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // start_delay - computed: false, optional: true, required: false
  private _startDelay?: string; 
  public get startDelay() {
    return this.getStringAttribute('start_delay');
  }
  public set startDelay(value: string) {
    this._startDelay = value;
  }
  public resetStartDelay() {
    this._startDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInput() {
    return this._startDelay;
  }

  // startup_delay - computed: false, optional: true, required: false
  private _startupDelay?: string; 
  public get startupDelay() {
    return this.getStringAttribute('startup_delay');
  }
  public set startupDelay(value: string) {
    this._startupDelay = value;
  }
  public resetStartupDelay() {
    this._startupDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupDelayInput() {
    return this._startupDelay;
  }

  // test_script - computed: false, optional: true, required: false
  private _testScript?: string; 
  public get testScript() {
    return this.getStringAttribute('test_script');
  }
  public set testScript(value: string) {
    this._testScript = value;
  }
  public resetTestScript() {
    this._testScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testScriptInput() {
    return this._testScript;
  }

  // thr_avg - computed: false, optional: true, required: false
  private _thrAvg?: string; 
  public get thrAvg() {
    return this.getStringAttribute('thr_avg');
  }
  public set thrAvg(value: string) {
    this._thrAvg = value;
  }
  public resetThrAvg() {
    this._thrAvg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrAvgInput() {
    return this._thrAvg;
  }

  // thr_http_time - computed: false, optional: true, required: false
  private _thrHttpTime?: string; 
  public get thrHttpTime() {
    return this.getStringAttribute('thr_http_time');
  }
  public set thrHttpTime(value: string) {
    this._thrHttpTime = value;
  }
  public resetThrHttpTime() {
    this._thrHttpTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrHttpTimeInput() {
    return this._thrHttpTime;
  }

  // thr_jitter - computed: false, optional: true, required: false
  private _thrJitter?: string; 
  public get thrJitter() {
    return this.getStringAttribute('thr_jitter');
  }
  public set thrJitter(value: string) {
    this._thrJitter = value;
  }
  public resetThrJitter() {
    this._thrJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrJitterInput() {
    return this._thrJitter;
  }

  // thr_loss_count - computed: false, optional: true, required: false
  private _thrLossCount?: number; 
  public get thrLossCount() {
    return this.getNumberAttribute('thr_loss_count');
  }
  public set thrLossCount(value: number) {
    this._thrLossCount = value;
  }
  public resetThrLossCount() {
    this._thrLossCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrLossCountInput() {
    return this._thrLossCount;
  }

  // thr_loss_percent - computed: false, optional: true, required: false
  private _thrLossPercent?: number; 
  public get thrLossPercent() {
    return this.getNumberAttribute('thr_loss_percent');
  }
  public set thrLossPercent(value: number) {
    this._thrLossPercent = value;
  }
  public resetThrLossPercent() {
    this._thrLossPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrLossPercentInput() {
    return this._thrLossPercent;
  }

  // thr_max - computed: false, optional: true, required: false
  private _thrMax?: string; 
  public get thrMax() {
    return this.getStringAttribute('thr_max');
  }
  public set thrMax(value: string) {
    this._thrMax = value;
  }
  public resetThrMax() {
    this._thrMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrMaxInput() {
    return this._thrMax;
  }

  // thr_stdev - computed: false, optional: true, required: false
  private _thrStdev?: string; 
  public get thrStdev() {
    return this.getStringAttribute('thr_stdev');
  }
  public set thrStdev(value: string) {
    this._thrStdev = value;
  }
  public resetThrStdev() {
    this._thrStdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrStdevInput() {
    return this._thrStdev;
  }

  // thr_tcp_conn_time - computed: false, optional: true, required: false
  private _thrTcpConnTime?: string; 
  public get thrTcpConnTime() {
    return this.getStringAttribute('thr_tcp_conn_time');
  }
  public set thrTcpConnTime(value: string) {
    this._thrTcpConnTime = value;
  }
  public resetThrTcpConnTime() {
    this._thrTcpConnTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrTcpConnTimeInput() {
    return this._thrTcpConnTime;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // up_script - computed: false, optional: true, required: false
  private _upScript?: string; 
  public get upScript() {
    return this.getStringAttribute('up_script');
  }
  public set upScript(value: string) {
    this._upScript = value;
  }
  public resetUpScript() {
    this._upScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upScriptInput() {
    return this._upScript;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      accept_icmp_time_exceeded: cdktf.booleanToTerraform(this._acceptIcmpTimeExceeded),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dns_server: cdktf.stringToTerraform(this._dnsServer),
      down_script: cdktf.stringToTerraform(this._downScript),
      early_failure_detection: cdktf.booleanToTerraform(this._earlyFailureDetection),
      early_success_detection: cdktf.booleanToTerraform(this._earlySuccessDetection),
      host: cdktf.stringToTerraform(this._host),
      http_code_max: cdktf.numberToTerraform(this._httpCodeMax),
      http_code_min: cdktf.numberToTerraform(this._httpCodeMin),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      packet_count: cdktf.numberToTerraform(this._packetCount),
      packet_interval: cdktf.stringToTerraform(this._packetInterval),
      packet_size: cdktf.numberToTerraform(this._packetSize),
      port: cdktf.numberToTerraform(this._port),
      record_type: cdktf.stringToTerraform(this._recordType),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      start_delay: cdktf.stringToTerraform(this._startDelay),
      startup_delay: cdktf.stringToTerraform(this._startupDelay),
      test_script: cdktf.stringToTerraform(this._testScript),
      thr_avg: cdktf.stringToTerraform(this._thrAvg),
      thr_http_time: cdktf.stringToTerraform(this._thrHttpTime),
      thr_jitter: cdktf.stringToTerraform(this._thrJitter),
      thr_loss_count: cdktf.numberToTerraform(this._thrLossCount),
      thr_loss_percent: cdktf.numberToTerraform(this._thrLossPercent),
      thr_max: cdktf.stringToTerraform(this._thrMax),
      thr_stdev: cdktf.stringToTerraform(this._thrStdev),
      thr_tcp_conn_time: cdktf.stringToTerraform(this._thrTcpConnTime),
      timeout: cdktf.stringToTerraform(this._timeout),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      up_script: cdktf.stringToTerraform(this._upScript),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accept_icmp_time_exceeded: {
        value: cdktf.booleanToHclTerraform(this._acceptIcmpTimeExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_server: {
        value: cdktf.stringToHclTerraform(this._dnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      down_script: {
        value: cdktf.stringToHclTerraform(this._downScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      early_failure_detection: {
        value: cdktf.booleanToHclTerraform(this._earlyFailureDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      early_success_detection: {
        value: cdktf.booleanToHclTerraform(this._earlySuccessDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_code_max: {
        value: cdktf.numberToHclTerraform(this._httpCodeMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_code_min: {
        value: cdktf.numberToHclTerraform(this._httpCodeMin),
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_count: {
        value: cdktf.numberToHclTerraform(this._packetCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_interval: {
        value: cdktf.stringToHclTerraform(this._packetInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_size: {
        value: cdktf.numberToHclTerraform(this._packetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_delay: {
        value: cdktf.stringToHclTerraform(this._startDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_delay: {
        value: cdktf.stringToHclTerraform(this._startupDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_script: {
        value: cdktf.stringToHclTerraform(this._testScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thr_avg: {
        value: cdktf.stringToHclTerraform(this._thrAvg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thr_http_time: {
        value: cdktf.stringToHclTerraform(this._thrHttpTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thr_jitter: {
        value: cdktf.stringToHclTerraform(this._thrJitter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thr_loss_count: {
        value: cdktf.numberToHclTerraform(this._thrLossCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thr_loss_percent: {
        value: cdktf.numberToHclTerraform(this._thrLossPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thr_max: {
        value: cdktf.stringToHclTerraform(this._thrMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thr_stdev: {
        value: cdktf.stringToHclTerraform(this._thrStdev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thr_tcp_conn_time: {
        value: cdktf.stringToHclTerraform(this._thrTcpConnTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      up_script: {
        value: cdktf.stringToHclTerraform(this._upScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
