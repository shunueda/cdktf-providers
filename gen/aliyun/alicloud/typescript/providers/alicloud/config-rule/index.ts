// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#config_rule_trigger_types ConfigRule#config_rule_trigger_types}
  */
  readonly configRuleTriggerTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#description ConfigRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#exclude_resource_ids_scope ConfigRule#exclude_resource_ids_scope}
  */
  readonly excludeResourceIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#id ConfigRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#input_parameters ConfigRule#input_parameters}
  */
  readonly inputParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#maximum_execution_frequency ConfigRule#maximum_execution_frequency}
  */
  readonly maximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#region_ids_scope ConfigRule#region_ids_scope}
  */
  readonly regionIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#resource_group_ids_scope ConfigRule#resource_group_ids_scope}
  */
  readonly resourceGroupIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#resource_types_scope ConfigRule#resource_types_scope}
  */
  readonly resourceTypesScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#risk_level ConfigRule#risk_level}
  */
  readonly riskLevel: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#rule_name ConfigRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#scope_compliance_resource_types ConfigRule#scope_compliance_resource_types}
  */
  readonly scopeComplianceResourceTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#source_detail_message_type ConfigRule#source_detail_message_type}
  */
  readonly sourceDetailMessageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#source_identifier ConfigRule#source_identifier}
  */
  readonly sourceIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#source_maximum_execution_frequency ConfigRule#source_maximum_execution_frequency}
  */
  readonly sourceMaximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#source_owner ConfigRule#source_owner}
  */
  readonly sourceOwner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#status ConfigRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#tag_key_scope ConfigRule#tag_key_scope}
  */
  readonly tagKeyScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#tag_value_scope ConfigRule#tag_value_scope}
  */
  readonly tagValueScope?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#timeouts ConfigRule#timeouts}
  */
  readonly timeouts?: ConfigRuleTimeouts;
}
export interface ConfigRuleCompliance {
}

