// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#metadata DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadata;
  /**
  * GitRepositorySpec defines the desired state of a Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#spec DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpec;
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#annotations DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#labels DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#namespace DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectors {
  /**
  * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#match_labels DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference {
    return new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFrom {
  /**
  * NamespaceSelectors is the list of namespace selectors to which this ACL applies. Items in this list are evaluated using a logical OR operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#namespace_selectors DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#namespace_selectors}
  */
  readonly namespaceSelectors: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selectors: cdktf.listMapper(dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsToTerraform, false)(struct!.namespaceSelectors),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selectors: {
      value: cdktf.listMapperHcl(dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsToHclTerraform, false)(struct!.namespaceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable | undefined) {
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
  private _namespaceSelectors = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectorsList(this, "namespace_selectors", false);
  public get namespaceSelectors() {
    return this._namespaceSelectors;
  }
  public putNamespaceSelectors(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable) {
    this._namespaceSelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorsInput() {
    return this._namespaceSelectors.internalValue;
  }
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepository {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepositoryToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepositoryToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepository | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepository | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepository | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecInclude {
  /**
  * The path to copy contents from, defaults to the root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#from_path DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#from_path}
  */
  readonly fromPath?: string;
  /**
  * Reference to a GitRepository to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#repository DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#repository}
  */
  readonly repository: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepository;
  /**
  * The path to copy contents to, defaults to the name of the source ref.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#to_path DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#to_path}
  */
  readonly toPath?: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_path: cdktf.stringToTerraform(struct!.fromPath),
    repository: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepositoryToTerraform(struct!.repository),
    to_path: cdktf.stringToTerraform(struct!.toPath),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_path: {
      value: cdktf.stringToHclTerraform(struct!.fromPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepositoryToHclTerraform(struct!.repository),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepository",
    },
    to_path: {
      value: cdktf.stringToHclTerraform(struct!.toPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPath = this._fromPath;
    }
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    if (this._toPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPath = this._toPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPath = undefined;
      this._repository.internalValue = undefined;
      this._toPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPath = value.fromPath;
      this._repository.internalValue = value.repository;
      this._toPath = value.toPath;
    }
  }

  // from_path - computed: false, optional: true, required: false
  private _fromPath?: string; 
  public get fromPath() {
    return this.getStringAttribute('from_path');
  }
  public set fromPath(value: string) {
    this._fromPath = value;
  }
  public resetFromPath() {
    this._fromPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPathInput() {
    return this._fromPath;
  }

  // repository - computed: false, optional: false, required: true
  private _repository = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeRepository) {
    this._repository.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }

  // to_path - computed: false, optional: true, required: false
  private _toPath?: string; 
  public get toPath() {
    return this.getStringAttribute('to_path');
  }
  public set toPath(value: string) {
    this._toPath = value;
  }
  public resetToPath() {
    this._toPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPathInput() {
    return this._toPath;
  }
}

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeList extends cdktf.ComplexList {
  public internalValue? : DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecInclude[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeOutputReference {
    return new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRef {
  /**
  * The Git branch to checkout, defaults to master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#branch DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#branch}
  */
  readonly branch?: string;
  /**
  * The Git commit SHA to checkout, if specified Tag filters will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#commit DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#commit}
  */
  readonly commit?: string;
  /**
  * The Git tag semver expression, takes precedence over Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#semver DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#semver}
  */
  readonly semver?: string;
  /**
  * The Git tag to checkout, takes precedence over Branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#tag DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    commit: cdktf.stringToTerraform(struct!.commit),
    semver: cdktf.stringToTerraform(struct!.semver),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    semver: {
      value: cdktf.stringToHclTerraform(struct!.semver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._semver !== undefined) {
      hasAnyValues = true;
      internalValueResult.semver = this._semver;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._commit = undefined;
      this._semver = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._commit = value.commit;
      this._semver = value.semver;
      this._tag = value.tag;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // semver - computed: false, optional: true, required: false
  private _semver?: string; 
  public get semver() {
    return this.getStringAttribute('semver');
  }
  public set semver(value: string) {
    this._semver = value;
  }
  public resetSemver() {
    this._semver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semverInput() {
    return this._semver;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerify {
  /**
  * Mode describes what git object should be verified, currently ('head').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#mode DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#mode}
  */
  readonly mode: string;
  /**
  * The secret name containing the public keys of all trusted Git authors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#secret_ref DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRef;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifyToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    secret_ref: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifyToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifySecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpec {
  /**
  * AccessFrom defines an Access Control List for allowing cross-namespace references to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#access_from DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#access_from}
  */
  readonly accessFrom?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFrom;
  /**
  * Determines which git client library to use. Defaults to go-git, valid values are ('go-git', 'libgit2').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#git_implementation DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#git_implementation}
  */
  readonly gitImplementation?: string;
  /**
  * Ignore overrides the set of excluded patterns in the .sourceignore format (which is the same as .gitignore). If not provided, a default will be used, consult the documentation for your version to find out what those are.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#ignore DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#ignore}
  */
  readonly ignore?: string;
  /**
  * Extra git repositories to map into the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#include DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#include}
  */
  readonly include?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecInclude[] | cdktf.IResolvable;
  /**
  * The interval at which to check for repository updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#interval DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#interval}
  */
  readonly interval: string;
  /**
  * When enabled, after the clone is created, initializes all submodules within, using their default settings. This option is available only when using the 'go-git' GitImplementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#recurse_submodules DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#recurse_submodules}
  */
  readonly recurseSubmodules?: boolean | cdktf.IResolvable;
  /**
  * The Git reference to checkout and monitor for changes, defaults to master branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#ref DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#ref}
  */
  readonly ref?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRef;
  /**
  * The secret name containing the Git credentials. For HTTPS repositories the secret must contain username and password fields. For SSH repositories the secret must contain identity and known_hosts fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#secret_ref DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRef;
  /**
  * This flag tells the controller to suspend the reconciliation of this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#suspend DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * The timeout for remote Git operations like cloning, defaults to 60s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#timeout DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * The repository URL, can be a HTTP/S or SSH address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#url DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#url}
  */
  readonly url: string;
  /**
  * Verify OpenPGP signature for the Git commit HEAD points to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#verify DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest#verify}
  */
  readonly verify?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerify;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_from: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromToTerraform(struct!.accessFrom),
    git_implementation: cdktf.stringToTerraform(struct!.gitImplementation),
    ignore: cdktf.stringToTerraform(struct!.ignore),
    include: cdktf.listMapper(dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeToTerraform, false)(struct!.include),
    interval: cdktf.stringToTerraform(struct!.interval),
    recurse_submodules: cdktf.booleanToTerraform(struct!.recurseSubmodules),
    ref: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRefToTerraform(struct!.ref),
    secret_ref: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRefToTerraform(struct!.secretRef),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
    verify: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifyToTerraform(struct!.verify),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_from: {
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromToHclTerraform(struct!.accessFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFrom",
    },
    git_implementation: {
      value: cdktf.stringToHclTerraform(struct!.gitImplementation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore: {
      value: cdktf.stringToHclTerraform(struct!.ignore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.listMapperHcl(dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeToHclTerraform, false)(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse_submodules: {
      value: cdktf.booleanToHclTerraform(struct!.recurseSubmodules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref: {
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRef",
    },
    secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRef",
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify: {
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifyToHclTerraform(struct!.verify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerify",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessFrom = this._accessFrom?.internalValue;
    }
    if (this._gitImplementation !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitImplementation = this._gitImplementation;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._recurseSubmodules !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurseSubmodules = this._recurseSubmodules;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
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
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._verify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = undefined;
      this._gitImplementation = undefined;
      this._ignore = undefined;
      this._include.internalValue = undefined;
      this._interval = undefined;
      this._recurseSubmodules = undefined;
      this._ref.internalValue = undefined;
      this._secretRef.internalValue = undefined;
      this._suspend = undefined;
      this._timeout = undefined;
      this._url = undefined;
      this._verify.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = value.accessFrom;
      this._gitImplementation = value.gitImplementation;
      this._ignore = value.ignore;
      this._include.internalValue = value.include;
      this._interval = value.interval;
      this._recurseSubmodules = value.recurseSubmodules;
      this._ref.internalValue = value.ref;
      this._secretRef.internalValue = value.secretRef;
      this._suspend = value.suspend;
      this._timeout = value.timeout;
      this._url = value.url;
      this._verify.internalValue = value.verify;
    }
  }

  // access_from - computed: false, optional: true, required: false
  private _accessFrom = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFromOutputReference(this, "access_from");
  public get accessFrom() {
    return this._accessFrom;
  }
  public putAccessFrom(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecAccessFrom) {
    this._accessFrom.internalValue = value;
  }
  public resetAccessFrom() {
    this._accessFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessFromInput() {
    return this._accessFrom.internalValue;
  }

  // git_implementation - computed: false, optional: true, required: false
  private _gitImplementation?: string; 
  public get gitImplementation() {
    return this.getStringAttribute('git_implementation');
  }
  public set gitImplementation(value: string) {
    this._gitImplementation = value;
  }
  public resetGitImplementation() {
    this._gitImplementation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitImplementationInput() {
    return this._gitImplementation;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string; 
  public get ignore() {
    return this.getStringAttribute('ignore');
  }
  public set ignore(value: string) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // include - computed: false, optional: true, required: false
  private _include = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecInclude[] | cdktf.IResolvable) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
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

  // recurse_submodules - computed: false, optional: true, required: false
  private _recurseSubmodules?: boolean | cdktf.IResolvable; 
  public get recurseSubmodules() {
    return this.getBooleanAttribute('recurse_submodules');
  }
  public set recurseSubmodules(value: boolean | cdktf.IResolvable) {
    this._recurseSubmodules = value;
  }
  public resetRecurseSubmodules() {
    this._recurseSubmodules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseSubmodulesInput() {
    return this._recurseSubmodules;
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecRef) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecSecretRef) {
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

  // verify - computed: false, optional: true, required: false
  private _verify = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerifyOutputReference(this, "verify");
  public get verify() {
    return this._verify;
  }
  public putVerify(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecVerify) {
    this._verify.internalValue = value;
  }
  public resetVerify() {
    this._verify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest k8s_source_toolkit_fluxcd_io_git_repository_v1beta1_manifest}
*/
export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_source_toolkit_fluxcd_io_git_repository_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_source_toolkit_fluxcd_io_git_repository_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1beta1_manifest k8s_source_toolkit_fluxcd_io_git_repository_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_source_toolkit_fluxcd_io_git_repository_v1beta1_manifest',
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
  private _metadata = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpec) {
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
      metadata: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
