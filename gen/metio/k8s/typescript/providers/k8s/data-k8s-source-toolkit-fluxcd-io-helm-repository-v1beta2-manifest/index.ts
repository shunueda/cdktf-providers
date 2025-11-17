// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#metadata DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadata;
  /**
  * HelmRepositorySpec specifies the required configuration to produce an Artifact for a Helm repository index YAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#spec DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpec;
}
export interface DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#annotations DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#labels DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#name DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#namespace DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadataToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors {
  /**
  * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#match_labels DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsOutputReference {
    return new DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFrom {
  /**
  * NamespaceSelectors is the list of namespace selectors to which this ACL applies. Items in this list are evaluated using a logical OR operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#namespace_selectors DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#namespace_selectors}
  */
  readonly namespaceSelectors: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable;
}

export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selectors: cdktf.listMapper(dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsToTerraform, false)(struct!.namespaceSelectors),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selectors: {
      value: cdktf.listMapperHcl(dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsToHclTerraform, false)(struct!.namespaceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFrom | cdktf.IResolvable | undefined) {
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
  private _namespaceSelectors = new DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectorsList(this, "namespace_selectors", false);
  public get namespaceSelectors() {
    return this._namespaceSelectors;
  }
  public putNamespaceSelectors(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable) {
    this._namespaceSelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorsInput() {
    return this._namespaceSelectors.internalValue;
  }
}
export interface DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#name DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#name DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpec {
  /**
  * AccessFrom specifies an Access Control List for allowing cross-namespace references to this object. NOTE: Not implemented, provisional as of https://github.com/fluxcd/flux2/pull/2092
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#access_from DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#access_from}
  */
  readonly accessFrom?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFrom;
  /**
  * CertSecretRef can be given the name of a Secret containing either or both of - a PEM-encoded client certificate ('tls.crt') and private key ('tls.key'); - a PEM-encoded CA certificate ('ca.crt') and whichever are supplied, will be used for connecting to the registry. The client cert and key are useful if you are authenticating with a certificate; the CA cert is useful if you are using a self-signed server certificate. The Secret must be of type 'Opaque' or 'kubernetes.io/tls'. It takes precedence over the values specified in the Secret referred to by '.spec.secretRef'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#cert_secret_ref DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRef;
  /**
  * Insecure allows connecting to a non-TLS HTTP container registry. This field is only taken into account if the .spec.type field is set to 'oci'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#insecure DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Interval at which the HelmRepository URL is checked for updates. This interval is approximate and may be subject to jitter to ensure efficient use of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#interval DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#interval}
  */
  readonly interval?: string;
  /**
  * PassCredentials allows the credentials from the SecretRef to be passed on to a host that does not match the host as defined in URL. This may be required if the host of the advertised chart URLs in the index differ from the defined URL. Enabling this should be done with caution, as it can potentially result in credentials getting stolen in a MITM-attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#pass_credentials DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Provider used for authentication, can be 'aws', 'azure', 'gcp' or 'generic'. This field is optional, and only taken into account if the .spec.type field is set to 'oci'. When not specified, defaults to 'generic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#provider DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#provider}
  */
  readonly provider?: string;
  /**
  * SecretRef specifies the Secret containing authentication credentials for the HelmRepository. For HTTP/S basic auth the secret must contain 'username' and 'password' fields. Support for TLS auth using the 'certFile' and 'keyFile', and/or 'caFile' keys is deprecated. Please use '.spec.certSecretRef' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#secret_ref DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRef;
  /**
  * Suspend tells the controller to suspend the reconciliation of this HelmRepository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#suspend DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Timeout is used for the index fetch operation for an HTTPS helm repository, and for remote OCI Repository operations like pulling for an OCI helm chart by the associated HelmChart. Its default value is 60s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#timeout DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Type of the HelmRepository. When this field is set to 'oci', the URL field value must be prefixed with 'oci://'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#type DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * URL of the Helm repository, a valid URL contains at least a protocol and host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#url DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest#url}
  */
  readonly url: string;
}

export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_from: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromToTerraform(struct!.accessFrom),
    cert_secret_ref: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRefToTerraform(struct!.certSecretRef),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    interval: cdktf.stringToTerraform(struct!.interval),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_ref: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRefToTerraform(struct!.secretRef),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_from: {
      value: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromToHclTerraform(struct!.accessFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFrom",
    },
    cert_secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRef",
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
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRef",
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = undefined;
      this._certSecretRef.internalValue = undefined;
      this._insecure = undefined;
      this._interval = undefined;
      this._passCredentials = undefined;
      this._provider = undefined;
      this._secretRef.internalValue = undefined;
      this._suspend = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._url = undefined;
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
      this._insecure = value.insecure;
      this._interval = value.interval;
      this._passCredentials = value.passCredentials;
      this._provider = value.provider;
      this._secretRef.internalValue = value.secretRef;
      this._suspend = value.suspend;
      this._timeout = value.timeout;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // access_from - computed: false, optional: true, required: false
  private _accessFrom = new DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFromOutputReference(this, "access_from");
  public get accessFrom() {
    return this._accessFrom;
  }
  public putAccessFrom(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecAccessFrom) {
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
  private _certSecretRef = new DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest k8s_source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest}
*/
export class DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest k8s_source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_source_toolkit_fluxcd_io_helm_repository_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpec) {
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
      metadata: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoHelmRepositoryV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
