// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentToServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of ThousandEyes agent IDs to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#agents AgentToServer#agents}
  */
  readonly agents: string[];
  /**
  * List of alert rules IDs to apply to the test (get `ruleId` from `/alerts/rules` endpoint. If `alertsEnabled` is set to `true` and `alertRules` is not included on test creation or update, applicable user default alert rules will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#alert_rules AgentToServer#alert_rules}
  */
  readonly alertRules?: string[];
  /**
  * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#alerts_enabled AgentToServer#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to measure bandwidth. This only applies to Enterprise Agents assigned to the test, and requires that networkMeasurements is set. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#bandwidth_measurements AgentToServer#bandwidth_measurements}
  */
  readonly bandwidthMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP measurements. Set to true for enabled, false for disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#bgp_measurements AgentToServer#bgp_measurements}
  */
  readonly bgpMeasurements?: boolean | cdktf.IResolvable;
  /**
  * To enable continuous monitoring, set this parameter to `true`.  When continuous monitoring is enabled, the following actions occur: * `fixedPacketRate` is enforced * `bandwidthMeasurements` are disabled * If the `protocol` is set to `tcp`, `probeMode` is set to `syn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#continuous_mode AgentToServer#continuous_mode}
  */
  readonly continuousMode?: boolean | cdktf.IResolvable;
  /**
  * A description of the alert rule. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#description AgentToServer#description}
  */
  readonly description?: string;
  /**
  * The DSCP ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#dscp_id AgentToServer#dscp_id}
  */
  readonly dscpId?: string;
  /**
  * Enables or disables the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#enabled AgentToServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Sets packets rate sent to measure the network in packets per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#fixed_packet_rate AgentToServer#fixed_packet_rate}
  */
  readonly fixedPacketRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#id AgentToServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval to run the test on, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#interval AgentToServer#interval}
  */
  readonly interval: number;
  /**
  * [force-ipv4, prefer-ipv6, force-ipv6, or use-agent-policy] IP version policy. Overrides the IPv6 policy configured at the agent level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#ipv6_policy AgentToServer#ipv6_policy}
  */
  readonly ipv6Policy?: string;
  /**
  * Contains list of BGP monitor IDs (get `monitorId` from `/monitors` endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#monitors AgentToServer#monitors}
  */
  readonly monitors?: string[];
  /**
  * Measure MTU sizes on the network from agents to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#mtu_measurements AgentToServer#mtu_measurements}
  */
  readonly mtuMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable network measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#network_measurements AgentToServer#network_measurements}
  */
  readonly networkMeasurements?: boolean | cdktf.IResolvable;
  /**
  * The number of path traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#num_path_traces AgentToServer#num_path_traces}
  */
  readonly numPathTraces?: number;
  /**
  * [classic or in-session] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#path_trace_mode AgentToServer#path_trace_mode}
  */
  readonly pathTraceMode?: string;
  /**
  * Payload size (not total packet size) for the end-to-end metrics probes, ping payload size allows values from 0 to 1400 bytes. When set to null, payload sizes are 0 bytes for ICMP-based tests and 1 byte for TCP-based tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#ping_payload_size AgentToServer#ping_payload_size}
  */
  readonly pingPayloadSize?: number;
  /**
  * The target port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#port AgentToServer#port}
  */
  readonly port?: number;
  /**
  * [auto, sack, or syn] The probe mode used by end-to-end network tests. This is only valid if the protocol is set to TCP. The default value is AUTO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#probe_mode AgentToServer#probe_mode}
  */
  readonly probeMode?: string;
  /**
  * The protocol used by dependent network tests (end-to-end, path trace, PMTUD). Default value is tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#protocol AgentToServer#protocol}
  */
  readonly protocol?: string;
  /**
  * Indicates whether agents should randomize the start time in each test round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#randomized_start_time AgentToServer#randomized_start_time}
  */
  readonly randomizedStartTime?: boolean | cdktf.IResolvable;
  /**
  * The target host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#server AgentToServer#server}
  */
  readonly server: string;
  /**
  * List of accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#shared_with_accounts AgentToServer#shared_with_accounts}
  */
  readonly sharedWithAccounts?: string[];
  /**
  * The name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#test_name AgentToServer#test_name}
  */
  readonly testName?: string;
  /**
  * Enable to automatically add all available Public BGP Monitors to the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#use_public_bgp AgentToServer#use_public_bgp}
  */
  readonly usePublicBgp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server thousandeyes_agent_to_server}
