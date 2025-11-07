// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureFlagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether the flag is archived or not. Note that you cannot create a new flag that is archived, but can update a flag to be archived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#archived FeatureFlag#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * The feature flag's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#description FeatureFlag#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#id FeatureFlag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id. This value gets its default from your project configuration if not set. `include_in_snippet` is now deprecated. Please migrate to `client_side_availability.using_environment_id` to maintain future compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#include_in_snippet FeatureFlag#include_in_snippet}
  */
  readonly includeInSnippet?: boolean | cdktf.IResolvable;
  /**
  * The unique feature flag key that references the flag in your application code. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#key FeatureFlag#key}
  */
  readonly key: string;
  /**
  * The feature flag maintainer's 24 character alphanumeric team member ID. `maintainer_team_key` cannot be set if `maintainer_id` is set. If neither is set, it will automatically be or stay set to the member ID associated with the API key used by your LaunchDarkly Terraform provider or the most recently-set maintainer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#maintainer_id FeatureFlag#maintainer_id}
  */
  readonly maintainerId?: string;
  /**
  * The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#maintainer_team_key FeatureFlag#maintainer_team_key}
  */
  readonly maintainerTeamKey?: string;
  /**
  * The human-readable name of the feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#name FeatureFlag#name}
  */
  readonly name: string;
  /**
  * The feature flag's project key. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#project_key FeatureFlag#project_key}
  */
  readonly projectKey: string;
  /**
  * Tags associated with your resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#tags FeatureFlag#tags}
  */
  readonly tags?: string[];
  /**
  * Specifies whether the flag is a temporary flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#temporary FeatureFlag#temporary}
  */
  readonly temporary?: boolean | cdktf.IResolvable;
  /**
  * The feature flag's variation type: `boolean`, `string`, `number` or `json`. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#variation_type FeatureFlag#variation_type}
  */
  readonly variationType: string;
  /**
  * client_side_availability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#client_side_availability FeatureFlag#client_side_availability}
  */
  readonly clientSideAvailability?: FeatureFlagClientSideAvailability[] | cdktf.IResolvable;
  /**
  * custom_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#custom_properties FeatureFlag#custom_properties}
  */
  readonly customProperties?: FeatureFlagCustomProperties[] | cdktf.IResolvable;
  /**
  * defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#defaults FeatureFlag#defaults}
  */
  readonly defaults?: FeatureFlagDefaults;
  /**
  * variations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#variations FeatureFlag#variations}
  */
  readonly variations?: FeatureFlagVariations[] | cdktf.IResolvable;
}
export interface FeatureFlagClientSideAvailability {
  /**
  * Whether this flag is available to SDKs using the client-side ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#using_environment_id FeatureFlag#using_environment_id}
  */
  readonly usingEnvironmentId?: boolean | cdktf.IResolvable;
  /**
  * Whether this flag is available to SDKs using a mobile key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#using_mobile_key FeatureFlag#using_mobile_key}
  */
  readonly usingMobileKey?: boolean | cdktf.IResolvable;
}

export function featureFlagClientSideAvailabilityToTerraform(struct?: FeatureFlagClientSideAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    using_environment_id: cdktf.booleanToTerraform(struct!.usingEnvironmentId),
    using_mobile_key: cdktf.booleanToTerraform(struct!.usingMobileKey),
  }
}


