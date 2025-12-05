// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataDqRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alarm trigger levels 1. Low, 2. Medium, 3. High.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#alarm_level WedataDqRule#alarm_level}
  */
  readonly alarmLevel: number;
  /**
  * Condition scans WHERE condition expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#condition_expression WedataDqRule#condition_expression}
  */
  readonly conditionExpression?: string;
  /**
  * Detection scope 1. Full Table 2. Conditional scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#condition_type WedataDqRule#condition_type}
  */
  readonly conditionType: number;
  /**
  * Custom sql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#custom_sql WedataDqRule#custom_sql}
  */
  readonly customSql?: string;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#description WedataDqRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#id WedataDqRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#name WedataDqRule#name}
  */
  readonly name: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#project_id WedataDqRule#project_id}
  */
  readonly projectId: string;
  /**
  * Rules belong to quality dimensions (1. accuracy, 2. uniqueness, 3. completeness, 4. consistency, 5. timeliness, 6. effectiveness).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#quality_dim WedataDqRule#quality_dim}
  */
  readonly qualityDim?: number;
  /**
  * The source field and the target field are associated with a conditional on expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#rel_condition_expr WedataDqRule#rel_condition_expr}
  */
  readonly relConditionExpr?: string;
  /**
  * Rule group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#rule_group_id WedataDqRule#rule_group_id}
  */
  readonly ruleGroupId?: number;
  /**
  * Rule template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#rule_template_id WedataDqRule#rule_template_id}
  */
  readonly ruleTemplateId: number;
  /**
  * List of execution engines supported by this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#source_engine_types WedataDqRule#source_engine_types}
  */
  readonly sourceEngineTypes?: number[];
  /**
  * Source field type. int, string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#source_object_data_type_name WedataDqRule#source_object_data_type_name}
  */
  readonly sourceObjectDataTypeName: string;
  /**
  * Source field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#source_object_value WedataDqRule#source_object_value}
  */
  readonly sourceObjectValue: string;
  /**
  * Table id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#table_id WedataDqRule#table_id}
  */
  readonly tableId?: string;
  /**
  * Target filter condition expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#target_condition_expr WedataDqRule#target_condition_expr}
  */
  readonly targetConditionExpr?: string;
  /**
  * Target database id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#target_database_id WedataDqRule#target_database_id}
  */
  readonly targetDatabaseId?: string;
  /**
  * Target field name  CITY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#target_object_value WedataDqRule#target_object_value}
  */
  readonly targetObjectValue?: string;
  /**
  * Target table id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#target_table_id WedataDqRule#target_table_id}
  */
  readonly targetTableId?: string;
  /**
  * Rule Type 1. System Template, 2. Custom Template, 3. Custom SQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#type WedataDqRule#type}
  */
  readonly type: number;
  /**
  * compare_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#compare_rule WedataDqRule#compare_rule}
  */
  readonly compareRule: WedataDqRuleCompareRule;
  /**
  * field_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#field_config WedataDqRule#field_config}
  */
  readonly fieldConfig?: WedataDqRuleFieldConfig;
}
export interface WedataDqRuleCompareRuleItemsValueListStruct {
  /**
  * Threshold valueNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#value WedataDqRule#value}
  */
  readonly value?: string;
  /**
  * Threshold type 1. Low threshold 2. High threshold 3. Common threshold 4. Enumerated valueNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#value_type WedataDqRule#value_type}
  */
  readonly valueType?: number;
}

export function wedataDqRuleCompareRuleItemsValueListStructToTerraform(struct?: WedataDqRuleCompareRuleItemsValueListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.numberToTerraform(struct!.valueType),
  }
}


