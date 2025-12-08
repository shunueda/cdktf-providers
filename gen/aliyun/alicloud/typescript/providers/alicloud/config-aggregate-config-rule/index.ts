// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigAggregateConfigRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#aggregate_config_rule_name ConfigAggregateConfigRule#aggregate_config_rule_name}
  */
  readonly aggregateConfigRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#aggregator_id ConfigAggregateConfigRule#aggregator_id}
  */
  readonly aggregatorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#config_rule_trigger_types ConfigAggregateConfigRule#config_rule_trigger_types}
  */
  readonly configRuleTriggerTypes: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#description ConfigAggregateConfigRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#exclude_resource_ids_scope ConfigAggregateConfigRule#exclude_resource_ids_scope}
  */
  readonly excludeResourceIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#id ConfigAggregateConfigRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#input_parameters ConfigAggregateConfigRule#input_parameters}
  */
  readonly inputParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#maximum_execution_frequency ConfigAggregateConfigRule#maximum_execution_frequency}
  */
  readonly maximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#region_ids_scope ConfigAggregateConfigRule#region_ids_scope}
  */
  readonly regionIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#resource_group_ids_scope ConfigAggregateConfigRule#resource_group_ids_scope}
  */
  readonly resourceGroupIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#resource_types_scope ConfigAggregateConfigRule#resource_types_scope}
  */
  readonly resourceTypesScope: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#risk_level ConfigAggregateConfigRule#risk_level}
  */
  readonly riskLevel: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#source_identifier ConfigAggregateConfigRule#source_identifier}
  */
  readonly sourceIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#source_owner ConfigAggregateConfigRule#source_owner}
  */
  readonly sourceOwner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#status ConfigAggregateConfigRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#tag_key_scope ConfigAggregateConfigRule#tag_key_scope}
  */
  readonly tagKeyScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#tag_value_scope ConfigAggregateConfigRule#tag_value_scope}
  */
  readonly tagValueScope?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#timeouts ConfigAggregateConfigRule#timeouts}
  */
  readonly timeouts?: ConfigAggregateConfigRuleTimeouts;
}
export interface ConfigAggregateConfigRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#create ConfigAggregateConfigRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#update ConfigAggregateConfigRule#update}
  */
  readonly update?: string;
}

