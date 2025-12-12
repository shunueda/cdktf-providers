// https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetIntegrationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the agent policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#agent_policy_id FleetIntegrationPolicy#agent_policy_id}
  */
  readonly agentPolicyId?: string;
  /**
  * List of agent policy IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#agent_policy_ids FleetIntegrationPolicy#agent_policy_ids}
  */
  readonly agentPolicyIds?: string[];
  /**
  * The description of the integration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#description FleetIntegrationPolicy#description}
  */
  readonly description?: string;
  /**
  * Enable the integration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#enabled FleetIntegrationPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Force operations, such as creation and deletion, to occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#force FleetIntegrationPolicy#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * The name of the integration package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#integration_name FleetIntegrationPolicy#integration_name}
  */
  readonly integrationName: string;
  /**
  * The version of the integration package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#integration_version FleetIntegrationPolicy#integration_version}
  */
  readonly integrationVersion: string;
  /**
  * The name of the integration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#name FleetIntegrationPolicy#name}
  */
  readonly name: string;
  /**
  * The namespace of the integration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#namespace FleetIntegrationPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * The ID of the output to send data to. When not specified, the default output of the agent policy will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#output_id FleetIntegrationPolicy#output_id}
  */
  readonly outputId?: string;
  /**
  * Unique identifier of the integration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#policy_id FleetIntegrationPolicy#policy_id}
  */
  readonly policyId?: string;
  /**
  * The Kibana space IDs where this integration policy is available. When set, must match the space_ids of the referenced agent policy. If not set, will be inherited from the agent policy. Note: The order of space IDs does not matter as this is a set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#space_ids FleetIntegrationPolicy#space_ids}
  */
  readonly spaceIds?: string[];
  /**
  * Integration-level variables as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#vars_json FleetIntegrationPolicy#vars_json}
  */
  readonly varsJson?: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#input FleetIntegrationPolicy#input}
  */
  readonly input?: FleetIntegrationPolicyInput[] | cdktf.IResolvable;
}
export interface FleetIntegrationPolicyInput {
  /**
  * Enable the input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#enabled FleetIntegrationPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#input_id FleetIntegrationPolicy#input_id}
  */
  readonly inputId: string;
  /**
  * Input streams as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#streams_json FleetIntegrationPolicy#streams_json}
  */
  readonly streamsJson?: string;
  /**
  * Input variables as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#vars_json FleetIntegrationPolicy#vars_json}
  */
  readonly varsJson?: string;
}

export function fleetIntegrationPolicyInputToTerraform(struct?: FleetIntegrationPolicyInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    input_id: cdktf.stringToTerraform(struct!.inputId),
    streams_json: cdktf.stringToTerraform(struct!.streamsJson),
    vars_json: cdktf.stringToTerraform(struct!.varsJson),
  }
}


