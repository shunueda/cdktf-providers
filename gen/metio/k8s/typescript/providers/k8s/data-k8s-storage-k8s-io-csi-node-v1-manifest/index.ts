// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SStorageK8SIoCsiNodeV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#metadata DataK8SStorageK8SIoCsiNodeV1Manifest#metadata}
  */
  readonly metadata: DataK8SStorageK8SIoCsiNodeV1ManifestMetadata;
  /**
  * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#spec DataK8SStorageK8SIoCsiNodeV1Manifest#spec}
  */
  readonly spec: DataK8SStorageK8SIoCsiNodeV1ManifestSpec;
}
export interface DataK8SStorageK8SIoCsiNodeV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#annotations DataK8SStorageK8SIoCsiNodeV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#labels DataK8SStorageK8SIoCsiNodeV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#name DataK8SStorageK8SIoCsiNodeV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SStorageK8SIoCsiNodeV1ManifestMetadataToTerraform(struct?: DataK8SStorageK8SIoCsiNodeV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SStorageK8SIoCsiNodeV1ManifestMetadataToHclTerraform(struct?: DataK8SStorageK8SIoCsiNodeV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SStorageK8SIoCsiNodeV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageK8SIoCsiNodeV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SStorageK8SIoCsiNodeV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatable {
  /**
  * count indicates the maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is not specified, then the supported number of volumes on this node is unbounded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#count DataK8SStorageK8SIoCsiNodeV1Manifest#count}
  */
  readonly count?: number;
}

export function dataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatableToTerraform(struct?: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function dataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatableToHclTerraform(struct?: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface DataK8SStorageK8SIoCsiNodeV1ManifestSpecDrivers {
  /**
  * VolumeNodeResources is a set of resource limits for scheduling of volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#allocatable DataK8SStorageK8SIoCsiNodeV1Manifest#allocatable}
  */
  readonly allocatable?: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatable;
  /**
  * name represents the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#name DataK8SStorageK8SIoCsiNodeV1Manifest#name}
  */
  readonly name: string;
  /**
  * nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as 'node1', but the storage system may refer to the same node as 'nodeA'. When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. 'nodeA' instead of 'node1'. This field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#node_id DataK8SStorageK8SIoCsiNodeV1Manifest#node_id}
  */
  readonly nodeId: string;
  /**
  * topologyKeys is the list of keys supported by the driver. When a driver is initialized on a cluster, it provides a set of topology keys that it understands (e.g. 'company.com/zone', 'company.com/region'). When a driver is initialized on a node, it provides the same topology keys along with values. Kubelet will expose these topology keys as labels on its own node object. When Kubernetes does topology aware provisioning, it can use this list to determine which labels it should retrieve from the node object and pass back to the driver. It is possible for different nodes to use different topology keys. This can be empty if driver does not support topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#topology_keys DataK8SStorageK8SIoCsiNodeV1Manifest#topology_keys}
  */
  readonly topologyKeys?: string[];
}

export function dataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversToTerraform(struct?: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDrivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocatable: dataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatableToTerraform(struct!.allocatable),
    name: cdktf.stringToTerraform(struct!.name),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    topology_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.topologyKeys),
  }
}


export function dataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversToHclTerraform(struct?: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDrivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocatable: {
      value: dataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatableToHclTerraform(struct!.allocatable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatable",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.topologyKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SStorageK8SIoCsiNodeV1ManifestSpecDrivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatable = this._allocatable?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._topologyKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKeys = this._topologyKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDrivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatable.internalValue = undefined;
      this._name = undefined;
      this._nodeId = undefined;
      this._topologyKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatable.internalValue = value.allocatable;
      this._name = value.name;
      this._nodeId = value.nodeId;
      this._topologyKeys = value.topologyKeys;
    }
  }

  // allocatable - computed: false, optional: true, required: false
  private _allocatable = new DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatableOutputReference(this, "allocatable");
  public get allocatable() {
    return this._allocatable;
  }
  public putAllocatable(value: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversAllocatable) {
    this._allocatable.internalValue = value;
  }
  public resetAllocatable() {
    this._allocatable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatableInput() {
    return this._allocatable.internalValue;
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

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // topology_keys - computed: false, optional: true, required: false
  private _topologyKeys?: string[]; 
  public get topologyKeys() {
    return this.getListAttribute('topology_keys');
  }
  public set topologyKeys(value: string[]) {
    this._topologyKeys = value;
  }
  public resetTopologyKeys() {
    this._topologyKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeysInput() {
    return this._topologyKeys;
  }
}

export class DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversList extends cdktf.ComplexList {
  public internalValue? : DataK8SStorageK8SIoCsiNodeV1ManifestSpecDrivers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversOutputReference {
    return new DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SStorageK8SIoCsiNodeV1ManifestSpec {
  /**
  * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#drivers DataK8SStorageK8SIoCsiNodeV1Manifest#drivers}
  */
  readonly drivers: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDrivers[] | cdktf.IResolvable;
}

export function dataK8SStorageK8SIoCsiNodeV1ManifestSpecToTerraform(struct?: DataK8SStorageK8SIoCsiNodeV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drivers: cdktf.listMapper(dataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversToTerraform, false)(struct!.drivers),
  }
}


export function dataK8SStorageK8SIoCsiNodeV1ManifestSpecToHclTerraform(struct?: DataK8SStorageK8SIoCsiNodeV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drivers: {
      value: cdktf.listMapperHcl(dataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversToHclTerraform, false)(struct!.drivers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageK8SIoCsiNodeV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageK8SIoCsiNodeV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drivers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drivers = this._drivers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageK8SIoCsiNodeV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drivers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drivers.internalValue = value.drivers;
    }
  }

  // drivers - computed: false, optional: false, required: true
  private _drivers = new DataK8SStorageK8SIoCsiNodeV1ManifestSpecDriversList(this, "drivers", false);
  public get drivers() {
    return this._drivers;
  }
  public putDrivers(value: DataK8SStorageK8SIoCsiNodeV1ManifestSpecDrivers[] | cdktf.IResolvable) {
    this._drivers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driversInput() {
    return this._drivers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest k8s_storage_k8s_io_csi_node_v1_manifest}
*/
export class DataK8SStorageK8SIoCsiNodeV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_storage_k8s_io_csi_node_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SStorageK8SIoCsiNodeV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SStorageK8SIoCsiNodeV1Manifest to import
  * @param importFromId The id of the existing DataK8SStorageK8SIoCsiNodeV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SStorageK8SIoCsiNodeV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_storage_k8s_io_csi_node_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/storage_k8s_io_csi_node_v1_manifest k8s_storage_k8s_io_csi_node_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SStorageK8SIoCsiNodeV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SStorageK8SIoCsiNodeV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_storage_k8s_io_csi_node_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SStorageK8SIoCsiNodeV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SStorageK8SIoCsiNodeV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SStorageK8SIoCsiNodeV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SStorageK8SIoCsiNodeV1ManifestSpec) {
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
      metadata: dataK8SStorageK8SIoCsiNodeV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SStorageK8SIoCsiNodeV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SStorageK8SIoCsiNodeV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageK8SIoCsiNodeV1ManifestMetadata",
      },
      spec: {
        value: dataK8SStorageK8SIoCsiNodeV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageK8SIoCsiNodeV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
