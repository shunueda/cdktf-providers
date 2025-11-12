// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the segment's purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#description Segment#description}
  */
  readonly description?: string;
  /**
  * The segment's environment key. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#env_key Segment#env_key}
  */
  readonly envKey: string;
  /**
  * List of user keys excluded from the segment. To target on other context kinds, use the excluded_contexts block attribute. This attribute is not valid when `unbounded` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#excluded Segment#excluded}
  */
  readonly excluded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#id Segment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of user keys included in the segment. To target on other context kinds, use the included_contexts block attribute. This attribute is not valid when `unbounded` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#included Segment#included}
  */
  readonly included?: string[];
  /**
  * The unique key that references the segment. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#key Segment#key}
  */
  readonly key: string;
  /**
  * The human-friendly name for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#name Segment#name}
  */
  readonly name: string;
  /**
  * The segment's project key. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#project_key Segment#project_key}
  */
  readonly projectKey: string;
  /**
  * Tags associated with your resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#tags Segment#tags}
  */
  readonly tags?: string[];
  /**
  * Whether to create a standard segment (`false`) or a Big Segment (`true`). Standard segments include rule-based and smaller list-based segments. Big Segments include larger list-based segments and synced segments. Only use a Big Segment if you need to add more than 15,000 individual targets. It is not possible to manage the list of targeted contexts for Big Segments with Terraform. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#unbounded Segment#unbounded}
  */
  readonly unbounded?: boolean | cdktf.IResolvable;
  /**
  * For Big Segments, the targeted context kind. If this attribute is not specified it will default to `user`. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#unbounded_context_kind Segment#unbounded_context_kind}
  */
  readonly unboundedContextKind?: string;
  /**
  * excluded_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#excluded_contexts Segment#excluded_contexts}
  */
  readonly excludedContexts?: SegmentExcludedContexts[] | cdktf.IResolvable;
  /**
  * included_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#included_contexts Segment#included_contexts}
  */
  readonly includedContexts?: SegmentIncludedContexts[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#rules Segment#rules}
  */
  readonly rules?: SegmentRules[] | cdktf.IResolvable;
}
export interface SegmentExcludedContexts {
  /**
  * The context kind associated with this segment target. To target on user contexts, use the included and excluded attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#context_kind Segment#context_kind}
  */
  readonly contextKind: string;
  /**
  * List of target object keys included in or excluded from the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#values Segment#values}
  */
  readonly values: string[];
}

