// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#id PnpDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#parameters PnpDevice#parameters}
  */
  readonly parameters?: PnpDeviceParameters[] | cdktf.IResolvable;
}
export interface PnpDeviceItemDayZeroConfig {
}

export function pnpDeviceItemDayZeroConfigToTerraform(struct?: PnpDeviceItemDayZeroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDayZeroConfigToHclTerraform(struct?: PnpDeviceItemDayZeroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDayZeroConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDayZeroConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDayZeroConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }
}

export class PnpDeviceItemDayZeroConfigList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDayZeroConfigOutputReference {
    return new PnpDeviceItemDayZeroConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoAaaCredentials {
}

export function pnpDeviceItemDeviceInfoAaaCredentialsToTerraform(struct?: PnpDeviceItemDeviceInfoAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoAaaCredentialsToHclTerraform(struct?: PnpDeviceItemDeviceInfoAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoAaaCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoAaaCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoAaaCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class PnpDeviceItemDeviceInfoAaaCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoAaaCredentialsOutputReference {
    return new PnpDeviceItemDeviceInfoAaaCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoFileSystemListStruct {
}

export function pnpDeviceItemDeviceInfoFileSystemListStructToTerraform(struct?: PnpDeviceItemDeviceInfoFileSystemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoFileSystemListStructToHclTerraform(struct?: PnpDeviceItemDeviceInfoFileSystemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoFileSystemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoFileSystemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoFileSystemListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // freespace - computed: true, optional: false, required: false
  public get freespace() {
    return this.getNumberAttribute('freespace');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // readable - computed: true, optional: false, required: false
  public get readable() {
    return this.getStringAttribute('readable');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // writeable - computed: true, optional: false, required: false
  public get writeable() {
    return this.getStringAttribute('writeable');
  }
}

export class PnpDeviceItemDeviceInfoFileSystemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoFileSystemListStructOutputReference {
    return new PnpDeviceItemDeviceInfoFileSystemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoHttpHeaders {
}

export function pnpDeviceItemDeviceInfoHttpHeadersToTerraform(struct?: PnpDeviceItemDeviceInfoHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoHttpHeadersToHclTerraform(struct?: PnpDeviceItemDeviceInfoHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoHttpHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoHttpHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class PnpDeviceItemDeviceInfoHttpHeadersList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoHttpHeadersOutputReference {
    return new PnpDeviceItemDeviceInfoHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoIpInterfaces {
}

export function pnpDeviceItemDeviceInfoIpInterfacesToTerraform(struct?: PnpDeviceItemDeviceInfoIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoIpInterfacesToHclTerraform(struct?: PnpDeviceItemDeviceInfoIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoIpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoIpInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoIpInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv6_address_list - computed: true, optional: false, required: false
  public get ipv6AddressList() {
    return this.getListAttribute('ipv6_address_list');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class PnpDeviceItemDeviceInfoIpInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoIpInterfacesOutputReference {
    return new PnpDeviceItemDeviceInfoIpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoLocation {
}

export function pnpDeviceItemDeviceInfoLocationToTerraform(struct?: PnpDeviceItemDeviceInfoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoLocationToHclTerraform(struct?: PnpDeviceItemDeviceInfoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // altitude - computed: true, optional: false, required: false
  public get altitude() {
    return this.getStringAttribute('altitude');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
}

export class PnpDeviceItemDeviceInfoLocationList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoLocationOutputReference {
    return new PnpDeviceItemDeviceInfoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoNeighborLinks {
}

export function pnpDeviceItemDeviceInfoNeighborLinksToTerraform(struct?: PnpDeviceItemDeviceInfoNeighborLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoNeighborLinksToHclTerraform(struct?: PnpDeviceItemDeviceInfoNeighborLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoNeighborLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoNeighborLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoNeighborLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_interface_name - computed: true, optional: false, required: false
  public get localInterfaceName() {
    return this.getStringAttribute('local_interface_name');
  }

  // local_mac_address - computed: true, optional: false, required: false
  public get localMacAddress() {
    return this.getStringAttribute('local_mac_address');
  }

  // local_short_interface_name - computed: true, optional: false, required: false
  public get localShortInterfaceName() {
    return this.getStringAttribute('local_short_interface_name');
  }

  // remote_device_name - computed: true, optional: false, required: false
  public get remoteDeviceName() {
    return this.getStringAttribute('remote_device_name');
  }

  // remote_interface_name - computed: true, optional: false, required: false
  public get remoteInterfaceName() {
    return this.getStringAttribute('remote_interface_name');
  }

  // remote_mac_address - computed: true, optional: false, required: false
  public get remoteMacAddress() {
    return this.getStringAttribute('remote_mac_address');
  }

  // remote_platform - computed: true, optional: false, required: false
  public get remotePlatform() {
    return this.getStringAttribute('remote_platform');
  }

  // remote_short_interface_name - computed: true, optional: false, required: false
  public get remoteShortInterfaceName() {
    return this.getStringAttribute('remote_short_interface_name');
  }

  // remote_version - computed: true, optional: false, required: false
  public get remoteVersion() {
    return this.getStringAttribute('remote_version');
  }
}

export class PnpDeviceItemDeviceInfoNeighborLinksList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoNeighborLinksOutputReference {
    return new PnpDeviceItemDeviceInfoNeighborLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint {
}

export function pnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointToTerraform(struct?: PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointToHclTerraform(struct?: PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointOutputReference {
    return new PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint {
}

export function pnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointToTerraform(struct?: PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointToHclTerraform(struct?: PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointOutputReference {
    return new PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoPnpProfileListStruct {
}

export function pnpDeviceItemDeviceInfoPnpProfileListStructToTerraform(struct?: PnpDeviceItemDeviceInfoPnpProfileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoPnpProfileListStructToHclTerraform(struct?: PnpDeviceItemDeviceInfoPnpProfileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoPnpProfileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoPnpProfileListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoPnpProfileListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // discovery_created - computed: true, optional: false, required: false
  public get discoveryCreated() {
    return this.getStringAttribute('discovery_created');
  }

  // primary_endpoint - computed: true, optional: false, required: false
  private _primaryEndpoint = new PnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointList(this, "primary_endpoint", false);
  public get primaryEndpoint() {
    return this._primaryEndpoint;
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // secondary_endpoint - computed: true, optional: false, required: false
  private _secondaryEndpoint = new PnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointList(this, "secondary_endpoint", false);
  public get secondaryEndpoint() {
    return this._secondaryEndpoint;
  }
}

export class PnpDeviceItemDeviceInfoPnpProfileListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoPnpProfileListStructOutputReference {
    return new PnpDeviceItemDeviceInfoPnpProfileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoPreWorkflowCliOuputs {
}

export function pnpDeviceItemDeviceInfoPreWorkflowCliOuputsToTerraform(struct?: PnpDeviceItemDeviceInfoPreWorkflowCliOuputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoPreWorkflowCliOuputsToHclTerraform(struct?: PnpDeviceItemDeviceInfoPreWorkflowCliOuputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoPreWorkflowCliOuputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoPreWorkflowCliOuputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoPreWorkflowCliOuputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cli - computed: true, optional: false, required: false
  public get cli() {
    return this.getStringAttribute('cli');
  }

  // cli_output - computed: true, optional: false, required: false
  public get cliOutput() {
    return this.getStringAttribute('cli_output');
  }
}

export class PnpDeviceItemDeviceInfoPreWorkflowCliOuputsList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoPreWorkflowCliOuputsOutputReference {
    return new PnpDeviceItemDeviceInfoPreWorkflowCliOuputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoStackInfoStackMemberListStruct {
}

export function pnpDeviceItemDeviceInfoStackInfoStackMemberListStructToTerraform(struct?: PnpDeviceItemDeviceInfoStackInfoStackMemberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoStackInfoStackMemberListStructToHclTerraform(struct?: PnpDeviceItemDeviceInfoStackInfoStackMemberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoStackInfoStackMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoStackInfoStackMemberListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoStackInfoStackMemberListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hardware_version - computed: true, optional: false, required: false
  public get hardwareVersion() {
    return this.getStringAttribute('hardware_version');
  }

  // license_level - computed: true, optional: false, required: false
  public get licenseLevel() {
    return this.getStringAttribute('license_level');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getStringAttribute('pid');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // stack_number - computed: true, optional: false, required: false
  public get stackNumber() {
    return this.getNumberAttribute('stack_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sudi_serial_number - computed: true, optional: false, required: false
  public get sudiSerialNumber() {
    return this.getStringAttribute('sudi_serial_number');
  }
}

export class PnpDeviceItemDeviceInfoStackInfoStackMemberListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoStackInfoStackMemberListStructOutputReference {
    return new PnpDeviceItemDeviceInfoStackInfoStackMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfoStackInfo {
}

export function pnpDeviceItemDeviceInfoStackInfoToTerraform(struct?: PnpDeviceItemDeviceInfoStackInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoStackInfoToHclTerraform(struct?: PnpDeviceItemDeviceInfoStackInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoStackInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfoStackInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfoStackInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_full_ring - computed: true, optional: false, required: false
  public get isFullRing() {
    return this.getStringAttribute('is_full_ring');
  }

  // stack_member_list - computed: true, optional: false, required: false
  private _stackMemberList = new PnpDeviceItemDeviceInfoStackInfoStackMemberListStructList(this, "stack_member_list", false);
  public get stackMemberList() {
    return this._stackMemberList;
  }

  // stack_ring_protocol - computed: true, optional: false, required: false
  public get stackRingProtocol() {
    return this.getStringAttribute('stack_ring_protocol');
  }

  // supports_stack_workflows - computed: true, optional: false, required: false
  public get supportsStackWorkflows() {
    return this.getStringAttribute('supports_stack_workflows');
  }

  // total_member_count - computed: true, optional: false, required: false
  public get totalMemberCount() {
    return this.getNumberAttribute('total_member_count');
  }

  // valid_license_levels - computed: true, optional: false, required: false
  public get validLicenseLevels() {
    return this.getListAttribute('valid_license_levels');
  }
}

export class PnpDeviceItemDeviceInfoStackInfoList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoStackInfoOutputReference {
    return new PnpDeviceItemDeviceInfoStackInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemDeviceInfo {
}

export function pnpDeviceItemDeviceInfoToTerraform(struct?: PnpDeviceItemDeviceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemDeviceInfoToHclTerraform(struct?: PnpDeviceItemDeviceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemDeviceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemDeviceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemDeviceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_credentials - computed: true, optional: false, required: false
  private _aaaCredentials = new PnpDeviceItemDeviceInfoAaaCredentialsList(this, "aaa_credentials", false);
  public get aaaCredentials() {
    return this._aaaCredentials;
  }

  // added_on - computed: true, optional: false, required: false
  public get addedOn() {
    return this.getNumberAttribute('added_on');
  }

  // addn_mac_addrs - computed: true, optional: false, required: false
  public get addnMacAddrs() {
    return this.getListAttribute('addn_mac_addrs');
  }

  // agent_type - computed: true, optional: false, required: false
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }

  // auth_status - computed: true, optional: false, required: false
  public get authStatus() {
    return this.getStringAttribute('auth_status');
  }

  // authenticated_mic_number - computed: true, optional: false, required: false
  public get authenticatedMicNumber() {
    return this.getStringAttribute('authenticated_mic_number');
  }

  // authenticated_sudi_serial_no - computed: true, optional: false, required: false
  public get authenticatedSudiSerialNo() {
    return this.getStringAttribute('authenticated_sudi_serial_no');
  }

  // capabilities_supported - computed: true, optional: false, required: false
  public get capabilitiesSupported() {
    return this.getListAttribute('capabilities_supported');
  }

  // cm_state - computed: true, optional: false, required: false
  public get cmState() {
    return this.getStringAttribute('cm_state');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_sudi_serial_nos - computed: true, optional: false, required: false
  public get deviceSudiSerialNos() {
    return this.getListAttribute('device_sudi_serial_nos');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // features_supported - computed: true, optional: false, required: false
  public get featuresSupported() {
    return this.getListAttribute('features_supported');
  }

  // file_system_list - computed: true, optional: false, required: false
  private _fileSystemList = new PnpDeviceItemDeviceInfoFileSystemListStructList(this, "file_system_list", false);
  public get fileSystemList() {
    return this._fileSystemList;
  }

  // first_contact - computed: true, optional: false, required: false
  public get firstContact() {
    return this.getNumberAttribute('first_contact');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // http_headers - computed: true, optional: false, required: false
  private _httpHeaders = new PnpDeviceItemDeviceInfoHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }

  // image_file - computed: true, optional: false, required: false
  public get imageFile() {
    return this.getStringAttribute('image_file');
  }

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // ip_interfaces - computed: true, optional: false, required: false
  private _ipInterfaces = new PnpDeviceItemDeviceInfoIpInterfacesList(this, "ip_interfaces", false);
  public get ipInterfaces() {
    return this._ipInterfaces;
  }

  // last_contact - computed: true, optional: false, required: false
  public get lastContact() {
    return this.getNumberAttribute('last_contact');
  }

  // last_sync_time - computed: true, optional: false, required: false
  public get lastSyncTime() {
    return this.getNumberAttribute('last_sync_time');
  }

  // last_update_on - computed: true, optional: false, required: false
  public get lastUpdateOn() {
    return this.getNumberAttribute('last_update_on');
  }

  // location - computed: true, optional: false, required: false
  private _location = new PnpDeviceItemDeviceInfoLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // neighbor_links - computed: true, optional: false, required: false
  private _neighborLinks = new PnpDeviceItemDeviceInfoNeighborLinksList(this, "neighbor_links", false);
  public get neighborLinks() {
    return this._neighborLinks;
  }

  // onb_state - computed: true, optional: false, required: false
  public get onbState() {
    return this.getStringAttribute('onb_state');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getStringAttribute('pid');
  }

  // pnp_profile_list - computed: true, optional: false, required: false
  private _pnpProfileList = new PnpDeviceItemDeviceInfoPnpProfileListStructList(this, "pnp_profile_list", false);
  public get pnpProfileList() {
    return this._pnpProfileList;
  }

  // populate_inventory - computed: true, optional: false, required: false
  public get populateInventory() {
    return this.getStringAttribute('populate_inventory');
  }

  // pre_workflow_cli_ouputs - computed: true, optional: false, required: false
  private _preWorkflowCliOuputs = new PnpDeviceItemDeviceInfoPreWorkflowCliOuputsList(this, "pre_workflow_cli_ouputs", false);
  public get preWorkflowCliOuputs() {
    return this._preWorkflowCliOuputs;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // reload_requested - computed: true, optional: false, required: false
  public get reloadRequested() {
    return this.getStringAttribute('reload_requested');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // smart_account_id - computed: true, optional: false, required: false
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // stack - computed: true, optional: false, required: false
  public get stack() {
    return this.getStringAttribute('stack');
  }

  // stack_info - computed: true, optional: false, required: false
  private _stackInfo = new PnpDeviceItemDeviceInfoStackInfoList(this, "stack_info", false);
  public get stackInfo() {
    return this._stackInfo;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sudi_required - computed: true, optional: false, required: false
  public get sudiRequired() {
    return this.getStringAttribute('sudi_required');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // user_mic_numbers - computed: true, optional: false, required: false
  public get userMicNumbers() {
    return this.getListAttribute('user_mic_numbers');
  }

  // user_sudi_serial_nos - computed: true, optional: false, required: false
  public get userSudiSerialNos() {
    return this.getListAttribute('user_sudi_serial_nos');
  }

  // virtual_account_id - computed: true, optional: false, required: false
  public get virtualAccountId() {
    return this.getStringAttribute('virtual_account_id');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }

  // workflow_name - computed: true, optional: false, required: false
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
}

export class PnpDeviceItemDeviceInfoList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemDeviceInfoOutputReference {
    return new PnpDeviceItemDeviceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails {
}

export function pnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsToTerraform(struct?: PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsToHclTerraform(struct?: PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsOutputReference {
    return new PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct {
}

export function pnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructToTerraform(struct?: PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructToHclTerraform(struct?: PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // output_str - computed: true, optional: false, required: false
  public get outputStr() {
    return this.getStringAttribute('output_str');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_taken - computed: true, optional: false, required: false
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
}

export class PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference {
    return new PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemRunSummaryListHistoryTaskInfo {
}

export function pnpDeviceItemRunSummaryListHistoryTaskInfoToTerraform(struct?: PnpDeviceItemRunSummaryListHistoryTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemRunSummaryListHistoryTaskInfoToHclTerraform(struct?: PnpDeviceItemRunSummaryListHistoryTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemRunSummaryListHistoryTaskInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemRunSummaryListHistoryTaskInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemRunSummaryListHistoryTaskInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addn_details - computed: true, optional: false, required: false
  private _addnDetails = new PnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsList(this, "addn_details", false);
  public get addnDetails() {
    return this._addnDetails;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // time_taken - computed: true, optional: false, required: false
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // work_item_list - computed: true, optional: false, required: false
  private _workItemList = new PnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class PnpDeviceItemRunSummaryListHistoryTaskInfoList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemRunSummaryListHistoryTaskInfoOutputReference {
    return new PnpDeviceItemRunSummaryListHistoryTaskInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemRunSummaryListStruct {
}

export function pnpDeviceItemRunSummaryListStructToTerraform(struct?: PnpDeviceItemRunSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemRunSummaryListStructToHclTerraform(struct?: PnpDeviceItemRunSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemRunSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemRunSummaryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemRunSummaryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // error_flag - computed: true, optional: false, required: false
  public get errorFlag() {
    return this.getStringAttribute('error_flag');
  }

  // history_task_info - computed: true, optional: false, required: false
  private _historyTaskInfo = new PnpDeviceItemRunSummaryListHistoryTaskInfoList(this, "history_task_info", false);
  public get historyTaskInfo() {
    return this._historyTaskInfo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}

export class PnpDeviceItemRunSummaryListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemRunSummaryListStructOutputReference {
    return new PnpDeviceItemRunSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct {
}

export function pnpDeviceItemSystemResetWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemSystemResetWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemSystemResetWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // output_str - computed: true, optional: false, required: false
  public get outputStr() {
    return this.getStringAttribute('output_str');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_taken - computed: true, optional: false, required: false
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
}

export class PnpDeviceItemSystemResetWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemSystemResetWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceItemSystemResetWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemSystemResetWorkflowTasks {
}

export function pnpDeviceItemSystemResetWorkflowTasksToTerraform(struct?: PnpDeviceItemSystemResetWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemSystemResetWorkflowTasksToHclTerraform(struct?: PnpDeviceItemSystemResetWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemSystemResetWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemSystemResetWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemSystemResetWorkflowTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // curr_work_item_idx - computed: true, optional: false, required: false
  public get currWorkItemIdx() {
    return this.getNumberAttribute('curr_work_item_idx');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_seq_no - computed: true, optional: false, required: false
  public get taskSeqNo() {
    return this.getNumberAttribute('task_seq_no');
  }

  // time_taken - computed: true, optional: false, required: false
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // work_item_list - computed: true, optional: false, required: false
  private _workItemList = new PnpDeviceItemSystemResetWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class PnpDeviceItemSystemResetWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemSystemResetWorkflowTasksOutputReference {
    return new PnpDeviceItemSystemResetWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemSystemResetWorkflow {
}

export function pnpDeviceItemSystemResetWorkflowToTerraform(struct?: PnpDeviceItemSystemResetWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemSystemResetWorkflowToHclTerraform(struct?: PnpDeviceItemSystemResetWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemSystemResetWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemSystemResetWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemSystemResetWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_to_inventory - computed: true, optional: false, required: false
  public get addToInventory() {
    return this.getStringAttribute('add_to_inventory');
  }

  // added_on - computed: true, optional: false, required: false
  public get addedOn() {
    return this.getNumberAttribute('added_on');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // curr_task_idx - computed: true, optional: false, required: false
  public get currTaskIdx() {
    return this.getNumberAttribute('curr_task_idx');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // exec_time - computed: true, optional: false, required: false
  public get execTime() {
    return this.getNumberAttribute('exec_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lastupdate_on - computed: true, optional: false, required: false
  public get lastupdateOn() {
    return this.getNumberAttribute('lastupdate_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new PnpDeviceItemSystemResetWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_state - computed: true, optional: false, required: false
  public get useState() {
    return this.getStringAttribute('use_state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class PnpDeviceItemSystemResetWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemSystemResetWorkflowOutputReference {
    return new PnpDeviceItemSystemResetWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemSystemWorkflowTasksWorkItemListStruct {
}

export function pnpDeviceItemSystemWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceItemSystemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemSystemWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceItemSystemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemSystemWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemSystemWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemSystemWorkflowTasksWorkItemListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // output_str - computed: true, optional: false, required: false
  public get outputStr() {
    return this.getStringAttribute('output_str');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_taken - computed: true, optional: false, required: false
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
}

export class PnpDeviceItemSystemWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemSystemWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceItemSystemWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemSystemWorkflowTasks {
}

export function pnpDeviceItemSystemWorkflowTasksToTerraform(struct?: PnpDeviceItemSystemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemSystemWorkflowTasksToHclTerraform(struct?: PnpDeviceItemSystemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemSystemWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemSystemWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemSystemWorkflowTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // curr_work_item_idx - computed: true, optional: false, required: false
  public get currWorkItemIdx() {
    return this.getNumberAttribute('curr_work_item_idx');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_seq_no - computed: true, optional: false, required: false
  public get taskSeqNo() {
    return this.getNumberAttribute('task_seq_no');
  }

  // time_taken - computed: true, optional: false, required: false
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // work_item_list - computed: true, optional: false, required: false
  private _workItemList = new PnpDeviceItemSystemWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class PnpDeviceItemSystemWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemSystemWorkflowTasksOutputReference {
    return new PnpDeviceItemSystemWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemSystemWorkflow {
}

export function pnpDeviceItemSystemWorkflowToTerraform(struct?: PnpDeviceItemSystemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemSystemWorkflowToHclTerraform(struct?: PnpDeviceItemSystemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemSystemWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemSystemWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemSystemWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_to_inventory - computed: true, optional: false, required: false
  public get addToInventory() {
    return this.getStringAttribute('add_to_inventory');
  }

  // added_on - computed: true, optional: false, required: false
  public get addedOn() {
    return this.getNumberAttribute('added_on');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // curr_task_idx - computed: true, optional: false, required: false
  public get currTaskIdx() {
    return this.getNumberAttribute('curr_task_idx');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // exec_time - computed: true, optional: false, required: false
  public get execTime() {
    return this.getNumberAttribute('exec_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lastupdate_on - computed: true, optional: false, required: false
  public get lastupdateOn() {
    return this.getNumberAttribute('lastupdate_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new PnpDeviceItemSystemWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_state - computed: true, optional: false, required: false
  public get useState() {
    return this.getStringAttribute('use_state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class PnpDeviceItemSystemWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemSystemWorkflowOutputReference {
    return new PnpDeviceItemSystemWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemWorkflowTasksWorkItemListStruct {
}

export function pnpDeviceItemWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceItemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceItemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemWorkflowTasksWorkItemListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // output_str - computed: true, optional: false, required: false
  public get outputStr() {
    return this.getStringAttribute('output_str');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_taken - computed: true, optional: false, required: false
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
}

export class PnpDeviceItemWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceItemWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemWorkflowTasks {
}

export function pnpDeviceItemWorkflowTasksToTerraform(struct?: PnpDeviceItemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemWorkflowTasksToHclTerraform(struct?: PnpDeviceItemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemWorkflowTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // curr_work_item_idx - computed: true, optional: false, required: false
  public get currWorkItemIdx() {
    return this.getNumberAttribute('curr_work_item_idx');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_seq_no - computed: true, optional: false, required: false
  public get taskSeqNo() {
    return this.getNumberAttribute('task_seq_no');
  }

  // time_taken - computed: true, optional: false, required: false
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // work_item_list - computed: true, optional: false, required: false
  private _workItemList = new PnpDeviceItemWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class PnpDeviceItemWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemWorkflowTasksOutputReference {
    return new PnpDeviceItemWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemWorkflow {
}

export function pnpDeviceItemWorkflowToTerraform(struct?: PnpDeviceItemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemWorkflowToHclTerraform(struct?: PnpDeviceItemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_to_inventory - computed: true, optional: false, required: false
  public get addToInventory() {
    return this.getStringAttribute('add_to_inventory');
  }

  // added_on - computed: true, optional: false, required: false
  public get addedOn() {
    return this.getNumberAttribute('added_on');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // curr_task_idx - computed: true, optional: false, required: false
  public get currTaskIdx() {
    return this.getNumberAttribute('curr_task_idx');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // exec_time - computed: true, optional: false, required: false
  public get execTime() {
    return this.getNumberAttribute('exec_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // lastupdate_on - computed: true, optional: false, required: false
  public get lastupdateOn() {
    return this.getNumberAttribute('lastupdate_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new PnpDeviceItemWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_state - computed: true, optional: false, required: false
  public get useState() {
    return this.getStringAttribute('use_state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class PnpDeviceItemWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemWorkflowOutputReference {
    return new PnpDeviceItemWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemWorkflowParametersConfigListConfigParameters {
}

export function pnpDeviceItemWorkflowParametersConfigListConfigParametersToTerraform(struct?: PnpDeviceItemWorkflowParametersConfigListConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemWorkflowParametersConfigListConfigParametersToHclTerraform(struct?: PnpDeviceItemWorkflowParametersConfigListConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemWorkflowParametersConfigListConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemWorkflowParametersConfigListConfigParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemWorkflowParametersConfigListConfigParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class PnpDeviceItemWorkflowParametersConfigListConfigParametersList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemWorkflowParametersConfigListConfigParametersOutputReference {
    return new PnpDeviceItemWorkflowParametersConfigListConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemWorkflowParametersConfigListStruct {
}

export function pnpDeviceItemWorkflowParametersConfigListStructToTerraform(struct?: PnpDeviceItemWorkflowParametersConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemWorkflowParametersConfigListStructToHclTerraform(struct?: PnpDeviceItemWorkflowParametersConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemWorkflowParametersConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemWorkflowParametersConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemWorkflowParametersConfigListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // config_parameters - computed: true, optional: false, required: false
  private _configParameters = new PnpDeviceItemWorkflowParametersConfigListConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
}

export class PnpDeviceItemWorkflowParametersConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemWorkflowParametersConfigListStructOutputReference {
    return new PnpDeviceItemWorkflowParametersConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItemWorkflowParameters {
}

export function pnpDeviceItemWorkflowParametersToTerraform(struct?: PnpDeviceItemWorkflowParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemWorkflowParametersToHclTerraform(struct?: PnpDeviceItemWorkflowParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemWorkflowParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItemWorkflowParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItemWorkflowParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_list - computed: true, optional: false, required: false
  private _configList = new PnpDeviceItemWorkflowParametersConfigListStructList(this, "config_list", false);
  public get configList() {
    return this._configList;
  }

  // license_level - computed: true, optional: false, required: false
  public get licenseLevel() {
    return this.getStringAttribute('license_level');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // top_of_stack_serial_number - computed: true, optional: false, required: false
  public get topOfStackSerialNumber() {
    return this.getStringAttribute('top_of_stack_serial_number');
  }
}

export class PnpDeviceItemWorkflowParametersList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemWorkflowParametersOutputReference {
    return new PnpDeviceItemWorkflowParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceItem {
}

export function pnpDeviceItemToTerraform(struct?: PnpDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceItemToHclTerraform(struct?: PnpDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_zero_config - computed: true, optional: false, required: false
  private _dayZeroConfig = new PnpDeviceItemDayZeroConfigList(this, "day_zero_config", false);
  public get dayZeroConfig() {
    return this._dayZeroConfig;
  }

  // day_zero_config_preview - computed: true, optional: false, required: false
  public get dayZeroConfigPreview() {
    return this.getStringAttribute('day_zero_config_preview');
  }

  // device_info - computed: true, optional: false, required: false
  private _deviceInfo = new PnpDeviceItemDeviceInfoList(this, "device_info", false);
  public get deviceInfo() {
    return this._deviceInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // run_summary_list - computed: true, optional: false, required: false
  private _runSummaryList = new PnpDeviceItemRunSummaryListStructList(this, "run_summary_list", false);
  public get runSummaryList() {
    return this._runSummaryList;
  }

  // system_reset_workflow - computed: true, optional: false, required: false
  private _systemResetWorkflow = new PnpDeviceItemSystemResetWorkflowList(this, "system_reset_workflow", false);
  public get systemResetWorkflow() {
    return this._systemResetWorkflow;
  }

  // system_workflow - computed: true, optional: false, required: false
  private _systemWorkflow = new PnpDeviceItemSystemWorkflowList(this, "system_workflow", false);
  public get systemWorkflow() {
    return this._systemWorkflow;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // workflow - computed: true, optional: false, required: false
  private _workflow = new PnpDeviceItemWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }

  // workflow_parameters - computed: true, optional: false, required: false
  private _workflowParameters = new PnpDeviceItemWorkflowParametersList(this, "workflow_parameters", false);
  public get workflowParameters() {
    return this._workflowParameters;
  }
}

export class PnpDeviceItemList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceItemOutputReference {
    return new PnpDeviceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoAaaCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#password PnpDevice#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#username PnpDevice#username}
  */
  readonly username?: string;
}

export function pnpDeviceParametersDeviceInfoAaaCredentialsToTerraform(struct?: PnpDeviceParametersDeviceInfoAaaCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function pnpDeviceParametersDeviceInfoAaaCredentialsToHclTerraform(struct?: PnpDeviceParametersDeviceInfoAaaCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoAaaCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoAaaCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoAaaCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class PnpDeviceParametersDeviceInfoAaaCredentialsList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoAaaCredentials[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoAaaCredentialsOutputReference {
    return new PnpDeviceParametersDeviceInfoAaaCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoFileSystemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#freespace PnpDevice#freespace}
  */
  readonly freespace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#readable PnpDevice#readable}
  */
  readonly readable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#size PnpDevice#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#type PnpDevice#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#writeable PnpDevice#writeable}
  */
  readonly writeable?: string;
}

export function pnpDeviceParametersDeviceInfoFileSystemListStructToTerraform(struct?: PnpDeviceParametersDeviceInfoFileSystemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    freespace: cdktf.numberToTerraform(struct!.freespace),
    name: cdktf.stringToTerraform(struct!.name),
    readable: cdktf.stringToTerraform(struct!.readable),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    writeable: cdktf.stringToTerraform(struct!.writeable),
  }
}


export function pnpDeviceParametersDeviceInfoFileSystemListStructToHclTerraform(struct?: PnpDeviceParametersDeviceInfoFileSystemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    freespace: {
      value: cdktf.numberToHclTerraform(struct!.freespace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readable: {
      value: cdktf.stringToHclTerraform(struct!.readable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeable: {
      value: cdktf.stringToHclTerraform(struct!.writeable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoFileSystemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoFileSystemListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.freespace = this._freespace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readable !== undefined) {
      hasAnyValues = true;
      internalValueResult.readable = this._readable;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._writeable !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeable = this._writeable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoFileSystemListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._freespace = undefined;
      this._name = undefined;
      this._readable = undefined;
      this._size = undefined;
      this._type = undefined;
      this._writeable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._freespace = value.freespace;
      this._name = value.name;
      this._readable = value.readable;
      this._size = value.size;
      this._type = value.type;
      this._writeable = value.writeable;
    }
  }

  // freespace - computed: true, optional: true, required: false
  private _freespace?: number; 
  public get freespace() {
    return this.getNumberAttribute('freespace');
  }
  public set freespace(value: number) {
    this._freespace = value;
  }
  public resetFreespace() {
    this._freespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freespaceInput() {
    return this._freespace;
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

  // readable - computed: true, optional: true, required: false
  private _readable?: string; 
  public get readable() {
    return this.getStringAttribute('readable');
  }
  public set readable(value: string) {
    this._readable = value;
  }
  public resetReadable() {
    this._readable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readableInput() {
    return this._readable;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: true, optional: true, required: false
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

  // writeable - computed: true, optional: true, required: false
  private _writeable?: string; 
  public get writeable() {
    return this.getStringAttribute('writeable');
  }
  public set writeable(value: string) {
    this._writeable = value;
  }
  public resetWriteable() {
    this._writeable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeableInput() {
    return this._writeable;
  }
}

export class PnpDeviceParametersDeviceInfoFileSystemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoFileSystemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoFileSystemListStructOutputReference {
    return new PnpDeviceParametersDeviceInfoFileSystemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#key PnpDevice#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#value PnpDevice#value}
  */
  readonly value?: string;
}

export function pnpDeviceParametersDeviceInfoHttpHeadersToTerraform(struct?: PnpDeviceParametersDeviceInfoHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceParametersDeviceInfoHttpHeadersToHclTerraform(struct?: PnpDeviceParametersDeviceInfoHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PnpDeviceParametersDeviceInfoHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoHttpHeadersOutputReference {
    return new PnpDeviceParametersDeviceInfoHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoIpInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#ipv4_address PnpDevice#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#ipv6_address_list PnpDevice#ipv6_address_list}
  */
  readonly ipv6AddressList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#mac_address PnpDevice#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#status PnpDevice#status}
  */
  readonly status?: string;
}

export function pnpDeviceParametersDeviceInfoIpInterfacesToTerraform(struct?: PnpDeviceParametersDeviceInfoIpInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6AddressList),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function pnpDeviceParametersDeviceInfoIpInterfacesToHclTerraform(struct?: PnpDeviceParametersDeviceInfoIpInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6AddressList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoIpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoIpInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6AddressList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressList = this._ipv6AddressList;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoIpInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv6AddressList = undefined;
      this._macAddress = undefined;
      this._name = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv6AddressList = value.ipv6AddressList;
      this._macAddress = value.macAddress;
      this._name = value.name;
      this._status = value.status;
    }
  }

  // ipv4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address_list - computed: true, optional: true, required: false
  private _ipv6AddressList?: string[]; 
  public get ipv6AddressList() {
    return this.getListAttribute('ipv6_address_list');
  }
  public set ipv6AddressList(value: string[]) {
    this._ipv6AddressList = value;
  }
  public resetIpv6AddressList() {
    this._ipv6AddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressListInput() {
    return this._ipv6AddressList;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class PnpDeviceParametersDeviceInfoIpInterfacesList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoIpInterfaces[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoIpInterfacesOutputReference {
    return new PnpDeviceParametersDeviceInfoIpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#address PnpDevice#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#altitude PnpDevice#altitude}
  */
  readonly altitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#latitude PnpDevice#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#longitude PnpDevice#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#site_id PnpDevice#site_id}
  */
  readonly siteId?: string;
}

export function pnpDeviceParametersDeviceInfoLocationToTerraform(struct?: PnpDeviceParametersDeviceInfoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    altitude: cdktf.stringToTerraform(struct!.altitude),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    site_id: cdktf.stringToTerraform(struct!.siteId),
  }
}


export function pnpDeviceParametersDeviceInfoLocationToHclTerraform(struct?: PnpDeviceParametersDeviceInfoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    altitude: {
      value: cdktf.stringToHclTerraform(struct!.altitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._altitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.altitude = this._altitude;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._altitude = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._siteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._altitude = value.altitude;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._siteId = value.siteId;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // altitude - computed: true, optional: true, required: false
  private _altitude?: string; 
  public get altitude() {
    return this.getStringAttribute('altitude');
  }
  public set altitude(value: string) {
    this._altitude = value;
  }
  public resetAltitude() {
    this._altitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altitudeInput() {
    return this._altitude;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }
}

export class PnpDeviceParametersDeviceInfoLocationList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoLocation[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoLocationOutputReference {
    return new PnpDeviceParametersDeviceInfoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoNeighborLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#local_interface_name PnpDevice#local_interface_name}
  */
  readonly localInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#local_mac_address PnpDevice#local_mac_address}
  */
  readonly localMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#local_short_interface_name PnpDevice#local_short_interface_name}
  */
  readonly localShortInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#remote_device_name PnpDevice#remote_device_name}
  */
  readonly remoteDeviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#remote_interface_name PnpDevice#remote_interface_name}
  */
  readonly remoteInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#remote_mac_address PnpDevice#remote_mac_address}
  */
  readonly remoteMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#remote_platform PnpDevice#remote_platform}
  */
  readonly remotePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#remote_short_interface_name PnpDevice#remote_short_interface_name}
  */
  readonly remoteShortInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#remote_version PnpDevice#remote_version}
  */
  readonly remoteVersion?: string;
}

export function pnpDeviceParametersDeviceInfoNeighborLinksToTerraform(struct?: PnpDeviceParametersDeviceInfoNeighborLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_interface_name: cdktf.stringToTerraform(struct!.localInterfaceName),
    local_mac_address: cdktf.stringToTerraform(struct!.localMacAddress),
    local_short_interface_name: cdktf.stringToTerraform(struct!.localShortInterfaceName),
    remote_device_name: cdktf.stringToTerraform(struct!.remoteDeviceName),
    remote_interface_name: cdktf.stringToTerraform(struct!.remoteInterfaceName),
    remote_mac_address: cdktf.stringToTerraform(struct!.remoteMacAddress),
    remote_platform: cdktf.stringToTerraform(struct!.remotePlatform),
    remote_short_interface_name: cdktf.stringToTerraform(struct!.remoteShortInterfaceName),
    remote_version: cdktf.stringToTerraform(struct!.remoteVersion),
  }
}


export function pnpDeviceParametersDeviceInfoNeighborLinksToHclTerraform(struct?: PnpDeviceParametersDeviceInfoNeighborLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.localInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_mac_address: {
      value: cdktf.stringToHclTerraform(struct!.localMacAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_short_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.localShortInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_device_name: {
      value: cdktf.stringToHclTerraform(struct!.remoteDeviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.remoteInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_mac_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteMacAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_platform: {
      value: cdktf.stringToHclTerraform(struct!.remotePlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_short_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.remoteShortInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_version: {
      value: cdktf.stringToHclTerraform(struct!.remoteVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoNeighborLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoNeighborLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localInterfaceName = this._localInterfaceName;
    }
    if (this._localMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMacAddress = this._localMacAddress;
    }
    if (this._localShortInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localShortInterfaceName = this._localShortInterfaceName;
    }
    if (this._remoteDeviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDeviceName = this._remoteDeviceName;
    }
    if (this._remoteInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteInterfaceName = this._remoteInterfaceName;
    }
    if (this._remoteMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMacAddress = this._remoteMacAddress;
    }
    if (this._remotePlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePlatform = this._remotePlatform;
    }
    if (this._remoteShortInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteShortInterfaceName = this._remoteShortInterfaceName;
    }
    if (this._remoteVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteVersion = this._remoteVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoNeighborLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localInterfaceName = undefined;
      this._localMacAddress = undefined;
      this._localShortInterfaceName = undefined;
      this._remoteDeviceName = undefined;
      this._remoteInterfaceName = undefined;
      this._remoteMacAddress = undefined;
      this._remotePlatform = undefined;
      this._remoteShortInterfaceName = undefined;
      this._remoteVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localInterfaceName = value.localInterfaceName;
      this._localMacAddress = value.localMacAddress;
      this._localShortInterfaceName = value.localShortInterfaceName;
      this._remoteDeviceName = value.remoteDeviceName;
      this._remoteInterfaceName = value.remoteInterfaceName;
      this._remoteMacAddress = value.remoteMacAddress;
      this._remotePlatform = value.remotePlatform;
      this._remoteShortInterfaceName = value.remoteShortInterfaceName;
      this._remoteVersion = value.remoteVersion;
    }
  }

  // local_interface_name - computed: true, optional: true, required: false
  private _localInterfaceName?: string; 
  public get localInterfaceName() {
    return this.getStringAttribute('local_interface_name');
  }
  public set localInterfaceName(value: string) {
    this._localInterfaceName = value;
  }
  public resetLocalInterfaceName() {
    this._localInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInterfaceNameInput() {
    return this._localInterfaceName;
  }

  // local_mac_address - computed: true, optional: true, required: false
  private _localMacAddress?: string; 
  public get localMacAddress() {
    return this.getStringAttribute('local_mac_address');
  }
  public set localMacAddress(value: string) {
    this._localMacAddress = value;
  }
  public resetLocalMacAddress() {
    this._localMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localMacAddressInput() {
    return this._localMacAddress;
  }

  // local_short_interface_name - computed: true, optional: true, required: false
  private _localShortInterfaceName?: string; 
  public get localShortInterfaceName() {
    return this.getStringAttribute('local_short_interface_name');
  }
  public set localShortInterfaceName(value: string) {
    this._localShortInterfaceName = value;
  }
  public resetLocalShortInterfaceName() {
    this._localShortInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localShortInterfaceNameInput() {
    return this._localShortInterfaceName;
  }

  // remote_device_name - computed: true, optional: true, required: false
  private _remoteDeviceName?: string; 
  public get remoteDeviceName() {
    return this.getStringAttribute('remote_device_name');
  }
  public set remoteDeviceName(value: string) {
    this._remoteDeviceName = value;
  }
  public resetRemoteDeviceName() {
    this._remoteDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDeviceNameInput() {
    return this._remoteDeviceName;
  }

  // remote_interface_name - computed: true, optional: true, required: false
  private _remoteInterfaceName?: string; 
  public get remoteInterfaceName() {
    return this.getStringAttribute('remote_interface_name');
  }
  public set remoteInterfaceName(value: string) {
    this._remoteInterfaceName = value;
  }
  public resetRemoteInterfaceName() {
    this._remoteInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInterfaceNameInput() {
    return this._remoteInterfaceName;
  }

  // remote_mac_address - computed: true, optional: true, required: false
  private _remoteMacAddress?: string; 
  public get remoteMacAddress() {
    return this.getStringAttribute('remote_mac_address');
  }
  public set remoteMacAddress(value: string) {
    this._remoteMacAddress = value;
  }
  public resetRemoteMacAddress() {
    this._remoteMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMacAddressInput() {
    return this._remoteMacAddress;
  }

  // remote_platform - computed: true, optional: true, required: false
  private _remotePlatform?: string; 
  public get remotePlatform() {
    return this.getStringAttribute('remote_platform');
  }
  public set remotePlatform(value: string) {
    this._remotePlatform = value;
  }
  public resetRemotePlatform() {
    this._remotePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePlatformInput() {
    return this._remotePlatform;
  }

  // remote_short_interface_name - computed: true, optional: true, required: false
  private _remoteShortInterfaceName?: string; 
  public get remoteShortInterfaceName() {
    return this.getStringAttribute('remote_short_interface_name');
  }
  public set remoteShortInterfaceName(value: string) {
    this._remoteShortInterfaceName = value;
  }
  public resetRemoteShortInterfaceName() {
    this._remoteShortInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteShortInterfaceNameInput() {
    return this._remoteShortInterfaceName;
  }

  // remote_version - computed: true, optional: true, required: false
  private _remoteVersion?: string; 
  public get remoteVersion() {
    return this.getStringAttribute('remote_version');
  }
  public set remoteVersion(value: string) {
    this._remoteVersion = value;
  }
  public resetRemoteVersion() {
    this._remoteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVersionInput() {
    return this._remoteVersion;
  }
}

export class PnpDeviceParametersDeviceInfoNeighborLinksList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoNeighborLinks[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoNeighborLinksOutputReference {
    return new PnpDeviceParametersDeviceInfoNeighborLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#certificate PnpDevice#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#fqdn PnpDevice#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#ipv4_address PnpDevice#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#ipv6_address PnpDevice#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#port PnpDevice#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#protocol PnpDevice#protocol}
  */
  readonly protocol?: string;
}

export function pnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointToTerraform(struct?: PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function pnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointToHclTerraform(struct?: PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._fqdn = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._fqdn = value.fqdn;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ipv4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpoint[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointOutputReference {
    return new PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#certificate PnpDevice#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#fqdn PnpDevice#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#ipv4_address PnpDevice#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#ipv6_address PnpDevice#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#port PnpDevice#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#protocol PnpDevice#protocol}
  */
  readonly protocol?: string;
}

export function pnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointToTerraform(struct?: PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function pnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointToHclTerraform(struct?: PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._fqdn = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._fqdn = value.fqdn;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ipv4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpoint[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointOutputReference {
    return new PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoPnpProfileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#created_by PnpDevice#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#discovery_created PnpDevice#discovery_created}
  */
  readonly discoveryCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#profile_name PnpDevice#profile_name}
  */
  readonly profileName?: string;
  /**
  * primary_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#primary_endpoint PnpDevice#primary_endpoint}
  */
  readonly primaryEndpoint?: PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpoint[] | cdktf.IResolvable;
  /**
  * secondary_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#secondary_endpoint PnpDevice#secondary_endpoint}
  */
  readonly secondaryEndpoint?: PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpoint[] | cdktf.IResolvable;
}

export function pnpDeviceParametersDeviceInfoPnpProfileListStructToTerraform(struct?: PnpDeviceParametersDeviceInfoPnpProfileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    discovery_created: cdktf.stringToTerraform(struct!.discoveryCreated),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    primary_endpoint: cdktf.listMapper(pnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointToTerraform, true)(struct!.primaryEndpoint),
    secondary_endpoint: cdktf.listMapper(pnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointToTerraform, true)(struct!.secondaryEndpoint),
  }
}


export function pnpDeviceParametersDeviceInfoPnpProfileListStructToHclTerraform(struct?: PnpDeviceParametersDeviceInfoPnpProfileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_created: {
      value: cdktf.stringToHclTerraform(struct!.discoveryCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_endpoint: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointToHclTerraform, true)(struct!.primaryEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointList",
    },
    secondary_endpoint: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointToHclTerraform, true)(struct!.secondaryEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoPnpProfileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoPnpProfileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._discoveryCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryCreated = this._discoveryCreated;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._primaryEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryEndpoint = this._primaryEndpoint?.internalValue;
    }
    if (this._secondaryEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryEndpoint = this._secondaryEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoPnpProfileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._discoveryCreated = undefined;
      this._profileName = undefined;
      this._primaryEndpoint.internalValue = undefined;
      this._secondaryEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._discoveryCreated = value.discoveryCreated;
      this._profileName = value.profileName;
      this._primaryEndpoint.internalValue = value.primaryEndpoint;
      this._secondaryEndpoint.internalValue = value.secondaryEndpoint;
    }
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // discovery_created - computed: true, optional: true, required: false
  private _discoveryCreated?: string; 
  public get discoveryCreated() {
    return this.getStringAttribute('discovery_created');
  }
  public set discoveryCreated(value: string) {
    this._discoveryCreated = value;
  }
  public resetDiscoveryCreated() {
    this._discoveryCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryCreatedInput() {
    return this._discoveryCreated;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // primary_endpoint - computed: false, optional: true, required: false
  private _primaryEndpoint = new PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpointList(this, "primary_endpoint", false);
  public get primaryEndpoint() {
    return this._primaryEndpoint;
  }
  public putPrimaryEndpoint(value: PnpDeviceParametersDeviceInfoPnpProfileListPrimaryEndpoint[] | cdktf.IResolvable) {
    this._primaryEndpoint.internalValue = value;
  }
  public resetPrimaryEndpoint() {
    this._primaryEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEndpointInput() {
    return this._primaryEndpoint.internalValue;
  }

  // secondary_endpoint - computed: false, optional: true, required: false
  private _secondaryEndpoint = new PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpointList(this, "secondary_endpoint", false);
  public get secondaryEndpoint() {
    return this._secondaryEndpoint;
  }
  public putSecondaryEndpoint(value: PnpDeviceParametersDeviceInfoPnpProfileListSecondaryEndpoint[] | cdktf.IResolvable) {
    this._secondaryEndpoint.internalValue = value;
  }
  public resetSecondaryEndpoint() {
    this._secondaryEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEndpointInput() {
    return this._secondaryEndpoint.internalValue;
  }
}

export class PnpDeviceParametersDeviceInfoPnpProfileListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoPnpProfileListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoPnpProfileListStructOutputReference {
    return new PnpDeviceParametersDeviceInfoPnpProfileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoPreWorkflowCliOuputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#cli PnpDevice#cli}
  */
  readonly cli?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#cli_output PnpDevice#cli_output}
  */
  readonly cliOutput?: string;
}

export function pnpDeviceParametersDeviceInfoPreWorkflowCliOuputsToTerraform(struct?: PnpDeviceParametersDeviceInfoPreWorkflowCliOuputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli: cdktf.stringToTerraform(struct!.cli),
    cli_output: cdktf.stringToTerraform(struct!.cliOutput),
  }
}


export function pnpDeviceParametersDeviceInfoPreWorkflowCliOuputsToHclTerraform(struct?: PnpDeviceParametersDeviceInfoPreWorkflowCliOuputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli: {
      value: cdktf.stringToHclTerraform(struct!.cli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_output: {
      value: cdktf.stringToHclTerraform(struct!.cliOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoPreWorkflowCliOuputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoPreWorkflowCliOuputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cli = this._cli;
    }
    if (this._cliOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOutput = this._cliOutput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoPreWorkflowCliOuputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cli = undefined;
      this._cliOutput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cli = value.cli;
      this._cliOutput = value.cliOutput;
    }
  }

  // cli - computed: true, optional: true, required: false
  private _cli?: string; 
  public get cli() {
    return this.getStringAttribute('cli');
  }
  public set cli(value: string) {
    this._cli = value;
  }
  public resetCli() {
    this._cli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliInput() {
    return this._cli;
  }

  // cli_output - computed: true, optional: true, required: false
  private _cliOutput?: string; 
  public get cliOutput() {
    return this.getStringAttribute('cli_output');
  }
  public set cliOutput(value: string) {
    this._cliOutput = value;
  }
  public resetCliOutput() {
    this._cliOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOutputInput() {
    return this._cliOutput;
  }
}

export class PnpDeviceParametersDeviceInfoPreWorkflowCliOuputsList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoPreWorkflowCliOuputs[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoPreWorkflowCliOuputsOutputReference {
    return new PnpDeviceParametersDeviceInfoPreWorkflowCliOuputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoStackInfoStackMemberListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#hardware_version PnpDevice#hardware_version}
  */
  readonly hardwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#license_level PnpDevice#license_level}
  */
  readonly licenseLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#license_type PnpDevice#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#mac_address PnpDevice#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#pid PnpDevice#pid}
  */
  readonly pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#priority PnpDevice#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#role PnpDevice#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#serial_number PnpDevice#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#software_version PnpDevice#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#stack_number PnpDevice#stack_number}
  */
  readonly stackNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#sudi_serial_number PnpDevice#sudi_serial_number}
  */
  readonly sudiSerialNumber?: string;
}

export function pnpDeviceParametersDeviceInfoStackInfoStackMemberListStructToTerraform(struct?: PnpDeviceParametersDeviceInfoStackInfoStackMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_version: cdktf.stringToTerraform(struct!.hardwareVersion),
    license_level: cdktf.stringToTerraform(struct!.licenseLevel),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    pid: cdktf.stringToTerraform(struct!.pid),
    priority: cdktf.numberToTerraform(struct!.priority),
    role: cdktf.stringToTerraform(struct!.role),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    software_version: cdktf.stringToTerraform(struct!.softwareVersion),
    stack_number: cdktf.numberToTerraform(struct!.stackNumber),
    state: cdktf.stringToTerraform(struct!.state),
    sudi_serial_number: cdktf.stringToTerraform(struct!.sudiSerialNumber),
  }
}


export function pnpDeviceParametersDeviceInfoStackInfoStackMemberListStructToHclTerraform(struct?: PnpDeviceParametersDeviceInfoStackInfoStackMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_version: {
      value: cdktf.stringToHclTerraform(struct!.hardwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_level: {
      value: cdktf.stringToHclTerraform(struct!.licenseLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
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
    pid: {
      value: cdktf.stringToHclTerraform(struct!.pid),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_version: {
      value: cdktf.stringToHclTerraform(struct!.softwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_number: {
      value: cdktf.numberToHclTerraform(struct!.stackNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sudi_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.sudiSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoStackInfoStackMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoStackInfoStackMemberListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareVersion = this._hardwareVersion;
    }
    if (this._licenseLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseLevel = this._licenseLevel;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._softwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareVersion = this._softwareVersion;
    }
    if (this._stackNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackNumber = this._stackNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._sudiSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sudiSerialNumber = this._sudiSerialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoStackInfoStackMemberListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardwareVersion = undefined;
      this._licenseLevel = undefined;
      this._licenseType = undefined;
      this._macAddress = undefined;
      this._pid = undefined;
      this._priority = undefined;
      this._role = undefined;
      this._serialNumber = undefined;
      this._softwareVersion = undefined;
      this._stackNumber = undefined;
      this._state = undefined;
      this._sudiSerialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardwareVersion = value.hardwareVersion;
      this._licenseLevel = value.licenseLevel;
      this._licenseType = value.licenseType;
      this._macAddress = value.macAddress;
      this._pid = value.pid;
      this._priority = value.priority;
      this._role = value.role;
      this._serialNumber = value.serialNumber;
      this._softwareVersion = value.softwareVersion;
      this._stackNumber = value.stackNumber;
      this._state = value.state;
      this._sudiSerialNumber = value.sudiSerialNumber;
    }
  }

  // hardware_version - computed: true, optional: true, required: false
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

  // license_level - computed: true, optional: true, required: false
  private _licenseLevel?: string; 
  public get licenseLevel() {
    return this.getStringAttribute('license_level');
  }
  public set licenseLevel(value: string) {
    this._licenseLevel = value;
  }
  public resetLicenseLevel() {
    this._licenseLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseLevelInput() {
    return this._licenseLevel;
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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

  // pid - computed: true, optional: true, required: false
  private _pid?: string; 
  public get pid() {
    return this.getStringAttribute('pid');
  }
  public set pid(value: string) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // priority - computed: true, optional: true, required: false
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // software_version - computed: true, optional: true, required: false
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  public resetSoftwareVersion() {
    this._softwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // stack_number - computed: true, optional: true, required: false
  private _stackNumber?: number; 
  public get stackNumber() {
    return this.getNumberAttribute('stack_number');
  }
  public set stackNumber(value: number) {
    this._stackNumber = value;
  }
  public resetStackNumber() {
    this._stackNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNumberInput() {
    return this._stackNumber;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // sudi_serial_number - computed: true, optional: true, required: false
  private _sudiSerialNumber?: string; 
  public get sudiSerialNumber() {
    return this.getStringAttribute('sudi_serial_number');
  }
  public set sudiSerialNumber(value: string) {
    this._sudiSerialNumber = value;
  }
  public resetSudiSerialNumber() {
    this._sudiSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudiSerialNumberInput() {
    return this._sudiSerialNumber;
  }
}

export class PnpDeviceParametersDeviceInfoStackInfoStackMemberListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoStackInfoStackMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoStackInfoStackMemberListStructOutputReference {
    return new PnpDeviceParametersDeviceInfoStackInfoStackMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfoStackInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#is_full_ring PnpDevice#is_full_ring}
  */
  readonly isFullRing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#stack_ring_protocol PnpDevice#stack_ring_protocol}
  */
  readonly stackRingProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#supports_stack_workflows PnpDevice#supports_stack_workflows}
  */
  readonly supportsStackWorkflows?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#total_member_count PnpDevice#total_member_count}
  */
  readonly totalMemberCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#valid_license_levels PnpDevice#valid_license_levels}
  */
  readonly validLicenseLevels?: string[];
  /**
  * stack_member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#stack_member_list PnpDevice#stack_member_list}
  */
  readonly stackMemberList?: PnpDeviceParametersDeviceInfoStackInfoStackMemberListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceParametersDeviceInfoStackInfoToTerraform(struct?: PnpDeviceParametersDeviceInfoStackInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_full_ring: cdktf.stringToTerraform(struct!.isFullRing),
    stack_ring_protocol: cdktf.stringToTerraform(struct!.stackRingProtocol),
    supports_stack_workflows: cdktf.stringToTerraform(struct!.supportsStackWorkflows),
    total_member_count: cdktf.numberToTerraform(struct!.totalMemberCount),
    valid_license_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validLicenseLevels),
    stack_member_list: cdktf.listMapper(pnpDeviceParametersDeviceInfoStackInfoStackMemberListStructToTerraform, true)(struct!.stackMemberList),
  }
}


export function pnpDeviceParametersDeviceInfoStackInfoToHclTerraform(struct?: PnpDeviceParametersDeviceInfoStackInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_full_ring: {
      value: cdktf.stringToHclTerraform(struct!.isFullRing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_ring_protocol: {
      value: cdktf.stringToHclTerraform(struct!.stackRingProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supports_stack_workflows: {
      value: cdktf.stringToHclTerraform(struct!.supportsStackWorkflows),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_member_count: {
      value: cdktf.numberToHclTerraform(struct!.totalMemberCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valid_license_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validLicenseLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stack_member_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoStackInfoStackMemberListStructToHclTerraform, true)(struct!.stackMemberList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoStackInfoStackMemberListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoStackInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfoStackInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFullRing !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFullRing = this._isFullRing;
    }
    if (this._stackRingProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackRingProtocol = this._stackRingProtocol;
    }
    if (this._supportsStackWorkflows !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportsStackWorkflows = this._supportsStackWorkflows;
    }
    if (this._totalMemberCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemberCount = this._totalMemberCount;
    }
    if (this._validLicenseLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLicenseLevels = this._validLicenseLevels;
    }
    if (this._stackMemberList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackMemberList = this._stackMemberList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfoStackInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFullRing = undefined;
      this._stackRingProtocol = undefined;
      this._supportsStackWorkflows = undefined;
      this._totalMemberCount = undefined;
      this._validLicenseLevels = undefined;
      this._stackMemberList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFullRing = value.isFullRing;
      this._stackRingProtocol = value.stackRingProtocol;
      this._supportsStackWorkflows = value.supportsStackWorkflows;
      this._totalMemberCount = value.totalMemberCount;
      this._validLicenseLevels = value.validLicenseLevels;
      this._stackMemberList.internalValue = value.stackMemberList;
    }
  }

  // is_full_ring - computed: true, optional: true, required: false
  private _isFullRing?: string; 
  public get isFullRing() {
    return this.getStringAttribute('is_full_ring');
  }
  public set isFullRing(value: string) {
    this._isFullRing = value;
  }
  public resetIsFullRing() {
    this._isFullRing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFullRingInput() {
    return this._isFullRing;
  }

  // stack_ring_protocol - computed: true, optional: true, required: false
  private _stackRingProtocol?: string; 
  public get stackRingProtocol() {
    return this.getStringAttribute('stack_ring_protocol');
  }
  public set stackRingProtocol(value: string) {
    this._stackRingProtocol = value;
  }
  public resetStackRingProtocol() {
    this._stackRingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackRingProtocolInput() {
    return this._stackRingProtocol;
  }

  // supports_stack_workflows - computed: true, optional: true, required: false
  private _supportsStackWorkflows?: string; 
  public get supportsStackWorkflows() {
    return this.getStringAttribute('supports_stack_workflows');
  }
  public set supportsStackWorkflows(value: string) {
    this._supportsStackWorkflows = value;
  }
  public resetSupportsStackWorkflows() {
    this._supportsStackWorkflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsStackWorkflowsInput() {
    return this._supportsStackWorkflows;
  }

  // total_member_count - computed: true, optional: true, required: false
  private _totalMemberCount?: number; 
  public get totalMemberCount() {
    return this.getNumberAttribute('total_member_count');
  }
  public set totalMemberCount(value: number) {
    this._totalMemberCount = value;
  }
  public resetTotalMemberCount() {
    this._totalMemberCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemberCountInput() {
    return this._totalMemberCount;
  }

  // valid_license_levels - computed: true, optional: true, required: false
  private _validLicenseLevels?: string[]; 
  public get validLicenseLevels() {
    return this.getListAttribute('valid_license_levels');
  }
  public set validLicenseLevels(value: string[]) {
    this._validLicenseLevels = value;
  }
  public resetValidLicenseLevels() {
    this._validLicenseLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLicenseLevelsInput() {
    return this._validLicenseLevels;
  }

  // stack_member_list - computed: false, optional: true, required: false
  private _stackMemberList = new PnpDeviceParametersDeviceInfoStackInfoStackMemberListStructList(this, "stack_member_list", false);
  public get stackMemberList() {
    return this._stackMemberList;
  }
  public putStackMemberList(value: PnpDeviceParametersDeviceInfoStackInfoStackMemberListStruct[] | cdktf.IResolvable) {
    this._stackMemberList.internalValue = value;
  }
  public resetStackMemberList() {
    this._stackMemberList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackMemberListInput() {
    return this._stackMemberList.internalValue;
  }
}

export class PnpDeviceParametersDeviceInfoStackInfoList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfoStackInfo[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoStackInfoOutputReference {
    return new PnpDeviceParametersDeviceInfoStackInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersDeviceInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#added_on PnpDevice#added_on}
  */
  readonly addedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#addn_mac_addrs PnpDevice#addn_mac_addrs}
  */
  readonly addnMacAddrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#agent_type PnpDevice#agent_type}
  */
  readonly agentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#auth_status PnpDevice#auth_status}
  */
  readonly authStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#authenticated_sudi_serial_no PnpDevice#authenticated_sudi_serial_no}
  */
  readonly authenticatedSudiSerialNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#capabilities_supported PnpDevice#capabilities_supported}
  */
  readonly capabilitiesSupported?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#cm_state PnpDevice#cm_state}
  */
  readonly cmState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#description PnpDevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#device_sudi_serial_nos PnpDevice#device_sudi_serial_nos}
  */
  readonly deviceSudiSerialNos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#device_type PnpDevice#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#features_supported PnpDevice#features_supported}
  */
  readonly featuresSupported?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#first_contact PnpDevice#first_contact}
  */
  readonly firstContact?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#hostname PnpDevice#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#image_file PnpDevice#image_file}
  */
  readonly imageFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#image_version PnpDevice#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#last_contact PnpDevice#last_contact}
  */
  readonly lastContact?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#last_sync_time PnpDevice#last_sync_time}
  */
  readonly lastSyncTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#last_update_on PnpDevice#last_update_on}
  */
  readonly lastUpdateOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#mac_address PnpDevice#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#mode PnpDevice#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#onb_state PnpDevice#onb_state}
  */
  readonly onbState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#pid PnpDevice#pid}
  */
  readonly pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#populate_inventory PnpDevice#populate_inventory}
  */
  readonly populateInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#project_id PnpDevice#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#project_name PnpDevice#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#reload_requested PnpDevice#reload_requested}
  */
  readonly reloadRequested?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#serial_number PnpDevice#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#smart_account_id PnpDevice#smart_account_id}
  */
  readonly smartAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#source PnpDevice#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#stack PnpDevice#stack}
  */
  readonly stack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#sudi_required PnpDevice#sudi_required}
  */
  readonly sudiRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#tags PnpDevice#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#user_sudi_serial_nos PnpDevice#user_sudi_serial_nos}
  */
  readonly userSudiSerialNos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#virtual_account_id PnpDevice#virtual_account_id}
  */
  readonly virtualAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#workflow_id PnpDevice#workflow_id}
  */
  readonly workflowId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#workflow_name PnpDevice#workflow_name}
  */
  readonly workflowName?: string;
  /**
  * aaa_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#aaa_credentials PnpDevice#aaa_credentials}
  */
  readonly aaaCredentials?: PnpDeviceParametersDeviceInfoAaaCredentials[] | cdktf.IResolvable;
  /**
  * file_system_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#file_system_list PnpDevice#file_system_list}
  */
  readonly fileSystemList?: PnpDeviceParametersDeviceInfoFileSystemListStruct[] | cdktf.IResolvable;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#http_headers PnpDevice#http_headers}
  */
  readonly httpHeaders?: PnpDeviceParametersDeviceInfoHttpHeaders[] | cdktf.IResolvable;
  /**
  * ip_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#ip_interfaces PnpDevice#ip_interfaces}
  */
  readonly ipInterfaces?: PnpDeviceParametersDeviceInfoIpInterfaces[] | cdktf.IResolvable;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#location PnpDevice#location}
  */
  readonly location?: PnpDeviceParametersDeviceInfoLocation[] | cdktf.IResolvable;
  /**
  * neighbor_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#neighbor_links PnpDevice#neighbor_links}
  */
  readonly neighborLinks?: PnpDeviceParametersDeviceInfoNeighborLinks[] | cdktf.IResolvable;
  /**
  * pnp_profile_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#pnp_profile_list PnpDevice#pnp_profile_list}
  */
  readonly pnpProfileList?: PnpDeviceParametersDeviceInfoPnpProfileListStruct[] | cdktf.IResolvable;
  /**
  * pre_workflow_cli_ouputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#pre_workflow_cli_ouputs PnpDevice#pre_workflow_cli_ouputs}
  */
  readonly preWorkflowCliOuputs?: PnpDeviceParametersDeviceInfoPreWorkflowCliOuputs[] | cdktf.IResolvable;
  /**
  * stack_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#stack_info PnpDevice#stack_info}
  */
  readonly stackInfo?: PnpDeviceParametersDeviceInfoStackInfo[] | cdktf.IResolvable;
}

export function pnpDeviceParametersDeviceInfoToTerraform(struct?: PnpDeviceParametersDeviceInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    added_on: cdktf.numberToTerraform(struct!.addedOn),
    addn_mac_addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addnMacAddrs),
    agent_type: cdktf.stringToTerraform(struct!.agentType),
    auth_status: cdktf.stringToTerraform(struct!.authStatus),
    authenticated_sudi_serial_no: cdktf.stringToTerraform(struct!.authenticatedSudiSerialNo),
    capabilities_supported: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilitiesSupported),
    cm_state: cdktf.stringToTerraform(struct!.cmState),
    description: cdktf.stringToTerraform(struct!.description),
    device_sudi_serial_nos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceSudiSerialNos),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    features_supported: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.featuresSupported),
    first_contact: cdktf.numberToTerraform(struct!.firstContact),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image_file: cdktf.stringToTerraform(struct!.imageFile),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    last_contact: cdktf.numberToTerraform(struct!.lastContact),
    last_sync_time: cdktf.numberToTerraform(struct!.lastSyncTime),
    last_update_on: cdktf.numberToTerraform(struct!.lastUpdateOn),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    onb_state: cdktf.stringToTerraform(struct!.onbState),
    pid: cdktf.stringToTerraform(struct!.pid),
    populate_inventory: cdktf.stringToTerraform(struct!.populateInventory),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    reload_requested: cdktf.stringToTerraform(struct!.reloadRequested),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    smart_account_id: cdktf.stringToTerraform(struct!.smartAccountId),
    source: cdktf.stringToTerraform(struct!.source),
    stack: cdktf.stringToTerraform(struct!.stack),
    state: cdktf.stringToTerraform(struct!.state),
    sudi_required: cdktf.stringToTerraform(struct!.sudiRequired),
    tags: cdktf.stringToTerraform(struct!.tags),
    user_sudi_serial_nos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userSudiSerialNos),
    virtual_account_id: cdktf.stringToTerraform(struct!.virtualAccountId),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
    workflow_name: cdktf.stringToTerraform(struct!.workflowName),
    aaa_credentials: cdktf.listMapper(pnpDeviceParametersDeviceInfoAaaCredentialsToTerraform, true)(struct!.aaaCredentials),
    file_system_list: cdktf.listMapper(pnpDeviceParametersDeviceInfoFileSystemListStructToTerraform, true)(struct!.fileSystemList),
    http_headers: cdktf.listMapper(pnpDeviceParametersDeviceInfoHttpHeadersToTerraform, true)(struct!.httpHeaders),
    ip_interfaces: cdktf.listMapper(pnpDeviceParametersDeviceInfoIpInterfacesToTerraform, true)(struct!.ipInterfaces),
    location: cdktf.listMapper(pnpDeviceParametersDeviceInfoLocationToTerraform, true)(struct!.location),
    neighbor_links: cdktf.listMapper(pnpDeviceParametersDeviceInfoNeighborLinksToTerraform, true)(struct!.neighborLinks),
    pnp_profile_list: cdktf.listMapper(pnpDeviceParametersDeviceInfoPnpProfileListStructToTerraform, true)(struct!.pnpProfileList),
    pre_workflow_cli_ouputs: cdktf.listMapper(pnpDeviceParametersDeviceInfoPreWorkflowCliOuputsToTerraform, true)(struct!.preWorkflowCliOuputs),
    stack_info: cdktf.listMapper(pnpDeviceParametersDeviceInfoStackInfoToTerraform, true)(struct!.stackInfo),
  }
}


export function pnpDeviceParametersDeviceInfoToHclTerraform(struct?: PnpDeviceParametersDeviceInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    added_on: {
      value: cdktf.numberToHclTerraform(struct!.addedOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    addn_mac_addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addnMacAddrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    agent_type: {
      value: cdktf.stringToHclTerraform(struct!.agentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_status: {
      value: cdktf.stringToHclTerraform(struct!.authStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticated_sudi_serial_no: {
      value: cdktf.stringToHclTerraform(struct!.authenticatedSudiSerialNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capabilities_supported: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilitiesSupported),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cm_state: {
      value: cdktf.stringToHclTerraform(struct!.cmState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_sudi_serial_nos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceSudiSerialNos),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features_supported: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.featuresSupported),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    first_contact: {
      value: cdktf.numberToHclTerraform(struct!.firstContact),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_file: {
      value: cdktf.stringToHclTerraform(struct!.imageFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version: {
      value: cdktf.stringToHclTerraform(struct!.imageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_contact: {
      value: cdktf.numberToHclTerraform(struct!.lastContact),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_sync_time: {
      value: cdktf.numberToHclTerraform(struct!.lastSyncTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_update_on: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdateOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    onb_state: {
      value: cdktf.stringToHclTerraform(struct!.onbState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.stringToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    populate_inventory: {
      value: cdktf.stringToHclTerraform(struct!.populateInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reload_requested: {
      value: cdktf.stringToHclTerraform(struct!.reloadRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smart_account_id: {
      value: cdktf.stringToHclTerraform(struct!.smartAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack: {
      value: cdktf.stringToHclTerraform(struct!.stack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sudi_required: {
      value: cdktf.stringToHclTerraform(struct!.sudiRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_sudi_serial_nos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userSudiSerialNos),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virtual_account_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_name: {
      value: cdktf.stringToHclTerraform(struct!.workflowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aaa_credentials: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoAaaCredentialsToHclTerraform, true)(struct!.aaaCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoAaaCredentialsList",
    },
    file_system_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoFileSystemListStructToHclTerraform, true)(struct!.fileSystemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoFileSystemListStructList",
    },
    http_headers: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoHttpHeadersList",
    },
    ip_interfaces: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoIpInterfacesToHclTerraform, true)(struct!.ipInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoIpInterfacesList",
    },
    location: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoLocationList",
    },
    neighbor_links: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoNeighborLinksToHclTerraform, true)(struct!.neighborLinks),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoNeighborLinksList",
    },
    pnp_profile_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoPnpProfileListStructToHclTerraform, true)(struct!.pnpProfileList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoPnpProfileListStructList",
    },
    pre_workflow_cli_ouputs: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoPreWorkflowCliOuputsToHclTerraform, true)(struct!.preWorkflowCliOuputs),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoPreWorkflowCliOuputsList",
    },
    stack_info: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoStackInfoToHclTerraform, true)(struct!.stackInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoStackInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersDeviceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersDeviceInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addedOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addedOn = this._addedOn;
    }
    if (this._addnMacAddrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addnMacAddrs = this._addnMacAddrs;
    }
    if (this._agentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentType = this._agentType;
    }
    if (this._authStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStatus = this._authStatus;
    }
    if (this._authenticatedSudiSerialNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatedSudiSerialNo = this._authenticatedSudiSerialNo;
    }
    if (this._capabilitiesSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilitiesSupported = this._capabilitiesSupported;
    }
    if (this._cmState !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmState = this._cmState;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceSudiSerialNos !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSudiSerialNos = this._deviceSudiSerialNos;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._featuresSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.featuresSupported = this._featuresSupported;
    }
    if (this._firstContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstContact = this._firstContact;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._imageFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageFile = this._imageFile;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._lastContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastContact = this._lastContact;
    }
    if (this._lastSyncTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSyncTime = this._lastSyncTime;
    }
    if (this._lastUpdateOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdateOn = this._lastUpdateOn;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onbState !== undefined) {
      hasAnyValues = true;
      internalValueResult.onbState = this._onbState;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._populateInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.populateInventory = this._populateInventory;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._reloadRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadRequested = this._reloadRequested;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._smartAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartAccountId = this._smartAccountId;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._stack !== undefined) {
      hasAnyValues = true;
      internalValueResult.stack = this._stack;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._sudiRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.sudiRequired = this._sudiRequired;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userSudiSerialNos !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSudiSerialNos = this._userSudiSerialNos;
    }
    if (this._virtualAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualAccountId = this._virtualAccountId;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    if (this._workflowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowName = this._workflowName;
    }
    if (this._aaaCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaCredentials = this._aaaCredentials?.internalValue;
    }
    if (this._fileSystemList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemList = this._fileSystemList?.internalValue;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._ipInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipInterfaces = this._ipInterfaces?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._neighborLinks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborLinks = this._neighborLinks?.internalValue;
    }
    if (this._pnpProfileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pnpProfileList = this._pnpProfileList?.internalValue;
    }
    if (this._preWorkflowCliOuputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preWorkflowCliOuputs = this._preWorkflowCliOuputs?.internalValue;
    }
    if (this._stackInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackInfo = this._stackInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersDeviceInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addedOn = undefined;
      this._addnMacAddrs = undefined;
      this._agentType = undefined;
      this._authStatus = undefined;
      this._authenticatedSudiSerialNo = undefined;
      this._capabilitiesSupported = undefined;
      this._cmState = undefined;
      this._description = undefined;
      this._deviceSudiSerialNos = undefined;
      this._deviceType = undefined;
      this._featuresSupported = undefined;
      this._firstContact = undefined;
      this._hostname = undefined;
      this._imageFile = undefined;
      this._imageVersion = undefined;
      this._lastContact = undefined;
      this._lastSyncTime = undefined;
      this._lastUpdateOn = undefined;
      this._macAddress = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._onbState = undefined;
      this._pid = undefined;
      this._populateInventory = undefined;
      this._projectId = undefined;
      this._projectName = undefined;
      this._reloadRequested = undefined;
      this._serialNumber = undefined;
      this._smartAccountId = undefined;
      this._source = undefined;
      this._stack = undefined;
      this._state = undefined;
      this._sudiRequired = undefined;
      this._tags = undefined;
      this._userSudiSerialNos = undefined;
      this._virtualAccountId = undefined;
      this._workflowId = undefined;
      this._workflowName = undefined;
      this._aaaCredentials.internalValue = undefined;
      this._fileSystemList.internalValue = undefined;
      this._httpHeaders.internalValue = undefined;
      this._ipInterfaces.internalValue = undefined;
      this._location.internalValue = undefined;
      this._neighborLinks.internalValue = undefined;
      this._pnpProfileList.internalValue = undefined;
      this._preWorkflowCliOuputs.internalValue = undefined;
      this._stackInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addedOn = value.addedOn;
      this._addnMacAddrs = value.addnMacAddrs;
      this._agentType = value.agentType;
      this._authStatus = value.authStatus;
      this._authenticatedSudiSerialNo = value.authenticatedSudiSerialNo;
      this._capabilitiesSupported = value.capabilitiesSupported;
      this._cmState = value.cmState;
      this._description = value.description;
      this._deviceSudiSerialNos = value.deviceSudiSerialNos;
      this._deviceType = value.deviceType;
      this._featuresSupported = value.featuresSupported;
      this._firstContact = value.firstContact;
      this._hostname = value.hostname;
      this._imageFile = value.imageFile;
      this._imageVersion = value.imageVersion;
      this._lastContact = value.lastContact;
      this._lastSyncTime = value.lastSyncTime;
      this._lastUpdateOn = value.lastUpdateOn;
      this._macAddress = value.macAddress;
      this._mode = value.mode;
      this._name = value.name;
      this._onbState = value.onbState;
      this._pid = value.pid;
      this._populateInventory = value.populateInventory;
      this._projectId = value.projectId;
      this._projectName = value.projectName;
      this._reloadRequested = value.reloadRequested;
      this._serialNumber = value.serialNumber;
      this._smartAccountId = value.smartAccountId;
      this._source = value.source;
      this._stack = value.stack;
      this._state = value.state;
      this._sudiRequired = value.sudiRequired;
      this._tags = value.tags;
      this._userSudiSerialNos = value.userSudiSerialNos;
      this._virtualAccountId = value.virtualAccountId;
      this._workflowId = value.workflowId;
      this._workflowName = value.workflowName;
      this._aaaCredentials.internalValue = value.aaaCredentials;
      this._fileSystemList.internalValue = value.fileSystemList;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._ipInterfaces.internalValue = value.ipInterfaces;
      this._location.internalValue = value.location;
      this._neighborLinks.internalValue = value.neighborLinks;
      this._pnpProfileList.internalValue = value.pnpProfileList;
      this._preWorkflowCliOuputs.internalValue = value.preWorkflowCliOuputs;
      this._stackInfo.internalValue = value.stackInfo;
    }
  }

  // added_on - computed: true, optional: true, required: false
  private _addedOn?: number; 
  public get addedOn() {
    return this.getNumberAttribute('added_on');
  }
  public set addedOn(value: number) {
    this._addedOn = value;
  }
  public resetAddedOn() {
    this._addedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addedOnInput() {
    return this._addedOn;
  }

  // addn_mac_addrs - computed: true, optional: true, required: false
  private _addnMacAddrs?: string[]; 
  public get addnMacAddrs() {
    return this.getListAttribute('addn_mac_addrs');
  }
  public set addnMacAddrs(value: string[]) {
    this._addnMacAddrs = value;
  }
  public resetAddnMacAddrs() {
    this._addnMacAddrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addnMacAddrsInput() {
    return this._addnMacAddrs;
  }

  // agent_type - computed: true, optional: true, required: false
  private _agentType?: string; 
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }
  public set agentType(value: string) {
    this._agentType = value;
  }
  public resetAgentType() {
    this._agentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTypeInput() {
    return this._agentType;
  }

  // auth_status - computed: true, optional: true, required: false
  private _authStatus?: string; 
  public get authStatus() {
    return this.getStringAttribute('auth_status');
  }
  public set authStatus(value: string) {
    this._authStatus = value;
  }
  public resetAuthStatus() {
    this._authStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStatusInput() {
    return this._authStatus;
  }

  // authenticated_sudi_serial_no - computed: true, optional: true, required: false
  private _authenticatedSudiSerialNo?: string; 
  public get authenticatedSudiSerialNo() {
    return this.getStringAttribute('authenticated_sudi_serial_no');
  }
  public set authenticatedSudiSerialNo(value: string) {
    this._authenticatedSudiSerialNo = value;
  }
  public resetAuthenticatedSudiSerialNo() {
    this._authenticatedSudiSerialNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedSudiSerialNoInput() {
    return this._authenticatedSudiSerialNo;
  }

  // capabilities_supported - computed: true, optional: true, required: false
  private _capabilitiesSupported?: string[]; 
  public get capabilitiesSupported() {
    return this.getListAttribute('capabilities_supported');
  }
  public set capabilitiesSupported(value: string[]) {
    this._capabilitiesSupported = value;
  }
  public resetCapabilitiesSupported() {
    this._capabilitiesSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesSupportedInput() {
    return this._capabilitiesSupported;
  }

  // cm_state - computed: true, optional: true, required: false
  private _cmState?: string; 
  public get cmState() {
    return this.getStringAttribute('cm_state');
  }
  public set cmState(value: string) {
    this._cmState = value;
  }
  public resetCmState() {
    this._cmState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmStateInput() {
    return this._cmState;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_sudi_serial_nos - computed: true, optional: true, required: false
  private _deviceSudiSerialNos?: string[]; 
  public get deviceSudiSerialNos() {
    return this.getListAttribute('device_sudi_serial_nos');
  }
  public set deviceSudiSerialNos(value: string[]) {
    this._deviceSudiSerialNos = value;
  }
  public resetDeviceSudiSerialNos() {
    this._deviceSudiSerialNos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSudiSerialNosInput() {
    return this._deviceSudiSerialNos;
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // features_supported - computed: true, optional: true, required: false
  private _featuresSupported?: string[]; 
  public get featuresSupported() {
    return this.getListAttribute('features_supported');
  }
  public set featuresSupported(value: string[]) {
    this._featuresSupported = value;
  }
  public resetFeaturesSupported() {
    this._featuresSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresSupportedInput() {
    return this._featuresSupported;
  }

  // first_contact - computed: true, optional: true, required: false
  private _firstContact?: number; 
  public get firstContact() {
    return this.getNumberAttribute('first_contact');
  }
  public set firstContact(value: number) {
    this._firstContact = value;
  }
  public resetFirstContact() {
    this._firstContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstContactInput() {
    return this._firstContact;
  }

  // hostname - computed: true, optional: true, required: false
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

  // image_file - computed: true, optional: true, required: false
  private _imageFile?: string; 
  public get imageFile() {
    return this.getStringAttribute('image_file');
  }
  public set imageFile(value: string) {
    this._imageFile = value;
  }
  public resetImageFile() {
    this._imageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFileInput() {
    return this._imageFile;
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // last_contact - computed: true, optional: true, required: false
  private _lastContact?: number; 
  public get lastContact() {
    return this.getNumberAttribute('last_contact');
  }
  public set lastContact(value: number) {
    this._lastContact = value;
  }
  public resetLastContact() {
    this._lastContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastContactInput() {
    return this._lastContact;
  }

  // last_sync_time - computed: true, optional: true, required: false
  private _lastSyncTime?: number; 
  public get lastSyncTime() {
    return this.getNumberAttribute('last_sync_time');
  }
  public set lastSyncTime(value: number) {
    this._lastSyncTime = value;
  }
  public resetLastSyncTime() {
    this._lastSyncTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSyncTimeInput() {
    return this._lastSyncTime;
  }

  // last_update_on - computed: true, optional: true, required: false
  private _lastUpdateOn?: number; 
  public get lastUpdateOn() {
    return this.getNumberAttribute('last_update_on');
  }
  public set lastUpdateOn(value: number) {
    this._lastUpdateOn = value;
  }
  public resetLastUpdateOn() {
    this._lastUpdateOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateOnInput() {
    return this._lastUpdateOn;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // onb_state - computed: true, optional: true, required: false
  private _onbState?: string; 
  public get onbState() {
    return this.getStringAttribute('onb_state');
  }
  public set onbState(value: string) {
    this._onbState = value;
  }
  public resetOnbState() {
    this._onbState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onbStateInput() {
    return this._onbState;
  }

  // pid - computed: true, optional: true, required: false
  private _pid?: string; 
  public get pid() {
    return this.getStringAttribute('pid');
  }
  public set pid(value: string) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // populate_inventory - computed: true, optional: true, required: false
  private _populateInventory?: string; 
  public get populateInventory() {
    return this.getStringAttribute('populate_inventory');
  }
  public set populateInventory(value: string) {
    this._populateInventory = value;
  }
  public resetPopulateInventory() {
    this._populateInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get populateInventoryInput() {
    return this._populateInventory;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // reload_requested - computed: true, optional: true, required: false
  private _reloadRequested?: string; 
  public get reloadRequested() {
    return this.getStringAttribute('reload_requested');
  }
  public set reloadRequested(value: string) {
    this._reloadRequested = value;
  }
  public resetReloadRequested() {
    this._reloadRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadRequestedInput() {
    return this._reloadRequested;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // smart_account_id - computed: true, optional: true, required: false
  private _smartAccountId?: string; 
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }
  public set smartAccountId(value: string) {
    this._smartAccountId = value;
  }
  public resetSmartAccountId() {
    this._smartAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // stack - computed: true, optional: true, required: false
  private _stack?: string; 
  public get stack() {
    return this.getStringAttribute('stack');
  }
  public set stack(value: string) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // sudi_required - computed: true, optional: true, required: false
  private _sudiRequired?: string; 
  public get sudiRequired() {
    return this.getStringAttribute('sudi_required');
  }
  public set sudiRequired(value: string) {
    this._sudiRequired = value;
  }
  public resetSudiRequired() {
    this._sudiRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudiRequiredInput() {
    return this._sudiRequired;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_sudi_serial_nos - computed: true, optional: true, required: false
  private _userSudiSerialNos?: string[]; 
  public get userSudiSerialNos() {
    return this.getListAttribute('user_sudi_serial_nos');
  }
  public set userSudiSerialNos(value: string[]) {
    this._userSudiSerialNos = value;
  }
  public resetUserSudiSerialNos() {
    this._userSudiSerialNos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSudiSerialNosInput() {
    return this._userSudiSerialNos;
  }

  // virtual_account_id - computed: true, optional: true, required: false
  private _virtualAccountId?: string; 
  public get virtualAccountId() {
    return this.getStringAttribute('virtual_account_id');
  }
  public set virtualAccountId(value: string) {
    this._virtualAccountId = value;
  }
  public resetVirtualAccountId() {
    this._virtualAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountIdInput() {
    return this._virtualAccountId;
  }

  // workflow_id - computed: true, optional: true, required: false
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  public resetWorkflowId() {
    this._workflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // workflow_name - computed: true, optional: true, required: false
  private _workflowName?: string; 
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string) {
    this._workflowName = value;
  }
  public resetWorkflowName() {
    this._workflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }

  // aaa_credentials - computed: false, optional: true, required: false
  private _aaaCredentials = new PnpDeviceParametersDeviceInfoAaaCredentialsList(this, "aaa_credentials", false);
  public get aaaCredentials() {
    return this._aaaCredentials;
  }
  public putAaaCredentials(value: PnpDeviceParametersDeviceInfoAaaCredentials[] | cdktf.IResolvable) {
    this._aaaCredentials.internalValue = value;
  }
  public resetAaaCredentials() {
    this._aaaCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaCredentialsInput() {
    return this._aaaCredentials.internalValue;
  }

  // file_system_list - computed: false, optional: true, required: false
  private _fileSystemList = new PnpDeviceParametersDeviceInfoFileSystemListStructList(this, "file_system_list", false);
  public get fileSystemList() {
    return this._fileSystemList;
  }
  public putFileSystemList(value: PnpDeviceParametersDeviceInfoFileSystemListStruct[] | cdktf.IResolvable) {
    this._fileSystemList.internalValue = value;
  }
  public resetFileSystemList() {
    this._fileSystemList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemListInput() {
    return this._fileSystemList.internalValue;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new PnpDeviceParametersDeviceInfoHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: PnpDeviceParametersDeviceInfoHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // ip_interfaces - computed: false, optional: true, required: false
  private _ipInterfaces = new PnpDeviceParametersDeviceInfoIpInterfacesList(this, "ip_interfaces", false);
  public get ipInterfaces() {
    return this._ipInterfaces;
  }
  public putIpInterfaces(value: PnpDeviceParametersDeviceInfoIpInterfaces[] | cdktf.IResolvable) {
    this._ipInterfaces.internalValue = value;
  }
  public resetIpInterfaces() {
    this._ipInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInterfacesInput() {
    return this._ipInterfaces.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new PnpDeviceParametersDeviceInfoLocationList(this, "location", false);
  public get location() {
    return this._location;
  }
  public putLocation(value: PnpDeviceParametersDeviceInfoLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // neighbor_links - computed: false, optional: true, required: false
  private _neighborLinks = new PnpDeviceParametersDeviceInfoNeighborLinksList(this, "neighbor_links", false);
  public get neighborLinks() {
    return this._neighborLinks;
  }
  public putNeighborLinks(value: PnpDeviceParametersDeviceInfoNeighborLinks[] | cdktf.IResolvable) {
    this._neighborLinks.internalValue = value;
  }
  public resetNeighborLinks() {
    this._neighborLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborLinksInput() {
    return this._neighborLinks.internalValue;
  }

  // pnp_profile_list - computed: false, optional: true, required: false
  private _pnpProfileList = new PnpDeviceParametersDeviceInfoPnpProfileListStructList(this, "pnp_profile_list", false);
  public get pnpProfileList() {
    return this._pnpProfileList;
  }
  public putPnpProfileList(value: PnpDeviceParametersDeviceInfoPnpProfileListStruct[] | cdktf.IResolvable) {
    this._pnpProfileList.internalValue = value;
  }
  public resetPnpProfileList() {
    this._pnpProfileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnpProfileListInput() {
    return this._pnpProfileList.internalValue;
  }

  // pre_workflow_cli_ouputs - computed: false, optional: true, required: false
  private _preWorkflowCliOuputs = new PnpDeviceParametersDeviceInfoPreWorkflowCliOuputsList(this, "pre_workflow_cli_ouputs", false);
  public get preWorkflowCliOuputs() {
    return this._preWorkflowCliOuputs;
  }
  public putPreWorkflowCliOuputs(value: PnpDeviceParametersDeviceInfoPreWorkflowCliOuputs[] | cdktf.IResolvable) {
    this._preWorkflowCliOuputs.internalValue = value;
  }
  public resetPreWorkflowCliOuputs() {
    this._preWorkflowCliOuputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preWorkflowCliOuputsInput() {
    return this._preWorkflowCliOuputs.internalValue;
  }

  // stack_info - computed: false, optional: true, required: false
  private _stackInfo = new PnpDeviceParametersDeviceInfoStackInfoList(this, "stack_info", false);
  public get stackInfo() {
    return this._stackInfo;
  }
  public putStackInfo(value: PnpDeviceParametersDeviceInfoStackInfo[] | cdktf.IResolvable) {
    this._stackInfo.internalValue = value;
  }
  public resetStackInfo() {
    this._stackInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInfoInput() {
    return this._stackInfo.internalValue;
  }
}

export class PnpDeviceParametersDeviceInfoList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersDeviceInfo[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersDeviceInfoOutputReference {
    return new PnpDeviceParametersDeviceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#key PnpDevice#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#value PnpDevice#value}
  */
  readonly value?: string;
}

export function pnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsToTerraform(struct?: PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsToHclTerraform(struct?: PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetails[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsOutputReference {
    return new PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#command PnpDevice#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#output_str PnpDevice#output_str}
  */
  readonly outputStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#time_taken PnpDevice#time_taken}
  */
  readonly timeTaken?: number;
}

export function pnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructToTerraform(struct?: PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    output_str: cdktf.stringToTerraform(struct!.outputStr),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
  }
}


export function pnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructToHclTerraform(struct?: PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_str: {
      value: cdktf.stringToHclTerraform(struct!.outputStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_taken: {
      value: cdktf.numberToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._outputStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStr = this._outputStr;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._endTime = undefined;
      this._outputStr = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._timeTaken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._endTime = value.endTime;
      this._outputStr = value.outputStr;
      this._startTime = value.startTime;
      this._state = value.state;
      this._timeTaken = value.timeTaken;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // output_str - computed: true, optional: true, required: false
  private _outputStr?: string; 
  public get outputStr() {
    return this.getStringAttribute('output_str');
  }
  public set outputStr(value: string) {
    this._outputStr = value;
  }
  public resetOutputStr() {
    this._outputStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStrInput() {
    return this._outputStr;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_taken - computed: true, optional: true, required: false
  private _timeTaken?: number; 
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
  public set timeTaken(value: number) {
    this._timeTaken = value;
  }
  public resetTimeTaken() {
    this._timeTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }
}

export class PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference {
    return new PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersRunSummaryListHistoryTaskInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#time_taken PnpDevice#time_taken}
  */
  readonly timeTaken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#type PnpDevice#type}
  */
  readonly type?: string;
  /**
  * addn_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#addn_details PnpDevice#addn_details}
  */
  readonly addnDetails?: PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetails[] | cdktf.IResolvable;
  /**
  * work_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#work_item_list PnpDevice#work_item_list}
  */
  readonly workItemList?: PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceParametersRunSummaryListHistoryTaskInfoToTerraform(struct?: PnpDeviceParametersRunSummaryListHistoryTaskInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
    type: cdktf.stringToTerraform(struct!.type),
    addn_details: cdktf.listMapper(pnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsToTerraform, true)(struct!.addnDetails),
    work_item_list: cdktf.listMapper(pnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructToTerraform, true)(struct!.workItemList),
  }
}


export function pnpDeviceParametersRunSummaryListHistoryTaskInfoToHclTerraform(struct?: PnpDeviceParametersRunSummaryListHistoryTaskInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_taken: {
      value: cdktf.numberToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addn_details: {
      value: cdktf.listMapperHcl(pnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsToHclTerraform, true)(struct!.addnDetails),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsList",
    },
    work_item_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructToHclTerraform, true)(struct!.workItemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersRunSummaryListHistoryTaskInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersRunSummaryListHistoryTaskInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._addnDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addnDetails = this._addnDetails?.internalValue;
    }
    if (this._workItemList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemList = this._workItemList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersRunSummaryListHistoryTaskInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._timeTaken = undefined;
      this._type = undefined;
      this._addnDetails.internalValue = undefined;
      this._workItemList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._timeTaken = value.timeTaken;
      this._type = value.type;
      this._addnDetails.internalValue = value.addnDetails;
      this._workItemList.internalValue = value.workItemList;
    }
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

  // time_taken - computed: true, optional: true, required: false
  private _timeTaken?: number; 
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
  public set timeTaken(value: number) {
    this._timeTaken = value;
  }
  public resetTimeTaken() {
    this._timeTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }

  // type - computed: true, optional: true, required: false
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

  // addn_details - computed: false, optional: true, required: false
  private _addnDetails = new PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetailsList(this, "addn_details", false);
  public get addnDetails() {
    return this._addnDetails;
  }
  public putAddnDetails(value: PnpDeviceParametersRunSummaryListHistoryTaskInfoAddnDetails[] | cdktf.IResolvable) {
    this._addnDetails.internalValue = value;
  }
  public resetAddnDetails() {
    this._addnDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addnDetailsInput() {
    return this._addnDetails.internalValue;
  }

  // work_item_list - computed: false, optional: true, required: false
  private _workItemList = new PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
  public putWorkItemList(value: PnpDeviceParametersRunSummaryListHistoryTaskInfoWorkItemListStruct[] | cdktf.IResolvable) {
    this._workItemList.internalValue = value;
  }
  public resetWorkItemList() {
    this._workItemList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemListInput() {
    return this._workItemList.internalValue;
  }
}

export class PnpDeviceParametersRunSummaryListHistoryTaskInfoList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersRunSummaryListHistoryTaskInfo[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersRunSummaryListHistoryTaskInfoOutputReference {
    return new PnpDeviceParametersRunSummaryListHistoryTaskInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersRunSummaryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#details PnpDevice#details}
  */
  readonly details?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#error_flag PnpDevice#error_flag}
  */
  readonly errorFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#timestamp PnpDevice#timestamp}
  */
  readonly timestamp?: number;
  /**
  * history_task_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#history_task_info PnpDevice#history_task_info}
  */
  readonly historyTaskInfo?: PnpDeviceParametersRunSummaryListHistoryTaskInfo[] | cdktf.IResolvable;
}

export function pnpDeviceParametersRunSummaryListStructToTerraform(struct?: PnpDeviceParametersRunSummaryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.stringToTerraform(struct!.details),
    error_flag: cdktf.stringToTerraform(struct!.errorFlag),
    timestamp: cdktf.numberToTerraform(struct!.timestamp),
    history_task_info: cdktf.listMapper(pnpDeviceParametersRunSummaryListHistoryTaskInfoToTerraform, true)(struct!.historyTaskInfo),
  }
}


export function pnpDeviceParametersRunSummaryListStructToHclTerraform(struct?: PnpDeviceParametersRunSummaryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    details: {
      value: cdktf.stringToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_flag: {
      value: cdktf.stringToHclTerraform(struct!.errorFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.numberToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    history_task_info: {
      value: cdktf.listMapperHcl(pnpDeviceParametersRunSummaryListHistoryTaskInfoToHclTerraform, true)(struct!.historyTaskInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersRunSummaryListHistoryTaskInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersRunSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersRunSummaryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._errorFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorFlag = this._errorFlag;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._historyTaskInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyTaskInfo = this._historyTaskInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersRunSummaryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._details = undefined;
      this._errorFlag = undefined;
      this._timestamp = undefined;
      this._historyTaskInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._details = value.details;
      this._errorFlag = value.errorFlag;
      this._timestamp = value.timestamp;
      this._historyTaskInfo.internalValue = value.historyTaskInfo;
    }
  }

  // details - computed: true, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // error_flag - computed: true, optional: true, required: false
  private _errorFlag?: string; 
  public get errorFlag() {
    return this.getStringAttribute('error_flag');
  }
  public set errorFlag(value: string) {
    this._errorFlag = value;
  }
  public resetErrorFlag() {
    this._errorFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorFlagInput() {
    return this._errorFlag;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp?: number; 
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
  public set timestamp(value: number) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // history_task_info - computed: false, optional: true, required: false
  private _historyTaskInfo = new PnpDeviceParametersRunSummaryListHistoryTaskInfoList(this, "history_task_info", false);
  public get historyTaskInfo() {
    return this._historyTaskInfo;
  }
  public putHistoryTaskInfo(value: PnpDeviceParametersRunSummaryListHistoryTaskInfo[] | cdktf.IResolvable) {
    this._historyTaskInfo.internalValue = value;
  }
  public resetHistoryTaskInfo() {
    this._historyTaskInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyTaskInfoInput() {
    return this._historyTaskInfo.internalValue;
  }
}

export class PnpDeviceParametersRunSummaryListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersRunSummaryListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersRunSummaryListStructOutputReference {
    return new PnpDeviceParametersRunSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#command PnpDevice#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#output_str PnpDevice#output_str}
  */
  readonly outputStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#time_taken PnpDevice#time_taken}
  */
  readonly timeTaken?: number;
}

export function pnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    output_str: cdktf.stringToTerraform(struct!.outputStr),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
  }
}


export function pnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_str: {
      value: cdktf.stringToHclTerraform(struct!.outputStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_taken: {
      value: cdktf.numberToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._outputStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStr = this._outputStr;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._endTime = undefined;
      this._outputStr = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._timeTaken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._endTime = value.endTime;
      this._outputStr = value.outputStr;
      this._startTime = value.startTime;
      this._state = value.state;
      this._timeTaken = value.timeTaken;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // output_str - computed: true, optional: true, required: false
  private _outputStr?: string; 
  public get outputStr() {
    return this.getStringAttribute('output_str');
  }
  public set outputStr(value: string) {
    this._outputStr = value;
  }
  public resetOutputStr() {
    this._outputStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStrInput() {
    return this._outputStr;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_taken - computed: true, optional: true, required: false
  private _timeTaken?: number; 
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
  public set timeTaken(value: number) {
    this._timeTaken = value;
  }
  public resetTimeTaken() {
    this._timeTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }
}

export class PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersSystemResetWorkflowTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#curr_work_item_idx PnpDevice#curr_work_item_idx}
  */
  readonly currWorkItemIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#task_seq_no PnpDevice#task_seq_no}
  */
  readonly taskSeqNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#time_taken PnpDevice#time_taken}
  */
  readonly timeTaken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#type PnpDevice#type}
  */
  readonly type?: string;
  /**
  * work_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#work_item_list PnpDevice#work_item_list}
  */
  readonly workItemList?: PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceParametersSystemResetWorkflowTasksToTerraform(struct?: PnpDeviceParametersSystemResetWorkflowTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_work_item_idx: cdktf.numberToTerraform(struct!.currWorkItemIdx),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    task_seq_no: cdktf.numberToTerraform(struct!.taskSeqNo),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
    type: cdktf.stringToTerraform(struct!.type),
    work_item_list: cdktf.listMapper(pnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructToTerraform, true)(struct!.workItemList),
  }
}


export function pnpDeviceParametersSystemResetWorkflowTasksToHclTerraform(struct?: PnpDeviceParametersSystemResetWorkflowTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_work_item_idx: {
      value: cdktf.numberToHclTerraform(struct!.currWorkItemIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_seq_no: {
      value: cdktf.numberToHclTerraform(struct!.taskSeqNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_taken: {
      value: cdktf.numberToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_item_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructToHclTerraform, true)(struct!.workItemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersSystemResetWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersSystemResetWorkflowTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currWorkItemIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.currWorkItemIdx = this._currWorkItemIdx;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._taskSeqNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskSeqNo = this._taskSeqNo;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workItemList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemList = this._workItemList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersSystemResetWorkflowTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currWorkItemIdx = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._taskSeqNo = undefined;
      this._timeTaken = undefined;
      this._type = undefined;
      this._workItemList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currWorkItemIdx = value.currWorkItemIdx;
      this._endTime = value.endTime;
      this._name = value.name;
      this._startTime = value.startTime;
      this._state = value.state;
      this._taskSeqNo = value.taskSeqNo;
      this._timeTaken = value.timeTaken;
      this._type = value.type;
      this._workItemList.internalValue = value.workItemList;
    }
  }

  // curr_work_item_idx - computed: true, optional: true, required: false
  private _currWorkItemIdx?: number; 
  public get currWorkItemIdx() {
    return this.getNumberAttribute('curr_work_item_idx');
  }
  public set currWorkItemIdx(value: number) {
    this._currWorkItemIdx = value;
  }
  public resetCurrWorkItemIdx() {
    this._currWorkItemIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currWorkItemIdxInput() {
    return this._currWorkItemIdx;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // task_seq_no - computed: true, optional: true, required: false
  private _taskSeqNo?: number; 
  public get taskSeqNo() {
    return this.getNumberAttribute('task_seq_no');
  }
  public set taskSeqNo(value: number) {
    this._taskSeqNo = value;
  }
  public resetTaskSeqNo() {
    this._taskSeqNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSeqNoInput() {
    return this._taskSeqNo;
  }

  // time_taken - computed: true, optional: true, required: false
  private _timeTaken?: number; 
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
  public set timeTaken(value: number) {
    this._timeTaken = value;
  }
  public resetTimeTaken() {
    this._timeTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }

  // type - computed: true, optional: true, required: false
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

  // work_item_list - computed: false, optional: true, required: false
  private _workItemList = new PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
  public putWorkItemList(value: PnpDeviceParametersSystemResetWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable) {
    this._workItemList.internalValue = value;
  }
  public resetWorkItemList() {
    this._workItemList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemListInput() {
    return this._workItemList.internalValue;
  }
}

export class PnpDeviceParametersSystemResetWorkflowTasksList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersSystemResetWorkflowTasks[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersSystemResetWorkflowTasksOutputReference {
    return new PnpDeviceParametersSystemResetWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersSystemResetWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#add_to_inventory PnpDevice#add_to_inventory}
  */
  readonly addToInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#added_on PnpDevice#added_on}
  */
  readonly addedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#config_id PnpDevice#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#curr_task_idx PnpDevice#curr_task_idx}
  */
  readonly currTaskIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#description PnpDevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#exec_time PnpDevice#exec_time}
  */
  readonly execTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#id PnpDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#image_id PnpDevice#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#instance_type PnpDevice#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#lastupdate_on PnpDevice#lastupdate_on}
  */
  readonly lastupdateOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#tenant_id PnpDevice#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#type PnpDevice#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#use_state PnpDevice#use_state}
  */
  readonly useState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#version PnpDevice#version}
  */
  readonly version?: number;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#tasks PnpDevice#tasks}
  */
  readonly tasks?: PnpDeviceParametersSystemResetWorkflowTasks[] | cdktf.IResolvable;
}

export function pnpDeviceParametersSystemResetWorkflowToTerraform(struct?: PnpDeviceParametersSystemResetWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_to_inventory: cdktf.stringToTerraform(struct!.addToInventory),
    added_on: cdktf.numberToTerraform(struct!.addedOn),
    config_id: cdktf.stringToTerraform(struct!.configId),
    curr_task_idx: cdktf.numberToTerraform(struct!.currTaskIdx),
    description: cdktf.stringToTerraform(struct!.description),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    exec_time: cdktf.numberToTerraform(struct!.execTime),
    id: cdktf.stringToTerraform(struct!.id),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lastupdate_on: cdktf.numberToTerraform(struct!.lastupdateOn),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    type: cdktf.stringToTerraform(struct!.type),
    use_state: cdktf.stringToTerraform(struct!.useState),
    version: cdktf.numberToTerraform(struct!.version),
    tasks: cdktf.listMapper(pnpDeviceParametersSystemResetWorkflowTasksToTerraform, true)(struct!.tasks),
  }
}


export function pnpDeviceParametersSystemResetWorkflowToHclTerraform(struct?: PnpDeviceParametersSystemResetWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_to_inventory: {
      value: cdktf.stringToHclTerraform(struct!.addToInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    added_on: {
      value: cdktf.numberToHclTerraform(struct!.addedOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_task_idx: {
      value: cdktf.numberToHclTerraform(struct!.currTaskIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec_time: {
      value: cdktf.numberToHclTerraform(struct!.execTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastupdate_on: {
      value: cdktf.numberToHclTerraform(struct!.lastupdateOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
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
    use_state: {
      value: cdktf.stringToHclTerraform(struct!.useState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tasks: {
      value: cdktf.listMapperHcl(pnpDeviceParametersSystemResetWorkflowTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersSystemResetWorkflowTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersSystemResetWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersSystemResetWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToInventory = this._addToInventory;
    }
    if (this._addedOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addedOn = this._addedOn;
    }
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._currTaskIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.currTaskIdx = this._currTaskIdx;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._execTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTime = this._execTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lastupdateOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastupdateOn = this._lastupdateOn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useState !== undefined) {
      hasAnyValues = true;
      internalValueResult.useState = this._useState;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersSystemResetWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addToInventory = undefined;
      this._addedOn = undefined;
      this._configId = undefined;
      this._currTaskIdx = undefined;
      this._description = undefined;
      this._endTime = undefined;
      this._execTime = undefined;
      this._id = undefined;
      this._imageId = undefined;
      this._instanceType = undefined;
      this._lastupdateOn = undefined;
      this._name = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._tenantId = undefined;
      this._type = undefined;
      this._useState = undefined;
      this._version = undefined;
      this._tasks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addToInventory = value.addToInventory;
      this._addedOn = value.addedOn;
      this._configId = value.configId;
      this._currTaskIdx = value.currTaskIdx;
      this._description = value.description;
      this._endTime = value.endTime;
      this._execTime = value.execTime;
      this._id = value.id;
      this._imageId = value.imageId;
      this._instanceType = value.instanceType;
      this._lastupdateOn = value.lastupdateOn;
      this._name = value.name;
      this._startTime = value.startTime;
      this._state = value.state;
      this._tenantId = value.tenantId;
      this._type = value.type;
      this._useState = value.useState;
      this._version = value.version;
      this._tasks.internalValue = value.tasks;
    }
  }

  // add_to_inventory - computed: true, optional: true, required: false
  private _addToInventory?: string; 
  public get addToInventory() {
    return this.getStringAttribute('add_to_inventory');
  }
  public set addToInventory(value: string) {
    this._addToInventory = value;
  }
  public resetAddToInventory() {
    this._addToInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToInventoryInput() {
    return this._addToInventory;
  }

  // added_on - computed: true, optional: true, required: false
  private _addedOn?: number; 
  public get addedOn() {
    return this.getNumberAttribute('added_on');
  }
  public set addedOn(value: number) {
    this._addedOn = value;
  }
  public resetAddedOn() {
    this._addedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addedOnInput() {
    return this._addedOn;
  }

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // curr_task_idx - computed: true, optional: true, required: false
  private _currTaskIdx?: number; 
  public get currTaskIdx() {
    return this.getNumberAttribute('curr_task_idx');
  }
  public set currTaskIdx(value: number) {
    this._currTaskIdx = value;
  }
  public resetCurrTaskIdx() {
    this._currTaskIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currTaskIdxInput() {
    return this._currTaskIdx;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // exec_time - computed: true, optional: true, required: false
  private _execTime?: number; 
  public get execTime() {
    return this.getNumberAttribute('exec_time');
  }
  public set execTime(value: number) {
    this._execTime = value;
  }
  public resetExecTime() {
    this._execTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeInput() {
    return this._execTime;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lastupdate_on - computed: true, optional: true, required: false
  private _lastupdateOn?: number; 
  public get lastupdateOn() {
    return this.getNumberAttribute('lastupdate_on');
  }
  public set lastupdateOn(value: number) {
    this._lastupdateOn = value;
  }
  public resetLastupdateOn() {
    this._lastupdateOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastupdateOnInput() {
    return this._lastupdateOn;
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type - computed: true, optional: true, required: false
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

  // use_state - computed: true, optional: true, required: false
  private _useState?: string; 
  public get useState() {
    return this.getStringAttribute('use_state');
  }
  public set useState(value: string) {
    this._useState = value;
  }
  public resetUseState() {
    this._useState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStateInput() {
    return this._useState;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new PnpDeviceParametersSystemResetWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: PnpDeviceParametersSystemResetWorkflowTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}

export class PnpDeviceParametersSystemResetWorkflowList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersSystemResetWorkflow[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersSystemResetWorkflowOutputReference {
    return new PnpDeviceParametersSystemResetWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersSystemWorkflowTasksWorkItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#command PnpDevice#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#output_str PnpDevice#output_str}
  */
  readonly outputStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#time_taken PnpDevice#time_taken}
  */
  readonly timeTaken?: number;
}

export function pnpDeviceParametersSystemWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceParametersSystemWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    output_str: cdktf.stringToTerraform(struct!.outputStr),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
  }
}


export function pnpDeviceParametersSystemWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceParametersSystemWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_str: {
      value: cdktf.stringToHclTerraform(struct!.outputStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_taken: {
      value: cdktf.numberToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersSystemWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersSystemWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._outputStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStr = this._outputStr;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersSystemWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._endTime = undefined;
      this._outputStr = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._timeTaken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._endTime = value.endTime;
      this._outputStr = value.outputStr;
      this._startTime = value.startTime;
      this._state = value.state;
      this._timeTaken = value.timeTaken;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // output_str - computed: true, optional: true, required: false
  private _outputStr?: string; 
  public get outputStr() {
    return this.getStringAttribute('output_str');
  }
  public set outputStr(value: string) {
    this._outputStr = value;
  }
  public resetOutputStr() {
    this._outputStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStrInput() {
    return this._outputStr;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_taken - computed: true, optional: true, required: false
  private _timeTaken?: number; 
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
  public set timeTaken(value: number) {
    this._timeTaken = value;
  }
  public resetTimeTaken() {
    this._timeTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }
}

export class PnpDeviceParametersSystemWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersSystemWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersSystemWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceParametersSystemWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersSystemWorkflowTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#curr_work_item_idx PnpDevice#curr_work_item_idx}
  */
  readonly currWorkItemIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#task_seq_no PnpDevice#task_seq_no}
  */
  readonly taskSeqNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#time_taken PnpDevice#time_taken}
  */
  readonly timeTaken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#type PnpDevice#type}
  */
  readonly type?: string;
  /**
  * work_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#work_item_list PnpDevice#work_item_list}
  */
  readonly workItemList?: PnpDeviceParametersSystemWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceParametersSystemWorkflowTasksToTerraform(struct?: PnpDeviceParametersSystemWorkflowTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_work_item_idx: cdktf.numberToTerraform(struct!.currWorkItemIdx),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    task_seq_no: cdktf.numberToTerraform(struct!.taskSeqNo),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
    type: cdktf.stringToTerraform(struct!.type),
    work_item_list: cdktf.listMapper(pnpDeviceParametersSystemWorkflowTasksWorkItemListStructToTerraform, true)(struct!.workItemList),
  }
}


export function pnpDeviceParametersSystemWorkflowTasksToHclTerraform(struct?: PnpDeviceParametersSystemWorkflowTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_work_item_idx: {
      value: cdktf.numberToHclTerraform(struct!.currWorkItemIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_seq_no: {
      value: cdktf.numberToHclTerraform(struct!.taskSeqNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_taken: {
      value: cdktf.numberToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_item_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersSystemWorkflowTasksWorkItemListStructToHclTerraform, true)(struct!.workItemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersSystemWorkflowTasksWorkItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersSystemWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersSystemWorkflowTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currWorkItemIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.currWorkItemIdx = this._currWorkItemIdx;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._taskSeqNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskSeqNo = this._taskSeqNo;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workItemList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemList = this._workItemList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersSystemWorkflowTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currWorkItemIdx = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._taskSeqNo = undefined;
      this._timeTaken = undefined;
      this._type = undefined;
      this._workItemList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currWorkItemIdx = value.currWorkItemIdx;
      this._endTime = value.endTime;
      this._name = value.name;
      this._startTime = value.startTime;
      this._state = value.state;
      this._taskSeqNo = value.taskSeqNo;
      this._timeTaken = value.timeTaken;
      this._type = value.type;
      this._workItemList.internalValue = value.workItemList;
    }
  }

  // curr_work_item_idx - computed: true, optional: true, required: false
  private _currWorkItemIdx?: number; 
  public get currWorkItemIdx() {
    return this.getNumberAttribute('curr_work_item_idx');
  }
  public set currWorkItemIdx(value: number) {
    this._currWorkItemIdx = value;
  }
  public resetCurrWorkItemIdx() {
    this._currWorkItemIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currWorkItemIdxInput() {
    return this._currWorkItemIdx;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // task_seq_no - computed: true, optional: true, required: false
  private _taskSeqNo?: number; 
  public get taskSeqNo() {
    return this.getNumberAttribute('task_seq_no');
  }
  public set taskSeqNo(value: number) {
    this._taskSeqNo = value;
  }
  public resetTaskSeqNo() {
    this._taskSeqNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSeqNoInput() {
    return this._taskSeqNo;
  }

  // time_taken - computed: true, optional: true, required: false
  private _timeTaken?: number; 
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
  public set timeTaken(value: number) {
    this._timeTaken = value;
  }
  public resetTimeTaken() {
    this._timeTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }

  // type - computed: true, optional: true, required: false
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

  // work_item_list - computed: false, optional: true, required: false
  private _workItemList = new PnpDeviceParametersSystemWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
  public putWorkItemList(value: PnpDeviceParametersSystemWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable) {
    this._workItemList.internalValue = value;
  }
  public resetWorkItemList() {
    this._workItemList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemListInput() {
    return this._workItemList.internalValue;
  }
}

export class PnpDeviceParametersSystemWorkflowTasksList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersSystemWorkflowTasks[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersSystemWorkflowTasksOutputReference {
    return new PnpDeviceParametersSystemWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersSystemWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#add_to_inventory PnpDevice#add_to_inventory}
  */
  readonly addToInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#added_on PnpDevice#added_on}
  */
  readonly addedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#config_id PnpDevice#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#curr_task_idx PnpDevice#curr_task_idx}
  */
  readonly currTaskIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#description PnpDevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#exec_time PnpDevice#exec_time}
  */
  readonly execTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#id PnpDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#image_id PnpDevice#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#instance_type PnpDevice#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#lastupdate_on PnpDevice#lastupdate_on}
  */
  readonly lastupdateOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#tenant_id PnpDevice#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#type PnpDevice#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#use_state PnpDevice#use_state}
  */
  readonly useState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#version PnpDevice#version}
  */
  readonly version?: number;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#tasks PnpDevice#tasks}
  */
  readonly tasks?: PnpDeviceParametersSystemWorkflowTasks[] | cdktf.IResolvable;
}

export function pnpDeviceParametersSystemWorkflowToTerraform(struct?: PnpDeviceParametersSystemWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_to_inventory: cdktf.stringToTerraform(struct!.addToInventory),
    added_on: cdktf.numberToTerraform(struct!.addedOn),
    config_id: cdktf.stringToTerraform(struct!.configId),
    curr_task_idx: cdktf.numberToTerraform(struct!.currTaskIdx),
    description: cdktf.stringToTerraform(struct!.description),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    exec_time: cdktf.numberToTerraform(struct!.execTime),
    id: cdktf.stringToTerraform(struct!.id),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lastupdate_on: cdktf.numberToTerraform(struct!.lastupdateOn),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    type: cdktf.stringToTerraform(struct!.type),
    use_state: cdktf.stringToTerraform(struct!.useState),
    version: cdktf.numberToTerraform(struct!.version),
    tasks: cdktf.listMapper(pnpDeviceParametersSystemWorkflowTasksToTerraform, true)(struct!.tasks),
  }
}


export function pnpDeviceParametersSystemWorkflowToHclTerraform(struct?: PnpDeviceParametersSystemWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_to_inventory: {
      value: cdktf.stringToHclTerraform(struct!.addToInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    added_on: {
      value: cdktf.numberToHclTerraform(struct!.addedOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_task_idx: {
      value: cdktf.numberToHclTerraform(struct!.currTaskIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec_time: {
      value: cdktf.numberToHclTerraform(struct!.execTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastupdate_on: {
      value: cdktf.numberToHclTerraform(struct!.lastupdateOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
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
    use_state: {
      value: cdktf.stringToHclTerraform(struct!.useState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tasks: {
      value: cdktf.listMapperHcl(pnpDeviceParametersSystemWorkflowTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersSystemWorkflowTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersSystemWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersSystemWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToInventory = this._addToInventory;
    }
    if (this._addedOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addedOn = this._addedOn;
    }
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._currTaskIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.currTaskIdx = this._currTaskIdx;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._execTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTime = this._execTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lastupdateOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastupdateOn = this._lastupdateOn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useState !== undefined) {
      hasAnyValues = true;
      internalValueResult.useState = this._useState;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersSystemWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addToInventory = undefined;
      this._addedOn = undefined;
      this._configId = undefined;
      this._currTaskIdx = undefined;
      this._description = undefined;
      this._endTime = undefined;
      this._execTime = undefined;
      this._id = undefined;
      this._imageId = undefined;
      this._instanceType = undefined;
      this._lastupdateOn = undefined;
      this._name = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._tenantId = undefined;
      this._type = undefined;
      this._useState = undefined;
      this._version = undefined;
      this._tasks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addToInventory = value.addToInventory;
      this._addedOn = value.addedOn;
      this._configId = value.configId;
      this._currTaskIdx = value.currTaskIdx;
      this._description = value.description;
      this._endTime = value.endTime;
      this._execTime = value.execTime;
      this._id = value.id;
      this._imageId = value.imageId;
      this._instanceType = value.instanceType;
      this._lastupdateOn = value.lastupdateOn;
      this._name = value.name;
      this._startTime = value.startTime;
      this._state = value.state;
      this._tenantId = value.tenantId;
      this._type = value.type;
      this._useState = value.useState;
      this._version = value.version;
      this._tasks.internalValue = value.tasks;
    }
  }

  // add_to_inventory - computed: true, optional: true, required: false
  private _addToInventory?: string; 
  public get addToInventory() {
    return this.getStringAttribute('add_to_inventory');
  }
  public set addToInventory(value: string) {
    this._addToInventory = value;
  }
  public resetAddToInventory() {
    this._addToInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToInventoryInput() {
    return this._addToInventory;
  }

  // added_on - computed: true, optional: true, required: false
  private _addedOn?: number; 
  public get addedOn() {
    return this.getNumberAttribute('added_on');
  }
  public set addedOn(value: number) {
    this._addedOn = value;
  }
  public resetAddedOn() {
    this._addedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addedOnInput() {
    return this._addedOn;
  }

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // curr_task_idx - computed: true, optional: true, required: false
  private _currTaskIdx?: number; 
  public get currTaskIdx() {
    return this.getNumberAttribute('curr_task_idx');
  }
  public set currTaskIdx(value: number) {
    this._currTaskIdx = value;
  }
  public resetCurrTaskIdx() {
    this._currTaskIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currTaskIdxInput() {
    return this._currTaskIdx;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // exec_time - computed: true, optional: true, required: false
  private _execTime?: number; 
  public get execTime() {
    return this.getNumberAttribute('exec_time');
  }
  public set execTime(value: number) {
    this._execTime = value;
  }
  public resetExecTime() {
    this._execTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeInput() {
    return this._execTime;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lastupdate_on - computed: true, optional: true, required: false
  private _lastupdateOn?: number; 
  public get lastupdateOn() {
    return this.getNumberAttribute('lastupdate_on');
  }
  public set lastupdateOn(value: number) {
    this._lastupdateOn = value;
  }
  public resetLastupdateOn() {
    this._lastupdateOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastupdateOnInput() {
    return this._lastupdateOn;
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type - computed: true, optional: true, required: false
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

  // use_state - computed: true, optional: true, required: false
  private _useState?: string; 
  public get useState() {
    return this.getStringAttribute('use_state');
  }
  public set useState(value: string) {
    this._useState = value;
  }
  public resetUseState() {
    this._useState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStateInput() {
    return this._useState;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new PnpDeviceParametersSystemWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: PnpDeviceParametersSystemWorkflowTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}

export class PnpDeviceParametersSystemWorkflowList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersSystemWorkflow[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersSystemWorkflowOutputReference {
    return new PnpDeviceParametersSystemWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersWorkflowTasksWorkItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#command PnpDevice#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#output_str PnpDevice#output_str}
  */
  readonly outputStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#time_taken PnpDevice#time_taken}
  */
  readonly timeTaken?: number;
}

export function pnpDeviceParametersWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceParametersWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    output_str: cdktf.stringToTerraform(struct!.outputStr),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
  }
}


export function pnpDeviceParametersWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceParametersWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_str: {
      value: cdktf.stringToHclTerraform(struct!.outputStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_taken: {
      value: cdktf.numberToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._outputStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStr = this._outputStr;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._endTime = undefined;
      this._outputStr = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._timeTaken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._endTime = value.endTime;
      this._outputStr = value.outputStr;
      this._startTime = value.startTime;
      this._state = value.state;
      this._timeTaken = value.timeTaken;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // output_str - computed: true, optional: true, required: false
  private _outputStr?: string; 
  public get outputStr() {
    return this.getStringAttribute('output_str');
  }
  public set outputStr(value: string) {
    this._outputStr = value;
  }
  public resetOutputStr() {
    this._outputStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStrInput() {
    return this._outputStr;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_taken - computed: true, optional: true, required: false
  private _timeTaken?: number; 
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
  public set timeTaken(value: number) {
    this._timeTaken = value;
  }
  public resetTimeTaken() {
    this._timeTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }
}

export class PnpDeviceParametersWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceParametersWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersWorkflowTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#curr_work_item_idx PnpDevice#curr_work_item_idx}
  */
  readonly currWorkItemIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#task_seq_no PnpDevice#task_seq_no}
  */
  readonly taskSeqNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#time_taken PnpDevice#time_taken}
  */
  readonly timeTaken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#type PnpDevice#type}
  */
  readonly type?: string;
  /**
  * work_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#work_item_list PnpDevice#work_item_list}
  */
  readonly workItemList?: PnpDeviceParametersWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceParametersWorkflowTasksToTerraform(struct?: PnpDeviceParametersWorkflowTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_work_item_idx: cdktf.numberToTerraform(struct!.currWorkItemIdx),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    task_seq_no: cdktf.numberToTerraform(struct!.taskSeqNo),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
    type: cdktf.stringToTerraform(struct!.type),
    work_item_list: cdktf.listMapper(pnpDeviceParametersWorkflowTasksWorkItemListStructToTerraform, true)(struct!.workItemList),
  }
}


export function pnpDeviceParametersWorkflowTasksToHclTerraform(struct?: PnpDeviceParametersWorkflowTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_work_item_idx: {
      value: cdktf.numberToHclTerraform(struct!.currWorkItemIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_seq_no: {
      value: cdktf.numberToHclTerraform(struct!.taskSeqNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_taken: {
      value: cdktf.numberToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_item_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersWorkflowTasksWorkItemListStructToHclTerraform, true)(struct!.workItemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersWorkflowTasksWorkItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersWorkflowTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currWorkItemIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.currWorkItemIdx = this._currWorkItemIdx;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._taskSeqNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskSeqNo = this._taskSeqNo;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workItemList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemList = this._workItemList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersWorkflowTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currWorkItemIdx = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._taskSeqNo = undefined;
      this._timeTaken = undefined;
      this._type = undefined;
      this._workItemList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currWorkItemIdx = value.currWorkItemIdx;
      this._endTime = value.endTime;
      this._name = value.name;
      this._startTime = value.startTime;
      this._state = value.state;
      this._taskSeqNo = value.taskSeqNo;
      this._timeTaken = value.timeTaken;
      this._type = value.type;
      this._workItemList.internalValue = value.workItemList;
    }
  }

  // curr_work_item_idx - computed: true, optional: true, required: false
  private _currWorkItemIdx?: number; 
  public get currWorkItemIdx() {
    return this.getNumberAttribute('curr_work_item_idx');
  }
  public set currWorkItemIdx(value: number) {
    this._currWorkItemIdx = value;
  }
  public resetCurrWorkItemIdx() {
    this._currWorkItemIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currWorkItemIdxInput() {
    return this._currWorkItemIdx;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // task_seq_no - computed: true, optional: true, required: false
  private _taskSeqNo?: number; 
  public get taskSeqNo() {
    return this.getNumberAttribute('task_seq_no');
  }
  public set taskSeqNo(value: number) {
    this._taskSeqNo = value;
  }
  public resetTaskSeqNo() {
    this._taskSeqNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSeqNoInput() {
    return this._taskSeqNo;
  }

  // time_taken - computed: true, optional: true, required: false
  private _timeTaken?: number; 
  public get timeTaken() {
    return this.getNumberAttribute('time_taken');
  }
  public set timeTaken(value: number) {
    this._timeTaken = value;
  }
  public resetTimeTaken() {
    this._timeTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }

  // type - computed: true, optional: true, required: false
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

  // work_item_list - computed: false, optional: true, required: false
  private _workItemList = new PnpDeviceParametersWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
  public putWorkItemList(value: PnpDeviceParametersWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable) {
    this._workItemList.internalValue = value;
  }
  public resetWorkItemList() {
    this._workItemList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemListInput() {
    return this._workItemList.internalValue;
  }
}

export class PnpDeviceParametersWorkflowTasksList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersWorkflowTasks[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersWorkflowTasksOutputReference {
    return new PnpDeviceParametersWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#add_to_inventory PnpDevice#add_to_inventory}
  */
  readonly addToInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#added_on PnpDevice#added_on}
  */
  readonly addedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#config_id PnpDevice#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#curr_task_idx PnpDevice#curr_task_idx}
  */
  readonly currTaskIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#description PnpDevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#end_time PnpDevice#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#exec_time PnpDevice#exec_time}
  */
  readonly execTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#id PnpDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#image_id PnpDevice#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#instance_type PnpDevice#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#lastupdate_on PnpDevice#lastupdate_on}
  */
  readonly lastupdateOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#name PnpDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#start_time PnpDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#state PnpDevice#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#tenant_id PnpDevice#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#type PnpDevice#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#use_state PnpDevice#use_state}
  */
  readonly useState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#version PnpDevice#version}
  */
  readonly version?: number;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#tasks PnpDevice#tasks}
  */
  readonly tasks?: PnpDeviceParametersWorkflowTasks[] | cdktf.IResolvable;
}

export function pnpDeviceParametersWorkflowToTerraform(struct?: PnpDeviceParametersWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_to_inventory: cdktf.stringToTerraform(struct!.addToInventory),
    added_on: cdktf.numberToTerraform(struct!.addedOn),
    config_id: cdktf.stringToTerraform(struct!.configId),
    curr_task_idx: cdktf.numberToTerraform(struct!.currTaskIdx),
    description: cdktf.stringToTerraform(struct!.description),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    exec_time: cdktf.numberToTerraform(struct!.execTime),
    id: cdktf.stringToTerraform(struct!.id),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lastupdate_on: cdktf.numberToTerraform(struct!.lastupdateOn),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    type: cdktf.stringToTerraform(struct!.type),
    use_state: cdktf.stringToTerraform(struct!.useState),
    version: cdktf.numberToTerraform(struct!.version),
    tasks: cdktf.listMapper(pnpDeviceParametersWorkflowTasksToTerraform, true)(struct!.tasks),
  }
}


export function pnpDeviceParametersWorkflowToHclTerraform(struct?: PnpDeviceParametersWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_to_inventory: {
      value: cdktf.stringToHclTerraform(struct!.addToInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    added_on: {
      value: cdktf.numberToHclTerraform(struct!.addedOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_task_idx: {
      value: cdktf.numberToHclTerraform(struct!.currTaskIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec_time: {
      value: cdktf.numberToHclTerraform(struct!.execTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastupdate_on: {
      value: cdktf.numberToHclTerraform(struct!.lastupdateOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
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
    use_state: {
      value: cdktf.stringToHclTerraform(struct!.useState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tasks: {
      value: cdktf.listMapperHcl(pnpDeviceParametersWorkflowTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersWorkflowTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToInventory = this._addToInventory;
    }
    if (this._addedOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addedOn = this._addedOn;
    }
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._currTaskIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.currTaskIdx = this._currTaskIdx;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._execTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTime = this._execTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lastupdateOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastupdateOn = this._lastupdateOn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useState !== undefined) {
      hasAnyValues = true;
      internalValueResult.useState = this._useState;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addToInventory = undefined;
      this._addedOn = undefined;
      this._configId = undefined;
      this._currTaskIdx = undefined;
      this._description = undefined;
      this._endTime = undefined;
      this._execTime = undefined;
      this._id = undefined;
      this._imageId = undefined;
      this._instanceType = undefined;
      this._lastupdateOn = undefined;
      this._name = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._tenantId = undefined;
      this._type = undefined;
      this._useState = undefined;
      this._version = undefined;
      this._tasks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addToInventory = value.addToInventory;
      this._addedOn = value.addedOn;
      this._configId = value.configId;
      this._currTaskIdx = value.currTaskIdx;
      this._description = value.description;
      this._endTime = value.endTime;
      this._execTime = value.execTime;
      this._id = value.id;
      this._imageId = value.imageId;
      this._instanceType = value.instanceType;
      this._lastupdateOn = value.lastupdateOn;
      this._name = value.name;
      this._startTime = value.startTime;
      this._state = value.state;
      this._tenantId = value.tenantId;
      this._type = value.type;
      this._useState = value.useState;
      this._version = value.version;
      this._tasks.internalValue = value.tasks;
    }
  }

  // add_to_inventory - computed: true, optional: true, required: false
  private _addToInventory?: string; 
  public get addToInventory() {
    return this.getStringAttribute('add_to_inventory');
  }
  public set addToInventory(value: string) {
    this._addToInventory = value;
  }
  public resetAddToInventory() {
    this._addToInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToInventoryInput() {
    return this._addToInventory;
  }

  // added_on - computed: true, optional: true, required: false
  private _addedOn?: number; 
  public get addedOn() {
    return this.getNumberAttribute('added_on');
  }
  public set addedOn(value: number) {
    this._addedOn = value;
  }
  public resetAddedOn() {
    this._addedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addedOnInput() {
    return this._addedOn;
  }

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // curr_task_idx - computed: true, optional: true, required: false
  private _currTaskIdx?: number; 
  public get currTaskIdx() {
    return this.getNumberAttribute('curr_task_idx');
  }
  public set currTaskIdx(value: number) {
    this._currTaskIdx = value;
  }
  public resetCurrTaskIdx() {
    this._currTaskIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currTaskIdxInput() {
    return this._currTaskIdx;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // exec_time - computed: true, optional: true, required: false
  private _execTime?: number; 
  public get execTime() {
    return this.getNumberAttribute('exec_time');
  }
  public set execTime(value: number) {
    this._execTime = value;
  }
  public resetExecTime() {
    this._execTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeInput() {
    return this._execTime;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lastupdate_on - computed: true, optional: true, required: false
  private _lastupdateOn?: number; 
  public get lastupdateOn() {
    return this.getNumberAttribute('lastupdate_on');
  }
  public set lastupdateOn(value: number) {
    this._lastupdateOn = value;
  }
  public resetLastupdateOn() {
    this._lastupdateOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastupdateOnInput() {
    return this._lastupdateOn;
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type - computed: true, optional: true, required: false
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

  // use_state - computed: true, optional: true, required: false
  private _useState?: string; 
  public get useState() {
    return this.getStringAttribute('use_state');
  }
  public set useState(value: string) {
    this._useState = value;
  }
  public resetUseState() {
    this._useState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStateInput() {
    return this._useState;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new PnpDeviceParametersWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: PnpDeviceParametersWorkflowTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}

export class PnpDeviceParametersWorkflowList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersWorkflow[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersWorkflowOutputReference {
    return new PnpDeviceParametersWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersWorkflowParametersConfigListConfigParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#key PnpDevice#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#value PnpDevice#value}
  */
  readonly value?: string;
}

export function pnpDeviceParametersWorkflowParametersConfigListConfigParametersToTerraform(struct?: PnpDeviceParametersWorkflowParametersConfigListConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceParametersWorkflowParametersConfigListConfigParametersToHclTerraform(struct?: PnpDeviceParametersWorkflowParametersConfigListConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersWorkflowParametersConfigListConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersWorkflowParametersConfigListConfigParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersWorkflowParametersConfigListConfigParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PnpDeviceParametersWorkflowParametersConfigListConfigParametersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersWorkflowParametersConfigListConfigParameters[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersWorkflowParametersConfigListConfigParametersOutputReference {
    return new PnpDeviceParametersWorkflowParametersConfigListConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersWorkflowParametersConfigListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#config_id PnpDevice#config_id}
  */
  readonly configId?: string;
  /**
  * config_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#config_parameters PnpDevice#config_parameters}
  */
  readonly configParameters?: PnpDeviceParametersWorkflowParametersConfigListConfigParameters[] | cdktf.IResolvable;
}

export function pnpDeviceParametersWorkflowParametersConfigListStructToTerraform(struct?: PnpDeviceParametersWorkflowParametersConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    config_parameters: cdktf.listMapper(pnpDeviceParametersWorkflowParametersConfigListConfigParametersToTerraform, true)(struct!.configParameters),
  }
}


export function pnpDeviceParametersWorkflowParametersConfigListStructToHclTerraform(struct?: PnpDeviceParametersWorkflowParametersConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_parameters: {
      value: cdktf.listMapperHcl(pnpDeviceParametersWorkflowParametersConfigListConfigParametersToHclTerraform, true)(struct!.configParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersWorkflowParametersConfigListConfigParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersWorkflowParametersConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersWorkflowParametersConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._configParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParameters = this._configParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersWorkflowParametersConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configId = undefined;
      this._configParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configId = value.configId;
      this._configParameters.internalValue = value.configParameters;
    }
  }

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // config_parameters - computed: false, optional: true, required: false
  private _configParameters = new PnpDeviceParametersWorkflowParametersConfigListConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
  public putConfigParameters(value: PnpDeviceParametersWorkflowParametersConfigListConfigParameters[] | cdktf.IResolvable) {
    this._configParameters.internalValue = value;
  }
  public resetConfigParameters() {
    this._configParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParametersInput() {
    return this._configParameters.internalValue;
  }
}

export class PnpDeviceParametersWorkflowParametersConfigListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersWorkflowParametersConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersWorkflowParametersConfigListStructOutputReference {
    return new PnpDeviceParametersWorkflowParametersConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParametersWorkflowParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#license_level PnpDevice#license_level}
  */
  readonly licenseLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#license_type PnpDevice#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#top_of_stack_serial_number PnpDevice#top_of_stack_serial_number}
  */
  readonly topOfStackSerialNumber?: string;
  /**
  * config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#config_list PnpDevice#config_list}
  */
  readonly configList?: PnpDeviceParametersWorkflowParametersConfigListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceParametersWorkflowParametersToTerraform(struct?: PnpDeviceParametersWorkflowParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_level: cdktf.stringToTerraform(struct!.licenseLevel),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    top_of_stack_serial_number: cdktf.stringToTerraform(struct!.topOfStackSerialNumber),
    config_list: cdktf.listMapper(pnpDeviceParametersWorkflowParametersConfigListStructToTerraform, true)(struct!.configList),
  }
}


export function pnpDeviceParametersWorkflowParametersToHclTerraform(struct?: PnpDeviceParametersWorkflowParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_level: {
      value: cdktf.stringToHclTerraform(struct!.licenseLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top_of_stack_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.topOfStackSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersWorkflowParametersConfigListStructToHclTerraform, true)(struct!.configList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersWorkflowParametersConfigListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersWorkflowParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParametersWorkflowParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseLevel = this._licenseLevel;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._topOfStackSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.topOfStackSerialNumber = this._topOfStackSerialNumber;
    }
    if (this._configList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configList = this._configList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParametersWorkflowParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseLevel = undefined;
      this._licenseType = undefined;
      this._topOfStackSerialNumber = undefined;
      this._configList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseLevel = value.licenseLevel;
      this._licenseType = value.licenseType;
      this._topOfStackSerialNumber = value.topOfStackSerialNumber;
      this._configList.internalValue = value.configList;
    }
  }

  // license_level - computed: true, optional: true, required: false
  private _licenseLevel?: string; 
  public get licenseLevel() {
    return this.getStringAttribute('license_level');
  }
  public set licenseLevel(value: string) {
    this._licenseLevel = value;
  }
  public resetLicenseLevel() {
    this._licenseLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseLevelInput() {
    return this._licenseLevel;
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // top_of_stack_serial_number - computed: true, optional: true, required: false
  private _topOfStackSerialNumber?: string; 
  public get topOfStackSerialNumber() {
    return this.getStringAttribute('top_of_stack_serial_number');
  }
  public set topOfStackSerialNumber(value: string) {
    this._topOfStackSerialNumber = value;
  }
  public resetTopOfStackSerialNumber() {
    this._topOfStackSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topOfStackSerialNumberInput() {
    return this._topOfStackSerialNumber;
  }

  // config_list - computed: false, optional: true, required: false
  private _configList = new PnpDeviceParametersWorkflowParametersConfigListStructList(this, "config_list", false);
  public get configList() {
    return this._configList;
  }
  public putConfigList(value: PnpDeviceParametersWorkflowParametersConfigListStruct[] | cdktf.IResolvable) {
    this._configList.internalValue = value;
  }
  public resetConfigList() {
    this._configList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configListInput() {
    return this._configList.internalValue;
  }
}

export class PnpDeviceParametersWorkflowParametersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParametersWorkflowParameters[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersWorkflowParametersOutputReference {
    return new PnpDeviceParametersWorkflowParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#id PnpDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#tenant_id PnpDevice#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#version PnpDevice#version}
  */
  readonly version?: number;
  /**
  * device_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#device_info PnpDevice#device_info}
  */
  readonly deviceInfo?: PnpDeviceParametersDeviceInfo[] | cdktf.IResolvable;
  /**
  * run_summary_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#run_summary_list PnpDevice#run_summary_list}
  */
  readonly runSummaryList?: PnpDeviceParametersRunSummaryListStruct[] | cdktf.IResolvable;
  /**
  * system_reset_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#system_reset_workflow PnpDevice#system_reset_workflow}
  */
  readonly systemResetWorkflow?: PnpDeviceParametersSystemResetWorkflow[] | cdktf.IResolvable;
  /**
  * system_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#system_workflow PnpDevice#system_workflow}
  */
  readonly systemWorkflow?: PnpDeviceParametersSystemWorkflow[] | cdktf.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#workflow PnpDevice#workflow}
  */
  readonly workflow?: PnpDeviceParametersWorkflow[] | cdktf.IResolvable;
  /**
  * workflow_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#workflow_parameters PnpDevice#workflow_parameters}
  */
  readonly workflowParameters?: PnpDeviceParametersWorkflowParameters[] | cdktf.IResolvable;
}

export function pnpDeviceParametersToTerraform(struct?: PnpDeviceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    version: cdktf.numberToTerraform(struct!.version),
    device_info: cdktf.listMapper(pnpDeviceParametersDeviceInfoToTerraform, true)(struct!.deviceInfo),
    run_summary_list: cdktf.listMapper(pnpDeviceParametersRunSummaryListStructToTerraform, true)(struct!.runSummaryList),
    system_reset_workflow: cdktf.listMapper(pnpDeviceParametersSystemResetWorkflowToTerraform, true)(struct!.systemResetWorkflow),
    system_workflow: cdktf.listMapper(pnpDeviceParametersSystemWorkflowToTerraform, true)(struct!.systemWorkflow),
    workflow: cdktf.listMapper(pnpDeviceParametersWorkflowToTerraform, true)(struct!.workflow),
    workflow_parameters: cdktf.listMapper(pnpDeviceParametersWorkflowParametersToTerraform, true)(struct!.workflowParameters),
  }
}


export function pnpDeviceParametersToHclTerraform(struct?: PnpDeviceParameters | cdktf.IResolvable): any {
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_info: {
      value: cdktf.listMapperHcl(pnpDeviceParametersDeviceInfoToHclTerraform, true)(struct!.deviceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersDeviceInfoList",
    },
    run_summary_list: {
      value: cdktf.listMapperHcl(pnpDeviceParametersRunSummaryListStructToHclTerraform, true)(struct!.runSummaryList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersRunSummaryListStructList",
    },
    system_reset_workflow: {
      value: cdktf.listMapperHcl(pnpDeviceParametersSystemResetWorkflowToHclTerraform, true)(struct!.systemResetWorkflow),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersSystemResetWorkflowList",
    },
    system_workflow: {
      value: cdktf.listMapperHcl(pnpDeviceParametersSystemWorkflowToHclTerraform, true)(struct!.systemWorkflow),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersSystemWorkflowList",
    },
    workflow: {
      value: cdktf.listMapperHcl(pnpDeviceParametersWorkflowToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersWorkflowList",
    },
    workflow_parameters: {
      value: cdktf.listMapperHcl(pnpDeviceParametersWorkflowParametersToHclTerraform, true)(struct!.workflowParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceParametersWorkflowParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._deviceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceInfo = this._deviceInfo?.internalValue;
    }
    if (this._runSummaryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runSummaryList = this._runSummaryList?.internalValue;
    }
    if (this._systemResetWorkflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemResetWorkflow = this._systemResetWorkflow?.internalValue;
    }
    if (this._systemWorkflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemWorkflow = this._systemWorkflow?.internalValue;
    }
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    if (this._workflowParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowParameters = this._workflowParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._tenantId = undefined;
      this._version = undefined;
      this._deviceInfo.internalValue = undefined;
      this._runSummaryList.internalValue = undefined;
      this._systemResetWorkflow.internalValue = undefined;
      this._systemWorkflow.internalValue = undefined;
      this._workflow.internalValue = undefined;
      this._workflowParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._tenantId = value.tenantId;
      this._version = value.version;
      this._deviceInfo.internalValue = value.deviceInfo;
      this._runSummaryList.internalValue = value.runSummaryList;
      this._systemResetWorkflow.internalValue = value.systemResetWorkflow;
      this._systemWorkflow.internalValue = value.systemWorkflow;
      this._workflow.internalValue = value.workflow;
      this._workflowParameters.internalValue = value.workflowParameters;
    }
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // device_info - computed: false, optional: true, required: false
  private _deviceInfo = new PnpDeviceParametersDeviceInfoList(this, "device_info", false);
  public get deviceInfo() {
    return this._deviceInfo;
  }
  public putDeviceInfo(value: PnpDeviceParametersDeviceInfo[] | cdktf.IResolvable) {
    this._deviceInfo.internalValue = value;
  }
  public resetDeviceInfo() {
    this._deviceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInfoInput() {
    return this._deviceInfo.internalValue;
  }

  // run_summary_list - computed: false, optional: true, required: false
  private _runSummaryList = new PnpDeviceParametersRunSummaryListStructList(this, "run_summary_list", false);
  public get runSummaryList() {
    return this._runSummaryList;
  }
  public putRunSummaryList(value: PnpDeviceParametersRunSummaryListStruct[] | cdktf.IResolvable) {
    this._runSummaryList.internalValue = value;
  }
  public resetRunSummaryList() {
    this._runSummaryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runSummaryListInput() {
    return this._runSummaryList.internalValue;
  }

  // system_reset_workflow - computed: false, optional: true, required: false
  private _systemResetWorkflow = new PnpDeviceParametersSystemResetWorkflowList(this, "system_reset_workflow", false);
  public get systemResetWorkflow() {
    return this._systemResetWorkflow;
  }
  public putSystemResetWorkflow(value: PnpDeviceParametersSystemResetWorkflow[] | cdktf.IResolvable) {
    this._systemResetWorkflow.internalValue = value;
  }
  public resetSystemResetWorkflow() {
    this._systemResetWorkflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemResetWorkflowInput() {
    return this._systemResetWorkflow.internalValue;
  }

  // system_workflow - computed: false, optional: true, required: false
  private _systemWorkflow = new PnpDeviceParametersSystemWorkflowList(this, "system_workflow", false);
  public get systemWorkflow() {
    return this._systemWorkflow;
  }
  public putSystemWorkflow(value: PnpDeviceParametersSystemWorkflow[] | cdktf.IResolvable) {
    this._systemWorkflow.internalValue = value;
  }
  public resetSystemWorkflow() {
    this._systemWorkflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemWorkflowInput() {
    return this._systemWorkflow.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new PnpDeviceParametersWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: PnpDeviceParametersWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }

  // workflow_parameters - computed: false, optional: true, required: false
  private _workflowParameters = new PnpDeviceParametersWorkflowParametersList(this, "workflow_parameters", false);
  public get workflowParameters() {
    return this._workflowParameters;
  }
  public putWorkflowParameters(value: PnpDeviceParametersWorkflowParameters[] | cdktf.IResolvable) {
    this._workflowParameters.internalValue = value;
  }
  public resetWorkflowParameters() {
    this._workflowParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowParametersInput() {
    return this._workflowParameters.internalValue;
  }
}

export class PnpDeviceParametersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceParameters[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceParametersOutputReference {
    return new PnpDeviceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device dnacenter_pnp_device}
*/
export class PnpDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpDevice to import
  * @param importFromId The id of the existing PnpDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device dnacenter_pnp_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PnpDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_device',
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
  private _item = new PnpDeviceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new PnpDeviceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PnpDeviceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
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
      parameters: cdktf.listMapper(pnpDeviceParametersToTerraform, true)(this._parameters.internalValue),
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
        value: cdktf.listMapperHcl(pnpDeviceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpDeviceParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
