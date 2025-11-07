// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentToAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of ThousandEyes agent IDs to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#agents AgentToAgent#agents}
  */
  readonly agents: string[];
  /**
  * List of alert rules IDs to apply to the test (get `ruleId` from `/alerts/rules` endpoint. If `alertsEnabled` is set to `true` and `alertRules` is not included on test creation or update, applicable user default alert rules will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#alert_rules AgentToAgent#alert_rules}
  */
  readonly alertRules?: string[];
  /**
  * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#alerts_enabled AgentToAgent#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP measurements. Set to true for enabled, false for disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#bgp_measurements AgentToAgent#bgp_measurements}
  */
  readonly bgpMeasurements?: boolean | cdktf.IResolvable;
  /**
  * A description of the alert rule. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#description AgentToAgent#description}
  */
  readonly description?: string;
  /**
  * [to-target, from-target, bidirectional] The direction of the test (affects how results are shown).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#direction AgentToAgent#direction}
  */
  readonly direction: string;
  /**
  * The DSCP ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#dscp_id AgentToAgent#dscp_id}
  */
  readonly dscpId?: string;
  /**
  * Enables or disables the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#enabled AgentToAgent#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Sets packets rate sent to measure the network in packets per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#fixed_packet_rate AgentToAgent#fixed_packet_rate}
  */
  readonly fixedPacketRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#id AgentToAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval to run the test on, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#interval AgentToAgent#interval}
  */
  readonly interval: number;
  /**
  * Contains list of BGP monitor IDs (get `monitorId` from `/monitors` endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#monitors AgentToAgent#monitors}
  */
  readonly monitors?: string[];
  /**
  * The maximum segment size, in bytes. Value can be from 30 to 1400.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#mss AgentToAgent#mss}
  */
  readonly mss?: number;
  /**
  * The number of path traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#num_path_traces AgentToAgent#num_path_traces}
  */
  readonly numPathTraces?: number;
  /**
  * [classic or in-session] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#path_trace_mode AgentToAgent#path_trace_mode}
  */
  readonly pathTraceMode?: string;
  /**
  * The target port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#port AgentToAgent#port}
  */
  readonly port?: number;
  /**
  * [tcp or udp] The protocol for agent to agent tests. Defaults to 'tcp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#protocol AgentToAgent#protocol}
  */
  readonly protocol?: string;
  /**
  * Indicates whether agents should randomize the start time in each test round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#randomized_start_time AgentToAgent#randomized_start_time}
  */
  readonly randomizedStartTime?: boolean | cdktf.IResolvable;
  /**
  * List of accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#shared_with_accounts AgentToAgent#shared_with_accounts}
  */
  readonly sharedWithAccounts?: string[];
  /**
  * The target agent's unique ID. Pulled from the /agents endpoint. Both the 'agents': [] and the targetAgentID cannot be Cloud Agents. Can be Enterprise Agent -> Cloud, Cloud -> Enterprise Agent, or Enterprise Agent -> Enterprise Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#target_agent_id AgentToAgent#target_agent_id}
  */
  readonly targetAgentId: string;
  /**
  * The name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#test_name AgentToAgent#test_name}
  */
  readonly testName?: string;
  /**
  * The throughput duration in milliseconds. The default value is 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#throughput_duration AgentToAgent#throughput_duration}
  */
  readonly throughputDuration?: number;
  /**
  * Enables or disables throughput measurements. This is not allowed when the source or target of the test is a Cloud Agent. Defaults to disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#throughput_measurements AgentToAgent#throughput_measurements}
  */
  readonly throughputMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Defines the throughput rate. Fo UDP tests only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#throughput_rate AgentToAgent#throughput_rate}
  */
  readonly throughputRate?: number;
  /**
  * Enable to automatically add all available Public BGP Monitors to the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#use_public_bgp AgentToAgent#use_public_bgp}
  */
  readonly usePublicBgp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent thousandeyes_agent_to_agent}
