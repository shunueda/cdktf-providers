// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudConfigAggregateConfigRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#aggregate_config_rule_name DataAlicloudConfigAggregateConfigRules#aggregate_config_rule_name}
  */
  readonly aggregateConfigRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#aggregator_id DataAlicloudConfigAggregateConfigRules#aggregator_id}
  */
  readonly aggregatorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#enable_details DataAlicloudConfigAggregateConfigRules#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#id DataAlicloudConfigAggregateConfigRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#ids DataAlicloudConfigAggregateConfigRules#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#name_regex DataAlicloudConfigAggregateConfigRules#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#output_file DataAlicloudConfigAggregateConfigRules#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#risk_level DataAlicloudConfigAggregateConfigRules#risk_level}
  */
  readonly riskLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#status DataAlicloudConfigAggregateConfigRules#status}
  */
  readonly status?: string;
}
export interface DataAlicloudConfigAggregateConfigRulesRulesCompliance {
}

export function dataAlicloudConfigAggregateConfigRulesRulesComplianceToTerraform(struct?: DataAlicloudConfigAggregateConfigRulesRulesCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudConfigAggregateConfigRulesRulesComplianceToHclTerraform(struct?: DataAlicloudConfigAggregateConfigRulesRulesCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudConfigAggregateConfigRulesRulesComplianceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudConfigAggregateConfigRulesRulesCompliance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudConfigAggregateConfigRulesRulesCompliance | undefined) {
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

export class DataAlicloudConfigAggregateConfigRulesRulesComplianceList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudConfigAggregateConfigRulesRulesComplianceOutputReference {
    return new DataAlicloudConfigAggregateConfigRulesRulesComplianceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudConfigAggregateConfigRulesRules {
}

export function dataAlicloudConfigAggregateConfigRulesRulesToTerraform(struct?: DataAlicloudConfigAggregateConfigRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudConfigAggregateConfigRulesRulesToHclTerraform(struct?: DataAlicloudConfigAggregateConfigRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudConfigAggregateConfigRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudConfigAggregateConfigRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudConfigAggregateConfigRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // aggregate_config_rule_name - computed: true, optional: false, required: false
  public get aggregateConfigRuleName() {
    return this.getStringAttribute('aggregate_config_rule_name');
  }

  // aggregator_id - computed: true, optional: false, required: false
  public get aggregatorId() {
    return this.getStringAttribute('aggregator_id');
  }

  // compliance - computed: true, optional: false, required: false
  private _compliance = new DataAlicloudConfigAggregateConfigRulesRulesComplianceList(this, "compliance", false);
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

  // config_rule_trigger_types - computed: true, optional: false, required: false
  public get configRuleTriggerTypes() {
    return this.getStringAttribute('config_rule_trigger_types');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_source - computed: true, optional: false, required: false
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }

  // exclude_resource_ids_scope - computed: true, optional: false, required: false
  public get excludeResourceIdsScope() {
    return this.getStringAttribute('exclude_resource_ids_scope');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_parameters - computed: true, optional: false, required: false
  private _inputParameters = new cdktf.StringMap(this, "input_parameters");
  public get inputParameters() {
    return this._inputParameters;
  }

  // maximum_execution_frequency - computed: true, optional: false, required: false
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }

  // modified_timestamp - computed: true, optional: false, required: false
  public get modifiedTimestamp() {
    return this.getStringAttribute('modified_timestamp');
  }

  // region_ids_scope - computed: true, optional: false, required: false
  public get regionIdsScope() {
    return this.getStringAttribute('region_ids_scope');
  }

  // resource_group_ids_scope - computed: true, optional: false, required: false
  public get resourceGroupIdsScope() {
    return this.getStringAttribute('resource_group_ids_scope');
  }

  // resource_types_scope - computed: true, optional: false, required: false
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }

  // risk_level - computed: true, optional: false, required: false
  public get riskLevel() {
    return this.getNumberAttribute('risk_level');
  }

  // source_identifier - computed: true, optional: false, required: false
  public get sourceIdentifier() {
    return this.getStringAttribute('source_identifier');
  }

  // source_owner - computed: true, optional: false, required: false
  public get sourceOwner() {
    return this.getStringAttribute('source_owner');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag_key_scope - computed: true, optional: false, required: false
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }

  // tag_value_scope - computed: true, optional: false, required: false
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
}

export class DataAlicloudConfigAggregateConfigRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudConfigAggregateConfigRulesRulesOutputReference {
    return new DataAlicloudConfigAggregateConfigRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules alicloud_config_aggregate_config_rules}
*/
export class DataAlicloudConfigAggregateConfigRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_config_aggregate_config_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudConfigAggregateConfigRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudConfigAggregateConfigRules to import
  * @param importFromId The id of the existing DataAlicloudConfigAggregateConfigRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudConfigAggregateConfigRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_config_aggregate_config_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/config_aggregate_config_rules alicloud_config_aggregate_config_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudConfigAggregateConfigRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudConfigAggregateConfigRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_config_aggregate_config_rules',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._riskLevel = config.riskLevel;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_config_rule_name - computed: false, optional: true, required: false
  private _aggregateConfigRuleName?: string; 
  public get aggregateConfigRuleName() {
    return this.getStringAttribute('aggregate_config_rule_name');
  }
  public set aggregateConfigRuleName(value: string) {
    this._aggregateConfigRuleName = value;
  }
  public resetAggregateConfigRuleName() {
    this._aggregateConfigRuleName = undefined;
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

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // risk_level - computed: false, optional: true, required: false
  private _riskLevel?: number; 
  public get riskLevel() {
    return this.getNumberAttribute('risk_level');
  }
  public set riskLevel(value: number) {
    this._riskLevel = value;
  }
  public resetRiskLevel() {
    this._riskLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAlicloudConfigAggregateConfigRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // status - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate_config_rule_name: cdktf.stringToTerraform(this._aggregateConfigRuleName),
      aggregator_id: cdktf.stringToTerraform(this._aggregatorId),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      risk_level: cdktf.numberToTerraform(this._riskLevel),
      status: cdktf.stringToTerraform(this._status),
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
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_level: {
        value: cdktf.numberToHclTerraform(this._riskLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
