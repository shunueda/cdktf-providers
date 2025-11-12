// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceengineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#availability_zone Serviceengine#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#cloud_ref Serviceengine#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#container_mode Serviceengine#container_mode}
  */
  readonly containerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#container_type Serviceengine#container_type}
  */
  readonly containerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#controller_created Serviceengine#controller_created}
  */
  readonly controllerCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#controller_ip Serviceengine#controller_ip}
  */
  readonly controllerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#enable_state Serviceengine#enable_state}
  */
  readonly enableState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#flavor Serviceengine#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#host_ref Serviceengine#host_ref}
  */
  readonly hostRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#hypervisor Serviceengine#hypervisor}
  */
  readonly hypervisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#id Serviceengine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#name Serviceengine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#nsxt_no_hotplug Serviceengine#nsxt_no_hotplug}
  */
  readonly nsxtNoHotplug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#se_group_ref Serviceengine#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#tenant_ref Serviceengine#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#uuid Serviceengine#uuid}
  */
  readonly uuid?: string;
  /**
  * data_vnics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#data_vnics Serviceengine#data_vnics}
  */
  readonly dataVnics?: ServiceengineDataVnics[] | cdktf.IResolvable;
  /**
  * mgmt_vnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mgmt_vnic Serviceengine#mgmt_vnic}
  */
  readonly mgmtVnic?: ServiceengineMgmtVnic[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#resources Serviceengine#resources}
  */
  readonly resources?: ServiceengineResources[] | cdktf.IResolvable;
}
export interface ServiceengineDataVnicsMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#active Serviceengine#active}
  */
  readonly active?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#if_name Serviceengine#if_name}
  */
  readonly ifName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mac_address Serviceengine#mac_address}
  */
  readonly macAddress?: string;
}

