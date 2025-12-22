// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#metadata DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#metadata}
  */
  readonly metadata: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadata;
  /**
  * GitRepositorySpec specifies the required configuration to produce an Artifact for a Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#spec DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#spec}
  */
  readonly spec?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpec;
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#annotations DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#labels DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#namespace DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadataToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadataToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepository {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepositoryToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepositoryToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepository | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepository | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepository | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecInclude {
  /**
  * FromPath specifies the path to copy contents from, defaults to the root of the Artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#from_path DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#from_path}
  */
  readonly fromPath?: string;
  /**
  * GitRepositoryRef specifies the GitRepository which Artifact contents must be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#repository DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#repository}
  */
  readonly repository: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepository;
  /**
  * ToPath specifies the path to copy contents to, defaults to the name of the GitRepositoryRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#to_path DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#to_path}
  */
  readonly toPath?: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_path: cdktf.stringToTerraform(struct!.fromPath),
    repository: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepositoryToTerraform(struct!.repository),
    to_path: cdktf.stringToTerraform(struct!.toPath),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecInclude | cdktf.IResolvable): any {
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
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepositoryToHclTerraform(struct!.repository),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepository",
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecInclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecInclude | cdktf.IResolvable | undefined) {
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
  private _repository = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeRepository) {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeList extends cdktf.ComplexList {
  public internalValue? : DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecInclude[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeOutputReference {
    return new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRef {
  /**
  * Branch to check out, defaults to 'master' if no other field is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#branch DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#branch}
  */
  readonly branch?: string;
  /**
  * Commit SHA to check out, takes precedence over all reference fields. This can be combined with Branch to shallow clone the branch, in which the commit is expected to exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#commit DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#commit}
  */
  readonly commit?: string;
  /**
  * Name of the reference to check out; takes precedence over Branch, Tag and SemVer. It must be a valid Git reference: https://git-scm.com/docs/git-check-ref-format#_description Examples: 'refs/heads/main', 'refs/tags/v0.1.0', 'refs/pull/420/head', 'refs/merge-requests/1/head'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#name}
  */
  readonly name?: string;
  /**
  * SemVer tag expression to check out, takes precedence over Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#semver DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#semver}
  */
  readonly semver?: string;
  /**
  * Tag to check out, takes precedence over Branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#tag DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    commit: cdktf.stringToTerraform(struct!.commit),
    name: cdktf.stringToTerraform(struct!.name),
    semver: cdktf.stringToTerraform(struct!.semver),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRef | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._commit = undefined;
      this._name = undefined;
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
      this._name = value.name;
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#name DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerify {
  /**
  * Mode specifies which Git object(s) should be verified. The variants 'head' and 'HEAD' both imply the same thing, i.e. verify the commit that the HEAD of the Git repository points to. The variant 'head' solely exists to ensure backwards compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#mode DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * SecretRef specifies the Secret containing the public keys of trusted Git authors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#secret_ref DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRef;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifyToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    secret_ref: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifyToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerify | cdktf.IResolvable): any {
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
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerify | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerify | cdktf.IResolvable | undefined) {
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifySecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpec {
  /**
  * Ignore overrides the set of excluded patterns in the .sourceignore format (which is the same as .gitignore). If not provided, a default will be used, consult the documentation for your version to find out what those are.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#ignore DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#ignore}
  */
  readonly ignore?: string;
  /**
  * Include specifies a list of GitRepository resources which Artifacts should be included in the Artifact produced for this GitRepository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#include DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#include}
  */
  readonly include?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecInclude[] | cdktf.IResolvable;
  /**
  * Interval at which the GitRepository URL is checked for updates. This interval is approximate and may be subject to jitter to ensure efficient use of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#interval DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#interval}
  */
  readonly interval: string;
  /**
  * Provider used for authentication, can be 'azure', 'generic'. When not specified, defaults to 'generic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#provider DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#provider}
  */
  readonly provider?: string;
  /**
  * ProxySecretRef specifies the Secret containing the proxy configuration to use while communicating with the Git server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#proxy_secret_ref DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#proxy_secret_ref}
  */
  readonly proxySecretRef?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRef;
  /**
  * RecurseSubmodules enables the initialization of all submodules within the GitRepository as cloned from the URL, using their default settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#recurse_submodules DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#recurse_submodules}
  */
  readonly recurseSubmodules?: boolean | cdktf.IResolvable;
  /**
  * Reference specifies the Git reference to resolve and monitor for changes, defaults to the 'master' branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#ref DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#ref}
  */
  readonly ref?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRef;
  /**
  * SecretRef specifies the Secret containing authentication credentials for the GitRepository. For HTTPS repositories the Secret must contain 'username' and 'password' fields for basic auth or 'bearerToken' field for token auth. For SSH repositories the Secret must contain 'identity' and 'known_hosts' fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#secret_ref DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRef;
  /**
  * Suspend tells the controller to suspend the reconciliation of this GitRepository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#suspend DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Timeout for Git operations like cloning, defaults to 60s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#timeout DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * URL specifies the Git repository URL, it can be an HTTP/S or SSH address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#url DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#url}
  */
  readonly url: string;
  /**
  * Verification specifies the configuration to verify the Git commit signature(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#verify DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest#verify}
  */
  readonly verify?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerify;
}

export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecToTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore: cdktf.stringToTerraform(struct!.ignore),
    include: cdktf.listMapper(dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeToTerraform, false)(struct!.include),
    interval: cdktf.stringToTerraform(struct!.interval),
    provider: cdktf.stringToTerraform(struct!.provider),
    proxy_secret_ref: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRefToTerraform(struct!.proxySecretRef),
    recurse_submodules: cdktf.booleanToTerraform(struct!.recurseSubmodules),
    ref: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRefToTerraform(struct!.ref),
    secret_ref: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRefToTerraform(struct!.secretRef),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
    verify: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifyToTerraform(struct!.verify),
  }
}


export function dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore: {
      value: cdktf.stringToHclTerraform(struct!.ignore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.listMapperHcl(dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeToHclTerraform, false)(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeList",
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
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRefToHclTerraform(struct!.proxySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRef",
    },
    recurse_submodules: {
      value: cdktf.booleanToHclTerraform(struct!.recurseSubmodules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref: {
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRef",
    },
    secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRef",
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
      value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifyToHclTerraform(struct!.verify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerify",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._proxySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySecretRef = this._proxySecretRef?.internalValue;
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignore = undefined;
      this._include.internalValue = undefined;
      this._interval = undefined;
      this._provider = undefined;
      this._proxySecretRef.internalValue = undefined;
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
      this._ignore = value.ignore;
      this._include.internalValue = value.include;
      this._interval = value.interval;
      this._provider = value.provider;
      this._proxySecretRef.internalValue = value.proxySecretRef;
      this._recurseSubmodules = value.recurseSubmodules;
      this._ref.internalValue = value.ref;
      this._secretRef.internalValue = value.secretRef;
      this._suspend = value.suspend;
      this._timeout = value.timeout;
      this._url = value.url;
      this._verify.internalValue = value.verify;
    }
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
  private _include = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecInclude[] | cdktf.IResolvable) {
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
  private _proxySecretRef = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRefOutputReference(this, "proxy_secret_ref");
  public get proxySecretRef() {
    return this._proxySecretRef;
  }
  public putProxySecretRef(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecProxySecretRef) {
    this._proxySecretRef.internalValue = value;
  }
  public resetProxySecretRef() {
    this._proxySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySecretRefInput() {
    return this._proxySecretRef.internalValue;
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
  private _ref = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecRef) {
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
  private _secretRef = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecSecretRef) {
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
  private _verify = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerifyOutputReference(this, "verify");
  public get verify() {
    return this._verify;
  }
  public putVerify(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecVerify) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest k8s_source_toolkit_fluxcd_io_git_repository_v1_manifest}
*/
export class DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_source_toolkit_fluxcd_io_git_repository_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest to import
  * @param importFromId The id of the existing DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSourceToolkitFluxcdIoGitRepositoryV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_source_toolkit_fluxcd_io_git_repository_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/source_toolkit_fluxcd_io_git_repository_v1_manifest k8s_source_toolkit_fluxcd_io_git_repository_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_source_toolkit_fluxcd_io_git_repository_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpec) {
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
      metadata: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoGitRepositoryV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
