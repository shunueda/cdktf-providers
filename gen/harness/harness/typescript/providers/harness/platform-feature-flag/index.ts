// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformFeatureFlagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the flag is archived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#archived PlatformFeatureFlag#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * Which of the variations to use when the flag is toggled to off state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#default_off_variation PlatformFeatureFlag#default_off_variation}
  */
  readonly defaultOffVariation: string;
  /**
  * Which of the variations to use when the flag is toggled to on state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#default_on_variation PlatformFeatureFlag#default_on_variation}
  */
  readonly defaultOnVariation: string;
  /**
  * Description of the Feature Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#description PlatformFeatureFlag#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#id PlatformFeatureFlag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the Feature Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#identifier PlatformFeatureFlag#identifier}
  */
  readonly identifier: string;
  /**
  * The type of data the flag represents. Valid values are `boolean`, `int`, `string`, `json`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#kind PlatformFeatureFlag#kind}
  */
  readonly kind: string;
  /**
  * Name of the Feature Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#name PlatformFeatureFlag#name}
  */
  readonly name: string;
  /**
  * Organization Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#org_id PlatformFeatureFlag#org_id}
  */
  readonly orgId: string;
  /**
  * The owner of the flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#owner PlatformFeatureFlag#owner}
  */
  readonly owner?: string;
  /**
  * Whether or not the flag is permanent. If it is, it will never be flagged as stale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#permanent PlatformFeatureFlag#permanent}
  */
  readonly permanent: boolean | cdktf.IResolvable;
  /**
  * Project Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#project_id PlatformFeatureFlag#project_id}
  */
  readonly projectId: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#environment PlatformFeatureFlag#environment}
  */
  readonly environment?: PlatformFeatureFlagEnvironment[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#tags PlatformFeatureFlag#tags}
  */
  readonly tags?: PlatformFeatureFlagTags[] | cdktf.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#variation PlatformFeatureFlag#variation}
  */
  readonly variation: PlatformFeatureFlagVariation[] | cdktf.IResolvable;
}
export interface PlatformFeatureFlagEnvironmentAddTargetRule {
  /**
  * The targets that should be served this variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#targets PlatformFeatureFlag#targets}
  */
  readonly targets?: string[];
  /**
  * The identifier of the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#variation PlatformFeatureFlag#variation}
  */
  readonly variation?: string;
}

export function platformFeatureFlagEnvironmentAddTargetRuleToTerraform(struct?: PlatformFeatureFlagEnvironmentAddTargetRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
    variation: cdktf.stringToTerraform(struct!.variation),
  }
}


