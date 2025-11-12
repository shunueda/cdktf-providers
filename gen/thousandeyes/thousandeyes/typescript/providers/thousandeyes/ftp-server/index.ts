// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of ThousandEyes agent IDs to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#agents FtpServer#agents}
  */
  readonly agents: string[];
  /**
  * List of alert rules IDs to apply to the test (get `ruleId` from `/alerts/rules` endpoint. If `alertsEnabled` is set to `true` and `alertRules` is not included on test creation or update, applicable user default alert rules will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#alert_rules FtpServer#alert_rules}
  */
  readonly alertRules?: string[];
  /**
  * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#alerts_enabled FtpServer#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to measure bandwidth. This only applies to Enterprise Agents assigned to the test, and requires that networkMeasurements is set. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#bandwidth_measurements FtpServer#bandwidth_measurements}
  */
  readonly bandwidthMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP measurements. Set to true for enabled, false for disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#bgp_measurements FtpServer#bgp_measurements}
  */
  readonly bgpMeasurements?: boolean | cdktf.IResolvable;
  /**
  * A description of the alert rule. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#description FtpServer#description}
  */
  readonly description?: string;
  /**
  * Specify the maximum number of bytes to download from the target object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#download_limit FtpServer#download_limit}
  */
  readonly downloadLimit?: number;
  /**
  * Enables or disables the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#enabled FtpServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Sets packets rate sent to measure the network in packets per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#fixed_packet_rate FtpServer#fixed_packet_rate}
  */
  readonly fixedPacketRate?: number;
  /**
  * The target time for operation completion. Specified in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#ftp_target_time FtpServer#ftp_target_time}
  */
  readonly ftpTargetTime?: number;
  /**
  * Set the time limit for the test (in seconds). FTP tests default to 10s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#ftp_time_limit FtpServer#ftp_time_limit}
  */
  readonly ftpTimeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#id FtpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval to run the test on, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#interval FtpServer#interval}
  */
  readonly interval: number;
  /**
  * [force-ipv4, prefer-ipv6, force-ipv6, or use-agent-policy] IP version policy. Overrides the IPv6 policy configured at the agent level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#ipv6_policy FtpServer#ipv6_policy}
  */
  readonly ipv6Policy?: string;
  /**
  * Contains list of BGP monitor IDs (get `monitorId` from `/monitors` endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#monitors FtpServer#monitors}
  */
  readonly monitors?: string[];
  /**
  * Measure MTU sizes on the network from agents to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#mtu_measurements FtpServer#mtu_measurements}
  */
  readonly mtuMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable network measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#network_measurements FtpServer#network_measurements}
  */
  readonly networkMeasurements?: boolean | cdktf.IResolvable;
  /**
  * The number of path traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#num_path_traces FtpServer#num_path_traces}
  */
  readonly numPathTraces?: number;
  /**
  * The password to be used to authenticate with the destination server (required for FTP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#password FtpServer#password}
  */
  readonly password: string;
  /**
  * [classic or in-session] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#path_trace_mode FtpServer#path_trace_mode}
  */
  readonly pathTraceMode?: string;
  /**
  * [auto, sack, or syn] The probe mode used by end-to-end network tests. This is only valid if the protocol is set to TCP. The default value is AUTO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#probe_mode FtpServer#probe_mode}
  */
  readonly probeMode?: string;
  /**
  * The protocol used by dependent network tests (end-to-end, path trace, PMTUD). Default value is tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#protocol FtpServer#protocol}
  */
  readonly protocol?: string;
  /**
  * Indicates whether agents should randomize the start time in each test round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#randomized_start_time FtpServer#randomized_start_time}
  */
  readonly randomizedStartTime?: boolean | cdktf.IResolvable;
  /**
  * [download, upload, or list] Sets the type of activity for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#request_type FtpServer#request_type}
  */
  readonly requestType: string;
  /**
  * List of accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#shared_with_accounts FtpServer#shared_with_accounts}
  */
  readonly sharedWithAccounts?: string[];
  /**
  * The name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#test_name FtpServer#test_name}
  */
  readonly testName?: string;
  /**
  * The target URL for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#url FtpServer#url}
  */
  readonly url: string;
  /**
  * Enables active FTP. If not set, tests default to use passive FTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#use_active_ftp FtpServer#use_active_ftp}
  */
  readonly useActiveFtp?: boolean | cdktf.IResolvable;
  /**
  * Enables explicit FTPS (FTP over SSL). By default, tests will autodetect when it is appropriate to use FTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#use_explicit_ftps FtpServer#use_explicit_ftps}
  */
  readonly useExplicitFtps?: boolean | cdktf.IResolvable;
  /**
  * Enable to automatically add all available Public BGP Monitors to the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#use_public_bgp FtpServer#use_public_bgp}
  */
  readonly usePublicBgp?: boolean | cdktf.IResolvable;
  /**
  * The username to be used to authenticate with the destination server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#username FtpServer#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server thousandeyes_ftp_server}
*/
export class FtpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_ftp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtpServer to import
  * @param importFromId The id of the existing FtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_ftp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/ftp_server thousandeyes_ftp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtpServerConfig
  */
  public constructor(scope: Construct, id: string, config: FtpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_ftp_server',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.3',
        providerVersionConstraint: '3.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agents = config.agents;
    this._alertRules = config.alertRules;
    this._alertsEnabled = config.alertsEnabled;
    this._bandwidthMeasurements = config.bandwidthMeasurements;
    this._bgpMeasurements = config.bgpMeasurements;
    this._description = config.description;
    this._downloadLimit = config.downloadLimit;
    this._enabled = config.enabled;
    this._fixedPacketRate = config.fixedPacketRate;
    this._ftpTargetTime = config.ftpTargetTime;
    this._ftpTimeLimit = config.ftpTimeLimit;
    this._id = config.id;
    this._interval = config.interval;
    this._ipv6Policy = config.ipv6Policy;
    this._monitors = config.monitors;
    this._mtuMeasurements = config.mtuMeasurements;
    this._networkMeasurements = config.networkMeasurements;
    this._numPathTraces = config.numPathTraces;
    this._password = config.password;
    this._pathTraceMode = config.pathTraceMode;
    this._probeMode = config.probeMode;
    this._protocol = config.protocol;
    this._randomizedStartTime = config.randomizedStartTime;
    this._requestType = config.requestType;
    this._sharedWithAccounts = config.sharedWithAccounts;
    this._testName = config.testName;
    this._url = config.url;
    this._useActiveFtp = config.useActiveFtp;
    this._useExplicitFtps = config.useExplicitFtps;
    this._usePublicBgp = config.usePublicBgp;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents - computed: false, optional: false, required: true
  private _agents?: string[]; 
  public get agents() {
    return cdktf.Fn.tolist(this.getListAttribute('agents'));
  }
  public set agents(value: string[]) {
    this._agents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // alert_rules - computed: false, optional: true, required: false
  private _alertRules?: string[]; 
  public get alertRules() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_rules'));
  }
  public set alertRules(value: string[]) {
    this._alertRules = value;
  }
  public resetAlertRules() {
    this._alertRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRulesInput() {
    return this._alertRules;
  }

  // alerts_enabled - computed: false, optional: true, required: false
  private _alertsEnabled?: boolean | cdktf.IResolvable; 
  public get alertsEnabled() {
    return this.getBooleanAttribute('alerts_enabled');
  }
  public set alertsEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsEnabled = value;
  }
  public resetAlertsEnabled() {
    this._alertsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEnabledInput() {
    return this._alertsEnabled;
  }

  // bandwidth_measurements - computed: false, optional: true, required: false
  private _bandwidthMeasurements?: boolean | cdktf.IResolvable; 
  public get bandwidthMeasurements() {
    return this.getBooleanAttribute('bandwidth_measurements');
  }
  public set bandwidthMeasurements(value: boolean | cdktf.IResolvable) {
    this._bandwidthMeasurements = value;
  }
  public resetBandwidthMeasurements() {
    this._bandwidthMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMeasurementsInput() {
    return this._bandwidthMeasurements;
  }

  // bgp_measurements - computed: false, optional: true, required: false
  private _bgpMeasurements?: boolean | cdktf.IResolvable; 
  public get bgpMeasurements() {
    return this.getBooleanAttribute('bgp_measurements');
  }
  public set bgpMeasurements(value: boolean | cdktf.IResolvable) {
    this._bgpMeasurements = value;
  }
  public resetBgpMeasurements() {
    this._bgpMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpMeasurementsInput() {
    return this._bgpMeasurements;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // download_limit - computed: false, optional: true, required: false
  private _downloadLimit?: number; 
  public get downloadLimit() {
    return this.getNumberAttribute('download_limit');
  }
  public set downloadLimit(value: number) {
    this._downloadLimit = value;
  }
  public resetDownloadLimit() {
    this._downloadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadLimitInput() {
    return this._downloadLimit;
  }

  // enabled - computed: false, optional: true, required: false
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

  // fixed_packet_rate - computed: false, optional: true, required: false
  private _fixedPacketRate?: number; 
  public get fixedPacketRate() {
    return this.getNumberAttribute('fixed_packet_rate');
  }
  public set fixedPacketRate(value: number) {
    this._fixedPacketRate = value;
  }
  public resetFixedPacketRate() {
    this._fixedPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedPacketRateInput() {
    return this._fixedPacketRate;
  }

  // ftp_target_time - computed: false, optional: true, required: false
  private _ftpTargetTime?: number; 
  public get ftpTargetTime() {
    return this.getNumberAttribute('ftp_target_time');
  }
  public set ftpTargetTime(value: number) {
    this._ftpTargetTime = value;
  }
  public resetFtpTargetTime() {
    this._ftpTargetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpTargetTimeInput() {
    return this._ftpTargetTime;
  }

  // ftp_time_limit - computed: false, optional: true, required: false
  private _ftpTimeLimit?: number; 
  public get ftpTimeLimit() {
    return this.getNumberAttribute('ftp_time_limit');
  }
  public set ftpTimeLimit(value: number) {
    this._ftpTimeLimit = value;
  }
  public resetFtpTimeLimit() {
    this._ftpTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpTimeLimitInput() {
    return this._ftpTimeLimit;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // ipv6_policy - computed: false, optional: true, required: false
  private _ipv6Policy?: string; 
  public get ipv6Policy() {
    return this.getStringAttribute('ipv6_policy');
  }
  public set ipv6Policy(value: string) {
    this._ipv6Policy = value;
  }
  public resetIpv6Policy() {
    this._ipv6Policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PolicyInput() {
    return this._ipv6Policy;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // live_share - computed: true, optional: false, required: false
  public get liveShare() {
    return this.getBooleanAttribute('live_share');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }

  // monitors - computed: false, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // mtu_measurements - computed: false, optional: true, required: false
  private _mtuMeasurements?: boolean | cdktf.IResolvable; 
  public get mtuMeasurements() {
    return this.getBooleanAttribute('mtu_measurements');
  }
  public set mtuMeasurements(value: boolean | cdktf.IResolvable) {
    this._mtuMeasurements = value;
  }
  public resetMtuMeasurements() {
    this._mtuMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuMeasurementsInput() {
    return this._mtuMeasurements;
  }

  // network_measurements - computed: false, optional: true, required: false
  private _networkMeasurements?: boolean | cdktf.IResolvable; 
  public get networkMeasurements() {
    return this.getBooleanAttribute('network_measurements');
  }
  public set networkMeasurements(value: boolean | cdktf.IResolvable) {
    this._networkMeasurements = value;
  }
  public resetNetworkMeasurements() {
    this._networkMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMeasurementsInput() {
    return this._networkMeasurements;
  }

  // num_path_traces - computed: false, optional: true, required: false
  private _numPathTraces?: number; 
  public get numPathTraces() {
    return this.getNumberAttribute('num_path_traces');
  }
  public set numPathTraces(value: number) {
    this._numPathTraces = value;
  }
  public resetNumPathTraces() {
    this._numPathTraces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPathTracesInput() {
    return this._numPathTraces;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // path_trace_mode - computed: false, optional: true, required: false
  private _pathTraceMode?: string; 
  public get pathTraceMode() {
    return this.getStringAttribute('path_trace_mode');
  }
  public set pathTraceMode(value: string) {
    this._pathTraceMode = value;
  }
  public resetPathTraceMode() {
    this._pathTraceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTraceModeInput() {
    return this._pathTraceMode;
  }

  // probe_mode - computed: false, optional: true, required: false
  private _probeMode?: string; 
  public get probeMode() {
    return this.getStringAttribute('probe_mode');
  }
  public set probeMode(value: string) {
    this._probeMode = value;
  }
  public resetProbeMode() {
    this._probeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeModeInput() {
    return this._probeMode;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // randomized_start_time - computed: false, optional: true, required: false
  private _randomizedStartTime?: boolean | cdktf.IResolvable; 
  public get randomizedStartTime() {
    return this.getBooleanAttribute('randomized_start_time');
  }
  public set randomizedStartTime(value: boolean | cdktf.IResolvable) {
    this._randomizedStartTime = value;
  }
  public resetRandomizedStartTime() {
    this._randomizedStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizedStartTimeInput() {
    return this._randomizedStartTime;
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // saved_event - computed: true, optional: false, required: false
  public get savedEvent() {
    return this.getBooleanAttribute('saved_event');
  }

  // shared_with_accounts - computed: false, optional: true, required: false
  private _sharedWithAccounts?: string[]; 
  public get sharedWithAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('shared_with_accounts'));
  }
  public set sharedWithAccounts(value: string[]) {
    this._sharedWithAccounts = value;
  }
  public resetSharedWithAccounts() {
    this._sharedWithAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedWithAccountsInput() {
    return this._sharedWithAccounts;
  }

  // test_id - computed: true, optional: false, required: false
  public get testId() {
    return this.getStringAttribute('test_id');
  }

  // test_name - computed: false, optional: true, required: false
  private _testName?: string; 
  public get testName() {
    return this.getStringAttribute('test_name');
  }
  public set testName(value: string) {
    this._testName = value;
  }
  public resetTestName() {
    this._testName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testNameInput() {
    return this._testName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

  // use_active_ftp - computed: false, optional: true, required: false
  private _useActiveFtp?: boolean | cdktf.IResolvable; 
  public get useActiveFtp() {
    return this.getBooleanAttribute('use_active_ftp');
  }
  public set useActiveFtp(value: boolean | cdktf.IResolvable) {
    this._useActiveFtp = value;
  }
  public resetUseActiveFtp() {
    this._useActiveFtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useActiveFtpInput() {
    return this._useActiveFtp;
  }

  // use_explicit_ftps - computed: false, optional: true, required: false
  private _useExplicitFtps?: boolean | cdktf.IResolvable; 
  public get useExplicitFtps() {
    return this.getBooleanAttribute('use_explicit_ftps');
  }
  public set useExplicitFtps(value: boolean | cdktf.IResolvable) {
    this._useExplicitFtps = value;
  }
  public resetUseExplicitFtps() {
    this._useExplicitFtps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExplicitFtpsInput() {
    return this._useExplicitFtps;
  }

  // use_public_bgp - computed: false, optional: true, required: false
  private _usePublicBgp?: boolean | cdktf.IResolvable; 
  public get usePublicBgp() {
    return this.getBooleanAttribute('use_public_bgp');
  }
  public set usePublicBgp(value: boolean | cdktf.IResolvable) {
    this._usePublicBgp = value;
  }
  public resetUsePublicBgp() {
    this._usePublicBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicBgpInput() {
    return this._usePublicBgp;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agents),
      alert_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertRules),
      alerts_enabled: cdktf.booleanToTerraform(this._alertsEnabled),
      bandwidth_measurements: cdktf.booleanToTerraform(this._bandwidthMeasurements),
      bgp_measurements: cdktf.booleanToTerraform(this._bgpMeasurements),
      description: cdktf.stringToTerraform(this._description),
      download_limit: cdktf.numberToTerraform(this._downloadLimit),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fixed_packet_rate: cdktf.numberToTerraform(this._fixedPacketRate),
      ftp_target_time: cdktf.numberToTerraform(this._ftpTargetTime),
      ftp_time_limit: cdktf.numberToTerraform(this._ftpTimeLimit),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      ipv6_policy: cdktf.stringToTerraform(this._ipv6Policy),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      mtu_measurements: cdktf.booleanToTerraform(this._mtuMeasurements),
      network_measurements: cdktf.booleanToTerraform(this._networkMeasurements),
      num_path_traces: cdktf.numberToTerraform(this._numPathTraces),
      password: cdktf.stringToTerraform(this._password),
      path_trace_mode: cdktf.stringToTerraform(this._pathTraceMode),
      probe_mode: cdktf.stringToTerraform(this._probeMode),
      protocol: cdktf.stringToTerraform(this._protocol),
      randomized_start_time: cdktf.booleanToTerraform(this._randomizedStartTime),
      request_type: cdktf.stringToTerraform(this._requestType),
      shared_with_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedWithAccounts),
      test_name: cdktf.stringToTerraform(this._testName),
      url: cdktf.stringToTerraform(this._url),
      use_active_ftp: cdktf.booleanToTerraform(this._useActiveFtp),
      use_explicit_ftps: cdktf.booleanToTerraform(this._useExplicitFtps),
      use_public_bgp: cdktf.booleanToTerraform(this._usePublicBgp),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertRules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alerts_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth_measurements: {
        value: cdktf.booleanToHclTerraform(this._bandwidthMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_measurements: {
        value: cdktf.booleanToHclTerraform(this._bgpMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_limit: {
        value: cdktf.numberToHclTerraform(this._downloadLimit),
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
      fixed_packet_rate: {
        value: cdktf.numberToHclTerraform(this._fixedPacketRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftp_target_time: {
        value: cdktf.numberToHclTerraform(this._ftpTargetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftp_time_limit: {
        value: cdktf.numberToHclTerraform(this._ftpTimeLimit),
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
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_policy: {
        value: cdktf.stringToHclTerraform(this._ipv6Policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mtu_measurements: {
        value: cdktf.booleanToHclTerraform(this._mtuMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_measurements: {
        value: cdktf.booleanToHclTerraform(this._networkMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_path_traces: {
        value: cdktf.numberToHclTerraform(this._numPathTraces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_trace_mode: {
        value: cdktf.stringToHclTerraform(this._pathTraceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_mode: {
        value: cdktf.stringToHclTerraform(this._probeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      randomized_start_time: {
        value: cdktf.booleanToHclTerraform(this._randomizedStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_type: {
        value: cdktf.stringToHclTerraform(this._requestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_with_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedWithAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      test_name: {
        value: cdktf.stringToHclTerraform(this._testName),
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
      use_active_ftp: {
        value: cdktf.booleanToHclTerraform(this._useActiveFtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_explicit_ftps: {
        value: cdktf.booleanToHclTerraform(this._useExplicitFtps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_public_bgp: {
        value: cdktf.booleanToHclTerraform(this._usePublicBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
