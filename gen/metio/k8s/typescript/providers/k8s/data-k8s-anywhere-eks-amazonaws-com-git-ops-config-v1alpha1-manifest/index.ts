// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadata;
  /**
  * GitOps defines the configurations of GitOps Toolkit and Git repository it links to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithub {
  /**
  * Git branch. Defaults to main.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#branch DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#branch}
  */
  readonly branch?: string;
  /**
  * ClusterConfigPath relative to the repository root, when specified the cluster sync will be scoped to this path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#cluster_config_path DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#cluster_config_path}
  */
  readonly clusterConfigPath?: string;
  /**
  * FluxSystemNamespace scope for this operation. Defaults to flux-system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#flux_system_namespace DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#flux_system_namespace}
  */
  readonly fluxSystemNamespace?: string;
  /**
  * Owner is the user or organization name of the Git provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#owner DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#owner}
  */
  readonly owner: string;
  /**
  * if true, the owner is assumed to be a Git user; otherwise an org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#personal DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#personal}
  */
  readonly personal?: boolean | cdktf.IResolvable;
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#repository DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#repository}
  */
  readonly repository: string;
}

export function dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithubToTerraform(struct?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    cluster_config_path: cdktf.stringToTerraform(struct!.clusterConfigPath),
    flux_system_namespace: cdktf.stringToTerraform(struct!.fluxSystemNamespace),
    owner: cdktf.stringToTerraform(struct!.owner),
    personal: cdktf.booleanToTerraform(struct!.personal),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithubToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithub | cdktf.IResolvable): any {
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
    cluster_config_path: {
      value: cdktf.stringToHclTerraform(struct!.clusterConfigPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flux_system_namespace: {
      value: cdktf.stringToHclTerraform(struct!.fluxSystemNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    personal: {
      value: cdktf.booleanToHclTerraform(struct!.personal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._clusterConfigPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfigPath = this._clusterConfigPath;
    }
    if (this._fluxSystemNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluxSystemNamespace = this._fluxSystemNamespace;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._personal !== undefined) {
      hasAnyValues = true;
      internalValueResult.personal = this._personal;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._clusterConfigPath = undefined;
      this._fluxSystemNamespace = undefined;
      this._owner = undefined;
      this._personal = undefined;
      this._repository = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._clusterConfigPath = value.clusterConfigPath;
      this._fluxSystemNamespace = value.fluxSystemNamespace;
      this._owner = value.owner;
      this._personal = value.personal;
      this._repository = value.repository;
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

  // cluster_config_path - computed: false, optional: true, required: false
  private _clusterConfigPath?: string; 
  public get clusterConfigPath() {
    return this.getStringAttribute('cluster_config_path');
  }
  public set clusterConfigPath(value: string) {
    this._clusterConfigPath = value;
  }
  public resetClusterConfigPath() {
    this._clusterConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigPathInput() {
    return this._clusterConfigPath;
  }

  // flux_system_namespace - computed: false, optional: true, required: false
  private _fluxSystemNamespace?: string; 
  public get fluxSystemNamespace() {
    return this.getStringAttribute('flux_system_namespace');
  }
  public set fluxSystemNamespace(value: string) {
    this._fluxSystemNamespace = value;
  }
  public resetFluxSystemNamespace() {
    this._fluxSystemNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluxSystemNamespaceInput() {
    return this._fluxSystemNamespace;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // personal - computed: false, optional: true, required: false
  private _personal?: boolean | cdktf.IResolvable; 
  public get personal() {
    return this.getBooleanAttribute('personal');
  }
  public set personal(value: boolean | cdktf.IResolvable) {
    this._personal = value;
  }
  public resetPersonal() {
    this._personal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalInput() {
    return this._personal;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFlux {
  /**
  * github is the name of the Git Provider to host the Git repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#github DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#github}
  */
  readonly github?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithub;
}

export function dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxToTerraform(struct?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFlux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    github: dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithubToTerraform(struct!.github),
  }
}


export function dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFlux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    github: {
      value: dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFlux | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFlux | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._github.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._github.internalValue = value.github;
    }
  }

  // github - computed: false, optional: true, required: false
  private _github = new DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpec {
  /**
  * Flux defines the Git repository options for Flux v2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#flux DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest#flux}
  */
  readonly flux?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFlux;
}

export function dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flux: dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxToTerraform(struct!.flux),
  }
}


export function dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flux: {
      value: dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxToHclTerraform(struct!.flux),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFlux",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flux?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flux = this._flux?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flux.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flux.internalValue = value.flux;
    }
  }

  // flux - computed: false, optional: true, required: false
  private _flux = new DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFluxOutputReference(this, "flux");
  public get flux() {
    return this._flux;
  }
  public putFlux(value: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecFlux) {
    this._flux.internalValue = value;
  }
  public resetFlux() {
    this._flux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluxInput() {
    return this._flux.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_git_ops_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComGitOpsConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
