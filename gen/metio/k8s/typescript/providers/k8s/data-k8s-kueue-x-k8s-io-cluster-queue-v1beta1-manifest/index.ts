// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#metadata DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadata;
  /**
  * ClusterQueueSpec defines the desired state of ClusterQueue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#spec DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpec;
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#annotations DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#labels DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#name DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecks {
  /**
  * name is an AdmissionCheck's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#name DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * onFlavors is a list of ResourceFlavors' names that this AdmissionCheck should run for. If empty, the AdmissionCheck will run for all workloads submitted to the ClusterQueue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#on_flavors DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#on_flavors}
  */
  readonly onFlavors?: string[];
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    on_flavors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onFlavors),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecks | cdktf.IResolvable): any {
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
    on_flavors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onFlavors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onFlavors !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFlavors = this._onFlavors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._onFlavors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._onFlavors = value.onFlavors;
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

  // on_flavors - computed: false, optional: true, required: false
  private _onFlavors?: string[]; 
  public get onFlavors() {
    return this.getListAttribute('on_flavors');
  }
  public set onFlavors(value: string[]) {
    this._onFlavors = value;
  }
  public resetOnFlavors() {
    this._onFlavors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFlavorsInput() {
    return this._onFlavors;
  }
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksList extends cdktf.ComplexList {
  public internalValue? : DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksOutputReference {
    return new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategy {
  /**
  * admissionChecks is a list of strategies for AdmissionChecks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#admission_checks DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#admission_checks}
  */
  readonly admissionChecks?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecks[] | cdktf.IResolvable;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_checks: cdktf.listMapper(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksToTerraform, false)(struct!.admissionChecks),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission_checks: {
      value: cdktf.listMapperHcl(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksToHclTerraform, false)(struct!.admissionChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionChecks = this._admissionChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionChecks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionChecks.internalValue = value.admissionChecks;
    }
  }

  // admission_checks - computed: false, optional: true, required: false
  private _admissionChecks = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecksList(this, "admission_checks", false);
  public get admissionChecks() {
    return this._admissionChecks;
  }
  public putAdmissionChecks(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyAdmissionChecks[] | cdktf.IResolvable) {
    this._admissionChecks.internalValue = value;
  }
  public resetAdmissionChecks() {
    this._admissionChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionChecksInput() {
    return this._admissionChecks.internalValue;
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharing {
  /**
  * weight gives a comparative advantage to this ClusterQueue when competing for unused resources in the cohort against other ClusterQueues. The share of a ClusterQueue is based on the dominant resource usage above nominal quotas for each resource, divided by the weight. Admission prioritizes scheduling workloads from ClusterQueues with the lowest share and preempting workloads from the ClusterQueues with the highest share. A zero weight implies infinite share value, meaning that this ClusterQueue will always be at disadvantage against other ClusterQueues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#weight DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#weight}
  */
  readonly weight?: string;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharingToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharingToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
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
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibility {
  /**
  * whenCanBorrow determines whether a workload should try the next flavor before borrowing in current flavor. The possible values are: - 'Borrow' (default): allocate in current flavor if borrowing is possible. - 'TryNextFlavor': try next flavor even if the current flavor has enough resources to borrow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#when_can_borrow DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#when_can_borrow}
  */
  readonly whenCanBorrow?: string;
  /**
  * whenCanPreempt determines whether a workload should try the next flavor before borrowing in current flavor. The possible values are: - 'Preempt': allocate in current flavor if it's possible to preempt some workloads. - 'TryNextFlavor' (default): try next flavor even if there are enough candidates for preemption in the current flavor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#when_can_preempt DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#when_can_preempt}
  */
  readonly whenCanPreempt?: string;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibilityToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    when_can_borrow: cdktf.stringToTerraform(struct!.whenCanBorrow),
    when_can_preempt: cdktf.stringToTerraform(struct!.whenCanPreempt),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibilityToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    when_can_borrow: {
      value: cdktf.stringToHclTerraform(struct!.whenCanBorrow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_can_preempt: {
      value: cdktf.stringToHclTerraform(struct!.whenCanPreempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._whenCanBorrow !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenCanBorrow = this._whenCanBorrow;
    }
    if (this._whenCanPreempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenCanPreempt = this._whenCanPreempt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._whenCanBorrow = undefined;
      this._whenCanPreempt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._whenCanBorrow = value.whenCanBorrow;
      this._whenCanPreempt = value.whenCanPreempt;
    }
  }

  // when_can_borrow - computed: false, optional: true, required: false
  private _whenCanBorrow?: string; 
  public get whenCanBorrow() {
    return this.getStringAttribute('when_can_borrow');
  }
  public set whenCanBorrow(value: string) {
    this._whenCanBorrow = value;
  }
  public resetWhenCanBorrow() {
    this._whenCanBorrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenCanBorrowInput() {
    return this._whenCanBorrow;
  }

  // when_can_preempt - computed: false, optional: true, required: false
  private _whenCanPreempt?: string; 
  public get whenCanPreempt() {
    return this.getStringAttribute('when_can_preempt');
  }
  public set whenCanPreempt(value: string) {
    this._whenCanPreempt = value;
  }
  public resetWhenCanPreempt() {
    this._whenCanPreempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenCanPreemptInput() {
    return this._whenCanPreempt;
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#key DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#operator DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#values DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#match_expressions DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#match_labels DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList",
    },
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

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
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
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohort {
  /**
  * maxPriorityThreshold allows to restrict the set of workloads which might be preempted by a borrowing workload, to only workloads with priority less than or equal to the specified threshold priority. When the threshold is not specified, then any workload satisfying the policy can be preempted by the borrowing workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#max_priority_threshold DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#max_priority_threshold}
  */
  readonly maxPriorityThreshold?: number;
  /**
  * policy determines the policy for preemption to reclaim quota within cohort while borrowing. Possible values are: - 'Never' (default): do not allow for preemption, in other ClusterQueues within the cohort, for a borrowing workload. - 'LowerPriority': allow preemption, in other ClusterQueues within the cohort, for a borrowing workload, but only if the preempted workloads are of lower priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#policy DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#policy}
  */
  readonly policy?: string;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohortToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_priority_threshold: cdktf.numberToTerraform(struct!.maxPriorityThreshold),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohortToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_priority_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxPriorityThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPriorityThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPriorityThreshold = this._maxPriorityThreshold;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPriorityThreshold = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPriorityThreshold = value.maxPriorityThreshold;
      this._policy = value.policy;
    }
  }

  // max_priority_threshold - computed: false, optional: true, required: false
  private _maxPriorityThreshold?: number; 
  public get maxPriorityThreshold() {
    return this.getNumberAttribute('max_priority_threshold');
  }
  public set maxPriorityThreshold(value: number) {
    this._maxPriorityThreshold = value;
  }
  public resetMaxPriorityThreshold() {
    this._maxPriorityThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriorityThresholdInput() {
    return this._maxPriorityThreshold;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemption {
  /**
  * borrowWithinCohort provides configuration to allow preemption within cohort while borrowing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#borrow_within_cohort DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#borrow_within_cohort}
  */
  readonly borrowWithinCohort?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohort;
  /**
  * reclaimWithinCohort determines whether a pending Workload can preempt Workloads from other ClusterQueues in the cohort that are using more than their nominal quota. The possible values are: - 'Never' (default): do not preempt Workloads in the cohort. - 'LowerPriority': if the pending Workload fits within the nominal quota of its ClusterQueue, only preempt Workloads in the cohort that have lower priority than the pending Workload. - 'Any': if the pending Workload fits within the nominal quota of its ClusterQueue, preempt any Workload in the cohort, irrespective of priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#reclaim_within_cohort DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#reclaim_within_cohort}
  */
  readonly reclaimWithinCohort?: string;
  /**
  * withinClusterQueue determines whether a pending Workload that doesn't fit within the nominal quota for its ClusterQueue, can preempt active Workloads in the ClusterQueue. The possible values are: - 'Never' (default): do not preempt Workloads in the ClusterQueue. - 'LowerPriority': only preempt Workloads in the ClusterQueue that have lower priority than the pending Workload. - 'LowerOrNewerEqualPriority': only preempt Workloads in the ClusterQueue that either have a lower priority than the pending workload or equal priority and are newer than the pending workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#within_cluster_queue DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#within_cluster_queue}
  */
  readonly withinClusterQueue?: string;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    borrow_within_cohort: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohortToTerraform(struct!.borrowWithinCohort),
    reclaim_within_cohort: cdktf.stringToTerraform(struct!.reclaimWithinCohort),
    within_cluster_queue: cdktf.stringToTerraform(struct!.withinClusterQueue),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    borrow_within_cohort: {
      value: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohortToHclTerraform(struct!.borrowWithinCohort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohort",
    },
    reclaim_within_cohort: {
      value: cdktf.stringToHclTerraform(struct!.reclaimWithinCohort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    within_cluster_queue: {
      value: cdktf.stringToHclTerraform(struct!.withinClusterQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borrowWithinCohort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.borrowWithinCohort = this._borrowWithinCohort?.internalValue;
    }
    if (this._reclaimWithinCohort !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimWithinCohort = this._reclaimWithinCohort;
    }
    if (this._withinClusterQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withinClusterQueue = this._withinClusterQueue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._borrowWithinCohort.internalValue = undefined;
      this._reclaimWithinCohort = undefined;
      this._withinClusterQueue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._borrowWithinCohort.internalValue = value.borrowWithinCohort;
      this._reclaimWithinCohort = value.reclaimWithinCohort;
      this._withinClusterQueue = value.withinClusterQueue;
    }
  }

  // borrow_within_cohort - computed: false, optional: true, required: false
  private _borrowWithinCohort = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohortOutputReference(this, "borrow_within_cohort");
  public get borrowWithinCohort() {
    return this._borrowWithinCohort;
  }
  public putBorrowWithinCohort(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionBorrowWithinCohort) {
    this._borrowWithinCohort.internalValue = value;
  }
  public resetBorrowWithinCohort() {
    this._borrowWithinCohort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borrowWithinCohortInput() {
    return this._borrowWithinCohort.internalValue;
  }

  // reclaim_within_cohort - computed: false, optional: true, required: false
  private _reclaimWithinCohort?: string; 
  public get reclaimWithinCohort() {
    return this.getStringAttribute('reclaim_within_cohort');
  }
  public set reclaimWithinCohort(value: string) {
    this._reclaimWithinCohort = value;
  }
  public resetReclaimWithinCohort() {
    this._reclaimWithinCohort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimWithinCohortInput() {
    return this._reclaimWithinCohort;
  }

  // within_cluster_queue - computed: false, optional: true, required: false
  private _withinClusterQueue?: string; 
  public get withinClusterQueue() {
    return this.getStringAttribute('within_cluster_queue');
  }
  public set withinClusterQueue(value: string) {
    this._withinClusterQueue = value;
  }
  public resetWithinClusterQueue() {
    this._withinClusterQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinClusterQueueInput() {
    return this._withinClusterQueue;
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResources {
  /**
  * borrowingLimit is the maximum amount of quota for the [flavor, resource] combination that this ClusterQueue is allowed to borrow from the unused quota of other ClusterQueues in the same cohort. In total, at a given time, Workloads in a ClusterQueue can consume a quantity of quota equal to nominalQuota+borrowingLimit, assuming the other ClusterQueues in the cohort have enough unused quota. If null, it means that there is no borrowing limit. If not null, it must be non-negative. borrowingLimit must be null if spec.cohort is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#borrowing_limit DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#borrowing_limit}
  */
  readonly borrowingLimit?: string;
  /**
  * lendingLimit is the maximum amount of unused quota for the [flavor, resource] combination that this ClusterQueue can lend to other ClusterQueues in the same cohort. In total, at a given time, ClusterQueue reserves for its exclusive use a quantity of quota equals to nominalQuota - lendingLimit. If null, it means that there is no lending limit, meaning that all the nominalQuota can be borrowed by other clusterQueues in the cohort. If not null, it must be non-negative. lendingLimit must be null if spec.cohort is empty. This field is in beta stage and is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#lending_limit DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#lending_limit}
  */
  readonly lendingLimit?: string;
  /**
  * name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#name DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * nominalQuota is the quantity of this resource that is available for Workloads admitted by this ClusterQueue at a point in time. The nominalQuota must be non-negative. nominalQuota should represent the resources in the cluster available for running jobs (after discounting resources consumed by system components and pods not managed by kueue). In an autoscaled cluster, nominalQuota should account for resources that can be provided by a component such as Kubernetes cluster-autoscaler. If the ClusterQueue belongs to a cohort, the sum of the quotas for each (flavor, resource) combination defines the maximum quantity that can be allocated by a ClusterQueue in the cohort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#nominal_quota DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#nominal_quota}
  */
  readonly nominalQuota: string;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    borrowing_limit: cdktf.stringToTerraform(struct!.borrowingLimit),
    lending_limit: cdktf.stringToTerraform(struct!.lendingLimit),
    name: cdktf.stringToTerraform(struct!.name),
    nominal_quota: cdktf.stringToTerraform(struct!.nominalQuota),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    borrowing_limit: {
      value: cdktf.stringToHclTerraform(struct!.borrowingLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lending_limit: {
      value: cdktf.stringToHclTerraform(struct!.lendingLimit),
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
    nominal_quota: {
      value: cdktf.stringToHclTerraform(struct!.nominalQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borrowingLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.borrowingLimit = this._borrowingLimit;
    }
    if (this._lendingLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.lendingLimit = this._lendingLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nominalQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.nominalQuota = this._nominalQuota;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._borrowingLimit = undefined;
      this._lendingLimit = undefined;
      this._name = undefined;
      this._nominalQuota = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._borrowingLimit = value.borrowingLimit;
      this._lendingLimit = value.lendingLimit;
      this._name = value.name;
      this._nominalQuota = value.nominalQuota;
    }
  }

  // borrowing_limit - computed: false, optional: true, required: false
  private _borrowingLimit?: string; 
  public get borrowingLimit() {
    return this.getStringAttribute('borrowing_limit');
  }
  public set borrowingLimit(value: string) {
    this._borrowingLimit = value;
  }
  public resetBorrowingLimit() {
    this._borrowingLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borrowingLimitInput() {
    return this._borrowingLimit;
  }

  // lending_limit - computed: false, optional: true, required: false
  private _lendingLimit?: string; 
  public get lendingLimit() {
    return this.getStringAttribute('lending_limit');
  }
  public set lendingLimit(value: string) {
    this._lendingLimit = value;
  }
  public resetLendingLimit() {
    this._lendingLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lendingLimitInput() {
    return this._lendingLimit;
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

  // nominal_quota - computed: false, optional: false, required: true
  private _nominalQuota?: string; 
  public get nominalQuota() {
    return this.getStringAttribute('nominal_quota');
  }
  public set nominalQuota(value: string) {
    this._nominalQuota = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nominalQuotaInput() {
    return this._nominalQuota;
  }
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesOutputReference {
    return new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavors {
  /**
  * name of this flavor. The name should match the .metadata.name of a ResourceFlavor. If a matching ResourceFlavor does not exist, the ClusterQueue will have an Active condition set to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#name DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * resources is the list of quotas for this flavor per resource. There could be up to 16 resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#resources DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#resources}
  */
  readonly resources: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResources[] | cdktf.IResolvable;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: cdktf.listMapper(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesToTerraform, false)(struct!.resources),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavors | cdktf.IResolvable): any {
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
    resources: {
      value: cdktf.listMapperHcl(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: false, required: true
  private _resources = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsOutputReference {
    return new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroups {
  /**
  * coveredResources is the list of resources covered by the flavors in this group. Examples: cpu, memory, vendor.com/gpu. The list cannot be empty and it can contain up to 16 resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#covered_resources DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#covered_resources}
  */
  readonly coveredResources: string[];
  /**
  * flavors is the list of flavors that provide the resources of this group. Typically, different flavors represent different hardware models (e.g., gpu models, cpu architectures) or pricing models (on-demand vs spot cpus). Each flavor MUST list all the resources listed for this group in the same order as the .resources field. The list cannot be empty and it can contain up to 16 flavors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#flavors DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#flavors}
  */
  readonly flavors: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavors[] | cdktf.IResolvable;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    covered_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.coveredResources),
    flavors: cdktf.listMapper(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsToTerraform, false)(struct!.flavors),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    covered_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.coveredResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    flavors: {
      value: cdktf.listMapperHcl(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsToHclTerraform, false)(struct!.flavors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coveredResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.coveredResources = this._coveredResources;
    }
    if (this._flavors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavors = this._flavors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coveredResources = undefined;
      this._flavors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coveredResources = value.coveredResources;
      this._flavors.internalValue = value.flavors;
    }
  }

  // covered_resources - computed: false, optional: false, required: true
  private _coveredResources?: string[]; 
  public get coveredResources() {
    return this.getListAttribute('covered_resources');
  }
  public set coveredResources(value: string[]) {
    this._coveredResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coveredResourcesInput() {
    return this._coveredResources;
  }

  // flavors - computed: false, optional: false, required: true
  private _flavors = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavorsList(this, "flavors", false);
  public get flavors() {
    return this._flavors;
  }
  public putFlavors(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsFlavors[] | cdktf.IResolvable) {
    this._flavors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorsInput() {
    return this._flavors.internalValue;
  }
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsOutputReference {
    return new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpec {
  /**
  * admissionChecks lists the AdmissionChecks required by this ClusterQueue. Cannot be used along with AdmissionCheckStrategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#admission_checks DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#admission_checks}
  */
  readonly admissionChecks?: string[];
  /**
  * admissionCheckStrategy defines a list of strategies to determine which ResourceFlavors require AdmissionChecks. This property cannot be used in conjunction with the 'admissionChecks' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#admission_checks_strategy DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#admission_checks_strategy}
  */
  readonly admissionChecksStrategy?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategy;
  /**
  * cohort that this ClusterQueue belongs to. CQs that belong to the same cohort can borrow unused resources from each other. A CQ can be a member of a single borrowing cohort. A workload submitted to a queue referencing this CQ can borrow quota from any CQ in the cohort. Only quota for the [resource, flavor] pairs listed in the CQ can be borrowed. If empty, this ClusterQueue cannot borrow from any other ClusterQueue and vice versa. A cohort is a name that links CQs together, but it doesn't reference any object. Validation of a cohort name is equivalent to that of object names: subdomain in DNS (RFC 1123).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#cohort DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#cohort}
  */
  readonly cohort?: string;
  /**
  * fairSharing defines the properties of the ClusterQueue when participating in fair sharing. The values are only relevant if fair sharing is enabled in the Kueue configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#fair_sharing DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#fair_sharing}
  */
  readonly fairSharing?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharing;
  /**
  * flavorFungibility defines whether a workload should try the next flavor before borrowing or preempting in the flavor being evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#flavor_fungibility DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#flavor_fungibility}
  */
  readonly flavorFungibility?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibility;
  /**
  * namespaceSelector defines which namespaces are allowed to submit workloads to this clusterQueue. Beyond this basic support for policy, a policy agent like Gatekeeper should be used to enforce more advanced policies. Defaults to null which is a nothing selector (no namespaces eligible). If set to an empty selector '{}', then all namespaces are eligible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#namespace_selector DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelector;
  /**
  * preemption describes policies to preempt Workloads from this ClusterQueue or the ClusterQueue's cohort. Preemption can happen in two scenarios: - When a Workload fits within the nominal quota of the ClusterQueue, but the quota is currently borrowed by other ClusterQueues in the cohort. Preempting Workloads in other ClusterQueues allows this ClusterQueue to reclaim its nominal quota. - When a Workload doesn't fit within the nominal quota of the ClusterQueue and there are admitted Workloads in the ClusterQueue with lower priority. The preemption algorithm tries to find a minimal set of Workloads to preempt to accomomdate the pending Workload, preempting Workloads with lower priority first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#preemption DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#preemption}
  */
  readonly preemption?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemption;
  /**
  * QueueingStrategy indicates the queueing strategy of the workloads across the queues in this ClusterQueue. Current Supported Strategies: - StrictFIFO: workloads are ordered strictly by creation time. Older workloads that can't be admitted will block admitting newer workloads even if they fit available quota. - BestEffortFIFO: workloads are ordered by creation time, however older workloads that can't be admitted will not block admitting newer workloads that fit existing quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#queueing_strategy DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#queueing_strategy}
  */
  readonly queueingStrategy?: string;
  /**
  * resourceGroups describes groups of resources. Each resource group defines the list of resources and a list of flavors that provide quotas for these resources. Each resource and each flavor can only form part of one resource group. resourceGroups can be up to 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#resource_groups DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#resource_groups}
  */
  readonly resourceGroups?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroups[] | cdktf.IResolvable;
  /**
  * stopPolicy - if set to a value different from None, the ClusterQueue is considered Inactive, no new reservation being made. Depending on its value, its associated workloads will: - None - Workloads are admitted - HoldAndDrain - Admitted workloads are evicted and Reserving workloads will cancel the reservation. - Hold - Admitted workloads will run to completion and Reserving workloads will cancel the reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#stop_policy DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest#stop_policy}
  */
  readonly stopPolicy?: string;
}

export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecToTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_checks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.admissionChecks),
    admission_checks_strategy: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyToTerraform(struct!.admissionChecksStrategy),
    cohort: cdktf.stringToTerraform(struct!.cohort),
    fair_sharing: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharingToTerraform(struct!.fairSharing),
    flavor_fungibility: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibilityToTerraform(struct!.flavorFungibility),
    namespace_selector: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
    preemption: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionToTerraform(struct!.preemption),
    queueing_strategy: cdktf.stringToTerraform(struct!.queueingStrategy),
    resource_groups: cdktf.listMapper(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsToTerraform, false)(struct!.resourceGroups),
    stop_policy: cdktf.stringToTerraform(struct!.stopPolicy),
  }
}


export function dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission_checks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.admissionChecks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    admission_checks_strategy: {
      value: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyToHclTerraform(struct!.admissionChecksStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategy",
    },
    cohort: {
      value: cdktf.stringToHclTerraform(struct!.cohort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fair_sharing: {
      value: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharingToHclTerraform(struct!.fairSharing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharing",
    },
    flavor_fungibility: {
      value: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibilityToHclTerraform(struct!.flavorFungibility),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibility",
    },
    namespace_selector: {
      value: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelector",
    },
    preemption: {
      value: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionToHclTerraform(struct!.preemption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemption",
    },
    queueing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.queueingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_groups: {
      value: cdktf.listMapperHcl(dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsToHclTerraform, false)(struct!.resourceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsList",
    },
    stop_policy: {
      value: cdktf.stringToHclTerraform(struct!.stopPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionChecks = this._admissionChecks;
    }
    if (this._admissionChecksStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionChecksStrategy = this._admissionChecksStrategy?.internalValue;
    }
    if (this._cohort !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohort = this._cohort;
    }
    if (this._fairSharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fairSharing = this._fairSharing?.internalValue;
    }
    if (this._flavorFungibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorFungibility = this._flavorFungibility?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._preemption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemption = this._preemption?.internalValue;
    }
    if (this._queueingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueingStrategy = this._queueingStrategy;
    }
    if (this._resourceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups?.internalValue;
    }
    if (this._stopPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopPolicy = this._stopPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionChecks = undefined;
      this._admissionChecksStrategy.internalValue = undefined;
      this._cohort = undefined;
      this._fairSharing.internalValue = undefined;
      this._flavorFungibility.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._preemption.internalValue = undefined;
      this._queueingStrategy = undefined;
      this._resourceGroups.internalValue = undefined;
      this._stopPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionChecks = value.admissionChecks;
      this._admissionChecksStrategy.internalValue = value.admissionChecksStrategy;
      this._cohort = value.cohort;
      this._fairSharing.internalValue = value.fairSharing;
      this._flavorFungibility.internalValue = value.flavorFungibility;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._preemption.internalValue = value.preemption;
      this._queueingStrategy = value.queueingStrategy;
      this._resourceGroups.internalValue = value.resourceGroups;
      this._stopPolicy = value.stopPolicy;
    }
  }

  // admission_checks - computed: false, optional: true, required: false
  private _admissionChecks?: string[]; 
  public get admissionChecks() {
    return this.getListAttribute('admission_checks');
  }
  public set admissionChecks(value: string[]) {
    this._admissionChecks = value;
  }
  public resetAdmissionChecks() {
    this._admissionChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionChecksInput() {
    return this._admissionChecks;
  }

  // admission_checks_strategy - computed: false, optional: true, required: false
  private _admissionChecksStrategy = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategyOutputReference(this, "admission_checks_strategy");
  public get admissionChecksStrategy() {
    return this._admissionChecksStrategy;
  }
  public putAdmissionChecksStrategy(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecAdmissionChecksStrategy) {
    this._admissionChecksStrategy.internalValue = value;
  }
  public resetAdmissionChecksStrategy() {
    this._admissionChecksStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionChecksStrategyInput() {
    return this._admissionChecksStrategy.internalValue;
  }

  // cohort - computed: false, optional: true, required: false
  private _cohort?: string; 
  public get cohort() {
    return this.getStringAttribute('cohort');
  }
  public set cohort(value: string) {
    this._cohort = value;
  }
  public resetCohort() {
    this._cohort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortInput() {
    return this._cohort;
  }

  // fair_sharing - computed: false, optional: true, required: false
  private _fairSharing = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharingOutputReference(this, "fair_sharing");
  public get fairSharing() {
    return this._fairSharing;
  }
  public putFairSharing(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFairSharing) {
    this._fairSharing.internalValue = value;
  }
  public resetFairSharing() {
    this._fairSharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fairSharingInput() {
    return this._fairSharing.internalValue;
  }

  // flavor_fungibility - computed: false, optional: true, required: false
  private _flavorFungibility = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibilityOutputReference(this, "flavor_fungibility");
  public get flavorFungibility() {
    return this._flavorFungibility;
  }
  public putFlavorFungibility(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecFlavorFungibility) {
    this._flavorFungibility.internalValue = value;
  }
  public resetFlavorFungibility() {
    this._flavorFungibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorFungibilityInput() {
    return this._flavorFungibility.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // preemption - computed: false, optional: true, required: false
  private _preemption = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemptionOutputReference(this, "preemption");
  public get preemption() {
    return this._preemption;
  }
  public putPreemption(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecPreemption) {
    this._preemption.internalValue = value;
  }
  public resetPreemption() {
    this._preemption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionInput() {
    return this._preemption.internalValue;
  }

  // queueing_strategy - computed: false, optional: true, required: false
  private _queueingStrategy?: string; 
  public get queueingStrategy() {
    return this.getStringAttribute('queueing_strategy');
  }
  public set queueingStrategy(value: string) {
    this._queueingStrategy = value;
  }
  public resetQueueingStrategy() {
    this._queueingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueingStrategyInput() {
    return this._queueingStrategy;
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroupsList(this, "resource_groups", false);
  public get resourceGroups() {
    return this._resourceGroups;
  }
  public putResourceGroups(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecResourceGroups[] | cdktf.IResolvable) {
    this._resourceGroups.internalValue = value;
  }
  public resetResourceGroups() {
    this._resourceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups.internalValue;
  }

  // stop_policy - computed: false, optional: true, required: false
  private _stopPolicy?: string; 
  public get stopPolicy() {
    return this.getStringAttribute('stop_policy');
  }
  public set stopPolicy(value: string) {
    this._stopPolicy = value;
  }
  public resetStopPolicy() {
    this._stopPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopPolicyInput() {
    return this._stopPolicy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest k8s_kueue_x_k8s_io_cluster_queue_v1beta1_manifest}
*/
export class DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kueue_x_k8s_io_cluster_queue_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKueueXK8SIoClusterQueueV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kueue_x_k8s_io_cluster_queue_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kueue_x_k8s_io_cluster_queue_v1beta1_manifest k8s_kueue_x_k8s_io_cluster_queue_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kueue_x_k8s_io_cluster_queue_v1beta1_manifest',
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
  private _metadata = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpec) {
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
      metadata: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoClusterQueueV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