export function serviceengineDataVnicsMembersToTerraform(struct?: ServiceengineDataVnicsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.stringToTerraform(struct!.active),
    if_name: cdktf.stringToTerraform(struct!.ifName),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function serviceengineDataVnicsMembersToHclTerraform(struct?: ServiceengineDataVnicsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.stringToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_name: {
      value: cdktf.stringToHclTerraform(struct!.ifName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineDataVnicsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnicsMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._ifName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifName = this._ifName;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnicsMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._ifName = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._ifName = value.ifName;
      this._macAddress = value.macAddress;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: string; 
  public get active() {
    return this.getStringAttribute('active');
  }
  public set active(value: string) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // if_name - computed: false, optional: false, required: true
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class ServiceengineDataVnicsMembersList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnicsMembers[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsMembersOutputReference {
    return new ServiceengineDataVnicsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#addr Serviceengine#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#type Serviceengine#type}
  */
  readonly type: string;
}

export function serviceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrToTerraform(struct?: ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrToHclTerraform(struct?: ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrOutputReference {
    return new ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineDataVnicsVlanInterfacesVnicNetworksIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mask Serviceengine#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip_addr Serviceengine#ip_addr}
  */
  readonly ipAddr: ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr[] | cdktf.IResolvable;
}

export function serviceengineDataVnicsVlanInterfacesVnicNetworksIpToTerraform(struct?: ServiceengineDataVnicsVlanInterfacesVnicNetworksIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceengineDataVnicsVlanInterfacesVnicNetworksIpToHclTerraform(struct?: ServiceengineDataVnicsVlanInterfacesVnicNetworksIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(serviceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineDataVnicsVlanInterfacesVnicNetworksIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnicsVlanInterfacesVnicNetworksIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnicsVlanInterfacesVnicNetworksIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceengineDataVnicsVlanInterfacesVnicNetworksIpList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnicsVlanInterfacesVnicNetworksIp[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsVlanInterfacesVnicNetworksIpOutputReference {
    return new ServiceengineDataVnicsVlanInterfacesVnicNetworksIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineDataVnicsVlanInterfacesVnicNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ctlr_alloc Serviceengine#ctlr_alloc}
  */
  readonly ctlrAlloc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mode Serviceengine#mode}
  */
  readonly mode: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip Serviceengine#ip}
  */
  readonly ip: ServiceengineDataVnicsVlanInterfacesVnicNetworksIp[] | cdktf.IResolvable;
}

export function serviceengineDataVnicsVlanInterfacesVnicNetworksToTerraform(struct?: ServiceengineDataVnicsVlanInterfacesVnicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ctlr_alloc: cdktf.stringToTerraform(struct!.ctlrAlloc),
    mode: cdktf.stringToTerraform(struct!.mode),
    ip: cdktf.listMapper(serviceengineDataVnicsVlanInterfacesVnicNetworksIpToTerraform, true)(struct!.ip),
  }
}


export function serviceengineDataVnicsVlanInterfacesVnicNetworksToHclTerraform(struct?: ServiceengineDataVnicsVlanInterfacesVnicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ctlr_alloc: {
      value: cdktf.stringToHclTerraform(struct!.ctlrAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(serviceengineDataVnicsVlanInterfacesVnicNetworksIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceengineDataVnicsVlanInterfacesVnicNetworksIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineDataVnicsVlanInterfacesVnicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnicsVlanInterfacesVnicNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ctlrAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlrAlloc = this._ctlrAlloc;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnicsVlanInterfacesVnicNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ctlrAlloc = undefined;
      this._mode = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ctlrAlloc = value.ctlrAlloc;
      this._mode = value.mode;
      this._ip.internalValue = value.ip;
    }
  }

  // ctlr_alloc - computed: false, optional: true, required: false
  private _ctlrAlloc?: string; 
  public get ctlrAlloc() {
    return this.getStringAttribute('ctlr_alloc');
  }
  public set ctlrAlloc(value: string) {
    this._ctlrAlloc = value;
  }
  public resetCtlrAlloc() {
    this._ctlrAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlrAllocInput() {
    return this._ctlrAlloc;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new ServiceengineDataVnicsVlanInterfacesVnicNetworksIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: ServiceengineDataVnicsVlanInterfacesVnicNetworksIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class ServiceengineDataVnicsVlanInterfacesVnicNetworksList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnicsVlanInterfacesVnicNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsVlanInterfacesVnicNetworksOutputReference {
    return new ServiceengineDataVnicsVlanInterfacesVnicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineDataVnicsVlanInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#dhcp_enabled Serviceengine#dhcp_enabled}
  */
  readonly dhcpEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#enabled Serviceengine#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#if_name Serviceengine#if_name}
  */
  readonly ifName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip6_autocfg_enabled Serviceengine#ip6_autocfg_enabled}
  */
  readonly ip6AutocfgEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_mgmt Serviceengine#is_mgmt}
  */
  readonly isMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vlan_id Serviceengine#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vrf_ref Serviceengine#vrf_ref}
  */
  readonly vrfRef?: string;
  /**
  * vnic_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vnic_networks Serviceengine#vnic_networks}
  */
  readonly vnicNetworks?: ServiceengineDataVnicsVlanInterfacesVnicNetworks[] | cdktf.IResolvable;
}

export function serviceengineDataVnicsVlanInterfacesToTerraform(struct?: ServiceengineDataVnicsVlanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_enabled: cdktf.stringToTerraform(struct!.dhcpEnabled),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    if_name: cdktf.stringToTerraform(struct!.ifName),
    ip6_autocfg_enabled: cdktf.stringToTerraform(struct!.ip6AutocfgEnabled),
    is_mgmt: cdktf.stringToTerraform(struct!.isMgmt),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vrf_ref: cdktf.stringToTerraform(struct!.vrfRef),
    vnic_networks: cdktf.listMapper(serviceengineDataVnicsVlanInterfacesVnicNetworksToTerraform, true)(struct!.vnicNetworks),
  }
}


export function serviceengineDataVnicsVlanInterfacesToHclTerraform(struct?: ServiceengineDataVnicsVlanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_enabled: {
      value: cdktf.stringToHclTerraform(struct!.dhcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_name: {
      value: cdktf.stringToHclTerraform(struct!.ifName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_autocfg_enabled: {
      value: cdktf.stringToHclTerraform(struct!.ip6AutocfgEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_mgmt: {
      value: cdktf.stringToHclTerraform(struct!.isMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_ref: {
      value: cdktf.stringToHclTerraform(struct!.vrfRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_networks: {
      value: cdktf.listMapperHcl(serviceengineDataVnicsVlanInterfacesVnicNetworksToHclTerraform, true)(struct!.vnicNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceengineDataVnicsVlanInterfacesVnicNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineDataVnicsVlanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnicsVlanInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpEnabled = this._dhcpEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ifName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifName = this._ifName;
    }
    if (this._ip6AutocfgEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6AutocfgEnabled = this._ip6AutocfgEnabled;
    }
    if (this._isMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMgmt = this._isMgmt;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vrfRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfRef = this._vrfRef;
    }
    if (this._vnicNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicNetworks = this._vnicNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnicsVlanInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpEnabled = undefined;
      this._enabled = undefined;
      this._ifName = undefined;
      this._ip6AutocfgEnabled = undefined;
      this._isMgmt = undefined;
      this._vlanId = undefined;
      this._vrfRef = undefined;
      this._vnicNetworks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpEnabled = value.dhcpEnabled;
      this._enabled = value.enabled;
      this._ifName = value.ifName;
      this._ip6AutocfgEnabled = value.ip6AutocfgEnabled;
      this._isMgmt = value.isMgmt;
      this._vlanId = value.vlanId;
      this._vrfRef = value.vrfRef;
      this._vnicNetworks.internalValue = value.vnicNetworks;
    }
  }

  // dhcp_enabled - computed: true, optional: true, required: false
  private _dhcpEnabled?: string; 
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: string) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // if_name - computed: false, optional: false, required: true
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // ip6_autocfg_enabled - computed: true, optional: true, required: false
  private _ip6AutocfgEnabled?: string; 
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }
  public set ip6AutocfgEnabled(value: string) {
    this._ip6AutocfgEnabled = value;
  }
  public resetIp6AutocfgEnabled() {
    this._ip6AutocfgEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AutocfgEnabledInput() {
    return this._ip6AutocfgEnabled;
  }

  // is_mgmt - computed: false, optional: true, required: false
  private _isMgmt?: string; 
  public get isMgmt() {
    return this.getStringAttribute('is_mgmt');
  }
  public set isMgmt(value: string) {
    this._isMgmt = value;
  }
  public resetIsMgmt() {
    this._isMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMgmtInput() {
    return this._isMgmt;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrf_ref - computed: true, optional: true, required: false
  private _vrfRef?: string; 
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
  public set vrfRef(value: string) {
    this._vrfRef = value;
  }
  public resetVrfRef() {
    this._vrfRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfRefInput() {
    return this._vrfRef;
  }

  // vnic_networks - computed: false, optional: true, required: false
  private _vnicNetworks = new ServiceengineDataVnicsVlanInterfacesVnicNetworksList(this, "vnic_networks", false);
  public get vnicNetworks() {
    return this._vnicNetworks;
  }
  public putVnicNetworks(value: ServiceengineDataVnicsVlanInterfacesVnicNetworks[] | cdktf.IResolvable) {
    this._vnicNetworks.internalValue = value;
  }
  public resetVnicNetworks() {
    this._vnicNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicNetworksInput() {
    return this._vnicNetworks.internalValue;
  }
}

export class ServiceengineDataVnicsVlanInterfacesList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnicsVlanInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsVlanInterfacesOutputReference {
    return new ServiceengineDataVnicsVlanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineDataVnicsVnicNetworksIpIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#addr Serviceengine#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#type Serviceengine#type}
  */
  readonly type: string;
}

export function serviceengineDataVnicsVnicNetworksIpIpAddrToTerraform(struct?: ServiceengineDataVnicsVnicNetworksIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceengineDataVnicsVnicNetworksIpIpAddrToHclTerraform(struct?: ServiceengineDataVnicsVnicNetworksIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class ServiceengineDataVnicsVnicNetworksIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnicsVnicNetworksIpIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnicsVnicNetworksIpIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class ServiceengineDataVnicsVnicNetworksIpIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnicsVnicNetworksIpIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsVnicNetworksIpIpAddrOutputReference {
    return new ServiceengineDataVnicsVnicNetworksIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineDataVnicsVnicNetworksIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mask Serviceengine#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip_addr Serviceengine#ip_addr}
  */
  readonly ipAddr: ServiceengineDataVnicsVnicNetworksIpIpAddr[] | cdktf.IResolvable;
}

export function serviceengineDataVnicsVnicNetworksIpToTerraform(struct?: ServiceengineDataVnicsVnicNetworksIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceengineDataVnicsVnicNetworksIpIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceengineDataVnicsVnicNetworksIpToHclTerraform(struct?: ServiceengineDataVnicsVnicNetworksIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(serviceengineDataVnicsVnicNetworksIpIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceengineDataVnicsVnicNetworksIpIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineDataVnicsVnicNetworksIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnicsVnicNetworksIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnicsVnicNetworksIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new ServiceengineDataVnicsVnicNetworksIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceengineDataVnicsVnicNetworksIpIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceengineDataVnicsVnicNetworksIpList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnicsVnicNetworksIp[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsVnicNetworksIpOutputReference {
    return new ServiceengineDataVnicsVnicNetworksIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineDataVnicsVnicNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ctlr_alloc Serviceengine#ctlr_alloc}
  */
  readonly ctlrAlloc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mode Serviceengine#mode}
  */
  readonly mode: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip Serviceengine#ip}
  */
  readonly ip: ServiceengineDataVnicsVnicNetworksIp[] | cdktf.IResolvable;
}

export function serviceengineDataVnicsVnicNetworksToTerraform(struct?: ServiceengineDataVnicsVnicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ctlr_alloc: cdktf.stringToTerraform(struct!.ctlrAlloc),
    mode: cdktf.stringToTerraform(struct!.mode),
    ip: cdktf.listMapper(serviceengineDataVnicsVnicNetworksIpToTerraform, true)(struct!.ip),
  }
}


export function serviceengineDataVnicsVnicNetworksToHclTerraform(struct?: ServiceengineDataVnicsVnicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ctlr_alloc: {
      value: cdktf.stringToHclTerraform(struct!.ctlrAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(serviceengineDataVnicsVnicNetworksIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceengineDataVnicsVnicNetworksIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineDataVnicsVnicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnicsVnicNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ctlrAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlrAlloc = this._ctlrAlloc;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnicsVnicNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ctlrAlloc = undefined;
      this._mode = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ctlrAlloc = value.ctlrAlloc;
      this._mode = value.mode;
      this._ip.internalValue = value.ip;
    }
  }

  // ctlr_alloc - computed: false, optional: true, required: false
  private _ctlrAlloc?: string; 
  public get ctlrAlloc() {
    return this.getStringAttribute('ctlr_alloc');
  }
  public set ctlrAlloc(value: string) {
    this._ctlrAlloc = value;
  }
  public resetCtlrAlloc() {
    this._ctlrAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlrAllocInput() {
    return this._ctlrAlloc;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new ServiceengineDataVnicsVnicNetworksIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: ServiceengineDataVnicsVnicNetworksIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class ServiceengineDataVnicsVnicNetworksList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnicsVnicNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsVnicNetworksOutputReference {
    return new ServiceengineDataVnicsVnicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineDataVnics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#adapter Serviceengine#adapter}
  */
  readonly adapter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#aggregator_chgd Serviceengine#aggregator_chgd}
  */
  readonly aggregatorChgd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#can_se_dp_takeover Serviceengine#can_se_dp_takeover}
  */
  readonly canSeDpTakeover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#connected Serviceengine#connected}
  */
  readonly connected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#del_pending Serviceengine#del_pending}
  */
  readonly delPending?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#delete_vnic Serviceengine#delete_vnic}
  */
  readonly deleteVnic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#dhcp_enabled Serviceengine#dhcp_enabled}
  */
  readonly dhcpEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#dp_deletion_done Serviceengine#dp_deletion_done}
  */
  readonly dpDeletionDone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#enabled Serviceengine#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#if_name Serviceengine#if_name}
  */
  readonly ifName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip6_autocfg_enabled Serviceengine#ip6_autocfg_enabled}
  */
  readonly ip6AutocfgEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_asm Serviceengine#is_asm}
  */
  readonly isAsm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_avi_internal_network Serviceengine#is_avi_internal_network}
  */
  readonly isAviInternalNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_hsm Serviceengine#is_hsm}
  */
  readonly isHsm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_mgmt Serviceengine#is_mgmt}
  */
  readonly isMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_portchannel Serviceengine#is_portchannel}
  */
  readonly isPortchannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#link_up Serviceengine#link_up}
  */
  readonly linkUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#linux_name Serviceengine#linux_name}
  */
  readonly linuxName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mac_address Serviceengine#mac_address}
  */
  readonly macAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mtu Serviceengine#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#network_name Serviceengine#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#network_ref Serviceengine#network_ref}
  */
  readonly networkRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#num_rx_descriptors Serviceengine#num_rx_descriptors}
  */
  readonly numRxDescriptors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#num_tx_descriptors Serviceengine#num_tx_descriptors}
  */
  readonly numTxDescriptors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#pci_id Serviceengine#pci_id}
  */
  readonly pciId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#port_uuid Serviceengine#port_uuid}
  */
  readonly portUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vlan_id Serviceengine#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vrf_id Serviceengine#vrf_id}
  */
  readonly vrfId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vrf_ref Serviceengine#vrf_ref}
  */
  readonly vrfRef?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#members Serviceengine#members}
  */
  readonly members?: ServiceengineDataVnicsMembers[] | cdktf.IResolvable;
  /**
  * vlan_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vlan_interfaces Serviceengine#vlan_interfaces}
  */
  readonly vlanInterfaces?: ServiceengineDataVnicsVlanInterfaces[] | cdktf.IResolvable;
  /**
  * vnic_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vnic_networks Serviceengine#vnic_networks}
  */
  readonly vnicNetworks?: ServiceengineDataVnicsVnicNetworks[] | cdktf.IResolvable;
}

export function serviceengineDataVnicsToTerraform(struct?: ServiceengineDataVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter: cdktf.stringToTerraform(struct!.adapter),
    aggregator_chgd: cdktf.stringToTerraform(struct!.aggregatorChgd),
    can_se_dp_takeover: cdktf.stringToTerraform(struct!.canSeDpTakeover),
    connected: cdktf.stringToTerraform(struct!.connected),
    del_pending: cdktf.stringToTerraform(struct!.delPending),
    delete_vnic: cdktf.stringToTerraform(struct!.deleteVnic),
    dhcp_enabled: cdktf.stringToTerraform(struct!.dhcpEnabled),
    dp_deletion_done: cdktf.stringToTerraform(struct!.dpDeletionDone),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    if_name: cdktf.stringToTerraform(struct!.ifName),
    ip6_autocfg_enabled: cdktf.stringToTerraform(struct!.ip6AutocfgEnabled),
    is_asm: cdktf.stringToTerraform(struct!.isAsm),
    is_avi_internal_network: cdktf.stringToTerraform(struct!.isAviInternalNetwork),
    is_hsm: cdktf.stringToTerraform(struct!.isHsm),
    is_mgmt: cdktf.stringToTerraform(struct!.isMgmt),
    is_portchannel: cdktf.stringToTerraform(struct!.isPortchannel),
    link_up: cdktf.stringToTerraform(struct!.linkUp),
    linux_name: cdktf.stringToTerraform(struct!.linuxName),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    network_ref: cdktf.stringToTerraform(struct!.networkRef),
    num_rx_descriptors: cdktf.stringToTerraform(struct!.numRxDescriptors),
    num_tx_descriptors: cdktf.stringToTerraform(struct!.numTxDescriptors),
    pci_id: cdktf.stringToTerraform(struct!.pciId),
    port_uuid: cdktf.stringToTerraform(struct!.portUuid),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vrf_id: cdktf.stringToTerraform(struct!.vrfId),
    vrf_ref: cdktf.stringToTerraform(struct!.vrfRef),
    members: cdktf.listMapper(serviceengineDataVnicsMembersToTerraform, true)(struct!.members),
    vlan_interfaces: cdktf.listMapper(serviceengineDataVnicsVlanInterfacesToTerraform, true)(struct!.vlanInterfaces),
    vnic_networks: cdktf.listMapper(serviceengineDataVnicsVnicNetworksToTerraform, true)(struct!.vnicNetworks),
  }
}


export function serviceengineDataVnicsToHclTerraform(struct?: ServiceengineDataVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter: {
      value: cdktf.stringToHclTerraform(struct!.adapter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregator_chgd: {
      value: cdktf.stringToHclTerraform(struct!.aggregatorChgd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_se_dp_takeover: {
      value: cdktf.stringToHclTerraform(struct!.canSeDpTakeover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connected: {
      value: cdktf.stringToHclTerraform(struct!.connected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    del_pending: {
      value: cdktf.stringToHclTerraform(struct!.delPending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_vnic: {
      value: cdktf.stringToHclTerraform(struct!.deleteVnic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_enabled: {
      value: cdktf.stringToHclTerraform(struct!.dhcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_deletion_done: {
      value: cdktf.stringToHclTerraform(struct!.dpDeletionDone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_name: {
      value: cdktf.stringToHclTerraform(struct!.ifName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_autocfg_enabled: {
      value: cdktf.stringToHclTerraform(struct!.ip6AutocfgEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_asm: {
      value: cdktf.stringToHclTerraform(struct!.isAsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_avi_internal_network: {
      value: cdktf.stringToHclTerraform(struct!.isAviInternalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hsm: {
      value: cdktf.stringToHclTerraform(struct!.isHsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_mgmt: {
      value: cdktf.stringToHclTerraform(struct!.isMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_portchannel: {
      value: cdktf.stringToHclTerraform(struct!.isPortchannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_up: {
      value: cdktf.stringToHclTerraform(struct!.linkUp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_name: {
      value: cdktf.stringToHclTerraform(struct!.linuxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.stringToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ref: {
      value: cdktf.stringToHclTerraform(struct!.networkRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_rx_descriptors: {
      value: cdktf.stringToHclTerraform(struct!.numRxDescriptors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_tx_descriptors: {
      value: cdktf.stringToHclTerraform(struct!.numTxDescriptors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pci_id: {
      value: cdktf.stringToHclTerraform(struct!.pciId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_uuid: {
      value: cdktf.stringToHclTerraform(struct!.portUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_id: {
      value: cdktf.stringToHclTerraform(struct!.vrfId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_ref: {
      value: cdktf.stringToHclTerraform(struct!.vrfRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(serviceengineDataVnicsMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceengineDataVnicsMembersList",
    },
    vlan_interfaces: {
      value: cdktf.listMapperHcl(serviceengineDataVnicsVlanInterfacesToHclTerraform, true)(struct!.vlanInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceengineDataVnicsVlanInterfacesList",
    },
    vnic_networks: {
      value: cdktf.listMapperHcl(serviceengineDataVnicsVnicNetworksToHclTerraform, true)(struct!.vnicNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceengineDataVnicsVnicNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineDataVnicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineDataVnics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapter !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapter = this._adapter;
    }
    if (this._aggregatorChgd !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorChgd = this._aggregatorChgd;
    }
    if (this._canSeDpTakeover !== undefined) {
      hasAnyValues = true;
      internalValueResult.canSeDpTakeover = this._canSeDpTakeover;
    }
    if (this._connected !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected;
    }
    if (this._delPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.delPending = this._delPending;
    }
    if (this._deleteVnic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteVnic = this._deleteVnic;
    }
    if (this._dhcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpEnabled = this._dhcpEnabled;
    }
    if (this._dpDeletionDone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpDeletionDone = this._dpDeletionDone;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ifName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifName = this._ifName;
    }
    if (this._ip6AutocfgEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6AutocfgEnabled = this._ip6AutocfgEnabled;
    }
    if (this._isAsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAsm = this._isAsm;
    }
    if (this._isAviInternalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAviInternalNetwork = this._isAviInternalNetwork;
    }
    if (this._isHsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHsm = this._isHsm;
    }
    if (this._isMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMgmt = this._isMgmt;
    }
    if (this._isPortchannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPortchannel = this._isPortchannel;
    }
    if (this._linkUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUp = this._linkUp;
    }
    if (this._linuxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxName = this._linuxName;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._networkRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRef = this._networkRef;
    }
    if (this._numRxDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRxDescriptors = this._numRxDescriptors;
    }
    if (this._numTxDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTxDescriptors = this._numTxDescriptors;
    }
    if (this._pciId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciId = this._pciId;
    }
    if (this._portUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.portUuid = this._portUuid;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vrfId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfId = this._vrfId;
    }
    if (this._vrfRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfRef = this._vrfRef;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    if (this._vlanInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterfaces = this._vlanInterfaces?.internalValue;
    }
    if (this._vnicNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicNetworks = this._vnicNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineDataVnics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapter = undefined;
      this._aggregatorChgd = undefined;
      this._canSeDpTakeover = undefined;
      this._connected = undefined;
      this._delPending = undefined;
      this._deleteVnic = undefined;
      this._dhcpEnabled = undefined;
      this._dpDeletionDone = undefined;
      this._enabled = undefined;
      this._ifName = undefined;
      this._ip6AutocfgEnabled = undefined;
      this._isAsm = undefined;
      this._isAviInternalNetwork = undefined;
      this._isHsm = undefined;
      this._isMgmt = undefined;
      this._isPortchannel = undefined;
      this._linkUp = undefined;
      this._linuxName = undefined;
      this._macAddress = undefined;
      this._mtu = undefined;
      this._networkName = undefined;
      this._networkRef = undefined;
      this._numRxDescriptors = undefined;
      this._numTxDescriptors = undefined;
      this._pciId = undefined;
      this._portUuid = undefined;
      this._vlanId = undefined;
      this._vrfId = undefined;
      this._vrfRef = undefined;
      this._members.internalValue = undefined;
      this._vlanInterfaces.internalValue = undefined;
      this._vnicNetworks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapter = value.adapter;
      this._aggregatorChgd = value.aggregatorChgd;
      this._canSeDpTakeover = value.canSeDpTakeover;
      this._connected = value.connected;
      this._delPending = value.delPending;
      this._deleteVnic = value.deleteVnic;
      this._dhcpEnabled = value.dhcpEnabled;
      this._dpDeletionDone = value.dpDeletionDone;
      this._enabled = value.enabled;
      this._ifName = value.ifName;
      this._ip6AutocfgEnabled = value.ip6AutocfgEnabled;
      this._isAsm = value.isAsm;
      this._isAviInternalNetwork = value.isAviInternalNetwork;
      this._isHsm = value.isHsm;
      this._isMgmt = value.isMgmt;
      this._isPortchannel = value.isPortchannel;
      this._linkUp = value.linkUp;
      this._linuxName = value.linuxName;
      this._macAddress = value.macAddress;
      this._mtu = value.mtu;
      this._networkName = value.networkName;
      this._networkRef = value.networkRef;
      this._numRxDescriptors = value.numRxDescriptors;
      this._numTxDescriptors = value.numTxDescriptors;
      this._pciId = value.pciId;
      this._portUuid = value.portUuid;
      this._vlanId = value.vlanId;
      this._vrfId = value.vrfId;
      this._vrfRef = value.vrfRef;
      this._members.internalValue = value.members;
      this._vlanInterfaces.internalValue = value.vlanInterfaces;
      this._vnicNetworks.internalValue = value.vnicNetworks;
    }
  }

  // adapter - computed: true, optional: true, required: false
  private _adapter?: string; 
  public get adapter() {
    return this.getStringAttribute('adapter');
  }
  public set adapter(value: string) {
    this._adapter = value;
  }
  public resetAdapter() {
    this._adapter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterInput() {
    return this._adapter;
  }

  // aggregator_chgd - computed: false, optional: true, required: false
  private _aggregatorChgd?: string; 
  public get aggregatorChgd() {
    return this.getStringAttribute('aggregator_chgd');
  }
  public set aggregatorChgd(value: string) {
    this._aggregatorChgd = value;
  }
  public resetAggregatorChgd() {
    this._aggregatorChgd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorChgdInput() {
    return this._aggregatorChgd;
  }

  // can_se_dp_takeover - computed: false, optional: true, required: false
  private _canSeDpTakeover?: string; 
  public get canSeDpTakeover() {
    return this.getStringAttribute('can_se_dp_takeover');
  }
  public set canSeDpTakeover(value: string) {
    this._canSeDpTakeover = value;
  }
  public resetCanSeDpTakeover() {
    this._canSeDpTakeover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canSeDpTakeoverInput() {
    return this._canSeDpTakeover;
  }

  // connected - computed: true, optional: true, required: false
  private _connected?: string; 
  public get connected() {
    return this.getStringAttribute('connected');
  }
  public set connected(value: string) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
  }

  // del_pending - computed: false, optional: true, required: false
  private _delPending?: string; 
  public get delPending() {
    return this.getStringAttribute('del_pending');
  }
  public set delPending(value: string) {
    this._delPending = value;
  }
  public resetDelPending() {
    this._delPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delPendingInput() {
    return this._delPending;
  }

  // delete_vnic - computed: false, optional: true, required: false
  private _deleteVnic?: string; 
  public get deleteVnic() {
    return this.getStringAttribute('delete_vnic');
  }
  public set deleteVnic(value: string) {
    this._deleteVnic = value;
  }
  public resetDeleteVnic() {
    this._deleteVnic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVnicInput() {
    return this._deleteVnic;
  }

  // dhcp_enabled - computed: false, optional: true, required: false
  private _dhcpEnabled?: string; 
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: string) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // dp_deletion_done - computed: false, optional: true, required: false
  private _dpDeletionDone?: string; 
  public get dpDeletionDone() {
    return this.getStringAttribute('dp_deletion_done');
  }
  public set dpDeletionDone(value: string) {
    this._dpDeletionDone = value;
  }
  public resetDpDeletionDone() {
    this._dpDeletionDone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpDeletionDoneInput() {
    return this._dpDeletionDone;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // if_name - computed: true, optional: true, required: false
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  public resetIfName() {
    this._ifName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // ip6_autocfg_enabled - computed: false, optional: true, required: false
  private _ip6AutocfgEnabled?: string; 
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }
  public set ip6AutocfgEnabled(value: string) {
    this._ip6AutocfgEnabled = value;
  }
  public resetIp6AutocfgEnabled() {
    this._ip6AutocfgEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AutocfgEnabledInput() {
    return this._ip6AutocfgEnabled;
  }

  // is_asm - computed: false, optional: true, required: false
  private _isAsm?: string; 
  public get isAsm() {
    return this.getStringAttribute('is_asm');
  }
  public set isAsm(value: string) {
    this._isAsm = value;
  }
  public resetIsAsm() {
    this._isAsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAsmInput() {
    return this._isAsm;
  }

  // is_avi_internal_network - computed: false, optional: true, required: false
  private _isAviInternalNetwork?: string; 
  public get isAviInternalNetwork() {
    return this.getStringAttribute('is_avi_internal_network');
  }
  public set isAviInternalNetwork(value: string) {
    this._isAviInternalNetwork = value;
  }
  public resetIsAviInternalNetwork() {
    this._isAviInternalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAviInternalNetworkInput() {
    return this._isAviInternalNetwork;
  }

  // is_hsm - computed: false, optional: true, required: false
  private _isHsm?: string; 
  public get isHsm() {
    return this.getStringAttribute('is_hsm');
  }
  public set isHsm(value: string) {
    this._isHsm = value;
  }
  public resetIsHsm() {
    this._isHsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHsmInput() {
    return this._isHsm;
  }

  // is_mgmt - computed: false, optional: true, required: false
  private _isMgmt?: string; 
  public get isMgmt() {
    return this.getStringAttribute('is_mgmt');
  }
  public set isMgmt(value: string) {
    this._isMgmt = value;
  }
  public resetIsMgmt() {
    this._isMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMgmtInput() {
    return this._isMgmt;
  }

  // is_portchannel - computed: false, optional: true, required: false
  private _isPortchannel?: string; 
  public get isPortchannel() {
    return this.getStringAttribute('is_portchannel');
  }
  public set isPortchannel(value: string) {
    this._isPortchannel = value;
  }
  public resetIsPortchannel() {
    this._isPortchannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPortchannelInput() {
    return this._isPortchannel;
  }

  // link_up - computed: false, optional: true, required: false
  private _linkUp?: string; 
  public get linkUp() {
    return this.getStringAttribute('link_up');
  }
  public set linkUp(value: string) {
    this._linkUp = value;
  }
  public resetLinkUp() {
    this._linkUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpInput() {
    return this._linkUp;
  }

  // linux_name - computed: true, optional: true, required: false
  private _linuxName?: string; 
  public get linuxName() {
    return this.getStringAttribute('linux_name');
  }
  public set linuxName(value: string) {
    this._linuxName = value;
  }
  public resetLinuxName() {
    this._linuxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNameInput() {
    return this._linuxName;
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_ref - computed: true, optional: true, required: false
  private _networkRef?: string; 
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }
  public set networkRef(value: string) {
    this._networkRef = value;
  }
  public resetNetworkRef() {
    this._networkRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRefInput() {
    return this._networkRef;
  }

  // num_rx_descriptors - computed: true, optional: true, required: false
  private _numRxDescriptors?: string; 
  public get numRxDescriptors() {
    return this.getStringAttribute('num_rx_descriptors');
  }
  public set numRxDescriptors(value: string) {
    this._numRxDescriptors = value;
  }
  public resetNumRxDescriptors() {
    this._numRxDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRxDescriptorsInput() {
    return this._numRxDescriptors;
  }

  // num_tx_descriptors - computed: true, optional: true, required: false
  private _numTxDescriptors?: string; 
  public get numTxDescriptors() {
    return this.getStringAttribute('num_tx_descriptors');
  }
  public set numTxDescriptors(value: string) {
    this._numTxDescriptors = value;
  }
  public resetNumTxDescriptors() {
    this._numTxDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTxDescriptorsInput() {
    return this._numTxDescriptors;
  }

  // pci_id - computed: true, optional: true, required: false
  private _pciId?: string; 
  public get pciId() {
    return this.getStringAttribute('pci_id');
  }
  public set pciId(value: string) {
    this._pciId = value;
  }
  public resetPciId() {
    this._pciId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciIdInput() {
    return this._pciId;
  }

  // port_uuid - computed: true, optional: true, required: false
  private _portUuid?: string; 
  public get portUuid() {
    return this.getStringAttribute('port_uuid');
  }
  public set portUuid(value: string) {
    this._portUuid = value;
  }
  public resetPortUuid() {
    this._portUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUuidInput() {
    return this._portUuid;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrf_id - computed: false, optional: true, required: false
  private _vrfId?: string; 
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }
  public set vrfId(value: string) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // vrf_ref - computed: true, optional: true, required: false
  private _vrfRef?: string; 
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
  public set vrfRef(value: string) {
    this._vrfRef = value;
  }
  public resetVrfRef() {
    this._vrfRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfRefInput() {
    return this._vrfRef;
  }

  // members - computed: false, optional: true, required: false
  private _members = new ServiceengineDataVnicsMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ServiceengineDataVnicsMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // vlan_interfaces - computed: false, optional: true, required: false
  private _vlanInterfaces = new ServiceengineDataVnicsVlanInterfacesList(this, "vlan_interfaces", false);
  public get vlanInterfaces() {
    return this._vlanInterfaces;
  }
  public putVlanInterfaces(value: ServiceengineDataVnicsVlanInterfaces[] | cdktf.IResolvable) {
    this._vlanInterfaces.internalValue = value;
  }
  public resetVlanInterfaces() {
    this._vlanInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfacesInput() {
    return this._vlanInterfaces.internalValue;
  }

  // vnic_networks - computed: false, optional: true, required: false
  private _vnicNetworks = new ServiceengineDataVnicsVnicNetworksList(this, "vnic_networks", false);
  public get vnicNetworks() {
    return this._vnicNetworks;
  }
  public putVnicNetworks(value: ServiceengineDataVnicsVnicNetworks[] | cdktf.IResolvable) {
    this._vnicNetworks.internalValue = value;
  }
  public resetVnicNetworks() {
    this._vnicNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicNetworksInput() {
    return this._vnicNetworks.internalValue;
  }
}

export class ServiceengineDataVnicsList extends cdktf.ComplexList {
  public internalValue? : ServiceengineDataVnics[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineDataVnicsOutputReference {
    return new ServiceengineDataVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnicMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#active Serviceengine#active}
  */
  readonly active?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#if_name Serviceengine#if_name}
  */
  readonly ifName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mac_address Serviceengine#mac_address}
  */
  readonly macAddress?: string;
}

export function serviceengineMgmtVnicMembersToTerraform(struct?: ServiceengineMgmtVnicMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.stringToTerraform(struct!.active),
    if_name: cdktf.stringToTerraform(struct!.ifName),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function serviceengineMgmtVnicMembersToHclTerraform(struct?: ServiceengineMgmtVnicMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.stringToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_name: {
      value: cdktf.stringToHclTerraform(struct!.ifName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineMgmtVnicMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnicMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._ifName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifName = this._ifName;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnicMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._ifName = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._ifName = value.ifName;
      this._macAddress = value.macAddress;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: string; 
  public get active() {
    return this.getStringAttribute('active');
  }
  public set active(value: string) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // if_name - computed: false, optional: false, required: true
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class ServiceengineMgmtVnicMembersList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnicMembers[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicMembersOutputReference {
    return new ServiceengineMgmtVnicMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#addr Serviceengine#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#type Serviceengine#type}
  */
  readonly type: string;
}

export function serviceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrToTerraform(struct?: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrToHclTerraform(struct?: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrOutputReference {
    return new ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnicVlanInterfacesVnicNetworksIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mask Serviceengine#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip_addr Serviceengine#ip_addr}
  */
  readonly ipAddr: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr[] | cdktf.IResolvable;
}

export function serviceengineMgmtVnicVlanInterfacesVnicNetworksIpToTerraform(struct?: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceengineMgmtVnicVlanInterfacesVnicNetworksIpToHclTerraform(struct?: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(serviceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnicVlanInterfacesVnicNetworksIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnicVlanInterfacesVnicNetworksIp[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpOutputReference {
    return new ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnicVlanInterfacesVnicNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ctlr_alloc Serviceengine#ctlr_alloc}
  */
  readonly ctlrAlloc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mode Serviceengine#mode}
  */
  readonly mode: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip Serviceengine#ip}
  */
  readonly ip: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIp[] | cdktf.IResolvable;
}

export function serviceengineMgmtVnicVlanInterfacesVnicNetworksToTerraform(struct?: ServiceengineMgmtVnicVlanInterfacesVnicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ctlr_alloc: cdktf.stringToTerraform(struct!.ctlrAlloc),
    mode: cdktf.stringToTerraform(struct!.mode),
    ip: cdktf.listMapper(serviceengineMgmtVnicVlanInterfacesVnicNetworksIpToTerraform, true)(struct!.ip),
  }
}


export function serviceengineMgmtVnicVlanInterfacesVnicNetworksToHclTerraform(struct?: ServiceengineMgmtVnicVlanInterfacesVnicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ctlr_alloc: {
      value: cdktf.stringToHclTerraform(struct!.ctlrAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(serviceengineMgmtVnicVlanInterfacesVnicNetworksIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineMgmtVnicVlanInterfacesVnicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnicVlanInterfacesVnicNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ctlrAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlrAlloc = this._ctlrAlloc;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnicVlanInterfacesVnicNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ctlrAlloc = undefined;
      this._mode = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ctlrAlloc = value.ctlrAlloc;
      this._mode = value.mode;
      this._ip.internalValue = value.ip;
    }
  }

  // ctlr_alloc - computed: false, optional: true, required: false
  private _ctlrAlloc?: string; 
  public get ctlrAlloc() {
    return this.getStringAttribute('ctlr_alloc');
  }
  public set ctlrAlloc(value: string) {
    this._ctlrAlloc = value;
  }
  public resetCtlrAlloc() {
    this._ctlrAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlrAllocInput() {
    return this._ctlrAlloc;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new ServiceengineMgmtVnicVlanInterfacesVnicNetworksIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: ServiceengineMgmtVnicVlanInterfacesVnicNetworksIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class ServiceengineMgmtVnicVlanInterfacesVnicNetworksList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnicVlanInterfacesVnicNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicVlanInterfacesVnicNetworksOutputReference {
    return new ServiceengineMgmtVnicVlanInterfacesVnicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnicVlanInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#dhcp_enabled Serviceengine#dhcp_enabled}
  */
  readonly dhcpEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#enabled Serviceengine#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#if_name Serviceengine#if_name}
  */
  readonly ifName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip6_autocfg_enabled Serviceengine#ip6_autocfg_enabled}
  */
  readonly ip6AutocfgEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_mgmt Serviceengine#is_mgmt}
  */
  readonly isMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vlan_id Serviceengine#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vrf_ref Serviceengine#vrf_ref}
  */
  readonly vrfRef?: string;
  /**
  * vnic_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vnic_networks Serviceengine#vnic_networks}
  */
  readonly vnicNetworks?: ServiceengineMgmtVnicVlanInterfacesVnicNetworks[] | cdktf.IResolvable;
}

export function serviceengineMgmtVnicVlanInterfacesToTerraform(struct?: ServiceengineMgmtVnicVlanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_enabled: cdktf.stringToTerraform(struct!.dhcpEnabled),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    if_name: cdktf.stringToTerraform(struct!.ifName),
    ip6_autocfg_enabled: cdktf.stringToTerraform(struct!.ip6AutocfgEnabled),
    is_mgmt: cdktf.stringToTerraform(struct!.isMgmt),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vrf_ref: cdktf.stringToTerraform(struct!.vrfRef),
    vnic_networks: cdktf.listMapper(serviceengineMgmtVnicVlanInterfacesVnicNetworksToTerraform, true)(struct!.vnicNetworks),
  }
}


export function serviceengineMgmtVnicVlanInterfacesToHclTerraform(struct?: ServiceengineMgmtVnicVlanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_enabled: {
      value: cdktf.stringToHclTerraform(struct!.dhcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_name: {
      value: cdktf.stringToHclTerraform(struct!.ifName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_autocfg_enabled: {
      value: cdktf.stringToHclTerraform(struct!.ip6AutocfgEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_mgmt: {
      value: cdktf.stringToHclTerraform(struct!.isMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_ref: {
      value: cdktf.stringToHclTerraform(struct!.vrfRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_networks: {
      value: cdktf.listMapperHcl(serviceengineMgmtVnicVlanInterfacesVnicNetworksToHclTerraform, true)(struct!.vnicNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceengineMgmtVnicVlanInterfacesVnicNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineMgmtVnicVlanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnicVlanInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpEnabled = this._dhcpEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ifName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifName = this._ifName;
    }
    if (this._ip6AutocfgEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6AutocfgEnabled = this._ip6AutocfgEnabled;
    }
    if (this._isMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMgmt = this._isMgmt;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vrfRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfRef = this._vrfRef;
    }
    if (this._vnicNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicNetworks = this._vnicNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnicVlanInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpEnabled = undefined;
      this._enabled = undefined;
      this._ifName = undefined;
      this._ip6AutocfgEnabled = undefined;
      this._isMgmt = undefined;
      this._vlanId = undefined;
      this._vrfRef = undefined;
      this._vnicNetworks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpEnabled = value.dhcpEnabled;
      this._enabled = value.enabled;
      this._ifName = value.ifName;
      this._ip6AutocfgEnabled = value.ip6AutocfgEnabled;
      this._isMgmt = value.isMgmt;
      this._vlanId = value.vlanId;
      this._vrfRef = value.vrfRef;
      this._vnicNetworks.internalValue = value.vnicNetworks;
    }
  }

  // dhcp_enabled - computed: true, optional: true, required: false
  private _dhcpEnabled?: string; 
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: string) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // if_name - computed: false, optional: false, required: true
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // ip6_autocfg_enabled - computed: true, optional: true, required: false
  private _ip6AutocfgEnabled?: string; 
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }
  public set ip6AutocfgEnabled(value: string) {
    this._ip6AutocfgEnabled = value;
  }
  public resetIp6AutocfgEnabled() {
    this._ip6AutocfgEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AutocfgEnabledInput() {
    return this._ip6AutocfgEnabled;
  }

  // is_mgmt - computed: false, optional: true, required: false
  private _isMgmt?: string; 
  public get isMgmt() {
    return this.getStringAttribute('is_mgmt');
  }
  public set isMgmt(value: string) {
    this._isMgmt = value;
  }
  public resetIsMgmt() {
    this._isMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMgmtInput() {
    return this._isMgmt;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrf_ref - computed: true, optional: true, required: false
  private _vrfRef?: string; 
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
  public set vrfRef(value: string) {
    this._vrfRef = value;
  }
  public resetVrfRef() {
    this._vrfRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfRefInput() {
    return this._vrfRef;
  }

  // vnic_networks - computed: false, optional: true, required: false
  private _vnicNetworks = new ServiceengineMgmtVnicVlanInterfacesVnicNetworksList(this, "vnic_networks", false);
  public get vnicNetworks() {
    return this._vnicNetworks;
  }
  public putVnicNetworks(value: ServiceengineMgmtVnicVlanInterfacesVnicNetworks[] | cdktf.IResolvable) {
    this._vnicNetworks.internalValue = value;
  }
  public resetVnicNetworks() {
    this._vnicNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicNetworksInput() {
    return this._vnicNetworks.internalValue;
  }
}

export class ServiceengineMgmtVnicVlanInterfacesList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnicVlanInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicVlanInterfacesOutputReference {
    return new ServiceengineMgmtVnicVlanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnicVnicNetworksIpIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#addr Serviceengine#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#type Serviceengine#type}
  */
  readonly type: string;
}

export function serviceengineMgmtVnicVnicNetworksIpIpAddrToTerraform(struct?: ServiceengineMgmtVnicVnicNetworksIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceengineMgmtVnicVnicNetworksIpIpAddrToHclTerraform(struct?: ServiceengineMgmtVnicVnicNetworksIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class ServiceengineMgmtVnicVnicNetworksIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnicVnicNetworksIpIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnicVnicNetworksIpIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class ServiceengineMgmtVnicVnicNetworksIpIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnicVnicNetworksIpIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicVnicNetworksIpIpAddrOutputReference {
    return new ServiceengineMgmtVnicVnicNetworksIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnicVnicNetworksIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mask Serviceengine#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip_addr Serviceengine#ip_addr}
  */
  readonly ipAddr: ServiceengineMgmtVnicVnicNetworksIpIpAddr[] | cdktf.IResolvable;
}

export function serviceengineMgmtVnicVnicNetworksIpToTerraform(struct?: ServiceengineMgmtVnicVnicNetworksIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceengineMgmtVnicVnicNetworksIpIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceengineMgmtVnicVnicNetworksIpToHclTerraform(struct?: ServiceengineMgmtVnicVnicNetworksIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(serviceengineMgmtVnicVnicNetworksIpIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceengineMgmtVnicVnicNetworksIpIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineMgmtVnicVnicNetworksIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnicVnicNetworksIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnicVnicNetworksIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new ServiceengineMgmtVnicVnicNetworksIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceengineMgmtVnicVnicNetworksIpIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceengineMgmtVnicVnicNetworksIpList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnicVnicNetworksIp[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicVnicNetworksIpOutputReference {
    return new ServiceengineMgmtVnicVnicNetworksIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnicVnicNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ctlr_alloc Serviceengine#ctlr_alloc}
  */
  readonly ctlrAlloc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mode Serviceengine#mode}
  */
  readonly mode: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip Serviceengine#ip}
  */
  readonly ip: ServiceengineMgmtVnicVnicNetworksIp[] | cdktf.IResolvable;
}

export function serviceengineMgmtVnicVnicNetworksToTerraform(struct?: ServiceengineMgmtVnicVnicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ctlr_alloc: cdktf.stringToTerraform(struct!.ctlrAlloc),
    mode: cdktf.stringToTerraform(struct!.mode),
    ip: cdktf.listMapper(serviceengineMgmtVnicVnicNetworksIpToTerraform, true)(struct!.ip),
  }
}


export function serviceengineMgmtVnicVnicNetworksToHclTerraform(struct?: ServiceengineMgmtVnicVnicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ctlr_alloc: {
      value: cdktf.stringToHclTerraform(struct!.ctlrAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(serviceengineMgmtVnicVnicNetworksIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceengineMgmtVnicVnicNetworksIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineMgmtVnicVnicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnicVnicNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ctlrAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctlrAlloc = this._ctlrAlloc;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnicVnicNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ctlrAlloc = undefined;
      this._mode = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ctlrAlloc = value.ctlrAlloc;
      this._mode = value.mode;
      this._ip.internalValue = value.ip;
    }
  }

  // ctlr_alloc - computed: false, optional: true, required: false
  private _ctlrAlloc?: string; 
  public get ctlrAlloc() {
    return this.getStringAttribute('ctlr_alloc');
  }
  public set ctlrAlloc(value: string) {
    this._ctlrAlloc = value;
  }
  public resetCtlrAlloc() {
    this._ctlrAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctlrAllocInput() {
    return this._ctlrAlloc;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new ServiceengineMgmtVnicVnicNetworksIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: ServiceengineMgmtVnicVnicNetworksIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class ServiceengineMgmtVnicVnicNetworksList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnicVnicNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicVnicNetworksOutputReference {
    return new ServiceengineMgmtVnicVnicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineMgmtVnic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#adapter Serviceengine#adapter}
  */
  readonly adapter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#aggregator_chgd Serviceengine#aggregator_chgd}
  */
  readonly aggregatorChgd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#can_se_dp_takeover Serviceengine#can_se_dp_takeover}
  */
  readonly canSeDpTakeover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#connected Serviceengine#connected}
  */
  readonly connected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#del_pending Serviceengine#del_pending}
  */
  readonly delPending?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#delete_vnic Serviceengine#delete_vnic}
  */
  readonly deleteVnic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#dhcp_enabled Serviceengine#dhcp_enabled}
  */
  readonly dhcpEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#dp_deletion_done Serviceengine#dp_deletion_done}
  */
  readonly dpDeletionDone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#enabled Serviceengine#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#if_name Serviceengine#if_name}
  */
  readonly ifName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#ip6_autocfg_enabled Serviceengine#ip6_autocfg_enabled}
  */
  readonly ip6AutocfgEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_asm Serviceengine#is_asm}
  */
  readonly isAsm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_avi_internal_network Serviceengine#is_avi_internal_network}
  */
  readonly isAviInternalNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_hsm Serviceengine#is_hsm}
  */
  readonly isHsm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_mgmt Serviceengine#is_mgmt}
  */
  readonly isMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#is_portchannel Serviceengine#is_portchannel}
  */
  readonly isPortchannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#link_up Serviceengine#link_up}
  */
  readonly linkUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#linux_name Serviceengine#linux_name}
  */
  readonly linuxName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mac_address Serviceengine#mac_address}
  */
  readonly macAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#mtu Serviceengine#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#network_name Serviceengine#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#network_ref Serviceengine#network_ref}
  */
  readonly networkRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#num_rx_descriptors Serviceengine#num_rx_descriptors}
  */
  readonly numRxDescriptors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#num_tx_descriptors Serviceengine#num_tx_descriptors}
  */
  readonly numTxDescriptors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#pci_id Serviceengine#pci_id}
  */
  readonly pciId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#port_uuid Serviceengine#port_uuid}
  */
  readonly portUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vlan_id Serviceengine#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vrf_id Serviceengine#vrf_id}
  */
  readonly vrfId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vrf_ref Serviceengine#vrf_ref}
  */
  readonly vrfRef?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#members Serviceengine#members}
  */
  readonly members?: ServiceengineMgmtVnicMembers[] | cdktf.IResolvable;
  /**
  * vlan_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vlan_interfaces Serviceengine#vlan_interfaces}
  */
  readonly vlanInterfaces?: ServiceengineMgmtVnicVlanInterfaces[] | cdktf.IResolvable;
  /**
  * vnic_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#vnic_networks Serviceengine#vnic_networks}
  */
  readonly vnicNetworks?: ServiceengineMgmtVnicVnicNetworks[] | cdktf.IResolvable;
}

export function serviceengineMgmtVnicToTerraform(struct?: ServiceengineMgmtVnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter: cdktf.stringToTerraform(struct!.adapter),
    aggregator_chgd: cdktf.stringToTerraform(struct!.aggregatorChgd),
    can_se_dp_takeover: cdktf.stringToTerraform(struct!.canSeDpTakeover),
    connected: cdktf.stringToTerraform(struct!.connected),
    del_pending: cdktf.stringToTerraform(struct!.delPending),
    delete_vnic: cdktf.stringToTerraform(struct!.deleteVnic),
    dhcp_enabled: cdktf.stringToTerraform(struct!.dhcpEnabled),
    dp_deletion_done: cdktf.stringToTerraform(struct!.dpDeletionDone),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    if_name: cdktf.stringToTerraform(struct!.ifName),
    ip6_autocfg_enabled: cdktf.stringToTerraform(struct!.ip6AutocfgEnabled),
    is_asm: cdktf.stringToTerraform(struct!.isAsm),
    is_avi_internal_network: cdktf.stringToTerraform(struct!.isAviInternalNetwork),
    is_hsm: cdktf.stringToTerraform(struct!.isHsm),
    is_mgmt: cdktf.stringToTerraform(struct!.isMgmt),
    is_portchannel: cdktf.stringToTerraform(struct!.isPortchannel),
    link_up: cdktf.stringToTerraform(struct!.linkUp),
    linux_name: cdktf.stringToTerraform(struct!.linuxName),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    network_ref: cdktf.stringToTerraform(struct!.networkRef),
    num_rx_descriptors: cdktf.stringToTerraform(struct!.numRxDescriptors),
    num_tx_descriptors: cdktf.stringToTerraform(struct!.numTxDescriptors),
    pci_id: cdktf.stringToTerraform(struct!.pciId),
    port_uuid: cdktf.stringToTerraform(struct!.portUuid),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vrf_id: cdktf.stringToTerraform(struct!.vrfId),
    vrf_ref: cdktf.stringToTerraform(struct!.vrfRef),
    members: cdktf.listMapper(serviceengineMgmtVnicMembersToTerraform, true)(struct!.members),
    vlan_interfaces: cdktf.listMapper(serviceengineMgmtVnicVlanInterfacesToTerraform, true)(struct!.vlanInterfaces),
    vnic_networks: cdktf.listMapper(serviceengineMgmtVnicVnicNetworksToTerraform, true)(struct!.vnicNetworks),
  }
}


export function serviceengineMgmtVnicToHclTerraform(struct?: ServiceengineMgmtVnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter: {
      value: cdktf.stringToHclTerraform(struct!.adapter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregator_chgd: {
      value: cdktf.stringToHclTerraform(struct!.aggregatorChgd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_se_dp_takeover: {
      value: cdktf.stringToHclTerraform(struct!.canSeDpTakeover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connected: {
      value: cdktf.stringToHclTerraform(struct!.connected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    del_pending: {
      value: cdktf.stringToHclTerraform(struct!.delPending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_vnic: {
      value: cdktf.stringToHclTerraform(struct!.deleteVnic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_enabled: {
      value: cdktf.stringToHclTerraform(struct!.dhcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_deletion_done: {
      value: cdktf.stringToHclTerraform(struct!.dpDeletionDone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_name: {
      value: cdktf.stringToHclTerraform(struct!.ifName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_autocfg_enabled: {
      value: cdktf.stringToHclTerraform(struct!.ip6AutocfgEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_asm: {
      value: cdktf.stringToHclTerraform(struct!.isAsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_avi_internal_network: {
      value: cdktf.stringToHclTerraform(struct!.isAviInternalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hsm: {
      value: cdktf.stringToHclTerraform(struct!.isHsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_mgmt: {
      value: cdktf.stringToHclTerraform(struct!.isMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_portchannel: {
      value: cdktf.stringToHclTerraform(struct!.isPortchannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_up: {
      value: cdktf.stringToHclTerraform(struct!.linkUp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_name: {
      value: cdktf.stringToHclTerraform(struct!.linuxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.stringToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ref: {
      value: cdktf.stringToHclTerraform(struct!.networkRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_rx_descriptors: {
      value: cdktf.stringToHclTerraform(struct!.numRxDescriptors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_tx_descriptors: {
      value: cdktf.stringToHclTerraform(struct!.numTxDescriptors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pci_id: {
      value: cdktf.stringToHclTerraform(struct!.pciId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_uuid: {
      value: cdktf.stringToHclTerraform(struct!.portUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_id: {
      value: cdktf.stringToHclTerraform(struct!.vrfId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_ref: {
      value: cdktf.stringToHclTerraform(struct!.vrfRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(serviceengineMgmtVnicMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceengineMgmtVnicMembersList",
    },
    vlan_interfaces: {
      value: cdktf.listMapperHcl(serviceengineMgmtVnicVlanInterfacesToHclTerraform, true)(struct!.vlanInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceengineMgmtVnicVlanInterfacesList",
    },
    vnic_networks: {
      value: cdktf.listMapperHcl(serviceengineMgmtVnicVnicNetworksToHclTerraform, true)(struct!.vnicNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceengineMgmtVnicVnicNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineMgmtVnicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineMgmtVnic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapter !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapter = this._adapter;
    }
    if (this._aggregatorChgd !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorChgd = this._aggregatorChgd;
    }
    if (this._canSeDpTakeover !== undefined) {
      hasAnyValues = true;
      internalValueResult.canSeDpTakeover = this._canSeDpTakeover;
    }
    if (this._connected !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected;
    }
    if (this._delPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.delPending = this._delPending;
    }
    if (this._deleteVnic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteVnic = this._deleteVnic;
    }
    if (this._dhcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpEnabled = this._dhcpEnabled;
    }
    if (this._dpDeletionDone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpDeletionDone = this._dpDeletionDone;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ifName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifName = this._ifName;
    }
    if (this._ip6AutocfgEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6AutocfgEnabled = this._ip6AutocfgEnabled;
    }
    if (this._isAsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAsm = this._isAsm;
    }
    if (this._isAviInternalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAviInternalNetwork = this._isAviInternalNetwork;
    }
    if (this._isHsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHsm = this._isHsm;
    }
    if (this._isMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMgmt = this._isMgmt;
    }
    if (this._isPortchannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPortchannel = this._isPortchannel;
    }
    if (this._linkUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUp = this._linkUp;
    }
    if (this._linuxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxName = this._linuxName;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._networkRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRef = this._networkRef;
    }
    if (this._numRxDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRxDescriptors = this._numRxDescriptors;
    }
    if (this._numTxDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTxDescriptors = this._numTxDescriptors;
    }
    if (this._pciId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciId = this._pciId;
    }
    if (this._portUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.portUuid = this._portUuid;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vrfId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfId = this._vrfId;
    }
    if (this._vrfRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfRef = this._vrfRef;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    if (this._vlanInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterfaces = this._vlanInterfaces?.internalValue;
    }
    if (this._vnicNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicNetworks = this._vnicNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineMgmtVnic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapter = undefined;
      this._aggregatorChgd = undefined;
      this._canSeDpTakeover = undefined;
      this._connected = undefined;
      this._delPending = undefined;
      this._deleteVnic = undefined;
      this._dhcpEnabled = undefined;
      this._dpDeletionDone = undefined;
      this._enabled = undefined;
      this._ifName = undefined;
      this._ip6AutocfgEnabled = undefined;
      this._isAsm = undefined;
      this._isAviInternalNetwork = undefined;
      this._isHsm = undefined;
      this._isMgmt = undefined;
      this._isPortchannel = undefined;
      this._linkUp = undefined;
      this._linuxName = undefined;
      this._macAddress = undefined;
      this._mtu = undefined;
      this._networkName = undefined;
      this._networkRef = undefined;
      this._numRxDescriptors = undefined;
      this._numTxDescriptors = undefined;
      this._pciId = undefined;
      this._portUuid = undefined;
      this._vlanId = undefined;
      this._vrfId = undefined;
      this._vrfRef = undefined;
      this._members.internalValue = undefined;
      this._vlanInterfaces.internalValue = undefined;
      this._vnicNetworks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapter = value.adapter;
      this._aggregatorChgd = value.aggregatorChgd;
      this._canSeDpTakeover = value.canSeDpTakeover;
      this._connected = value.connected;
      this._delPending = value.delPending;
      this._deleteVnic = value.deleteVnic;
      this._dhcpEnabled = value.dhcpEnabled;
      this._dpDeletionDone = value.dpDeletionDone;
      this._enabled = value.enabled;
      this._ifName = value.ifName;
      this._ip6AutocfgEnabled = value.ip6AutocfgEnabled;
      this._isAsm = value.isAsm;
      this._isAviInternalNetwork = value.isAviInternalNetwork;
      this._isHsm = value.isHsm;
      this._isMgmt = value.isMgmt;
      this._isPortchannel = value.isPortchannel;
      this._linkUp = value.linkUp;
      this._linuxName = value.linuxName;
      this._macAddress = value.macAddress;
      this._mtu = value.mtu;
      this._networkName = value.networkName;
      this._networkRef = value.networkRef;
      this._numRxDescriptors = value.numRxDescriptors;
      this._numTxDescriptors = value.numTxDescriptors;
      this._pciId = value.pciId;
      this._portUuid = value.portUuid;
      this._vlanId = value.vlanId;
      this._vrfId = value.vrfId;
      this._vrfRef = value.vrfRef;
      this._members.internalValue = value.members;
      this._vlanInterfaces.internalValue = value.vlanInterfaces;
      this._vnicNetworks.internalValue = value.vnicNetworks;
    }
  }

  // adapter - computed: true, optional: true, required: false
  private _adapter?: string; 
  public get adapter() {
    return this.getStringAttribute('adapter');
  }
  public set adapter(value: string) {
    this._adapter = value;
  }
  public resetAdapter() {
    this._adapter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterInput() {
    return this._adapter;
  }

  // aggregator_chgd - computed: false, optional: true, required: false
  private _aggregatorChgd?: string; 
  public get aggregatorChgd() {
    return this.getStringAttribute('aggregator_chgd');
  }
  public set aggregatorChgd(value: string) {
    this._aggregatorChgd = value;
  }
  public resetAggregatorChgd() {
    this._aggregatorChgd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorChgdInput() {
    return this._aggregatorChgd;
  }

  // can_se_dp_takeover - computed: false, optional: true, required: false
  private _canSeDpTakeover?: string; 
  public get canSeDpTakeover() {
    return this.getStringAttribute('can_se_dp_takeover');
  }
  public set canSeDpTakeover(value: string) {
    this._canSeDpTakeover = value;
  }
  public resetCanSeDpTakeover() {
    this._canSeDpTakeover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canSeDpTakeoverInput() {
    return this._canSeDpTakeover;
  }

  // connected - computed: true, optional: true, required: false
  private _connected?: string; 
  public get connected() {
    return this.getStringAttribute('connected');
  }
  public set connected(value: string) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
  }

  // del_pending - computed: false, optional: true, required: false
  private _delPending?: string; 
  public get delPending() {
    return this.getStringAttribute('del_pending');
  }
  public set delPending(value: string) {
    this._delPending = value;
  }
  public resetDelPending() {
    this._delPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delPendingInput() {
    return this._delPending;
  }

  // delete_vnic - computed: false, optional: true, required: false
  private _deleteVnic?: string; 
  public get deleteVnic() {
    return this.getStringAttribute('delete_vnic');
  }
  public set deleteVnic(value: string) {
    this._deleteVnic = value;
  }
  public resetDeleteVnic() {
    this._deleteVnic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVnicInput() {
    return this._deleteVnic;
  }

  // dhcp_enabled - computed: false, optional: true, required: false
  private _dhcpEnabled?: string; 
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: string) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // dp_deletion_done - computed: false, optional: true, required: false
  private _dpDeletionDone?: string; 
  public get dpDeletionDone() {
    return this.getStringAttribute('dp_deletion_done');
  }
  public set dpDeletionDone(value: string) {
    this._dpDeletionDone = value;
  }
  public resetDpDeletionDone() {
    this._dpDeletionDone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpDeletionDoneInput() {
    return this._dpDeletionDone;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // if_name - computed: true, optional: true, required: false
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  public resetIfName() {
    this._ifName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // ip6_autocfg_enabled - computed: false, optional: true, required: false
  private _ip6AutocfgEnabled?: string; 
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }
  public set ip6AutocfgEnabled(value: string) {
    this._ip6AutocfgEnabled = value;
  }
  public resetIp6AutocfgEnabled() {
    this._ip6AutocfgEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AutocfgEnabledInput() {
    return this._ip6AutocfgEnabled;
  }

  // is_asm - computed: false, optional: true, required: false
  private _isAsm?: string; 
  public get isAsm() {
    return this.getStringAttribute('is_asm');
  }
  public set isAsm(value: string) {
    this._isAsm = value;
  }
  public resetIsAsm() {
    this._isAsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAsmInput() {
    return this._isAsm;
  }

  // is_avi_internal_network - computed: false, optional: true, required: false
  private _isAviInternalNetwork?: string; 
  public get isAviInternalNetwork() {
    return this.getStringAttribute('is_avi_internal_network');
  }
  public set isAviInternalNetwork(value: string) {
    this._isAviInternalNetwork = value;
  }
  public resetIsAviInternalNetwork() {
    this._isAviInternalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAviInternalNetworkInput() {
    return this._isAviInternalNetwork;
  }

  // is_hsm - computed: false, optional: true, required: false
  private _isHsm?: string; 
  public get isHsm() {
    return this.getStringAttribute('is_hsm');
  }
  public set isHsm(value: string) {
    this._isHsm = value;
  }
  public resetIsHsm() {
    this._isHsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHsmInput() {
    return this._isHsm;
  }

  // is_mgmt - computed: false, optional: true, required: false
  private _isMgmt?: string; 
  public get isMgmt() {
    return this.getStringAttribute('is_mgmt');
  }
  public set isMgmt(value: string) {
    this._isMgmt = value;
  }
  public resetIsMgmt() {
    this._isMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMgmtInput() {
    return this._isMgmt;
  }

  // is_portchannel - computed: false, optional: true, required: false
  private _isPortchannel?: string; 
  public get isPortchannel() {
    return this.getStringAttribute('is_portchannel');
  }
  public set isPortchannel(value: string) {
    this._isPortchannel = value;
  }
  public resetIsPortchannel() {
    this._isPortchannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPortchannelInput() {
    return this._isPortchannel;
  }

  // link_up - computed: false, optional: true, required: false
  private _linkUp?: string; 
  public get linkUp() {
    return this.getStringAttribute('link_up');
  }
  public set linkUp(value: string) {
    this._linkUp = value;
  }
  public resetLinkUp() {
    this._linkUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpInput() {
    return this._linkUp;
  }

  // linux_name - computed: true, optional: true, required: false
  private _linuxName?: string; 
  public get linuxName() {
    return this.getStringAttribute('linux_name');
  }
  public set linuxName(value: string) {
    this._linuxName = value;
  }
  public resetLinuxName() {
    this._linuxName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNameInput() {
    return this._linuxName;
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_ref - computed: true, optional: true, required: false
  private _networkRef?: string; 
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }
  public set networkRef(value: string) {
    this._networkRef = value;
  }
  public resetNetworkRef() {
    this._networkRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRefInput() {
    return this._networkRef;
  }

  // num_rx_descriptors - computed: true, optional: true, required: false
  private _numRxDescriptors?: string; 
  public get numRxDescriptors() {
    return this.getStringAttribute('num_rx_descriptors');
  }
  public set numRxDescriptors(value: string) {
    this._numRxDescriptors = value;
  }
  public resetNumRxDescriptors() {
    this._numRxDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRxDescriptorsInput() {
    return this._numRxDescriptors;
  }

  // num_tx_descriptors - computed: true, optional: true, required: false
  private _numTxDescriptors?: string; 
  public get numTxDescriptors() {
    return this.getStringAttribute('num_tx_descriptors');
  }
  public set numTxDescriptors(value: string) {
    this._numTxDescriptors = value;
  }
  public resetNumTxDescriptors() {
    this._numTxDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTxDescriptorsInput() {
    return this._numTxDescriptors;
  }

  // pci_id - computed: true, optional: true, required: false
  private _pciId?: string; 
  public get pciId() {
    return this.getStringAttribute('pci_id');
  }
  public set pciId(value: string) {
    this._pciId = value;
  }
  public resetPciId() {
    this._pciId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciIdInput() {
    return this._pciId;
  }

  // port_uuid - computed: true, optional: true, required: false
  private _portUuid?: string; 
  public get portUuid() {
    return this.getStringAttribute('port_uuid');
  }
  public set portUuid(value: string) {
    this._portUuid = value;
  }
  public resetPortUuid() {
    this._portUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUuidInput() {
    return this._portUuid;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrf_id - computed: false, optional: true, required: false
  private _vrfId?: string; 
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }
  public set vrfId(value: string) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // vrf_ref - computed: true, optional: true, required: false
  private _vrfRef?: string; 
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
  public set vrfRef(value: string) {
    this._vrfRef = value;
  }
  public resetVrfRef() {
    this._vrfRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfRefInput() {
    return this._vrfRef;
  }

  // members - computed: false, optional: true, required: false
  private _members = new ServiceengineMgmtVnicMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ServiceengineMgmtVnicMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // vlan_interfaces - computed: false, optional: true, required: false
  private _vlanInterfaces = new ServiceengineMgmtVnicVlanInterfacesList(this, "vlan_interfaces", false);
  public get vlanInterfaces() {
    return this._vlanInterfaces;
  }
  public putVlanInterfaces(value: ServiceengineMgmtVnicVlanInterfaces[] | cdktf.IResolvable) {
    this._vlanInterfaces.internalValue = value;
  }
  public resetVlanInterfaces() {
    this._vlanInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfacesInput() {
    return this._vlanInterfaces.internalValue;
  }

  // vnic_networks - computed: false, optional: true, required: false
  private _vnicNetworks = new ServiceengineMgmtVnicVnicNetworksList(this, "vnic_networks", false);
  public get vnicNetworks() {
    return this._vnicNetworks;
  }
  public putVnicNetworks(value: ServiceengineMgmtVnicVnicNetworks[] | cdktf.IResolvable) {
    this._vnicNetworks.internalValue = value;
  }
  public resetVnicNetworks() {
    this._vnicNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicNetworksInput() {
    return this._vnicNetworks.internalValue;
  }
}

export class ServiceengineMgmtVnicList extends cdktf.ComplexList {
  public internalValue? : ServiceengineMgmtVnic[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineMgmtVnicOutputReference {
    return new ServiceengineMgmtVnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceengineResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#cores_per_socket Serviceengine#cores_per_socket}
  */
  readonly coresPerSocket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#disk Serviceengine#disk}
  */
  readonly disk: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#hyper_threading Serviceengine#hyper_threading}
  */
  readonly hyperThreading?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#hypervisor_mode Serviceengine#hypervisor_mode}
  */
  readonly hypervisorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#memory Serviceengine#memory}
  */
  readonly memory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#num_datapath_processes Serviceengine#num_datapath_processes}
  */
  readonly numDatapathProcesses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#num_vcpus Serviceengine#num_vcpus}
  */
  readonly numVcpus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#sockets Serviceengine#sockets}
  */
  readonly sockets?: string;
}

export function serviceengineResourcesToTerraform(struct?: ServiceengineResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores_per_socket: cdktf.stringToTerraform(struct!.coresPerSocket),
    disk: cdktf.stringToTerraform(struct!.disk),
    hyper_threading: cdktf.stringToTerraform(struct!.hyperThreading),
    hypervisor_mode: cdktf.stringToTerraform(struct!.hypervisorMode),
    memory: cdktf.stringToTerraform(struct!.memory),
    num_datapath_processes: cdktf.stringToTerraform(struct!.numDatapathProcesses),
    num_vcpus: cdktf.stringToTerraform(struct!.numVcpus),
    sockets: cdktf.stringToTerraform(struct!.sockets),
  }
}


export function serviceengineResourcesToHclTerraform(struct?: ServiceengineResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores_per_socket: {
      value: cdktf.stringToHclTerraform(struct!.coresPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktf.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hyper_threading: {
      value: cdktf.stringToHclTerraform(struct!.hyperThreading),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_mode: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_datapath_processes: {
      value: cdktf.stringToHclTerraform(struct!.numDatapathProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vcpus: {
      value: cdktf.stringToHclTerraform(struct!.numVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sockets: {
      value: cdktf.stringToHclTerraform(struct!.sockets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceengineResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceengineResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coresPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.coresPerSocket = this._coresPerSocket;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._hyperThreading !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperThreading = this._hyperThreading;
    }
    if (this._hypervisorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorMode = this._hypervisorMode;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._numDatapathProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDatapathProcesses = this._numDatapathProcesses;
    }
    if (this._numVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVcpus = this._numVcpus;
    }
    if (this._sockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sockets = this._sockets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceengineResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coresPerSocket = undefined;
      this._disk = undefined;
      this._hyperThreading = undefined;
      this._hypervisorMode = undefined;
      this._memory = undefined;
      this._numDatapathProcesses = undefined;
      this._numVcpus = undefined;
      this._sockets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coresPerSocket = value.coresPerSocket;
      this._disk = value.disk;
      this._hyperThreading = value.hyperThreading;
      this._hypervisorMode = value.hypervisorMode;
      this._memory = value.memory;
      this._numDatapathProcesses = value.numDatapathProcesses;
      this._numVcpus = value.numVcpus;
      this._sockets = value.sockets;
    }
  }

  // cores_per_socket - computed: true, optional: true, required: false
  private _coresPerSocket?: string; 
  public get coresPerSocket() {
    return this.getStringAttribute('cores_per_socket');
  }
  public set coresPerSocket(value: string) {
    this._coresPerSocket = value;
  }
  public resetCoresPerSocket() {
    this._coresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresPerSocketInput() {
    return this._coresPerSocket;
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // hyper_threading - computed: true, optional: true, required: false
  private _hyperThreading?: string; 
  public get hyperThreading() {
    return this.getStringAttribute('hyper_threading');
  }
  public set hyperThreading(value: string) {
    this._hyperThreading = value;
  }
  public resetHyperThreading() {
    this._hyperThreading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperThreadingInput() {
    return this._hyperThreading;
  }

  // hypervisor_mode - computed: true, optional: true, required: false
  private _hypervisorMode?: string; 
  public get hypervisorMode() {
    return this.getStringAttribute('hypervisor_mode');
  }
  public set hypervisorMode(value: string) {
    this._hypervisorMode = value;
  }
  public resetHypervisorMode() {
    this._hypervisorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorModeInput() {
    return this._hypervisorMode;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // num_datapath_processes - computed: true, optional: true, required: false
  private _numDatapathProcesses?: string; 
  public get numDatapathProcesses() {
    return this.getStringAttribute('num_datapath_processes');
  }
  public set numDatapathProcesses(value: string) {
    this._numDatapathProcesses = value;
  }
  public resetNumDatapathProcesses() {
    this._numDatapathProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDatapathProcessesInput() {
    return this._numDatapathProcesses;
  }

  // num_vcpus - computed: false, optional: false, required: true
  private _numVcpus?: string; 
  public get numVcpus() {
    return this.getStringAttribute('num_vcpus');
  }
  public set numVcpus(value: string) {
    this._numVcpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numVcpusInput() {
    return this._numVcpus;
  }

  // sockets - computed: true, optional: true, required: false
  private _sockets?: string; 
  public get sockets() {
    return this.getStringAttribute('sockets');
  }
  public set sockets(value: string) {
    this._sockets = value;
  }
  public resetSockets() {
    this._sockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets;
  }
}

export class ServiceengineResourcesList extends cdktf.ComplexList {
  public internalValue? : ServiceengineResources[] | cdktf.IResolvable

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
  public get(index: number): ServiceengineResourcesOutputReference {
    return new ServiceengineResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine avi_serviceengine}
*/
export class Serviceengine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_serviceengine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Serviceengine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Serviceengine to import
  * @param importFromId The id of the existing Serviceengine that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Serviceengine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_serviceengine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceengine avi_serviceengine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceengineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceengineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_serviceengine',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._cloudRef = config.cloudRef;
    this._containerMode = config.containerMode;
    this._containerType = config.containerType;
    this._controllerCreated = config.controllerCreated;
    this._controllerIp = config.controllerIp;
    this._enableState = config.enableState;
    this._flavor = config.flavor;
    this._hostRef = config.hostRef;
    this._hypervisor = config.hypervisor;
    this._id = config.id;
    this._name = config.name;
    this._nsxtNoHotplug = config.nsxtNoHotplug;
    this._seGroupRef = config.seGroupRef;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._dataVnics.internalValue = config.dataVnics;
    this._mgmtVnic.internalValue = config.mgmtVnic;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // container_mode - computed: false, optional: true, required: false
  private _containerMode?: string; 
  public get containerMode() {
    return this.getStringAttribute('container_mode');
  }
  public set containerMode(value: string) {
    this._containerMode = value;
  }
  public resetContainerMode() {
    this._containerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerModeInput() {
    return this._containerMode;
  }

  // container_type - computed: false, optional: true, required: false
  private _containerType?: string; 
  public get containerType() {
    return this.getStringAttribute('container_type');
  }
  public set containerType(value: string) {
    this._containerType = value;
  }
  public resetContainerType() {
    this._containerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTypeInput() {
    return this._containerType;
  }

  // controller_created - computed: false, optional: true, required: false
  private _controllerCreated?: string; 
  public get controllerCreated() {
    return this.getStringAttribute('controller_created');
  }
  public set controllerCreated(value: string) {
    this._controllerCreated = value;
  }
  public resetControllerCreated() {
    this._controllerCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerCreatedInput() {
    return this._controllerCreated;
  }

  // controller_ip - computed: true, optional: true, required: false
  private _controllerIp?: string; 
  public get controllerIp() {
    return this.getStringAttribute('controller_ip');
  }
  public set controllerIp(value: string) {
    this._controllerIp = value;
  }
  public resetControllerIp() {
    this._controllerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIpInput() {
    return this._controllerIp;
  }

  // enable_state - computed: false, optional: true, required: false
  private _enableState?: string; 
  public get enableState() {
    return this.getStringAttribute('enable_state');
  }
  public set enableState(value: string) {
    this._enableState = value;
  }
  public resetEnableState() {
    this._enableState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStateInput() {
    return this._enableState;
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // host_ref - computed: true, optional: true, required: false
  private _hostRef?: string; 
  public get hostRef() {
    return this.getStringAttribute('host_ref');
  }
  public set hostRef(value: string) {
    this._hostRef = value;
  }
  public resetHostRef() {
    this._hostRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRefInput() {
    return this._hostRef;
  }

  // hypervisor - computed: true, optional: true, required: false
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  public resetHypervisor() {
    this._hypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

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

  // nsxt_no_hotplug - computed: true, optional: true, required: false
  private _nsxtNoHotplug?: string; 
  public get nsxtNoHotplug() {
    return this.getStringAttribute('nsxt_no_hotplug');
  }
  public set nsxtNoHotplug(value: string) {
    this._nsxtNoHotplug = value;
  }
  public resetNsxtNoHotplug() {
    this._nsxtNoHotplug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtNoHotplugInput() {
    return this._nsxtNoHotplug;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // data_vnics - computed: false, optional: true, required: false
  private _dataVnics = new ServiceengineDataVnicsList(this, "data_vnics", false);
  public get dataVnics() {
    return this._dataVnics;
  }
  public putDataVnics(value: ServiceengineDataVnics[] | cdktf.IResolvable) {
    this._dataVnics.internalValue = value;
  }
  public resetDataVnics() {
    this._dataVnics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVnicsInput() {
    return this._dataVnics.internalValue;
  }

  // mgmt_vnic - computed: false, optional: true, required: false
  private _mgmtVnic = new ServiceengineMgmtVnicList(this, "mgmt_vnic", true);
  public get mgmtVnic() {
    return this._mgmtVnic;
  }
  public putMgmtVnic(value: ServiceengineMgmtVnic[] | cdktf.IResolvable) {
    this._mgmtVnic.internalValue = value;
  }
  public resetMgmtVnic() {
    this._mgmtVnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtVnicInput() {
    return this._mgmtVnic.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ServiceengineResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ServiceengineResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      container_mode: cdktf.stringToTerraform(this._containerMode),
      container_type: cdktf.stringToTerraform(this._containerType),
      controller_created: cdktf.stringToTerraform(this._controllerCreated),
      controller_ip: cdktf.stringToTerraform(this._controllerIp),
      enable_state: cdktf.stringToTerraform(this._enableState),
      flavor: cdktf.stringToTerraform(this._flavor),
      host_ref: cdktf.stringToTerraform(this._hostRef),
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nsxt_no_hotplug: cdktf.stringToTerraform(this._nsxtNoHotplug),
      se_group_ref: cdktf.stringToTerraform(this._seGroupRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      data_vnics: cdktf.listMapper(serviceengineDataVnicsToTerraform, true)(this._dataVnics.internalValue),
      mgmt_vnic: cdktf.listMapper(serviceengineMgmtVnicToTerraform, true)(this._mgmtVnic.internalValue),
      resources: cdktf.listMapper(serviceengineResourcesToTerraform, true)(this._resources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_mode: {
        value: cdktf.stringToHclTerraform(this._containerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_type: {
        value: cdktf.stringToHclTerraform(this._containerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_created: {
        value: cdktf.stringToHclTerraform(this._controllerCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_ip: {
        value: cdktf.stringToHclTerraform(this._controllerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_state: {
        value: cdktf.stringToHclTerraform(this._enableState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ref: {
        value: cdktf.stringToHclTerraform(this._hostRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor: {
        value: cdktf.stringToHclTerraform(this._hypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      nsxt_no_hotplug: {
        value: cdktf.stringToHclTerraform(this._nsxtNoHotplug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_group_ref: {
        value: cdktf.stringToHclTerraform(this._seGroupRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_vnics: {
        value: cdktf.listMapperHcl(serviceengineDataVnicsToHclTerraform, true)(this._dataVnics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceengineDataVnicsList",
      },
      mgmt_vnic: {
        value: cdktf.listMapperHcl(serviceengineMgmtVnicToHclTerraform, true)(this._mgmtVnic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceengineMgmtVnicList",
      },
      resources: {
        value: cdktf.listMapperHcl(serviceengineResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceengineResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