export function configAggregateConfigRuleTimeoutsToTerraform(struct?: ConfigAggregateConfigRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function configAggregateConfigRuleTimeoutsToHclTerraform(struct?: ConfigAggregateConfigRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigAggregateConfigRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigAggregateConfigRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigAggregateConfigRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule alicloud_config_aggregate_config_rule}
*/
export class ConfigAggregateConfigRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_config_aggregate_config_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigAggregateConfigRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigAggregateConfigRule to import
  * @param importFromId The id of the existing ConfigAggregateConfigRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigAggregateConfigRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_config_aggregate_config_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/config_aggregate_config_rule alicloud_config_aggregate_config_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigAggregateConfigRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigAggregateConfigRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_config_aggregate_config_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregateConfigRuleName = config.aggregateConfigRuleName;
    this._aggregatorId = config.aggregatorId;
    this._configRuleTriggerTypes = config.configRuleTriggerTypes;
    this._description = config.description;
    this._excludeResourceIdsScope = config.excludeResourceIdsScope;
    this._id = config.id;
    this._inputParameters = config.inputParameters;
    this._maximumExecutionFrequency = config.maximumExecutionFrequency;
    this._regionIdsScope = config.regionIdsScope;
    this._resourceGroupIdsScope = config.resourceGroupIdsScope;
    this._resourceTypesScope = config.resourceTypesScope;
    this._riskLevel = config.riskLevel;
    this._sourceIdentifier = config.sourceIdentifier;
    this._sourceOwner = config.sourceOwner;
    this._status = config.status;
    this._tagKeyScope = config.tagKeyScope;
    this._tagValueScope = config.tagValueScope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_config_rule_name - computed: false, optional: false, required: true
  private _aggregateConfigRuleName?: string; 
  public get aggregateConfigRuleName() {
    return this.getStringAttribute('aggregate_config_rule_name');
  }
  public set aggregateConfigRuleName(value: string) {
    this._aggregateConfigRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateConfigRuleNameInput() {
    return this._aggregateConfigRuleName;
  }

  // aggregator_id - computed: false, optional: false, required: true
  private _aggregatorId?: string; 
  public get aggregatorId() {
    return this.getStringAttribute('aggregator_id');
  }
  public set aggregatorId(value: string) {
    this._aggregatorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorIdInput() {
    return this._aggregatorId;
  }

  // config_rule_id - computed: true, optional: false, required: false
  public get configRuleId() {
    return this.getStringAttribute('config_rule_id');
  }

  // config_rule_trigger_types - computed: false, optional: false, required: true
  private _configRuleTriggerTypes?: string; 
  public get configRuleTriggerTypes() {
    return this.getStringAttribute('config_rule_trigger_types');
  }
  public set configRuleTriggerTypes(value: string) {
    this._configRuleTriggerTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configRuleTriggerTypesInput() {
    return this._configRuleTriggerTypes;
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

  // exclude_resource_ids_scope - computed: false, optional: true, required: false
  private _excludeResourceIdsScope?: string; 
  public get excludeResourceIdsScope() {
    return this.getStringAttribute('exclude_resource_ids_scope');
  }
  public set excludeResourceIdsScope(value: string) {
    this._excludeResourceIdsScope = value;
  }
  public resetExcludeResourceIdsScope() {
    this._excludeResourceIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceIdsScopeInput() {
    return this._excludeResourceIdsScope;
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

  // input_parameters - computed: false, optional: true, required: false
  private _inputParameters?: { [key: string]: string }; 
  public get inputParameters() {
    return this.getStringMapAttribute('input_parameters');
  }
  public set inputParameters(value: { [key: string]: string }) {
    this._inputParameters = value;
  }
  public resetInputParameters() {
    this._inputParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParametersInput() {
    return this._inputParameters;
  }

  // maximum_execution_frequency - computed: true, optional: true, required: false
  private _maximumExecutionFrequency?: string; 
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }
  public set maximumExecutionFrequency(value: string) {
    this._maximumExecutionFrequency = value;
  }
  public resetMaximumExecutionFrequency() {
    this._maximumExecutionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionFrequencyInput() {
    return this._maximumExecutionFrequency;
  }

  // region_ids_scope - computed: false, optional: true, required: false
  private _regionIdsScope?: string; 
  public get regionIdsScope() {
    return this.getStringAttribute('region_ids_scope');
  }
  public set regionIdsScope(value: string) {
    this._regionIdsScope = value;
  }
  public resetRegionIdsScope() {
    this._regionIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdsScopeInput() {
    return this._regionIdsScope;
  }

  // resource_group_ids_scope - computed: false, optional: true, required: false
  private _resourceGroupIdsScope?: string; 
  public get resourceGroupIdsScope() {
    return this.getStringAttribute('resource_group_ids_scope');
  }
  public set resourceGroupIdsScope(value: string) {
    this._resourceGroupIdsScope = value;
  }
  public resetResourceGroupIdsScope() {
    this._resourceGroupIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdsScopeInput() {
    return this._resourceGroupIdsScope;
  }

  // resource_types_scope - computed: false, optional: false, required: true
  private _resourceTypesScope?: string[]; 
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }
  public set resourceTypesScope(value: string[]) {
    this._resourceTypesScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesScopeInput() {
    return this._resourceTypesScope;
  }

  // risk_level - computed: false, optional: false, required: true
  private _riskLevel?: number; 
  public get riskLevel() {
    return this.getNumberAttribute('risk_level');
  }
  public set riskLevel(value: number) {
    this._riskLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // source_identifier - computed: false, optional: false, required: true
  private _sourceIdentifier?: string; 
  public get sourceIdentifier() {
    return this.getStringAttribute('source_identifier');
  }
  public set sourceIdentifier(value: string) {
    this._sourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdentifierInput() {
    return this._sourceIdentifier;
  }

  // source_owner - computed: false, optional: false, required: true
  private _sourceOwner?: string; 
  public get sourceOwner() {
    return this.getStringAttribute('source_owner');
  }
  public set sourceOwner(value: string) {
    this._sourceOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOwnerInput() {
    return this._sourceOwner;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag_key_scope - computed: false, optional: true, required: false
  private _tagKeyScope?: string; 
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }
  public set tagKeyScope(value: string) {
    this._tagKeyScope = value;
  }
  public resetTagKeyScope() {
    this._tagKeyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyScopeInput() {
    return this._tagKeyScope;
  }

  // tag_value_scope - computed: false, optional: true, required: false
  private _tagValueScope?: string; 
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
  public set tagValueScope(value: string) {
    this._tagValueScope = value;
  }
  public resetTagValueScope() {
    this._tagValueScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueScopeInput() {
    return this._tagValueScope;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConfigAggregateConfigRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigAggregateConfigRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate_config_rule_name: cdktf.stringToTerraform(this._aggregateConfigRuleName),
      aggregator_id: cdktf.stringToTerraform(this._aggregatorId),
      config_rule_trigger_types: cdktf.stringToTerraform(this._configRuleTriggerTypes),
      description: cdktf.stringToTerraform(this._description),
      exclude_resource_ids_scope: cdktf.stringToTerraform(this._excludeResourceIdsScope),
      id: cdktf.stringToTerraform(this._id),
      input_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._inputParameters),
      maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
      region_ids_scope: cdktf.stringToTerraform(this._regionIdsScope),
      resource_group_ids_scope: cdktf.stringToTerraform(this._resourceGroupIdsScope),
      resource_types_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypesScope),
      risk_level: cdktf.numberToTerraform(this._riskLevel),
      source_identifier: cdktf.stringToTerraform(this._sourceIdentifier),
      source_owner: cdktf.stringToTerraform(this._sourceOwner),
      status: cdktf.stringToTerraform(this._status),
      tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
      tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
      timeouts: configAggregateConfigRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate_config_rule_name: {
        value: cdktf.stringToHclTerraform(this._aggregateConfigRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregator_id: {
        value: cdktf.stringToHclTerraform(this._aggregatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_rule_trigger_types: {
        value: cdktf.stringToHclTerraform(this._configRuleTriggerTypes),
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
      exclude_resource_ids_scope: {
        value: cdktf.stringToHclTerraform(this._excludeResourceIdsScope),
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
      input_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._inputParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maximum_execution_frequency: {
        value: cdktf.stringToHclTerraform(this._maximumExecutionFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_ids_scope: {
        value: cdktf.stringToHclTerraform(this._regionIdsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_ids_scope: {
        value: cdktf.stringToHclTerraform(this._resourceGroupIdsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_types_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypesScope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      risk_level: {
        value: cdktf.numberToHclTerraform(this._riskLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_identifier: {
        value: cdktf.stringToHclTerraform(this._sourceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_owner: {
        value: cdktf.stringToHclTerraform(this._sourceOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_key_scope: {
        value: cdktf.stringToHclTerraform(this._tagKeyScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value_scope: {
        value: cdktf.stringToHclTerraform(this._tagValueScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: configAggregateConfigRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigAggregateConfigRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