export function wedataDqRuleCompareRuleItemsValueListStructToHclTerraform(struct?: WedataDqRuleCompareRuleItemsValueListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.numberToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDqRuleCompareRuleItemsValueListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataDqRuleCompareRuleItemsValueListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDqRuleCompareRuleItemsValueListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: number; 
  public get valueType() {
    return this.getNumberAttribute('value_type');
  }
  public set valueType(value: number) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class WedataDqRuleCompareRuleItemsValueListStructList extends cdktf.ComplexList {
  public internalValue? : WedataDqRuleCompareRuleItemsValueListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataDqRuleCompareRuleItemsValueListStructOutputReference {
    return new WedataDqRuleCompareRuleItemsValueListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataDqRuleCompareRuleItems {
  /**
  * Comparison type 1. Fixed value 2. Fluctuating value 3. Comparison of value range 4. Enumeration range comparison 5. Do not compareNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#compare_type WedataDqRule#compare_type}
  */
  readonly compareType?: number;
  /**
  * Comparison operation type &amp;lt; &amp;lt;= == =&amp;gt; &amp;gt;Note: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#operator WedataDqRule#operator}
  */
  readonly operator?: string;
  /**
  * Quality statistics Type 1. Absolute value 2. Increase 3. Decrease 4. C contains 5. N C does not containNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#value_compute_type WedataDqRule#value_compute_type}
  */
  readonly valueComputeType?: number;
  /**
  * value_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#value_list WedataDqRule#value_list}
  */
  readonly valueList?: WedataDqRuleCompareRuleItemsValueListStruct[] | cdktf.IResolvable;
}

export function wedataDqRuleCompareRuleItemsToTerraform(struct?: WedataDqRuleCompareRuleItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare_type: cdktf.numberToTerraform(struct!.compareType),
    operator: cdktf.stringToTerraform(struct!.operator),
    value_compute_type: cdktf.numberToTerraform(struct!.valueComputeType),
    value_list: cdktf.listMapper(wedataDqRuleCompareRuleItemsValueListStructToTerraform, true)(struct!.valueList),
  }
}


export function wedataDqRuleCompareRuleItemsToHclTerraform(struct?: WedataDqRuleCompareRuleItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare_type: {
      value: cdktf.numberToHclTerraform(struct!.compareType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_compute_type: {
      value: cdktf.numberToHclTerraform(struct!.valueComputeType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value_list: {
      value: cdktf.listMapperHcl(wedataDqRuleCompareRuleItemsValueListStructToHclTerraform, true)(struct!.valueList),
      isBlock: true,
      type: "list",
      storageClassType: "WedataDqRuleCompareRuleItemsValueListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDqRuleCompareRuleItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataDqRuleCompareRuleItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareType = this._compareType;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._valueComputeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueComputeType = this._valueComputeType;
    }
    if (this._valueList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueList = this._valueList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDqRuleCompareRuleItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compareType = undefined;
      this._operator = undefined;
      this._valueComputeType = undefined;
      this._valueList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compareType = value.compareType;
      this._operator = value.operator;
      this._valueComputeType = value.valueComputeType;
      this._valueList.internalValue = value.valueList;
    }
  }

  // compare_type - computed: false, optional: true, required: false
  private _compareType?: number; 
  public get compareType() {
    return this.getNumberAttribute('compare_type');
  }
  public set compareType(value: number) {
    this._compareType = value;
  }
  public resetCompareType() {
    this._compareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTypeInput() {
    return this._compareType;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value_compute_type - computed: false, optional: true, required: false
  private _valueComputeType?: number; 
  public get valueComputeType() {
    return this.getNumberAttribute('value_compute_type');
  }
  public set valueComputeType(value: number) {
    this._valueComputeType = value;
  }
  public resetValueComputeType() {
    this._valueComputeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueComputeTypeInput() {
    return this._valueComputeType;
  }

  // value_list - computed: false, optional: true, required: false
  private _valueList = new WedataDqRuleCompareRuleItemsValueListStructList(this, "value_list", false);
  public get valueList() {
    return this._valueList;
  }
  public putValueList(value: WedataDqRuleCompareRuleItemsValueListStruct[] | cdktf.IResolvable) {
    this._valueList.internalValue = value;
  }
  public resetValueList() {
    this._valueList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList.internalValue;
  }
}

export class WedataDqRuleCompareRuleItemsList extends cdktf.ComplexList {
  public internalValue? : WedataDqRuleCompareRuleItems[] | cdktf.IResolvable

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
  public get(index: number): WedataDqRuleCompareRuleItemsOutputReference {
    return new WedataDqRuleCompareRuleItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataDqRuleCompareRule {
  /**
  * Periodic Indicates the default period of a template, in secondsNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#cycle_step WedataDqRule#cycle_step}
  */
  readonly cycleStep?: number;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#items WedataDqRule#items}
  */
  readonly items?: WedataDqRuleCompareRuleItems[] | cdktf.IResolvable;
}

export function wedataDqRuleCompareRuleToTerraform(struct?: WedataDqRuleCompareRuleOutputReference | WedataDqRuleCompareRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cycle_step: cdktf.numberToTerraform(struct!.cycleStep),
    items: cdktf.listMapper(wedataDqRuleCompareRuleItemsToTerraform, true)(struct!.items),
  }
}


export function wedataDqRuleCompareRuleToHclTerraform(struct?: WedataDqRuleCompareRuleOutputReference | WedataDqRuleCompareRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cycle_step: {
      value: cdktf.numberToHclTerraform(struct!.cycleStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(wedataDqRuleCompareRuleItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "WedataDqRuleCompareRuleItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDqRuleCompareRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataDqRuleCompareRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cycleStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleStep = this._cycleStep;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDqRuleCompareRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cycleStep = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cycleStep = value.cycleStep;
      this._items.internalValue = value.items;
    }
  }

  // cycle_step - computed: false, optional: true, required: false
  private _cycleStep?: number; 
  public get cycleStep() {
    return this.getNumberAttribute('cycle_step');
  }
  public set cycleStep(value: number) {
    this._cycleStep = value;
  }
  public resetCycleStep() {
    this._cycleStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleStepInput() {
    return this._cycleStep;
  }

  // items - computed: false, optional: true, required: false
  private _items = new WedataDqRuleCompareRuleItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: WedataDqRuleCompareRuleItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface WedataDqRuleFieldConfigTableConfigFieldConfig {
  /**
  * Field typeNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#field_data_type WedataDqRule#field_data_type}
  */
  readonly fieldDataType?: string;
  /**
  * Field keyNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#field_key WedataDqRule#field_key}
  */
  readonly fieldKey?: string;
  /**
  * Field valueNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#field_value WedataDqRule#field_value}
  */
  readonly fieldValue?: string;
}

export function wedataDqRuleFieldConfigTableConfigFieldConfigToTerraform(struct?: WedataDqRuleFieldConfigTableConfigFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_data_type: cdktf.stringToTerraform(struct!.fieldDataType),
    field_key: cdktf.stringToTerraform(struct!.fieldKey),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
  }
}


export function wedataDqRuleFieldConfigTableConfigFieldConfigToHclTerraform(struct?: WedataDqRuleFieldConfigTableConfigFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_data_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_value: {
      value: cdktf.stringToHclTerraform(struct!.fieldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDqRuleFieldConfigTableConfigFieldConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataDqRuleFieldConfigTableConfigFieldConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDataType = this._fieldDataType;
    }
    if (this._fieldKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldKey = this._fieldKey;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDqRuleFieldConfigTableConfigFieldConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldDataType = undefined;
      this._fieldKey = undefined;
      this._fieldValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldDataType = value.fieldDataType;
      this._fieldKey = value.fieldKey;
      this._fieldValue = value.fieldValue;
    }
  }

  // field_data_type - computed: false, optional: true, required: false
  private _fieldDataType?: string; 
  public get fieldDataType() {
    return this.getStringAttribute('field_data_type');
  }
  public set fieldDataType(value: string) {
    this._fieldDataType = value;
  }
  public resetFieldDataType() {
    this._fieldDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDataTypeInput() {
    return this._fieldDataType;
  }

  // field_key - computed: false, optional: true, required: false
  private _fieldKey?: string; 
  public get fieldKey() {
    return this.getStringAttribute('field_key');
  }
  public set fieldKey(value: string) {
    this._fieldKey = value;
  }
  public resetFieldKey() {
    this._fieldKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldKeyInput() {
    return this._fieldKey;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  public resetFieldValue() {
    this._fieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }
}

export class WedataDqRuleFieldConfigTableConfigFieldConfigList extends cdktf.ComplexList {
  public internalValue? : WedataDqRuleFieldConfigTableConfigFieldConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataDqRuleFieldConfigTableConfigFieldConfigOutputReference {
    return new WedataDqRuleFieldConfigTableConfigFieldConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataDqRuleFieldConfigTableConfig {
  /**
  * Database idNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#database_id WedataDqRule#database_id}
  */
  readonly databaseId?: string;
  /**
  * Database nameNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#database_name WedataDqRule#database_name}
  */
  readonly databaseName?: string;
  /**
  * Table idNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#table_id WedataDqRule#table_id}
  */
  readonly tableId?: string;
  /**
  * Table keyNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#table_key WedataDqRule#table_key}
  */
  readonly tableKey?: string;
  /**
  * Table nameNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#table_name WedataDqRule#table_name}
  */
  readonly tableName?: string;
  /**
  * field_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#field_config WedataDqRule#field_config}
  */
  readonly fieldConfig?: WedataDqRuleFieldConfigTableConfigFieldConfig[] | cdktf.IResolvable;
}

export function wedataDqRuleFieldConfigTableConfigToTerraform(struct?: WedataDqRuleFieldConfigTableConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    table_id: cdktf.stringToTerraform(struct!.tableId),
    table_key: cdktf.stringToTerraform(struct!.tableKey),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    field_config: cdktf.listMapper(wedataDqRuleFieldConfigTableConfigFieldConfigToTerraform, true)(struct!.fieldConfig),
  }
}


export function wedataDqRuleFieldConfigTableConfigToHclTerraform(struct?: WedataDqRuleFieldConfigTableConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_key: {
      value: cdktf.stringToHclTerraform(struct!.tableKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_config: {
      value: cdktf.listMapperHcl(wedataDqRuleFieldConfigTableConfigFieldConfigToHclTerraform, true)(struct!.fieldConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataDqRuleFieldConfigTableConfigFieldConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDqRuleFieldConfigTableConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataDqRuleFieldConfigTableConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    if (this._tableKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableKey = this._tableKey;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._fieldConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldConfig = this._fieldConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDqRuleFieldConfigTableConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseId = undefined;
      this._databaseName = undefined;
      this._tableId = undefined;
      this._tableKey = undefined;
      this._tableName = undefined;
      this._fieldConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseId = value.databaseId;
      this._databaseName = value.databaseName;
      this._tableId = value.tableId;
      this._tableKey = value.tableKey;
      this._tableName = value.tableName;
      this._fieldConfig.internalValue = value.fieldConfig;
    }
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // table_id - computed: false, optional: true, required: false
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  public resetTableId() {
    this._tableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // table_key - computed: false, optional: true, required: false
  private _tableKey?: string; 
  public get tableKey() {
    return this.getStringAttribute('table_key');
  }
  public set tableKey(value: string) {
    this._tableKey = value;
  }
  public resetTableKey() {
    this._tableKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableKeyInput() {
    return this._tableKey;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // field_config - computed: false, optional: true, required: false
  private _fieldConfig = new WedataDqRuleFieldConfigTableConfigFieldConfigList(this, "field_config", false);
  public get fieldConfig() {
    return this._fieldConfig;
  }
  public putFieldConfig(value: WedataDqRuleFieldConfigTableConfigFieldConfig[] | cdktf.IResolvable) {
    this._fieldConfig.internalValue = value;
  }
  public resetFieldConfig() {
    this._fieldConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldConfigInput() {
    return this._fieldConfig.internalValue;
  }
}

export class WedataDqRuleFieldConfigTableConfigList extends cdktf.ComplexList {
  public internalValue? : WedataDqRuleFieldConfigTableConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataDqRuleFieldConfigTableConfigOutputReference {
    return new WedataDqRuleFieldConfigTableConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataDqRuleFieldConfigWhereConfig {
  /**
  * Field typeNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#field_data_type WedataDqRule#field_data_type}
  */
  readonly fieldDataType?: string;
  /**
  * Field keyNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#field_key WedataDqRule#field_key}
  */
  readonly fieldKey?: string;
  /**
  * Field valueNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#field_value WedataDqRule#field_value}
  */
  readonly fieldValue?: string;
}

export function wedataDqRuleFieldConfigWhereConfigToTerraform(struct?: WedataDqRuleFieldConfigWhereConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_data_type: cdktf.stringToTerraform(struct!.fieldDataType),
    field_key: cdktf.stringToTerraform(struct!.fieldKey),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
  }
}


export function wedataDqRuleFieldConfigWhereConfigToHclTerraform(struct?: WedataDqRuleFieldConfigWhereConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_data_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_value: {
      value: cdktf.stringToHclTerraform(struct!.fieldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDqRuleFieldConfigWhereConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataDqRuleFieldConfigWhereConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDataType = this._fieldDataType;
    }
    if (this._fieldKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldKey = this._fieldKey;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDqRuleFieldConfigWhereConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldDataType = undefined;
      this._fieldKey = undefined;
      this._fieldValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldDataType = value.fieldDataType;
      this._fieldKey = value.fieldKey;
      this._fieldValue = value.fieldValue;
    }
  }

  // field_data_type - computed: false, optional: true, required: false
  private _fieldDataType?: string; 
  public get fieldDataType() {
    return this.getStringAttribute('field_data_type');
  }
  public set fieldDataType(value: string) {
    this._fieldDataType = value;
  }
  public resetFieldDataType() {
    this._fieldDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDataTypeInput() {
    return this._fieldDataType;
  }

  // field_key - computed: false, optional: true, required: false
  private _fieldKey?: string; 
  public get fieldKey() {
    return this.getStringAttribute('field_key');
  }
  public set fieldKey(value: string) {
    this._fieldKey = value;
  }
  public resetFieldKey() {
    this._fieldKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldKeyInput() {
    return this._fieldKey;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  public resetFieldValue() {
    this._fieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }
}

export class WedataDqRuleFieldConfigWhereConfigList extends cdktf.ComplexList {
  public internalValue? : WedataDqRuleFieldConfigWhereConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataDqRuleFieldConfigWhereConfigOutputReference {
    return new WedataDqRuleFieldConfigWhereConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataDqRuleFieldConfig {
  /**
  * table_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#table_config WedataDqRule#table_config}
  */
  readonly tableConfig?: WedataDqRuleFieldConfigTableConfig[] | cdktf.IResolvable;
  /**
  * where_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#where_config WedataDqRule#where_config}
  */
  readonly whereConfig?: WedataDqRuleFieldConfigWhereConfig[] | cdktf.IResolvable;
}

export function wedataDqRuleFieldConfigToTerraform(struct?: WedataDqRuleFieldConfigOutputReference | WedataDqRuleFieldConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_config: cdktf.listMapper(wedataDqRuleFieldConfigTableConfigToTerraform, true)(struct!.tableConfig),
    where_config: cdktf.listMapper(wedataDqRuleFieldConfigWhereConfigToTerraform, true)(struct!.whereConfig),
  }
}


export function wedataDqRuleFieldConfigToHclTerraform(struct?: WedataDqRuleFieldConfigOutputReference | WedataDqRuleFieldConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_config: {
      value: cdktf.listMapperHcl(wedataDqRuleFieldConfigTableConfigToHclTerraform, true)(struct!.tableConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataDqRuleFieldConfigTableConfigList",
    },
    where_config: {
      value: cdktf.listMapperHcl(wedataDqRuleFieldConfigWhereConfigToHclTerraform, true)(struct!.whereConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataDqRuleFieldConfigWhereConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDqRuleFieldConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataDqRuleFieldConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfig = this._tableConfig?.internalValue;
    }
    if (this._whereConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whereConfig = this._whereConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDqRuleFieldConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableConfig.internalValue = undefined;
      this._whereConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableConfig.internalValue = value.tableConfig;
      this._whereConfig.internalValue = value.whereConfig;
    }
  }

  // table_config - computed: false, optional: true, required: false
  private _tableConfig = new WedataDqRuleFieldConfigTableConfigList(this, "table_config", false);
  public get tableConfig() {
    return this._tableConfig;
  }
  public putTableConfig(value: WedataDqRuleFieldConfigTableConfig[] | cdktf.IResolvable) {
    this._tableConfig.internalValue = value;
  }
  public resetTableConfig() {
    this._tableConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigInput() {
    return this._tableConfig.internalValue;
  }

  // where_config - computed: false, optional: true, required: false
  private _whereConfig = new WedataDqRuleFieldConfigWhereConfigList(this, "where_config", false);
  public get whereConfig() {
    return this._whereConfig;
  }
  public putWhereConfig(value: WedataDqRuleFieldConfigWhereConfig[] | cdktf.IResolvable) {
    this._whereConfig.internalValue = value;
  }
  public resetWhereConfig() {
    this._whereConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereConfigInput() {
    return this._whereConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule tencentcloud_wedata_dq_rule}
*/
export class WedataDqRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_dq_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataDqRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataDqRule to import
  * @param importFromId The id of the existing WedataDqRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataDqRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_dq_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_dq_rule tencentcloud_wedata_dq_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataDqRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WedataDqRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_dq_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmLevel = config.alarmLevel;
    this._conditionExpression = config.conditionExpression;
    this._conditionType = config.conditionType;
    this._customSql = config.customSql;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._qualityDim = config.qualityDim;
    this._relConditionExpr = config.relConditionExpr;
    this._ruleGroupId = config.ruleGroupId;
    this._ruleTemplateId = config.ruleTemplateId;
    this._sourceEngineTypes = config.sourceEngineTypes;
    this._sourceObjectDataTypeName = config.sourceObjectDataTypeName;
    this._sourceObjectValue = config.sourceObjectValue;
    this._tableId = config.tableId;
    this._targetConditionExpr = config.targetConditionExpr;
    this._targetDatabaseId = config.targetDatabaseId;
    this._targetObjectValue = config.targetObjectValue;
    this._targetTableId = config.targetTableId;
    this._type = config.type;
    this._compareRule.internalValue = config.compareRule;
    this._fieldConfig.internalValue = config.fieldConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_level - computed: false, optional: false, required: true
  private _alarmLevel?: number; 
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }
  public set alarmLevel(value: number) {
    this._alarmLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmLevelInput() {
    return this._alarmLevel;
  }

  // condition_expression - computed: false, optional: true, required: false
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  public resetConditionExpression() {
    this._conditionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: number; 
  public get conditionType() {
    return this.getNumberAttribute('condition_type');
  }
  public set conditionType(value: number) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // custom_sql - computed: false, optional: true, required: false
  private _customSql?: string; 
  public get customSql() {
    return this.getStringAttribute('custom_sql');
  }
  public set customSql(value: string) {
    this._customSql = value;
  }
  public resetCustomSql() {
    this._customSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSqlInput() {
    return this._customSql;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // quality_dim - computed: true, optional: true, required: false
  private _qualityDim?: number; 
  public get qualityDim() {
    return this.getNumberAttribute('quality_dim');
  }
  public set qualityDim(value: number) {
    this._qualityDim = value;
  }
  public resetQualityDim() {
    this._qualityDim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityDimInput() {
    return this._qualityDim;
  }

  // rel_condition_expr - computed: false, optional: true, required: false
  private _relConditionExpr?: string; 
  public get relConditionExpr() {
    return this.getStringAttribute('rel_condition_expr');
  }
  public set relConditionExpr(value: string) {
    this._relConditionExpr = value;
  }
  public resetRelConditionExpr() {
    this._relConditionExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relConditionExprInput() {
    return this._relConditionExpr;
  }

  // rule_group_id - computed: false, optional: true, required: false
  private _ruleGroupId?: number; 
  public get ruleGroupId() {
    return this.getNumberAttribute('rule_group_id');
  }
  public set ruleGroupId(value: number) {
    this._ruleGroupId = value;
  }
  public resetRuleGroupId() {
    this._ruleGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupIdInput() {
    return this._ruleGroupId;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_template_id - computed: false, optional: false, required: true
  private _ruleTemplateId?: number; 
  public get ruleTemplateId() {
    return this.getNumberAttribute('rule_template_id');
  }
  public set ruleTemplateId(value: number) {
    this._ruleTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTemplateIdInput() {
    return this._ruleTemplateId;
  }

  // source_engine_types - computed: true, optional: true, required: false
  private _sourceEngineTypes?: number[]; 
  public get sourceEngineTypes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('source_engine_types')));
  }
  public set sourceEngineTypes(value: number[]) {
    this._sourceEngineTypes = value;
  }
  public resetSourceEngineTypes() {
    this._sourceEngineTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEngineTypesInput() {
    return this._sourceEngineTypes;
  }

  // source_object_data_type_name - computed: false, optional: false, required: true
  private _sourceObjectDataTypeName?: string; 
  public get sourceObjectDataTypeName() {
    return this.getStringAttribute('source_object_data_type_name');
  }
  public set sourceObjectDataTypeName(value: string) {
    this._sourceObjectDataTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectDataTypeNameInput() {
    return this._sourceObjectDataTypeName;
  }

  // source_object_value - computed: false, optional: false, required: true
  private _sourceObjectValue?: string; 
  public get sourceObjectValue() {
    return this.getStringAttribute('source_object_value');
  }
  public set sourceObjectValue(value: string) {
    this._sourceObjectValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectValueInput() {
    return this._sourceObjectValue;
  }

  // table_id - computed: false, optional: true, required: false
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  public resetTableId() {
    this._tableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // target_condition_expr - computed: false, optional: true, required: false
  private _targetConditionExpr?: string; 
  public get targetConditionExpr() {
    return this.getStringAttribute('target_condition_expr');
  }
  public set targetConditionExpr(value: string) {
    this._targetConditionExpr = value;
  }
  public resetTargetConditionExpr() {
    this._targetConditionExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConditionExprInput() {
    return this._targetConditionExpr;
  }

  // target_database_id - computed: false, optional: true, required: false
  private _targetDatabaseId?: string; 
  public get targetDatabaseId() {
    return this.getStringAttribute('target_database_id');
  }
  public set targetDatabaseId(value: string) {
    this._targetDatabaseId = value;
  }
  public resetTargetDatabaseId() {
    this._targetDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseIdInput() {
    return this._targetDatabaseId;
  }

  // target_object_value - computed: false, optional: true, required: false
  private _targetObjectValue?: string; 
  public get targetObjectValue() {
    return this.getStringAttribute('target_object_value');
  }
  public set targetObjectValue(value: string) {
    this._targetObjectValue = value;
  }
  public resetTargetObjectValue() {
    this._targetObjectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectValueInput() {
    return this._targetObjectValue;
  }

  // target_table_id - computed: false, optional: true, required: false
  private _targetTableId?: string; 
  public get targetTableId() {
    return this.getStringAttribute('target_table_id');
  }
  public set targetTableId(value: string) {
    this._targetTableId = value;
  }
  public resetTargetTableId() {
    this._targetTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableIdInput() {
    return this._targetTableId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // compare_rule - computed: false, optional: false, required: true
  private _compareRule = new WedataDqRuleCompareRuleOutputReference(this, "compare_rule");
  public get compareRule() {
    return this._compareRule;
  }
  public putCompareRule(value: WedataDqRuleCompareRule) {
    this._compareRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareRuleInput() {
    return this._compareRule.internalValue;
  }

  // field_config - computed: false, optional: true, required: false
  private _fieldConfig = new WedataDqRuleFieldConfigOutputReference(this, "field_config");
  public get fieldConfig() {
    return this._fieldConfig;
  }
  public putFieldConfig(value: WedataDqRuleFieldConfig) {
    this._fieldConfig.internalValue = value;
  }
  public resetFieldConfig() {
    this._fieldConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldConfigInput() {
    return this._fieldConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_level: cdktf.numberToTerraform(this._alarmLevel),
      condition_expression: cdktf.stringToTerraform(this._conditionExpression),
      condition_type: cdktf.numberToTerraform(this._conditionType),
      custom_sql: cdktf.stringToTerraform(this._customSql),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      quality_dim: cdktf.numberToTerraform(this._qualityDim),
      rel_condition_expr: cdktf.stringToTerraform(this._relConditionExpr),
      rule_group_id: cdktf.numberToTerraform(this._ruleGroupId),
      rule_template_id: cdktf.numberToTerraform(this._ruleTemplateId),
      source_engine_types: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sourceEngineTypes),
      source_object_data_type_name: cdktf.stringToTerraform(this._sourceObjectDataTypeName),
      source_object_value: cdktf.stringToTerraform(this._sourceObjectValue),
      table_id: cdktf.stringToTerraform(this._tableId),
      target_condition_expr: cdktf.stringToTerraform(this._targetConditionExpr),
      target_database_id: cdktf.stringToTerraform(this._targetDatabaseId),
      target_object_value: cdktf.stringToTerraform(this._targetObjectValue),
      target_table_id: cdktf.stringToTerraform(this._targetTableId),
      type: cdktf.numberToTerraform(this._type),
      compare_rule: wedataDqRuleCompareRuleToTerraform(this._compareRule.internalValue),
      field_config: wedataDqRuleFieldConfigToTerraform(this._fieldConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_level: {
        value: cdktf.numberToHclTerraform(this._alarmLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      condition_expression: {
        value: cdktf.stringToHclTerraform(this._conditionExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_type: {
        value: cdktf.numberToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_sql: {
        value: cdktf.stringToHclTerraform(this._customSql),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quality_dim: {
        value: cdktf.numberToHclTerraform(this._qualityDim),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rel_condition_expr: {
        value: cdktf.stringToHclTerraform(this._relConditionExpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_group_id: {
        value: cdktf.numberToHclTerraform(this._ruleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_template_id: {
        value: cdktf.numberToHclTerraform(this._ruleTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_engine_types: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sourceEngineTypes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      source_object_data_type_name: {
        value: cdktf.stringToHclTerraform(this._sourceObjectDataTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_object_value: {
        value: cdktf.stringToHclTerraform(this._sourceObjectValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_id: {
        value: cdktf.stringToHclTerraform(this._tableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_condition_expr: {
        value: cdktf.stringToHclTerraform(this._targetConditionExpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_object_value: {
        value: cdktf.stringToHclTerraform(this._targetObjectValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_table_id: {
        value: cdktf.stringToHclTerraform(this._targetTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compare_rule: {
        value: wedataDqRuleCompareRuleToHclTerraform(this._compareRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataDqRuleCompareRuleList",
      },
      field_config: {
        value: wedataDqRuleFieldConfigToHclTerraform(this._fieldConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataDqRuleFieldConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