export function fleetIntegrationPolicyInputToHclTerraform(struct?: FleetIntegrationPolicyInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_id: {
      value: cdktf.stringToHclTerraform(struct!.inputId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streams_json: {
      value: cdktf.stringToHclTerraform(struct!.streamsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vars_json: {
      value: cdktf.stringToHclTerraform(struct!.varsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetIntegrationPolicyInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetIntegrationPolicyInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inputId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputId = this._inputId;
    }
    if (this._streamsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamsJson = this._streamsJson;
    }
    if (this._varsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.varsJson = this._varsJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetIntegrationPolicyInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._inputId = undefined;
      this._streamsJson = undefined;
      this._varsJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._inputId = value.inputId;
      this._streamsJson = value.streamsJson;
      this._varsJson = value.varsJson;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // input_id - computed: false, optional: false, required: true
  private _inputId?: string; 
  public get inputId() {
    return this.getStringAttribute('input_id');
  }
  public set inputId(value: string) {
    this._inputId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputIdInput() {
    return this._inputId;
  }

  // streams_json - computed: true, optional: true, required: false
  private _streamsJson?: string; 
  public get streamsJson() {
    return this.getStringAttribute('streams_json');
  }
  public set streamsJson(value: string) {
    this._streamsJson = value;
  }
  public resetStreamsJson() {
    this._streamsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsJsonInput() {
    return this._streamsJson;
  }

  // vars_json - computed: true, optional: true, required: false
  private _varsJson?: string; 
  public get varsJson() {
    return this.getStringAttribute('vars_json');
  }
  public set varsJson(value: string) {
    this._varsJson = value;
  }
  public resetVarsJson() {
    this._varsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsJsonInput() {
    return this._varsJson;
  }
}

export class FleetIntegrationPolicyInputList extends cdktf.ComplexList {
  public internalValue? : FleetIntegrationPolicyInput[] | cdktf.IResolvable

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
  public get(index: number): FleetIntegrationPolicyInputOutputReference {
    return new FleetIntegrationPolicyInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy elasticstack_fleet_integration_policy}
*/
export class FleetIntegrationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_fleet_integration_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetIntegrationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetIntegrationPolicy to import
  * @param importFromId The id of the existing FleetIntegrationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetIntegrationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_fleet_integration_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/fleet_integration_policy elasticstack_fleet_integration_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetIntegrationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FleetIntegrationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_fleet_integration_policy',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentPolicyId = config.agentPolicyId;
    this._agentPolicyIds = config.agentPolicyIds;
    this._description = config.description;
    this._enabled = config.enabled;
    this._force = config.force;
    this._integrationName = config.integrationName;
    this._integrationVersion = config.integrationVersion;
    this._name = config.name;
    this._namespace = config.namespace;
    this._outputId = config.outputId;
    this._policyId = config.policyId;
    this._spaceIds = config.spaceIds;
    this._varsJson = config.varsJson;
    this._input.internalValue = config.input;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_policy_id - computed: false, optional: true, required: false
  private _agentPolicyId?: string; 
  public get agentPolicyId() {
    return this.getStringAttribute('agent_policy_id');
  }
  public set agentPolicyId(value: string) {
    this._agentPolicyId = value;
  }
  public resetAgentPolicyId() {
    this._agentPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPolicyIdInput() {
    return this._agentPolicyId;
  }

  // agent_policy_ids - computed: false, optional: true, required: false
  private _agentPolicyIds?: string[]; 
  public get agentPolicyIds() {
    return this.getListAttribute('agent_policy_ids');
  }
  public set agentPolicyIds(value: string[]) {
    this._agentPolicyIds = value;
  }
  public resetAgentPolicyIds() {
    this._agentPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPolicyIdsInput() {
    return this._agentPolicyIds;
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

  // enabled - computed: true, optional: true, required: false
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

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_name - computed: false, optional: false, required: true
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // integration_version - computed: false, optional: false, required: true
  private _integrationVersion?: string; 
  public get integrationVersion() {
    return this.getStringAttribute('integration_version');
  }
  public set integrationVersion(value: string) {
    this._integrationVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationVersionInput() {
    return this._integrationVersion;
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

  // output_id - computed: false, optional: true, required: false
  private _outputId?: string; 
  public get outputId() {
    return this.getStringAttribute('output_id');
  }
  public set outputId(value: string) {
    this._outputId = value;
  }
  public resetOutputId() {
    this._outputId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputIdInput() {
    return this._outputId;
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

  // space_ids - computed: true, optional: true, required: false
  private _spaceIds?: string[]; 
  public get spaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('space_ids'));
  }
  public set spaceIds(value: string[]) {
    this._spaceIds = value;
  }
  public resetSpaceIds() {
    this._spaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdsInput() {
    return this._spaceIds;
  }

  // vars_json - computed: true, optional: true, required: false
  private _varsJson?: string; 
  public get varsJson() {
    return this.getStringAttribute('vars_json');
  }
  public set varsJson(value: string) {
    this._varsJson = value;
  }
  public resetVarsJson() {
    this._varsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsJsonInput() {
    return this._varsJson;
  }

  // input - computed: false, optional: true, required: false
  private _input = new FleetIntegrationPolicyInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: FleetIntegrationPolicyInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_policy_id: cdktf.stringToTerraform(this._agentPolicyId),
      agent_policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agentPolicyIds),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      force: cdktf.booleanToTerraform(this._force),
      integration_name: cdktf.stringToTerraform(this._integrationName),
      integration_version: cdktf.stringToTerraform(this._integrationVersion),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      output_id: cdktf.stringToTerraform(this._outputId),
      policy_id: cdktf.stringToTerraform(this._policyId),
      space_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spaceIds),
      vars_json: cdktf.stringToTerraform(this._varsJson),
      input: cdktf.listMapper(fleetIntegrationPolicyInputToTerraform, true)(this._input.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_policy_id: {
        value: cdktf.stringToHclTerraform(this._agentPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agentPolicyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integration_name: {
        value: cdktf.stringToHclTerraform(this._integrationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_version: {
        value: cdktf.stringToHclTerraform(this._integrationVersion),
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
      output_id: {
        value: cdktf.stringToHclTerraform(this._outputId),
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
      space_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vars_json: {
        value: cdktf.stringToHclTerraform(this._varsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: cdktf.listMapperHcl(fleetIntegrationPolicyInputToHclTerraform, true)(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetIntegrationPolicyInputList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