export function featureFlagClientSideAvailabilityToHclTerraform(struct?: FeatureFlagClientSideAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    using_environment_id: {
      value: cdktf.booleanToHclTerraform(struct!.usingEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    using_mobile_key: {
      value: cdktf.booleanToHclTerraform(struct!.usingMobileKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagClientSideAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureFlagClientSideAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usingEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingEnvironmentId = this._usingEnvironmentId;
    }
    if (this._usingMobileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingMobileKey = this._usingMobileKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureFlagClientSideAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._usingEnvironmentId = undefined;
      this._usingMobileKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._usingEnvironmentId = value.usingEnvironmentId;
      this._usingMobileKey = value.usingMobileKey;
    }
  }

  // using_environment_id - computed: true, optional: true, required: false
  private _usingEnvironmentId?: boolean | cdktf.IResolvable; 
  public get usingEnvironmentId() {
    return this.getBooleanAttribute('using_environment_id');
  }
  public set usingEnvironmentId(value: boolean | cdktf.IResolvable) {
    this._usingEnvironmentId = value;
  }
  public resetUsingEnvironmentId() {
    this._usingEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingEnvironmentIdInput() {
    return this._usingEnvironmentId;
  }

  // using_mobile_key - computed: false, optional: true, required: false
  private _usingMobileKey?: boolean | cdktf.IResolvable; 
  public get usingMobileKey() {
    return this.getBooleanAttribute('using_mobile_key');
  }
  public set usingMobileKey(value: boolean | cdktf.IResolvable) {
    this._usingMobileKey = value;
  }
  public resetUsingMobileKey() {
    this._usingMobileKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingMobileKeyInput() {
    return this._usingMobileKey;
  }
}

export class FeatureFlagClientSideAvailabilityList extends cdktf.ComplexList {
  public internalValue? : FeatureFlagClientSideAvailability[] | cdktf.IResolvable

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
  public get(index: number): FeatureFlagClientSideAvailabilityOutputReference {
    return new FeatureFlagClientSideAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureFlagCustomProperties {
  /**
  * The unique custom property key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#key FeatureFlag#key}
  */
  readonly key: string;
  /**
  * The name of the custom property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#name FeatureFlag#name}
  */
  readonly name: string;
  /**
  * The list of custom property value strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#value FeatureFlag#value}
  */
  readonly value: string[];
}

export function featureFlagCustomPropertiesToTerraform(struct?: FeatureFlagCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function featureFlagCustomPropertiesToHclTerraform(struct?: FeatureFlagCustomProperties | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureFlagCustomProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: FeatureFlagCustomProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
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
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FeatureFlagCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : FeatureFlagCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): FeatureFlagCustomPropertiesOutputReference {
    return new FeatureFlagCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureFlagDefaults {
  /**
  * The index of the variation the flag will default to in all new environments when off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#off_variation FeatureFlag#off_variation}
  */
  readonly offVariation: number;
  /**
  * The index of the variation the flag will default to in all new environments when on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#on_variation FeatureFlag#on_variation}
  */
  readonly onVariation: number;
}

export function featureFlagDefaultsToTerraform(struct?: FeatureFlagDefaultsOutputReference | FeatureFlagDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    off_variation: cdktf.numberToTerraform(struct!.offVariation),
    on_variation: cdktf.numberToTerraform(struct!.onVariation),
  }
}


export function featureFlagDefaultsToHclTerraform(struct?: FeatureFlagDefaultsOutputReference | FeatureFlagDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    off_variation: {
      value: cdktf.numberToHclTerraform(struct!.offVariation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_variation: {
      value: cdktf.numberToHclTerraform(struct!.onVariation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FeatureFlagDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offVariation !== undefined) {
      hasAnyValues = true;
      internalValueResult.offVariation = this._offVariation;
    }
    if (this._onVariation !== undefined) {
      hasAnyValues = true;
      internalValueResult.onVariation = this._onVariation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureFlagDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offVariation = undefined;
      this._onVariation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offVariation = value.offVariation;
      this._onVariation = value.onVariation;
    }
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

  // on_variation - computed: false, optional: false, required: true
  private _onVariation?: number; 
  public get onVariation() {
    return this.getNumberAttribute('on_variation');
  }
  public set onVariation(value: number) {
    this._onVariation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onVariationInput() {
    return this._onVariation;
  }
}
export interface FeatureFlagVariations {
  /**
  * The variation's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#description FeatureFlag#description}
  */
  readonly description?: string;
  /**
  * The name of the variation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#name FeatureFlag#name}
  */
  readonly name?: string;
  /**
  * The variation value. The value's type must correspond to the `variation_type` argument. For example: `variation_type = "boolean"` accepts only `true` or `false`. The `number` variation type accepts both floats and ints, but please note that any trailing zeroes on floats will be trimmed (i.e. `1.1` and `1.100` will both be converted to `1.1`).
  * 
  * If you wish to define an empty string variation, you must still define the value field on the variations block like so:
  * 
  * ```terraform
  * variations {
  *   value = ""
  * }
  * ```
  * 
  * -> **Note:** Terraform manages `variations` as an ordered array and identifies them by index. This means that if you change the order of your `variations` block, you may end up destroying and recreating those variations. Additionally, if you delete variations that have targets that have been attached outside of Terraform, those targets may be incorrectly reassigned to a different variation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#value FeatureFlag#value}
  */
  readonly value: string;
}

export function featureFlagVariationsToTerraform(struct?: FeatureFlagVariations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function featureFlagVariationsToHclTerraform(struct?: FeatureFlagVariations | cdktf.IResolvable): any {
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

export class FeatureFlagVariationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureFlagVariations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
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

  public set internalValue(value: FeatureFlagVariations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

export class FeatureFlagVariationsList extends cdktf.ComplexList {
  public internalValue? : FeatureFlagVariations[] | cdktf.IResolvable

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
  public get(index: number): FeatureFlagVariationsOutputReference {
    return new FeatureFlagVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag launchdarkly_feature_flag}
*/
export class FeatureFlag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_feature_flag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureFlag to import
  * @param importFromId The id of the existing FeatureFlag that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureFlag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_feature_flag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag launchdarkly_feature_flag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureFlagConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureFlagConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_feature_flag',
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
    this._archived = config.archived;
    this._description = config.description;
    this._id = config.id;
    this._includeInSnippet = config.includeInSnippet;
    this._key = config.key;
    this._maintainerId = config.maintainerId;
    this._maintainerTeamKey = config.maintainerTeamKey;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._tags = config.tags;
    this._temporary = config.temporary;
    this._variationType = config.variationType;
    this._clientSideAvailability.internalValue = config.clientSideAvailability;
    this._customProperties.internalValue = config.customProperties;
    this._defaults.internalValue = config.defaults;
    this._variations.internalValue = config.variations;
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

  // include_in_snippet - computed: true, optional: true, required: false
  private _includeInSnippet?: boolean | cdktf.IResolvable; 
  public get includeInSnippet() {
    return this.getBooleanAttribute('include_in_snippet');
  }
  public set includeInSnippet(value: boolean | cdktf.IResolvable) {
    this._includeInSnippet = value;
  }
  public resetIncludeInSnippet() {
    this._includeInSnippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInSnippetInput() {
    return this._includeInSnippet;
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

  // maintainer_id - computed: true, optional: true, required: false
  private _maintainerId?: string; 
  public get maintainerId() {
    return this.getStringAttribute('maintainer_id');
  }
  public set maintainerId(value: string) {
    this._maintainerId = value;
  }
  public resetMaintainerId() {
    this._maintainerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainerIdInput() {
    return this._maintainerId;
  }

  // maintainer_team_key - computed: true, optional: true, required: false
  private _maintainerTeamKey?: string; 
  public get maintainerTeamKey() {
    return this.getStringAttribute('maintainer_team_key');
  }
  public set maintainerTeamKey(value: string) {
    this._maintainerTeamKey = value;
  }
  public resetMaintainerTeamKey() {
    this._maintainerTeamKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainerTeamKeyInput() {
    return this._maintainerTeamKey;
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

  // temporary - computed: false, optional: true, required: false
  private _temporary?: boolean | cdktf.IResolvable; 
  public get temporary() {
    return this.getBooleanAttribute('temporary');
  }
  public set temporary(value: boolean | cdktf.IResolvable) {
    this._temporary = value;
  }
  public resetTemporary() {
    this._temporary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryInput() {
    return this._temporary;
  }

  // variation_type - computed: false, optional: false, required: true
  private _variationType?: string; 
  public get variationType() {
    return this.getStringAttribute('variation_type');
  }
  public set variationType(value: string) {
    this._variationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationTypeInput() {
    return this._variationType;
  }

  // client_side_availability - computed: false, optional: true, required: false
  private _clientSideAvailability = new FeatureFlagClientSideAvailabilityList(this, "client_side_availability", false);
  public get clientSideAvailability() {
    return this._clientSideAvailability;
  }
  public putClientSideAvailability(value: FeatureFlagClientSideAvailability[] | cdktf.IResolvable) {
    this._clientSideAvailability.internalValue = value;
  }
  public resetClientSideAvailability() {
    this._clientSideAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideAvailabilityInput() {
    return this._clientSideAvailability.internalValue;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new FeatureFlagCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: FeatureFlagCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // defaults - computed: false, optional: true, required: false
  private _defaults = new FeatureFlagDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: FeatureFlagDefaults) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // variations - computed: false, optional: true, required: false
  private _variations = new FeatureFlagVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
  public putVariations(value: FeatureFlagVariations[] | cdktf.IResolvable) {
    this._variations.internalValue = value;
  }
  public resetVariations() {
    this._variations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationsInput() {
    return this._variations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.booleanToTerraform(this._archived),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      include_in_snippet: cdktf.booleanToTerraform(this._includeInSnippet),
      key: cdktf.stringToTerraform(this._key),
      maintainer_id: cdktf.stringToTerraform(this._maintainerId),
      maintainer_team_key: cdktf.stringToTerraform(this._maintainerTeamKey),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      temporary: cdktf.booleanToTerraform(this._temporary),
      variation_type: cdktf.stringToTerraform(this._variationType),
      client_side_availability: cdktf.listMapper(featureFlagClientSideAvailabilityToTerraform, true)(this._clientSideAvailability.internalValue),
      custom_properties: cdktf.listMapper(featureFlagCustomPropertiesToTerraform, true)(this._customProperties.internalValue),
      defaults: featureFlagDefaultsToTerraform(this._defaults.internalValue),
      variations: cdktf.listMapper(featureFlagVariationsToTerraform, true)(this._variations.internalValue),
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
      include_in_snippet: {
        value: cdktf.booleanToHclTerraform(this._includeInSnippet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintainer_id: {
        value: cdktf.stringToHclTerraform(this._maintainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintainer_team_key: {
        value: cdktf.stringToHclTerraform(this._maintainerTeamKey),
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
      temporary: {
        value: cdktf.booleanToHclTerraform(this._temporary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      variation_type: {
        value: cdktf.stringToHclTerraform(this._variationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_side_availability: {
        value: cdktf.listMapperHcl(featureFlagClientSideAvailabilityToHclTerraform, true)(this._clientSideAvailability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureFlagClientSideAvailabilityList",
      },
      custom_properties: {
        value: cdktf.listMapperHcl(featureFlagCustomPropertiesToHclTerraform, true)(this._customProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FeatureFlagCustomPropertiesList",
      },
      defaults: {
        value: featureFlagDefaultsToHclTerraform(this._defaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureFlagDefaultsList",
      },
      variations: {
        value: cdktf.listMapperHcl(featureFlagVariationsToHclTerraform, true)(this._variations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureFlagVariationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