*/
export class AgentToServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_agent_to_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentToServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentToServer to import
  * @param importFromId The id of the existing AgentToServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentToServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_agent_to_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_server thousandeyes_agent_to_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentToServerConfig
  */
  public constructor(scope: Construct, id: string, config: AgentToServerConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_agent_to_server',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.2'
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
    this._continuousMode = config.continuousMode;
    this._description = config.description;
    this._dscpId = config.dscpId;
    this._enabled = config.enabled;
    this._fixedPacketRate = config.fixedPacketRate;
    this._id = config.id;
    this._interval = config.interval;
    this._ipv6Policy = config.ipv6Policy;
    this._monitors = config.monitors;
    this._mtuMeasurements = config.mtuMeasurements;
    this._networkMeasurements = config.networkMeasurements;
    this._numPathTraces = config.numPathTraces;
    this._pathTraceMode = config.pathTraceMode;
    this._pingPayloadSize = config.pingPayloadSize;
    this._port = config.port;
    this._probeMode = config.probeMode;
    this._protocol = config.protocol;
    this._randomizedStartTime = config.randomizedStartTime;
    this._server = config.server;
    this._sharedWithAccounts = config.sharedWithAccounts;
    this._testName = config.testName;
    this._usePublicBgp = config.usePublicBgp;
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

  // continuous_mode - computed: false, optional: true, required: false
  private _continuousMode?: boolean | cdktf.IResolvable; 
  public get continuousMode() {
    return this.getBooleanAttribute('continuous_mode');
  }
  public set continuousMode(value: boolean | cdktf.IResolvable) {
    this._continuousMode = value;
  }
  public resetContinuousMode() {
    this._continuousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousModeInput() {
    return this._continuousMode;
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

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // dscp_id - computed: false, optional: true, required: false
  private _dscpId?: string; 
  public get dscpId() {
    return this.getStringAttribute('dscp_id');
  }
  public set dscpId(value: string) {
    this._dscpId = value;
  }
  public resetDscpId() {
    this._dscpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpIdInput() {
    return this._dscpId;
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

  // ping_payload_size - computed: false, optional: true, required: false
  private _pingPayloadSize?: number; 
  public get pingPayloadSize() {
    return this.getNumberAttribute('ping_payload_size');
  }
  public set pingPayloadSize(value: number) {
    this._pingPayloadSize = value;
  }
  public resetPingPayloadSize() {
    this._pingPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingPayloadSizeInput() {
    return this._pingPayloadSize;
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

  // saved_event - computed: true, optional: false, required: false
  public get savedEvent() {
    return this.getBooleanAttribute('saved_event');
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
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
      continuous_mode: cdktf.booleanToTerraform(this._continuousMode),
      description: cdktf.stringToTerraform(this._description),
      dscp_id: cdktf.stringToTerraform(this._dscpId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fixed_packet_rate: cdktf.numberToTerraform(this._fixedPacketRate),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      ipv6_policy: cdktf.stringToTerraform(this._ipv6Policy),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      mtu_measurements: cdktf.booleanToTerraform(this._mtuMeasurements),
      network_measurements: cdktf.booleanToTerraform(this._networkMeasurements),
      num_path_traces: cdktf.numberToTerraform(this._numPathTraces),
      path_trace_mode: cdktf.stringToTerraform(this._pathTraceMode),
      ping_payload_size: cdktf.numberToTerraform(this._pingPayloadSize),
      port: cdktf.numberToTerraform(this._port),
      probe_mode: cdktf.stringToTerraform(this._probeMode),
      protocol: cdktf.stringToTerraform(this._protocol),
      randomized_start_time: cdktf.booleanToTerraform(this._randomizedStartTime),
      server: cdktf.stringToTerraform(this._server),
      shared_with_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedWithAccounts),
      test_name: cdktf.stringToTerraform(this._testName),
      use_public_bgp: cdktf.booleanToTerraform(this._usePublicBgp),
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
      continuous_mode: {
        value: cdktf.booleanToHclTerraform(this._continuousMode),
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
      dscp_id: {
        value: cdktf.stringToHclTerraform(this._dscpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      path_trace_mode: {
        value: cdktf.stringToHclTerraform(this._pathTraceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_payload_size: {
        value: cdktf.numberToHclTerraform(this._pingPayloadSize),
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
      server: {
        value: cdktf.stringToHclTerraform(this._server),
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
      use_public_bgp: {
        value: cdktf.booleanToHclTerraform(this._usePublicBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
