// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#metadata DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#spec DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpec;
}
export interface DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#annotations DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#labels DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#name DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopology {
  /**
  * BusID is the domain:bus:device.function formatted identifier of PCI/PCIE device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#bus_id DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#bus_id}
  */
  readonly busId?: string;
  /**
  * NodeID is the ID of NUMA Node to which the device belongs, it should be unique across different CPU Sockets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#node_id DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#node_id}
  */
  readonly nodeId: number;
  /**
  * PCIEID is the ID of PCIE Switch to which the device is connected, it should be unique across difference NUMANodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#pcie_id DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#pcie_id}
  */
  readonly pcieId: string;
  /**
  * SocketID is the ID of CPU Socket to which the device belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#socket_id DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#socket_id}
  */
  readonly socketId: number;
}

export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopologyToTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_id: cdktf.stringToTerraform(struct!.busId),
    node_id: cdktf.numberToTerraform(struct!.nodeId),
    pcie_id: cdktf.stringToTerraform(struct!.pcieId),
    socket_id: cdktf.numberToTerraform(struct!.socketId),
  }
}


export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopologyToHclTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_id: {
      value: cdktf.stringToHclTerraform(struct!.busId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.numberToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pcie_id: {
      value: cdktf.stringToHclTerraform(struct!.pcieId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket_id: {
      value: cdktf.numberToHclTerraform(struct!.socketId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busId !== undefined) {
      hasAnyValues = true;
      internalValueResult.busId = this._busId;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._pcieId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcieId = this._pcieId;
    }
    if (this._socketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketId = this._socketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busId = undefined;
      this._nodeId = undefined;
      this._pcieId = undefined;
      this._socketId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busId = value.busId;
      this._nodeId = value.nodeId;
      this._pcieId = value.pcieId;
      this._socketId = value.socketId;
    }
  }

  // bus_id - computed: false, optional: true, required: false
  private _busId?: string; 
  public get busId() {
    return this.getStringAttribute('bus_id');
  }
  public set busId(value: string) {
    this._busId = value;
  }
  public resetBusId() {
    this._busId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busIdInput() {
    return this._busId;
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: number; 
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }
  public set nodeId(value: number) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // pcie_id - computed: false, optional: false, required: true
  private _pcieId?: string; 
  public get pcieId() {
    return this.getStringAttribute('pcie_id');
  }
  public set pcieId(value: string) {
    this._pcieId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieIdInput() {
    return this._pcieId;
  }

  // socket_id - computed: false, optional: false, required: true
  private _socketId?: number; 
  public get socketId() {
    return this.getNumberAttribute('socket_id');
  }
  public set socketId(value: number) {
    this._socketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get socketIdInput() {
    return this._socketId;
  }
}
export interface DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfs {
  /**
  * BusID is the domain:bus:device.function formatted identifier of PCI/PCIE virtual function device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#bus_id DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#bus_id}
  */
  readonly busId?: string;
  /**
  * Minor represents the Minor number of VirtualFunction, starting from 0, used to identify virtual function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#minor DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#minor}
  */
  readonly minor: number;
}

export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsToTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_id: cdktf.stringToTerraform(struct!.busId),
    minor: cdktf.numberToTerraform(struct!.minor),
  }
}


export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsToHclTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_id: {
      value: cdktf.stringToHclTerraform(struct!.busId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minor: {
      value: cdktf.numberToHclTerraform(struct!.minor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busId !== undefined) {
      hasAnyValues = true;
      internalValueResult.busId = this._busId;
    }
    if (this._minor !== undefined) {
      hasAnyValues = true;
      internalValueResult.minor = this._minor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busId = undefined;
      this._minor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busId = value.busId;
      this._minor = value.minor;
    }
  }

  // bus_id - computed: false, optional: true, required: false
  private _busId?: string; 
  public get busId() {
    return this.getStringAttribute('bus_id');
  }
  public set busId(value: string) {
    this._busId = value;
  }
  public resetBusId() {
    this._busId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busIdInput() {
    return this._busId;
  }

  // minor - computed: false, optional: false, required: true
  private _minor?: number; 
  public get minor() {
    return this.getNumberAttribute('minor');
  }
  public set minor(value: number) {
    this._minor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minorInput() {
    return this._minor;
  }
}

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsOutputReference {
    return new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroups {
  /**
  * Labels represents the Virtual Function properties that can be used to organize and categorize (scope and select) objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#labels DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * VFs are the virtual function devices which belong to the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#vfs DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#vfs}
  */
  readonly vfs?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfs[] | cdktf.IResolvable;
}

export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsToTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    vfs: cdktf.listMapper(dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsToTerraform, false)(struct!.vfs),
  }
}


export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsToHclTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vfs: {
      value: cdktf.listMapperHcl(dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsToHclTerraform, false)(struct!.vfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._vfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vfs = this._vfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._vfs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._vfs.internalValue = value.vfs;
    }
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

  // vfs - computed: false, optional: true, required: false
  private _vfs = new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfsList(this, "vfs", false);
  public get vfs() {
    return this._vfs;
  }
  public putVfs(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsVfs[] | cdktf.IResolvable) {
    this._vfs.internalValue = value;
  }
  public resetVfs() {
    this._vfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vfsInput() {
    return this._vfs.internalValue;
  }
}

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsOutputReference {
    return new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevices {
  /**
  * Health indicates whether the device is normal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#health DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#health}
  */
  readonly health: boolean | cdktf.IResolvable;
  /**
  * UUID represents the UUID of device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#id DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels represents the device properties that can be used to organize and categorize (scope and select) objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#labels DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Minor represents the Minor number of Device, starting from 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#minor DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#minor}
  */
  readonly minor?: number;
  /**
  * ModuleID represents the physical id of Device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#module_id DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#module_id}
  */
  readonly moduleId?: number;
  /**
  * Resources is a set of (resource name, quantity) pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#resources DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#resources}
  */
  readonly resources?: { [key: string]: string };
  /**
  * Topology represents the topology information about the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#topology DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#topology}
  */
  readonly topology?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopology;
  /**
  * Type represents the type of device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#type DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * VFGroups represents the virtual function devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#vf_groups DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#vf_groups}
  */
  readonly vfGroups?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroups[] | cdktf.IResolvable;
}

export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesToTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.booleanToTerraform(struct!.health),
    id: cdktf.stringToTerraform(struct!.id),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    minor: cdktf.numberToTerraform(struct!.minor),
    module_id: cdktf.numberToTerraform(struct!.moduleId),
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
    topology: dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopologyToTerraform(struct!.topology),
    type: cdktf.stringToTerraform(struct!.type),
    vf_groups: cdktf.listMapper(dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsToTerraform, false)(struct!.vfGroups),
  }
}


export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesToHclTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.booleanToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    minor: {
      value: cdktf.numberToHclTerraform(struct!.minor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    module_id: {
      value: cdktf.numberToHclTerraform(struct!.moduleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    topology: {
      value: dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopology",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vf_groups: {
      value: cdktf.listMapperHcl(dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsToHclTerraform, false)(struct!.vfGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._minor !== undefined) {
      hasAnyValues = true;
      internalValueResult.minor = this._minor;
    }
    if (this._moduleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleId = this._moduleId;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vfGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vfGroups = this._vfGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._id = undefined;
      this._labels = undefined;
      this._minor = undefined;
      this._moduleId = undefined;
      this._resources = undefined;
      this._topology.internalValue = undefined;
      this._type = undefined;
      this._vfGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._id = value.id;
      this._labels = value.labels;
      this._minor = value.minor;
      this._moduleId = value.moduleId;
      this._resources = value.resources;
      this._topology.internalValue = value.topology;
      this._type = value.type;
      this._vfGroups.internalValue = value.vfGroups;
    }
  }

  // health - computed: false, optional: false, required: true
  private _health?: boolean | cdktf.IResolvable; 
  public get health() {
    return this.getBooleanAttribute('health');
  }
  public set health(value: boolean | cdktf.IResolvable) {
    this._health = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
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

  // minor - computed: false, optional: true, required: false
  private _minor?: number; 
  public get minor() {
    return this.getNumberAttribute('minor');
  }
  public set minor(value: number) {
    this._minor = value;
  }
  public resetMinor() {
    this._minor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorInput() {
    return this._minor;
  }

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: number; 
  public get moduleId() {
    return this.getNumberAttribute('module_id');
  }
  public set moduleId(value: number) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: { [key: string]: string }; 
  public get resources() {
    return this.getStringMapAttribute('resources');
  }
  public set resources(value: { [key: string]: string }) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // topology - computed: false, optional: true, required: false
  private _topology = new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesTopology) {
    this._topology.internalValue = value;
  }
  public resetTopology() {
    this._topology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vf_groups - computed: false, optional: true, required: false
  private _vfGroups = new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroupsList(this, "vf_groups", false);
  public get vfGroups() {
    return this._vfGroups;
  }
  public putVfGroups(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesVfGroups[] | cdktf.IResolvable) {
    this._vfGroups.internalValue = value;
  }
  public resetVfGroups() {
    this._vfGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vfGroupsInput() {
    return this._vfGroups.internalValue;
  }
}

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesOutputReference {
    return new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#devices DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest#devices}
  */
  readonly devices?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevices[] | cdktf.IResolvable;
}

export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesToTerraform, false)(struct!.devices),
  }
}


export function dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devices.internalValue = value.devices;
    }
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest k8s_scheduling_koordinator_sh_device_v1alpha1_manifest}
*/
export class DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_scheduling_koordinator_sh_device_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchedulingKoordinatorShDeviceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_scheduling_koordinator_sh_device_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/scheduling_koordinator_sh_device_v1alpha1_manifest k8s_scheduling_koordinator_sh_device_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_scheduling_koordinator_sh_device_v1alpha1_manifest',
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
  private _metadata = new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingKoordinatorShDeviceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
