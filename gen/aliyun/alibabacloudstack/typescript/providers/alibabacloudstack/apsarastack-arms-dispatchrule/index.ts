// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackArmsDispatchruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#dispatch_rule_name ApsarastackArmsDispatchrule#dispatch_rule_name}
  */
  readonly dispatchRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#dispatch_type ApsarastackArmsDispatchrule#dispatch_type}
  */
  readonly dispatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#id ApsarastackArmsDispatchrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#is_recover ApsarastackArmsDispatchrule#is_recover}
  */
  readonly isRecover?: boolean | cdktf.IResolvable;
  /**
  * group_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#group_rules ApsarastackArmsDispatchrule#group_rules}
  */
  readonly groupRules: ApsarastackArmsDispatchruleGroupRules[] | cdktf.IResolvable;
  /**
  * label_match_expression_grid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#label_match_expression_grid ApsarastackArmsDispatchrule#label_match_expression_grid}
  */
  readonly labelMatchExpressionGrid: ApsarastackArmsDispatchruleLabelMatchExpressionGrid[] | cdktf.IResolvable;
  /**
  * notify_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#notify_rules ApsarastackArmsDispatchrule#notify_rules}
  */
  readonly notifyRules: ApsarastackArmsDispatchruleNotifyRules[] | cdktf.IResolvable;
}
export interface ApsarastackArmsDispatchruleGroupRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#group_interval ApsarastackArmsDispatchrule#group_interval}
  */
  readonly groupInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#group_wait_time ApsarastackArmsDispatchrule#group_wait_time}
  */
  readonly groupWaitTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#grouping_fields ApsarastackArmsDispatchrule#grouping_fields}
  */
  readonly groupingFields: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#repeat_interval ApsarastackArmsDispatchrule#repeat_interval}
  */
  readonly repeatInterval?: number;
}

export function apsarastackArmsDispatchruleGroupRulesToTerraform(struct?: ApsarastackArmsDispatchruleGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_interval: cdktf.numberToTerraform(struct!.groupInterval),
    group_wait_time: cdktf.numberToTerraform(struct!.groupWaitTime),
    grouping_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupingFields),
    repeat_interval: cdktf.numberToTerraform(struct!.repeatInterval),
  }
}


