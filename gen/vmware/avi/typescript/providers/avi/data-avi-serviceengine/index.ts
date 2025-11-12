// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviServiceengineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine#cloud_ref DataAviServiceengine#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine#id DataAviServiceengine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine#name DataAviServiceengine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine#tenant_ref DataAviServiceengine#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine#uuid DataAviServiceengine#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviServiceengineDataVnicsMembers {
}

export function dataAviServiceengineDataVnicsMembersToTerraform(struct?: DataAviServiceengineDataVnicsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsMembersToHclTerraform(struct?: DataAviServiceengineDataVnicsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnicsMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnicsMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getStringAttribute('active');
  }

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
}

export class DataAviServiceengineDataVnicsMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsMembersOutputReference {
    return new DataAviServiceengineDataVnicsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr {
}

export function dataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrToTerraform(struct?: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrToHclTerraform(struct?: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrOutputReference {
    return new DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIp {
}

export function dataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpToTerraform(struct?: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpToHclTerraform(struct?: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpOutputReference {
    return new DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineDataVnicsVlanInterfacesVnicNetworks {
}

export function dataAviServiceengineDataVnicsVlanInterfacesVnicNetworksToTerraform(struct?: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsVlanInterfacesVnicNetworksToHclTerraform(struct?: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnicsVlanInterfacesVnicNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnicsVlanInterfacesVnicNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ctlr_alloc - computed: true, optional: false, required: false
  public get ctlrAlloc() {
    return this.getStringAttribute('ctlr_alloc');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksOutputReference {
    return new DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineDataVnicsVlanInterfaces {
}

export function dataAviServiceengineDataVnicsVlanInterfacesToTerraform(struct?: DataAviServiceengineDataVnicsVlanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsVlanInterfacesToHclTerraform(struct?: DataAviServiceengineDataVnicsVlanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsVlanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnicsVlanInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnicsVlanInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_enabled - computed: true, optional: false, required: false
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // ip6_autocfg_enabled - computed: true, optional: false, required: false
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }

  // is_mgmt - computed: true, optional: false, required: false
  public get isMgmt() {
    return this.getStringAttribute('is_mgmt');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vnic_networks - computed: true, optional: false, required: false
  private _vnicNetworks = new DataAviServiceengineDataVnicsVlanInterfacesVnicNetworksList(this, "vnic_networks", false);
  public get vnicNetworks() {
    return this._vnicNetworks;
  }

  // vrf_ref - computed: true, optional: false, required: false
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
}

export class DataAviServiceengineDataVnicsVlanInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsVlanInterfacesOutputReference {
    return new DataAviServiceengineDataVnicsVlanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineDataVnicsVnicNetworksIpIpAddr {
}

export function dataAviServiceengineDataVnicsVnicNetworksIpIpAddrToTerraform(struct?: DataAviServiceengineDataVnicsVnicNetworksIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsVnicNetworksIpIpAddrToHclTerraform(struct?: DataAviServiceengineDataVnicsVnicNetworksIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsVnicNetworksIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnicsVnicNetworksIpIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnicsVnicNetworksIpIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceengineDataVnicsVnicNetworksIpIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsVnicNetworksIpIpAddrOutputReference {
    return new DataAviServiceengineDataVnicsVnicNetworksIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineDataVnicsVnicNetworksIp {
}

export function dataAviServiceengineDataVnicsVnicNetworksIpToTerraform(struct?: DataAviServiceengineDataVnicsVnicNetworksIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsVnicNetworksIpToHclTerraform(struct?: DataAviServiceengineDataVnicsVnicNetworksIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsVnicNetworksIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnicsVnicNetworksIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnicsVnicNetworksIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceengineDataVnicsVnicNetworksIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceengineDataVnicsVnicNetworksIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsVnicNetworksIpOutputReference {
    return new DataAviServiceengineDataVnicsVnicNetworksIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineDataVnicsVnicNetworks {
}

export function dataAviServiceengineDataVnicsVnicNetworksToTerraform(struct?: DataAviServiceengineDataVnicsVnicNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsVnicNetworksToHclTerraform(struct?: DataAviServiceengineDataVnicsVnicNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsVnicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnicsVnicNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnicsVnicNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ctlr_alloc - computed: true, optional: false, required: false
  public get ctlrAlloc() {
    return this.getStringAttribute('ctlr_alloc');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataAviServiceengineDataVnicsVnicNetworksIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAviServiceengineDataVnicsVnicNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsVnicNetworksOutputReference {
    return new DataAviServiceengineDataVnicsVnicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineDataVnics {
}

export function dataAviServiceengineDataVnicsToTerraform(struct?: DataAviServiceengineDataVnics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineDataVnicsToHclTerraform(struct?: DataAviServiceengineDataVnics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineDataVnicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineDataVnics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineDataVnics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adapter - computed: true, optional: false, required: false
  public get adapter() {
    return this.getStringAttribute('adapter');
  }

  // aggregator_chgd - computed: true, optional: false, required: false
  public get aggregatorChgd() {
    return this.getStringAttribute('aggregator_chgd');
  }

  // can_se_dp_takeover - computed: true, optional: false, required: false
  public get canSeDpTakeover() {
    return this.getStringAttribute('can_se_dp_takeover');
  }

  // connected - computed: true, optional: false, required: false
  public get connected() {
    return this.getStringAttribute('connected');
  }

  // del_pending - computed: true, optional: false, required: false
  public get delPending() {
    return this.getStringAttribute('del_pending');
  }

  // delete_vnic - computed: true, optional: false, required: false
  public get deleteVnic() {
    return this.getStringAttribute('delete_vnic');
  }

  // dhcp_enabled - computed: true, optional: false, required: false
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }

  // dp_deletion_done - computed: true, optional: false, required: false
  public get dpDeletionDone() {
    return this.getStringAttribute('dp_deletion_done');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // ip6_autocfg_enabled - computed: true, optional: false, required: false
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }

  // is_asm - computed: true, optional: false, required: false
  public get isAsm() {
    return this.getStringAttribute('is_asm');
  }

  // is_avi_internal_network - computed: true, optional: false, required: false
  public get isAviInternalNetwork() {
    return this.getStringAttribute('is_avi_internal_network');
  }

  // is_hsm - computed: true, optional: false, required: false
  public get isHsm() {
    return this.getStringAttribute('is_hsm');
  }

  // is_mgmt - computed: true, optional: false, required: false
  public get isMgmt() {
    return this.getStringAttribute('is_mgmt');
  }

  // is_portchannel - computed: true, optional: false, required: false
  public get isPortchannel() {
    return this.getStringAttribute('is_portchannel');
  }

  // link_up - computed: true, optional: false, required: false
  public get linkUp() {
    return this.getStringAttribute('link_up');
  }

  // linux_name - computed: true, optional: false, required: false
  public get linuxName() {
    return this.getStringAttribute('linux_name');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataAviServiceengineDataVnicsMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getStringAttribute('mtu');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // network_ref - computed: true, optional: false, required: false
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }

  // num_rx_descriptors - computed: true, optional: false, required: false
  public get numRxDescriptors() {
    return this.getStringAttribute('num_rx_descriptors');
  }

  // num_tx_descriptors - computed: true, optional: false, required: false
  public get numTxDescriptors() {
    return this.getStringAttribute('num_tx_descriptors');
  }

  // pci_id - computed: true, optional: false, required: false
  public get pciId() {
    return this.getStringAttribute('pci_id');
  }

  // port_uuid - computed: true, optional: false, required: false
  public get portUuid() {
    return this.getStringAttribute('port_uuid');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vlan_interfaces - computed: true, optional: false, required: false
  private _vlanInterfaces = new DataAviServiceengineDataVnicsVlanInterfacesList(this, "vlan_interfaces", false);
  public get vlanInterfaces() {
    return this._vlanInterfaces;
  }

  // vnic_networks - computed: true, optional: false, required: false
  private _vnicNetworks = new DataAviServiceengineDataVnicsVnicNetworksList(this, "vnic_networks", false);
  public get vnicNetworks() {
    return this._vnicNetworks;
  }

  // vrf_id - computed: true, optional: false, required: false
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }

  // vrf_ref - computed: true, optional: false, required: false
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
}

export class DataAviServiceengineDataVnicsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineDataVnicsOutputReference {
    return new DataAviServiceengineDataVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnicMembers {
}

export function dataAviServiceengineMgmtVnicMembersToTerraform(struct?: DataAviServiceengineMgmtVnicMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicMembersToHclTerraform(struct?: DataAviServiceengineMgmtVnicMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnicMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnicMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getStringAttribute('active');
  }

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
}

export class DataAviServiceengineMgmtVnicMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicMembersOutputReference {
    return new DataAviServiceengineMgmtVnicMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr {
}

export function dataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrToTerraform(struct?: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrToHclTerraform(struct?: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrOutputReference {
    return new DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIp {
}

export function dataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpToTerraform(struct?: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpToHclTerraform(struct?: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpOutputReference {
    return new DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworks {
}

export function dataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksToTerraform(struct?: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksToHclTerraform(struct?: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ctlr_alloc - computed: true, optional: false, required: false
  public get ctlrAlloc() {
    return this.getStringAttribute('ctlr_alloc');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksOutputReference {
    return new DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnicVlanInterfaces {
}

export function dataAviServiceengineMgmtVnicVlanInterfacesToTerraform(struct?: DataAviServiceengineMgmtVnicVlanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicVlanInterfacesToHclTerraform(struct?: DataAviServiceengineMgmtVnicVlanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicVlanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnicVlanInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnicVlanInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_enabled - computed: true, optional: false, required: false
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // ip6_autocfg_enabled - computed: true, optional: false, required: false
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }

  // is_mgmt - computed: true, optional: false, required: false
  public get isMgmt() {
    return this.getStringAttribute('is_mgmt');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vnic_networks - computed: true, optional: false, required: false
  private _vnicNetworks = new DataAviServiceengineMgmtVnicVlanInterfacesVnicNetworksList(this, "vnic_networks", false);
  public get vnicNetworks() {
    return this._vnicNetworks;
  }

  // vrf_ref - computed: true, optional: false, required: false
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
}

export class DataAviServiceengineMgmtVnicVlanInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicVlanInterfacesOutputReference {
    return new DataAviServiceengineMgmtVnicVlanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnicVnicNetworksIpIpAddr {
}

export function dataAviServiceengineMgmtVnicVnicNetworksIpIpAddrToTerraform(struct?: DataAviServiceengineMgmtVnicVnicNetworksIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicVnicNetworksIpIpAddrToHclTerraform(struct?: DataAviServiceengineMgmtVnicVnicNetworksIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicVnicNetworksIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnicVnicNetworksIpIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnicVnicNetworksIpIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceengineMgmtVnicVnicNetworksIpIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicVnicNetworksIpIpAddrOutputReference {
    return new DataAviServiceengineMgmtVnicVnicNetworksIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnicVnicNetworksIp {
}

export function dataAviServiceengineMgmtVnicVnicNetworksIpToTerraform(struct?: DataAviServiceengineMgmtVnicVnicNetworksIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicVnicNetworksIpToHclTerraform(struct?: DataAviServiceengineMgmtVnicVnicNetworksIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicVnicNetworksIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnicVnicNetworksIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnicVnicNetworksIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceengineMgmtVnicVnicNetworksIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceengineMgmtVnicVnicNetworksIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicVnicNetworksIpOutputReference {
    return new DataAviServiceengineMgmtVnicVnicNetworksIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnicVnicNetworks {
}

export function dataAviServiceengineMgmtVnicVnicNetworksToTerraform(struct?: DataAviServiceengineMgmtVnicVnicNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicVnicNetworksToHclTerraform(struct?: DataAviServiceengineMgmtVnicVnicNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicVnicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnicVnicNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnicVnicNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ctlr_alloc - computed: true, optional: false, required: false
  public get ctlrAlloc() {
    return this.getStringAttribute('ctlr_alloc');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataAviServiceengineMgmtVnicVnicNetworksIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAviServiceengineMgmtVnicVnicNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicVnicNetworksOutputReference {
    return new DataAviServiceengineMgmtVnicVnicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineMgmtVnic {
}

export function dataAviServiceengineMgmtVnicToTerraform(struct?: DataAviServiceengineMgmtVnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineMgmtVnicToHclTerraform(struct?: DataAviServiceengineMgmtVnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineMgmtVnicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineMgmtVnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineMgmtVnic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adapter - computed: true, optional: false, required: false
  public get adapter() {
    return this.getStringAttribute('adapter');
  }

  // aggregator_chgd - computed: true, optional: false, required: false
  public get aggregatorChgd() {
    return this.getStringAttribute('aggregator_chgd');
  }

  // can_se_dp_takeover - computed: true, optional: false, required: false
  public get canSeDpTakeover() {
    return this.getStringAttribute('can_se_dp_takeover');
  }

  // connected - computed: true, optional: false, required: false
  public get connected() {
    return this.getStringAttribute('connected');
  }

  // del_pending - computed: true, optional: false, required: false
  public get delPending() {
    return this.getStringAttribute('del_pending');
  }

  // delete_vnic - computed: true, optional: false, required: false
  public get deleteVnic() {
    return this.getStringAttribute('delete_vnic');
  }

  // dhcp_enabled - computed: true, optional: false, required: false
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }

  // dp_deletion_done - computed: true, optional: false, required: false
  public get dpDeletionDone() {
    return this.getStringAttribute('dp_deletion_done');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // ip6_autocfg_enabled - computed: true, optional: false, required: false
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }

  // is_asm - computed: true, optional: false, required: false
  public get isAsm() {
    return this.getStringAttribute('is_asm');
  }

  // is_avi_internal_network - computed: true, optional: false, required: false
  public get isAviInternalNetwork() {
    return this.getStringAttribute('is_avi_internal_network');
  }

  // is_hsm - computed: true, optional: false, required: false
  public get isHsm() {
    return this.getStringAttribute('is_hsm');
  }

  // is_mgmt - computed: true, optional: false, required: false
  public get isMgmt() {
    return this.getStringAttribute('is_mgmt');
  }

  // is_portchannel - computed: true, optional: false, required: false
  public get isPortchannel() {
    return this.getStringAttribute('is_portchannel');
  }

  // link_up - computed: true, optional: false, required: false
  public get linkUp() {
    return this.getStringAttribute('link_up');
  }

  // linux_name - computed: true, optional: false, required: false
  public get linuxName() {
    return this.getStringAttribute('linux_name');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataAviServiceengineMgmtVnicMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getStringAttribute('mtu');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // network_ref - computed: true, optional: false, required: false
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }

  // num_rx_descriptors - computed: true, optional: false, required: false
  public get numRxDescriptors() {
    return this.getStringAttribute('num_rx_descriptors');
  }

  // num_tx_descriptors - computed: true, optional: false, required: false
  public get numTxDescriptors() {
    return this.getStringAttribute('num_tx_descriptors');
  }

  // pci_id - computed: true, optional: false, required: false
  public get pciId() {
    return this.getStringAttribute('pci_id');
  }

  // port_uuid - computed: true, optional: false, required: false
  public get portUuid() {
    return this.getStringAttribute('port_uuid');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vlan_interfaces - computed: true, optional: false, required: false
  private _vlanInterfaces = new DataAviServiceengineMgmtVnicVlanInterfacesList(this, "vlan_interfaces", false);
  public get vlanInterfaces() {
    return this._vlanInterfaces;
  }

  // vnic_networks - computed: true, optional: false, required: false
  private _vnicNetworks = new DataAviServiceengineMgmtVnicVnicNetworksList(this, "vnic_networks", false);
  public get vnicNetworks() {
    return this._vnicNetworks;
  }

  // vrf_id - computed: true, optional: false, required: false
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }

  // vrf_ref - computed: true, optional: false, required: false
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
}

export class DataAviServiceengineMgmtVnicList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineMgmtVnicOutputReference {
    return new DataAviServiceengineMgmtVnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceengineResources {
}

export function dataAviServiceengineResourcesToTerraform(struct?: DataAviServiceengineResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceengineResourcesToHclTerraform(struct?: DataAviServiceengineResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceengineResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceengineResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceengineResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cores_per_socket - computed: true, optional: false, required: false
  public get coresPerSocket() {
    return this.getStringAttribute('cores_per_socket');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getStringAttribute('disk');
  }

  // hyper_threading - computed: true, optional: false, required: false
  public get hyperThreading() {
    return this.getStringAttribute('hyper_threading');
  }

  // hypervisor_mode - computed: true, optional: false, required: false
  public get hypervisorMode() {
    return this.getStringAttribute('hypervisor_mode');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // num_datapath_processes - computed: true, optional: false, required: false
  public get numDatapathProcesses() {
    return this.getStringAttribute('num_datapath_processes');
  }

  // num_vcpus - computed: true, optional: false, required: false
  public get numVcpus() {
    return this.getStringAttribute('num_vcpus');
  }

  // sockets - computed: true, optional: false, required: false
  public get sockets() {
    return this.getStringAttribute('sockets');
  }
}

export class DataAviServiceengineResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceengineResourcesOutputReference {
    return new DataAviServiceengineResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine avi_serviceengine}
*/
export class DataAviServiceengine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_serviceengine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviServiceengine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviServiceengine to import
  * @param importFromId The id of the existing DataAviServiceengine that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviServiceengine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_serviceengine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceengine avi_serviceengine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviServiceengineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviServiceengineConfig = {}) {
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
    this._cloudRef = config.cloudRef;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
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

  // container_mode - computed: true, optional: false, required: false
  public get containerMode() {
    return this.getStringAttribute('container_mode');
  }

  // container_type - computed: true, optional: false, required: false
  public get containerType() {
    return this.getStringAttribute('container_type');
  }

  // controller_created - computed: true, optional: false, required: false
  public get controllerCreated() {
    return this.getStringAttribute('controller_created');
  }

  // controller_ip - computed: true, optional: false, required: false
  public get controllerIp() {
    return this.getStringAttribute('controller_ip');
  }

  // data_vnics - computed: true, optional: false, required: false
  private _dataVnics = new DataAviServiceengineDataVnicsList(this, "data_vnics", false);
  public get dataVnics() {
    return this._dataVnics;
  }

  // enable_state - computed: true, optional: false, required: false
  public get enableState() {
    return this.getStringAttribute('enable_state');
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // host_ref - computed: true, optional: false, required: false
  public get hostRef() {
    return this.getStringAttribute('host_ref');
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
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

  // mgmt_vnic - computed: true, optional: false, required: false
  private _mgmtVnic = new DataAviServiceengineMgmtVnicList(this, "mgmt_vnic", true);
  public get mgmtVnic() {
    return this._mgmtVnic;
  }

  // name - computed: true, optional: true, required: false
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

  // nsxt_no_hotplug - computed: true, optional: false, required: false
  public get nsxtNoHotplug() {
    return this.getStringAttribute('nsxt_no_hotplug');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAviServiceengineResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