export function platformFeatureFlagEnvironmentAddTargetRuleToHclTerraform(struct?: PlatformFeatureFlagEnvironmentAddTargetRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    variation: {
      value: cdktf.stringToHclTerraform(struct!.variation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformFeatureFlagEnvironmentAddTargetRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformFeatureFlagEnvironmentAddTargetRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformFeatureFlagEnvironmentAddTargetRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targets = undefined;
      this._variation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targets = value.targets;
      this._variation = value.variation;
    }
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // variation - computed: false, optional: true, required: false
  private _variation?: string; 
  public get variation() {
    return this.getStringAttribute('variation');
  }
  public set variation(value: string) {
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

export class PlatformFeatureFlagEnvironmentAddTargetRuleList extends cdktf.ComplexList {
  public internalValue? : PlatformFeatureFlagEnvironmentAddTargetRule[] | cdktf.IResolvable

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
  public get(index: number): PlatformFeatureFlagEnvironmentAddTargetRuleOutputReference {
    return new PlatformFeatureFlagEnvironmentAddTargetRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformFeatureFlagEnvironment {
  /**
  * Default variation to be served when flag is 'off'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#default_off_variation PlatformFeatureFlag#default_off_variation}
  */
  readonly defaultOffVariation?: string;
  /**
  * Default variation to be served when flag is 'on'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#default_on_variation PlatformFeatureFlag#default_on_variation}
  */
  readonly defaultOnVariation?: string;
  /**
  * Identifier of the Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#identifier PlatformFeatureFlag#identifier}
  */
  readonly identifier: string;
  /**
  * State of the flag in this environment. Possible values are 'on' and 'off'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#state PlatformFeatureFlag#state}
  */
  readonly state?: string;
  /**
  * add_target_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#add_target_rule PlatformFeatureFlag#add_target_rule}
  */
  readonly addTargetRule?: PlatformFeatureFlagEnvironmentAddTargetRule[] | cdktf.IResolvable;
}

export function platformFeatureFlagEnvironmentToTerraform(struct?: PlatformFeatureFlagEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_off_variation: cdktf.stringToTerraform(struct!.defaultOffVariation),
    default_on_variation: cdktf.stringToTerraform(struct!.defaultOnVariation),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    state: cdktf.stringToTerraform(struct!.state),
    add_target_rule: cdktf.listMapper(platformFeatureFlagEnvironmentAddTargetRuleToTerraform, true)(struct!.addTargetRule),
  }
}


export function platformFeatureFlagEnvironmentToHclTerraform(struct?: PlatformFeatureFlagEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_off_variation: {
      value: cdktf.stringToHclTerraform(struct!.defaultOffVariation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_on_variation: {
      value: cdktf.stringToHclTerraform(struct!.defaultOnVariation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_target_rule: {
      value: cdktf.listMapperHcl(platformFeatureFlagEnvironmentAddTargetRuleToHclTerraform, true)(struct!.addTargetRule),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformFeatureFlagEnvironmentAddTargetRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformFeatureFlagEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformFeatureFlagEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultOffVariation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOffVariation = this._defaultOffVariation;
    }
    if (this._defaultOnVariation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOnVariation = this._defaultOnVariation;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._addTargetRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addTargetRule = this._addTargetRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformFeatureFlagEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultOffVariation = undefined;
      this._defaultOnVariation = undefined;
      this._identifier = undefined;
      this._state = undefined;
      this._addTargetRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultOffVariation = value.defaultOffVariation;
      this._defaultOnVariation = value.defaultOnVariation;
      this._identifier = value.identifier;
      this._state = value.state;
      this._addTargetRule.internalValue = value.addTargetRule;
    }
  }

  // default_off_variation - computed: true, optional: true, required: false
  private _defaultOffVariation?: string; 
  public get defaultOffVariation() {
    return this.getStringAttribute('default_off_variation');
  }
  public set defaultOffVariation(value: string) {
    this._defaultOffVariation = value;
  }
  public resetDefaultOffVariation() {
    this._defaultOffVariation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOffVariationInput() {
    return this._defaultOffVariation;
  }

  // default_on_variation - computed: true, optional: true, required: false
  private _defaultOnVariation?: string; 
  public get defaultOnVariation() {
    return this.getStringAttribute('default_on_variation');
  }
  public set defaultOnVariation(value: string) {
    this._defaultOnVariation = value;
  }
  public resetDefaultOnVariation() {
    this._defaultOnVariation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOnVariationInput() {
    return this._defaultOnVariation;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // add_target_rule - computed: false, optional: true, required: false
  private _addTargetRule = new PlatformFeatureFlagEnvironmentAddTargetRuleList(this, "add_target_rule", false);
  public get addTargetRule() {
    return this._addTargetRule;
  }
  public putAddTargetRule(value: PlatformFeatureFlagEnvironmentAddTargetRule[] | cdktf.IResolvable) {
    this._addTargetRule.internalValue = value;
  }
  public resetAddTargetRule() {
    this._addTargetRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addTargetRuleInput() {
    return this._addTargetRule.internalValue;
  }
}

export class PlatformFeatureFlagEnvironmentList extends cdktf.ComplexList {
  public internalValue? : PlatformFeatureFlagEnvironment[] | cdktf.IResolvable

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
  public get(index: number): PlatformFeatureFlagEnvironmentOutputReference {
    return new PlatformFeatureFlagEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformFeatureFlagTags {
  /**
  * The identifier of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#identifier PlatformFeatureFlag#identifier}
  */
  readonly identifier: string;
}

export function platformFeatureFlagTagsToTerraform(struct?: PlatformFeatureFlagTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function platformFeatureFlagTagsToHclTerraform(struct?: PlatformFeatureFlagTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformFeatureFlagTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformFeatureFlagTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformFeatureFlagTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class PlatformFeatureFlagTagsList extends cdktf.ComplexList {
  public internalValue? : PlatformFeatureFlagTags[] | cdktf.IResolvable

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
  public get(index: number): PlatformFeatureFlagTagsOutputReference {
    return new PlatformFeatureFlagTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformFeatureFlagVariation {
  /**
  * The description of the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#description PlatformFeatureFlag#description}
  */
  readonly description: string;
  /**
  * The identifier of the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#identifier PlatformFeatureFlag#identifier}
  */
  readonly identifier: string;
  /**
  * The user friendly name of the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#name PlatformFeatureFlag#name}
  */
  readonly name: string;
  /**
  * The value of the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#value PlatformFeatureFlag#value}
  */
  readonly value: string;
}

export function platformFeatureFlagVariationToTerraform(struct?: PlatformFeatureFlagVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformFeatureFlagVariationToHclTerraform(struct?: PlatformFeatureFlagVariation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class PlatformFeatureFlagVariationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformFeatureFlagVariation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformFeatureFlagVariation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._identifier = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._identifier = value.identifier;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

export class PlatformFeatureFlagVariationList extends cdktf.ComplexList {
  public internalValue? : PlatformFeatureFlagVariation[] | cdktf.IResolvable

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
  public get(index: number): PlatformFeatureFlagVariationOutputReference {
    return new PlatformFeatureFlagVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag harness_platform_feature_flag}
*/
export class PlatformFeatureFlag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_feature_flag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformFeatureFlag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformFeatureFlag to import
  * @param importFromId The id of the existing PlatformFeatureFlag that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformFeatureFlag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_feature_flag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_feature_flag harness_platform_feature_flag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformFeatureFlagConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformFeatureFlagConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_feature_flag',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archived = config.archived;
    this._defaultOffVariation = config.defaultOffVariation;
    this._defaultOnVariation = config.defaultOnVariation;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._kind = config.kind;
    this._name = config.name;
    this._orgId = config.orgId;
    this._owner = config.owner;
    this._permanent = config.permanent;
    this._projectId = config.projectId;
    this._environment.internalValue = config.environment;
    this._tags.internalValue = config.tags;
    this._variation.internalValue = config.variation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // default_off_variation - computed: false, optional: false, required: true
  private _defaultOffVariation?: string; 
  public get defaultOffVariation() {
    return this.getStringAttribute('default_off_variation');
  }
  public set defaultOffVariation(value: string) {
    this._defaultOffVariation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOffVariationInput() {
    return this._defaultOffVariation;
  }

  // default_on_variation - computed: false, optional: false, required: true
  private _defaultOnVariation?: string; 
  public get defaultOnVariation() {
    return this.getStringAttribute('default_on_variation');
  }
  public set defaultOnVariation(value: string) {
    this._defaultOnVariation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOnVariationInput() {
    return this._defaultOnVariation;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // permanent - computed: false, optional: false, required: true
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
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

  // environment - computed: false, optional: true, required: false
  private _environment = new PlatformFeatureFlagEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: PlatformFeatureFlagEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new PlatformFeatureFlagTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: PlatformFeatureFlagTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // variation - computed: false, optional: false, required: true
  private _variation = new PlatformFeatureFlagVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: PlatformFeatureFlagVariation[] | cdktf.IResolvable) {
    this._variation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.booleanToTerraform(this._archived),
      default_off_variation: cdktf.stringToTerraform(this._defaultOffVariation),
      default_on_variation: cdktf.stringToTerraform(this._defaultOnVariation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      owner: cdktf.stringToTerraform(this._owner),
      permanent: cdktf.booleanToTerraform(this._permanent),
      project_id: cdktf.stringToTerraform(this._projectId),
      environment: cdktf.listMapper(platformFeatureFlagEnvironmentToTerraform, true)(this._environment.internalValue),
      tags: cdktf.listMapper(platformFeatureFlagTagsToTerraform, true)(this._tags.internalValue),
      variation: cdktf.listMapper(platformFeatureFlagVariationToTerraform, true)(this._variation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archived: {
        value: cdktf.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_off_variation: {
        value: cdktf.stringToHclTerraform(this._defaultOffVariation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_on_variation: {
        value: cdktf.stringToHclTerraform(this._defaultOnVariation),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanent: {
        value: cdktf.booleanToHclTerraform(this._permanent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.listMapperHcl(platformFeatureFlagEnvironmentToHclTerraform, true)(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformFeatureFlagEnvironmentList",
      },
      tags: {
        value: cdktf.listMapperHcl(platformFeatureFlagTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformFeatureFlagTagsList",
      },
      variation: {
        value: cdktf.listMapperHcl(platformFeatureFlagVariationToHclTerraform, true)(this._variation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformFeatureFlagVariationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
