// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#metadata DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadata;
  /**
  * VSphereFailureDomainSpec defines the desired state of VSphereFailureDomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#annotations DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#name}
  */
  readonly name: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegion {
  /**
  * AutoConfigure tags the Type which is specified in the Topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#auto_configure DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#auto_configure}
  */
  readonly autoConfigure?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the tag that represents this failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * TagCategory is the category used for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#tag_category DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#tag_category}
  */
  readonly tagCategory: string;
  /**
  * Type is the type of failure domain, the current values are 'Datacenter', 'ComputeCluster' and 'HostGroup'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#type DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegionToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_configure: cdktf.booleanToTerraform(struct!.autoConfigure),
    name: cdktf.stringToTerraform(struct!.name),
    tag_category: cdktf.stringToTerraform(struct!.tagCategory),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegionToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_configure: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfigure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_category: {
      value: cdktf.stringToHclTerraform(struct!.tagCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfigure !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfigure = this._autoConfigure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCategory = this._tagCategory;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoConfigure = undefined;
      this._name = undefined;
      this._tagCategory = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoConfigure = value.autoConfigure;
      this._name = value.name;
      this._tagCategory = value.tagCategory;
      this._type = value.type;
    }
  }

  // auto_configure - computed: false, optional: true, required: false
  private _autoConfigure?: boolean | cdktf.IResolvable; 
  public get autoConfigure() {
    return this.getBooleanAttribute('auto_configure');
  }
  public set autoConfigure(value: boolean | cdktf.IResolvable) {
    this._autoConfigure = value;
  }
  public resetAutoConfigure() {
    this._autoConfigure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigureInput() {
    return this._autoConfigure;
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

  // tag_category - computed: false, optional: false, required: true
  private _tagCategory?: string; 
  public get tagCategory() {
    return this.getStringAttribute('tag_category');
  }
  public set tagCategory(value: string) {
    this._tagCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCategoryInput() {
    return this._tagCategory;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHosts {
  /**
  * HostGroupName is the name of the Host group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#host_group_name DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#host_group_name}
  */
  readonly hostGroupName: string;
  /**
  * VMGroupName is the name of the VM group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#vm_group_name DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#vm_group_name}
  */
  readonly vmGroupName: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHostsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_group_name: cdktf.stringToTerraform(struct!.hostGroupName),
    vm_group_name: cdktf.stringToTerraform(struct!.vmGroupName),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHostsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_group_name: {
      value: cdktf.stringToHclTerraform(struct!.hostGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_group_name: {
      value: cdktf.stringToHclTerraform(struct!.vmGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroupName = this._hostGroupName;
    }
    if (this._vmGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmGroupName = this._vmGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostGroupName = undefined;
      this._vmGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostGroupName = value.hostGroupName;
      this._vmGroupName = value.vmGroupName;
    }
  }

  // host_group_name - computed: false, optional: false, required: true
  private _hostGroupName?: string; 
  public get hostGroupName() {
    return this.getStringAttribute('host_group_name');
  }
  public set hostGroupName(value: string) {
    this._hostGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupNameInput() {
    return this._hostGroupName;
  }

  // vm_group_name - computed: false, optional: false, required: true
  private _vmGroupName?: string; 
  public get vmGroupName() {
    return this.getStringAttribute('vm_group_name');
  }
  public set vmGroupName(value: string) {
    this._vmGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmGroupNameInput() {
    return this._vmGroupName;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopology {
  /**
  * ComputeCluster as the failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#compute_cluster DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#compute_cluster}
  */
  readonly computeCluster?: string;
  /**
  * The underlying infrastructure for this failure domain Datacenter as the failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#datacenter DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#datacenter}
  */
  readonly datacenter: string;
  /**
  * Datastore is the name or inventory path of the datastore in which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#datastore DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#datastore}
  */
  readonly datastore?: string;
  /**
  * Hosts has information required for placement of machines on VSphere hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#hosts DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#hosts}
  */
  readonly hosts?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHosts;
  /**
  * Networks is the list of networks within this failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#networks DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#networks}
  */
  readonly networks?: string[];
}

export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_cluster: cdktf.stringToTerraform(struct!.computeCluster),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    hosts: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHostsToTerraform(struct!.hosts),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_cluster: {
      value: cdktf.stringToHclTerraform(struct!.computeCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    hosts: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHostsToHclTerraform(struct!.hosts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHosts",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeCluster = this._computeCluster;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeCluster = undefined;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._hosts.internalValue = undefined;
      this._networks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeCluster = value.computeCluster;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._hosts.internalValue = value.hosts;
      this._networks = value.networks;
    }
  }

  // compute_cluster - computed: false, optional: true, required: false
  private _computeCluster?: string; 
  public get computeCluster() {
    return this.getStringAttribute('compute_cluster');
  }
  public set computeCluster(value: string) {
    this._computeCluster = value;
  }
  public resetComputeCluster() {
    this._computeCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterInput() {
    return this._computeCluster;
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
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

  // hosts - computed: false, optional: true, required: false
  private _hosts = new DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHostsOutputReference(this, "hosts");
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyHosts) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZone {
  /**
  * AutoConfigure tags the Type which is specified in the Topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#auto_configure DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#auto_configure}
  */
  readonly autoConfigure?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the tag that represents this failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * TagCategory is the category used for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#tag_category DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#tag_category}
  */
  readonly tagCategory: string;
  /**
  * Type is the type of failure domain, the current values are 'Datacenter', 'ComputeCluster' and 'HostGroup'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#type DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZoneToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_configure: cdktf.booleanToTerraform(struct!.autoConfigure),
    name: cdktf.stringToTerraform(struct!.name),
    tag_category: cdktf.stringToTerraform(struct!.tagCategory),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZoneToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_configure: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfigure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_category: {
      value: cdktf.stringToHclTerraform(struct!.tagCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfigure !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfigure = this._autoConfigure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCategory = this._tagCategory;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoConfigure = undefined;
      this._name = undefined;
      this._tagCategory = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoConfigure = value.autoConfigure;
      this._name = value.name;
      this._tagCategory = value.tagCategory;
      this._type = value.type;
    }
  }

  // auto_configure - computed: false, optional: true, required: false
  private _autoConfigure?: boolean | cdktf.IResolvable; 
  public get autoConfigure() {
    return this.getBooleanAttribute('auto_configure');
  }
  public set autoConfigure(value: boolean | cdktf.IResolvable) {
    this._autoConfigure = value;
  }
  public resetAutoConfigure() {
    this._autoConfigure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigureInput() {
    return this._autoConfigure;
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

  // tag_category - computed: false, optional: false, required: true
  private _tagCategory?: string; 
  public get tagCategory() {
    return this.getStringAttribute('tag_category');
  }
  public set tagCategory(value: string) {
    this._tagCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCategoryInput() {
    return this._tagCategory;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpec {
  /**
  * Region defines the name and type of a region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#region DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#region}
  */
  readonly region: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegion;
  /**
  * Topology describes a given failure domain using vSphere constructs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#topology DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#topology}
  */
  readonly topology: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopology;
  /**
  * Zone defines the name and type of a zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#zone DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest#zone}
  */
  readonly zone: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZone;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegionToTerraform(struct!.region),
    topology: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyToTerraform(struct!.topology),
    zone: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZoneToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegionToHclTerraform(struct!.region),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegion",
    },
    topology: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopology",
    },
    zone: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZoneToHclTerraform(struct!.zone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZone",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    if (this._zone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region.internalValue = undefined;
      this._topology.internalValue = undefined;
      this._zone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region.internalValue = value.region;
      this._topology.internalValue = value.topology;
      this._zone.internalValue = value.zone;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region = new DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecRegion) {
    this._region.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecTopology) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }

  // zone - computed: false, optional: false, required: true
  private _zone = new DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZoneOutputReference(this, "zone");
  public get zone() {
    return this._zone;
  }
  public putZone(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecZone) {
    this._zone.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_v_sphere_failure_domain_v1alpha4_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereFailureDomainV1Alpha4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
