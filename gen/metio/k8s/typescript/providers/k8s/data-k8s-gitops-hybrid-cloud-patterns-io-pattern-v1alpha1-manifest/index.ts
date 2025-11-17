// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#metadata DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadata;
  /**
  * PatternSpec defines the desired state of Pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#spec DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpec;
}
export interface DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#annotations DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#labels DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#name DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#namespace DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#name DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#value DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersToTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersToHclTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParameters | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParameters | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersOutputReference {
    return new DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpec {
  /**
  * Require manual intervention before Argo will sync new content. Default: False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#manual_sync DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#manual_sync}
  */
  readonly manualSync?: boolean | cdktf.IResolvable;
}

export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpecToTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_sync: cdktf.booleanToTerraform(struct!.manualSync),
  }
}


export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpecToHclTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_sync: {
      value: cdktf.booleanToHclTerraform(struct!.manualSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSync = this._manualSync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manualSync = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manualSync = value.manualSync;
    }
  }

  // manual_sync - computed: false, optional: true, required: false
  private _manualSync?: boolean | cdktf.IResolvable; 
  public get manualSync() {
    return this.getBooleanAttribute('manual_sync');
  }
  public set manualSync(value: boolean | cdktf.IResolvable) {
    this._manualSync = value;
  }
  public resetManualSync() {
    this._manualSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSyncInput() {
    return this._manualSync;
  }
}
export interface DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpec {
  /**
  * Optional. FQDN of the git server if automatic parsing from TargetRepo is broken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#hostname DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * (EXPERIMENTAL) Enable in-cluster git server (avoids the need of forking the upstream repository)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#in_cluster_git_server DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#in_cluster_git_server}
  */
  readonly inClusterGitServer?: boolean | cdktf.IResolvable;
  /**
  * Upstream git repo containing the pattern to deploy. Used when in-cluster fork to point to the upstream pattern repository. Takes precedence over TargetRepo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#origin_repo DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#origin_repo}
  */
  readonly originRepo?: string;
  /**
  * (DEPRECATED) Branch, tag or commit in the upstream git repository. Does not support short-sha's. Default to HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#origin_revision DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#origin_revision}
  */
  readonly originRevision?: string;
  /**
  * Interval in seconds to poll for drifts between origin and target repositories. Default: 180 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#poll_interval DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * Git repo containing the pattern to deploy. Must use https/http or, for ssh, git@server:foo/bar.git
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#target_repo DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#target_repo}
  */
  readonly targetRepo?: string;
  /**
  * Branch, tag, or commit to deploy. Does not support short-sha's. Default: HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#target_revision DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * Optional. K8s secret name where the info for connecting to git can be found. The supported secrets are modeled after the private repositories in argo (https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#repositories) currently ssh and username+password are supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#token_secret DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#token_secret}
  */
  readonly tokenSecret?: string;
  /**
  * Optional. K8s secret namespace where the token for connecting to git can be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#token_secret_namespace DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#token_secret_namespace}
  */
  readonly tokenSecretNamespace?: string;
}

export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpecToTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    in_cluster_git_server: cdktf.booleanToTerraform(struct!.inClusterGitServer),
    origin_repo: cdktf.stringToTerraform(struct!.originRepo),
    origin_revision: cdktf.stringToTerraform(struct!.originRevision),
    poll_interval: cdktf.numberToTerraform(struct!.pollInterval),
    target_repo: cdktf.stringToTerraform(struct!.targetRepo),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    token_secret: cdktf.stringToTerraform(struct!.tokenSecret),
    token_secret_namespace: cdktf.stringToTerraform(struct!.tokenSecretNamespace),
  }
}


