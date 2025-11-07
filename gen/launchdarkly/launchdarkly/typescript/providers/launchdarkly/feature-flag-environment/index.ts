// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureFlagEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment key. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#env_key FeatureFlagEnvironment#env_key}
  */
  readonly envKey: string;
  /**
  * The feature flag's unique `id` in the format `project_key/flag_key`. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#flag_id FeatureFlagEnvironment#flag_id}
  */
  readonly flagId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The index of the variation to serve if targeting is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#off_variation FeatureFlagEnvironment#off_variation}
  */
  readonly offVariation: number;
  /**
  * Whether targeting is enabled. Defaults to `false` if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#on FeatureFlagEnvironment#on}
  */
  readonly on?: boolean | cdktf.IResolvable;
  /**
  * Whether to send event data back to LaunchDarkly. Defaults to `false` if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#track_events FeatureFlagEnvironment#track_events}
  */
  readonly trackEvents?: boolean | cdktf.IResolvable;
  /**
  * context_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#context_targets FeatureFlagEnvironment#context_targets}
  */
  readonly contextTargets?: FeatureFlagEnvironmentContextTargets[] | cdktf.IResolvable;
  /**
  * fallthrough block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#fallthrough FeatureFlagEnvironment#fallthrough}
  */
  readonly fallthrough: FeatureFlagEnvironmentFallthrough;
  /**
  * prerequisites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#prerequisites FeatureFlagEnvironment#prerequisites}
  */
  readonly prerequisites?: FeatureFlagEnvironmentPrerequisites[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#rules FeatureFlagEnvironment#rules}
  */
  readonly rules?: FeatureFlagEnvironmentRules[] | cdktf.IResolvable;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#targets FeatureFlagEnvironment#targets}
  */
  readonly targets?: FeatureFlagEnvironmentTargets[] | cdktf.IResolvable;
}
export interface FeatureFlagEnvironmentContextTargets {
  /**
  * The context kind on which the flag should target in this environment. User (`user`) targets should be specified as `targets` attribute blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}
  */
  readonly contextKind: string;
  /**
  * List of `user` strings to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}
  */
  readonly values: string[];
  /**
  * The index of the variation to serve if a user target value is matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}
  */
  readonly variation: number;
}

export function featureFlagEnvironmentContextTargetsToTerraform(struct?: FeatureFlagEnvironmentContextTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    variation: cdktf.numberToTerraform(struct!.variation),
  }
}