*/
export class AgentToAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_agent_to_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentToAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentToAgent to import
  * @param importFromId The id of the existing AgentToAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentToAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_agent_to_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/agent_to_agent thousandeyes_agent_to_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentToAgentConfig
  */
  public constructor(scope: Construct, id: string, config: AgentToAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_agent_to_agent',
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
    this._bgpMeasurements = config.bgpMeasurements;
    this._description = config.description;
    this._direction = config.direction;
    this._dscpId = config.dscpId;
    this._enabled = config.enabled;
    this._fixedPacketRate = config.fixedPacketRate;
    this._id = config.id;
    this._interval = config.interval;
    this._monitors = config.monitors;
    this._mss = config.mss;
    this._numPathTraces = config.numPathTraces;
    this._pathTraceMode = config.pathTraceMode;
    this._port = config.port;
    this._protocol = config.protocol;
    this._randomizedStartTime = config.randomizedStartTime;
    this._sharedWithAccounts = config.sharedWithAccounts;
    this._targetAgentId = config.targetAgentId;
    this._testName = config.testName;
    this._throughputDuration = config.throughputDuration;
    this._throughputMeasurements = config.throughputMeasurements;
    this._throughputRate = config.throughputRate;
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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
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

  // target_agent_id - computed: false, optional: false, required: true
  private _targetAgentId?: string; 
  public get targetAgentId() {
    return this.getStringAttribute('target_agent_id');
  }
  public set targetAgentId(value: string) {
    this._targetAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAgentIdInput() {
    return this._targetAgentId;
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

  // throughput_duration - computed: false, optional: true, required: false
  private _throughputDuration?: number; 
  public get throughputDuration() {
    return this.getNumberAttribute('throughput_duration');
  }
  public set throughputDuration(value: number) {
    this._throughputDuration = value;
  }
  public resetThroughputDuration() {
    this._throughputDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputDurationInput() {
    return this._throughputDuration;
  }

  // throughput_measurements - computed: false, optional: true, required: false
  private _throughputMeasurements?: boolean | cdktf.IResolvable; 
  public get throughputMeasurements() {
    return this.getBooleanAttribute('throughput_measurements');
  }
  public set throughputMeasurements(value: boolean | cdktf.IResolvable) {
    this._throughputMeasurements = value;
  }
  public resetThroughputMeasurements() {
    this._throughputMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputMeasurementsInput() {
    return this._throughputMeasurements;
  }

  // throughput_rate - computed: false, optional: true, required: false
  private _throughputRate?: number; 
  public get throughputRate() {
    return this.getNumberAttribute('throughput_rate');
  }
  public set throughputRate(value: number) {
    this._throughputRate = value;
  }
  public resetThroughputRate() {
    this._throughputRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputRateInput() {
    return this._throughputRate;
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
      bgp_measurements: cdktf.booleanToTerraform(this._bgpMeasurements),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      dscp_id: cdktf.stringToTerraform(this._dscpId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fixed_packet_rate: cdktf.numberToTerraform(this._fixedPacketRate),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      mss: cdktf.numberToTerraform(this._mss),
      num_path_traces: cdktf.numberToTerraform(this._numPathTraces),
      path_trace_mode: cdktf.stringToTerraform(this._pathTraceMode),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      randomized_start_time: cdktf.booleanToTerraform(this._randomizedStartTime),
      shared_with_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedWithAccounts),
      target_agent_id: cdktf.stringToTerraform(this._targetAgentId),
      test_name: cdktf.stringToTerraform(this._testName),
      throughput_duration: cdktf.numberToTerraform(this._throughputDuration),
      throughput_measurements: cdktf.booleanToTerraform(this._throughputMeasurements),
      throughput_rate: cdktf.numberToTerraform(this._throughputRate),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mss: {
        value: cdktf.numberToHclTerraform(this._mss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      randomized_start_time: {
        value: cdktf.booleanToHclTerraform(this._randomizedStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_with_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedWithAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_agent_id: {
        value: cdktf.stringToHclTerraform(this._targetAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_name: {
        value: cdktf.stringToHclTerraform(this._testName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput_duration: {
        value: cdktf.numberToHclTerraform(this._throughputDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throughput_measurements: {
        value: cdktf.booleanToHclTerraform(this._throughputMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throughput_rate: {
        value: cdktf.numberToHclTerraform(this._throughputRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