export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpecToHclTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_cluster_git_server: {
      value: cdktf.booleanToHclTerraform(struct!.inClusterGitServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_repo: {
      value: cdktf.stringToHclTerraform(struct!.originRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_revision: {
      value: cdktf.stringToHclTerraform(struct!.originRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_repo: {
      value: cdktf.stringToHclTerraform(struct!.targetRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret_namespace: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._inClusterGitServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.inClusterGitServer = this._inClusterGitServer;
    }
    if (this._originRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRepo = this._originRepo;
    }
    if (this._originRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRevision = this._originRevision;
    }
    if (this._pollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval;
    }
    if (this._targetRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRepo = this._targetRepo;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    if (this._tokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecret = this._tokenSecret;
    }
    if (this._tokenSecretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretNamespace = this._tokenSecretNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._inClusterGitServer = undefined;
      this._originRepo = undefined;
      this._originRevision = undefined;
      this._pollInterval = undefined;
      this._targetRepo = undefined;
      this._targetRevision = undefined;
      this._tokenSecret = undefined;
      this._tokenSecretNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._inClusterGitServer = value.inClusterGitServer;
      this._originRepo = value.originRepo;
      this._originRevision = value.originRevision;
      this._pollInterval = value.pollInterval;
      this._targetRepo = value.targetRepo;
      this._targetRevision = value.targetRevision;
      this._tokenSecret = value.tokenSecret;
      this._tokenSecretNamespace = value.tokenSecretNamespace;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // in_cluster_git_server - computed: false, optional: true, required: false
  private _inClusterGitServer?: boolean | cdktf.IResolvable; 
  public get inClusterGitServer() {
    return this.getBooleanAttribute('in_cluster_git_server');
  }
  public set inClusterGitServer(value: boolean | cdktf.IResolvable) {
    this._inClusterGitServer = value;
  }
  public resetInClusterGitServer() {
    this._inClusterGitServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inClusterGitServerInput() {
    return this._inClusterGitServer;
  }

  // origin_repo - computed: false, optional: true, required: false
  private _originRepo?: string; 
  public get originRepo() {
    return this.getStringAttribute('origin_repo');
  }
  public set originRepo(value: string) {
    this._originRepo = value;
  }
  public resetOriginRepo() {
    this._originRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRepoInput() {
    return this._originRepo;
  }

  // origin_revision - computed: false, optional: true, required: false
  private _originRevision?: string; 
  public get originRevision() {
    return this.getStringAttribute('origin_revision');
  }
  public set originRevision(value: string) {
    this._originRevision = value;
  }
  public resetOriginRevision() {
    this._originRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRevisionInput() {
    return this._originRevision;
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: number; 
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }
  public set pollInterval(value: number) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // target_repo - computed: false, optional: true, required: false
  private _targetRepo?: string; 
  public get targetRepo() {
    return this.getStringAttribute('target_repo');
  }
  public set targetRepo(value: string) {
    this._targetRepo = value;
  }
  public resetTargetRepo() {
    this._targetRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRepoInput() {
    return this._targetRepo;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }

  // token_secret - computed: false, optional: true, required: false
  private _tokenSecret?: string; 
  public get tokenSecret() {
    return this.getStringAttribute('token_secret');
  }
  public set tokenSecret(value: string) {
    this._tokenSecret = value;
  }
  public resetTokenSecret() {
    this._tokenSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret;
  }

  // token_secret_namespace - computed: false, optional: true, required: false
  private _tokenSecretNamespace?: string; 
  public get tokenSecretNamespace() {
    return this.getStringAttribute('token_secret_namespace');
  }
  public set tokenSecretNamespace(value: string) {
    this._tokenSecretNamespace = value;
  }
  public resetTokenSecretNamespace() {
    this._tokenSecretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretNamespaceInput() {
    return this._tokenSecretNamespace;
  }
}
export interface DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfig {
  /**
  * The git reference when deploying the clustergroup helm chart directly from a git repo Defaults to 'main'. (Only used when developing the clustergroup helm chart)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#cluster_group_chart_git_revision DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#cluster_group_chart_git_revision}
  */
  readonly clusterGroupChartGitRevision?: string;
  /**
  * Which chart version for the clustergroup helm chart. Defaults to '0.8.*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#cluster_group_chart_version DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#cluster_group_chart_version}
  */
  readonly clusterGroupChartVersion?: string;
  /**
  * The url when deploying the clustergroup helm chart directly from a git repo Defaults to '' which means not used (Only used when developing the clustergroup helm chart)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#cluster_group_git_repo_url DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#cluster_group_git_repo_url}
  */
  readonly clusterGroupGitRepoUrl?: string;
  /**
  * (EXPERIMENTAL) Enable multi-source support when deploying the clustergroup argo application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#enabled DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The helm chart url to fetch the helm charts from in order to deploy the pattern. Defaults to https://charts.validatedpatterns.io/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#helm_repo_url DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#helm_repo_url}
  */
  readonly helmRepoUrl?: string;
}

export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfigToTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group_chart_git_revision: cdktf.stringToTerraform(struct!.clusterGroupChartGitRevision),
    cluster_group_chart_version: cdktf.stringToTerraform(struct!.clusterGroupChartVersion),
    cluster_group_git_repo_url: cdktf.stringToTerraform(struct!.clusterGroupGitRepoUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    helm_repo_url: cdktf.stringToTerraform(struct!.helmRepoUrl),
  }
}


export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfigToHclTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_group_chart_git_revision: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroupChartGitRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_group_chart_version: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroupChartVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_group_git_repo_url: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroupGitRepoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    helm_repo_url: {
      value: cdktf.stringToHclTerraform(struct!.helmRepoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroupChartGitRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroupChartGitRevision = this._clusterGroupChartGitRevision;
    }
    if (this._clusterGroupChartVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroupChartVersion = this._clusterGroupChartVersion;
    }
    if (this._clusterGroupGitRepoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroupGitRepoUrl = this._clusterGroupGitRepoUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._helmRepoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRepoUrl = this._helmRepoUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterGroupChartGitRevision = undefined;
      this._clusterGroupChartVersion = undefined;
      this._clusterGroupGitRepoUrl = undefined;
      this._enabled = undefined;
      this._helmRepoUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterGroupChartGitRevision = value.clusterGroupChartGitRevision;
      this._clusterGroupChartVersion = value.clusterGroupChartVersion;
      this._clusterGroupGitRepoUrl = value.clusterGroupGitRepoUrl;
      this._enabled = value.enabled;
      this._helmRepoUrl = value.helmRepoUrl;
    }
  }

  // cluster_group_chart_git_revision - computed: false, optional: true, required: false
  private _clusterGroupChartGitRevision?: string; 
  public get clusterGroupChartGitRevision() {
    return this.getStringAttribute('cluster_group_chart_git_revision');
  }
  public set clusterGroupChartGitRevision(value: string) {
    this._clusterGroupChartGitRevision = value;
  }
  public resetClusterGroupChartGitRevision() {
    this._clusterGroupChartGitRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupChartGitRevisionInput() {
    return this._clusterGroupChartGitRevision;
  }

  // cluster_group_chart_version - computed: false, optional: true, required: false
  private _clusterGroupChartVersion?: string; 
  public get clusterGroupChartVersion() {
    return this.getStringAttribute('cluster_group_chart_version');
  }
  public set clusterGroupChartVersion(value: string) {
    this._clusterGroupChartVersion = value;
  }
  public resetClusterGroupChartVersion() {
    this._clusterGroupChartVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupChartVersionInput() {
    return this._clusterGroupChartVersion;
  }

  // cluster_group_git_repo_url - computed: false, optional: true, required: false
  private _clusterGroupGitRepoUrl?: string; 
  public get clusterGroupGitRepoUrl() {
    return this.getStringAttribute('cluster_group_git_repo_url');
  }
  public set clusterGroupGitRepoUrl(value: string) {
    this._clusterGroupGitRepoUrl = value;
  }
  public resetClusterGroupGitRepoUrl() {
    this._clusterGroupGitRepoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupGitRepoUrlInput() {
    return this._clusterGroupGitRepoUrl;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // helm_repo_url - computed: false, optional: true, required: false
  private _helmRepoUrl?: string; 
  public get helmRepoUrl() {
    return this.getStringAttribute('helm_repo_url');
  }
  public set helmRepoUrl(value: string) {
    this._helmRepoUrl = value;
  }
  public resetHelmRepoUrl() {
    this._helmRepoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRepoUrlInput() {
    return this._helmRepoUrl;
  }
}
export interface DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpec {
  /**
  * Analytics UUID. Leave empty to autogenerate a random one. Not PII information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#analytics_uuid DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#analytics_uuid}
  */
  readonly analyticsUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#cluster_group_name DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#cluster_group_name}
  */
  readonly clusterGroupName: string;
  /**
  * Comma separated capabilities to enable certain experimental features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#experimental_capabilities DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#experimental_capabilities}
  */
  readonly experimentalCapabilities?: string;
  /**
  * .Name is dot separated per the helm --set syntax, such as: global.something.field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#extra_parameters DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#extra_parameters}
  */
  readonly extraParameters?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParameters[] | cdktf.IResolvable;
  /**
  * URLs to additional Helm parameter files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#extra_value_files DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#extra_value_files}
  */
  readonly extraValueFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#git_ops_spec DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#git_ops_spec}
  */
  readonly gitOpsSpec?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#git_spec DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#git_spec}
  */
  readonly gitSpec: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#multi_source_config DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest#multi_source_config}
  */
  readonly multiSourceConfig?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfig;
}

export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecToTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_uuid: cdktf.stringToTerraform(struct!.analyticsUuid),
    cluster_group_name: cdktf.stringToTerraform(struct!.clusterGroupName),
    experimental_capabilities: cdktf.stringToTerraform(struct!.experimentalCapabilities),
    extra_parameters: cdktf.listMapper(dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersToTerraform, false)(struct!.extraParameters),
    extra_value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraValueFiles),
    git_ops_spec: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpecToTerraform(struct!.gitOpsSpec),
    git_spec: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpecToTerraform(struct!.gitSpec),
    multi_source_config: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfigToTerraform(struct!.multiSourceConfig),
  }
}


export function dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics_uuid: {
      value: cdktf.stringToHclTerraform(struct!.analyticsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_group_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    experimental_capabilities: {
      value: cdktf.stringToHclTerraform(struct!.experimentalCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_parameters: {
      value: cdktf.listMapperHcl(dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersToHclTerraform, false)(struct!.extraParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersList",
    },
    extra_value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraValueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    git_ops_spec: {
      value: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpecToHclTerraform(struct!.gitOpsSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpec",
    },
    git_spec: {
      value: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpecToHclTerraform(struct!.gitSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpec",
    },
    multi_source_config: {
      value: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfigToHclTerraform(struct!.multiSourceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyticsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsUuid = this._analyticsUuid;
    }
    if (this._clusterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroupName = this._clusterGroupName;
    }
    if (this._experimentalCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalCapabilities = this._experimentalCapabilities;
    }
    if (this._extraParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParameters = this._extraParameters?.internalValue;
    }
    if (this._extraValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraValueFiles = this._extraValueFiles;
    }
    if (this._gitOpsSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitOpsSpec = this._gitOpsSpec?.internalValue;
    }
    if (this._gitSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSpec = this._gitSpec?.internalValue;
    }
    if (this._multiSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiSourceConfig = this._multiSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyticsUuid = undefined;
      this._clusterGroupName = undefined;
      this._experimentalCapabilities = undefined;
      this._extraParameters.internalValue = undefined;
      this._extraValueFiles = undefined;
      this._gitOpsSpec.internalValue = undefined;
      this._gitSpec.internalValue = undefined;
      this._multiSourceConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyticsUuid = value.analyticsUuid;
      this._clusterGroupName = value.clusterGroupName;
      this._experimentalCapabilities = value.experimentalCapabilities;
      this._extraParameters.internalValue = value.extraParameters;
      this._extraValueFiles = value.extraValueFiles;
      this._gitOpsSpec.internalValue = value.gitOpsSpec;
      this._gitSpec.internalValue = value.gitSpec;
      this._multiSourceConfig.internalValue = value.multiSourceConfig;
    }
  }

  // analytics_uuid - computed: false, optional: true, required: false
  private _analyticsUuid?: string; 
  public get analyticsUuid() {
    return this.getStringAttribute('analytics_uuid');
  }
  public set analyticsUuid(value: string) {
    this._analyticsUuid = value;
  }
  public resetAnalyticsUuid() {
    this._analyticsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsUuidInput() {
    return this._analyticsUuid;
  }

  // cluster_group_name - computed: false, optional: false, required: true
  private _clusterGroupName?: string; 
  public get clusterGroupName() {
    return this.getStringAttribute('cluster_group_name');
  }
  public set clusterGroupName(value: string) {
    this._clusterGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupNameInput() {
    return this._clusterGroupName;
  }

  // experimental_capabilities - computed: false, optional: true, required: false
  private _experimentalCapabilities?: string; 
  public get experimentalCapabilities() {
    return this.getStringAttribute('experimental_capabilities');
  }
  public set experimentalCapabilities(value: string) {
    this._experimentalCapabilities = value;
  }
  public resetExperimentalCapabilities() {
    this._experimentalCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalCapabilitiesInput() {
    return this._experimentalCapabilities;
  }

  // extra_parameters - computed: false, optional: true, required: false
  private _extraParameters = new DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParametersList(this, "extra_parameters", false);
  public get extraParameters() {
    return this._extraParameters;
  }
  public putExtraParameters(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecExtraParameters[] | cdktf.IResolvable) {
    this._extraParameters.internalValue = value;
  }
  public resetExtraParameters() {
    this._extraParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParametersInput() {
    return this._extraParameters.internalValue;
  }

  // extra_value_files - computed: false, optional: true, required: false
  private _extraValueFiles?: string[]; 
  public get extraValueFiles() {
    return this.getListAttribute('extra_value_files');
  }
  public set extraValueFiles(value: string[]) {
    this._extraValueFiles = value;
  }
  public resetExtraValueFiles() {
    this._extraValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraValueFilesInput() {
    return this._extraValueFiles;
  }

  // git_ops_spec - computed: false, optional: true, required: false
  private _gitOpsSpec = new DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpecOutputReference(this, "git_ops_spec");
  public get gitOpsSpec() {
    return this._gitOpsSpec;
  }
  public putGitOpsSpec(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitOpsSpec) {
    this._gitOpsSpec.internalValue = value;
  }
  public resetGitOpsSpec() {
    this._gitOpsSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitOpsSpecInput() {
    return this._gitOpsSpec.internalValue;
  }

  // git_spec - computed: false, optional: false, required: true
  private _gitSpec = new DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpecOutputReference(this, "git_spec");
  public get gitSpec() {
    return this._gitSpec;
  }
  public putGitSpec(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecGitSpec) {
    this._gitSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSpecInput() {
    return this._gitSpec.internalValue;
  }

  // multi_source_config - computed: false, optional: true, required: false
  private _multiSourceConfig = new DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfigOutputReference(this, "multi_source_config");
  public get multiSourceConfig() {
    return this._multiSourceConfig;
  }
  public putMultiSourceConfig(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecMultiSourceConfig) {
    this._multiSourceConfig.internalValue = value;
  }
  public resetMultiSourceConfig() {
    this._multiSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiSourceConfigInput() {
    return this._multiSourceConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest k8s_gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest}
*/
export class DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest k8s_gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gitops_hybrid_cloud_patterns_io_pattern_v1alpha1_manifest',
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
  private _metadata = new DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpec) {
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
      metadata: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGitopsHybridCloudPatternsIoPatternV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
