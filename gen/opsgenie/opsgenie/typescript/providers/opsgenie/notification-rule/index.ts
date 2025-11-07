// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#action_type NotificationRule#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#enabled NotificationRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#id NotificationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#name NotificationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#notification_time NotificationRule#notification_time}
  */
  readonly notificationTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#order NotificationRule#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#username NotificationRule#username}
  */
  readonly username: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#criteria NotificationRule#criteria}
  */
  readonly criteria?: NotificationRuleCriteria[] | cdktf.IResolvable;
  /**
  * repeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#repeat NotificationRule#repeat}
  */
  readonly repeat?: NotificationRuleRepeat[] | cdktf.IResolvable;
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#schedules NotificationRule#schedules}
  */
  readonly schedules?: NotificationRuleSchedules[] | cdktf.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#steps NotificationRule#steps}
  */
  readonly steps?: NotificationRuleSteps[] | cdktf.IResolvable;
  /**
  * time_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#time_restriction NotificationRule#time_restriction}
  */
  readonly timeRestriction?: NotificationRuleTimeRestriction;
}
export interface NotificationRuleCriteriaConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#expected_value NotificationRule#expected_value}
  */
  readonly expectedValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#field NotificationRule#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#key NotificationRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#not NotificationRule#not}
  */
  readonly not?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#operation NotificationRule#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#order NotificationRule#order}
  */
  readonly order?: number;
}

