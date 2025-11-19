// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the alerting profile, displayed in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#display_name AlertingProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#id AlertingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the management zone to which the alerting profile applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#mz_id AlertingProfile#mz_id}
  */
  readonly mzId?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#unknowns AlertingProfile#unknowns}
  */
  readonly unknowns?: string;
  /**
  * event_type_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#event_type_filters AlertingProfile#event_type_filters}
  */
  readonly eventTypeFilters?: AlertingProfileEventTypeFilters[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#metadata AlertingProfile#metadata}
  */
  readonly metadata?: AlertingProfileMetadata;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#rules AlertingProfile#rules}
  */
  readonly rules?: AlertingProfileRules[] | cdktf.IResolvable;
}
export interface AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilter {
  /**
  * The condition is case sensitive (`false`) or case insensitive (`true`).   If not set, then `false` is used, making the condition case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#case_insensitive AlertingProfile#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * The filter is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#enabled AlertingProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Reverses the comparison **operator**. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#negate AlertingProfile#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison.   You can reverse it by setting **negate** to `true`. Possible values are `BEGINS_WITH`, `CONTAINS`, `CONTAINS_REGEX`, `ENDS_WITH` and `EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#operator AlertingProfile#operator}
  */
  readonly operator: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#unknowns AlertingProfile#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#value AlertingProfile#value}
  */
  readonly value: string;
}

