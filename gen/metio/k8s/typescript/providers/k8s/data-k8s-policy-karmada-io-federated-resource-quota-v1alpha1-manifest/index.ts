// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#metadata DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#spec DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpec;
}
export interface DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#annotations DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#labels DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#name DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#namespace DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignments {
  /**
  * ClusterName is the name of the cluster the limits enforce to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#cluster_name DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Hard is the set of desired hard limits for each named resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#hard DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#hard}
  */
  readonly hard: { [key: string]: string };
}

export function dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsToTerraform(struct?: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hard),
  }
}


export function dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsToHclTerraform(struct?: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hard),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._hard !== undefined) {
      hasAnyValues = true;
      internalValueResult.hard = this._hard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._hard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._hard = value.hard;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // hard - computed: false, optional: false, required: true
  private _hard?: { [key: string]: string }; 
  public get hard() {
    return this.getStringMapAttribute('hard');
  }
  public set hard(value: { [key: string]: string }) {
    this._hard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardInput() {
    return this._hard;
  }
}

export class DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsOutputReference {
    return new DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpec {
  /**
  * Overall is the set of desired hard limits for each named resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#overall DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#overall}
  */
  readonly overall: { [key: string]: string };
  /**
  * StaticAssignments represents the subset of desired hard limits for each cluster. Note: for clusters not present in this list, Karmada will set an empty ResourceQuota to them, which means these clusters will have no quotas in the referencing namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#static_assignments DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest#static_assignments}
  */
  readonly staticAssignments?: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignments[] | cdktf.IResolvable;
}

export function dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecToTerraform(struct?: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overall: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overall),
    static_assignments: cdktf.listMapper(dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsToTerraform, false)(struct!.staticAssignments),
  }
}


export function dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overall: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overall),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    static_assignments: {
      value: cdktf.listMapperHcl(dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsToHclTerraform, false)(struct!.staticAssignments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overall !== undefined) {
      hasAnyValues = true;
      internalValueResult.overall = this._overall;
    }
    if (this._staticAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticAssignments = this._staticAssignments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overall = undefined;
      this._staticAssignments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overall = value.overall;
      this._staticAssignments.internalValue = value.staticAssignments;
    }
  }

  // overall - computed: false, optional: false, required: true
  private _overall?: { [key: string]: string }; 
  public get overall() {
    return this.getStringMapAttribute('overall');
  }
  public set overall(value: { [key: string]: string }) {
    this._overall = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overallInput() {
    return this._overall;
  }

  // static_assignments - computed: false, optional: true, required: false
  private _staticAssignments = new DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignmentsList(this, "static_assignments", false);
  public get staticAssignments() {
    return this._staticAssignments;
  }
  public putStaticAssignments(value: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecStaticAssignments[] | cdktf.IResolvable) {
    this._staticAssignments.internalValue = value;
  }
  public resetStaticAssignments() {
    this._staticAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAssignmentsInput() {
    return this._staticAssignments.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest k8s_policy_karmada_io_federated_resource_quota_v1alpha1_manifest}
*/
export class DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_policy_karmada_io_federated_resource_quota_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_policy_karmada_io_federated_resource_quota_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_karmada_io_federated_resource_quota_v1alpha1_manifest k8s_policy_karmada_io_federated_resource_quota_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_policy_karmada_io_federated_resource_quota_v1alpha1_manifest',
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
  private _metadata = new DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpec) {
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
      metadata: dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyKarmadaIoFederatedResourceQuotaV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
