// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAgentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier for the data output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#data_output_id FleetAgentPolicy#data_output_id}
  */
  readonly dataOutputId?: string;
  /**
  * The description of the agent policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#description FleetAgentPolicy#description}
  */
  readonly description?: string;
  /**
  * The identifier for the Elastic Agent binary download server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#download_source_id FleetAgentPolicy#download_source_id}
  */
  readonly downloadSourceId?: string;
  /**
  * The identifier for the Fleet server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#fleet_server_host_id FleetAgentPolicy#fleet_server_host_id}
  */
  readonly fleetServerHostId?: string;
  /**
  * User-defined data tags to apply to all inputs. Values can be strings (string_value) or numbers (number_value) but not both. Example -- key1 = {string_value = value1}, key2 = {number_value = 42}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#global_data_tags FleetAgentPolicy#global_data_tags}
  */
  readonly globalDataTags?: { [key: string]: FleetAgentPolicyGlobalDataTags } | cdktf.IResolvable;
  /**
  * The inactivity timeout for the agent policy. If an agent does not report within this time period, it will be considered inactive. Supports duration strings (e.g., '30s', '2m', '1h').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#inactivity_timeout FleetAgentPolicy#inactivity_timeout}
  */
  readonly inactivityTimeout?: string;
  /**
  * Enable collection of agent logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#monitor_logs FleetAgentPolicy#monitor_logs}
  */
  readonly monitorLogs?: boolean | cdktf.IResolvable;
  /**
  * Enable collection of agent metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#monitor_metrics FleetAgentPolicy#monitor_metrics}
  */
  readonly monitorMetrics?: boolean | cdktf.IResolvable;
  /**
  * The identifier for monitoring output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#monitoring_output_id FleetAgentPolicy#monitoring_output_id}
  */
  readonly monitoringOutputId?: string;
  /**
  * The name of the agent policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#name FleetAgentPolicy#name}
  */
  readonly name: string;
  /**
  * The namespace of the agent policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#namespace FleetAgentPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * Unique identifier of the agent policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#policy_id FleetAgentPolicy#policy_id}
  */
  readonly policyId?: string;
  /**
  * Set to true if you do not wish the agent policy to be deleted at destroy time, and instead just remove the agent policy from the Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#skip_destroy FleetAgentPolicy#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable agentless data collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#supports_agentless FleetAgentPolicy#supports_agentless}
  */
  readonly supportsAgentless?: boolean | cdktf.IResolvable;
  /**
  * Enable collection of system logs and metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#sys_monitoring FleetAgentPolicy#sys_monitoring}
  */
  readonly sysMonitoring?: boolean | cdktf.IResolvable;
  /**
  * The unenrollment timeout for the agent policy. If an agent is inactive for this period, it will be automatically unenrolled. Supports duration strings (e.g., '30s', '2m', '1h').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#unenrollment_timeout FleetAgentPolicy#unenrollment_timeout}
  */
  readonly unenrollmentTimeout?: string;
}
export interface FleetAgentPolicyGlobalDataTags {
  /**
  * Number value for the field. If this is set, string_value must not be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#number_value FleetAgentPolicy#number_value}
  */
  readonly numberValue?: number;
  /**
  * String value for the field. If this is set, number_value must not be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#string_value FleetAgentPolicy#string_value}
  */
  readonly stringValue?: string;
}