export function notificationRuleCriteriaConditionsToTerraform(struct?: NotificationRuleCriteriaConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_value: cdktf.stringToTerraform(struct!.expectedValue),
    field: cdktf.stringToTerraform(struct!.field),
    key: cdktf.stringToTerraform(struct!.key),
    not: cdktf.booleanToTerraform(struct!.not),
    operation: cdktf.stringToTerraform(struct!.operation),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function notificationRuleCriteriaConditionsToHclTerraform(struct?: NotificationRuleCriteriaConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_value: {
      value: cdktf.stringToHclTerraform(struct!.expectedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not: {
      value: cdktf.booleanToHclTerraform(struct!.not),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleCriteriaConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleCriteriaConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedValue = this._expectedValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleCriteriaConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedValue = undefined;
      this._field = undefined;
      this._key = undefined;
      this._not = undefined;
      this._operation = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedValue = value.expectedValue;
      this._field = value.field;
      this._key = value.key;
      this._not = value.not;
      this._operation = value.operation;
      this._order = value.order;
    }
  }

  // expected_value - computed: false, optional: true, required: false
  private _expectedValue?: string; 
  public get expectedValue() {
    return this.getStringAttribute('expected_value');
  }
  public set expectedValue(value: string) {
    this._expectedValue = value;
  }
  public resetExpectedValue() {
    this._expectedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedValueInput() {
    return this._expectedValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // not - computed: false, optional: true, required: false
  private _not?: boolean | cdktf.IResolvable; 
  public get not() {
    return this.getBooleanAttribute('not');
  }
  public set not(value: boolean | cdktf.IResolvable) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class NotificationRuleCriteriaConditionsList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleCriteriaConditions[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleCriteriaConditionsOutputReference {
    return new NotificationRuleCriteriaConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#type NotificationRule#type}
  */
  readonly type: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#conditions NotificationRule#conditions}
  */
  readonly conditions?: NotificationRuleCriteriaConditions[] | cdktf.IResolvable;
}

export function notificationRuleCriteriaToTerraform(struct?: NotificationRuleCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    conditions: cdktf.listMapper(notificationRuleCriteriaConditionsToTerraform, true)(struct!.conditions),
  }
}


export function notificationRuleCriteriaToHclTerraform(struct?: NotificationRuleCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(notificationRuleCriteriaConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationRuleCriteriaConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._conditions.internalValue = value.conditions;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new NotificationRuleCriteriaConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: NotificationRuleCriteriaConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class NotificationRuleCriteriaList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleCriteria[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleCriteriaOutputReference {
    return new NotificationRuleCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleRepeat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#enabled NotificationRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#loop_after NotificationRule#loop_after}
  */
  readonly loopAfter: number;
}

export function notificationRuleRepeatToTerraform(struct?: NotificationRuleRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    loop_after: cdktf.numberToTerraform(struct!.loopAfter),
  }
}


export function notificationRuleRepeatToHclTerraform(struct?: NotificationRuleRepeat | cdktf.IResolvable): any {
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
    loop_after: {
      value: cdktf.numberToHclTerraform(struct!.loopAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleRepeatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleRepeat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._loopAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopAfter = this._loopAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleRepeat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._loopAfter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._loopAfter = value.loopAfter;
    }
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

  // loop_after - computed: false, optional: false, required: true
  private _loopAfter?: number; 
  public get loopAfter() {
    return this.getNumberAttribute('loop_after');
  }
  public set loopAfter(value: number) {
    this._loopAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loopAfterInput() {
    return this._loopAfter;
  }
}

export class NotificationRuleRepeatList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleRepeat[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleRepeatOutputReference {
    return new NotificationRuleRepeatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#name NotificationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#type NotificationRule#type}
  */
  readonly type: string;
}

export function notificationRuleSchedulesToTerraform(struct?: NotificationRuleSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function notificationRuleSchedulesToHclTerraform(struct?: NotificationRuleSchedules | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NotificationRuleSchedulesList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleSchedules[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleSchedulesOutputReference {
    return new NotificationRuleSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleStepsContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#method NotificationRule#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#to NotificationRule#to}
  */
  readonly to: string;
}

export function notificationRuleStepsContactToTerraform(struct?: NotificationRuleStepsContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function notificationRuleStepsContactToHclTerraform(struct?: NotificationRuleStepsContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleStepsContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleStepsContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleStepsContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._to = value.to;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class NotificationRuleStepsContactList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleStepsContact[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleStepsContactOutputReference {
    return new NotificationRuleStepsContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#enabled NotificationRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#send_after NotificationRule#send_after}
  */
  readonly sendAfter?: number;
  /**
  * contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#contact NotificationRule#contact}
  */
  readonly contact: NotificationRuleStepsContact[] | cdktf.IResolvable;
}

export function notificationRuleStepsToTerraform(struct?: NotificationRuleSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    send_after: cdktf.numberToTerraform(struct!.sendAfter),
    contact: cdktf.listMapper(notificationRuleStepsContactToTerraform, true)(struct!.contact),
  }
}


export function notificationRuleStepsToHclTerraform(struct?: NotificationRuleSteps | cdktf.IResolvable): any {
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
    send_after: {
      value: cdktf.numberToHclTerraform(struct!.sendAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    contact: {
      value: cdktf.listMapperHcl(notificationRuleStepsContactToHclTerraform, true)(struct!.contact),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationRuleStepsContactList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sendAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendAfter = this._sendAfter;
    }
    if (this._contact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contact = this._contact?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._sendAfter = undefined;
      this._contact.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._sendAfter = value.sendAfter;
      this._contact.internalValue = value.contact;
    }
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

  // send_after - computed: false, optional: true, required: false
  private _sendAfter?: number; 
  public get sendAfter() {
    return this.getNumberAttribute('send_after');
  }
  public set sendAfter(value: number) {
    this._sendAfter = value;
  }
  public resetSendAfter() {
    this._sendAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAfterInput() {
    return this._sendAfter;
  }

  // contact - computed: false, optional: false, required: true
  private _contact = new NotificationRuleStepsContactList(this, "contact", false);
  public get contact() {
    return this._contact;
  }
  public putContact(value: NotificationRuleStepsContact[] | cdktf.IResolvable) {
    this._contact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact.internalValue;
  }
}

export class NotificationRuleStepsList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleSteps[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleStepsOutputReference {
    return new NotificationRuleStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleTimeRestrictionRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#end_hour NotificationRule#end_hour}
  */
  readonly endHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#end_min NotificationRule#end_min}
  */
  readonly endMin: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#start_hour NotificationRule#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#start_min NotificationRule#start_min}
  */
  readonly startMin: number;
}

export function notificationRuleTimeRestrictionRestrictionToTerraform(struct?: NotificationRuleTimeRestrictionRestrictionOutputReference | NotificationRuleTimeRestrictionRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    end_min: cdktf.numberToTerraform(struct!.endMin),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_min: cdktf.numberToTerraform(struct!.startMin),
  }
}


export function notificationRuleTimeRestrictionRestrictionToHclTerraform(struct?: NotificationRuleTimeRestrictionRestrictionOutputReference | NotificationRuleTimeRestrictionRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_hour: {
      value: cdktf.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_min: {
      value: cdktf.numberToHclTerraform(struct!.endMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_min: {
      value: cdktf.numberToHclTerraform(struct!.startMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleTimeRestrictionRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationRuleTimeRestrictionRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._endMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMin = this._endMin;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMin = this._startMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleTimeRestrictionRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endHour = undefined;
      this._endMin = undefined;
      this._startHour = undefined;
      this._startMin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endHour = value.endHour;
      this._endMin = value.endMin;
      this._startHour = value.startHour;
      this._startMin = value.startMin;
    }
  }

  // end_hour - computed: false, optional: false, required: true
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_min - computed: false, optional: false, required: true
  private _endMin?: number; 
  public get endMin() {
    return this.getNumberAttribute('end_min');
  }
  public set endMin(value: number) {
    this._endMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinInput() {
    return this._endMin;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_min - computed: false, optional: false, required: true
  private _startMin?: number; 
  public get startMin() {
    return this.getNumberAttribute('start_min');
  }
  public set startMin(value: number) {
    this._startMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinInput() {
    return this._startMin;
  }
}
export interface NotificationRuleTimeRestrictionRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#end_day NotificationRule#end_day}
  */
  readonly endDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#end_hour NotificationRule#end_hour}
  */
  readonly endHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#end_min NotificationRule#end_min}
  */
  readonly endMin: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#start_day NotificationRule#start_day}
  */
  readonly startDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#start_hour NotificationRule#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#start_min NotificationRule#start_min}
  */
  readonly startMin: number;
}

export function notificationRuleTimeRestrictionRestrictionsToTerraform(struct?: NotificationRuleTimeRestrictionRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_day: cdktf.stringToTerraform(struct!.endDay),
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    end_min: cdktf.numberToTerraform(struct!.endMin),
    start_day: cdktf.stringToTerraform(struct!.startDay),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_min: cdktf.numberToTerraform(struct!.startMin),
  }
}


export function notificationRuleTimeRestrictionRestrictionsToHclTerraform(struct?: NotificationRuleTimeRestrictionRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_day: {
      value: cdktf.stringToHclTerraform(struct!.endDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_hour: {
      value: cdktf.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_min: {
      value: cdktf.numberToHclTerraform(struct!.endMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_day: {
      value: cdktf.stringToHclTerraform(struct!.startDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_min: {
      value: cdktf.numberToHclTerraform(struct!.startMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleTimeRestrictionRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleTimeRestrictionRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDay = this._endDay;
    }
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._endMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMin = this._endMin;
    }
    if (this._startDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDay = this._startDay;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMin = this._startMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleTimeRestrictionRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDay = undefined;
      this._endHour = undefined;
      this._endMin = undefined;
      this._startDay = undefined;
      this._startHour = undefined;
      this._startMin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDay = value.endDay;
      this._endHour = value.endHour;
      this._endMin = value.endMin;
      this._startDay = value.startDay;
      this._startHour = value.startHour;
      this._startMin = value.startMin;
    }
  }

  // end_day - computed: false, optional: false, required: true
  private _endDay?: string; 
  public get endDay() {
    return this.getStringAttribute('end_day');
  }
  public set endDay(value: string) {
    this._endDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDayInput() {
    return this._endDay;
  }

  // end_hour - computed: false, optional: false, required: true
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_min - computed: false, optional: false, required: true
  private _endMin?: number; 
  public get endMin() {
    return this.getNumberAttribute('end_min');
  }
  public set endMin(value: number) {
    this._endMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinInput() {
    return this._endMin;
  }

  // start_day - computed: false, optional: false, required: true
  private _startDay?: string; 
  public get startDay() {
    return this.getStringAttribute('start_day');
  }
  public set startDay(value: string) {
    this._startDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_min - computed: false, optional: false, required: true
  private _startMin?: number; 
  public get startMin() {
    return this.getNumberAttribute('start_min');
  }
  public set startMin(value: number) {
    this._startMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinInput() {
    return this._startMin;
  }
}

export class NotificationRuleTimeRestrictionRestrictionsList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleTimeRestrictionRestrictions[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleTimeRestrictionRestrictionsOutputReference {
    return new NotificationRuleTimeRestrictionRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleTimeRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#type NotificationRule#type}
  */
  readonly type: string;
  /**
  * restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#restriction NotificationRule#restriction}
  */
  readonly restriction?: NotificationRuleTimeRestrictionRestriction;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#restrictions NotificationRule#restrictions}
  */
  readonly restrictions?: NotificationRuleTimeRestrictionRestrictions[] | cdktf.IResolvable;
}

export function notificationRuleTimeRestrictionToTerraform(struct?: NotificationRuleTimeRestrictionOutputReference | NotificationRuleTimeRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    restriction: notificationRuleTimeRestrictionRestrictionToTerraform(struct!.restriction),
    restrictions: cdktf.listMapper(notificationRuleTimeRestrictionRestrictionsToTerraform, true)(struct!.restrictions),
  }
}


export function notificationRuleTimeRestrictionToHclTerraform(struct?: NotificationRuleTimeRestrictionOutputReference | NotificationRuleTimeRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restriction: {
      value: notificationRuleTimeRestrictionRestrictionToHclTerraform(struct!.restriction),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationRuleTimeRestrictionRestrictionList",
    },
    restrictions: {
      value: cdktf.listMapperHcl(notificationRuleTimeRestrictionRestrictionsToHclTerraform, true)(struct!.restrictions),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationRuleTimeRestrictionRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleTimeRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationRuleTimeRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._restriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restriction = this._restriction?.internalValue;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleTimeRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._restriction.internalValue = undefined;
      this._restrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._restriction.internalValue = value.restriction;
      this._restrictions.internalValue = value.restrictions;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // restriction - computed: false, optional: true, required: false
  private _restriction = new NotificationRuleTimeRestrictionRestrictionOutputReference(this, "restriction");
  public get restriction() {
    return this._restriction;
  }
  public putRestriction(value: NotificationRuleTimeRestrictionRestriction) {
    this._restriction.internalValue = value;
  }
  public resetRestriction() {
    this._restriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionInput() {
    return this._restriction.internalValue;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new NotificationRuleTimeRestrictionRestrictionsList(this, "restrictions", true);
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: NotificationRuleTimeRestrictionRestrictions[] | cdktf.IResolvable) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule opsgenie_notification_rule}
*/
export class NotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationRule to import
  * @param importFromId The id of the existing NotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/notification_rule opsgenie_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._notificationTime = config.notificationTime;
    this._order = config.order;
    this._username = config.username;
    this._criteria.internalValue = config.criteria;
    this._repeat.internalValue = config.repeat;
    this._schedules.internalValue = config.schedules;
    this._steps.internalValue = config.steps;
    this._timeRestriction.internalValue = config.timeRestriction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
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

  // notification_time - computed: false, optional: true, required: false
  private _notificationTime?: string[]; 
  public get notificationTime() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_time'));
  }
  public set notificationTime(value: string[]) {
    this._notificationTime = value;
  }
  public resetNotificationTime() {
    this._notificationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTimeInput() {
    return this._notificationTime;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new NotificationRuleCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: NotificationRuleCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat = new NotificationRuleRepeatList(this, "repeat", false);
  public get repeat() {
    return this._repeat;
  }
  public putRepeat(value: NotificationRuleRepeat[] | cdktf.IResolvable) {
    this._repeat.internalValue = value;
  }
  public resetRepeat() {
    this._repeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat.internalValue;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new NotificationRuleSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: NotificationRuleSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new NotificationRuleStepsList(this, "steps", true);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: NotificationRuleSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // time_restriction - computed: false, optional: true, required: false
  private _timeRestriction = new NotificationRuleTimeRestrictionOutputReference(this, "time_restriction");
  public get timeRestriction() {
    return this._timeRestriction;
  }
  public putTimeRestriction(value: NotificationRuleTimeRestriction) {
    this._timeRestriction.internalValue = value;
  }
  public resetTimeRestriction() {
    this._timeRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRestrictionInput() {
    return this._timeRestriction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.stringToTerraform(this._actionType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationTime),
      order: cdktf.numberToTerraform(this._order),
      username: cdktf.stringToTerraform(this._username),
      criteria: cdktf.listMapper(notificationRuleCriteriaToTerraform, true)(this._criteria.internalValue),
      repeat: cdktf.listMapper(notificationRuleRepeatToTerraform, true)(this._repeat.internalValue),
      schedules: cdktf.listMapper(notificationRuleSchedulesToTerraform, true)(this._schedules.internalValue),
      steps: cdktf.listMapper(notificationRuleStepsToTerraform, true)(this._steps.internalValue),
      time_restriction: notificationRuleTimeRestrictionToTerraform(this._timeRestriction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
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
      notification_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria: {
        value: cdktf.listMapperHcl(notificationRuleCriteriaToHclTerraform, true)(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationRuleCriteriaList",
      },
      repeat: {
        value: cdktf.listMapperHcl(notificationRuleRepeatToHclTerraform, true)(this._repeat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationRuleRepeatList",
      },
      schedules: {
        value: cdktf.listMapperHcl(notificationRuleSchedulesToHclTerraform, true)(this._schedules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationRuleSchedulesList",
      },
      steps: {
        value: cdktf.listMapperHcl(notificationRuleStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationRuleStepsList",
      },
      time_restriction: {
        value: notificationRuleTimeRestrictionToHclTerraform(this._timeRestriction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationRuleTimeRestrictionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
