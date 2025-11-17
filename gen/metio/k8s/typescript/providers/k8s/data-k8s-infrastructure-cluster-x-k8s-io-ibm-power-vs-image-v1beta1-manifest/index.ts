// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadata;
  /**
  * IBMPowerVSImageSpec defines the desired state of IBMPowerVSImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#namespace DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpec {
  /**
  * Cloud Object Storage bucket name; bucket-name[/optional/folder]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#bucket DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#bucket}
  */
  readonly bucket: string;
  /**
  * ClusterName is the name of the Cluster this object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#cluster_name DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * DeletePolicy defines the policy used to identify images to be preserved beyond the lifecycle of associated cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#delete_policy DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#delete_policy}
  */
  readonly deletePolicy?: string;
  /**
  * Cloud Object Storage image filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#object DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#object}
  */
  readonly object: string;
  /**
  * Cloud Object Storage region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#region DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#region}
  */
  readonly region: string;
  /**
  * ServiceInstanceID is the id of the power cloud instance where the image will get imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#service_instance_id DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * Type of storage, storage pool with the most available space will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#storage_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest#storage_type}
  */
  readonly storageType?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    delete_policy: cdktf.stringToTerraform(struct!.deletePolicy),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
    service_instance_id: cdktf.stringToTerraform(struct!.serviceInstanceId),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._deletePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePolicy = this._deletePolicy;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceId = this._serviceInstanceId;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._clusterName = undefined;
      this._deletePolicy = undefined;
      this._object = undefined;
      this._region = undefined;
      this._serviceInstanceId = undefined;
      this._storageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._clusterName = value.clusterName;
      this._deletePolicy = value.deletePolicy;
      this._object = value.object;
      this._region = value.region;
      this._serviceInstanceId = value.serviceInstanceId;
      this._storageType = value.storageType;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // delete_policy - computed: false, optional: true, required: false
  private _deletePolicy?: string; 
  public get deletePolicy() {
    return this.getStringAttribute('delete_policy');
  }
  public set deletePolicy(value: string) {
    this._deletePolicy = value;
  }
  public resetDeletePolicy() {
    this._deletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyInput() {
    return this._deletePolicy;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_instance_id - computed: false, optional: false, required: true
  private _serviceInstanceId?: string; 
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }
  public set serviceInstanceId(value: string) {
    this._serviceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdInput() {
    return this._serviceInstanceId;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta1_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
