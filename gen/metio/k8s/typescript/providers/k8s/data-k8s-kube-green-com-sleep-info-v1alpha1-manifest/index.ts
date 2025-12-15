// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKubeGreenComSleepInfoV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#metadata DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadata;
  /**
  * SleepInfoSpec defines the desired state of SleepInfo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#spec DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpec;
}
export interface DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#annotations DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#labels DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#name DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#namespace DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRef {
  /**
  * ApiVersion of the kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#api_version DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the kubernetes resources of the specific version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#kind DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * MatchLabels which identify the kubernetes resource by labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#match_labels DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Name which identify the kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#name DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefToTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefToHclTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._matchLabels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._matchLabels = value.matchLabels;
      this._name = value.name;
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

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
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
}

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRef[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefOutputReference {
    return new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRef {
  /**
  * ApiVersion of the kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#api_version DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the kubernetes resources of the specific version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#kind DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * MatchLabels which identify the kubernetes resource by labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#match_labels DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Name which identify the kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#name DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefToTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefToHclTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._matchLabels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._matchLabels = value.matchLabels;
      this._name = value.name;
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

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
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
}

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRef[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefOutputReference {
    return new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTarget {
  /**
  * Group of the Kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#group DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind of the Kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#kind DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#kind}
  */
  readonly kind: string;
}

export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTargetToTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTargetToHclTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}
export interface DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatches {
  /**
  * Patch is the json6902 patch to apply to the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#patch DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#patch}
  */
  readonly patch: string;
  /**
  * Target is the target resource to patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#target DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#target}
  */
  readonly target: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTarget;
}

export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesToTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch: cdktf.stringToTerraform(struct!.patch),
    target: dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesToHclTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patch = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patch = value.patch;
      this._target.internalValue = value.target;
    }
  }

  // patch - computed: false, optional: false, required: true
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesOutputReference {
    return new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpec {
  /**
  * ExcludeRef define the resource to exclude from the sleep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#exclude_ref DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#exclude_ref}
  */
  readonly excludeRef?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRef[] | cdktf.IResolvable;
  /**
  * IncludeRef define the resource to include from the sleep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#include_ref DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#include_ref}
  */
  readonly includeRef?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRef[] | cdktf.IResolvable;
  /**
  * Patches is a list of json 6902 patches to apply to the target resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#patches DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#patches}
  */
  readonly patches?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatches[] | cdktf.IResolvable;
  /**
  * Hours:Minutes Accept cron schedule for both hour and minute. For example, *:* /2 is set to configure a run every even minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#sleep_at DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#sleep_at}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly sleepAt: string;
  /**
  * If SuspendCronjobs is set to true, on sleep the cronjobs of the namespace will be suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#suspend_cron_jobs DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#suspend_cron_jobs}
  */
  readonly suspendCronJobs?: boolean | cdktf.IResolvable;
  /**
  * If SuspendDeployments is set to false, on sleep the deployment of the namespace will not be suspended. By default Deployment will be suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#suspend_deployments DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#suspend_deployments}
  */
  readonly suspendDeployments?: boolean | cdktf.IResolvable;
  /**
  * If SuspendStatefulSets is set to false, on sleep the statefulset of the namespace will not be suspended. By default StatefulSet will be suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#suspend_statefulsets DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#suspend_statefulsets}
  */
  readonly suspendStatefulsets?: boolean | cdktf.IResolvable;
  /**
  * Time zone to set the schedule, in IANA time zone identifier. It is not required, default to UTC. For example, for the Italy time zone set Europe/Rome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#time_zone DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Hours:Minutes Accept cron schedule for both hour and minute. For example, *:* /2 is set to configure a run every even minute. It is not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#wake_up_at DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#wake_up_at}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly wakeUpAt?: string;
  /**
  * Weekdays are in cron notation. For example, to configure a schedule from monday to friday, set it to '1-5'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#weekdays DataK8SKubeGreenComSleepInfoV1Alpha1Manifest#weekdays}
  */
  readonly weekdays: string;
}

export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_ref: cdktf.listMapper(dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefToTerraform, false)(struct!.excludeRef),
    include_ref: cdktf.listMapper(dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefToTerraform, false)(struct!.includeRef),
    patches: cdktf.listMapper(dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesToTerraform, false)(struct!.patches),
    sleep_at: cdktf.stringToTerraform(struct!.sleepAt),
    suspend_cron_jobs: cdktf.booleanToTerraform(struct!.suspendCronJobs),
    suspend_deployments: cdktf.booleanToTerraform(struct!.suspendDeployments),
    suspend_statefulsets: cdktf.booleanToTerraform(struct!.suspendStatefulsets),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    wake_up_at: cdktf.stringToTerraform(struct!.wakeUpAt),
    weekdays: cdktf.stringToTerraform(struct!.weekdays),
  }
}


