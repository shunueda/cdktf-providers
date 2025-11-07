// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VoiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of ThousandEyes agent IDs to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#agents Voice#agents}
  */
  readonly agents: string[];
  /**
  * List of alert rules IDs to apply to the test (get `ruleId` from `/alerts/rules` endpoint. If `alertsEnabled` is set to `true` and `alertRules` is not included on test creation or update, applicable user default alert rules will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#alert_rules Voice#alert_rules}
  */
  readonly alertRules?: string[];
  /**
  * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#alerts_enabled Voice#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP measurements. Set to true for enabled, false for disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#bgp_measurements Voice#bgp_measurements}
  */
  readonly bgpMeasurements?: boolean | cdktf.IResolvable;
  /**
  * The unique ID of the codec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#codec_id Voice#codec_id}
  */
  readonly codecId?: string;
  /**
  * A description of the alert rule. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#description Voice#description}
  */
  readonly description?: string;
  /**
  * The DSCP ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#dscp_id Voice#dscp_id}
  */
  readonly dscpId?: string;
  /**
  * The duration of the test, in seconds (5 to 30).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#duration Voice#duration}
  */
  readonly duration?: number;
  /**
  * Enables or disables the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#enabled Voice#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#id Voice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval to run the test on, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#interval Voice#interval}
  */
  readonly interval: number;
  /**
  * The de-jitter buffer size, in seconds (0 to 150).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#jitter_buffer Voice#jitter_buffer}
  */
  readonly jitterBuffer?: number;
  /**
  * Contains list of BGP monitor IDs (get `monitorId` from `/monitors` endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#monitors Voice#monitors}
  */
  readonly monitors?: string[];
  /**
  * The number of path traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#num_path_traces Voice#num_path_traces}
  */
  readonly numPathTraces?: number;
  /**
  * Indicates whether agents should randomize the start time in each test round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#randomized_start_time Voice#randomized_start_time}
  */
  readonly randomizedStartTime?: boolean | cdktf.IResolvable;
  /**
  * List of accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#shared_with_accounts Voice#shared_with_accounts}
  */
  readonly sharedWithAccounts?: string[];
  /**
  * The target agent's unique ID. Pulled from the /agents endpoint. Both the 'agents': [] and the targetAgentID cannot be Cloud Agents. Can be Enterprise Agent -> Cloud, Cloud -> Enterprise Agent, or Enterprise Agent -> Enterprise Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#target_agent_id Voice#target_agent_id}
  */
  readonly targetAgentId: string;
  /**
  * The name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#test_name Voice#test_name}
  */
  readonly testName?: string;
  /**
  * Enable to automatically add all available Public BGP Monitors to the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#use_public_bgp Voice#use_public_bgp}
  */
  readonly usePublicBgp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice thousandeyes_voice}
*/
export class Voice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_voice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Voice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Voice to import
  * @param importFromId The id of the existing Voice that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Voice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_voice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/voice thousandeyes_voice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VoiceConfig
  */
  public constructor(scope: Construct, id: string, config: VoiceConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_voice',
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
    this._codecId = config.codecId;
    this._description = config.description;
    this._dscpId = config.dscpId;
    this._duration = config.duration;
    this._enabled = config.enabled;
    this._id = config.id;
    this._interval = config.interval;
    this._jitterBuffer = config.jitterBuffer;
    this._monitors = config.monitors;
    this._numPathTraces = config.numPathTraces;
    this._randomizedStartTime = config.randomizedStartTime;
    this._sharedWithAccounts = config.sharedWithAccounts;
    this._targetAgentId = config.targetAgentId;
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

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // codec_id - computed: false, optional: true, required: false
  private _codecId?: string; 
  public get codecId() {
    return this.getStringAttribute('codec_id');
  }
  public set codecId(value: string) {
    this._codecId = value;
  }
  public resetCodecId() {
    this._codecId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecIdInput() {
    return this._codecId;
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

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // jitter_buffer - computed: false, optional: true, required: false
  private _jitterBuffer?: number; 
  public get jitterBuffer() {
    return this.getNumberAttribute('jitter_buffer');
  }
  public set jitterBuffer(value: number) {
    this._jitterBuffer = value;
  }
  public resetJitterBuffer() {
    this._jitterBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterBufferInput() {
    return this._jitterBuffer;
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
      codec_id: cdktf.stringToTerraform(this._codecId),
      description: cdktf.stringToTerraform(this._description),
      dscp_id: cdktf.stringToTerraform(this._dscpId),
      duration: cdktf.numberToTerraform(this._duration),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      jitter_buffer: cdktf.numberToTerraform(this._jitterBuffer),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      num_path_traces: cdktf.numberToTerraform(this._numPathTraces),
      randomized_start_time: cdktf.booleanToTerraform(this._randomizedStartTime),
      shared_with_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedWithAccounts),
      target_agent_id: cdktf.stringToTerraform(this._targetAgentId),
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
      bgp_measurements: {
        value: cdktf.booleanToHclTerraform(this._bgpMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      codec_id: {
        value: cdktf.stringToHclTerraform(this._codecId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      jitter_buffer: {
        value: cdktf.numberToHclTerraform(this._jitterBuffer),
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
      num_path_traces: {
        value: cdktf.numberToHclTerraform(this._numPathTraces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
