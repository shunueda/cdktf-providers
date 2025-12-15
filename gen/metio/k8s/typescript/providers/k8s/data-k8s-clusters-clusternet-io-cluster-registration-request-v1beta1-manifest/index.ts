// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#metadata DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadata;
  /**
  * ClusterRegistrationRequestSpec defines the desired state of ClusterRegistrationRequest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#spec DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpec;
}
export interface DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#annotations DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#labels DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#name DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadataToTerraform(struct?: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpec {
  /**
  * ClusterID, a Random (Version 4) UUID, is a unique value in time and space value representing for child cluster. It is typically generated by the clusternet agent on the successful creation of a 'clusternet-agent' Lease in the child cluster. Also it is not allowed to change on PUT operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#cluster_id DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#cluster_id}
  */
  readonly clusterId: string;
  /**
  * ClusterLabels is the labels of the child cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#cluster_labels DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#cluster_labels}
  */
  readonly clusterLabels?: { [key: string]: string };
  /**
  * ClusterName is the cluster name. a lower case alphanumeric characters or '-', and must start and end with an alphanumeric character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#cluster_name DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * ClusterNamespace is the dedicated namespace of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#cluster_namespace DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#cluster_namespace}
  */
  readonly clusterNamespace?: string;
  /**
  * ClusterType denotes the type of the child cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#cluster_type DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * SyncMode decides how to sync resources from parent cluster to child cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#sync_mode DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest#sync_mode}
  */
  readonly syncMode?: string;
}

export function dataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpecToTerraform(struct?: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clusterLabels),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_namespace: cdktf.stringToTerraform(struct!.clusterNamespace),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
  }
}


export function dataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clusterLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_namespace: {
      value: cdktf.stringToHclTerraform(struct!.clusterNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_mode: {
      value: cdktf.stringToHclTerraform(struct!.syncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLabels = this._clusterLabels;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNamespace = this._clusterNamespace;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._clusterLabels = undefined;
      this._clusterName = undefined;
      this._clusterNamespace = undefined;
      this._clusterType = undefined;
      this._syncMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._clusterLabels = value.clusterLabels;
      this._clusterName = value.clusterName;
      this._clusterNamespace = value.clusterNamespace;
      this._clusterType = value.clusterType;
      this._syncMode = value.syncMode;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_labels - computed: false, optional: true, required: false
  private _clusterLabels?: { [key: string]: string }; 
  public get clusterLabels() {
    return this.getStringMapAttribute('cluster_labels');
  }
  public set clusterLabels(value: { [key: string]: string }) {
    this._clusterLabels = value;
  }
  public resetClusterLabels() {
    this._clusterLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsInput() {
    return this._clusterLabels;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_namespace - computed: false, optional: true, required: false
  private _clusterNamespace?: string; 
  public get clusterNamespace() {
    return this.getStringAttribute('cluster_namespace');
  }
  public set clusterNamespace(value: string) {
    this._clusterNamespace = value;
  }
  public resetClusterNamespace() {
    this._clusterNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamespaceInput() {
    return this._clusterNamespace;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest k8s_clusters_clusternet_io_cluster_registration_request_v1beta1_manifest}
*/
export class DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_clusters_clusternet_io_cluster_registration_request_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_clusters_clusternet_io_cluster_registration_request_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/clusters_clusternet_io_cluster_registration_request_v1beta1_manifest k8s_clusters_clusternet_io_cluster_registration_request_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_clusters_clusternet_io_cluster_registration_request_v1beta1_manifest',
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
  private _metadata = new DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpec) {
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
      metadata: dataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustersClusternetIoClusterRegistrationRequestV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