export function dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_ref: {
      value: cdktf.listMapperHcl(dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefToHclTerraform, false)(struct!.excludeRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefList",
    },
    include_ref: {
      value: cdktf.listMapperHcl(dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefToHclTerraform, false)(struct!.includeRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefList",
    },
    patches: {
      value: cdktf.listMapperHcl(dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesList",
    },
    sleep_at: {
      value: cdktf.stringToHclTerraform(struct!.sleepAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend_cron_jobs: {
      value: cdktf.booleanToHclTerraform(struct!.suspendCronJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspend_deployments: {
      value: cdktf.booleanToHclTerraform(struct!.suspendDeployments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspend_statefulsets: {
      value: cdktf.booleanToHclTerraform(struct!.suspendStatefulsets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wake_up_at: {
      value: cdktf.stringToHclTerraform(struct!.wakeUpAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.stringToHclTerraform(struct!.weekdays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRef = this._excludeRef?.internalValue;
    }
    if (this._includeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRef = this._includeRef?.internalValue;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._sleepAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.sleepAt = this._sleepAt;
    }
    if (this._suspendCronJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendCronJobs = this._suspendCronJobs;
    }
    if (this._suspendDeployments !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendDeployments = this._suspendDeployments;
    }
    if (this._suspendStatefulsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendStatefulsets = this._suspendStatefulsets;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._wakeUpAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.wakeUpAt = this._wakeUpAt;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeRef.internalValue = undefined;
      this._includeRef.internalValue = undefined;
      this._patches.internalValue = undefined;
      this._sleepAt = undefined;
      this._suspendCronJobs = undefined;
      this._suspendDeployments = undefined;
      this._suspendStatefulsets = undefined;
      this._timeZone = undefined;
      this._wakeUpAt = undefined;
      this._weekdays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeRef.internalValue = value.excludeRef;
      this._includeRef.internalValue = value.includeRef;
      this._patches.internalValue = value.patches;
      this._sleepAt = value.sleepAt;
      this._suspendCronJobs = value.suspendCronJobs;
      this._suspendDeployments = value.suspendDeployments;
      this._suspendStatefulsets = value.suspendStatefulsets;
      this._timeZone = value.timeZone;
      this._wakeUpAt = value.wakeUpAt;
      this._weekdays = value.weekdays;
    }
  }

  // exclude_ref - computed: false, optional: true, required: false
  private _excludeRef = new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRefList(this, "exclude_ref", false);
  public get excludeRef() {
    return this._excludeRef;
  }
  public putExcludeRef(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecExcludeRef[] | cdktf.IResolvable) {
    this._excludeRef.internalValue = value;
  }
  public resetExcludeRef() {
    this._excludeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRefInput() {
    return this._excludeRef.internalValue;
  }

  // include_ref - computed: false, optional: true, required: false
  private _includeRef = new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRefList(this, "include_ref", false);
  public get includeRef() {
    return this._includeRef;
  }
  public putIncludeRef(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecIncludeRef[] | cdktf.IResolvable) {
    this._includeRef.internalValue = value;
  }
  public resetIncludeRef() {
    this._includeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRefInput() {
    return this._includeRef.internalValue;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecPatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // sleep_at - computed: false, optional: false, required: true
  private _sleepAt?: string; 
  public get sleepAt() {
    return this.getStringAttribute('sleep_at');
  }
  public set sleepAt(value: string) {
    this._sleepAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepAtInput() {
    return this._sleepAt;
  }

  // suspend_cron_jobs - computed: false, optional: true, required: false
  private _suspendCronJobs?: boolean | cdktf.IResolvable; 
  public get suspendCronJobs() {
    return this.getBooleanAttribute('suspend_cron_jobs');
  }
  public set suspendCronJobs(value: boolean | cdktf.IResolvable) {
    this._suspendCronJobs = value;
  }
  public resetSuspendCronJobs() {
    this._suspendCronJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendCronJobsInput() {
    return this._suspendCronJobs;
  }

  // suspend_deployments - computed: false, optional: true, required: false
  private _suspendDeployments?: boolean | cdktf.IResolvable; 
  public get suspendDeployments() {
    return this.getBooleanAttribute('suspend_deployments');
  }
  public set suspendDeployments(value: boolean | cdktf.IResolvable) {
    this._suspendDeployments = value;
  }
  public resetSuspendDeployments() {
    this._suspendDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendDeploymentsInput() {
    return this._suspendDeployments;
  }

  // suspend_statefulsets - computed: false, optional: true, required: false
  private _suspendStatefulsets?: boolean | cdktf.IResolvable; 
  public get suspendStatefulsets() {
    return this.getBooleanAttribute('suspend_statefulsets');
  }
  public set suspendStatefulsets(value: boolean | cdktf.IResolvable) {
    this._suspendStatefulsets = value;
  }
  public resetSuspendStatefulsets() {
    this._suspendStatefulsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendStatefulsetsInput() {
    return this._suspendStatefulsets;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // wake_up_at - computed: false, optional: true, required: false
  private _wakeUpAt?: string; 
  public get wakeUpAt() {
    return this.getStringAttribute('wake_up_at');
  }
  public set wakeUpAt(value: string) {
    this._wakeUpAt = value;
  }
  public resetWakeUpAt() {
    this._wakeUpAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wakeUpAtInput() {
    return this._wakeUpAt;
  }

  // weekdays - computed: false, optional: false, required: true
  private _weekdays?: string; 
  public get weekdays() {
    return this.getStringAttribute('weekdays');
  }
  public set weekdays(value: string) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest k8s_kube_green_com_sleep_info_v1alpha1_manifest}
*/
export class DataK8SKubeGreenComSleepInfoV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kube_green_com_sleep_info_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKubeGreenComSleepInfoV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKubeGreenComSleepInfoV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKubeGreenComSleepInfoV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKubeGreenComSleepInfoV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kube_green_com_sleep_info_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kube_green_com_sleep_info_v1alpha1_manifest k8s_kube_green_com_sleep_info_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKubeGreenComSleepInfoV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kube_green_com_sleep_info_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeGreenComSleepInfoV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeGreenComSleepInfoV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
