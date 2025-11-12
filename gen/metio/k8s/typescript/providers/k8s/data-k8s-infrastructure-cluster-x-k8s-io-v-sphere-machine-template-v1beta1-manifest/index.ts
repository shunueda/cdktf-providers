// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#metadata DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadata;
  /**
  * VSphereMachineTemplateSpec defines the desired state of VSphereMachineTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#annotations DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#namespace DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#annotations DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPools {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#api_group DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#kind DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPools[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4Overrides {
  /**
  * Hostname is the name which will be sent to the DHCP server instead of the machine's hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#hostname DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * RouteMetric is used to prioritize routes for devices. A lower metric for an interface will have a higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#route_metric DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#route_metric}
  */
  readonly routeMetric?: number;
  /**
  * SendHostname when 'true', the hostname of the machine will be sent to the DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#send_hostname DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#send_hostname}
  */
  readonly sendHostname?: boolean | cdktf.IResolvable;
  /**
  * UseDNS when 'true', the DNS servers in the DHCP server will be used and take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_dns DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_dns}
  */
  readonly useDns?: boolean | cdktf.IResolvable;
  /**
  * UseDomains can take the values 'true', 'false', or 'route'. When 'true', the domain name from the DHCP server will be used as the DNS search domain for this device. When 'route', the domain name from the DHCP response will be used for routing DNS only, not for searching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_domains DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_domains}
  */
  readonly useDomains?: string;
  /**
  * UseHostname when 'true', the hostname from the DHCP server will be set as the transient hostname of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_hostname DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_hostname}
  */
  readonly useHostname?: boolean | cdktf.IResolvable;
  /**
  * UseMTU when 'true', the MTU from the DHCP server will be set as the MTU of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_mtu DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_mtu}
  */
  readonly useMtu?: boolean | cdktf.IResolvable;
  /**
  * UseNTP when 'true', the NTP servers from the DHCP server will be used by systemd-timesyncd and take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_ntp DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_ntp}
  */
  readonly useNtp?: boolean | cdktf.IResolvable;
  /**
  * UseRoutes when 'true', the routes from the DHCP server will be installed in the routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_routes DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_routes}
  */
  readonly useRoutes?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4OverridesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4Overrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    route_metric: cdktf.numberToTerraform(struct!.routeMetric),
    send_hostname: cdktf.booleanToTerraform(struct!.sendHostname),
    use_dns: cdktf.booleanToTerraform(struct!.useDns),
    use_domains: cdktf.stringToTerraform(struct!.useDomains),
    use_hostname: cdktf.booleanToTerraform(struct!.useHostname),
    use_mtu: cdktf.booleanToTerraform(struct!.useMtu),
    use_ntp: cdktf.booleanToTerraform(struct!.useNtp),
    use_routes: cdktf.stringToTerraform(struct!.useRoutes),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4OverridesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4Overrides | cdktf.IResolvable): any {
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
    route_metric: {
      value: cdktf.numberToHclTerraform(struct!.routeMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.sendHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_dns: {
      value: cdktf.booleanToHclTerraform(struct!.useDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_domains: {
      value: cdktf.stringToHclTerraform(struct!.useDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.useHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_mtu: {
      value: cdktf.booleanToHclTerraform(struct!.useMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ntp: {
      value: cdktf.booleanToHclTerraform(struct!.useNtp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_routes: {
      value: cdktf.stringToHclTerraform(struct!.useRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4OverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4Overrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._routeMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMetric = this._routeMetric;
    }
    if (this._sendHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHostname = this._sendHostname;
    }
    if (this._useDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDns = this._useDns;
    }
    if (this._useDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDomains = this._useDomains;
    }
    if (this._useHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostname = this._useHostname;
    }
    if (this._useMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtu = this._useMtu;
    }
    if (this._useNtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNtp = this._useNtp;
    }
    if (this._useRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRoutes = this._useRoutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4Overrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._routeMetric = undefined;
      this._sendHostname = undefined;
      this._useDns = undefined;
      this._useDomains = undefined;
      this._useHostname = undefined;
      this._useMtu = undefined;
      this._useNtp = undefined;
      this._useRoutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._routeMetric = value.routeMetric;
      this._sendHostname = value.sendHostname;
      this._useDns = value.useDns;
      this._useDomains = value.useDomains;
      this._useHostname = value.useHostname;
      this._useMtu = value.useMtu;
      this._useNtp = value.useNtp;
      this._useRoutes = value.useRoutes;
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

  // route_metric - computed: false, optional: true, required: false
  private _routeMetric?: number; 
  public get routeMetric() {
    return this.getNumberAttribute('route_metric');
  }
  public set routeMetric(value: number) {
    this._routeMetric = value;
  }
  public resetRouteMetric() {
    this._routeMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMetricInput() {
    return this._routeMetric;
  }

  // send_hostname - computed: false, optional: true, required: false
  private _sendHostname?: boolean | cdktf.IResolvable; 
  public get sendHostname() {
    return this.getBooleanAttribute('send_hostname');
  }
  public set sendHostname(value: boolean | cdktf.IResolvable) {
    this._sendHostname = value;
  }
  public resetSendHostname() {
    this._sendHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHostnameInput() {
    return this._sendHostname;
  }

  // use_dns - computed: false, optional: true, required: false
  private _useDns?: boolean | cdktf.IResolvable; 
  public get useDns() {
    return this.getBooleanAttribute('use_dns');
  }
  public set useDns(value: boolean | cdktf.IResolvable) {
    this._useDns = value;
  }
  public resetUseDns() {
    this._useDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDnsInput() {
    return this._useDns;
  }

  // use_domains - computed: false, optional: true, required: false
  private _useDomains?: string; 
  public get useDomains() {
    return this.getStringAttribute('use_domains');
  }
  public set useDomains(value: string) {
    this._useDomains = value;
  }
  public resetUseDomains() {
    this._useDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainsInput() {
    return this._useDomains;
  }

  // use_hostname - computed: false, optional: true, required: false
  private _useHostname?: boolean | cdktf.IResolvable; 
  public get useHostname() {
    return this.getBooleanAttribute('use_hostname');
  }
  public set useHostname(value: boolean | cdktf.IResolvable) {
    this._useHostname = value;
  }
  public resetUseHostname() {
    this._useHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostnameInput() {
    return this._useHostname;
  }

  // use_mtu - computed: false, optional: true, required: false
  private _useMtu?: boolean | cdktf.IResolvable; 
  public get useMtu() {
    return this.getBooleanAttribute('use_mtu');
  }
  public set useMtu(value: boolean | cdktf.IResolvable) {
    this._useMtu = value;
  }
  public resetUseMtu() {
    this._useMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtuInput() {
    return this._useMtu;
  }

  // use_ntp - computed: false, optional: true, required: false
  private _useNtp?: boolean | cdktf.IResolvable; 
  public get useNtp() {
    return this.getBooleanAttribute('use_ntp');
  }
  public set useNtp(value: boolean | cdktf.IResolvable) {
    this._useNtp = value;
  }
  public resetUseNtp() {
    this._useNtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNtpInput() {
    return this._useNtp;
  }

  // use_routes - computed: false, optional: true, required: false
  private _useRoutes?: string; 
  public get useRoutes() {
    return this.getStringAttribute('use_routes');
  }
  public set useRoutes(value: string) {
    this._useRoutes = value;
  }
  public resetUseRoutes() {
    this._useRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRoutesInput() {
    return this._useRoutes;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6Overrides {
  /**
  * Hostname is the name which will be sent to the DHCP server instead of the machine's hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#hostname DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * RouteMetric is used to prioritize routes for devices. A lower metric for an interface will have a higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#route_metric DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#route_metric}
  */
  readonly routeMetric?: number;
  /**
  * SendHostname when 'true', the hostname of the machine will be sent to the DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#send_hostname DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#send_hostname}
  */
  readonly sendHostname?: boolean | cdktf.IResolvable;
  /**
  * UseDNS when 'true', the DNS servers in the DHCP server will be used and take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_dns DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_dns}
  */
  readonly useDns?: boolean | cdktf.IResolvable;
  /**
  * UseDomains can take the values 'true', 'false', or 'route'. When 'true', the domain name from the DHCP server will be used as the DNS search domain for this device. When 'route', the domain name from the DHCP response will be used for routing DNS only, not for searching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_domains DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_domains}
  */
  readonly useDomains?: string;
  /**
  * UseHostname when 'true', the hostname from the DHCP server will be set as the transient hostname of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_hostname DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_hostname}
  */
  readonly useHostname?: boolean | cdktf.IResolvable;
  /**
  * UseMTU when 'true', the MTU from the DHCP server will be set as the MTU of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_mtu DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_mtu}
  */
  readonly useMtu?: boolean | cdktf.IResolvable;
  /**
  * UseNTP when 'true', the NTP servers from the DHCP server will be used by systemd-timesyncd and take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_ntp DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_ntp}
  */
  readonly useNtp?: boolean | cdktf.IResolvable;
  /**
  * UseRoutes when 'true', the routes from the DHCP server will be installed in the routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#use_routes DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#use_routes}
  */
  readonly useRoutes?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6OverridesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6Overrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    route_metric: cdktf.numberToTerraform(struct!.routeMetric),
    send_hostname: cdktf.booleanToTerraform(struct!.sendHostname),
    use_dns: cdktf.booleanToTerraform(struct!.useDns),
    use_domains: cdktf.stringToTerraform(struct!.useDomains),
    use_hostname: cdktf.booleanToTerraform(struct!.useHostname),
    use_mtu: cdktf.booleanToTerraform(struct!.useMtu),
    use_ntp: cdktf.booleanToTerraform(struct!.useNtp),
    use_routes: cdktf.stringToTerraform(struct!.useRoutes),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6OverridesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6Overrides | cdktf.IResolvable): any {
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
    route_metric: {
      value: cdktf.numberToHclTerraform(struct!.routeMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.sendHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_dns: {
      value: cdktf.booleanToHclTerraform(struct!.useDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_domains: {
      value: cdktf.stringToHclTerraform(struct!.useDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.useHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_mtu: {
      value: cdktf.booleanToHclTerraform(struct!.useMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ntp: {
      value: cdktf.booleanToHclTerraform(struct!.useNtp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_routes: {
      value: cdktf.stringToHclTerraform(struct!.useRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6OverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6Overrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._routeMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMetric = this._routeMetric;
    }
    if (this._sendHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHostname = this._sendHostname;
    }
    if (this._useDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDns = this._useDns;
    }
    if (this._useDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDomains = this._useDomains;
    }
    if (this._useHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostname = this._useHostname;
    }
    if (this._useMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtu = this._useMtu;
    }
    if (this._useNtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNtp = this._useNtp;
    }
    if (this._useRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRoutes = this._useRoutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6Overrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._routeMetric = undefined;
      this._sendHostname = undefined;
      this._useDns = undefined;
      this._useDomains = undefined;
      this._useHostname = undefined;
      this._useMtu = undefined;
      this._useNtp = undefined;
      this._useRoutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._routeMetric = value.routeMetric;
      this._sendHostname = value.sendHostname;
      this._useDns = value.useDns;
      this._useDomains = value.useDomains;
      this._useHostname = value.useHostname;
      this._useMtu = value.useMtu;
      this._useNtp = value.useNtp;
      this._useRoutes = value.useRoutes;
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

  // route_metric - computed: false, optional: true, required: false
  private _routeMetric?: number; 
  public get routeMetric() {
    return this.getNumberAttribute('route_metric');
  }
  public set routeMetric(value: number) {
    this._routeMetric = value;
  }
  public resetRouteMetric() {
    this._routeMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMetricInput() {
    return this._routeMetric;
  }

  // send_hostname - computed: false, optional: true, required: false
  private _sendHostname?: boolean | cdktf.IResolvable; 
  public get sendHostname() {
    return this.getBooleanAttribute('send_hostname');
  }
  public set sendHostname(value: boolean | cdktf.IResolvable) {
    this._sendHostname = value;
  }
  public resetSendHostname() {
    this._sendHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHostnameInput() {
    return this._sendHostname;
  }

  // use_dns - computed: false, optional: true, required: false
  private _useDns?: boolean | cdktf.IResolvable; 
  public get useDns() {
    return this.getBooleanAttribute('use_dns');
  }
  public set useDns(value: boolean | cdktf.IResolvable) {
    this._useDns = value;
  }
  public resetUseDns() {
    this._useDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDnsInput() {
    return this._useDns;
  }

  // use_domains - computed: false, optional: true, required: false
  private _useDomains?: string; 
  public get useDomains() {
    return this.getStringAttribute('use_domains');
  }
  public set useDomains(value: string) {
    this._useDomains = value;
  }
  public resetUseDomains() {
    this._useDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainsInput() {
    return this._useDomains;
  }

  // use_hostname - computed: false, optional: true, required: false
  private _useHostname?: boolean | cdktf.IResolvable; 
  public get useHostname() {
    return this.getBooleanAttribute('use_hostname');
  }
  public set useHostname(value: boolean | cdktf.IResolvable) {
    this._useHostname = value;
  }
  public resetUseHostname() {
    this._useHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostnameInput() {
    return this._useHostname;
  }

  // use_mtu - computed: false, optional: true, required: false
  private _useMtu?: boolean | cdktf.IResolvable; 
  public get useMtu() {
    return this.getBooleanAttribute('use_mtu');
  }
  public set useMtu(value: boolean | cdktf.IResolvable) {
    this._useMtu = value;
  }
  public resetUseMtu() {
    this._useMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtuInput() {
    return this._useMtu;
  }

  // use_ntp - computed: false, optional: true, required: false
  private _useNtp?: boolean | cdktf.IResolvable; 
  public get useNtp() {
    return this.getBooleanAttribute('use_ntp');
  }
  public set useNtp(value: boolean | cdktf.IResolvable) {
    this._useNtp = value;
  }
  public resetUseNtp() {
    this._useNtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNtpInput() {
    return this._useNtp;
  }

  // use_routes - computed: false, optional: true, required: false
  private _useRoutes?: string; 
  public get useRoutes() {
    return this.getStringAttribute('use_routes');
  }
  public set useRoutes(value: string) {
    this._useRoutes = value;
  }
  public resetUseRoutes() {
    this._useRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRoutesInput() {
    return this._useRoutes;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutes {
  /**
  * Metric is the weight/priority of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#metric DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#metric}
  */
  readonly metric: number;
  /**
  * To is an IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#to DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#to}
  */
  readonly to: string;
  /**
  * Via is an IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#via DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#via}
  */
  readonly via: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    to: cdktf.stringToTerraform(struct!.to),
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._to = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._to = value.to;
      this._via = value.via;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevices {
  /**
  * AddressesFromPools is a list of IPAddressPools that should be assigned to IPAddressClaims. The machine's cloud-init metadata will be populated with IPAddresses fulfilled by an IPAM provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#addresses_from_pools DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#addresses_from_pools}
  */
  readonly addressesFromPools?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPools[] | cdktf.IResolvable;
  /**
  * DeviceName may be used to explicitly assign a name to the network device as it exists in the guest operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#device_name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#device_name}
  */
  readonly deviceName?: string;
  /**
  * DHCP4 is a flag that indicates whether or not to use DHCP for IPv4 on this device. If true then IPAddrs should not contain any IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#dhcp4 DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#dhcp4}
  */
  readonly dhcp4?: boolean | cdktf.IResolvable;
  /**
  * DHCP4Overrides allows for the control over several DHCP behaviors. Overrides will only be applied when the corresponding DHCP flag is set. Only configured values will be sent, omitted values will default to distribution defaults. Dependent on support in the network stack for your distribution. For more information see the netplan reference (https://netplan.io/reference#dhcp-overrides)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#dhcp4_overrides DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#dhcp4_overrides}
  */
  readonly dhcp4Overrides?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4Overrides;
  /**
  * DHCP6 is a flag that indicates whether or not to use DHCP for IPv6 on this device. If true then IPAddrs should not contain any IPv6 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#dhcp6 DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#dhcp6}
  */
  readonly dhcp6?: boolean | cdktf.IResolvable;
  /**
  * DHCP6Overrides allows for the control over several DHCP behaviors. Overrides will only be applied when the corresponding DHCP flag is set. Only configured values will be sent, omitted values will default to distribution defaults. Dependent on support in the network stack for your distribution. For more information see the netplan reference (https://netplan.io/reference#dhcp-overrides)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#dhcp6_overrides DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#dhcp6_overrides}
  */
  readonly dhcp6Overrides?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6Overrides;
  /**
  * Gateway4 is the IPv4 gateway used by this device. Required when DHCP4 is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#gateway4 DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#gateway4}
  */
  readonly gateway4?: string;
  /**
  * Gateway4 is the IPv4 gateway used by this device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#gateway6 DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#gateway6}
  */
  readonly gateway6?: string;
  /**
  * IPAddrs is a list of one or more IPv4 and/or IPv6 addresses to assign to this device. IP addresses must also specify the segment length in CIDR notation. Required when DHCP4, DHCP6 and SkipIPAllocation are false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#ip_addrs DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#ip_addrs}
  */
  readonly ipAddrs?: string[];
  /**
  * MACAddr is the MAC address used by this device. It is generally a good idea to omit this field and allow a MAC address to be generated. Please note that this value must use the VMware OUI to work with the in-tree vSphere cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#mac_addr DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * MTU is the device’s Maximum Transmission Unit size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#mtu DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#mtu}
  */
  readonly mtu?: number;
  /**
  * Nameservers is a list of IPv4 and/or IPv6 addresses used as DNS nameservers. Please note that Linux allows only three nameservers (https://linux.die.net/man/5/resolv.conf).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#nameservers DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * NetworkName is the name of the vSphere network to which the device will be connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#network_name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#network_name}
  */
  readonly networkName: string;
  /**
  * Routes is a list of optional, static routes applied to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#routes DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#routes}
  */
  readonly routes?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutes[] | cdktf.IResolvable;
  /**
  * SearchDomains is a list of search domains used when resolving IP addresses with DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#search_domains DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#search_domains}
  */
  readonly searchDomains?: string[];
  /**
  * SkipIPAllocation allows the device to not have IP address or DHCP configured. This is suitable for devices for which IP allocation is handled externally, eg. using Multus CNI. If true, CAPV will not verify IP address allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#skip_ip_allocation DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#skip_ip_allocation}
  */
  readonly skipIpAllocation?: boolean | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses_from_pools: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsToTerraform, false)(struct!.addressesFromPools),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    dhcp4: cdktf.booleanToTerraform(struct!.dhcp4),
    dhcp4_overrides: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4OverridesToTerraform(struct!.dhcp4Overrides),
    dhcp6: cdktf.booleanToTerraform(struct!.dhcp6),
    dhcp6_overrides: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6OverridesToTerraform(struct!.dhcp6Overrides),
    gateway4: cdktf.stringToTerraform(struct!.gateway4),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    ip_addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddrs),
    mac_addr: cdktf.stringToTerraform(struct!.macAddr),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    routes: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesToTerraform, false)(struct!.routes),
    search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchDomains),
    skip_ip_allocation: cdktf.booleanToTerraform(struct!.skipIpAllocation),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses_from_pools: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsToHclTerraform, false)(struct!.addressesFromPools),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsList",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp4: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp4_overrides: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4OverridesToHclTerraform(struct!.dhcp4Overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4Overrides",
    },
    dhcp6: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp6_overrides: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6OverridesToHclTerraform(struct!.dhcp6Overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6Overrides",
    },
    gateway4: {
      value: cdktf.stringToHclTerraform(struct!.gateway4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.macAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesList",
    },
    search_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skip_ip_allocation: {
      value: cdktf.booleanToHclTerraform(struct!.skipIpAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressesFromPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressesFromPools = this._addressesFromPools?.internalValue;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._dhcp4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp4 = this._dhcp4;
    }
    if (this._dhcp4Overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp4Overrides = this._dhcp4Overrides?.internalValue;
    }
    if (this._dhcp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6 = this._dhcp6;
    }
    if (this._dhcp6Overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6Overrides = this._dhcp6Overrides?.internalValue;
    }
    if (this._gateway4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway4 = this._gateway4;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._ipAddrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddrs = this._ipAddrs;
    }
    if (this._macAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddr = this._macAddr;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._searchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomains = this._searchDomains;
    }
    if (this._skipIpAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipIpAllocation = this._skipIpAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressesFromPools.internalValue = undefined;
      this._deviceName = undefined;
      this._dhcp4 = undefined;
      this._dhcp4Overrides.internalValue = undefined;
      this._dhcp6 = undefined;
      this._dhcp6Overrides.internalValue = undefined;
      this._gateway4 = undefined;
      this._gateway6 = undefined;
      this._ipAddrs = undefined;
      this._macAddr = undefined;
      this._mtu = undefined;
      this._nameservers = undefined;
      this._networkName = undefined;
      this._routes.internalValue = undefined;
      this._searchDomains = undefined;
      this._skipIpAllocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressesFromPools.internalValue = value.addressesFromPools;
      this._deviceName = value.deviceName;
      this._dhcp4 = value.dhcp4;
      this._dhcp4Overrides.internalValue = value.dhcp4Overrides;
      this._dhcp6 = value.dhcp6;
      this._dhcp6Overrides.internalValue = value.dhcp6Overrides;
      this._gateway4 = value.gateway4;
      this._gateway6 = value.gateway6;
      this._ipAddrs = value.ipAddrs;
      this._macAddr = value.macAddr;
      this._mtu = value.mtu;
      this._nameservers = value.nameservers;
      this._networkName = value.networkName;
      this._routes.internalValue = value.routes;
      this._searchDomains = value.searchDomains;
      this._skipIpAllocation = value.skipIpAllocation;
    }
  }

  // addresses_from_pools - computed: false, optional: true, required: false
  private _addressesFromPools = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPoolsList(this, "addresses_from_pools", false);
  public get addressesFromPools() {
    return this._addressesFromPools;
  }
  public putAddressesFromPools(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesAddressesFromPools[] | cdktf.IResolvable) {
    this._addressesFromPools.internalValue = value;
  }
  public resetAddressesFromPools() {
    this._addressesFromPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesFromPoolsInput() {
    return this._addressesFromPools.internalValue;
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // dhcp4 - computed: false, optional: true, required: false
  private _dhcp4?: boolean | cdktf.IResolvable; 
  public get dhcp4() {
    return this.getBooleanAttribute('dhcp4');
  }
  public set dhcp4(value: boolean | cdktf.IResolvable) {
    this._dhcp4 = value;
  }
  public resetDhcp4() {
    this._dhcp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp4Input() {
    return this._dhcp4;
  }

  // dhcp4_overrides - computed: false, optional: true, required: false
  private _dhcp4Overrides = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4OverridesOutputReference(this, "dhcp4_overrides");
  public get dhcp4Overrides() {
    return this._dhcp4Overrides;
  }
  public putDhcp4Overrides(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp4Overrides) {
    this._dhcp4Overrides.internalValue = value;
  }
  public resetDhcp4Overrides() {
    this._dhcp4Overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp4OverridesInput() {
    return this._dhcp4Overrides.internalValue;
  }

  // dhcp6 - computed: false, optional: true, required: false
  private _dhcp6?: boolean | cdktf.IResolvable; 
  public get dhcp6() {
    return this.getBooleanAttribute('dhcp6');
  }
  public set dhcp6(value: boolean | cdktf.IResolvable) {
    this._dhcp6 = value;
  }
  public resetDhcp6() {
    this._dhcp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6Input() {
    return this._dhcp6;
  }

  // dhcp6_overrides - computed: false, optional: true, required: false
  private _dhcp6Overrides = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6OverridesOutputReference(this, "dhcp6_overrides");
  public get dhcp6Overrides() {
    return this._dhcp6Overrides;
  }
  public putDhcp6Overrides(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesDhcp6Overrides) {
    this._dhcp6Overrides.internalValue = value;
  }
  public resetDhcp6Overrides() {
    this._dhcp6Overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6OverridesInput() {
    return this._dhcp6Overrides.internalValue;
  }

  // gateway4 - computed: false, optional: true, required: false
  private _gateway4?: string; 
  public get gateway4() {
    return this.getStringAttribute('gateway4');
  }
  public set gateway4(value: string) {
    this._gateway4 = value;
  }
  public resetGateway4() {
    this._gateway4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway4Input() {
    return this._gateway4;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // ip_addrs - computed: false, optional: true, required: false
  private _ipAddrs?: string[]; 
  public get ipAddrs() {
    return this.getListAttribute('ip_addrs');
  }
  public set ipAddrs(value: string[]) {
    this._ipAddrs = value;
  }
  public resetIpAddrs() {
    this._ipAddrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrsInput() {
    return this._ipAddrs;
  }

  // mac_addr - computed: false, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // search_domains - computed: false, optional: true, required: false
  private _searchDomains?: string[]; 
  public get searchDomains() {
    return this.getListAttribute('search_domains');
  }
  public set searchDomains(value: string[]) {
    this._searchDomains = value;
  }
  public resetSearchDomains() {
    this._searchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains;
  }

  // skip_ip_allocation - computed: false, optional: true, required: false
  private _skipIpAllocation?: boolean | cdktf.IResolvable; 
  public get skipIpAllocation() {
    return this.getBooleanAttribute('skip_ip_allocation');
  }
  public set skipIpAllocation(value: boolean | cdktf.IResolvable) {
    this._skipIpAllocation = value;
  }
  public resetSkipIpAllocation() {
    this._skipIpAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipIpAllocationInput() {
    return this._skipIpAllocation;
  }
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutes {
  /**
  * Metric is the weight/priority of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#metric DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#metric}
  */
  readonly metric: number;
  /**
  * To is an IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#to DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#to}
  */
  readonly to: string;
  /**
  * Via is an IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#via DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#via}
  */
  readonly via: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    to: cdktf.stringToTerraform(struct!.to),
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._to = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._to = value.to;
      this._via = value.via;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetwork {
  /**
  * Devices is the list of network devices used by the virtual machine. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#devices DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#devices}
  */
  readonly devices: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevices[] | cdktf.IResolvable;
  /**
  * PreferredAPIServeCIDR is the preferred CIDR for the Kubernetes API server endpoint on this machine Deprecated: This field is going to be removed in a future release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#preferred_api_server_cidr DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#preferred_api_server_cidr}
  */
  readonly preferredApiServerCidr?: string;
  /**
  * Routes is a list of optional, static routes applied to the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#routes DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#routes}
  */
  readonly routes?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutes[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesToTerraform, false)(struct!.devices),
    preferred_api_server_cidr: cdktf.stringToTerraform(struct!.preferredApiServerCidr),
    routes: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesToTerraform, false)(struct!.routes),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesList",
    },
    preferred_api_server_cidr: {
      value: cdktf.stringToHclTerraform(struct!.preferredApiServerCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._preferredApiServerCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredApiServerCidr = this._preferredApiServerCidr;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devices.internalValue = undefined;
      this._preferredApiServerCidr = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devices.internalValue = value.devices;
      this._preferredApiServerCidr = value.preferredApiServerCidr;
      this._routes.internalValue = value.routes;
    }
  }

  // devices - computed: false, optional: false, required: true
  private _devices = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // preferred_api_server_cidr - computed: false, optional: true, required: false
  private _preferredApiServerCidr?: string; 
  public get preferredApiServerCidr() {
    return this.getStringAttribute('preferred_api_server_cidr');
  }
  public set preferredApiServerCidr(value: string) {
    this._preferredApiServerCidr = value;
  }
  public resetPreferredApiServerCidr() {
    this._preferredApiServerCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredApiServerCidrInput() {
    return this._preferredApiServerCidr;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevices {
  /**
  * CustomLabel is the hardware label of a virtual machine's PCI device. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#custom_label DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#custom_label}
  */
  readonly customLabel?: string;
  /**
  * DeviceID is the device ID of a virtual machine's PCI, in integer. Defaults to the eponymous property value in the template from which the virtual machine is cloned. Mutually exclusive with VGPUProfile as VGPUProfile and DeviceID + VendorID are two independent ways to define PCI devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#device_id DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#device_id}
  */
  readonly deviceId?: number;
  /**
  * VGPUProfile is the profile name of a virtual machine's vGPU, in string. Defaults to the eponymous property value in the template from which the virtual machine is cloned. Mutually exclusive with DeviceID and VendorID as VGPUProfile and DeviceID + VendorID are two independent ways to define PCI devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#v_gpu_profile DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#v_gpu_profile}
  */
  readonly vGpuProfile?: string;
  /**
  * VendorId is the vendor ID of a virtual machine's PCI, in integer. Defaults to the eponymous property value in the template from which the virtual machine is cloned. Mutually exclusive with VGPUProfile as VGPUProfile and DeviceID + VendorID are two independent ways to define PCI devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#vendor_id DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#vendor_id}
  */
  readonly vendorId?: number;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    v_gpu_profile: cdktf.stringToTerraform(struct!.vGpuProfile),
    vendor_id: cdktf.numberToTerraform(struct!.vendorId),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_label: {
      value: cdktf.stringToHclTerraform(struct!.customLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_gpu_profile: {
      value: cdktf.stringToHclTerraform(struct!.vGpuProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_id: {
      value: cdktf.numberToHclTerraform(struct!.vendorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._vGpuProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.vGpuProfile = this._vGpuProfile;
    }
    if (this._vendorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorId = this._vendorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customLabel = undefined;
      this._deviceId = undefined;
      this._vGpuProfile = undefined;
      this._vendorId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customLabel = value.customLabel;
      this._deviceId = value.deviceId;
      this._vGpuProfile = value.vGpuProfile;
      this._vendorId = value.vendorId;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // v_gpu_profile - computed: false, optional: true, required: false
  private _vGpuProfile?: string; 
  public get vGpuProfile() {
    return this.getStringAttribute('v_gpu_profile');
  }
  public set vGpuProfile(value: string) {
    this._vGpuProfile = value;
  }
  public resetVGpuProfile() {
    this._vGpuProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vGpuProfileInput() {
    return this._vGpuProfile;
  }

  // vendor_id - computed: false, optional: true, required: false
  private _vendorId?: number; 
  public get vendorId() {
    return this.getNumberAttribute('vendor_id');
  }
  public set vendorId(value: number) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpec {
  /**
  * AdditionalDisksGiB holds the sizes of additional disks of the virtual machine, in GiB Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#additional_disks_gi_b DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#additional_disks_gi_b}
  */
  readonly additionalDisksGiB?: string[];
  /**
  * CloneMode specifies the type of clone operation. The LinkedClone mode is only support for templates that have at least one snapshot. If the template has no snapshots, then CloneMode defaults to FullClone. When LinkedClone mode is enabled the DiskGiB field is ignored as it is not possible to expand disks of linked clones. Defaults to LinkedClone, but fails gracefully to FullClone if the source of the clone operation has no snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#clone_mode DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#clone_mode}
  */
  readonly cloneMode?: string;
  /**
  * CustomVMXKeys is a dictionary of advanced VMX options that can be set on VM Defaults to empty map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#custom_vmx_keys DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#custom_vmx_keys}
  */
  readonly customVmxKeys?: { [key: string]: string };
  /**
  * Datacenter is the name or inventory path of the datacenter in which the virtual machine is created/located. Defaults to * which selects the default datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#datacenter DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Datastore is the name or inventory path of the datastore in which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#datastore DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#datastore}
  */
  readonly datastore?: string;
  /**
  * DiskGiB is the size of a virtual machine's disk, in GiB. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#disk_gi_b DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#disk_gi_b}
  */
  readonly diskGiB?: number;
  /**
  * FailureDomain is the failure domain unique identifier this Machine should be attached to, as defined in Cluster API. For this infrastructure provider, the name is equivalent to the name of the VSphereDeploymentZone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#failure_domain DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * Folder is the name or inventory path of the folder in which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#folder DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#folder}
  */
  readonly folder?: string;
  /**
  * GuestSoftPowerOffTimeout sets the wait timeout for shutdown in the VM guest. The VM will be powered off forcibly after the timeout if the VM is still up and running when the PowerOffMode is set to trySoft. This parameter only applies when the PowerOffMode is set to trySoft. If omitted, the timeout defaults to 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#guest_soft_power_off_timeout DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#guest_soft_power_off_timeout}
  */
  readonly guestSoftPowerOffTimeout?: string;
  /**
  * HardwareVersion is the hardware version of the virtual machine. Defaults to the eponymous property value in the template from which the virtual machine is cloned. Check the compatibility with the ESXi version before setting the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#hardware_version DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#hardware_version}
  */
  readonly hardwareVersion?: string;
  /**
  * MemoryMiB is the size of a virtual machine's memory, in MiB. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#memory_mi_b DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#memory_mi_b}
  */
  readonly memoryMiB?: number;
  /**
  * Network is the network configuration for this machine's VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#network DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#network}
  */
  readonly network: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetwork;
  /**
  * NumCPUs is the number of cores among which to distribute CPUs in this virtual machine. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#num_cores_per_socket DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * NumCPUs is the number of virtual processors in a virtual machine. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#num_cp_us DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#num_cp_us}
  */
  readonly numCpUs?: number;
  /**
  * OS is the Operating System of the virtual machine Defaults to Linux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#os DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#os}
  */
  readonly os?: string;
  /**
  * PciDevices is the list of pci devices used by the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#pci_devices DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#pci_devices}
  */
  readonly pciDevices?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevices[] | cdktf.IResolvable;
  /**
  * PowerOffMode describes the desired behavior when powering off a VM. There are three, supported power off modes: hard, soft, and trySoft. The first mode, hard, is the equivalent of a physical system's power cord being ripped from the wall. The soft mode requires the VM's guest to have VM Tools installed and attempts to gracefully shut down the VM. Its variant, trySoft, first attempts a graceful shutdown, and if that fails or the VM is not in a powered off state after reaching the GuestSoftPowerOffTimeout, the VM is halted. If omitted, the mode defaults to hard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#power_off_mode DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#power_off_mode}
  */
  readonly powerOffMode?: string;
  /**
  * ProviderID is the virtual machine's BIOS UUID formated as vsphere://12345678-1234-1234-1234-123456789abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#provider_id DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * ResourcePool is the name or inventory path of the resource pool in which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#resource_pool DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Server is the IP address or FQDN of the vSphere server on which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#server DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#server}
  */
  readonly server?: string;
  /**
  * Snapshot is the name of the snapshot from which to create a linked clone. This field is ignored if LinkedClone is not enabled. Defaults to the source's current snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#snapshot DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#snapshot}
  */
  readonly snapshot?: string;
  /**
  * StoragePolicyName of the storage policy to use with this Virtual Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#storage_policy_name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * TagIDs is an optional set of tags to add to an instance. Specified tagIDs must use URN-notation instead of display names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#tag_i_ds DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#tag_i_ds}
  */
  readonly tagIDs?: string[];
  /**
  * Template is the name or inventory path of the template used to clone the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#template DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#template}
  */
  readonly template: string;
  /**
  * Thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate When this is set to empty, this VirtualMachine would be created without TLS certificate validation of the communication between Cluster API Provider vSphere and the VMware vCenter server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#thumbprint DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#thumbprint}
  */
  readonly thumbprint?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_disks_gi_b: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalDisksGiB),
    clone_mode: cdktf.stringToTerraform(struct!.cloneMode),
    custom_vmx_keys: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVmxKeys),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    disk_gi_b: cdktf.numberToTerraform(struct!.diskGiB),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    folder: cdktf.stringToTerraform(struct!.folder),
    guest_soft_power_off_timeout: cdktf.stringToTerraform(struct!.guestSoftPowerOffTimeout),
    hardware_version: cdktf.stringToTerraform(struct!.hardwareVersion),
    memory_mi_b: cdktf.numberToTerraform(struct!.memoryMiB),
    network: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkToTerraform(struct!.network),
    num_cores_per_socket: cdktf.numberToTerraform(struct!.numCoresPerSocket),
    num_cp_us: cdktf.numberToTerraform(struct!.numCpUs),
    os: cdktf.stringToTerraform(struct!.os),
    pci_devices: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesToTerraform, false)(struct!.pciDevices),
    power_off_mode: cdktf.stringToTerraform(struct!.powerOffMode),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    server: cdktf.stringToTerraform(struct!.server),
    snapshot: cdktf.stringToTerraform(struct!.snapshot),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    tag_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagIDs),
    template: cdktf.stringToTerraform(struct!.template),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_disks_gi_b: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalDisksGiB),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clone_mode: {
      value: cdktf.stringToHclTerraform(struct!.cloneMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_vmx_keys: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVmxKeys),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_gi_b: {
      value: cdktf.numberToHclTerraform(struct!.diskGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_soft_power_off_timeout: {
      value: cdktf.stringToHclTerraform(struct!.guestSoftPowerOffTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_version: {
      value: cdktf.stringToHclTerraform(struct!.hardwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mi_b: {
      value: cdktf.numberToHclTerraform(struct!.memoryMiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetwork",
    },
    num_cores_per_socket: {
      value: cdktf.numberToHclTerraform(struct!.numCoresPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_cp_us: {
      value: cdktf.numberToHclTerraform(struct!.numCpUs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pci_devices: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesToHclTerraform, false)(struct!.pciDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesList",
    },
    power_off_mode: {
      value: cdktf.stringToHclTerraform(struct!.powerOffMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: cdktf.stringToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalDisksGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalDisksGiB = this._additionalDisksGiB;
    }
    if (this._cloneMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneMode = this._cloneMode;
    }
    if (this._customVmxKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVmxKeys = this._customVmxKeys;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._diskGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGiB = this._diskGiB;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._guestSoftPowerOffTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestSoftPowerOffTimeout = this._guestSoftPowerOffTimeout;
    }
    if (this._hardwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareVersion = this._hardwareVersion;
    }
    if (this._memoryMiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMiB = this._memoryMiB;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._numCoresPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCoresPerSocket = this._numCoresPerSocket;
    }
    if (this._numCpUs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCpUs = this._numCpUs;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._pciDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciDevices = this._pciDevices?.internalValue;
    }
    if (this._powerOffMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerOffMode = this._powerOffMode;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._tagIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIDs = this._tagIDs;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalDisksGiB = undefined;
      this._cloneMode = undefined;
      this._customVmxKeys = undefined;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._diskGiB = undefined;
      this._failureDomain = undefined;
      this._folder = undefined;
      this._guestSoftPowerOffTimeout = undefined;
      this._hardwareVersion = undefined;
      this._memoryMiB = undefined;
      this._network.internalValue = undefined;
      this._numCoresPerSocket = undefined;
      this._numCpUs = undefined;
      this._os = undefined;
      this._pciDevices.internalValue = undefined;
      this._powerOffMode = undefined;
      this._providerId = undefined;
      this._resourcePool = undefined;
      this._server = undefined;
      this._snapshot = undefined;
      this._storagePolicyName = undefined;
      this._tagIDs = undefined;
      this._template = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalDisksGiB = value.additionalDisksGiB;
      this._cloneMode = value.cloneMode;
      this._customVmxKeys = value.customVmxKeys;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._diskGiB = value.diskGiB;
      this._failureDomain = value.failureDomain;
      this._folder = value.folder;
      this._guestSoftPowerOffTimeout = value.guestSoftPowerOffTimeout;
      this._hardwareVersion = value.hardwareVersion;
      this._memoryMiB = value.memoryMiB;
      this._network.internalValue = value.network;
      this._numCoresPerSocket = value.numCoresPerSocket;
      this._numCpUs = value.numCpUs;
      this._os = value.os;
      this._pciDevices.internalValue = value.pciDevices;
      this._powerOffMode = value.powerOffMode;
      this._providerId = value.providerId;
      this._resourcePool = value.resourcePool;
      this._server = value.server;
      this._snapshot = value.snapshot;
      this._storagePolicyName = value.storagePolicyName;
      this._tagIDs = value.tagIDs;
      this._template = value.template;
      this._thumbprint = value.thumbprint;
    }
  }

  // additional_disks_gi_b - computed: false, optional: true, required: false
  private _additionalDisksGiB?: string[]; 
  public get additionalDisksGiB() {
    return this.getListAttribute('additional_disks_gi_b');
  }
  public set additionalDisksGiB(value: string[]) {
    this._additionalDisksGiB = value;
  }
  public resetAdditionalDisksGiB() {
    this._additionalDisksGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDisksGiBInput() {
    return this._additionalDisksGiB;
  }

  // clone_mode - computed: false, optional: true, required: false
  private _cloneMode?: string; 
  public get cloneMode() {
    return this.getStringAttribute('clone_mode');
  }
  public set cloneMode(value: string) {
    this._cloneMode = value;
  }
  public resetCloneMode() {
    this._cloneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneModeInput() {
    return this._cloneMode;
  }

  // custom_vmx_keys - computed: false, optional: true, required: false
  private _customVmxKeys?: { [key: string]: string }; 
  public get customVmxKeys() {
    return this.getStringMapAttribute('custom_vmx_keys');
  }
  public set customVmxKeys(value: { [key: string]: string }) {
    this._customVmxKeys = value;
  }
  public resetCustomVmxKeys() {
    this._customVmxKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVmxKeysInput() {
    return this._customVmxKeys;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // disk_gi_b - computed: false, optional: true, required: false
  private _diskGiB?: number; 
  public get diskGiB() {
    return this.getNumberAttribute('disk_gi_b');
  }
  public set diskGiB(value: number) {
    this._diskGiB = value;
  }
  public resetDiskGiB() {
    this._diskGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGiBInput() {
    return this._diskGiB;
  }

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // guest_soft_power_off_timeout - computed: false, optional: true, required: false
  private _guestSoftPowerOffTimeout?: string; 
  public get guestSoftPowerOffTimeout() {
    return this.getStringAttribute('guest_soft_power_off_timeout');
  }
  public set guestSoftPowerOffTimeout(value: string) {
    this._guestSoftPowerOffTimeout = value;
  }
  public resetGuestSoftPowerOffTimeout() {
    this._guestSoftPowerOffTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestSoftPowerOffTimeoutInput() {
    return this._guestSoftPowerOffTimeout;
  }

  // hardware_version - computed: false, optional: true, required: false
  private _hardwareVersion?: string; 
  public get hardwareVersion() {
    return this.getStringAttribute('hardware_version');
  }
  public set hardwareVersion(value: string) {
    this._hardwareVersion = value;
  }
  public resetHardwareVersion() {
    this._hardwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareVersionInput() {
    return this._hardwareVersion;
  }

  // memory_mi_b - computed: false, optional: true, required: false
  private _memoryMiB?: number; 
  public get memoryMiB() {
    return this.getNumberAttribute('memory_mi_b');
  }
  public set memoryMiB(value: number) {
    this._memoryMiB = value;
  }
  public resetMemoryMiB() {
    this._memoryMiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMiBInput() {
    return this._memoryMiB;
  }

  // network - computed: false, optional: false, required: true
  private _network = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // num_cores_per_socket - computed: false, optional: true, required: false
  private _numCoresPerSocket?: number; 
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }
  public set numCoresPerSocket(value: number) {
    this._numCoresPerSocket = value;
  }
  public resetNumCoresPerSocket() {
    this._numCoresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCoresPerSocketInput() {
    return this._numCoresPerSocket;
  }

  // num_cp_us - computed: false, optional: true, required: false
  private _numCpUs?: number; 
  public get numCpUs() {
    return this.getNumberAttribute('num_cp_us');
  }
  public set numCpUs(value: number) {
    this._numCpUs = value;
  }
  public resetNumCpUs() {
    this._numCpUs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpUsInput() {
    return this._numCpUs;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // pci_devices - computed: false, optional: true, required: false
  private _pciDevices = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevicesList(this, "pci_devices", false);
  public get pciDevices() {
    return this._pciDevices;
  }
  public putPciDevices(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecPciDevices[] | cdktf.IResolvable) {
    this._pciDevices.internalValue = value;
  }
  public resetPciDevices() {
    this._pciDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciDevicesInput() {
    return this._pciDevices.internalValue;
  }

  // power_off_mode - computed: false, optional: true, required: false
  private _powerOffMode?: string; 
  public get powerOffMode() {
    return this.getStringAttribute('power_off_mode');
  }
  public set powerOffMode(value: string) {
    this._powerOffMode = value;
  }
  public resetPowerOffMode() {
    this._powerOffMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOffModeInput() {
    return this._powerOffMode;
  }

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // tag_i_ds - computed: false, optional: true, required: false
  private _tagIDs?: string[]; 
  public get tagIDs() {
    return this.getListAttribute('tag_i_ds');
  }
  public set tagIDs(value: string[]) {
    this._tagIDs = value;
  }
  public resetTagIDs() {
    this._tagIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIDsInput() {
    return this._tagIDs;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplate {
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#metadata DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadata;
  /**
  * Spec is the specification of the desired behavior of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpec;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpec {
  /**
  * VSphereMachineTemplateResource describes the data needed to create a VSphereMachine from a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#template DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest#template}
  */
  readonly template: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplate;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