export function alertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterToTerraform(struct?: AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterToHclTerraform(struct?: AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitive = this._caseInsensitive;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitive = undefined;
      this._enabled = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitive = value.caseInsensitive;
      this._enabled = value.enabled;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
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

export class AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterList extends cdktf.ComplexList {
  public internalValue? : AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilter[] | cdktf.IResolvable

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
  public get(index: number): AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterOutputReference {
    return new AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilter {
  /**
  * The condition is case sensitive (`false`) or case insensitive (`true`).   If not set, then `false` is used, making the condition case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#case_insensitive AlertingProfile#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * The filter is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#enabled AlertingProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Reverses the comparison **operator**. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#negate AlertingProfile#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison.   You can reverse it by setting **negate** to `true`. Possible values are `BEGINS_WITH`, `CONTAINS`, `CONTAINS_REGEX`, `ENDS_WITH` and `EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#operator AlertingProfile#operator}
  */
  readonly operator: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#unknowns AlertingProfile#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#value AlertingProfile#value}
  */
  readonly value: string;
}

export function alertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterToTerraform(struct?: AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterToHclTerraform(struct?: AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitive = this._caseInsensitive;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitive = undefined;
      this._enabled = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitive = value.caseInsensitive;
      this._enabled = value.enabled;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
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

export class AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterList extends cdktf.ComplexList {
  public internalValue? : AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilter[] | cdktf.IResolvable

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
  public get(index: number): AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterOutputReference {
    return new AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertingProfileEventTypeFiltersCustomEventFilter {
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#unknowns AlertingProfile#unknowns}
  */
  readonly unknowns?: string;
  /**
  * custom_description_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#custom_description_filter AlertingProfile#custom_description_filter}
  */
  readonly customDescriptionFilter?: AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilter[] | cdktf.IResolvable;
  /**
  * custom_title_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#custom_title_filter AlertingProfile#custom_title_filter}
  */
  readonly customTitleFilter?: AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilter[] | cdktf.IResolvable;
}

export function alertingProfileEventTypeFiltersCustomEventFilterToTerraform(struct?: AlertingProfileEventTypeFiltersCustomEventFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    custom_description_filter: cdktf.listMapper(alertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterToTerraform, true)(struct!.customDescriptionFilter),
    custom_title_filter: cdktf.listMapper(alertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterToTerraform, true)(struct!.customTitleFilter),
  }
}


export function alertingProfileEventTypeFiltersCustomEventFilterToHclTerraform(struct?: AlertingProfileEventTypeFiltersCustomEventFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_description_filter: {
      value: cdktf.listMapperHcl(alertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterToHclTerraform, true)(struct!.customDescriptionFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterList",
    },
    custom_title_filter: {
      value: cdktf.listMapperHcl(alertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterToHclTerraform, true)(struct!.customTitleFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingProfileEventTypeFiltersCustomEventFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingProfileEventTypeFiltersCustomEventFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._customDescriptionFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDescriptionFilter = this._customDescriptionFilter?.internalValue;
    }
    if (this._customTitleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTitleFilter = this._customTitleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileEventTypeFiltersCustomEventFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._customDescriptionFilter.internalValue = undefined;
      this._customTitleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._customDescriptionFilter.internalValue = value.customDescriptionFilter;
      this._customTitleFilter.internalValue = value.customTitleFilter;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // custom_description_filter - computed: false, optional: true, required: false
  private _customDescriptionFilter = new AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilterList(this, "custom_description_filter", false);
  public get customDescriptionFilter() {
    return this._customDescriptionFilter;
  }
  public putCustomDescriptionFilter(value: AlertingProfileEventTypeFiltersCustomEventFilterCustomDescriptionFilter[] | cdktf.IResolvable) {
    this._customDescriptionFilter.internalValue = value;
  }
  public resetCustomDescriptionFilter() {
    this._customDescriptionFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDescriptionFilterInput() {
    return this._customDescriptionFilter.internalValue;
  }

  // custom_title_filter - computed: false, optional: true, required: false
  private _customTitleFilter = new AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilterList(this, "custom_title_filter", false);
  public get customTitleFilter() {
    return this._customTitleFilter;
  }
  public putCustomTitleFilter(value: AlertingProfileEventTypeFiltersCustomEventFilterCustomTitleFilter[] | cdktf.IResolvable) {
    this._customTitleFilter.internalValue = value;
  }
  public resetCustomTitleFilter() {
    this._customTitleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTitleFilterInput() {
    return this._customTitleFilter.internalValue;
  }
}

export class AlertingProfileEventTypeFiltersCustomEventFilterList extends cdktf.ComplexList {
  public internalValue? : AlertingProfileEventTypeFiltersCustomEventFilter[] | cdktf.IResolvable

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
  public get(index: number): AlertingProfileEventTypeFiltersCustomEventFilterOutputReference {
    return new AlertingProfileEventTypeFiltersCustomEventFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertingProfileEventTypeFiltersPredefinedEventFilter {
  /**
  * The type of the predefined event. Possible values are `APPLICATION_ERROR_RATE_INCREASED`, `APPLICATION_SLOWDOWN`, `APPLICATION_UNEXPECTED_HIGH_LOAD`, `APPLICATION_UNEXPECTED_LOW_LOAD`, `AWS_LAMBDA_HIGH_ERROR_RATE`, `CUSTOM_APPLICATION_ERROR_RATE_INCREASED`, `CUSTOM_APPLICATION_SLOWDOWN`, `CUSTOM_APPLICATION_UNEXPECTED_HIGH_LOAD`, `CUSTOM_APPLICATION_UNEXPECTED_LOW_LOAD`, `CUSTOM_APP_CRASH_RATE_INCREASED`, `DATABASE_CONNECTION_FAILURE`, `DATA_CENTER_SERVICE_PERFORMANCE_DEGRADATION`, `DATA_CENTER_SERVICE_UNAVAILABLE`, `EBS_VOLUME_HIGH_LATENCY`, `EC2_HIGH_CPU`, `ELB_HIGH_BACKEND_ERROR_RATE`, `ENTERPRICE_APPLICATION_PERFORMANCE_DEGRADATION`, `ENTERPRISE_APPLICATION_UNAVAILABLE`, `ESXI_GUEST_ACTIVE_SWAP_WAIT`, `ESXI_GUEST_CPU_LIMIT_REACHED`, `ESXI_HOST_CPU_SATURATION`, `ESXI_HOST_DATASTORE_LOW_DISK_SPACE`, `ESXI_HOST_DISK_QUEUE_SLOW`, `ESXI_HOST_DISK_SLOW`, `ESXI_HOST_MEMORY_SATURATION`, `ESXI_HOST_NETWORK_PROBLEMS`, `ESXI_HOST_OVERLOADED_STORAGE`, `ESXI_VM_IMPACT_HOST_CPU_SATURATION`, `ESXI_VM_IMPACT_HOST_MEMORY_SATURATION`, `EXTERNAL_SYNTHETIC_TEST_OUTAGE`, `EXTERNAL_SYNTHETIC_TEST_SLOWDOWN`, `HOST_OF_SERVICE_UNAVAILABLE`, `HTTP_CHECK_GLOBAL_OUTAGE`, `HTTP_CHECK_LOCAL_OUTAGE`, `HTTP_CHECK_TEST_LOCATION_SLOWDOWN`, `MOBILE_APPLICATION_ERROR_RATE_INCREASED`, `MOBILE_APPLICATION_SLOWDOWN`, `MOBILE_APPLICATION_UNEXPECTED_HIGH_LOAD`, `MOBILE_APPLICATION_UNEXPECTED_LOW_LOAD`, `MOBILE_APP_CRASH_RATE_INCREASED`, `MONITORING_UNAVAILABLE`, `OSI_DISK_LOW_INODES`, `OSI_GRACEFULLY_SHUTDOWN`, `OSI_HIGH_CPU`, `OSI_HIGH_MEMORY`, `OSI_LOW_DISK_SPACE`, `OSI_NIC_DROPPED_PACKETS_HIGH`, `OSI_NIC_ERRORS_HIGH`, `OSI_NIC_UTILIZATION_HIGH`, `OSI_SLOW_DISK`, `OSI_UNEXPECTEDLY_UNAVAILABLE`, `PGI_OF_SERVICE_UNAVAILABLE`, `PGI_UNAVAILABLE`, `PG_LOW_INSTANCE_COUNT`, `PROCESS_CRASHED`, `PROCESS_HIGH_GC_ACTIVITY`, `PROCESS_MEMORY_RESOURCE_EXHAUSTED`, `PROCESS_NA_HIGH_CONN_FAIL_RATE`, `PROCESS_NA_HIGH_LOSS_RATE`, `PROCESS_THREADS_RESOURCE_EXHAUSTED`, `RDS_HIGH_CPU`, `RDS_HIGH_LATENCY`, `RDS_LOW_MEMORY`, `RDS_LOW_STORAGE_SPACE`, `RDS_OF_SERVICE_UNAVAILABLE`, `RDS_RESTART_SEQUENCE`, `SERVICE_ERROR_RATE_INCREASED`, `SERVICE_SLOWDOWN`, `SERVICE_UNEXPECTED_HIGH_LOAD`, `SERVICE_UNEXPECTED_LOW_LOAD`, `SYNTHETIC_GLOBAL_OUTAGE`, `SYNTHETIC_LOCAL_OUTAGE`, `SYNTHETIC_NODE_OUTAGE`, `SYNTHETIC_PRIVATE_LOCATION_OUTAGE` and `SYNTHETIC_TEST_LOCATION_SLOWDOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#event_type AlertingProfile#event_type}
  */
  readonly eventType: string;
  /**
  * The alert triggers when the problem of specified severity arises while the specified event **is** happening (`false`) or while the specified event is **not** happening (`true`).   For example, if you chose the Slowdown (`PERFORMANCE`) severity and Unexpected high traffic (`APPLICATION_UNEXPECTED_HIGH_LOAD`) event with **negate** set to `true`, the alerting profile will trigger only when the slowdown problem is raised while there is no unexpected high traffic event.  Consider the following use case as an example. The Slowdown (`PERFORMANCE`) severity rule is set. Depending on the configuration of the event filter (Unexpected high traffic (`APPLICATION_UNEXPECTED_HIGH_LOAD`) event is used as an example), the behavior of the alerting profile is one of the following:* **negate** is set to `false`: The alert triggers when the slowdown problem is raised while unexpected high traffic event is happening.  * **negate** is set to `true`: The alert triggers when the slowdown problem is raised while there is no unexpected high traffic event.  * no event rule is set: The alert triggers when the slowdown problem is raised, regardless of any events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#negate AlertingProfile#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#unknowns AlertingProfile#unknowns}
  */
  readonly unknowns?: string;
}

export function alertingProfileEventTypeFiltersPredefinedEventFilterToTerraform(struct?: AlertingProfileEventTypeFiltersPredefinedEventFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    negate: cdktf.booleanToTerraform(struct!.negate),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function alertingProfileEventTypeFiltersPredefinedEventFilterToHclTerraform(struct?: AlertingProfileEventTypeFiltersPredefinedEventFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingProfileEventTypeFiltersPredefinedEventFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingProfileEventTypeFiltersPredefinedEventFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileEventTypeFiltersPredefinedEventFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._negate = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._negate = value.negate;
      this._unknowns = value.unknowns;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class AlertingProfileEventTypeFiltersPredefinedEventFilterList extends cdktf.ComplexList {
  public internalValue? : AlertingProfileEventTypeFiltersPredefinedEventFilter[] | cdktf.IResolvable

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
  public get(index: number): AlertingProfileEventTypeFiltersPredefinedEventFilterOutputReference {
    return new AlertingProfileEventTypeFiltersPredefinedEventFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertingProfileEventTypeFilters {
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#unknowns AlertingProfile#unknowns}
  */
  readonly unknowns?: string;
  /**
  * custom_event_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#custom_event_filter AlertingProfile#custom_event_filter}
  */
  readonly customEventFilter?: AlertingProfileEventTypeFiltersCustomEventFilter[] | cdktf.IResolvable;
  /**
  * predefined_event_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#predefined_event_filter AlertingProfile#predefined_event_filter}
  */
  readonly predefinedEventFilter?: AlertingProfileEventTypeFiltersPredefinedEventFilter[] | cdktf.IResolvable;
}

export function alertingProfileEventTypeFiltersToTerraform(struct?: AlertingProfileEventTypeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    custom_event_filter: cdktf.listMapper(alertingProfileEventTypeFiltersCustomEventFilterToTerraform, true)(struct!.customEventFilter),
    predefined_event_filter: cdktf.listMapper(alertingProfileEventTypeFiltersPredefinedEventFilterToTerraform, true)(struct!.predefinedEventFilter),
  }
}


export function alertingProfileEventTypeFiltersToHclTerraform(struct?: AlertingProfileEventTypeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_event_filter: {
      value: cdktf.listMapperHcl(alertingProfileEventTypeFiltersCustomEventFilterToHclTerraform, true)(struct!.customEventFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AlertingProfileEventTypeFiltersCustomEventFilterList",
    },
    predefined_event_filter: {
      value: cdktf.listMapperHcl(alertingProfileEventTypeFiltersPredefinedEventFilterToHclTerraform, true)(struct!.predefinedEventFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AlertingProfileEventTypeFiltersPredefinedEventFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingProfileEventTypeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingProfileEventTypeFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._customEventFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEventFilter = this._customEventFilter?.internalValue;
    }
    if (this._predefinedEventFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedEventFilter = this._predefinedEventFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileEventTypeFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._customEventFilter.internalValue = undefined;
      this._predefinedEventFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._customEventFilter.internalValue = value.customEventFilter;
      this._predefinedEventFilter.internalValue = value.predefinedEventFilter;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // custom_event_filter - computed: false, optional: true, required: false
  private _customEventFilter = new AlertingProfileEventTypeFiltersCustomEventFilterList(this, "custom_event_filter", false);
  public get customEventFilter() {
    return this._customEventFilter;
  }
  public putCustomEventFilter(value: AlertingProfileEventTypeFiltersCustomEventFilter[] | cdktf.IResolvable) {
    this._customEventFilter.internalValue = value;
  }
  public resetCustomEventFilter() {
    this._customEventFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEventFilterInput() {
    return this._customEventFilter.internalValue;
  }

  // predefined_event_filter - computed: false, optional: true, required: false
  private _predefinedEventFilter = new AlertingProfileEventTypeFiltersPredefinedEventFilterList(this, "predefined_event_filter", false);
  public get predefinedEventFilter() {
    return this._predefinedEventFilter;
  }
  public putPredefinedEventFilter(value: AlertingProfileEventTypeFiltersPredefinedEventFilter[] | cdktf.IResolvable) {
    this._predefinedEventFilter.internalValue = value;
  }
  public resetPredefinedEventFilter() {
    this._predefinedEventFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedEventFilterInput() {
    return this._predefinedEventFilter.internalValue;
  }
}

export class AlertingProfileEventTypeFiltersList extends cdktf.ComplexList {
  public internalValue? : AlertingProfileEventTypeFilters[] | cdktf.IResolvable

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
  public get(index: number): AlertingProfileEventTypeFiltersOutputReference {
    return new AlertingProfileEventTypeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertingProfileMetadata {
  /**
  * Dynatrace server version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#cluster_version AlertingProfile#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * A Sorted list of the version numbers of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#configuration_versions AlertingProfile#configuration_versions}
  */
  readonly configurationVersions?: number[];
  /**
  * A Sorted list of the version numbers of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#current_configuration_versions AlertingProfile#current_configuration_versions}
  */
  readonly currentConfigurationVersions?: string[];
}

export function alertingProfileMetadataToTerraform(struct?: AlertingProfileMetadataOutputReference | AlertingProfileMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_version: cdktf.stringToTerraform(struct!.clusterVersion),
    configuration_versions: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.configurationVersions),
    current_configuration_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.currentConfigurationVersions),
  }
}


export function alertingProfileMetadataToHclTerraform(struct?: AlertingProfileMetadataOutputReference | AlertingProfileMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_version: {
      value: cdktf.stringToHclTerraform(struct!.clusterVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_versions: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.configurationVersions),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    current_configuration_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.currentConfigurationVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingProfileMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingProfileMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVersion = this._clusterVersion;
    }
    if (this._configurationVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationVersions = this._configurationVersions;
    }
    if (this._currentConfigurationVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConfigurationVersions = this._currentConfigurationVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterVersion = undefined;
      this._configurationVersions = undefined;
      this._currentConfigurationVersions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterVersion = value.clusterVersion;
      this._configurationVersions = value.configurationVersions;
      this._currentConfigurationVersions = value.currentConfigurationVersions;
    }
  }

  // cluster_version - computed: false, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // configuration_versions - computed: false, optional: true, required: false
  private _configurationVersions?: number[]; 
  public get configurationVersions() {
    return this.getNumberListAttribute('configuration_versions');
  }
  public set configurationVersions(value: number[]) {
    this._configurationVersions = value;
  }
  public resetConfigurationVersions() {
    this._configurationVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationVersionsInput() {
    return this._configurationVersions;
  }

  // current_configuration_versions - computed: false, optional: true, required: false
  private _currentConfigurationVersions?: string[]; 
  public get currentConfigurationVersions() {
    return this.getListAttribute('current_configuration_versions');
  }
  public set currentConfigurationVersions(value: string[]) {
    this._currentConfigurationVersions = value;
  }
  public resetCurrentConfigurationVersions() {
    this._currentConfigurationVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConfigurationVersionsInput() {
    return this._currentConfigurationVersions;
  }
}
export interface AlertingProfileRulesTagFilterTagFilters {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#context AlertingProfile#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#key AlertingProfile#key}
  */
  readonly key: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#value AlertingProfile#value}
  */
  readonly value?: string;
}

export function alertingProfileRulesTagFilterTagFiltersToTerraform(struct?: AlertingProfileRulesTagFilterTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertingProfileRulesTagFilterTagFiltersToHclTerraform(struct?: AlertingProfileRulesTagFilterTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
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

export class AlertingProfileRulesTagFilterTagFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingProfileRulesTagFilterTagFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileRulesTagFilterTagFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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
}

export class AlertingProfileRulesTagFilterTagFiltersList extends cdktf.ComplexList {
  public internalValue? : AlertingProfileRulesTagFilterTagFilters[] | cdktf.IResolvable

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
  public get(index: number): AlertingProfileRulesTagFilterTagFiltersOutputReference {
    return new AlertingProfileRulesTagFilterTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertingProfileRulesTagFilter {
  /**
  * The filtering mode:  * `INCLUDE_ANY`: The rule applies to monitored entities that have at least one of the specified tags. You can specify up to 100 tags.  * `INCLUDE_ALL`: The rule applies to monitored entities that have **all** of the specified tags. You can specify up to 10 tags.  * `NONE`: The rule applies to all monitored entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#include_mode AlertingProfile#include_mode}
  */
  readonly includeMode: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#unknowns AlertingProfile#unknowns}
  */
  readonly unknowns?: string;
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#tag_filters AlertingProfile#tag_filters}
  */
  readonly tagFilters?: AlertingProfileRulesTagFilterTagFilters[] | cdktf.IResolvable;
}

export function alertingProfileRulesTagFilterToTerraform(struct?: AlertingProfileRulesTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_mode: cdktf.stringToTerraform(struct!.includeMode),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    tag_filters: cdktf.listMapper(alertingProfileRulesTagFilterTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}


export function alertingProfileRulesTagFilterToHclTerraform(struct?: AlertingProfileRulesTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_mode: {
      value: cdktf.stringToHclTerraform(struct!.includeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filters: {
      value: cdktf.listMapperHcl(alertingProfileRulesTagFilterTagFiltersToHclTerraform, true)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "AlertingProfileRulesTagFilterTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingProfileRulesTagFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingProfileRulesTagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMode = this._includeMode;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileRulesTagFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeMode = undefined;
      this._unknowns = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeMode = value.includeMode;
      this._unknowns = value.unknowns;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // include_mode - computed: false, optional: false, required: true
  private _includeMode?: string; 
  public get includeMode() {
    return this.getStringAttribute('include_mode');
  }
  public set includeMode(value: string) {
    this._includeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeModeInput() {
    return this._includeMode;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new AlertingProfileRulesTagFilterTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: AlertingProfileRulesTagFilterTagFilters[] | cdktf.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}

export class AlertingProfileRulesTagFilterList extends cdktf.ComplexList {
  public internalValue? : AlertingProfileRulesTagFilter[] | cdktf.IResolvable

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
  public get(index: number): AlertingProfileRulesTagFilterOutputReference {
    return new AlertingProfileRulesTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertingProfileRules {
  /**
  * Send a notification if a problem remains open longer than *X* minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#delay_in_minutes AlertingProfile#delay_in_minutes}
  */
  readonly delayInMinutes: number;
  /**
  * The severity level to trigger the alert. Possible values are `AVAILABILITY`,	`CUSTOM_ALERT`,	`ERROR`,`MONITORING_UNAVAILABLE`,`PERFORMANCE` and `RESOURCE_CONTENTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#severity_level AlertingProfile#severity_level}
  */
  readonly severityLevel: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#unknowns AlertingProfile#unknowns}
  */
  readonly unknowns?: string;
  /**
  * tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#tag_filter AlertingProfile#tag_filter}
  */
  readonly tagFilter: AlertingProfileRulesTagFilter[] | cdktf.IResolvable;
}

export function alertingProfileRulesToTerraform(struct?: AlertingProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_in_minutes: cdktf.numberToTerraform(struct!.delayInMinutes),
    severity_level: cdktf.stringToTerraform(struct!.severityLevel),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    tag_filter: cdktf.listMapper(alertingProfileRulesTagFilterToTerraform, true)(struct!.tagFilter),
  }
}


export function alertingProfileRulesToHclTerraform(struct?: AlertingProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.delayInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity_level: {
      value: cdktf.stringToHclTerraform(struct!.severityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filter: {
      value: cdktf.listMapperHcl(alertingProfileRulesTagFilterToHclTerraform, true)(struct!.tagFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AlertingProfileRulesTagFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingProfileRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingProfileRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayInMinutes = this._delayInMinutes;
    }
    if (this._severityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLevel = this._severityLevel;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._tagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilter = this._tagFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingProfileRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayInMinutes = undefined;
      this._severityLevel = undefined;
      this._unknowns = undefined;
      this._tagFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayInMinutes = value.delayInMinutes;
      this._severityLevel = value.severityLevel;
      this._unknowns = value.unknowns;
      this._tagFilter.internalValue = value.tagFilter;
    }
  }

  // delay_in_minutes - computed: false, optional: false, required: true
  private _delayInMinutes?: number; 
  public get delayInMinutes() {
    return this.getNumberAttribute('delay_in_minutes');
  }
  public set delayInMinutes(value: number) {
    this._delayInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInMinutesInput() {
    return this._delayInMinutes;
  }

  // severity_level - computed: false, optional: false, required: true
  private _severityLevel?: string; 
  public get severityLevel() {
    return this.getStringAttribute('severity_level');
  }
  public set severityLevel(value: string) {
    this._severityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelInput() {
    return this._severityLevel;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // tag_filter - computed: false, optional: false, required: true
  private _tagFilter = new AlertingProfileRulesTagFilterList(this, "tag_filter", false);
  public get tagFilter() {
    return this._tagFilter;
  }
  public putTagFilter(value: AlertingProfileRulesTagFilter[] | cdktf.IResolvable) {
    this._tagFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter.internalValue;
  }
}

export class AlertingProfileRulesList extends cdktf.ComplexList {
  public internalValue? : AlertingProfileRules[] | cdktf.IResolvable

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
  public get(index: number): AlertingProfileRulesOutputReference {
    return new AlertingProfileRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile dynatrace_alerting_profile}
*/
export class AlertingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_alerting_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertingProfile to import
  * @param importFromId The id of the existing AlertingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_alerting_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/alerting_profile dynatrace_alerting_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AlertingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_alerting_profile',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._mzId = config.mzId;
    this._unknowns = config.unknowns;
    this._eventTypeFilters.internalValue = config.eventTypeFilters;
    this._metadata.internalValue = config.metadata;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // mz_id - computed: false, optional: true, required: false
  private _mzId?: string; 
  public get mzId() {
    return this.getStringAttribute('mz_id');
  }
  public set mzId(value: string) {
    this._mzId = value;
  }
  public resetMzId() {
    this._mzId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mzIdInput() {
    return this._mzId;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // event_type_filters - computed: false, optional: true, required: false
  private _eventTypeFilters = new AlertingProfileEventTypeFiltersList(this, "event_type_filters", false);
  public get eventTypeFilters() {
    return this._eventTypeFilters;
  }
  public putEventTypeFilters(value: AlertingProfileEventTypeFilters[] | cdktf.IResolvable) {
    this._eventTypeFilters.internalValue = value;
  }
  public resetEventTypeFilters() {
    this._eventTypeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeFiltersInput() {
    return this._eventTypeFilters.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AlertingProfileMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AlertingProfileMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new AlertingProfileRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertingProfileRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      mz_id: cdktf.stringToTerraform(this._mzId),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      event_type_filters: cdktf.listMapper(alertingProfileEventTypeFiltersToTerraform, true)(this._eventTypeFilters.internalValue),
      metadata: alertingProfileMetadataToTerraform(this._metadata.internalValue),
      rules: cdktf.listMapper(alertingProfileRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      mz_id: {
        value: cdktf.stringToHclTerraform(this._mzId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type_filters: {
        value: cdktf.listMapperHcl(alertingProfileEventTypeFiltersToHclTerraform, true)(this._eventTypeFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingProfileEventTypeFiltersList",
      },
      metadata: {
        value: alertingProfileMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingProfileMetadataList",
      },
      rules: {
        value: cdktf.listMapperHcl(alertingProfileRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingProfileRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