export function apsarastackArmsDispatchruleGroupRulesToHclTerraform(struct?: ApsarastackArmsDispatchruleGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_interval: {
      value: cdktf.numberToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.groupWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grouping_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupingFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackArmsDispatchruleGroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackArmsDispatchruleGroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWaitTime = this._groupWaitTime;
    }
    if (this._groupingFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingFields = this._groupingFields;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackArmsDispatchruleGroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupInterval = undefined;
      this._groupWaitTime = undefined;
      this._groupingFields = undefined;
      this._repeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupInterval = value.groupInterval;
      this._groupWaitTime = value.groupWaitTime;
      this._groupingFields = value.groupingFields;
      this._repeatInterval = value.repeatInterval;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_interval - computed: false, optional: false, required: true
  private _groupInterval?: number; 
  public get groupInterval() {
    return this.getNumberAttribute('group_interval');
  }
  public set groupInterval(value: number) {
    this._groupInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait_time - computed: false, optional: false, required: true
  private _groupWaitTime?: number; 
  public get groupWaitTime() {
    return this.getNumberAttribute('group_wait_time');
  }
  public set groupWaitTime(value: number) {
    this._groupWaitTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitTimeInput() {
    return this._groupWaitTime;
  }

  // grouping_fields - computed: false, optional: false, required: true
  private _groupingFields?: string[]; 
  public get groupingFields() {
    return this.getListAttribute('grouping_fields');
  }
  public set groupingFields(value: string[]) {
    this._groupingFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingFieldsInput() {
    return this._groupingFields;
  }

  // repeat_interval - computed: true, optional: true, required: false
  private _repeatInterval?: number; 
  public get repeatInterval() {
    return this.getNumberAttribute('repeat_interval');
  }
  public set repeatInterval(value: number) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }
}

export class ApsarastackArmsDispatchruleGroupRulesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackArmsDispatchruleGroupRules[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackArmsDispatchruleGroupRulesOutputReference {
    return new ApsarastackArmsDispatchruleGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#key ApsarastackArmsDispatchrule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#operator ApsarastackArmsDispatchrule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#value ApsarastackArmsDispatchrule#value}
  */
  readonly value: string;
}

export function apsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToTerraform(struct?: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToHclTerraform(struct?: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference {
    return new ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroups {
  /**
  * label_match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#label_match_expressions ApsarastackArmsDispatchrule#label_match_expressions}
  */
  readonly labelMatchExpressions: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[] | cdktf.IResolvable;
}

export function apsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsToTerraform(struct?: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_match_expressions: cdktf.listMapper(apsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToTerraform, true)(struct!.labelMatchExpressions),
  }
}


export function apsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsToHclTerraform(struct?: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_match_expressions: {
      value: cdktf.listMapperHcl(apsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToHclTerraform, true)(struct!.labelMatchExpressions),
      isBlock: true,
      type: "set",
      storageClassType: "ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelMatchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchExpressions = this._labelMatchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelMatchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelMatchExpressions.internalValue = value.labelMatchExpressions;
    }
  }

  // label_match_expressions - computed: false, optional: false, required: true
  private _labelMatchExpressions = new ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsList(this, "label_match_expressions", true);
  public get labelMatchExpressions() {
    return this._labelMatchExpressions;
  }
  public putLabelMatchExpressions(value: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[] | cdktf.IResolvable) {
    this._labelMatchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchExpressionsInput() {
    return this._labelMatchExpressions.internalValue;
  }
}

export class ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroups[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference {
    return new ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackArmsDispatchruleLabelMatchExpressionGrid {
  /**
  * label_match_expression_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#label_match_expression_groups ApsarastackArmsDispatchrule#label_match_expression_groups}
  */
  readonly labelMatchExpressionGroups: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroups[] | cdktf.IResolvable;
}

export function apsarastackArmsDispatchruleLabelMatchExpressionGridToTerraform(struct?: ApsarastackArmsDispatchruleLabelMatchExpressionGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_match_expression_groups: cdktf.listMapper(apsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsToTerraform, true)(struct!.labelMatchExpressionGroups),
  }
}


export function apsarastackArmsDispatchruleLabelMatchExpressionGridToHclTerraform(struct?: ApsarastackArmsDispatchruleLabelMatchExpressionGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_match_expression_groups: {
      value: cdktf.listMapperHcl(apsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsToHclTerraform, true)(struct!.labelMatchExpressionGroups),
      isBlock: true,
      type: "set",
      storageClassType: "ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackArmsDispatchruleLabelMatchExpressionGridOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackArmsDispatchruleLabelMatchExpressionGrid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelMatchExpressionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchExpressionGroups = this._labelMatchExpressionGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackArmsDispatchruleLabelMatchExpressionGrid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelMatchExpressionGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelMatchExpressionGroups.internalValue = value.labelMatchExpressionGroups;
    }
  }

  // label_match_expression_groups - computed: false, optional: false, required: true
  private _labelMatchExpressionGroups = new ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroupsList(this, "label_match_expression_groups", true);
  public get labelMatchExpressionGroups() {
    return this._labelMatchExpressionGroups;
  }
  public putLabelMatchExpressionGroups(value: ApsarastackArmsDispatchruleLabelMatchExpressionGridLabelMatchExpressionGroups[] | cdktf.IResolvable) {
    this._labelMatchExpressionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchExpressionGroupsInput() {
    return this._labelMatchExpressionGroups.internalValue;
  }
}

export class ApsarastackArmsDispatchruleLabelMatchExpressionGridList extends cdktf.ComplexList {
  public internalValue? : ApsarastackArmsDispatchruleLabelMatchExpressionGrid[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackArmsDispatchruleLabelMatchExpressionGridOutputReference {
    return new ApsarastackArmsDispatchruleLabelMatchExpressionGridOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackArmsDispatchruleNotifyRulesNotifyObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#name ApsarastackArmsDispatchrule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#notify_object_id ApsarastackArmsDispatchrule#notify_object_id}
  */
  readonly notifyObjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#notify_type ApsarastackArmsDispatchrule#notify_type}
  */
  readonly notifyType: string;
}

export function apsarastackArmsDispatchruleNotifyRulesNotifyObjectsToTerraform(struct?: ApsarastackArmsDispatchruleNotifyRulesNotifyObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    notify_object_id: cdktf.stringToTerraform(struct!.notifyObjectId),
    notify_type: cdktf.stringToTerraform(struct!.notifyType),
  }
}


export function apsarastackArmsDispatchruleNotifyRulesNotifyObjectsToHclTerraform(struct?: ApsarastackArmsDispatchruleNotifyRulesNotifyObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_object_id: {
      value: cdktf.stringToHclTerraform(struct!.notifyObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_type: {
      value: cdktf.stringToHclTerraform(struct!.notifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackArmsDispatchruleNotifyRulesNotifyObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackArmsDispatchruleNotifyRulesNotifyObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifyObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyObjectId = this._notifyObjectId;
    }
    if (this._notifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyType = this._notifyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackArmsDispatchruleNotifyRulesNotifyObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._notifyObjectId = undefined;
      this._notifyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._notifyObjectId = value.notifyObjectId;
      this._notifyType = value.notifyType;
    }
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

  // notify_object_id - computed: false, optional: false, required: true
  private _notifyObjectId?: string; 
  public get notifyObjectId() {
    return this.getStringAttribute('notify_object_id');
  }
  public set notifyObjectId(value: string) {
    this._notifyObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyObjectIdInput() {
    return this._notifyObjectId;
  }

  // notify_type - computed: false, optional: false, required: true
  private _notifyType?: string; 
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }
  public set notifyType(value: string) {
    this._notifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTypeInput() {
    return this._notifyType;
  }
}

export class ApsarastackArmsDispatchruleNotifyRulesNotifyObjectsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackArmsDispatchruleNotifyRulesNotifyObjects[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackArmsDispatchruleNotifyRulesNotifyObjectsOutputReference {
    return new ApsarastackArmsDispatchruleNotifyRulesNotifyObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackArmsDispatchruleNotifyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#notify_channels ApsarastackArmsDispatchrule#notify_channels}
  */
  readonly notifyChannels: string[];
  /**
  * notify_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#notify_objects ApsarastackArmsDispatchrule#notify_objects}
  */
  readonly notifyObjects: ApsarastackArmsDispatchruleNotifyRulesNotifyObjects[] | cdktf.IResolvable;
}

export function apsarastackArmsDispatchruleNotifyRulesToTerraform(struct?: ApsarastackArmsDispatchruleNotifyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyChannels),
    notify_objects: cdktf.listMapper(apsarastackArmsDispatchruleNotifyRulesNotifyObjectsToTerraform, true)(struct!.notifyObjects),
  }
}


export function apsarastackArmsDispatchruleNotifyRulesToHclTerraform(struct?: ApsarastackArmsDispatchruleNotifyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyChannels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notify_objects: {
      value: cdktf.listMapperHcl(apsarastackArmsDispatchruleNotifyRulesNotifyObjectsToHclTerraform, true)(struct!.notifyObjects),
      isBlock: true,
      type: "set",
      storageClassType: "ApsarastackArmsDispatchruleNotifyRulesNotifyObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackArmsDispatchruleNotifyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackArmsDispatchruleNotifyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyChannels = this._notifyChannels;
    }
    if (this._notifyObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyObjects = this._notifyObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackArmsDispatchruleNotifyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifyChannels = undefined;
      this._notifyObjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifyChannels = value.notifyChannels;
      this._notifyObjects.internalValue = value.notifyObjects;
    }
  }

  // notify_channels - computed: false, optional: false, required: true
  private _notifyChannels?: string[]; 
  public get notifyChannels() {
    return this.getListAttribute('notify_channels');
  }
  public set notifyChannels(value: string[]) {
    this._notifyChannels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyChannelsInput() {
    return this._notifyChannels;
  }

  // notify_objects - computed: false, optional: false, required: true
  private _notifyObjects = new ApsarastackArmsDispatchruleNotifyRulesNotifyObjectsList(this, "notify_objects", true);
  public get notifyObjects() {
    return this._notifyObjects;
  }
  public putNotifyObjects(value: ApsarastackArmsDispatchruleNotifyRulesNotifyObjects[] | cdktf.IResolvable) {
    this._notifyObjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyObjectsInput() {
    return this._notifyObjects.internalValue;
  }
}

export class ApsarastackArmsDispatchruleNotifyRulesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackArmsDispatchruleNotifyRules[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackArmsDispatchruleNotifyRulesOutputReference {
    return new ApsarastackArmsDispatchruleNotifyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule apsarastack_arms_dispatchrule}
*/
export class ApsarastackArmsDispatchrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_arms_dispatchrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackArmsDispatchrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackArmsDispatchrule to import
  * @param importFromId The id of the existing ApsarastackArmsDispatchrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackArmsDispatchrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_arms_dispatchrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_dispatchrule apsarastack_arms_dispatchrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackArmsDispatchruleConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackArmsDispatchruleConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_arms_dispatchrule',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dispatchRuleName = config.dispatchRuleName;
    this._dispatchType = config.dispatchType;
    this._id = config.id;
    this._isRecover = config.isRecover;
    this._groupRules.internalValue = config.groupRules;
    this._labelMatchExpressionGrid.internalValue = config.labelMatchExpressionGrid;
    this._notifyRules.internalValue = config.notifyRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dispatch_rule_name - computed: false, optional: false, required: true
  private _dispatchRuleName?: string; 
  public get dispatchRuleName() {
    return this.getStringAttribute('dispatch_rule_name');
  }
  public set dispatchRuleName(value: string) {
    this._dispatchRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRuleNameInput() {
    return this._dispatchRuleName;
  }

  // dispatch_type - computed: false, optional: true, required: false
  private _dispatchType?: string; 
  public get dispatchType() {
    return this.getStringAttribute('dispatch_type');
  }
  public set dispatchType(value: string) {
    this._dispatchType = value;
  }
  public resetDispatchType() {
    this._dispatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchTypeInput() {
    return this._dispatchType;
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

  // is_recover - computed: false, optional: true, required: false
  private _isRecover?: boolean | cdktf.IResolvable; 
  public get isRecover() {
    return this.getBooleanAttribute('is_recover');
  }
  public set isRecover(value: boolean | cdktf.IResolvable) {
    this._isRecover = value;
  }
  public resetIsRecover() {
    this._isRecover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecoverInput() {
    return this._isRecover;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // group_rules - computed: false, optional: false, required: true
  private _groupRules = new ApsarastackArmsDispatchruleGroupRulesList(this, "group_rules", true);
  public get groupRules() {
    return this._groupRules;
  }
  public putGroupRules(value: ApsarastackArmsDispatchruleGroupRules[] | cdktf.IResolvable) {
    this._groupRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRulesInput() {
    return this._groupRules.internalValue;
  }

  // label_match_expression_grid - computed: false, optional: false, required: true
  private _labelMatchExpressionGrid = new ApsarastackArmsDispatchruleLabelMatchExpressionGridList(this, "label_match_expression_grid", true);
  public get labelMatchExpressionGrid() {
    return this._labelMatchExpressionGrid;
  }
  public putLabelMatchExpressionGrid(value: ApsarastackArmsDispatchruleLabelMatchExpressionGrid[] | cdktf.IResolvable) {
    this._labelMatchExpressionGrid.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchExpressionGridInput() {
    return this._labelMatchExpressionGrid.internalValue;
  }

  // notify_rules - computed: false, optional: false, required: true
  private _notifyRules = new ApsarastackArmsDispatchruleNotifyRulesList(this, "notify_rules", true);
  public get notifyRules() {
    return this._notifyRules;
  }
  public putNotifyRules(value: ApsarastackArmsDispatchruleNotifyRules[] | cdktf.IResolvable) {
    this._notifyRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRulesInput() {
    return this._notifyRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dispatch_rule_name: cdktf.stringToTerraform(this._dispatchRuleName),
      dispatch_type: cdktf.stringToTerraform(this._dispatchType),
      id: cdktf.stringToTerraform(this._id),
      is_recover: cdktf.booleanToTerraform(this._isRecover),
      group_rules: cdktf.listMapper(apsarastackArmsDispatchruleGroupRulesToTerraform, true)(this._groupRules.internalValue),
      label_match_expression_grid: cdktf.listMapper(apsarastackArmsDispatchruleLabelMatchExpressionGridToTerraform, true)(this._labelMatchExpressionGrid.internalValue),
      notify_rules: cdktf.listMapper(apsarastackArmsDispatchruleNotifyRulesToTerraform, true)(this._notifyRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dispatch_rule_name: {
        value: cdktf.stringToHclTerraform(this._dispatchRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_type: {
        value: cdktf.stringToHclTerraform(this._dispatchType),
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
      is_recover: {
        value: cdktf.booleanToHclTerraform(this._isRecover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_rules: {
        value: cdktf.listMapperHcl(apsarastackArmsDispatchruleGroupRulesToHclTerraform, true)(this._groupRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackArmsDispatchruleGroupRulesList",
      },
      label_match_expression_grid: {
        value: cdktf.listMapperHcl(apsarastackArmsDispatchruleLabelMatchExpressionGridToHclTerraform, true)(this._labelMatchExpressionGrid.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackArmsDispatchruleLabelMatchExpressionGridList",
      },
      notify_rules: {
        value: cdktf.listMapperHcl(apsarastackArmsDispatchruleNotifyRulesToHclTerraform, true)(this._notifyRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackArmsDispatchruleNotifyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