export function configRuleComplianceToTerraform(struct?: ConfigRuleCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configRuleComplianceToHclTerraform(struct?: ConfigRuleCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigRuleComplianceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigRuleCompliance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigRuleCompliance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_type - computed: true, optional: false, required: false
  public get complianceType() {
    return this.getStringAttribute('compliance_type');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}

export class ConfigRuleComplianceList extends cdktf.ComplexList {

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
  public get(index: number): ConfigRuleComplianceOutputReference {
    return new ConfigRuleComplianceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#create ConfigRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#delete ConfigRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#update ConfigRule#update}
  */
  readonly update?: string;
}

export function configRuleTimeoutsToTerraform(struct?: ConfigRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function configRuleTimeoutsToHclTerraform(struct?: ConfigRuleTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class ConfigRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule alicloud_config_rule}
*/
export class ConfigRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_config_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigRule to import
  * @param importFromId The id of the existing ConfigRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_config_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_rule alicloud_config_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_config_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
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
    this._ruleName = config.ruleName;
    this._scopeComplianceResourceTypes = config.scopeComplianceResourceTypes;
    this._sourceDetailMessageType = config.sourceDetailMessageType;
    this._sourceIdentifier = config.sourceIdentifier;
    this._sourceMaximumExecutionFrequency = config.sourceMaximumExecutionFrequency;
    this._sourceOwner = config.sourceOwner;
    this._status = config.status;
    this._tagKeyScope = config.tagKeyScope;
    this._tagValueScope = config.tagValueScope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // compliance - computed: true, optional: false, required: false
  private _compliance = new ConfigRuleComplianceList(this, "compliance", false);
  public get compliance() {
    return this._compliance;
  }

  // compliance_pack_id - computed: true, optional: false, required: false
  public get compliancePackId() {
    return this.getStringAttribute('compliance_pack_id');
  }

  // config_rule_arn - computed: true, optional: false, required: false
  public get configRuleArn() {
    return this.getStringAttribute('config_rule_arn');
  }

  // config_rule_id - computed: true, optional: false, required: false
  public get configRuleId() {
    return this.getStringAttribute('config_rule_id');
  }

  // config_rule_trigger_types - computed: true, optional: true, required: false
  private _configRuleTriggerTypes?: string; 
  public get configRuleTriggerTypes() {
    return this.getStringAttribute('config_rule_trigger_types');
  }
  public set configRuleTriggerTypes(value: string) {
    this._configRuleTriggerTypes = value;
  }
  public resetConfigRuleTriggerTypes() {
    this._configRuleTriggerTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRuleTriggerTypesInput() {
    return this._configRuleTriggerTypes;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // event_source - computed: true, optional: false, required: false
  public get eventSource() {
    return this.getStringAttribute('event_source');
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

  // modified_timestamp - computed: true, optional: false, required: false
  public get modifiedTimestamp() {
    return this.getNumberAttribute('modified_timestamp');
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

  // resource_types_scope - computed: true, optional: true, required: false
  private _resourceTypesScope?: string[]; 
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }
  public set resourceTypesScope(value: string[]) {
    this._resourceTypesScope = value;
  }
  public resetResourceTypesScope() {
    this._resourceTypesScope = undefined;
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

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // scope_compliance_resource_types - computed: true, optional: true, required: false
  private _scopeComplianceResourceTypes?: string; 
  public get scopeComplianceResourceTypes() {
    return this.getStringAttribute('scope_compliance_resource_types');
  }
  public set scopeComplianceResourceTypes(value: string) {
    this._scopeComplianceResourceTypes = value;
  }
  public resetScopeComplianceResourceTypes() {
    this._scopeComplianceResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeComplianceResourceTypesInput() {
    return this._scopeComplianceResourceTypes;
  }

  // source_detail_message_type - computed: true, optional: true, required: false
  private _sourceDetailMessageType?: string; 
  public get sourceDetailMessageType() {
    return this.getStringAttribute('source_detail_message_type');
  }
  public set sourceDetailMessageType(value: string) {
    this._sourceDetailMessageType = value;
  }
  public resetSourceDetailMessageType() {
    this._sourceDetailMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailMessageTypeInput() {
    return this._sourceDetailMessageType;
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

  // source_maximum_execution_frequency - computed: true, optional: true, required: false
  private _sourceMaximumExecutionFrequency?: string; 
  public get sourceMaximumExecutionFrequency() {
    return this.getStringAttribute('source_maximum_execution_frequency');
  }
  public set sourceMaximumExecutionFrequency(value: string) {
    this._sourceMaximumExecutionFrequency = value;
  }
  public resetSourceMaximumExecutionFrequency() {
    this._sourceMaximumExecutionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMaximumExecutionFrequencyInput() {
    return this._sourceMaximumExecutionFrequency;
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
  private _timeouts = new ConfigRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigRuleTimeouts) {
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
      rule_name: cdktf.stringToTerraform(this._ruleName),
      scope_compliance_resource_types: cdktf.stringToTerraform(this._scopeComplianceResourceTypes),
      source_detail_message_type: cdktf.stringToTerraform(this._sourceDetailMessageType),
      source_identifier: cdktf.stringToTerraform(this._sourceIdentifier),
      source_maximum_execution_frequency: cdktf.stringToTerraform(this._sourceMaximumExecutionFrequency),
      source_owner: cdktf.stringToTerraform(this._sourceOwner),
      status: cdktf.stringToTerraform(this._status),
      tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
      tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
      timeouts: configRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_compliance_resource_types: {
        value: cdktf.stringToHclTerraform(this._scopeComplianceResourceTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_detail_message_type: {
        value: cdktf.stringToHclTerraform(this._sourceDetailMessageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_identifier: {
        value: cdktf.stringToHclTerraform(this._sourceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_maximum_execution_frequency: {
        value: cdktf.stringToHclTerraform(this._sourceMaximumExecutionFrequency),
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
        value: configRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
