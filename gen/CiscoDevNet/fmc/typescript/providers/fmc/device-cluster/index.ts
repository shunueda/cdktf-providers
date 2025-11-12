// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#id DeviceCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#name DeviceCluster#name}
  */
  readonly name?: string;
  /**
  * common_bootstrap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#common_bootstrap DeviceCluster#common_bootstrap}
  */
  readonly commonBootstrap: DeviceClusterCommonBootstrap[] | cdktf.IResolvable;
  /**
  * control_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#control_device DeviceCluster#control_device}
  */
  readonly controlDevice: DeviceClusterControlDevice[] | cdktf.IResolvable;
  /**
  * data_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#data_devices DeviceCluster#data_devices}
  */
  readonly dataDevices?: DeviceClusterDataDevices[] | cdktf.IResolvable;
}
export interface DeviceClusterCommonBootstrapCclInterface {
  /**
  * Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#id DeviceCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#name DeviceCluster#name}
  */
  readonly name?: string;
}

export function deviceClusterCommonBootstrapCclInterfaceToTerraform(struct?: DeviceClusterCommonBootstrapCclInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceClusterCommonBootstrapCclInterfaceToHclTerraform(struct?: DeviceClusterCommonBootstrapCclInterface | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceClusterCommonBootstrapCclInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceClusterCommonBootstrapCclInterface | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceClusterCommonBootstrapCclInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DeviceClusterCommonBootstrapCclInterfaceList extends cdktf.ComplexList {
  public internalValue? : DeviceClusterCommonBootstrapCclInterface[] | cdktf.IResolvable

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
  public get(index: number): DeviceClusterCommonBootstrapCclInterfaceOutputReference {
    return new DeviceClusterCommonBootstrapCclInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceClusterCommonBootstrap {
  /**
  * Cluster control network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#ccl_network DeviceCluster#ccl_network}
  */
  readonly cclNetwork?: string;
  /**
  * VNI network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#vni_network DeviceCluster#vni_network}
  */
  readonly vniNetwork?: string;
  /**
  * ccl_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#ccl_interface DeviceCluster#ccl_interface}
  */
  readonly cclInterface?: DeviceClusterCommonBootstrapCclInterface[] | cdktf.IResolvable;
}

export function deviceClusterCommonBootstrapToTerraform(struct?: DeviceClusterCommonBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ccl_network: cdktf.stringToTerraform(struct!.cclNetwork),
    vni_network: cdktf.stringToTerraform(struct!.vniNetwork),
    ccl_interface: cdktf.listMapper(deviceClusterCommonBootstrapCclInterfaceToTerraform, true)(struct!.cclInterface),
  }
}


export function deviceClusterCommonBootstrapToHclTerraform(struct?: DeviceClusterCommonBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ccl_network: {
      value: cdktf.stringToHclTerraform(struct!.cclNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vni_network: {
      value: cdktf.stringToHclTerraform(struct!.vniNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ccl_interface: {
      value: cdktf.listMapperHcl(deviceClusterCommonBootstrapCclInterfaceToHclTerraform, true)(struct!.cclInterface),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceClusterCommonBootstrapCclInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceClusterCommonBootstrapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceClusterCommonBootstrap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cclNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.cclNetwork = this._cclNetwork;
    }
    if (this._vniNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniNetwork = this._vniNetwork;
    }
    if (this._cclInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cclInterface = this._cclInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceClusterCommonBootstrap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cclNetwork = undefined;
      this._vniNetwork = undefined;
      this._cclInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cclNetwork = value.cclNetwork;
      this._vniNetwork = value.vniNetwork;
      this._cclInterface.internalValue = value.cclInterface;
    }
  }

  // ccl_network - computed: false, optional: true, required: false
  private _cclNetwork?: string; 
  public get cclNetwork() {
    return this.getStringAttribute('ccl_network');
  }
  public set cclNetwork(value: string) {
    this._cclNetwork = value;
  }
  public resetCclNetwork() {
    this._cclNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cclNetworkInput() {
    return this._cclNetwork;
  }

  // vni_network - computed: false, optional: true, required: false
  private _vniNetwork?: string; 
  public get vniNetwork() {
    return this.getStringAttribute('vni_network');
  }
  public set vniNetwork(value: string) {
    this._vniNetwork = value;
  }
  public resetVniNetwork() {
    this._vniNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniNetworkInput() {
    return this._vniNetwork;
  }

  // ccl_interface - computed: false, optional: true, required: false
  private _cclInterface = new DeviceClusterCommonBootstrapCclInterfaceList(this, "ccl_interface", false);
  public get cclInterface() {
    return this._cclInterface;
  }
  public putCclInterface(value: DeviceClusterCommonBootstrapCclInterface[] | cdktf.IResolvable) {
    this._cclInterface.internalValue = value;
  }
  public resetCclInterface() {
    this._cclInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cclInterfaceInput() {
    return this._cclInterface.internalValue;
  }
}

export class DeviceClusterCommonBootstrapList extends cdktf.ComplexList {
  public internalValue? : DeviceClusterCommonBootstrap[] | cdktf.IResolvable

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
  public get(index: number): DeviceClusterCommonBootstrapOutputReference {
    return new DeviceClusterCommonBootstrapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceClusterControlDeviceClusterNodeBootstrap {
  /**
  * Cluster control IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#cclip DeviceCluster#cclip}
  */
  readonly cclip: string;
  /**
  * Set the priority of cluster node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#priority DeviceCluster#priority}
  */
  readonly priority?: number;
}

export function deviceClusterControlDeviceClusterNodeBootstrapToTerraform(struct?: DeviceClusterControlDeviceClusterNodeBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cclip: cdktf.stringToTerraform(struct!.cclip),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function deviceClusterControlDeviceClusterNodeBootstrapToHclTerraform(struct?: DeviceClusterControlDeviceClusterNodeBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cclip: {
      value: cdktf.stringToHclTerraform(struct!.cclip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceClusterControlDeviceClusterNodeBootstrapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceClusterControlDeviceClusterNodeBootstrap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cclip !== undefined) {
      hasAnyValues = true;
      internalValueResult.cclip = this._cclip;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceClusterControlDeviceClusterNodeBootstrap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cclip = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cclip = value.cclip;
      this._priority = value.priority;
    }
  }

  // cclip - computed: false, optional: false, required: true
  private _cclip?: string; 
  public get cclip() {
    return this.getStringAttribute('cclip');
  }
  public set cclip(value: string) {
    this._cclip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cclipInput() {
    return this._cclip;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DeviceClusterControlDeviceClusterNodeBootstrapList extends cdktf.ComplexList {
  public internalValue? : DeviceClusterControlDeviceClusterNodeBootstrap[] | cdktf.IResolvable

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
  public get(index: number): DeviceClusterControlDeviceClusterNodeBootstrapOutputReference {
    return new DeviceClusterControlDeviceClusterNodeBootstrapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceClusterControlDeviceDeviceDetails {
  /**
  * Device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#id DeviceCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Device Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#name DeviceCluster#name}
  */
  readonly name?: string;
}

export function deviceClusterControlDeviceDeviceDetailsToTerraform(struct?: DeviceClusterControlDeviceDeviceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceClusterControlDeviceDeviceDetailsToHclTerraform(struct?: DeviceClusterControlDeviceDeviceDetails | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceClusterControlDeviceDeviceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceClusterControlDeviceDeviceDetails | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceClusterControlDeviceDeviceDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DeviceClusterControlDeviceDeviceDetailsList extends cdktf.ComplexList {
  public internalValue? : DeviceClusterControlDeviceDeviceDetails[] | cdktf.IResolvable

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
  public get(index: number): DeviceClusterControlDeviceDeviceDetailsOutputReference {
    return new DeviceClusterControlDeviceDeviceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceClusterControlDevice {
  /**
  * cluster_node_bootstrap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#cluster_node_bootstrap DeviceCluster#cluster_node_bootstrap}
  */
  readonly clusterNodeBootstrap: DeviceClusterControlDeviceClusterNodeBootstrap[] | cdktf.IResolvable;
  /**
  * device_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#device_details DeviceCluster#device_details}
  */
  readonly deviceDetails: DeviceClusterControlDeviceDeviceDetails[] | cdktf.IResolvable;
}

export function deviceClusterControlDeviceToTerraform(struct?: DeviceClusterControlDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_node_bootstrap: cdktf.listMapper(deviceClusterControlDeviceClusterNodeBootstrapToTerraform, true)(struct!.clusterNodeBootstrap),
    device_details: cdktf.listMapper(deviceClusterControlDeviceDeviceDetailsToTerraform, true)(struct!.deviceDetails),
  }
}


export function deviceClusterControlDeviceToHclTerraform(struct?: DeviceClusterControlDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_node_bootstrap: {
      value: cdktf.listMapperHcl(deviceClusterControlDeviceClusterNodeBootstrapToHclTerraform, true)(struct!.clusterNodeBootstrap),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceClusterControlDeviceClusterNodeBootstrapList",
    },
    device_details: {
      value: cdktf.listMapperHcl(deviceClusterControlDeviceDeviceDetailsToHclTerraform, true)(struct!.deviceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceClusterControlDeviceDeviceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceClusterControlDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceClusterControlDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNodeBootstrap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNodeBootstrap = this._clusterNodeBootstrap?.internalValue;
    }
    if (this._deviceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDetails = this._deviceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceClusterControlDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNodeBootstrap.internalValue = undefined;
      this._deviceDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNodeBootstrap.internalValue = value.clusterNodeBootstrap;
      this._deviceDetails.internalValue = value.deviceDetails;
    }
  }

  // cluster_node_bootstrap - computed: false, optional: false, required: true
  private _clusterNodeBootstrap = new DeviceClusterControlDeviceClusterNodeBootstrapList(this, "cluster_node_bootstrap", false);
  public get clusterNodeBootstrap() {
    return this._clusterNodeBootstrap;
  }
  public putClusterNodeBootstrap(value: DeviceClusterControlDeviceClusterNodeBootstrap[] | cdktf.IResolvable) {
    this._clusterNodeBootstrap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodeBootstrapInput() {
    return this._clusterNodeBootstrap.internalValue;
  }

  // device_details - computed: false, optional: false, required: true
  private _deviceDetails = new DeviceClusterControlDeviceDeviceDetailsList(this, "device_details", false);
  public get deviceDetails() {
    return this._deviceDetails;
  }
  public putDeviceDetails(value: DeviceClusterControlDeviceDeviceDetails[] | cdktf.IResolvable) {
    this._deviceDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDetailsInput() {
    return this._deviceDetails.internalValue;
  }
}

export class DeviceClusterControlDeviceList extends cdktf.ComplexList {
  public internalValue? : DeviceClusterControlDevice[] | cdktf.IResolvable

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
  public get(index: number): DeviceClusterControlDeviceOutputReference {
    return new DeviceClusterControlDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceClusterDataDevicesClusterNodeBootstrap {
  /**
  * Cluster control IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#cclip DeviceCluster#cclip}
  */
  readonly cclip?: string;
  /**
  * Set the priority of cluster node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#priority DeviceCluster#priority}
  */
  readonly priority?: number;
}

export function deviceClusterDataDevicesClusterNodeBootstrapToTerraform(struct?: DeviceClusterDataDevicesClusterNodeBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cclip: cdktf.stringToTerraform(struct!.cclip),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function deviceClusterDataDevicesClusterNodeBootstrapToHclTerraform(struct?: DeviceClusterDataDevicesClusterNodeBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cclip: {
      value: cdktf.stringToHclTerraform(struct!.cclip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceClusterDataDevicesClusterNodeBootstrapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceClusterDataDevicesClusterNodeBootstrap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cclip !== undefined) {
      hasAnyValues = true;
      internalValueResult.cclip = this._cclip;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceClusterDataDevicesClusterNodeBootstrap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cclip = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cclip = value.cclip;
      this._priority = value.priority;
    }
  }

  // cclip - computed: false, optional: true, required: false
  private _cclip?: string; 
  public get cclip() {
    return this.getStringAttribute('cclip');
  }
  public set cclip(value: string) {
    this._cclip = value;
  }
  public resetCclip() {
    this._cclip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cclipInput() {
    return this._cclip;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DeviceClusterDataDevicesClusterNodeBootstrapList extends cdktf.ComplexList {
  public internalValue? : DeviceClusterDataDevicesClusterNodeBootstrap[] | cdktf.IResolvable

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
  public get(index: number): DeviceClusterDataDevicesClusterNodeBootstrapOutputReference {
    return new DeviceClusterDataDevicesClusterNodeBootstrapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceClusterDataDevicesDeviceDetails {
  /**
  * Device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#id DeviceCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Device Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#name DeviceCluster#name}
  */
  readonly name?: string;
}

export function deviceClusterDataDevicesDeviceDetailsToTerraform(struct?: DeviceClusterDataDevicesDeviceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceClusterDataDevicesDeviceDetailsToHclTerraform(struct?: DeviceClusterDataDevicesDeviceDetails | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceClusterDataDevicesDeviceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceClusterDataDevicesDeviceDetails | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceClusterDataDevicesDeviceDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DeviceClusterDataDevicesDeviceDetailsList extends cdktf.ComplexList {
  public internalValue? : DeviceClusterDataDevicesDeviceDetails[] | cdktf.IResolvable

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
  public get(index: number): DeviceClusterDataDevicesDeviceDetailsOutputReference {
    return new DeviceClusterDataDevicesDeviceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceClusterDataDevices {
  /**
  * cluster_node_bootstrap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#cluster_node_bootstrap DeviceCluster#cluster_node_bootstrap}
  */
  readonly clusterNodeBootstrap?: DeviceClusterDataDevicesClusterNodeBootstrap[] | cdktf.IResolvable;
  /**
  * device_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#device_details DeviceCluster#device_details}
  */
  readonly deviceDetails?: DeviceClusterDataDevicesDeviceDetails[] | cdktf.IResolvable;
}

export function deviceClusterDataDevicesToTerraform(struct?: DeviceClusterDataDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_node_bootstrap: cdktf.listMapper(deviceClusterDataDevicesClusterNodeBootstrapToTerraform, true)(struct!.clusterNodeBootstrap),
    device_details: cdktf.listMapper(deviceClusterDataDevicesDeviceDetailsToTerraform, true)(struct!.deviceDetails),
  }
}


export function deviceClusterDataDevicesToHclTerraform(struct?: DeviceClusterDataDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_node_bootstrap: {
      value: cdktf.listMapperHcl(deviceClusterDataDevicesClusterNodeBootstrapToHclTerraform, true)(struct!.clusterNodeBootstrap),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceClusterDataDevicesClusterNodeBootstrapList",
    },
    device_details: {
      value: cdktf.listMapperHcl(deviceClusterDataDevicesDeviceDetailsToHclTerraform, true)(struct!.deviceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceClusterDataDevicesDeviceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceClusterDataDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceClusterDataDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNodeBootstrap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNodeBootstrap = this._clusterNodeBootstrap?.internalValue;
    }
    if (this._deviceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDetails = this._deviceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceClusterDataDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNodeBootstrap.internalValue = undefined;
      this._deviceDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNodeBootstrap.internalValue = value.clusterNodeBootstrap;
      this._deviceDetails.internalValue = value.deviceDetails;
    }
  }

  // cluster_node_bootstrap - computed: false, optional: true, required: false
  private _clusterNodeBootstrap = new DeviceClusterDataDevicesClusterNodeBootstrapList(this, "cluster_node_bootstrap", false);
  public get clusterNodeBootstrap() {
    return this._clusterNodeBootstrap;
  }
  public putClusterNodeBootstrap(value: DeviceClusterDataDevicesClusterNodeBootstrap[] | cdktf.IResolvable) {
    this._clusterNodeBootstrap.internalValue = value;
  }
  public resetClusterNodeBootstrap() {
    this._clusterNodeBootstrap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodeBootstrapInput() {
    return this._clusterNodeBootstrap.internalValue;
  }

  // device_details - computed: false, optional: true, required: false
  private _deviceDetails = new DeviceClusterDataDevicesDeviceDetailsList(this, "device_details", false);
  public get deviceDetails() {
    return this._deviceDetails;
  }
  public putDeviceDetails(value: DeviceClusterDataDevicesDeviceDetails[] | cdktf.IResolvable) {
    this._deviceDetails.internalValue = value;
  }
  public resetDeviceDetails() {
    this._deviceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDetailsInput() {
    return this._deviceDetails.internalValue;
  }
}

export class DeviceClusterDataDevicesList extends cdktf.ComplexList {
  public internalValue? : DeviceClusterDataDevices[] | cdktf.IResolvable

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
  public get(index: number): DeviceClusterDataDevicesOutputReference {
    return new DeviceClusterDataDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster fmc_device_cluster}
*/
export class DeviceCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_device_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceCluster to import
  * @param importFromId The id of the existing DeviceCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_device_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_cluster fmc_device_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_device_cluster',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._commonBootstrap.internalValue = config.commonBootstrap;
    this._controlDevice.internalValue = config.controlDevice;
    this._dataDevices.internalValue = config.dataDevices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // common_bootstrap - computed: false, optional: false, required: true
  private _commonBootstrap = new DeviceClusterCommonBootstrapList(this, "common_bootstrap", false);
  public get commonBootstrap() {
    return this._commonBootstrap;
  }
  public putCommonBootstrap(value: DeviceClusterCommonBootstrap[] | cdktf.IResolvable) {
    this._commonBootstrap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonBootstrapInput() {
    return this._commonBootstrap.internalValue;
  }

  // control_device - computed: false, optional: false, required: true
  private _controlDevice = new DeviceClusterControlDeviceList(this, "control_device", false);
  public get controlDevice() {
    return this._controlDevice;
  }
  public putControlDevice(value: DeviceClusterControlDevice[] | cdktf.IResolvable) {
    this._controlDevice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlDeviceInput() {
    return this._controlDevice.internalValue;
  }

  // data_devices - computed: false, optional: true, required: false
  private _dataDevices = new DeviceClusterDataDevicesList(this, "data_devices", false);
  public get dataDevices() {
    return this._dataDevices;
  }
  public putDataDevices(value: DeviceClusterDataDevices[] | cdktf.IResolvable) {
    this._dataDevices.internalValue = value;
  }
  public resetDataDevices() {
    this._dataDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDevicesInput() {
    return this._dataDevices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      common_bootstrap: cdktf.listMapper(deviceClusterCommonBootstrapToTerraform, true)(this._commonBootstrap.internalValue),
      control_device: cdktf.listMapper(deviceClusterControlDeviceToTerraform, true)(this._controlDevice.internalValue),
      data_devices: cdktf.listMapper(deviceClusterDataDevicesToTerraform, true)(this._dataDevices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_bootstrap: {
        value: cdktf.listMapperHcl(deviceClusterCommonBootstrapToHclTerraform, true)(this._commonBootstrap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceClusterCommonBootstrapList",
      },
      control_device: {
        value: cdktf.listMapperHcl(deviceClusterControlDeviceToHclTerraform, true)(this._controlDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceClusterControlDeviceList",
      },
      data_devices: {
        value: cdktf.listMapperHcl(deviceClusterDataDevicesToHclTerraform, true)(this._dataDevices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceClusterDataDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