export function featureFlagEnvironmentContextTargetsToHclTerraform(struct?: FeatureFlagEnvironmentContextTargets | cdktf.IResolvable): any {
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
    variation: {
      value: cdktf.numberToHclTerraform(struct!.variation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagEnvironmentContextTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureFlagEnvironmentContextTargets | cdktf.IResolvable | undefined {
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
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureFlagEnvironmentContextTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextKind = undefined;
      this._values = undefined;
      this._variation = undefined;
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
      this._variation = value.variation;
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

  // variation - computed: false, optional: false, required: true
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class FeatureFlagEnvironmentContextTargetsList extends cdktf.ComplexList {
  public internalValue? : FeatureFlagEnvironmentContextTargets[] | cdktf.IResolvable

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
  public get(index: number): FeatureFlagEnvironmentContextTargetsOutputReference {
    return new FeatureFlagEnvironmentContextTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureFlagEnvironmentFallthrough {
  /**
  * Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}
  */
  readonly bucketBy?: string;
  /**
  * The context kind associated with the specified rollout. This argument is only valid if rollout_weights is also specified. If omitted, defaults to `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}
  */
  readonly contextKind?: string;
  /**
  * List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`. The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}
  */
  readonly rolloutWeights?: number[];
  /**
  * The default integer variation index to serve if no `prerequisites`, `target`, or `rules` apply. You must specify either `variation` or `rollout_weights`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}
  */
  readonly variation?: number;
}

export function featureFlagEnvironmentFallthroughToTerraform(struct?: FeatureFlagEnvironmentFallthroughOutputReference | FeatureFlagEnvironmentFallthrough): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_by: cdktf.stringToTerraform(struct!.bucketBy),
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    rollout_weights: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rolloutWeights),
    variation: cdktf.numberToTerraform(struct!.variation),
  }
}


export function featureFlagEnvironmentFallthroughToHclTerraform(struct?: FeatureFlagEnvironmentFallthroughOutputReference | FeatureFlagEnvironmentFallthrough): any {
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
    context_kind: {
      value: cdktf.stringToHclTerraform(struct!.contextKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollout_weights: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rolloutWeights),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    variation: {
      value: cdktf.numberToHclTerraform(struct!.variation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagEnvironmentFallthroughOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FeatureFlagEnvironmentFallthrough | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketBy = this._bucketBy;
    }
    if (this._contextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextKind = this._contextKind;
    }
    if (this._rolloutWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutWeights = this._rolloutWeights;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureFlagEnvironmentFallthrough | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketBy = undefined;
      this._contextKind = undefined;
      this._rolloutWeights = undefined;
      this._variation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketBy = value.bucketBy;
      this._contextKind = value.contextKind;
      this._rolloutWeights = value.rolloutWeights;
      this._variation = value.variation;
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

  // rollout_weights - computed: false, optional: true, required: false
  private _rolloutWeights?: number[]; 
  public get rolloutWeights() {
    return this.getNumberListAttribute('rollout_weights');
  }
  public set rolloutWeights(value: number[]) {
    this._rolloutWeights = value;
  }
  public resetRolloutWeights() {
    this._rolloutWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutWeightsInput() {
    return this._rolloutWeights;
  }

  // variation - computed: false, optional: true, required: false
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  public resetVariation() {
    this._variation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}
export interface FeatureFlagEnvironmentPrerequisites {
  /**
  * The prerequisite feature flag's `key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#flag_key FeatureFlagEnvironment#flag_key}
  */
  readonly flagKey: string;
  /**
  * The index of the prerequisite feature flag's variation to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}
  */
  readonly variation: number;
}

export function featureFlagEnvironmentPrerequisitesToTerraform(struct?: FeatureFlagEnvironmentPrerequisites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag_key: cdktf.stringToTerraform(struct!.flagKey),
    variation: cdktf.numberToTerraform(struct!.variation),
  }
}


export function featureFlagEnvironmentPrerequisitesToHclTerraform(struct?: FeatureFlagEnvironmentPrerequisites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flag_key: {
      value: cdktf.stringToHclTerraform(struct!.flagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variation: {
      value: cdktf.numberToHclTerraform(struct!.variation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagEnvironmentPrerequisitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureFlagEnvironmentPrerequisites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.flagKey = this._flagKey;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureFlagEnvironmentPrerequisites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flagKey = undefined;
      this._variation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flagKey = value.flagKey;
      this._variation = value.variation;
    }
  }

  // flag_key - computed: false, optional: false, required: true
  private _flagKey?: string; 
  public get flagKey() {
    return this.getStringAttribute('flag_key');
  }
  public set flagKey(value: string) {
    this._flagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagKeyInput() {
    return this._flagKey;
  }

  // variation - computed: false, optional: false, required: true
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class FeatureFlagEnvironmentPrerequisitesList extends cdktf.ComplexList {
  public internalValue? : FeatureFlagEnvironmentPrerequisites[] | cdktf.IResolvable

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
  public get(index: number): FeatureFlagEnvironmentPrerequisitesOutputReference {
    return new FeatureFlagEnvironmentPrerequisitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureFlagEnvironmentRulesClauses {
  /**
  * The user attribute to operate on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#attribute FeatureFlagEnvironment#attribute}
  */
  readonly attribute: string;
  /**
  * The context kind associated with this rule clause. If omitted, defaults to `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}
  */
  readonly contextKind?: string;
  /**
  * Whether to negate the rule clause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#negate FeatureFlagEnvironment#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator associated with the rule clause. Available options are `in`, `endsWith`, `startsWith`, `matches`, `contains`, `lessThan`, `lessThanOrEqual`, `greaterThanOrEqual`, `before`, `after`, `segmentMatch`, `semVerEqual`, `semVerLessThan`, and `semVerGreaterThan`. Read LaunchDarkly's [Operators](https://docs.launchdarkly.com/sdk/concepts/flag-evaluation-rules#operators) documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#op FeatureFlagEnvironment#op}
  */
  readonly op: string;
  /**
  * The type for each of the clause's values. Available types are `boolean`, `string`, and `number`. If omitted, `value_type` defaults to `string`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#value_type FeatureFlagEnvironment#value_type}
  */
  readonly valueType?: string;
  /**
  * The list of values associated with the rule clause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}
  */
  readonly values: string[];
}

export function featureFlagEnvironmentRulesClausesToTerraform(struct?: FeatureFlagEnvironmentRulesClauses | cdktf.IResolvable): any {
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


export function featureFlagEnvironmentRulesClausesToHclTerraform(struct?: FeatureFlagEnvironmentRulesClauses | cdktf.IResolvable): any {
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

export class FeatureFlagEnvironmentRulesClausesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureFlagEnvironmentRulesClauses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FeatureFlagEnvironmentRulesClauses | cdktf.IResolvable | undefined) {
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

export class FeatureFlagEnvironmentRulesClausesList extends cdktf.ComplexList {
  public internalValue? : FeatureFlagEnvironmentRulesClauses[] | cdktf.IResolvable

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
  public get(index: number): FeatureFlagEnvironmentRulesClausesOutputReference {
    return new FeatureFlagEnvironmentRulesClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureFlagEnvironmentRules {
  /**
  * Group percentage rollout by a custom attribute. This argument is only valid if `rollout_weights` is also specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}
  */
  readonly bucketBy?: string;
  /**
  * The context kind associated with the specified rollout. This argument is only valid if `rollout_weights` is also specified. Defaults to `user` if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}
  */
  readonly contextKind?: string;
  /**
  * A human-readable description of the targeting rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#description FeatureFlagEnvironment#description}
  */
  readonly description?: string;
  /**
  * List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`. The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}
  */
  readonly rolloutWeights?: number[];
  /**
  * The integer variation index to serve if the rule clauses evaluate to `true`. You must specify either `variation` or `rollout_weights`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}
  */
  readonly variation?: number;
  /**
  * clauses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#clauses FeatureFlagEnvironment#clauses}
  */
  readonly clauses?: FeatureFlagEnvironmentRulesClauses[] | cdktf.IResolvable;
}

export function featureFlagEnvironmentRulesToTerraform(struct?: FeatureFlagEnvironmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_by: cdktf.stringToTerraform(struct!.bucketBy),
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    description: cdktf.stringToTerraform(struct!.description),
    rollout_weights: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rolloutWeights),
    variation: cdktf.numberToTerraform(struct!.variation),
    clauses: cdktf.listMapper(featureFlagEnvironmentRulesClausesToTerraform, true)(struct!.clauses),
  }
}


export function featureFlagEnvironmentRulesToHclTerraform(struct?: FeatureFlagEnvironmentRules | cdktf.IResolvable): any {
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
    context_kind: {
      value: cdktf.stringToHclTerraform(struct!.contextKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollout_weights: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rolloutWeights),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    variation: {
      value: cdktf.numberToHclTerraform(struct!.variation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clauses: {
      value: cdktf.listMapperHcl(featureFlagEnvironmentRulesClausesToHclTerraform, true)(struct!.clauses),
      isBlock: true,
      type: "list",
      storageClassType: "FeatureFlagEnvironmentRulesClausesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagEnvironmentRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureFlagEnvironmentRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketBy = this._bucketBy;
    }
    if (this._contextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextKind = this._contextKind;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._rolloutWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutWeights = this._rolloutWeights;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    if (this._clauses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clauses = this._clauses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureFlagEnvironmentRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketBy = undefined;
      this._contextKind = undefined;
      this._description = undefined;
      this._rolloutWeights = undefined;
      this._variation = undefined;
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
      this._contextKind = value.contextKind;
      this._description = value.description;
      this._rolloutWeights = value.rolloutWeights;
      this._variation = value.variation;
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

  // rollout_weights - computed: false, optional: true, required: false
  private _rolloutWeights?: number[]; 
  public get rolloutWeights() {
    return this.getNumberListAttribute('rollout_weights');
  }
  public set rolloutWeights(value: number[]) {
    this._rolloutWeights = value;
  }
  public resetRolloutWeights() {
    this._rolloutWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutWeightsInput() {
    return this._rolloutWeights;
  }

  // variation - computed: false, optional: true, required: false
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  public resetVariation() {
    this._variation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }

  // clauses - computed: false, optional: true, required: false
  private _clauses = new FeatureFlagEnvironmentRulesClausesList(this, "clauses", false);
  public get clauses() {
    return this._clauses;
  }
  public putClauses(value: FeatureFlagEnvironmentRulesClauses[] | cdktf.IResolvable) {
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

export class FeatureFlagEnvironmentRulesList extends cdktf.ComplexList {
  public internalValue? : FeatureFlagEnvironmentRules[] | cdktf.IResolvable

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
  public get(index: number): FeatureFlagEnvironmentRulesOutputReference {
    return new FeatureFlagEnvironmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureFlagEnvironmentTargets {
  /**
  * List of `user` strings to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}
  */
  readonly values: string[];
  /**
  * The index of the variation to serve if a user target value is matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}
  */
  readonly variation: number;
}

export function featureFlagEnvironmentTargetsToTerraform(struct?: FeatureFlagEnvironmentTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    variation: cdktf.numberToTerraform(struct!.variation),
  }
}


export function featureFlagEnvironmentTargetsToHclTerraform(struct?: FeatureFlagEnvironmentTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    variation: {
      value: cdktf.numberToHclTerraform(struct!.variation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagEnvironmentTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureFlagEnvironmentTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureFlagEnvironmentTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
      this._variation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
      this._variation = value.variation;
    }
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

  // variation - computed: false, optional: false, required: true
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class FeatureFlagEnvironmentTargetsList extends cdktf.ComplexList {
  public internalValue? : FeatureFlagEnvironmentTargets[] | cdktf.IResolvable

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
  public get(index: number): FeatureFlagEnvironmentTargetsOutputReference {
    return new FeatureFlagEnvironmentTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment launchdarkly_feature_flag_environment}
*/
export class FeatureFlagEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_feature_flag_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FeatureFlagEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureFlagEnvironment to import
  * @param importFromId The id of the existing FeatureFlagEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureFlagEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_feature_flag_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag_environment launchdarkly_feature_flag_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureFlagEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureFlagEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_feature_flag_environment',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.25.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envKey = config.envKey;
    this._flagId = config.flagId;
    this._id = config.id;
    this._offVariation = config.offVariation;
    this._on = config.on;
    this._trackEvents = config.trackEvents;
    this._contextTargets.internalValue = config.contextTargets;
    this._fallthrough.internalValue = config.fallthrough;
    this._prerequisites.internalValue = config.prerequisites;
    this._rules.internalValue = config.rules;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // flag_id - computed: false, optional: false, required: true
  private _flagId?: string; 
  public get flagId() {
    return this.getStringAttribute('flag_id');
  }
  public set flagId(value: string) {
    this._flagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagIdInput() {
    return this._flagId;
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

  // off_variation - computed: false, optional: false, required: true
  private _offVariation?: number; 
  public get offVariation() {
    return this.getNumberAttribute('off_variation');
  }
  public set offVariation(value: number) {
    this._offVariation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offVariationInput() {
    return this._offVariation;
  }

  // on - computed: false, optional: true, required: false
  private _on?: boolean | cdktf.IResolvable; 
  public get on() {
    return this.getBooleanAttribute('on');
  }
  public set on(value: boolean | cdktf.IResolvable) {
    this._on = value;
  }
  public resetOn() {
    this._on = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }

  // track_events - computed: false, optional: true, required: false
  private _trackEvents?: boolean | cdktf.IResolvable; 
  public get trackEvents() {
    return this.getBooleanAttribute('track_events');
  }
  public set trackEvents(value: boolean | cdktf.IResolvable) {
    this._trackEvents = value;
  }
  public resetTrackEvents() {
    this._trackEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackEventsInput() {
    return this._trackEvents;
  }

  // context_targets - computed: false, optional: true, required: false
  private _contextTargets = new FeatureFlagEnvironmentContextTargetsList(this, "context_targets", true);
  public get contextTargets() {
    return this._contextTargets;
  }
  public putContextTargets(value: FeatureFlagEnvironmentContextTargets[] | cdktf.IResolvable) {
    this._contextTargets.internalValue = value;
  }
  public resetContextTargets() {
    this._contextTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextTargetsInput() {
    return this._contextTargets.internalValue;
  }

  // fallthrough - computed: false, optional: false, required: true
  private _fallthrough = new FeatureFlagEnvironmentFallthroughOutputReference(this, "fallthrough");
  public get fallthrough() {
    return this._fallthrough;
  }
  public putFallthrough(value: FeatureFlagEnvironmentFallthrough) {
    this._fallthrough.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallthroughInput() {
    return this._fallthrough.internalValue;
  }

  // prerequisites - computed: false, optional: true, required: false
  private _prerequisites = new FeatureFlagEnvironmentPrerequisitesList(this, "prerequisites", false);
  public get prerequisites() {
    return this._prerequisites;
  }
  public putPrerequisites(value: FeatureFlagEnvironmentPrerequisites[] | cdktf.IResolvable) {
    this._prerequisites.internalValue = value;
  }
  public resetPrerequisites() {
    this._prerequisites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prerequisitesInput() {
    return this._prerequisites.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new FeatureFlagEnvironmentRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: FeatureFlagEnvironmentRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new FeatureFlagEnvironmentTargetsList(this, "targets", true);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: FeatureFlagEnvironmentTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_key: cdktf.stringToTerraform(this._envKey),
      flag_id: cdktf.stringToTerraform(this._flagId),
      id: cdktf.stringToTerraform(this._id),
      off_variation: cdktf.numberToTerraform(this._offVariation),
      on: cdktf.booleanToTerraform(this._on),
      track_events: cdktf.booleanToTerraform(this._trackEvents),
      context_targets: cdktf.listMapper(featureFlagEnvironmentContextTargetsToTerraform, true)(this._contextTargets.internalValue),
      fallthrough: featureFlagEnvironmentFallthroughToTerraform(this._fallthrough.internalValue),
      prerequisites: cdktf.listMapper(featureFlagEnvironmentPrerequisitesToTerraform, true)(this._prerequisites.internalValue),
      rules: cdktf.listMapper(featureFlagEnvironmentRulesToTerraform, true)(this._rules.internalValue),
      targets: cdktf.listMapper(featureFlagEnvironmentTargetsToTerraform, true)(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_key: {
        value: cdktf.stringToHclTerraform(this._envKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flag_id: {
        value: cdktf.stringToHclTerraform(this._flagId),
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
      off_variation: {
        value: cdktf.numberToHclTerraform(this._offVariation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on: {
        value: cdktf.booleanToHclTerraform(this._on),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      track_events: {
        value: cdktf.booleanToHclTerraform(this._trackEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context_targets: {
        value: cdktf.listMapperHcl(featureFlagEnvironmentContextTargetsToHclTerraform, true)(this._contextTargets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FeatureFlagEnvironmentContextTargetsList",
      },
      fallthrough: {
        value: featureFlagEnvironmentFallthroughToHclTerraform(this._fallthrough.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureFlagEnvironmentFallthroughList",
      },
      prerequisites: {
        value: cdktf.listMapperHcl(featureFlagEnvironmentPrerequisitesToHclTerraform, true)(this._prerequisites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureFlagEnvironmentPrerequisitesList",
      },
      rules: {
        value: cdktf.listMapperHcl(featureFlagEnvironmentRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureFlagEnvironmentRulesList",
      },
      targets: {
        value: cdktf.listMapperHcl(featureFlagEnvironmentTargetsToHclTerraform, true)(this._targets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FeatureFlagEnvironmentTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
