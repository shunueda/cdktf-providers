// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID of the member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#cluster_id DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * ClusterSet this member belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#cluster_set_id DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest#cluster_set_id}
  */
  readonly clusterSetId?: string;
  /**
  * Leader cluster this member has selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#leader_cluster_id DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest#leader_cluster_id}
  */
  readonly leaderClusterId?: string;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#metadata DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadata;
}
export interface DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#annotations DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#labels DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#name DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#namespace DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest k8s_multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest}
*/
export class DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest k8s_multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_multicluster_crd_antrea_io_member_cluster_announce_v1alpha1_manifest',
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
    this._clusterId = config.clusterId;
    this._clusterSetId = config.clusterSetId;
    this._leaderClusterId = config.leaderClusterId;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_set_id - computed: false, optional: true, required: false
  private _clusterSetId?: string; 
  public get clusterSetId() {
    return this.getStringAttribute('cluster_set_id');
  }
  public set clusterSetId(value: string) {
    this._clusterSetId = value;
  }
  public resetClusterSetId() {
    this._clusterSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSetIdInput() {
    return this._clusterSetId;
  }

  // leader_cluster_id - computed: false, optional: true, required: false
  private _leaderClusterId?: string; 
  public get leaderClusterId() {
    return this.getStringAttribute('leader_cluster_id');
  }
  public set leaderClusterId(value: string) {
    this._leaderClusterId = value;
  }
  public resetLeaderClusterId() {
    this._leaderClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderClusterIdInput() {
    return this._leaderClusterId;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_set_id: cdktf.stringToTerraform(this._clusterSetId),
      leader_cluster_id: cdktf.stringToTerraform(this._leaderClusterId),
      metadata: dataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_set_id: {
        value: cdktf.stringToHclTerraform(this._clusterSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leader_cluster_id: {
        value: cdktf.stringToHclTerraform(this._leaderClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: dataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMulticlusterCrdAntreaIoMemberClusterAnnounceV1Alpha1ManifestMetadata",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
