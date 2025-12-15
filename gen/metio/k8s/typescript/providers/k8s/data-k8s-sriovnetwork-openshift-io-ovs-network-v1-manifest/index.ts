// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#metadata DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#metadata}
  */
  readonly metadata: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadata;
  /**
  * OVSNetworkSpec defines the desired state of OVSNetwork
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#spec DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#spec}
  */
  readonly spec?: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpec;
}
export interface DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#annotations DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#labels DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#name DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#namespace DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadataToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadataToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#id DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#max_id DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#max_id}
  */
  readonly maxId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#min_id DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#min_id}
  */
  readonly minId?: number;
}

export function dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    max_id: cdktf.numberToTerraform(struct!.maxId),
    min_id: cdktf.numberToTerraform(struct!.minId),
  }
}


export function dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_id: {
      value: cdktf.numberToHclTerraform(struct!.maxId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_id: {
      value: cdktf.numberToHclTerraform(struct!.minId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxId = this._maxId;
    }
    if (this._minId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minId = this._minId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maxId = undefined;
      this._minId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maxId = value.maxId;
      this._minId = value.minId;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_id - computed: false, optional: true, required: false
  private _maxId?: number; 
  public get maxId() {
    return this.getNumberAttribute('max_id');
  }
  public set maxId(value: number) {
    this._maxId = value;
  }
  public resetMaxId() {
    this._maxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdInput() {
    return this._maxId;
  }

  // min_id - computed: false, optional: true, required: false
  private _minId?: number; 
  public get minId() {
    return this.getNumberAttribute('min_id');
  }
  public set minId(value: number) {
    this._minId = value;
  }
  public resetMinId() {
    this._minId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdInput() {
    return this._minId;
  }
}

export class DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkList extends cdktf.ComplexList {
  public internalValue? : DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunk[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkOutputReference {
    return new DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpec {
  /**
  * name of the OVS bridge, if not set OVS will automatically select bridge based on VF PCI address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#bridge DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#bridge}
  */
  readonly bridge?: string;
  /**
  * Capabilities to be configured for this network. Capabilities supported: (mac|ips), e.g. '{'mac': true}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#capabilities DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#capabilities}
  */
  readonly capabilities?: string;
  /**
  * The type of interface on ovs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#interface_type DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * IPAM configuration to be used for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#ipam DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#ipam}
  */
  readonly ipam?: string;
  /**
  * MetaPluginsConfig configuration to be used in order to chain metaplugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#meta_plugins DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#meta_plugins}
  */
  readonly metaPlugins?: string;
  /**
  * Mtu for the OVS port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#mtu DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#mtu}
  */
  readonly mtu?: number;
  /**
  * Namespace of the NetworkAttachmentDefinition custom resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#network_namespace DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#network_namespace}
  */
  readonly networkNamespace?: string;
  /**
  * OVS Network device plugin endpoint resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#resource_name DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#resource_name}
  */
  readonly resourceName: string;
  /**
  * Trunk configuration for the OVS port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#trunk DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#trunk}
  */
  readonly trunk?: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunk[] | cdktf.IResolvable;
  /**
  * Vlan to assign for the OVS port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#vlan DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest#vlan}
  */
  readonly vlan?: number;
}

export function dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    capabilities: cdktf.stringToTerraform(struct!.capabilities),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    ipam: cdktf.stringToTerraform(struct!.ipam),
    meta_plugins: cdktf.stringToTerraform(struct!.metaPlugins),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    network_namespace: cdktf.stringToTerraform(struct!.networkNamespace),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    trunk: cdktf.listMapper(dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkToTerraform, false)(struct!.trunk),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capabilities: {
      value: cdktf.stringToHclTerraform(struct!.capabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_type: {
      value: cdktf.stringToHclTerraform(struct!.interfaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipam: {
      value: cdktf.stringToHclTerraform(struct!.ipam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta_plugins: {
      value: cdktf.stringToHclTerraform(struct!.metaPlugins),
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
    network_namespace: {
      value: cdktf.stringToHclTerraform(struct!.networkNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.listMapperHcl(dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkToHclTerraform, false)(struct!.trunk),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkList",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
    }
    if (this._ipam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipam = this._ipam;
    }
    if (this._metaPlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaPlugins = this._metaPlugins;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networkNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkNamespace = this._networkNamespace;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._trunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk?.internalValue;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._capabilities = undefined;
      this._interfaceType = undefined;
      this._ipam = undefined;
      this._metaPlugins = undefined;
      this._mtu = undefined;
      this._networkNamespace = undefined;
      this._resourceName = undefined;
      this._trunk.internalValue = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge = value.bridge;
      this._capabilities = value.capabilities;
      this._interfaceType = value.interfaceType;
      this._ipam = value.ipam;
      this._metaPlugins = value.metaPlugins;
      this._mtu = value.mtu;
      this._networkNamespace = value.networkNamespace;
      this._resourceName = value.resourceName;
      this._trunk.internalValue = value.trunk;
      this._vlan = value.vlan;
    }
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string; 
  public get capabilities() {
    return this.getStringAttribute('capabilities');
  }
  public set capabilities(value: string) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // interface_type - computed: false, optional: true, required: false
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  public resetInterfaceType() {
    this._interfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // ipam - computed: false, optional: true, required: false
  private _ipam?: string; 
  public get ipam() {
    return this.getStringAttribute('ipam');
  }
  public set ipam(value: string) {
    this._ipam = value;
  }
  public resetIpam() {
    this._ipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamInput() {
    return this._ipam;
  }

  // meta_plugins - computed: false, optional: true, required: false
  private _metaPlugins?: string; 
  public get metaPlugins() {
    return this.getStringAttribute('meta_plugins');
  }
  public set metaPlugins(value: string) {
    this._metaPlugins = value;
  }
  public resetMetaPlugins() {
    this._metaPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaPluginsInput() {
    return this._metaPlugins;
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

  // network_namespace - computed: false, optional: true, required: false
  private _networkNamespace?: string; 
  public get networkNamespace() {
    return this.getStringAttribute('network_namespace');
  }
  public set networkNamespace(value: string) {
    this._networkNamespace = value;
  }
  public resetNetworkNamespace() {
    this._networkNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNamespaceInput() {
    return this._networkNamespace;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk = new DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunkList(this, "trunk", false);
  public get trunk() {
    return this._trunk;
  }
  public putTrunk(value: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecTrunk[] | cdktf.IResolvable) {
    this._trunk.internalValue = value;
  }
  public resetTrunk() {
    this._trunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest k8s_sriovnetwork_openshift_io_ovs_network_v1_manifest}
*/
export class DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sriovnetwork_openshift_io_ovs_network_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest to import
  * @param importFromId The id of the existing DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSriovnetworkOpenshiftIoOvsNetworkV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sriovnetwork_openshift_io_ovs_network_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_ovs_network_v1_manifest k8s_sriovnetwork_openshift_io_ovs_network_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sriovnetwork_openshift_io_ovs_network_v1_manifest',
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
  private _metadata = new DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpec) {
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
      metadata: dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoOvsNetworkV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
