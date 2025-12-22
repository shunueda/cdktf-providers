// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKueueXK8SIoCohortV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#metadata DataK8SKueueXK8SIoCohortV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadata;
  /**
  * CohortSpec defines the desired state of Cohort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#spec DataK8SKueueXK8SIoCohortV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpec;
}
export interface DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#annotations DataK8SKueueXK8SIoCohortV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#labels DataK8SKueueXK8SIoCohortV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#name DataK8SKueueXK8SIoCohortV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResources {
  /**
  * borrowingLimit is the maximum amount of quota for the [flavor, resource] combination that this ClusterQueue is allowed to borrow from the unused quota of other ClusterQueues in the same cohort. In total, at a given time, Workloads in a ClusterQueue can consume a quantity of quota equal to nominalQuota+borrowingLimit, assuming the other ClusterQueues in the cohort have enough unused quota. If null, it means that there is no borrowing limit. If not null, it must be non-negative. borrowingLimit must be null if spec.cohort is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#borrowing_limit DataK8SKueueXK8SIoCohortV1Alpha1Manifest#borrowing_limit}
  */
  readonly borrowingLimit?: string;
  /**
  * lendingLimit is the maximum amount of unused quota for the [flavor, resource] combination that this ClusterQueue can lend to other ClusterQueues in the same cohort. In total, at a given time, ClusterQueue reserves for its exclusive use a quantity of quota equals to nominalQuota - lendingLimit. If null, it means that there is no lending limit, meaning that all the nominalQuota can be borrowed by other clusterQueues in the cohort. If not null, it must be non-negative. lendingLimit must be null if spec.cohort is empty. This field is in beta stage and is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#lending_limit DataK8SKueueXK8SIoCohortV1Alpha1Manifest#lending_limit}
  */
  readonly lendingLimit?: string;
  /**
  * name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#name DataK8SKueueXK8SIoCohortV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nominalQuota is the quantity of this resource that is available for Workloads admitted by this ClusterQueue at a point in time. The nominalQuota must be non-negative. nominalQuota should represent the resources in the cluster available for running jobs (after discounting resources consumed by system components and pods not managed by kueue). In an autoscaled cluster, nominalQuota should account for resources that can be provided by a component such as Kubernetes cluster-autoscaler. If the ClusterQueue belongs to a cohort, the sum of the quotas for each (flavor, resource) combination defines the maximum quantity that can be allocated by a ClusterQueue in the cohort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#nominal_quota DataK8SKueueXK8SIoCohortV1Alpha1Manifest#nominal_quota}
  */
  readonly nominalQuota: string;
}

export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesToTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResources | cdktf.IResolvable): any {
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


export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesToHclTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResources | cdktf.IResolvable): any {
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

export class DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResources | cdktf.IResolvable | undefined) {
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

export class DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesOutputReference {
    return new DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavors {
  /**
  * name of this flavor. The name should match the .metadata.name of a ResourceFlavor. If a matching ResourceFlavor does not exist, the ClusterQueue will have an Active condition set to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#name DataK8SKueueXK8SIoCohortV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * resources is the list of quotas for this flavor per resource. There could be up to 16 resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#resources DataK8SKueueXK8SIoCohortV1Alpha1Manifest#resources}
  */
  readonly resources: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResources[] | cdktf.IResolvable;
}

export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsToTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: cdktf.listMapper(dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesToTerraform, false)(struct!.resources),
  }
}


export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsToHclTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavors | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsOutputReference {
    return new DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroups {
  /**
  * coveredResources is the list of resources covered by the flavors in this group. Examples: cpu, memory, vendor.com/gpu. The list cannot be empty and it can contain up to 16 resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#covered_resources DataK8SKueueXK8SIoCohortV1Alpha1Manifest#covered_resources}
  */
  readonly coveredResources: string[];
  /**
  * flavors is the list of flavors that provide the resources of this group. Typically, different flavors represent different hardware models (e.g., gpu models, cpu architectures) or pricing models (on-demand vs spot cpus). Each flavor MUST list all the resources listed for this group in the same order as the .resources field. The list cannot be empty and it can contain up to 16 flavors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#flavors DataK8SKueueXK8SIoCohortV1Alpha1Manifest#flavors}
  */
  readonly flavors: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavors[] | cdktf.IResolvable;
}

export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsToTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    covered_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.coveredResources),
    flavors: cdktf.listMapper(dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsToTerraform, false)(struct!.flavors),
  }
}


export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsToHclTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroups | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsToHclTerraform, false)(struct!.flavors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroups | cdktf.IResolvable | undefined) {
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
  private _flavors = new DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavorsList(this, "flavors", false);
  public get flavors() {
    return this._flavors;
  }
  public putFlavors(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsFlavors[] | cdktf.IResolvable) {
    this._flavors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorsInput() {
    return this._flavors.internalValue;
  }
}

export class DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsOutputReference {
    return new DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpec {
  /**
  * Parent references the name of the Cohort's parent, if any. It satisfies one of three cases: 1) Unset. This Cohort is the root of its Cohort tree. 2) References a non-existent Cohort. We use default Cohort (no borrowing/lending limits). 3) References an existent Cohort. If a cycle is created, we disable all members of the Cohort, including ClusterQueues, until the cycle is removed. We prevent further admission while the cycle exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#parent DataK8SKueueXK8SIoCohortV1Alpha1Manifest#parent}
  */
  readonly parent?: string;
  /**
  * ResourceGroups describes groupings of Resources and Flavors. Each ResourceGroup defines a list of Resources and a list of Flavors which provide quotas for these Resources. Each Resource and each Flavor may only form part of one ResourceGroup. There may be up to 16 ResourceGroups within a Cohort. BorrowingLimit limits how much members of this Cohort subtree can borrow from the parent subtree. LendingLimit limits how much members of this Cohort subtree can lend to the parent subtree. Borrowing and Lending limits must only be set when the Cohort has a parent. Otherwise, the Cohort create/update will be rejected by the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#resource_groups DataK8SKueueXK8SIoCohortV1Alpha1Manifest#resource_groups}
  */
  readonly resourceGroups?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroups[] | cdktf.IResolvable;
}

export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    resource_groups: cdktf.listMapper(dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsToTerraform, false)(struct!.resourceGroups),
  }
}


export function dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_groups: {
      value: cdktf.listMapperHcl(dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsToHclTerraform, false)(struct!.resourceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._resourceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parent = undefined;
      this._resourceGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parent = value.parent;
      this._resourceGroups.internalValue = value.resourceGroups;
    }
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups = new DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroupsList(this, "resource_groups", false);
  public get resourceGroups() {
    return this._resourceGroups;
  }
  public putResourceGroups(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecResourceGroups[] | cdktf.IResolvable) {
    this._resourceGroups.internalValue = value;
  }
  public resetResourceGroups() {
    this._resourceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest k8s_kueue_x_k8s_io_cohort_v1alpha1_manifest}
*/
export class DataK8SKueueXK8SIoCohortV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kueue_x_k8s_io_cohort_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKueueXK8SIoCohortV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKueueXK8SIoCohortV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKueueXK8SIoCohortV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKueueXK8SIoCohortV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kueue_x_k8s_io_cohort_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kueue_x_k8s_io_cohort_v1alpha1_manifest k8s_kueue_x_k8s_io_cohort_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKueueXK8SIoCohortV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKueueXK8SIoCohortV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kueue_x_k8s_io_cohort_v1alpha1_manifest',
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
  private _metadata = new DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoCohortV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKueueXK8SIoCohortV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKueueXK8SIoCohortV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