export function fleetAgentPolicyGlobalDataTagsToTerraform(struct?: FleetAgentPolicyGlobalDataTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_value: cdktf.numberToTerraform(struct!.numberValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function fleetAgentPolicyGlobalDataTagsToHclTerraform(struct?: FleetAgentPolicyGlobalDataTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_value: {
      value: cdktf.numberToHclTerraform(struct!.numberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAgentPolicyGlobalDataTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): FleetAgentPolicyGlobalDataTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValue = this._numberValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAgentPolicyGlobalDataTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValue = value.numberValue;
      this._stringValue = value.stringValue;
    }
  }

  // number_value - computed: true, optional: true, required: false
  private _numberValue?: number; 
  public get numberValue() {
    return this.getNumberAttribute('number_value');
  }
  public set numberValue(value: number) {
    this._numberValue = value;
  }
  public resetNumberValue() {
    this._numberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValueInput() {
    return this._numberValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class FleetAgentPolicyGlobalDataTagsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: FleetAgentPolicyGlobalDataTags } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): FleetAgentPolicyGlobalDataTagsOutputReference {
    return new FleetAgentPolicyGlobalDataTagsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy elasticstack_fleet_agent_policy}
*/
export class FleetAgentPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_fleet_agent_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAgentPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAgentPolicy to import
  * @param importFromId The id of the existing FleetAgentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAgentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_fleet_agent_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_agent_policy elasticstack_fleet_agent_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAgentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAgentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_fleet_agent_policy',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataOutputId = config.dataOutputId;
    this._description = config.description;
    this._downloadSourceId = config.downloadSourceId;
    this._fleetServerHostId = config.fleetServerHostId;
    this._globalDataTags.internalValue = config.globalDataTags;
    this._inactivityTimeout = config.inactivityTimeout;
    this._monitorLogs = config.monitorLogs;
    this._monitorMetrics = config.monitorMetrics;
    this._monitoringOutputId = config.monitoringOutputId;
    this._name = config.name;
    this._namespace = config.namespace;
    this._policyId = config.policyId;
    this._skipDestroy = config.skipDestroy;
    this._supportsAgentless = config.supportsAgentless;
    this._sysMonitoring = config.sysMonitoring;
    this._unenrollmentTimeout = config.unenrollmentTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_output_id - computed: false, optional: true, required: false
  private _dataOutputId?: string; 
  public get dataOutputId() {
    return this.getStringAttribute('data_output_id');
  }
  public set dataOutputId(value: string) {
    this._dataOutputId = value;
  }
  public resetDataOutputId() {
    this._dataOutputId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOutputIdInput() {
    return this._dataOutputId;
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

  // download_source_id - computed: false, optional: true, required: false
  private _downloadSourceId?: string; 
  public get downloadSourceId() {
    return this.getStringAttribute('download_source_id');
  }
  public set downloadSourceId(value: string) {
    this._downloadSourceId = value;
  }
  public resetDownloadSourceId() {
    this._downloadSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadSourceIdInput() {
    return this._downloadSourceId;
  }

  // fleet_server_host_id - computed: false, optional: true, required: false
  private _fleetServerHostId?: string; 
  public get fleetServerHostId() {
    return this.getStringAttribute('fleet_server_host_id');
  }
  public set fleetServerHostId(value: string) {
    this._fleetServerHostId = value;
  }
  public resetFleetServerHostId() {
    this._fleetServerHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetServerHostIdInput() {
    return this._fleetServerHostId;
  }

  // global_data_tags - computed: true, optional: true, required: false
  private _globalDataTags = new FleetAgentPolicyGlobalDataTagsMap(this, "global_data_tags");
  public get globalDataTags() {
    return this._globalDataTags;
  }
  public putGlobalDataTags(value: { [key: string]: FleetAgentPolicyGlobalDataTags } | cdktf.IResolvable) {
    this._globalDataTags.internalValue = value;
  }
  public resetGlobalDataTags() {
    this._globalDataTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDataTagsInput() {
    return this._globalDataTags.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactivity_timeout - computed: true, optional: true, required: false
  private _inactivityTimeout?: string; 
  public get inactivityTimeout() {
    return this.getStringAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: string) {
    this._inactivityTimeout = value;
  }
  public resetInactivityTimeout() {
    this._inactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // monitor_logs - computed: true, optional: true, required: false
  private _monitorLogs?: boolean | cdktf.IResolvable; 
  public get monitorLogs() {
    return this.getBooleanAttribute('monitor_logs');
  }
  public set monitorLogs(value: boolean | cdktf.IResolvable) {
    this._monitorLogs = value;
  }
  public resetMonitorLogs() {
    this._monitorLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorLogsInput() {
    return this._monitorLogs;
  }

  // monitor_metrics - computed: true, optional: true, required: false
  private _monitorMetrics?: boolean | cdktf.IResolvable; 
  public get monitorMetrics() {
    return this.getBooleanAttribute('monitor_metrics');
  }
  public set monitorMetrics(value: boolean | cdktf.IResolvable) {
    this._monitorMetrics = value;
  }
  public resetMonitorMetrics() {
    this._monitorMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMetricsInput() {
    return this._monitorMetrics;
  }

  // monitoring_output_id - computed: false, optional: true, required: false
  private _monitoringOutputId?: string; 
  public get monitoringOutputId() {
    return this.getStringAttribute('monitoring_output_id');
  }
  public set monitoringOutputId(value: string) {
    this._monitoringOutputId = value;
  }
  public resetMonitoringOutputId() {
    this._monitoringOutputId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringOutputIdInput() {
    return this._monitoringOutputId;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktf.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktf.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
  }

  // supports_agentless - computed: false, optional: true, required: false
  private _supportsAgentless?: boolean | cdktf.IResolvable; 
  public get supportsAgentless() {
    return this.getBooleanAttribute('supports_agentless');
  }
  public set supportsAgentless(value: boolean | cdktf.IResolvable) {
    this._supportsAgentless = value;
  }
  public resetSupportsAgentless() {
    this._supportsAgentless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsAgentlessInput() {
    return this._supportsAgentless;
  }

  // sys_monitoring - computed: false, optional: true, required: false
  private _sysMonitoring?: boolean | cdktf.IResolvable; 
  public get sysMonitoring() {
    return this.getBooleanAttribute('sys_monitoring');
  }
  public set sysMonitoring(value: boolean | cdktf.IResolvable) {
    this._sysMonitoring = value;
  }
  public resetSysMonitoring() {
    this._sysMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysMonitoringInput() {
    return this._sysMonitoring;
  }

  // unenrollment_timeout - computed: true, optional: true, required: false
  private _unenrollmentTimeout?: string; 
  public get unenrollmentTimeout() {
    return this.getStringAttribute('unenrollment_timeout');
  }
  public set unenrollmentTimeout(value: string) {
    this._unenrollmentTimeout = value;
  }
  public resetUnenrollmentTimeout() {
    this._unenrollmentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unenrollmentTimeoutInput() {
    return this._unenrollmentTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_output_id: cdktf.stringToTerraform(this._dataOutputId),
      description: cdktf.stringToTerraform(this._description),
      download_source_id: cdktf.stringToTerraform(this._downloadSourceId),
      fleet_server_host_id: cdktf.stringToTerraform(this._fleetServerHostId),
      global_data_tags: cdktf.hashMapper(fleetAgentPolicyGlobalDataTagsToTerraform)(this._globalDataTags.internalValue),
      inactivity_timeout: cdktf.stringToTerraform(this._inactivityTimeout),
      monitor_logs: cdktf.booleanToTerraform(this._monitorLogs),
      monitor_metrics: cdktf.booleanToTerraform(this._monitorMetrics),
      monitoring_output_id: cdktf.stringToTerraform(this._monitoringOutputId),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      policy_id: cdktf.stringToTerraform(this._policyId),
      skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
      supports_agentless: cdktf.booleanToTerraform(this._supportsAgentless),
      sys_monitoring: cdktf.booleanToTerraform(this._sysMonitoring),
      unenrollment_timeout: cdktf.stringToTerraform(this._unenrollmentTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_output_id: {
        value: cdktf.stringToHclTerraform(this._dataOutputId),
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
      download_source_id: {
        value: cdktf.stringToHclTerraform(this._downloadSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_server_host_id: {
        value: cdktf.stringToHclTerraform(this._fleetServerHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_data_tags: {
        value: cdktf.hashMapperHcl(fleetAgentPolicyGlobalDataTagsToHclTerraform)(this._globalDataTags.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "FleetAgentPolicyGlobalDataTagsMap",
      },
      inactivity_timeout: {
        value: cdktf.stringToHclTerraform(this._inactivityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_logs: {
        value: cdktf.booleanToHclTerraform(this._monitorLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitor_metrics: {
        value: cdktf.booleanToHclTerraform(this._monitorMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring_output_id: {
        value: cdktf.stringToHclTerraform(this._monitoringOutputId),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_destroy: {
        value: cdktf.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_agentless: {
        value: cdktf.booleanToHclTerraform(this._supportsAgentless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sys_monitoring: {
        value: cdktf.booleanToHclTerraform(this._sysMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unenrollment_timeout: {
        value: cdktf.stringToHclTerraform(this._unenrollmentTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
