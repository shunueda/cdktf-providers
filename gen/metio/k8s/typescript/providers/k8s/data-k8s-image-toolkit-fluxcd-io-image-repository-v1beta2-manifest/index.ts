// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#metadata DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadata;
  /**
  * ImageRepositorySpec defines the parameters for scanning an image repository, e.g., 'fluxcd/flux'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#spec DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpec;
}
export interface DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#annotations DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#labels DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#namespace DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadataToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors {
  /**
  * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#match_labels DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
    }
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
}

export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsOutputReference {
    return new DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFrom {
  /**
  * NamespaceSelectors is the list of namespace selectors to which this ACL applies. Items in this list are evaluated using a logical OR operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#namespace_selectors DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#namespace_selectors}
  */
  readonly namespaceSelectors: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable;
}

export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selectors: cdktf.listMapper(dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsToTerraform, false)(struct!.namespaceSelectors),
  }
}


export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selectors: {
      value: cdktf.listMapperHcl(dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsToHclTerraform, false)(struct!.namespaceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelectors = this._namespaceSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelectors.internalValue = value.namespaceSelectors;
    }
  }

  // namespace_selectors - computed: false, optional: false, required: true
  private _namespaceSelectors = new DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsList(this, "namespace_selectors", false);
  public get namespaceSelectors() {
    return this._namespaceSelectors;
  }
  public putNamespaceSelectors(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable) {
    this._namespaceSelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorsInput() {
    return this._namespaceSelectors.internalValue;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRefToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRefToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable): any {
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

export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRefToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRefToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRef | cdktf.IResolvable): any {
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

export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRefToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRefToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable): any {
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

export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpec {
  /**
  * AccessFrom defines an ACL for allowing cross-namespace references to the ImageRepository object based on the caller's namespace labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#access_from DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#access_from}
  */
  readonly accessFrom?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFrom;
  /**
  * CertSecretRef can be given the name of a Secret containing either or both of - a PEM-encoded client certificate ('tls.crt') and private key ('tls.key'); - a PEM-encoded CA certificate ('ca.crt') and whichever are supplied, will be used for connecting to the registry. The client cert and key are useful if you are authenticating with a certificate; the CA cert is useful if you are using a self-signed server certificate. The Secret must be of type 'Opaque' or 'kubernetes.io/tls'. Note: Support for the 'caFile', 'certFile' and 'keyFile' keys has been deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#cert_secret_ref DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRef;
  /**
  * ExclusionList is a list of regex strings used to exclude certain tags from being stored in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#exclusion_list DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#exclusion_list}
  */
  readonly exclusionList?: string[];
  /**
  * Image is the name of the image repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#image DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#image}
  */
  readonly image: string;
  /**
  * Insecure allows connecting to a non-TLS HTTP container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#insecure DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Interval is the length of time to wait between scans of the image repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#interval DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#interval}
  */
  readonly interval: string;
  /**
  * The provider used for authentication, can be 'aws', 'azure', 'gcp' or 'generic'. When not specified, defaults to 'generic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#provider DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#provider}
  */
  readonly provider?: string;
  /**
  * ProxySecretRef specifies the Secret containing the proxy configuration to use while communicating with the container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#proxy_secret_ref DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#proxy_secret_ref}
  */
  readonly proxySecretRef?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRef;
  /**
  * SecretRef can be given the name of a secret containing credentials to use for the image registry. The secret should be created with 'kubectl create secret docker-registry', or the equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#secret_ref DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRef;
  /**
  * ServiceAccountName is the name of the Kubernetes ServiceAccount used to authenticate the image pull if the service account has attached pull secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#service_account_name DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * This flag tells the controller to suspend subsequent image scans. It does not apply to already started scans. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#suspend DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Timeout for image scanning. Defaults to 'Interval' duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#timeout DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_from: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromToTerraform(struct!.accessFrom),
    cert_secret_ref: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRefToTerraform(struct!.certSecretRef),
    exclusion_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionList),
    image: cdktf.stringToTerraform(struct!.image),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    interval: cdktf.stringToTerraform(struct!.interval),
    provider: cdktf.stringToTerraform(struct!.provider),
    proxy_secret_ref: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRefToTerraform(struct!.proxySecretRef),
    secret_ref: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRefToTerraform(struct!.secretRef),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_from: {
      value: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromToHclTerraform(struct!.accessFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFrom",
    },
    cert_secret_ref: {
      value: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRef",
    },
    exclusion_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_secret_ref: {
      value: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRefToHclTerraform(struct!.proxySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRef",
    },
    secret_ref: {
      value: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRef",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessFrom = this._accessFrom?.internalValue;
    }
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    if (this._exclusionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionList = this._exclusionList;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._proxySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySecretRef = this._proxySecretRef?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = undefined;
      this._certSecretRef.internalValue = undefined;
      this._exclusionList = undefined;
      this._image = undefined;
      this._insecure = undefined;
      this._interval = undefined;
      this._provider = undefined;
      this._proxySecretRef.internalValue = undefined;
      this._secretRef.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._suspend = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = value.accessFrom;
      this._certSecretRef.internalValue = value.certSecretRef;
      this._exclusionList = value.exclusionList;
      this._image = value.image;
      this._insecure = value.insecure;
      this._interval = value.interval;
      this._provider = value.provider;
      this._proxySecretRef.internalValue = value.proxySecretRef;
      this._secretRef.internalValue = value.secretRef;
      this._serviceAccountName = value.serviceAccountName;
      this._suspend = value.suspend;
      this._timeout = value.timeout;
    }
  }

  // access_from - computed: false, optional: true, required: false
  private _accessFrom = new DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFromOutputReference(this, "access_from");
  public get accessFrom() {
    return this._accessFrom;
  }
  public putAccessFrom(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecAccessFrom) {
    this._accessFrom.internalValue = value;
  }
  public resetAccessFrom() {
    this._accessFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessFromInput() {
    return this._accessFrom.internalValue;
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
  }

  // exclusion_list - computed: false, optional: true, required: false
  private _exclusionList?: string[]; 
  public get exclusionList() {
    return this.getListAttribute('exclusion_list');
  }
  public set exclusionList(value: string[]) {
    this._exclusionList = value;
  }
  public resetExclusionList() {
    this._exclusionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionListInput() {
    return this._exclusionList;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // proxy_secret_ref - computed: false, optional: true, required: false
  private _proxySecretRef = new DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRefOutputReference(this, "proxy_secret_ref");
  public get proxySecretRef() {
    return this._proxySecretRef;
  }
  public putProxySecretRef(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecProxySecretRef) {
    this._proxySecretRef.internalValue = value;
  }
  public resetProxySecretRef() {
    this._proxySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySecretRefInput() {
    return this._proxySecretRef.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest k8s_image_toolkit_fluxcd_io_image_repository_v1beta2_manifest}
*/
export class DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_image_toolkit_fluxcd_io_image_repository_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_image_toolkit_fluxcd_io_image_repository_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/image_toolkit_fluxcd_io_image_repository_v1beta2_manifest k8s_image_toolkit_fluxcd_io_image_repository_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_image_toolkit_fluxcd_io_image_repository_v1beta2_manifest',
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
  private _metadata = new DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpec) {
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
      metadata: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImageToolkitFluxcdIoImageRepositoryV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
