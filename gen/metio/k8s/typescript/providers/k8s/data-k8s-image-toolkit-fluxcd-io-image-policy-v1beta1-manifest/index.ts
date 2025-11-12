// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#metadata DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadata;
  /**
  * ImagePolicySpec defines the parameters for calculating the ImagePolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#spec DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpec;
}
export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#annotations DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#labels DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#name DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#namespace DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadataToTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTags {
  /**
  * Extract allows a capture group to be extracted from the specified regular expression pattern, useful before tag evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#extract DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#extract}
  */
  readonly extract?: string;
  /**
  * Pattern specifies a regular expression pattern used to filter for image tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#pattern DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTagsToTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract: cdktf.stringToTerraform(struct!.extract),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTagsToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extract: {
      value: cdktf.stringToHclTerraform(struct!.extract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extract !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extract = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extract = value.extract;
      this._pattern = value.pattern;
    }
  }

  // extract - computed: false, optional: true, required: false
  private _extract?: string; 
  public get extract() {
    return this.getStringAttribute('extract');
  }
  public set extract(value: string) {
    this._extract = value;
  }
  public resetExtract() {
    this._extract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#name DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, when not specified it acts as LocalObjectReference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#namespace DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRefToTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRefToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRef | cdktf.IResolvable): any {
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

export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabetical {
  /**
  * Order specifies the sorting order of the tags. Given the letters of the alphabet as tags, ascending order would select Z, and descending order would select A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#order DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#order}
  */
  readonly order?: string;
}

export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabeticalToTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabetical | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.stringToTerraform(struct!.order),
  }
}


export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabeticalToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabetical | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabeticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabetical | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabetical | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
    }
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
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
export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumerical {
  /**
  * Order specifies the sorting order of the tags. Given the integer values from 0 to 9 as tags, ascending order would select 9, and descending order would select 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#order DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#order}
  */
  readonly order?: string;
}

export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumericalToTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumerical | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.stringToTerraform(struct!.order),
  }
}


export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumericalToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumerical | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumericalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumerical | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumerical | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
    }
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
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
export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemver {
  /**
  * Range gives a semver range for the image tag; the highest version within the range that's a tag yields the latest image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#range DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#range}
  */
  readonly range: string;
}

export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemverToTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemverToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // range - computed: false, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}
export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicy {
  /**
  * Alphabetical set of rules to use for alphabetical ordering of the tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#alphabetical DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#alphabetical}
  */
  readonly alphabetical?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabetical;
  /**
  * Numerical set of rules to use for numerical ordering of the tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#numerical DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#numerical}
  */
  readonly numerical?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumerical;
  /**
  * SemVer gives a semantic version range to check against the tags available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#semver DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#semver}
  */
  readonly semver?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemver;
}

export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyToTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alphabetical: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabeticalToTerraform(struct!.alphabetical),
    numerical: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumericalToTerraform(struct!.numerical),
    semver: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemverToTerraform(struct!.semver),
  }
}


export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alphabetical: {
      value: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabeticalToHclTerraform(struct!.alphabetical),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabetical",
    },
    numerical: {
      value: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumericalToHclTerraform(struct!.numerical),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumerical",
    },
    semver: {
      value: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemverToHclTerraform(struct!.semver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemver",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alphabetical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alphabetical = this._alphabetical?.internalValue;
    }
    if (this._numerical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerical = this._numerical?.internalValue;
    }
    if (this._semver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semver = this._semver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alphabetical.internalValue = undefined;
      this._numerical.internalValue = undefined;
      this._semver.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alphabetical.internalValue = value.alphabetical;
      this._numerical.internalValue = value.numerical;
      this._semver.internalValue = value.semver;
    }
  }

  // alphabetical - computed: false, optional: true, required: false
  private _alphabetical = new DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabeticalOutputReference(this, "alphabetical");
  public get alphabetical() {
    return this._alphabetical;
  }
  public putAlphabetical(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyAlphabetical) {
    this._alphabetical.internalValue = value;
  }
  public resetAlphabetical() {
    this._alphabetical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alphabeticalInput() {
    return this._alphabetical.internalValue;
  }

  // numerical - computed: false, optional: true, required: false
  private _numerical = new DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumericalOutputReference(this, "numerical");
  public get numerical() {
    return this._numerical;
  }
  public putNumerical(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyNumerical) {
    this._numerical.internalValue = value;
  }
  public resetNumerical() {
    this._numerical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericalInput() {
    return this._numerical.internalValue;
  }

  // semver - computed: false, optional: true, required: false
  private _semver = new DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemverOutputReference(this, "semver");
  public get semver() {
    return this._semver;
  }
  public putSemver(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicySemver) {
    this._semver.internalValue = value;
  }
  public resetSemver() {
    this._semver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semverInput() {
    return this._semver.internalValue;
  }
}
export interface DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpec {
  /**
  * FilterTags enables filtering for only a subset of tags based on a set of rules. If no rules are provided, all the tags from the repository will be ordered and compared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#filter_tags DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#filter_tags}
  */
  readonly filterTags?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTags;
  /**
  * ImageRepositoryRef points at the object specifying the image being scanned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#image_repository_ref DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#image_repository_ref}
  */
  readonly imageRepositoryRef: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRef;
  /**
  * Policy gives the particulars of the policy to be followed in selecting the most recent image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#policy DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest#policy}
  */
  readonly policy: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicy;
}

export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecToTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_tags: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTagsToTerraform(struct!.filterTags),
    image_repository_ref: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRefToTerraform(struct!.imageRepositoryRef),
    policy: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyToTerraform(struct!.policy),
  }
}


export function dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_tags: {
      value: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTagsToHclTerraform(struct!.filterTags),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTags",
    },
    image_repository_ref: {
      value: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRefToHclTerraform(struct!.imageRepositoryRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRef",
    },
    policy: {
      value: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterTags = this._filterTags?.internalValue;
    }
    if (this._imageRepositoryRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepositoryRef = this._imageRepositoryRef?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterTags.internalValue = undefined;
      this._imageRepositoryRef.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterTags.internalValue = value.filterTags;
      this._imageRepositoryRef.internalValue = value.imageRepositoryRef;
      this._policy.internalValue = value.policy;
    }
  }

  // filter_tags - computed: false, optional: true, required: false
  private _filterTags = new DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTagsOutputReference(this, "filter_tags");
  public get filterTags() {
    return this._filterTags;
  }
  public putFilterTags(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecFilterTags) {
    this._filterTags.internalValue = value;
  }
  public resetFilterTags() {
    this._filterTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTagsInput() {
    return this._filterTags.internalValue;
  }

  // image_repository_ref - computed: false, optional: false, required: true
  private _imageRepositoryRef = new DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRefOutputReference(this, "image_repository_ref");
  public get imageRepositoryRef() {
    return this._imageRepositoryRef;
  }
  public putImageRepositoryRef(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecImageRepositoryRef) {
    this._imageRepositoryRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepositoryRefInput() {
    return this._imageRepositoryRef.internalValue;
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecPolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest k8s_image_toolkit_fluxcd_io_image_policy_v1beta1_manifest}
*/
export class DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_image_toolkit_fluxcd_io_image_policy_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_image_toolkit_fluxcd_io_image_policy_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_policy_v1beta1_manifest k8s_image_toolkit_fluxcd_io_image_policy_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_image_toolkit_fluxcd_io_image_policy_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpec) {
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
      metadata: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImageToolkitFluxcdIoImagePolicyV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