export function segmentExcludedContextsToTerraform(struct?: SegmentExcludedContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function segmentExcludedContextsToHclTerraform(struct?: SegmentExcludedContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_kind: {
      value: cdktf.stringToHclTerraform(struct!.contextKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentExcludedContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentExcludedContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextKind = this._contextKind;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentExcludedContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextKind = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextKind = value.contextKind;
      this._values = value.values;
    }
  }

  // context_kind - computed: false, optional: false, required: true
  private _contextKind?: string; 
  public get contextKind() {
    return this.getStringAttribute('context_kind');
  }
  public set contextKind(value: string) {
    this._contextKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextKindInput() {
    return this._contextKind;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SegmentExcludedContextsList extends cdktf.ComplexList {
  public internalValue? : SegmentExcludedContexts[] | cdktf.IResolvable

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
  public get(index: number): SegmentExcludedContextsOutputReference {
    return new SegmentExcludedContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentIncludedContexts {
  /**
  * The context kind associated with this segment target. To target on user contexts, use the included and excluded attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#context_kind Segment#context_kind}
  */
  readonly contextKind: string;
  /**
  * List of target object keys included in or excluded from the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#values Segment#values}
  */
  readonly values: string[];
}

export function segmentIncludedContextsToTerraform(struct?: SegmentIncludedContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function segmentIncludedContextsToHclTerraform(struct?: SegmentIncludedContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_kind: {
      value: cdktf.stringToHclTerraform(struct!.contextKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentIncludedContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentIncludedContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextKind = this._contextKind;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentIncludedContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextKind = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextKind = value.contextKind;
      this._values = value.values;
    }
  }

  // context_kind - computed: false, optional: false, required: true
  private _contextKind?: string; 
  public get contextKind() {
    return this.getStringAttribute('context_kind');
  }
  public set contextKind(value: string) {
    this._contextKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextKindInput() {
    return this._contextKind;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SegmentIncludedContextsList extends cdktf.ComplexList {
  public internalValue? : SegmentIncludedContexts[] | cdktf.IResolvable

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
  public get(index: number): SegmentIncludedContextsOutputReference {
    return new SegmentIncludedContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentRulesClauses {
  /**
  * The user attribute to operate on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#attribute Segment#attribute}
  */
  readonly attribute: string;
  /**
  * The context kind associated with this rule clause. If omitted, defaults to `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#context_kind Segment#context_kind}
  */
  readonly contextKind?: string;
  /**
  * Whether to negate the rule clause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#negate Segment#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator associated with the rule clause. Available options are `in`, `endsWith`, `startsWith`, `matches`, `contains`, `lessThan`, `lessThanOrEqual`, `greaterThanOrEqual`, `before`, `after`, `segmentMatch`, `semVerEqual`, `semVerLessThan`, and `semVerGreaterThan`. Read LaunchDarkly's [Operators](https://docs.launchdarkly.com/sdk/concepts/flag-evaluation-rules#operators) documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#op Segment#op}
  */
  readonly op: string;
  /**
  * The type for each of the clause's values. Available types are `boolean`, `string`, and `number`. If omitted, `value_type` defaults to `string`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#value_type Segment#value_type}
  */
  readonly valueType?: string;
  /**
  * The list of values associated with the rule clause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#values Segment#values}
  */
  readonly values: string[];
}

export function segmentRulesClausesToTerraform(struct?: SegmentRulesClauses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    negate: cdktf.booleanToTerraform(struct!.negate),
    op: cdktf.stringToTerraform(struct!.op),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function segmentRulesClausesToHclTerraform(struct?: SegmentRulesClauses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_kind: {
      value: cdktf.stringToHclTerraform(struct!.contextKind),
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
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentRulesClausesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRulesClauses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._contextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextKind = this._contextKind;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRulesClauses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._contextKind = undefined;
      this._negate = undefined;
      this._op = undefined;
      this._valueType = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._contextKind = value.contextKind;
      this._negate = value.negate;
      this._op = value.op;
      this._valueType = value.valueType;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // context_kind - computed: false, optional: true, required: false
  private _contextKind?: string; 
  public get contextKind() {
    return this.getStringAttribute('context_kind');
  }
  public set contextKind(value: string) {
    this._contextKind = value;
  }
  public resetContextKind() {
    this._contextKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextKindInput() {
    return this._contextKind;
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

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SegmentRulesClausesList extends cdktf.ComplexList {
  public internalValue? : SegmentRulesClauses[] | cdktf.IResolvable

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
  public get(index: number): SegmentRulesClausesOutputReference {
    return new SegmentRulesClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentRules {
  /**
  * The attribute by which to group contexts together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#bucket_by Segment#bucket_by}
  */
  readonly bucketBy?: string;
  /**
  * The context kind associated with this segment rule. This argument is only valid if `weight` is also specified. If omitted, defaults to `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#rollout_context_kind Segment#rollout_context_kind}
  */
  readonly rolloutContextKind?: string;
  /**
  * The integer weight of the rule (between 1 and 100000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#weight Segment#weight}
  */
  readonly weight?: number;
  /**
  * clauses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#clauses Segment#clauses}
  */
  readonly clauses?: SegmentRulesClauses[] | cdktf.IResolvable;
}

export function segmentRulesToTerraform(struct?: SegmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_by: cdktf.stringToTerraform(struct!.bucketBy),
    rollout_context_kind: cdktf.stringToTerraform(struct!.rolloutContextKind),
    weight: cdktf.numberToTerraform(struct!.weight),
    clauses: cdktf.listMapper(segmentRulesClausesToTerraform, true)(struct!.clauses),
  }
}


export function segmentRulesToHclTerraform(struct?: SegmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_by: {
      value: cdktf.stringToHclTerraform(struct!.bucketBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollout_context_kind: {
      value: cdktf.stringToHclTerraform(struct!.rolloutContextKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clauses: {
      value: cdktf.listMapperHcl(segmentRulesClausesToHclTerraform, true)(struct!.clauses),
      isBlock: true,
      type: "list",
      storageClassType: "SegmentRulesClausesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketBy = this._bucketBy;
    }
    if (this._rolloutContextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutContextKind = this._rolloutContextKind;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._clauses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clauses = this._clauses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketBy = undefined;
      this._rolloutContextKind = undefined;
      this._weight = undefined;
      this._clauses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketBy = value.bucketBy;
      this._rolloutContextKind = value.rolloutContextKind;
      this._weight = value.weight;
      this._clauses.internalValue = value.clauses;
    }
  }

  // bucket_by - computed: false, optional: true, required: false
  private _bucketBy?: string; 
  public get bucketBy() {
    return this.getStringAttribute('bucket_by');
  }
  public set bucketBy(value: string) {
    this._bucketBy = value;
  }
  public resetBucketBy() {
    this._bucketBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketByInput() {
    return this._bucketBy;
  }

  // rollout_context_kind - computed: false, optional: true, required: false
  private _rolloutContextKind?: string; 
  public get rolloutContextKind() {
    return this.getStringAttribute('rollout_context_kind');
  }
  public set rolloutContextKind(value: string) {
    this._rolloutContextKind = value;
  }
  public resetRolloutContextKind() {
    this._rolloutContextKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutContextKindInput() {
    return this._rolloutContextKind;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // clauses - computed: false, optional: true, required: false
  private _clauses = new SegmentRulesClausesList(this, "clauses", false);
  public get clauses() {
    return this._clauses;
  }
  public putClauses(value: SegmentRulesClauses[] | cdktf.IResolvable) {
    this._clauses.internalValue = value;
  }
  public resetClauses() {
    this._clauses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clausesInput() {
    return this._clauses.internalValue;
  }
}

export class SegmentRulesList extends cdktf.ComplexList {
  public internalValue? : SegmentRules[] | cdktf.IResolvable

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
  public get(index: number): SegmentRulesOutputReference {
    return new SegmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment launchdarkly_segment}
*/
export class Segment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Segment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Segment to import
  * @param importFromId The id of the existing Segment that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Segment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.26.0/docs/resources/segment launchdarkly_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_segment',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.26.0',
        providerVersionConstraint: '2.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._envKey = config.envKey;
    this._excluded = config.excluded;
    this._id = config.id;
    this._included = config.included;
    this._key = config.key;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._tags = config.tags;
    this._unbounded = config.unbounded;
    this._unboundedContextKind = config.unboundedContextKind;
    this._excludedContexts.internalValue = config.excludedContexts;
    this._includedContexts.internalValue = config.includedContexts;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getNumberAttribute('creation_date');
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

  // env_key - computed: false, optional: false, required: true
  private _envKey?: string; 
  public get envKey() {
    return this.getStringAttribute('env_key');
  }
  public set envKey(value: string) {
    this._envKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envKeyInput() {
    return this._envKey;
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded?: string[]; 
  public get excluded() {
    return this.getListAttribute('excluded');
  }
  public set excluded(value: string[]) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
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

  // included - computed: false, optional: true, required: false
  private _included?: string[]; 
  public get included() {
    return this.getListAttribute('included');
  }
  public set included(value: string[]) {
    this._included = value;
  }
  public resetIncluded() {
    this._included = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedInput() {
    return this._included;
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

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // unbounded - computed: false, optional: true, required: false
  private _unbounded?: boolean | cdktf.IResolvable; 
  public get unbounded() {
    return this.getBooleanAttribute('unbounded');
  }
  public set unbounded(value: boolean | cdktf.IResolvable) {
    this._unbounded = value;
  }
  public resetUnbounded() {
    this._unbounded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unboundedInput() {
    return this._unbounded;
  }

  // unbounded_context_kind - computed: true, optional: true, required: false
  private _unboundedContextKind?: string; 
  public get unboundedContextKind() {
    return this.getStringAttribute('unbounded_context_kind');
  }
  public set unboundedContextKind(value: string) {
    this._unboundedContextKind = value;
  }
  public resetUnboundedContextKind() {
    this._unboundedContextKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unboundedContextKindInput() {
    return this._unboundedContextKind;
  }

  // excluded_contexts - computed: false, optional: true, required: false
  private _excludedContexts = new SegmentExcludedContextsList(this, "excluded_contexts", false);
  public get excludedContexts() {
    return this._excludedContexts;
  }
  public putExcludedContexts(value: SegmentExcludedContexts[] | cdktf.IResolvable) {
    this._excludedContexts.internalValue = value;
  }
  public resetExcludedContexts() {
    this._excludedContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedContextsInput() {
    return this._excludedContexts.internalValue;
  }

  // included_contexts - computed: false, optional: true, required: false
  private _includedContexts = new SegmentIncludedContextsList(this, "included_contexts", false);
  public get includedContexts() {
    return this._includedContexts;
  }
  public putIncludedContexts(value: SegmentIncludedContexts[] | cdktf.IResolvable) {
    this._includedContexts.internalValue = value;
  }
  public resetIncludedContexts() {
    this._includedContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedContextsInput() {
    return this._includedContexts.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new SegmentRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SegmentRules[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      env_key: cdktf.stringToTerraform(this._envKey),
      excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excluded),
      id: cdktf.stringToTerraform(this._id),
      included: cdktf.listMapper(cdktf.stringToTerraform, false)(this._included),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      unbounded: cdktf.booleanToTerraform(this._unbounded),
      unbounded_context_kind: cdktf.stringToTerraform(this._unboundedContextKind),
      excluded_contexts: cdktf.listMapper(segmentExcludedContextsToTerraform, true)(this._excludedContexts.internalValue),
      included_contexts: cdktf.listMapper(segmentIncludedContextsToTerraform, true)(this._includedContexts.internalValue),
      rules: cdktf.listMapper(segmentRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_key: {
        value: cdktf.stringToHclTerraform(this._envKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excluded),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._included),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unbounded: {
        value: cdktf.booleanToHclTerraform(this._unbounded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unbounded_context_kind: {
        value: cdktf.stringToHclTerraform(this._unboundedContextKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_contexts: {
        value: cdktf.listMapperHcl(segmentExcludedContextsToHclTerraform, true)(this._excludedContexts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentExcludedContextsList",
      },
      included_contexts: {
        value: cdktf.listMapperHcl(segmentIncludedContextsToHclTerraform, true)(this._includedContexts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentIncludedContextsList",
      },
      rules: {
        value: cdktf.listMapperHcl(segmentRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
