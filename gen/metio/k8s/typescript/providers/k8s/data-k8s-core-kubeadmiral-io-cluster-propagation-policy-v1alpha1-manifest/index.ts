// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#metadata DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#spec DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#annotations DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#labels DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhen {
  /**
  * A pod will be subject to auto migration if it remains unschedulable beyond this duration. Duration should be specified in a format that can be parsed by Go's time.ParseDuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#pod_unschedulable_for DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#pod_unschedulable_for}
  */
  readonly podUnschedulableFor?: string;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhenToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_unschedulable_for: cdktf.stringToTerraform(struct!.podUnschedulableFor),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhenToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_unschedulable_for: {
      value: cdktf.stringToHclTerraform(struct!.podUnschedulableFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podUnschedulableFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.podUnschedulableFor = this._podUnschedulableFor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podUnschedulableFor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podUnschedulableFor = value.podUnschedulableFor;
    }
  }

  // pod_unschedulable_for - computed: false, optional: true, required: false
  private _podUnschedulableFor?: string; 
  public get podUnschedulableFor() {
    return this.getStringAttribute('pod_unschedulable_for');
  }
  public set podUnschedulableFor(value: string) {
    this._podUnschedulableFor = value;
  }
  public resetPodUnschedulableFor() {
    this._podUnschedulableFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podUnschedulableForInput() {
    return this._podUnschedulableFor;
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigration {
  /**
  * Besides starting new replicas in other cluster(s), whether to keep the unschedulable replicas in the original cluster so we can go back to the desired state when the cluster recovers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#keep_unschedulable_replicas DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#keep_unschedulable_replicas}
  */
  readonly keepUnschedulableReplicas?: boolean | cdktf.IResolvable;
  /**
  * When a replica should be subject to auto migration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#when DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#when}
  */
  readonly when?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhen;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_unschedulable_replicas: cdktf.booleanToTerraform(struct!.keepUnschedulableReplicas),
    when: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhenToTerraform(struct!.when),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_unschedulable_replicas: {
      value: cdktf.booleanToHclTerraform(struct!.keepUnschedulableReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    when: {
      value: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhenToHclTerraform(struct!.when),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhen",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepUnschedulableReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepUnschedulableReplicas = this._keepUnschedulableReplicas;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepUnschedulableReplicas = undefined;
      this._when.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepUnschedulableReplicas = value.keepUnschedulableReplicas;
      this._when.internalValue = value.when;
    }
  }

  // keep_unschedulable_replicas - computed: false, optional: true, required: false
  private _keepUnschedulableReplicas?: boolean | cdktf.IResolvable; 
  public get keepUnschedulableReplicas() {
    return this.getBooleanAttribute('keep_unschedulable_replicas');
  }
  public set keepUnschedulableReplicas(value: boolean | cdktf.IResolvable) {
    this._keepUnschedulableReplicas = value;
  }
  public resetKeepUnschedulableReplicas() {
    this._keepUnschedulableReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepUnschedulableReplicasInput() {
    return this._keepUnschedulableReplicas;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhenOutputReference(this, "when");
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationWhen) {
    this._when.internalValue = value;
  }
  public resetWhen() {
    this._when.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when.internalValue;
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * ClusterSelectorOperator is the set of operators that can be used in a cluster selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values: string[];
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * ClusterSelectorOperator is the set of operators that can be used in a cluster selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#values DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#values}
  */
  readonly values: string[];
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinity {
  /**
  * A list of cluster selector requirements by cluster labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#match_expressions DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of cluster selector requirements by cluster fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#match_fields DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFields[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinity[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferences {
  /**
  * Maximum number of replicas that should be assigned to this cluster workload object. Unbounded if no value provided (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#max_replicas DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Minimum number of replicas that should be assigned to this cluster workload object. 0 by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#min_replicas DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * A number expressing the priority of the cluster. The higher the value, the higher the priority. When selecting clusters for propagation, clusters with higher priority are preferred. When the Binpack ReplicasStrategy is selected, replicas will be scheduled to clusters with higher priority first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#priority DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * A number expressing the preference to put an additional replica to this cluster workload object. It will not take effect when ReplicasStrategy is Binpack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#weight DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferencesToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferencesToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._priority = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._priority = value.priority;
      this._weight = value.weight;
    }
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement {
  /**
  * Cluster is the name of the FederatedCluster to propagate to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#cluster DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#cluster}
  */
  readonly cluster: string;
  /**
  * Preferences contains the cluster's propagation preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#preferences DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#preferences}
  */
  readonly preferences?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferences;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    preferences: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferencesToTerraform(struct!.preferences),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferences: {
      value: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferencesToHclTerraform(struct!.preferences),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferences",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._preferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferences = this._preferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._preferences.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._preferences.internalValue = value.preferences;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // preferences - computed: false, optional: true, required: false
  private _preferences = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferencesOutputReference(this, "preferences");
  public get preferences() {
    return this._preferences;
  }
  public putPreferences(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementPreferences) {
    this._preferences.internalValue = value;
  }
  public resetPreferences() {
    this._preferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaRescheduling {
  /**
  * If set to true, the scheduler will attempt to prevent migrating existing replicas during rescheduling. In order to do so, replica scheduling preferences might not be fully respected. If set to false, the scheduler will always rebalance the replicas based on the specified preferences, which might cause temporary service disruption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#avoid_disruption DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#avoid_disruption}
  */
  readonly avoidDisruption?: boolean | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaReschedulingToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaRescheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avoid_disruption: cdktf.booleanToTerraform(struct!.avoidDisruption),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaReschedulingToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaRescheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avoid_disruption: {
      value: cdktf.booleanToHclTerraform(struct!.avoidDisruption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaReschedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaRescheduling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avoidDisruption !== undefined) {
      hasAnyValues = true;
      internalValueResult.avoidDisruption = this._avoidDisruption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaRescheduling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avoidDisruption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avoidDisruption = value.avoidDisruption;
    }
  }

  // avoid_disruption - computed: false, optional: true, required: false
  private _avoidDisruption?: boolean | cdktf.IResolvable; 
  public get avoidDisruption() {
    return this.getBooleanAttribute('avoid_disruption');
  }
  public set avoidDisruption(value: boolean | cdktf.IResolvable) {
    this._avoidDisruption = value;
  }
  public resetAvoidDisruption() {
    this._avoidDisruption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avoidDisruptionInput() {
    return this._avoidDisruption;
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhen {
  /**
  * If set to true, changes to clusters' enabled list of api resources will trigger rescheduling. It set to false, the scheduler will reschedule only when other options are triggered or the replicas or the requested resources of the template changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#cluster_api_resources_changed DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#cluster_api_resources_changed}
  */
  readonly clusterApiResourcesChanged?: boolean | cdktf.IResolvable;
  /**
  * If set to true, clusters joining the federation will trigger rescheduling. It set to false, the scheduler will reschedule only when other options are triggered or the replicas or the requested resources of the template changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#cluster_joined DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#cluster_joined}
  */
  readonly clusterJoined?: boolean | cdktf.IResolvable;
  /**
  * If set to true, changes to cluster labels will trigger rescheduling. It set to false, the scheduler will reschedule only when other options are triggered or the replicas or the requested resources of the template changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#cluster_labels_changed DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#cluster_labels_changed}
  */
  readonly clusterLabelsChanged?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the scheduler will trigger rescheduling when the semantics of the policy changes. For example, modifying placement, schedulingMode, maxClusters, clusterSelector, and other configurations related to scheduling (includes reschedulePolicy itself) will immediately trigger rescheduling. Modifying the labels, annotations, autoMigration configuration will not trigger rescheduling. It set to false, the scheduler will not reschedule when the policy content changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#policy_content_changed DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#policy_content_changed}
  */
  readonly policyContentChanged?: boolean | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhenToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_api_resources_changed: cdktf.booleanToTerraform(struct!.clusterApiResourcesChanged),
    cluster_joined: cdktf.booleanToTerraform(struct!.clusterJoined),
    cluster_labels_changed: cdktf.booleanToTerraform(struct!.clusterLabelsChanged),
    policy_content_changed: cdktf.booleanToTerraform(struct!.policyContentChanged),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhenToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_api_resources_changed: {
      value: cdktf.booleanToHclTerraform(struct!.clusterApiResourcesChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_joined: {
      value: cdktf.booleanToHclTerraform(struct!.clusterJoined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_labels_changed: {
      value: cdktf.booleanToHclTerraform(struct!.clusterLabelsChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_content_changed: {
      value: cdktf.booleanToHclTerraform(struct!.policyContentChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterApiResourcesChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterApiResourcesChanged = this._clusterApiResourcesChanged;
    }
    if (this._clusterJoined !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterJoined = this._clusterJoined;
    }
    if (this._clusterLabelsChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLabelsChanged = this._clusterLabelsChanged;
    }
    if (this._policyContentChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyContentChanged = this._policyContentChanged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterApiResourcesChanged = undefined;
      this._clusterJoined = undefined;
      this._clusterLabelsChanged = undefined;
      this._policyContentChanged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterApiResourcesChanged = value.clusterApiResourcesChanged;
      this._clusterJoined = value.clusterJoined;
      this._clusterLabelsChanged = value.clusterLabelsChanged;
      this._policyContentChanged = value.policyContentChanged;
    }
  }

  // cluster_api_resources_changed - computed: false, optional: true, required: false
  private _clusterApiResourcesChanged?: boolean | cdktf.IResolvable; 
  public get clusterApiResourcesChanged() {
    return this.getBooleanAttribute('cluster_api_resources_changed');
  }
  public set clusterApiResourcesChanged(value: boolean | cdktf.IResolvable) {
    this._clusterApiResourcesChanged = value;
  }
  public resetClusterApiResourcesChanged() {
    this._clusterApiResourcesChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterApiResourcesChangedInput() {
    return this._clusterApiResourcesChanged;
  }

  // cluster_joined - computed: false, optional: true, required: false
  private _clusterJoined?: boolean | cdktf.IResolvable; 
  public get clusterJoined() {
    return this.getBooleanAttribute('cluster_joined');
  }
  public set clusterJoined(value: boolean | cdktf.IResolvable) {
    this._clusterJoined = value;
  }
  public resetClusterJoined() {
    this._clusterJoined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterJoinedInput() {
    return this._clusterJoined;
  }

  // cluster_labels_changed - computed: false, optional: true, required: false
  private _clusterLabelsChanged?: boolean | cdktf.IResolvable; 
  public get clusterLabelsChanged() {
    return this.getBooleanAttribute('cluster_labels_changed');
  }
  public set clusterLabelsChanged(value: boolean | cdktf.IResolvable) {
    this._clusterLabelsChanged = value;
  }
  public resetClusterLabelsChanged() {
    this._clusterLabelsChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsChangedInput() {
    return this._clusterLabelsChanged;
  }

  // policy_content_changed - computed: false, optional: true, required: false
  private _policyContentChanged?: boolean | cdktf.IResolvable; 
  public get policyContentChanged() {
    return this.getBooleanAttribute('policy_content_changed');
  }
  public set policyContentChanged(value: boolean | cdktf.IResolvable) {
    this._policyContentChanged = value;
  }
  public resetPolicyContentChanged() {
    this._policyContentChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyContentChangedInput() {
    return this._policyContentChanged;
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicy {
  /**
  * DisableRescheduling determines if a federated object can be rescheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#disable_rescheduling DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#disable_rescheduling}
  */
  readonly disableRescheduling?: boolean | cdktf.IResolvable;
  /**
  * Configures behaviors related to replica rescheduling. Default set via a post-generation patch. See patch file for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#replica_rescheduling DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#replica_rescheduling}
  */
  readonly replicaRescheduling?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaRescheduling;
  /**
  * When the related objects should be subject to reschedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#reschedule_when DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#reschedule_when}
  */
  readonly rescheduleWhen?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhen;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_rescheduling: cdktf.booleanToTerraform(struct!.disableRescheduling),
    replica_rescheduling: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaReschedulingToTerraform(struct!.replicaRescheduling),
    reschedule_when: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhenToTerraform(struct!.rescheduleWhen),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_rescheduling: {
      value: cdktf.booleanToHclTerraform(struct!.disableRescheduling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replica_rescheduling: {
      value: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaReschedulingToHclTerraform(struct!.replicaRescheduling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaRescheduling",
    },
    reschedule_when: {
      value: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhenToHclTerraform(struct!.rescheduleWhen),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhen",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRescheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRescheduling = this._disableRescheduling;
    }
    if (this._replicaRescheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaRescheduling = this._replicaRescheduling?.internalValue;
    }
    if (this._rescheduleWhen?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleWhen = this._rescheduleWhen?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableRescheduling = undefined;
      this._replicaRescheduling.internalValue = undefined;
      this._rescheduleWhen.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableRescheduling = value.disableRescheduling;
      this._replicaRescheduling.internalValue = value.replicaRescheduling;
      this._rescheduleWhen.internalValue = value.rescheduleWhen;
    }
  }

  // disable_rescheduling - computed: false, optional: true, required: false
  private _disableRescheduling?: boolean | cdktf.IResolvable; 
  public get disableRescheduling() {
    return this.getBooleanAttribute('disable_rescheduling');
  }
  public set disableRescheduling(value: boolean | cdktf.IResolvable) {
    this._disableRescheduling = value;
  }
  public resetDisableRescheduling() {
    this._disableRescheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReschedulingInput() {
    return this._disableRescheduling;
  }

  // replica_rescheduling - computed: false, optional: true, required: false
  private _replicaRescheduling = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaReschedulingOutputReference(this, "replica_rescheduling");
  public get replicaRescheduling() {
    return this._replicaRescheduling;
  }
  public putReplicaRescheduling(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyReplicaRescheduling) {
    this._replicaRescheduling.internalValue = value;
  }
  public resetReplicaRescheduling() {
    this._replicaRescheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaReschedulingInput() {
    return this._replicaRescheduling.internalValue;
  }

  // reschedule_when - computed: false, optional: true, required: false
  private _rescheduleWhen = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhenOutputReference(this, "reschedule_when");
  public get rescheduleWhen() {
    return this._rescheduleWhen;
  }
  public putRescheduleWhen(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyRescheduleWhen) {
    this._rescheduleWhen.internalValue = value;
  }
  public resetRescheduleWhen() {
    this._rescheduleWhen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleWhenInput() {
    return this._rescheduleWhen.internalValue;
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#effect DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#key DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#operator DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#toleration_seconds DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpec {
  /**
  * Configures behaviors related to auto migration. If absent, auto migration will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#auto_migration DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#auto_migration}
  */
  readonly autoMigration?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigration;
  /**
  * ClusterAffinity is a list of cluster selector terms, the terms are ORed. A empty or nil ClusterAffinity selects everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#cluster_affinity DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#cluster_affinity}
  */
  readonly clusterAffinity?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinity[] | cdktf.IResolvable;
  /**
  * ClusterSelector is a label query over clusters to consider for scheduling. An empty or nil ClusterSelector selects everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#cluster_selector DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#cluster_selector}
  */
  readonly clusterSelector?: { [key: string]: string };
  /**
  * DisableFollowerScheduling is a boolean that determines if follower scheduling is disabled. Resources that depend on other resources (e.g. deployments) are called leaders, and resources that are depended on (e.g. configmaps and secrets) are called followers. If a leader enables follower scheduling, its followers will additionally be scheduled to clusters where the leader is scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#disable_follower_scheduling DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#disable_follower_scheduling}
  */
  readonly disableFollowerScheduling?: boolean | cdktf.IResolvable;
  /**
  * MaxClusters is the maximum number of replicas that the federated object can be propagated to. The maximum number of clusters is unbounded if no value is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#max_clusters DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#max_clusters}
  */
  readonly maxClusters?: number;
  /**
  * Placement is an explicit list of clusters used to select member clusters to propagate resources to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#placement DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#placement}
  */
  readonly placement?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement[] | cdktf.IResolvable;
  /**
  * ReplicasStrategy is the strategy used for scheduling replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#replicas_strategy DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#replicas_strategy}
  */
  readonly replicasStrategy?: string;
  /**
  * Configures behaviors related to rescheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#reschedule_policy DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#reschedule_policy}
  */
  readonly reschedulePolicy?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicy;
  /**
  * SchedulingMode determines the mode used for scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#scheduling_mode DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#scheduling_mode}
  */
  readonly schedulingMode: string;
  /**
  * Profile determines the scheduling profile to be used for scheduling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#scheduling_profile DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#scheduling_profile}
  */
  readonly schedulingProfile?: string;
  /**
  * Tolerations describe a set of cluster taints that the policy tolerates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#tolerations DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_migration: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationToTerraform(struct!.autoMigration),
    cluster_affinity: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityToTerraform, false)(struct!.clusterAffinity),
    cluster_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clusterSelector),
    disable_follower_scheduling: cdktf.booleanToTerraform(struct!.disableFollowerScheduling),
    max_clusters: cdktf.numberToTerraform(struct!.maxClusters),
    placement: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementToTerraform, false)(struct!.placement),
    replicas_strategy: cdktf.stringToTerraform(struct!.replicasStrategy),
    reschedule_policy: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyToTerraform(struct!.reschedulePolicy),
    scheduling_mode: cdktf.stringToTerraform(struct!.schedulingMode),
    scheduling_profile: cdktf.stringToTerraform(struct!.schedulingProfile),
    tolerations: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_migration: {
      value: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationToHclTerraform(struct!.autoMigration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigration",
    },
    cluster_affinity: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityToHclTerraform, false)(struct!.clusterAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityList",
    },
    cluster_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clusterSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_follower_scheduling: {
      value: cdktf.booleanToHclTerraform(struct!.disableFollowerScheduling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_clusters: {
      value: cdktf.numberToHclTerraform(struct!.maxClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    placement: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementToHclTerraform, false)(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementList",
    },
    replicas_strategy: {
      value: cdktf.stringToHclTerraform(struct!.replicasStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_policy: {
      value: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyToHclTerraform(struct!.reschedulePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicy",
    },
    scheduling_mode: {
      value: cdktf.stringToHclTerraform(struct!.schedulingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_profile: {
      value: cdktf.stringToHclTerraform(struct!.schedulingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoMigration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMigration = this._autoMigration?.internalValue;
    }
    if (this._clusterAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAffinity = this._clusterAffinity?.internalValue;
    }
    if (this._clusterSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSelector = this._clusterSelector;
    }
    if (this._disableFollowerScheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFollowerScheduling = this._disableFollowerScheduling;
    }
    if (this._maxClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClusters = this._maxClusters;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._replicasStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicasStrategy = this._replicasStrategy;
    }
    if (this._reschedulePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reschedulePolicy = this._reschedulePolicy?.internalValue;
    }
    if (this._schedulingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingMode = this._schedulingMode;
    }
    if (this._schedulingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingProfile = this._schedulingProfile;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoMigration.internalValue = undefined;
      this._clusterAffinity.internalValue = undefined;
      this._clusterSelector = undefined;
      this._disableFollowerScheduling = undefined;
      this._maxClusters = undefined;
      this._placement.internalValue = undefined;
      this._replicasStrategy = undefined;
      this._reschedulePolicy.internalValue = undefined;
      this._schedulingMode = undefined;
      this._schedulingProfile = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoMigration.internalValue = value.autoMigration;
      this._clusterAffinity.internalValue = value.clusterAffinity;
      this._clusterSelector = value.clusterSelector;
      this._disableFollowerScheduling = value.disableFollowerScheduling;
      this._maxClusters = value.maxClusters;
      this._placement.internalValue = value.placement;
      this._replicasStrategy = value.replicasStrategy;
      this._reschedulePolicy.internalValue = value.reschedulePolicy;
      this._schedulingMode = value.schedulingMode;
      this._schedulingProfile = value.schedulingProfile;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // auto_migration - computed: false, optional: true, required: false
  private _autoMigration = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigrationOutputReference(this, "auto_migration");
  public get autoMigration() {
    return this._autoMigration;
  }
  public putAutoMigration(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecAutoMigration) {
    this._autoMigration.internalValue = value;
  }
  public resetAutoMigration() {
    this._autoMigration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMigrationInput() {
    return this._autoMigration.internalValue;
  }

  // cluster_affinity - computed: false, optional: true, required: false
  private _clusterAffinity = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinityList(this, "cluster_affinity", false);
  public get clusterAffinity() {
    return this._clusterAffinity;
  }
  public putClusterAffinity(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecClusterAffinity[] | cdktf.IResolvable) {
    this._clusterAffinity.internalValue = value;
  }
  public resetClusterAffinity() {
    this._clusterAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAffinityInput() {
    return this._clusterAffinity.internalValue;
  }

  // cluster_selector - computed: false, optional: true, required: false
  private _clusterSelector?: { [key: string]: string }; 
  public get clusterSelector() {
    return this.getStringMapAttribute('cluster_selector');
  }
  public set clusterSelector(value: { [key: string]: string }) {
    this._clusterSelector = value;
  }
  public resetClusterSelector() {
    this._clusterSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector;
  }

  // disable_follower_scheduling - computed: false, optional: true, required: false
  private _disableFollowerScheduling?: boolean | cdktf.IResolvable; 
  public get disableFollowerScheduling() {
    return this.getBooleanAttribute('disable_follower_scheduling');
  }
  public set disableFollowerScheduling(value: boolean | cdktf.IResolvable) {
    this._disableFollowerScheduling = value;
  }
  public resetDisableFollowerScheduling() {
    this._disableFollowerScheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFollowerSchedulingInput() {
    return this._disableFollowerScheduling;
  }

  // max_clusters - computed: false, optional: true, required: false
  private _maxClusters?: number; 
  public get maxClusters() {
    return this.getNumberAttribute('max_clusters');
  }
  public set maxClusters(value: number) {
    this._maxClusters = value;
  }
  public resetMaxClusters() {
    this._maxClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClustersInput() {
    return this._maxClusters;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacementList(this, "placement", false);
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecPlacement[] | cdktf.IResolvable) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // replicas_strategy - computed: false, optional: true, required: false
  private _replicasStrategy?: string; 
  public get replicasStrategy() {
    return this.getStringAttribute('replicas_strategy');
  }
  public set replicasStrategy(value: string) {
    this._replicasStrategy = value;
  }
  public resetReplicasStrategy() {
    this._replicasStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasStrategyInput() {
    return this._replicasStrategy;
  }

  // reschedule_policy - computed: false, optional: true, required: false
  private _reschedulePolicy = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicyOutputReference(this, "reschedule_policy");
  public get reschedulePolicy() {
    return this._reschedulePolicy;
  }
  public putReschedulePolicy(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecReschedulePolicy) {
    this._reschedulePolicy.internalValue = value;
  }
  public resetReschedulePolicy() {
    this._reschedulePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reschedulePolicyInput() {
    return this._reschedulePolicy.internalValue;
  }

  // scheduling_mode - computed: false, optional: false, required: true
  private _schedulingMode?: string; 
  public get schedulingMode() {
    return this.getStringAttribute('scheduling_mode');
  }
  public set schedulingMode(value: string) {
    this._schedulingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingModeInput() {
    return this._schedulingMode;
  }

  // scheduling_profile - computed: false, optional: true, required: false
  private _schedulingProfile?: string; 
  public get schedulingProfile() {
    return this.getStringAttribute('scheduling_profile');
  }
  public set schedulingProfile(value: string) {
    this._schedulingProfile = value;
  }
  public resetSchedulingProfile() {
    this._schedulingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingProfileInput() {
    return this._schedulingProfile;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest k8s_core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest}
*/
export class DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest k8s_core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_core_kubeadmiral_io_cluster_propagation_policy_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoClusterPropagationPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
