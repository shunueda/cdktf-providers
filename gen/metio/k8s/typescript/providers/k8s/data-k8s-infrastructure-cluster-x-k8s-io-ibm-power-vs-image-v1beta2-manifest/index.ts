// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadata;
  /**
  * IBMPowerVSImageSpec defines the desired state of IBMPowerVSImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#namespace DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstance {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstanceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstanceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpec {
  /**
  * Cloud Object Storage bucket name; bucket-name[/optional/folder]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#bucket DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#bucket}
  */
  readonly bucket: string;
  /**
  * ClusterName is the name of the Cluster this object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#cluster_name DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * DeletePolicy defines the policy used to identify images to be preserved beyond the lifecycle of associated cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#delete_policy DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#delete_policy}
  */
  readonly deletePolicy?: string;
  /**
  * Cloud Object Storage image filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#object DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#object}
  */
  readonly object: string;
  /**
  * Cloud Object Storage region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#region DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#region}
  */
  readonly region: string;
  /**
  * serviceInstance is the reference to the Power VS workspace on which the server instance(VM) will be created. Power VS workspace is a container for all Power VS instances at a specific geographic region. serviceInstance can be created via IBM Cloud catalog or CLI. supported serviceInstance identifier in PowerVSResource are Name and ID and that can be obtained from IBM Cloud UI or IBM Cloud cli. More detail about Power VS service instance. https://cloud.ibm.com/docs/power-iaas?topic=power-iaas-creating-power-virtual-server when omitted system will dynamically create the service instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#service_instance DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#service_instance}
  */
  readonly serviceInstance?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstance;
  /**
  * ServiceInstanceID is the id of the power cloud instance where the image will get imported. Deprecated: use ServiceInstance instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#service_instance_id DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * Type of storage, storage pool with the most available space will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#storage_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest#storage_type}
  */
  readonly storageType?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpec | cdktf.IResolvable): any {
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
    service_instance: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstanceToTerraform(struct!.serviceInstance),
    service_instance_id: cdktf.stringToTerraform(struct!.serviceInstanceId),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpec | cdktf.IResolvable): any {
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
    service_instance: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstanceToHclTerraform(struct!.serviceInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstance",
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._serviceInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstance = this._serviceInstance?.internalValue;
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._clusterName = undefined;
      this._deletePolicy = undefined;
      this._object = undefined;
      this._region = undefined;
      this._serviceInstance.internalValue = undefined;
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
      this._serviceInstance.internalValue = value.serviceInstance;
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

  // service_instance - computed: false, optional: true, required: false
  private _serviceInstance = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstanceOutputReference(this, "service_instance");
  public get serviceInstance() {
    return this._serviceInstance;
  }
  public putServiceInstance(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecServiceInstance) {
    this._serviceInstance.internalValue = value;
  }
  public resetServiceInstance() {
    this._serviceInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceInput() {
    return this._serviceInstance.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_image_v1beta2_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsImageV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
