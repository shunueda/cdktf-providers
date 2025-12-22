// https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * SSO Role claim name used for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#claim_role Policy#claim_role}
  */
  readonly claimRole?: string;
  /**
  * Defines the data scope restrictions for the policy. Either 'simple' or 'advanced' must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#data_scope Policy#data_scope}
  */
  readonly dataScope?: PolicyDataScope;
  /**
  * A description for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#description Policy#description}
  */
  readonly description?: string;
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * Role definitions associated with the policy. Maps role identifiers to specific permissions or access levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#role Policy#role}
  */
  readonly role: { [key: string]: string };
}
export interface PolicyDataScopeAdvancedEventsConditionsFilters {
  /**
  * The filter operation (e.g., 'match').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#op Policy#op}
  */
  readonly op: string;
  /**
  * The value to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#value Policy#value}
  */
  readonly value: string;
}

export function policyDataScopeAdvancedEventsConditionsFiltersToTerraform(struct?: PolicyDataScopeAdvancedEventsConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyDataScopeAdvancedEventsConditionsFiltersToHclTerraform(struct?: PolicyDataScopeAdvancedEventsConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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

export class PolicyDataScopeAdvancedEventsConditionsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedEventsConditionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedEventsConditionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

export class PolicyDataScopeAdvancedEventsConditionsFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedEventsConditionsFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedEventsConditionsFiltersOutputReference {
    return new PolicyDataScopeAdvancedEventsConditionsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedEventsConditions {
  /**
  * List of filter criteria for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#filters Policy#filters}
  */
  readonly filters: PolicyDataScopeAdvancedEventsConditionsFilters[] | cdktf.IResolvable;
  /**
  * The key for the condition (e.g., 'environment').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#key Policy#key}
  */
  readonly key: string;
  /**
  * The origin of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#origin Policy#origin}
  */
  readonly origin: string;
  /**
  * The type of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
}

export function policyDataScopeAdvancedEventsConditionsToTerraform(struct?: PolicyDataScopeAdvancedEventsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(policyDataScopeAdvancedEventsConditionsFiltersToTerraform, false)(struct!.filters),
    key: cdktf.stringToTerraform(struct!.key),
    origin: cdktf.stringToTerraform(struct!.origin),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyDataScopeAdvancedEventsConditionsToHclTerraform(struct?: PolicyDataScopeAdvancedEventsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedEventsConditionsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedEventsConditionsFiltersList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class PolicyDataScopeAdvancedEventsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedEventsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedEventsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._key = undefined;
      this._origin = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._key = value.key;
      this._origin = value.origin;
      this._type = value.type;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new PolicyDataScopeAdvancedEventsConditionsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PolicyDataScopeAdvancedEventsConditionsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class PolicyDataScopeAdvancedEventsConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedEventsConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedEventsConditionsOutputReference {
    return new PolicyDataScopeAdvancedEventsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedEvents {
  /**
  * List of conditions for the data scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#conditions Policy#conditions}
  */
  readonly conditions: PolicyDataScopeAdvancedEventsConditions[] | cdktf.IResolvable;
  /**
  * Whether this data type is disabled (no data access). When true, users have no access to this data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#disabled Policy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Logical operator (e.g., 'and', 'or').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#operator Policy#operator}
  */
  readonly operator: string;
}

export function policyDataScopeAdvancedEventsToTerraform(struct?: PolicyDataScopeAdvancedEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(policyDataScopeAdvancedEventsConditionsToTerraform, false)(struct!.conditions),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function policyDataScopeAdvancedEventsToHclTerraform(struct?: PolicyDataScopeAdvancedEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedEventsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedEventsConditionsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDataScopeAdvancedEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyDataScopeAdvancedEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._disabled = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._disabled = value.disabled;
      this._operator = value.operator;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new PolicyDataScopeAdvancedEventsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyDataScopeAdvancedEventsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
}
export interface PolicyDataScopeAdvancedLogsConditionsFilters {
  /**
  * The filter operation (e.g., 'match').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#op Policy#op}
  */
  readonly op: string;
  /**
  * The value to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#value Policy#value}
  */
  readonly value: string;
}

export function policyDataScopeAdvancedLogsConditionsFiltersToTerraform(struct?: PolicyDataScopeAdvancedLogsConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyDataScopeAdvancedLogsConditionsFiltersToHclTerraform(struct?: PolicyDataScopeAdvancedLogsConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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

export class PolicyDataScopeAdvancedLogsConditionsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedLogsConditionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedLogsConditionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

export class PolicyDataScopeAdvancedLogsConditionsFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedLogsConditionsFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedLogsConditionsFiltersOutputReference {
    return new PolicyDataScopeAdvancedLogsConditionsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedLogsConditions {
  /**
  * List of filter criteria for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#filters Policy#filters}
  */
  readonly filters: PolicyDataScopeAdvancedLogsConditionsFilters[] | cdktf.IResolvable;
  /**
  * The key for the condition (e.g., 'environment').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#key Policy#key}
  */
  readonly key: string;
  /**
  * The origin of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#origin Policy#origin}
  */
  readonly origin: string;
  /**
  * The type of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
}

export function policyDataScopeAdvancedLogsConditionsToTerraform(struct?: PolicyDataScopeAdvancedLogsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(policyDataScopeAdvancedLogsConditionsFiltersToTerraform, false)(struct!.filters),
    key: cdktf.stringToTerraform(struct!.key),
    origin: cdktf.stringToTerraform(struct!.origin),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyDataScopeAdvancedLogsConditionsToHclTerraform(struct?: PolicyDataScopeAdvancedLogsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedLogsConditionsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedLogsConditionsFiltersList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class PolicyDataScopeAdvancedLogsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedLogsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedLogsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._key = undefined;
      this._origin = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._key = value.key;
      this._origin = value.origin;
      this._type = value.type;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new PolicyDataScopeAdvancedLogsConditionsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PolicyDataScopeAdvancedLogsConditionsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class PolicyDataScopeAdvancedLogsConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedLogsConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedLogsConditionsOutputReference {
    return new PolicyDataScopeAdvancedLogsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedLogs {
  /**
  * List of conditions for the data scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#conditions Policy#conditions}
  */
  readonly conditions: PolicyDataScopeAdvancedLogsConditions[] | cdktf.IResolvable;
  /**
  * Whether this data type is disabled (no data access). When true, users have no access to this data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#disabled Policy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Logical operator (e.g., 'and', 'or').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#operator Policy#operator}
  */
  readonly operator: string;
}

export function policyDataScopeAdvancedLogsToTerraform(struct?: PolicyDataScopeAdvancedLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(policyDataScopeAdvancedLogsConditionsToTerraform, false)(struct!.conditions),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function policyDataScopeAdvancedLogsToHclTerraform(struct?: PolicyDataScopeAdvancedLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedLogsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedLogsConditionsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDataScopeAdvancedLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyDataScopeAdvancedLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._disabled = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._disabled = value.disabled;
      this._operator = value.operator;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new PolicyDataScopeAdvancedLogsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyDataScopeAdvancedLogsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
}
export interface PolicyDataScopeAdvancedMetricsConditionsFilters {
  /**
  * The filter operation (e.g., 'match').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#op Policy#op}
  */
  readonly op: string;
  /**
  * The value to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#value Policy#value}
  */
  readonly value: string;
}

export function policyDataScopeAdvancedMetricsConditionsFiltersToTerraform(struct?: PolicyDataScopeAdvancedMetricsConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyDataScopeAdvancedMetricsConditionsFiltersToHclTerraform(struct?: PolicyDataScopeAdvancedMetricsConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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

export class PolicyDataScopeAdvancedMetricsConditionsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedMetricsConditionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedMetricsConditionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

export class PolicyDataScopeAdvancedMetricsConditionsFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedMetricsConditionsFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedMetricsConditionsFiltersOutputReference {
    return new PolicyDataScopeAdvancedMetricsConditionsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedMetricsConditions {
  /**
  * List of filter criteria for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#filters Policy#filters}
  */
  readonly filters: PolicyDataScopeAdvancedMetricsConditionsFilters[] | cdktf.IResolvable;
  /**
  * The key for the condition (e.g., 'environment').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#key Policy#key}
  */
  readonly key: string;
  /**
  * The origin of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#origin Policy#origin}
  */
  readonly origin: string;
  /**
  * The type of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
}

export function policyDataScopeAdvancedMetricsConditionsToTerraform(struct?: PolicyDataScopeAdvancedMetricsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(policyDataScopeAdvancedMetricsConditionsFiltersToTerraform, false)(struct!.filters),
    key: cdktf.stringToTerraform(struct!.key),
    origin: cdktf.stringToTerraform(struct!.origin),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyDataScopeAdvancedMetricsConditionsToHclTerraform(struct?: PolicyDataScopeAdvancedMetricsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedMetricsConditionsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedMetricsConditionsFiltersList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class PolicyDataScopeAdvancedMetricsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedMetricsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedMetricsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._key = undefined;
      this._origin = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._key = value.key;
      this._origin = value.origin;
      this._type = value.type;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new PolicyDataScopeAdvancedMetricsConditionsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PolicyDataScopeAdvancedMetricsConditionsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class PolicyDataScopeAdvancedMetricsConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedMetricsConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedMetricsConditionsOutputReference {
    return new PolicyDataScopeAdvancedMetricsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedMetrics {
  /**
  * List of conditions for the data scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#conditions Policy#conditions}
  */
  readonly conditions: PolicyDataScopeAdvancedMetricsConditions[] | cdktf.IResolvable;
  /**
  * Whether this data type is disabled (no data access). When true, users have no access to this data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#disabled Policy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Logical operator (e.g., 'and', 'or').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#operator Policy#operator}
  */
  readonly operator: string;
}

export function policyDataScopeAdvancedMetricsToTerraform(struct?: PolicyDataScopeAdvancedMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(policyDataScopeAdvancedMetricsConditionsToTerraform, false)(struct!.conditions),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function policyDataScopeAdvancedMetricsToHclTerraform(struct?: PolicyDataScopeAdvancedMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedMetricsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedMetricsConditionsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDataScopeAdvancedMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyDataScopeAdvancedMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._disabled = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._disabled = value.disabled;
      this._operator = value.operator;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new PolicyDataScopeAdvancedMetricsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyDataScopeAdvancedMetricsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
}
export interface PolicyDataScopeAdvancedTracesConditionsFilters {
  /**
  * The filter operation (e.g., 'match').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#op Policy#op}
  */
  readonly op: string;
  /**
  * The value to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#value Policy#value}
  */
  readonly value: string;
}

export function policyDataScopeAdvancedTracesConditionsFiltersToTerraform(struct?: PolicyDataScopeAdvancedTracesConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyDataScopeAdvancedTracesConditionsFiltersToHclTerraform(struct?: PolicyDataScopeAdvancedTracesConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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

export class PolicyDataScopeAdvancedTracesConditionsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedTracesConditionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedTracesConditionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

export class PolicyDataScopeAdvancedTracesConditionsFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedTracesConditionsFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedTracesConditionsFiltersOutputReference {
    return new PolicyDataScopeAdvancedTracesConditionsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedTracesConditions {
  /**
  * List of filter criteria for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#filters Policy#filters}
  */
  readonly filters: PolicyDataScopeAdvancedTracesConditionsFilters[] | cdktf.IResolvable;
  /**
  * The key for the condition (e.g., 'environment').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#key Policy#key}
  */
  readonly key: string;
  /**
  * The origin of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#origin Policy#origin}
  */
  readonly origin: string;
  /**
  * The type of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
}

export function policyDataScopeAdvancedTracesConditionsToTerraform(struct?: PolicyDataScopeAdvancedTracesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(policyDataScopeAdvancedTracesConditionsFiltersToTerraform, false)(struct!.filters),
    key: cdktf.stringToTerraform(struct!.key),
    origin: cdktf.stringToTerraform(struct!.origin),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyDataScopeAdvancedTracesConditionsToHclTerraform(struct?: PolicyDataScopeAdvancedTracesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedTracesConditionsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedTracesConditionsFiltersList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class PolicyDataScopeAdvancedTracesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedTracesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedTracesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._key = undefined;
      this._origin = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._key = value.key;
      this._origin = value.origin;
      this._type = value.type;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new PolicyDataScopeAdvancedTracesConditionsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PolicyDataScopeAdvancedTracesConditionsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class PolicyDataScopeAdvancedTracesConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedTracesConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedTracesConditionsOutputReference {
    return new PolicyDataScopeAdvancedTracesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedTraces {
  /**
  * List of conditions for the data scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#conditions Policy#conditions}
  */
  readonly conditions: PolicyDataScopeAdvancedTracesConditions[] | cdktf.IResolvable;
  /**
  * Whether this data type is disabled (no data access). When true, users have no access to this data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#disabled Policy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Logical operator (e.g., 'and', 'or').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#operator Policy#operator}
  */
  readonly operator: string;
}

export function policyDataScopeAdvancedTracesToTerraform(struct?: PolicyDataScopeAdvancedTraces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(policyDataScopeAdvancedTracesConditionsToTerraform, false)(struct!.conditions),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function policyDataScopeAdvancedTracesToHclTerraform(struct?: PolicyDataScopeAdvancedTraces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedTracesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedTracesConditionsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDataScopeAdvancedTracesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyDataScopeAdvancedTraces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedTraces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._disabled = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._disabled = value.disabled;
      this._operator = value.operator;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new PolicyDataScopeAdvancedTracesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyDataScopeAdvancedTracesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
}
export interface PolicyDataScopeAdvancedWorkloadsConditionsFilters {
  /**
  * The filter operation (e.g., 'match').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#op Policy#op}
  */
  readonly op: string;
  /**
  * The value to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#value Policy#value}
  */
  readonly value: string;
}

export function policyDataScopeAdvancedWorkloadsConditionsFiltersToTerraform(struct?: PolicyDataScopeAdvancedWorkloadsConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyDataScopeAdvancedWorkloadsConditionsFiltersToHclTerraform(struct?: PolicyDataScopeAdvancedWorkloadsConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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

export class PolicyDataScopeAdvancedWorkloadsConditionsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedWorkloadsConditionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedWorkloadsConditionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

export class PolicyDataScopeAdvancedWorkloadsConditionsFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedWorkloadsConditionsFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedWorkloadsConditionsFiltersOutputReference {
    return new PolicyDataScopeAdvancedWorkloadsConditionsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedWorkloadsConditions {
  /**
  * List of filter criteria for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#filters Policy#filters}
  */
  readonly filters: PolicyDataScopeAdvancedWorkloadsConditionsFilters[] | cdktf.IResolvable;
  /**
  * The key for the condition (e.g., 'environment').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#key Policy#key}
  */
  readonly key: string;
  /**
  * The origin of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#origin Policy#origin}
  */
  readonly origin: string;
  /**
  * The type of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
}

export function policyDataScopeAdvancedWorkloadsConditionsToTerraform(struct?: PolicyDataScopeAdvancedWorkloadsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(policyDataScopeAdvancedWorkloadsConditionsFiltersToTerraform, false)(struct!.filters),
    key: cdktf.stringToTerraform(struct!.key),
    origin: cdktf.stringToTerraform(struct!.origin),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyDataScopeAdvancedWorkloadsConditionsToHclTerraform(struct?: PolicyDataScopeAdvancedWorkloadsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedWorkloadsConditionsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedWorkloadsConditionsFiltersList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class PolicyDataScopeAdvancedWorkloadsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeAdvancedWorkloadsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedWorkloadsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._key = undefined;
      this._origin = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._key = value.key;
      this._origin = value.origin;
      this._type = value.type;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new PolicyDataScopeAdvancedWorkloadsConditionsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PolicyDataScopeAdvancedWorkloadsConditionsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class PolicyDataScopeAdvancedWorkloadsConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeAdvancedWorkloadsConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeAdvancedWorkloadsConditionsOutputReference {
    return new PolicyDataScopeAdvancedWorkloadsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeAdvancedWorkloads {
  /**
  * List of conditions for the data scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#conditions Policy#conditions}
  */
  readonly conditions: PolicyDataScopeAdvancedWorkloadsConditions[] | cdktf.IResolvable;
  /**
  * Whether this data type is disabled (no data access). When true, users have no access to this data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#disabled Policy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Logical operator (e.g., 'and', 'or').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#operator Policy#operator}
  */
  readonly operator: string;
}

export function policyDataScopeAdvancedWorkloadsToTerraform(struct?: PolicyDataScopeAdvancedWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(policyDataScopeAdvancedWorkloadsConditionsToTerraform, false)(struct!.conditions),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function policyDataScopeAdvancedWorkloadsToHclTerraform(struct?: PolicyDataScopeAdvancedWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(policyDataScopeAdvancedWorkloadsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeAdvancedWorkloadsConditionsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDataScopeAdvancedWorkloadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyDataScopeAdvancedWorkloads | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvancedWorkloads | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._disabled = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._disabled = value.disabled;
      this._operator = value.operator;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new PolicyDataScopeAdvancedWorkloadsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyDataScopeAdvancedWorkloadsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
}
export interface PolicyDataScopeAdvanced {
  /**
  * Data scope rules for events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#events Policy#events}
  */
  readonly events?: PolicyDataScopeAdvancedEvents;
  /**
  * Data scope rules for logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#logs Policy#logs}
  */
  readonly logs?: PolicyDataScopeAdvancedLogs;
  /**
  * Data scope rules for metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#metrics Policy#metrics}
  */
  readonly metrics?: PolicyDataScopeAdvancedMetrics;
  /**
  * Data scope rules for traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#traces Policy#traces}
  */
  readonly traces?: PolicyDataScopeAdvancedTraces;
  /**
  * Data scope rules for workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#workloads Policy#workloads}
  */
  readonly workloads?: PolicyDataScopeAdvancedWorkloads;
}

export function policyDataScopeAdvancedToTerraform(struct?: PolicyDataScopeAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: policyDataScopeAdvancedEventsToTerraform(struct!.events),
    logs: policyDataScopeAdvancedLogsToTerraform(struct!.logs),
    metrics: policyDataScopeAdvancedMetricsToTerraform(struct!.metrics),
    traces: policyDataScopeAdvancedTracesToTerraform(struct!.traces),
    workloads: policyDataScopeAdvancedWorkloadsToTerraform(struct!.workloads),
  }
}


export function policyDataScopeAdvancedToHclTerraform(struct?: PolicyDataScopeAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: policyDataScopeAdvancedEventsToHclTerraform(struct!.events),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyDataScopeAdvancedEvents",
    },
    logs: {
      value: policyDataScopeAdvancedLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyDataScopeAdvancedLogs",
    },
    metrics: {
      value: policyDataScopeAdvancedMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyDataScopeAdvancedMetrics",
    },
    traces: {
      value: policyDataScopeAdvancedTracesToHclTerraform(struct!.traces),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyDataScopeAdvancedTraces",
    },
    workloads: {
      value: policyDataScopeAdvancedWorkloadsToHclTerraform(struct!.workloads),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyDataScopeAdvancedWorkloads",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDataScopeAdvancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyDataScopeAdvanced | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._traces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traces = this._traces?.internalValue;
    }
    if (this._workloads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloads = this._workloads?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeAdvanced | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._traces.internalValue = undefined;
      this._workloads.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events.internalValue = value.events;
      this._logs.internalValue = value.logs;
      this._metrics.internalValue = value.metrics;
      this._traces.internalValue = value.traces;
      this._workloads.internalValue = value.workloads;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events = new PolicyDataScopeAdvancedEventsOutputReference(this, "events");
  public get events() {
    return this._events;
  }
  public putEvents(value: PolicyDataScopeAdvancedEvents) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new PolicyDataScopeAdvancedLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: PolicyDataScopeAdvancedLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new PolicyDataScopeAdvancedMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: PolicyDataScopeAdvancedMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // traces - computed: false, optional: true, required: false
  private _traces = new PolicyDataScopeAdvancedTracesOutputReference(this, "traces");
  public get traces() {
    return this._traces;
  }
  public putTraces(value: PolicyDataScopeAdvancedTraces) {
    this._traces.internalValue = value;
  }
  public resetTraces() {
    this._traces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesInput() {
    return this._traces.internalValue;
  }

  // workloads - computed: false, optional: true, required: false
  private _workloads = new PolicyDataScopeAdvancedWorkloadsOutputReference(this, "workloads");
  public get workloads() {
    return this._workloads;
  }
  public putWorkloads(value: PolicyDataScopeAdvancedWorkloads) {
    this._workloads.internalValue = value;
  }
  public resetWorkloads() {
    this._workloads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadsInput() {
    return this._workloads.internalValue;
  }
}
export interface PolicyDataScopeSimpleConditionsFilters {
  /**
  * The filter operation (e.g., 'match').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#op Policy#op}
  */
  readonly op: string;
  /**
  * The value to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#value Policy#value}
  */
  readonly value: string;
}

export function policyDataScopeSimpleConditionsFiltersToTerraform(struct?: PolicyDataScopeSimpleConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyDataScopeSimpleConditionsFiltersToHclTerraform(struct?: PolicyDataScopeSimpleConditionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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

export class PolicyDataScopeSimpleConditionsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeSimpleConditionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeSimpleConditionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

export class PolicyDataScopeSimpleConditionsFiltersList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeSimpleConditionsFilters[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeSimpleConditionsFiltersOutputReference {
    return new PolicyDataScopeSimpleConditionsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeSimpleConditions {
  /**
  * List of filter criteria for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#filters Policy#filters}
  */
  readonly filters: PolicyDataScopeSimpleConditionsFilters[] | cdktf.IResolvable;
  /**
  * The key for the condition (e.g., 'environment').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#key Policy#key}
  */
  readonly key: string;
  /**
  * The origin of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#origin Policy#origin}
  */
  readonly origin: string;
  /**
  * The type of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
}

export function policyDataScopeSimpleConditionsToTerraform(struct?: PolicyDataScopeSimpleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(policyDataScopeSimpleConditionsFiltersToTerraform, false)(struct!.filters),
    key: cdktf.stringToTerraform(struct!.key),
    origin: cdktf.stringToTerraform(struct!.origin),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyDataScopeSimpleConditionsToHclTerraform(struct?: PolicyDataScopeSimpleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(policyDataScopeSimpleConditionsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeSimpleConditionsFiltersList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class PolicyDataScopeSimpleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDataScopeSimpleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeSimpleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._key = undefined;
      this._origin = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._key = value.key;
      this._origin = value.origin;
      this._type = value.type;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new PolicyDataScopeSimpleConditionsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PolicyDataScopeSimpleConditionsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class PolicyDataScopeSimpleConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyDataScopeSimpleConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyDataScopeSimpleConditionsOutputReference {
    return new PolicyDataScopeSimpleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDataScopeSimple {
  /**
  * List of conditions for the data scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#conditions Policy#conditions}
  */
  readonly conditions: PolicyDataScopeSimpleConditions[] | cdktf.IResolvable;
  /**
  * Whether this data type is disabled (no data access). When true, users have no access to this data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#disabled Policy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Logical operator (e.g., 'and', 'or').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#operator Policy#operator}
  */
  readonly operator: string;
}

export function policyDataScopeSimpleToTerraform(struct?: PolicyDataScopeSimple | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(policyDataScopeSimpleConditionsToTerraform, false)(struct!.conditions),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function policyDataScopeSimpleToHclTerraform(struct?: PolicyDataScopeSimple | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(policyDataScopeSimpleConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyDataScopeSimpleConditionsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDataScopeSimpleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyDataScopeSimple | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScopeSimple | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._disabled = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._disabled = value.disabled;
      this._operator = value.operator;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new PolicyDataScopeSimpleConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyDataScopeSimpleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
}
export interface PolicyDataScope {
  /**
  * Advanced data scope configuration. Allows per-data-type filtering rules for fine-grained access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#advanced Policy#advanced}
  */
  readonly advanced?: PolicyDataScopeAdvanced;
  /**
  * Simple data scope configuration. Applies a single set of filtering rules to all data types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#simple Policy#simple}
  */
  readonly simple?: PolicyDataScopeSimple;
}

export function policyDataScopeToTerraform(struct?: PolicyDataScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced: policyDataScopeAdvancedToTerraform(struct!.advanced),
    simple: policyDataScopeSimpleToTerraform(struct!.simple),
  }
}


export function policyDataScopeToHclTerraform(struct?: PolicyDataScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced: {
      value: policyDataScopeAdvancedToHclTerraform(struct!.advanced),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyDataScopeAdvanced",
    },
    simple: {
      value: policyDataScopeSimpleToHclTerraform(struct!.simple),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyDataScopeSimple",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDataScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyDataScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanced = this._advanced?.internalValue;
    }
    if (this._simple?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simple = this._simple?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDataScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advanced.internalValue = undefined;
      this._simple.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advanced.internalValue = value.advanced;
      this._simple.internalValue = value.simple;
    }
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced = new PolicyDataScopeAdvancedOutputReference(this, "advanced");
  public get advanced() {
    return this._advanced;
  }
  public putAdvanced(value: PolicyDataScopeAdvanced) {
    this._advanced.internalValue = value;
  }
  public resetAdvanced() {
    this._advanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedInput() {
    return this._advanced.internalValue;
  }

  // simple - computed: false, optional: true, required: false
  private _simple = new PolicyDataScopeSimpleOutputReference(this, "simple");
  public get simple() {
    return this._simple;
  }
  public putSimple(value: PolicyDataScopeSimple) {
    this._simple.internalValue = value;
  }
  public resetSimple() {
    this._simple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleInput() {
    return this._simple.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy groundcover_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "groundcover_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "groundcover_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/policy groundcover_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'groundcover_policy',
      terraformGeneratorMetadata: {
        providerName: 'groundcover',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claimRole = config.claimRole;
    this._dataScope.internalValue = config.dataScope;
    this._description = config.description;
    this._name = config.name;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claim_role - computed: false, optional: true, required: false
  private _claimRole?: string; 
  public get claimRole() {
    return this.getStringAttribute('claim_role');
  }
  public set claimRole(value: string) {
    this._claimRole = value;
  }
  public resetClaimRole() {
    this._claimRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimRoleInput() {
    return this._claimRole;
  }

  // data_scope - computed: false, optional: true, required: false
  private _dataScope = new PolicyDataScopeOutputReference(this, "data_scope");
  public get dataScope() {
    return this._dataScope;
  }
  public putDataScope(value: PolicyDataScope) {
    this._dataScope.internalValue = value;
  }
  public resetDataScope() {
    this._dataScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataScopeInput() {
    return this._dataScope.internalValue;
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_system_defined - computed: true, optional: false, required: false
  public get isSystemDefined() {
    return this.getBooleanAttribute('is_system_defined');
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

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // revision_number - computed: true, optional: false, required: false
  public get revisionNumber() {
    return this.getNumberAttribute('revision_number');
  }

  // role - computed: false, optional: false, required: true
  private _role?: { [key: string]: string }; 
  public get role() {
    return this.getStringMapAttribute('role');
  }
  public set role(value: { [key: string]: string }) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claim_role: cdktf.stringToTerraform(this._claimRole),
      data_scope: policyDataScopeToTerraform(this._dataScope.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.hashMapper(cdktf.stringToTerraform)(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claim_role: {
        value: cdktf.stringToHclTerraform(this._claimRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_scope: {
        value: policyDataScopeToHclTerraform(this._dataScope.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolicyDataScope",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      role: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._role),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
