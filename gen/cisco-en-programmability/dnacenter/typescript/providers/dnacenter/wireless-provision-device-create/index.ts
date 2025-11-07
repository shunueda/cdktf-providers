// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessProvisionDeviceCreateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#id WirelessProvisionDeviceCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#parameters WirelessProvisionDeviceCreate#parameters}
  */
  readonly parameters: WirelessProvisionDeviceCreateParameters;
}
export interface WirelessProvisionDeviceCreateItemProvisioningTasks {
}

export function wirelessProvisionDeviceCreateItemProvisioningTasksToTerraform(struct?: WirelessProvisionDeviceCreateItemProvisioningTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProvisionDeviceCreateItemProvisioningTasksToHclTerraform(struct?: WirelessProvisionDeviceCreateItemProvisioningTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProvisionDeviceCreateItemProvisioningTasksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessProvisionDeviceCreateItemProvisioningTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionDeviceCreateItemProvisioningTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed - computed: true, optional: false, required: false
  public get failed() {
    return this.getListAttribute('failed');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getListAttribute('success');
  }
}

export class WirelessProvisionDeviceCreateItemProvisioningTasksList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProvisionDeviceCreateItemProvisioningTasksOutputReference {
    return new WirelessProvisionDeviceCreateItemProvisioningTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionDeviceCreateItem {
}

export function wirelessProvisionDeviceCreateItemToTerraform(struct?: WirelessProvisionDeviceCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProvisionDeviceCreateItemToHclTerraform(struct?: WirelessProvisionDeviceCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProvisionDeviceCreateItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessProvisionDeviceCreateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionDeviceCreateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // execution_url - computed: true, optional: false, required: false
  public get executionUrl() {
    return this.getStringAttribute('execution_url');
  }

  // provisioning_tasks - computed: true, optional: false, required: false
  private _provisioningTasks = new WirelessProvisionDeviceCreateItemProvisioningTasksList(this, "provisioning_tasks", false);
  public get provisioningTasks() {
    return this._provisioningTasks;
  }
}

export class WirelessProvisionDeviceCreateItemList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProvisionDeviceCreateItemOutputReference {
    return new WirelessProvisionDeviceCreateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionDeviceCreateParametersPayloadDynamicInterfaces {
  /**
  * Interface Gateway
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#interface_gateway WirelessProvisionDeviceCreate#interface_gateway}
  */
  readonly interfaceGateway?: string;
  /**
  * Interface IP Address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#interface_ipaddress WirelessProvisionDeviceCreate#interface_ipaddress}
  */
  readonly interfaceIpaddress?: string;
  /**
  * Interface Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#interface_name WirelessProvisionDeviceCreate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Interface Netmask In CIDR
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#interface_netmask_in_cid_r WirelessProvisionDeviceCreate#interface_netmask_in_cid_r}
  */
  readonly interfaceNetmaskInCidR?: number;
  /**
  * Lag Or Port Number
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#lag_or_port_number WirelessProvisionDeviceCreate#lag_or_port_number}
  */
  readonly lagOrPortNumber?: number;
  /**
  * VLAN ID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#vlan_id WirelessProvisionDeviceCreate#vlan_id}
  */
  readonly vlanId?: number;
}

export function wirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesToTerraform(struct?: WirelessProvisionDeviceCreateParametersPayloadDynamicInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_gateway: cdktf.stringToTerraform(struct!.interfaceGateway),
    interface_ipaddress: cdktf.stringToTerraform(struct!.interfaceIpaddress),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_netmask_in_cid_r: cdktf.numberToTerraform(struct!.interfaceNetmaskInCidR),
    lag_or_port_number: cdktf.numberToTerraform(struct!.lagOrPortNumber),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function wirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesToHclTerraform(struct?: WirelessProvisionDeviceCreateParametersPayloadDynamicInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_gateway: {
      value: cdktf.stringToHclTerraform(struct!.interfaceGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.interfaceIpaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_netmask_in_cid_r: {
      value: cdktf.numberToHclTerraform(struct!.interfaceNetmaskInCidR),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lag_or_port_number: {
      value: cdktf.numberToHclTerraform(struct!.lagOrPortNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProvisionDeviceCreateParametersPayloadDynamicInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceGateway = this._interfaceGateway;
    }
    if (this._interfaceIpaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpaddress = this._interfaceIpaddress;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNetmaskInCidR !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNetmaskInCidR = this._interfaceNetmaskInCidR;
    }
    if (this._lagOrPortNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.lagOrPortNumber = this._lagOrPortNumber;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionDeviceCreateParametersPayloadDynamicInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceGateway = undefined;
      this._interfaceIpaddress = undefined;
      this._interfaceName = undefined;
      this._interfaceNetmaskInCidR = undefined;
      this._lagOrPortNumber = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceGateway = value.interfaceGateway;
      this._interfaceIpaddress = value.interfaceIpaddress;
      this._interfaceName = value.interfaceName;
      this._interfaceNetmaskInCidR = value.interfaceNetmaskInCidR;
      this._lagOrPortNumber = value.lagOrPortNumber;
      this._vlanId = value.vlanId;
    }
  }

  // interface_gateway - computed: true, optional: true, required: false
  private _interfaceGateway?: string; 
  public get interfaceGateway() {
    return this.getStringAttribute('interface_gateway');
  }
  public set interfaceGateway(value: string) {
    this._interfaceGateway = value;
  }
  public resetInterfaceGateway() {
    this._interfaceGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceGatewayInput() {
    return this._interfaceGateway;
  }

  // interface_ipaddress - computed: true, optional: true, required: false
  private _interfaceIpaddress?: string; 
  public get interfaceIpaddress() {
    return this.getStringAttribute('interface_ipaddress');
  }
  public set interfaceIpaddress(value: string) {
    this._interfaceIpaddress = value;
  }
  public resetInterfaceIpaddress() {
    this._interfaceIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpaddressInput() {
    return this._interfaceIpaddress;
  }

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_netmask_in_cid_r - computed: true, optional: true, required: false
  private _interfaceNetmaskInCidR?: number; 
  public get interfaceNetmaskInCidR() {
    return this.getNumberAttribute('interface_netmask_in_cid_r');
  }
  public set interfaceNetmaskInCidR(value: number) {
    this._interfaceNetmaskInCidR = value;
  }
  public resetInterfaceNetmaskInCidR() {
    this._interfaceNetmaskInCidR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNetmaskInCidRInput() {
    return this._interfaceNetmaskInCidR;
  }

  // lag_or_port_number - computed: true, optional: true, required: false
  private _lagOrPortNumber?: number; 
  public get lagOrPortNumber() {
    return this.getNumberAttribute('lag_or_port_number');
  }
  public set lagOrPortNumber(value: number) {
    this._lagOrPortNumber = value;
  }
  public resetLagOrPortNumber() {
    this._lagOrPortNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagOrPortNumberInput() {
    return this._lagOrPortNumber;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class WirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesList extends cdktf.ComplexList {
  public internalValue? : WirelessProvisionDeviceCreateParametersPayloadDynamicInterfaces[] | cdktf.IResolvable

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
  public get(index: number): WirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesOutputReference {
    return new WirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionDeviceCreateParametersPayload {
  /**
  * Controller Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#device_name WirelessProvisionDeviceCreate#device_name}
  */
  readonly deviceName?: string;
  /**
  * List of managed AP locations (Site Hierarchies)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#managed_aplocations WirelessProvisionDeviceCreate#managed_aplocations}
  */
  readonly managedAplocations?: string[];
  /**
  * Full Site Hierarchy where device has to be assigned
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#site WirelessProvisionDeviceCreate#site}
  */
  readonly site?: string;
  /**
  * dynamic_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#dynamic_interfaces WirelessProvisionDeviceCreate#dynamic_interfaces}
  */
  readonly dynamicInterfaces?: WirelessProvisionDeviceCreateParametersPayloadDynamicInterfaces[] | cdktf.IResolvable;
}

export function wirelessProvisionDeviceCreateParametersPayloadToTerraform(struct?: WirelessProvisionDeviceCreateParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    managed_aplocations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedAplocations),
    site: cdktf.stringToTerraform(struct!.site),
    dynamic_interfaces: cdktf.listMapper(wirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesToTerraform, true)(struct!.dynamicInterfaces),
  }
}


export function wirelessProvisionDeviceCreateParametersPayloadToHclTerraform(struct?: WirelessProvisionDeviceCreateParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_aplocations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedAplocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_interfaces: {
      value: cdktf.listMapperHcl(wirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesToHclTerraform, true)(struct!.dynamicInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProvisionDeviceCreateParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProvisionDeviceCreateParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._managedAplocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedAplocations = this._managedAplocations;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._dynamicInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicInterfaces = this._dynamicInterfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionDeviceCreateParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._managedAplocations = undefined;
      this._site = undefined;
      this._dynamicInterfaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._managedAplocations = value.managedAplocations;
      this._site = value.site;
      this._dynamicInterfaces.internalValue = value.dynamicInterfaces;
    }
  }

  // device_name - computed: true, optional: true, required: false
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

  // managed_aplocations - computed: true, optional: true, required: false
  private _managedAplocations?: string[]; 
  public get managedAplocations() {
    return this.getListAttribute('managed_aplocations');
  }
  public set managedAplocations(value: string[]) {
    this._managedAplocations = value;
  }
  public resetManagedAplocations() {
    this._managedAplocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAplocationsInput() {
    return this._managedAplocations;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // dynamic_interfaces - computed: false, optional: true, required: false
  private _dynamicInterfaces = new WirelessProvisionDeviceCreateParametersPayloadDynamicInterfacesList(this, "dynamic_interfaces", false);
  public get dynamicInterfaces() {
    return this._dynamicInterfaces;
  }
  public putDynamicInterfaces(value: WirelessProvisionDeviceCreateParametersPayloadDynamicInterfaces[] | cdktf.IResolvable) {
    this._dynamicInterfaces.internalValue = value;
  }
  public resetDynamicInterfaces() {
    this._dynamicInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInterfacesInput() {
    return this._dynamicInterfaces.internalValue;
  }
}

export class WirelessProvisionDeviceCreateParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : WirelessProvisionDeviceCreateParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): WirelessProvisionDeviceCreateParametersPayloadOutputReference {
    return new WirelessProvisionDeviceCreateParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionDeviceCreateParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#payload WirelessProvisionDeviceCreate#payload}
  */
  readonly payload?: WirelessProvisionDeviceCreateParametersPayload[] | cdktf.IResolvable;
}

export function wirelessProvisionDeviceCreateParametersToTerraform(struct?: WirelessProvisionDeviceCreateParametersOutputReference | WirelessProvisionDeviceCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(wirelessProvisionDeviceCreateParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function wirelessProvisionDeviceCreateParametersToHclTerraform(struct?: WirelessProvisionDeviceCreateParametersOutputReference | WirelessProvisionDeviceCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(wirelessProvisionDeviceCreateParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessProvisionDeviceCreateParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProvisionDeviceCreateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelessProvisionDeviceCreateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionDeviceCreateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new WirelessProvisionDeviceCreateParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: WirelessProvisionDeviceCreateParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create dnacenter_wireless_provision_device_create}
*/
export class WirelessProvisionDeviceCreate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_provision_device_create";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessProvisionDeviceCreate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessProvisionDeviceCreate to import
  * @param importFromId The id of the existing WirelessProvisionDeviceCreate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessProvisionDeviceCreate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_provision_device_create", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_device_create dnacenter_wireless_provision_device_create} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessProvisionDeviceCreateConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessProvisionDeviceCreateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_provision_device_create',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new WirelessProvisionDeviceCreateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new WirelessProvisionDeviceCreateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: WirelessProvisionDeviceCreateParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: wirelessProvisionDeviceCreateParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: wirelessProvisionDeviceCreateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessProvisionDeviceCreateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
