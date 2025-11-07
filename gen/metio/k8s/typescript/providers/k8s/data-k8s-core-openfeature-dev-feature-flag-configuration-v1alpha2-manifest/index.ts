// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#metadata DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadata;
  /**
  * FeatureFlagConfigurationSpec defines the desired state of FeatureFlagConfiguration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#spec DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpec;
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#annotations DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#labels DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#namespace DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#default_variant DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#default_variant}
  */
  readonly defaultVariant: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#state DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#state}
  */
  readonly state: string;
  /**
  * Targeting is the json targeting rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#targeting DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#targeting}
  */
  readonly targeting?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#variants DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#variants}
  */
  readonly variants: { [key: string]: string };
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlagsToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_variant: cdktf.stringToTerraform(struct!.defaultVariant),
    state: cdktf.stringToTerraform(struct!.state),
    targeting: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.targeting),
    variants: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variants),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlagsToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_variant: {
      value: cdktf.stringToHclTerraform(struct!.defaultVariant),
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
    targeting: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.targeting),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    variants: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variants),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVariant = this._defaultVariant;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._targeting !== undefined) {
      hasAnyValues = true;
      internalValueResult.targeting = this._targeting;
    }
    if (this._variants !== undefined) {
      hasAnyValues = true;
      internalValueResult.variants = this._variants;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultVariant = undefined;
      this._state = undefined;
      this._targeting = undefined;
      this._variants = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultVariant = value.defaultVariant;
      this._state = value.state;
      this._targeting = value.targeting;
      this._variants = value.variants;
    }
  }

  // default_variant - computed: false, optional: false, required: true
  private _defaultVariant?: string; 
  public get defaultVariant() {
    return this.getStringAttribute('default_variant');
  }
  public set defaultVariant(value: string) {
    this._defaultVariant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVariantInput() {
    return this._defaultVariant;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // targeting - computed: false, optional: true, required: false
  private _targeting?: { [key: string]: string }; 
  public get targeting() {
    return this.getStringMapAttribute('targeting');
  }
  public set targeting(value: { [key: string]: string }) {
    this._targeting = value;
  }
  public resetTargeting() {
    this._targeting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetingInput() {
    return this._targeting;
  }

  // variants - computed: false, optional: false, required: true
  private _variants?: { [key: string]: string }; 
  public get variants() {
    return this.getStringMapAttribute('variants');
  }
  public set variants(value: { [key: string]: string }) {
    this._variants = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variantsInput() {
    return this._variants;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#dollarevaluators DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#dollarevaluators}
  */
  readonly dollarevaluators?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#flags DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#flags}
  */
  readonly flags: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlags;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dollarevaluators: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dollarevaluators),
    flags: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlagsToTerraform(struct!.flags),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dollarevaluators: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dollarevaluators),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    flags: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlagsToHclTerraform(struct!.flags),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlags",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dollarevaluators !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollarevaluators = this._dollarevaluators;
    }
    if (this._flags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dollarevaluators = undefined;
      this._flags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dollarevaluators = value.dollarevaluators;
      this._flags.internalValue = value.flags;
    }
  }

  // dollarevaluators - computed: false, optional: true, required: false
  private _dollarevaluators?: { [key: string]: string }; 
  public get dollarevaluators() {
    return this.getStringMapAttribute('dollarevaluators');
  }
  public set dollarevaluators(value: { [key: string]: string }) {
    this._dollarevaluators = value;
  }
  public resetDollarevaluators() {
    this._dollarevaluators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarevaluatorsInput() {
    return this._dollarevaluators;
  }

  // flags - computed: false, optional: false, required: true
  private _flags = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlagsOutputReference(this, "flags");
  public get flags() {
    return this._flags;
  }
  public putFlags(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecFlags) {
    this._flags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags.internalValue;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#key DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#optional DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#api_version DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#field_path DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRefToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRefToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#container_name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#divisor DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#resource DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRefToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#key DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#optional DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRefToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#config_map_key_ref DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#field_ref DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#resource_field_ref DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#secret_key_ref DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRef;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvs {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#value DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#value_from DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFrom;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvs | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsOutputReference {
    return new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#envs DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#envs}
  */
  readonly envs?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvs[] | cdktf.IResolvable;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envs: cdktf.listMapper(dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsToTerraform, false)(struct!.envs),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envs: {
      value: cdktf.listMapperHcl(dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsToHclTerraform, false)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envs.internalValue = value.envs;
    }
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#claims DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#claims}
  */
  readonly claims?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#limits DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#requests DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentials {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#api_version DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#field_path DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#kind DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#namespace DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#resource_version DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#uid DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentialsToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentialsToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProvider {
  /**
  * ObjectReference contains enough information to let you inspect or modify the referred object. --- New uses of this type are discouraged because of difficulty describing its usage when embedded in APIs. 1. Ignored fields. It includes many fields which are not generally honored. For instance, ResourceVersion and FieldPath are both very rarely valid in actual usage. 2. Invalid usage help. It is impossible to add specific help for individual usage. In most embedded usages, there are particular restrictions like, 'must refer only to types A and B' or 'UID not honored' or 'name must be restricted'. Those cannot be well described when embedded. 3. Inconsistent validation. Because the usages are different, the validation rules are different by usage, which makes it hard for users to predict what will happen. 4. The fields are both imprecise and overly precise. Kind is not a precise mapping to a URL. This can produce ambiguity during interpretation and require a REST mapping. In most cases, the dependency is on the group,resource tuple and the version of the actual struct is irrelevant. 5. We cannot easily change it. Because this type is embedded in many locations, updates to this type will affect numerous schemas. Don't make new APIs embed an underspecified API type they do not control. Instead of using this type, create a locally provided and used type that is well-focused on your reference. For example, ServiceReferences for admission registration: https://github.com/kubernetes/api/blob/release-1.17/admissionregistration/v1/types.go#L533 .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#credentials DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#credentials}
  */
  readonly credentials?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentialsToTerraform(struct!.credentials),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentials",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._name = value.name;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
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
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#bearer_token DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Target is the target url for flagd to poll
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#target DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#target}
  */
  readonly target: string;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfigurationToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfigurationToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearerToken = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearerToken = value.bearerToken;
      this._target = value.target;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProvider {
  /**
  * HttpSyncConfiguration defines the desired configuration for a http sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#http_sync_configuration DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#http_sync_configuration}
  */
  readonly httpSyncConfiguration?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#name DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_sync_configuration: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfigurationToTerraform(struct!.httpSyncConfiguration),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_sync_configuration: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfigurationToHclTerraform(struct!.httpSyncConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfiguration",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpSyncConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSyncConfiguration = this._httpSyncConfiguration?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpSyncConfiguration.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpSyncConfiguration.internalValue = value.httpSyncConfiguration;
      this._name = value.name;
    }
  }

  // http_sync_configuration - computed: false, optional: true, required: false
  private _httpSyncConfiguration = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfigurationOutputReference(this, "http_sync_configuration");
  public get httpSyncConfiguration() {
    return this._httpSyncConfiguration;
  }
  public putHttpSyncConfiguration(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderHttpSyncConfiguration) {
    this._httpSyncConfiguration.internalValue = value;
  }
  public resetHttpSyncConfiguration() {
    this._httpSyncConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSyncConfigurationInput() {
    return this._httpSyncConfiguration.internalValue;
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
}
export interface DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpec {
  /**
  * FeatureFlagSpec is the structured representation of the feature flag specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#feature_flag_spec DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#feature_flag_spec}
  */
  readonly featureFlagSpec?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpec;
  /**
  * FlagDSpec [DEPRECATED]: superseded by FlagSourceConfiguration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#flag_d_spec DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#flag_d_spec}
  */
  readonly flagDSpec?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpec;
  /**
  * Resources defines flagd sidecar resources. Default to operator sidecar-cpu-* and sidecar-ram-* flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#resources DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#resources}
  */
  readonly resources?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResources;
  /**
  * ServiceProvider [DEPRECATED]: superseded by FlagSourceConfiguration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#service_provider DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#service_provider}
  */
  readonly serviceProvider?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProvider;
  /**
  * SyncProvider [DEPRECATED]: superseded by FlagSourceConfiguration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#sync_provider DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest#sync_provider}
  */
  readonly syncProvider?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProvider;
}

export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecToTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_flag_spec: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecToTerraform(struct!.featureFlagSpec),
    flag_d_spec: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecToTerraform(struct!.flagDSpec),
    resources: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesToTerraform(struct!.resources),
    service_provider: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderToTerraform(struct!.serviceProvider),
    sync_provider: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderToTerraform(struct!.syncProvider),
  }
}


export function dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_flag_spec: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecToHclTerraform(struct!.featureFlagSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpec",
    },
    flag_d_spec: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecToHclTerraform(struct!.flagDSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpec",
    },
    resources: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResources",
    },
    service_provider: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderToHclTerraform(struct!.serviceProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProvider",
    },
    sync_provider: {
      value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderToHclTerraform(struct!.syncProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureFlagSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureFlagSpec = this._featureFlagSpec?.internalValue;
    }
    if (this._flagDSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flagDSpec = this._flagDSpec?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serviceProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProvider = this._serviceProvider?.internalValue;
    }
    if (this._syncProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncProvider = this._syncProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureFlagSpec.internalValue = undefined;
      this._flagDSpec.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._serviceProvider.internalValue = undefined;
      this._syncProvider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureFlagSpec.internalValue = value.featureFlagSpec;
      this._flagDSpec.internalValue = value.flagDSpec;
      this._resources.internalValue = value.resources;
      this._serviceProvider.internalValue = value.serviceProvider;
      this._syncProvider.internalValue = value.syncProvider;
    }
  }

  // feature_flag_spec - computed: false, optional: true, required: false
  private _featureFlagSpec = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpecOutputReference(this, "feature_flag_spec");
  public get featureFlagSpec() {
    return this._featureFlagSpec;
  }
  public putFeatureFlagSpec(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFeatureFlagSpec) {
    this._featureFlagSpec.internalValue = value;
  }
  public resetFeatureFlagSpec() {
    this._featureFlagSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagSpecInput() {
    return this._featureFlagSpec.internalValue;
  }

  // flag_d_spec - computed: false, optional: true, required: false
  private _flagDSpec = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpecOutputReference(this, "flag_d_spec");
  public get flagDSpec() {
    return this._flagDSpec;
  }
  public putFlagDSpec(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecFlagDSpec) {
    this._flagDSpec.internalValue = value;
  }
  public resetFlagDSpec() {
    this._flagDSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagDSpecInput() {
    return this._flagDSpec.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // service_provider - computed: false, optional: true, required: false
  private _serviceProvider = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProviderOutputReference(this, "service_provider");
  public get serviceProvider() {
    return this._serviceProvider;
  }
  public putServiceProvider(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecServiceProvider) {
    this._serviceProvider.internalValue = value;
  }
  public resetServiceProvider() {
    this._serviceProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider.internalValue;
  }

  // sync_provider - computed: false, optional: true, required: false
  private _syncProvider = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProviderOutputReference(this, "sync_provider");
  public get syncProvider() {
    return this._syncProvider;
  }
  public putSyncProvider(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecSyncProvider) {
    this._syncProvider.internalValue = value;
  }
  public resetSyncProvider() {
    this._syncProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncProviderInput() {
    return this._syncProvider.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest k8s_core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest}
*/
export class DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest k8s_core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_core_openfeature_dev_feature_flag_configuration_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreOpenfeatureDevFeatureFlagConfigurationV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
