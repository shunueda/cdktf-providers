// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpDeviceImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#id PnpDeviceImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#parameters PnpDeviceImport#parameters}
  */
  readonly parameters: PnpDeviceImportParameters;
}
export interface PnpDeviceImportItemFailureListStruct {
}

export function pnpDeviceImportItemFailureListStructToTerraform(struct?: PnpDeviceImportItemFailureListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemFailureListStructToHclTerraform(struct?: PnpDeviceImportItemFailureListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemFailureListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemFailureListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemFailureListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // serial_num - computed: true, optional: false, required: false
  public get serialNum() {
    return this.getStringAttribute('serial_num');
  }
}

export class PnpDeviceImportItemFailureListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemFailureListStructOutputReference {
    return new PnpDeviceImportItemFailureListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDayZeroConfig {
}

export function pnpDeviceImportItemSuccessListDayZeroConfigToTerraform(struct?: PnpDeviceImportItemSuccessListDayZeroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDayZeroConfigToHclTerraform(struct?: PnpDeviceImportItemSuccessListDayZeroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDayZeroConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDayZeroConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDayZeroConfig | undefined) {
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

export class PnpDeviceImportItemSuccessListDayZeroConfigList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDayZeroConfigOutputReference {
    return new PnpDeviceImportItemSuccessListDayZeroConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoAaaCredentials {
}

export function pnpDeviceImportItemSuccessListDeviceInfoAaaCredentialsToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoAaaCredentialsToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoAaaCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoAaaCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoAaaCredentials | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoAaaCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoAaaCredentialsOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoAaaCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStruct {
}

export function pnpDeviceImportItemSuccessListDeviceInfoFileSystemListStructToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoFileSystemListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStruct | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStructOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoHttpHeaders {
}

export function pnpDeviceImportItemSuccessListDeviceInfoHttpHeadersToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoHttpHeadersToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoHttpHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoHttpHeaders | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoHttpHeadersList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoHttpHeadersOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoIpInterfaces {
}

export function pnpDeviceImportItemSuccessListDeviceInfoIpInterfacesToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoIpInterfacesToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoIpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoIpInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoIpInterfaces | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoIpInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoIpInterfacesOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoIpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoLocation {
}

export function pnpDeviceImportItemSuccessListDeviceInfoLocationToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoLocationToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoLocation | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoLocationList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoLocationOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoNeighborLinks {
}

export function pnpDeviceImportItemSuccessListDeviceInfoNeighborLinksToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoNeighborLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoNeighborLinksToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoNeighborLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoNeighborLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoNeighborLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoNeighborLinks | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoNeighborLinksList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoNeighborLinksOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoNeighborLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpoint {
}

export function pnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpointToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpointToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpoint | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpointList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpointOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpoint {
}

export function pnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpointToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpointToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpoint | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpointList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpointOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStruct {
}

export function pnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStructToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStruct | undefined) {
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
  private _primaryEndpoint = new PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListPrimaryEndpointList(this, "primary_endpoint", false);
  public get primaryEndpoint() {
    return this._primaryEndpoint;
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // secondary_endpoint - computed: true, optional: false, required: false
  private _secondaryEndpoint = new PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListSecondaryEndpointList(this, "secondary_endpoint", false);
  public get secondaryEndpoint() {
    return this._secondaryEndpoint;
  }
}

export class PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStructOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputs {
}

export function pnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputsToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputsToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputs | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputsList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputsOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStruct {
}

export function pnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStructToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStruct | undefined) {
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

export class PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStructOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfoStackInfo {
}

export function pnpDeviceImportItemSuccessListDeviceInfoStackInfoToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoStackInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoStackInfoToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfoStackInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoStackInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfoStackInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfoStackInfo | undefined) {
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
  private _stackMemberList = new PnpDeviceImportItemSuccessListDeviceInfoStackInfoStackMemberListStructList(this, "stack_member_list", false);
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

export class PnpDeviceImportItemSuccessListDeviceInfoStackInfoList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoStackInfoOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoStackInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListDeviceInfo {
}

export function pnpDeviceImportItemSuccessListDeviceInfoToTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListDeviceInfoToHclTerraform(struct?: PnpDeviceImportItemSuccessListDeviceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListDeviceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListDeviceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListDeviceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_credentials - computed: true, optional: false, required: false
  private _aaaCredentials = new PnpDeviceImportItemSuccessListDeviceInfoAaaCredentialsList(this, "aaa_credentials", false);
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
  private _fileSystemList = new PnpDeviceImportItemSuccessListDeviceInfoFileSystemListStructList(this, "file_system_list", false);
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
  private _httpHeaders = new PnpDeviceImportItemSuccessListDeviceInfoHttpHeadersList(this, "http_headers", false);
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
  private _ipInterfaces = new PnpDeviceImportItemSuccessListDeviceInfoIpInterfacesList(this, "ip_interfaces", false);
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
  private _location = new PnpDeviceImportItemSuccessListDeviceInfoLocationList(this, "location", false);
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
  private _neighborLinks = new PnpDeviceImportItemSuccessListDeviceInfoNeighborLinksList(this, "neighbor_links", false);
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
  private _pnpProfileList = new PnpDeviceImportItemSuccessListDeviceInfoPnpProfileListStructList(this, "pnp_profile_list", false);
  public get pnpProfileList() {
    return this._pnpProfileList;
  }

  // populate_inventory - computed: true, optional: false, required: false
  public get populateInventory() {
    return this.getStringAttribute('populate_inventory');
  }

  // pre_workflow_cli_ouputs - computed: true, optional: false, required: false
  private _preWorkflowCliOuputs = new PnpDeviceImportItemSuccessListDeviceInfoPreWorkflowCliOuputsList(this, "pre_workflow_cli_ouputs", false);
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
  private _stackInfo = new PnpDeviceImportItemSuccessListDeviceInfoStackInfoList(this, "stack_info", false);
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

export class PnpDeviceImportItemSuccessListDeviceInfoList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListDeviceInfoOutputReference {
    return new PnpDeviceImportItemSuccessListDeviceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetails {
}

export function pnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetailsToTerraform(struct?: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetailsToHclTerraform(struct?: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetails | undefined) {
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

export class PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetailsList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetailsOutputReference {
    return new PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStruct {
}

export function pnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStructToTerraform(struct?: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStruct | undefined) {
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

export class PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference {
    return new PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfo {
}

export function pnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoToTerraform(struct?: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoToHclTerraform(struct?: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addn_details - computed: true, optional: false, required: false
  private _addnDetails = new PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoAddnDetailsList(this, "addn_details", false);
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
  private _workItemList = new PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoOutputReference {
    return new PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListRunSummaryListStruct {
}

export function pnpDeviceImportItemSuccessListRunSummaryListStructToTerraform(struct?: PnpDeviceImportItemSuccessListRunSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListRunSummaryListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListRunSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListRunSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListRunSummaryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListRunSummaryListStruct | undefined) {
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
  private _historyTaskInfo = new PnpDeviceImportItemSuccessListRunSummaryListHistoryTaskInfoList(this, "history_task_info", false);
  public get historyTaskInfo() {
    return this._historyTaskInfo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}

export class PnpDeviceImportItemSuccessListRunSummaryListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListRunSummaryListStructOutputReference {
    return new PnpDeviceImportItemSuccessListRunSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStruct {
}

export function pnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStruct | undefined) {
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

export class PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListSystemResetWorkflowTasks {
}

export function pnpDeviceImportItemSuccessListSystemResetWorkflowTasksToTerraform(struct?: PnpDeviceImportItemSuccessListSystemResetWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListSystemResetWorkflowTasksToHclTerraform(struct?: PnpDeviceImportItemSuccessListSystemResetWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListSystemResetWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListSystemResetWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListSystemResetWorkflowTasks | undefined) {
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
  private _workItemList = new PnpDeviceImportItemSuccessListSystemResetWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class PnpDeviceImportItemSuccessListSystemResetWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListSystemResetWorkflowTasksOutputReference {
    return new PnpDeviceImportItemSuccessListSystemResetWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListSystemResetWorkflow {
}

export function pnpDeviceImportItemSuccessListSystemResetWorkflowToTerraform(struct?: PnpDeviceImportItemSuccessListSystemResetWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListSystemResetWorkflowToHclTerraform(struct?: PnpDeviceImportItemSuccessListSystemResetWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListSystemResetWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListSystemResetWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListSystemResetWorkflow | undefined) {
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
  private _tasks = new PnpDeviceImportItemSuccessListSystemResetWorkflowTasksList(this, "tasks", false);
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

export class PnpDeviceImportItemSuccessListSystemResetWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListSystemResetWorkflowOutputReference {
    return new PnpDeviceImportItemSuccessListSystemResetWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStruct {
}

export function pnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStruct | undefined) {
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

export class PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListSystemWorkflowTasks {
}

export function pnpDeviceImportItemSuccessListSystemWorkflowTasksToTerraform(struct?: PnpDeviceImportItemSuccessListSystemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListSystemWorkflowTasksToHclTerraform(struct?: PnpDeviceImportItemSuccessListSystemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListSystemWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListSystemWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListSystemWorkflowTasks | undefined) {
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
  private _workItemList = new PnpDeviceImportItemSuccessListSystemWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class PnpDeviceImportItemSuccessListSystemWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListSystemWorkflowTasksOutputReference {
    return new PnpDeviceImportItemSuccessListSystemWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListSystemWorkflow {
}

export function pnpDeviceImportItemSuccessListSystemWorkflowToTerraform(struct?: PnpDeviceImportItemSuccessListSystemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListSystemWorkflowToHclTerraform(struct?: PnpDeviceImportItemSuccessListSystemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListSystemWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListSystemWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListSystemWorkflow | undefined) {
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
  private _tasks = new PnpDeviceImportItemSuccessListSystemWorkflowTasksList(this, "tasks", false);
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

export class PnpDeviceImportItemSuccessListSystemWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListSystemWorkflowOutputReference {
    return new PnpDeviceImportItemSuccessListSystemWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStruct {
}

export function pnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStruct | undefined) {
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

export class PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListWorkflowTasks {
}

export function pnpDeviceImportItemSuccessListWorkflowTasksToTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListWorkflowTasksToHclTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListWorkflowTasks | undefined) {
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
  private _workItemList = new PnpDeviceImportItemSuccessListWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class PnpDeviceImportItemSuccessListWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListWorkflowTasksOutputReference {
    return new PnpDeviceImportItemSuccessListWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListWorkflow {
}

export function pnpDeviceImportItemSuccessListWorkflowToTerraform(struct?: PnpDeviceImportItemSuccessListWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListWorkflowToHclTerraform(struct?: PnpDeviceImportItemSuccessListWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListWorkflow | undefined) {
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
  private _tasks = new PnpDeviceImportItemSuccessListWorkflowTasksList(this, "tasks", false);
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

export class PnpDeviceImportItemSuccessListWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListWorkflowOutputReference {
    return new PnpDeviceImportItemSuccessListWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParameters {
}

export function pnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParametersToTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParametersToHclTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParameters | undefined) {
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

export class PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParametersList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParametersOutputReference {
    return new PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListWorkflowParametersConfigListStruct {
}

export function pnpDeviceImportItemSuccessListWorkflowParametersConfigListStructToTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowParametersConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListWorkflowParametersConfigListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowParametersConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListWorkflowParametersConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListWorkflowParametersConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListWorkflowParametersConfigListStruct | undefined) {
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
  private _configParameters = new PnpDeviceImportItemSuccessListWorkflowParametersConfigListConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
}

export class PnpDeviceImportItemSuccessListWorkflowParametersConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListWorkflowParametersConfigListStructOutputReference {
    return new PnpDeviceImportItemSuccessListWorkflowParametersConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListWorkflowParameters {
}

export function pnpDeviceImportItemSuccessListWorkflowParametersToTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListWorkflowParametersToHclTerraform(struct?: PnpDeviceImportItemSuccessListWorkflowParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListWorkflowParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListWorkflowParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListWorkflowParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_list - computed: true, optional: false, required: false
  private _configList = new PnpDeviceImportItemSuccessListWorkflowParametersConfigListStructList(this, "config_list", false);
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

export class PnpDeviceImportItemSuccessListWorkflowParametersList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListWorkflowParametersOutputReference {
    return new PnpDeviceImportItemSuccessListWorkflowParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItemSuccessListStruct {
}

export function pnpDeviceImportItemSuccessListStructToTerraform(struct?: PnpDeviceImportItemSuccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemSuccessListStructToHclTerraform(struct?: PnpDeviceImportItemSuccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemSuccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItemSuccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItemSuccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_zero_config - computed: true, optional: false, required: false
  private _dayZeroConfig = new PnpDeviceImportItemSuccessListDayZeroConfigList(this, "day_zero_config", false);
  public get dayZeroConfig() {
    return this._dayZeroConfig;
  }

  // day_zero_config_preview - computed: true, optional: false, required: false
  public get dayZeroConfigPreview() {
    return this.getStringAttribute('day_zero_config_preview');
  }

  // device_info - computed: true, optional: false, required: false
  private _deviceInfo = new PnpDeviceImportItemSuccessListDeviceInfoList(this, "device_info", false);
  public get deviceInfo() {
    return this._deviceInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // run_summary_list - computed: true, optional: false, required: false
  private _runSummaryList = new PnpDeviceImportItemSuccessListRunSummaryListStructList(this, "run_summary_list", false);
  public get runSummaryList() {
    return this._runSummaryList;
  }

  // system_reset_workflow - computed: true, optional: false, required: false
  private _systemResetWorkflow = new PnpDeviceImportItemSuccessListSystemResetWorkflowList(this, "system_reset_workflow", false);
  public get systemResetWorkflow() {
    return this._systemResetWorkflow;
  }

  // system_workflow - computed: true, optional: false, required: false
  private _systemWorkflow = new PnpDeviceImportItemSuccessListSystemWorkflowList(this, "system_workflow", false);
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
  private _workflow = new PnpDeviceImportItemSuccessListWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }

  // workflow_parameters - computed: true, optional: false, required: false
  private _workflowParameters = new PnpDeviceImportItemSuccessListWorkflowParametersList(this, "workflow_parameters", false);
  public get workflowParameters() {
    return this._workflowParameters;
  }
}

export class PnpDeviceImportItemSuccessListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemSuccessListStructOutputReference {
    return new PnpDeviceImportItemSuccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportItem {
}

export function pnpDeviceImportItemToTerraform(struct?: PnpDeviceImportItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceImportItemToHclTerraform(struct?: PnpDeviceImportItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceImportItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_list - computed: true, optional: false, required: false
  private _failureList = new PnpDeviceImportItemFailureListStructList(this, "failure_list", false);
  public get failureList() {
    return this._failureList;
  }

  // success_list - computed: true, optional: false, required: false
  private _successList = new PnpDeviceImportItemSuccessListStructList(this, "success_list", false);
  public get successList() {
    return this._successList;
  }
}

export class PnpDeviceImportItemList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceImportItemOutputReference {
    return new PnpDeviceImportItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoAaaCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#password PnpDeviceImport#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#username PnpDeviceImport#username}
  */
  readonly username?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoAaaCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function pnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoAaaCredentials | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoAaaCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoAaaCredentials | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoAaaCredentials[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#freespace PnpDeviceImport#freespace}
  */
  readonly freespace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#readable PnpDeviceImport#readable}
  */
  readonly readable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#size PnpDeviceImport#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#type PnpDeviceImport#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#writeable PnpDeviceImport#writeable}
  */
  readonly writeable?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStruct | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStruct | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStruct | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#key PnpDeviceImport#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#value PnpDeviceImport#value}
  */
  readonly value?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoHttpHeadersToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceImportParametersPayloadDeviceInfoHttpHeadersToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoHttpHeaders | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoHttpHeaders | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoHttpHeadersOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoIpInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#ipv4_address PnpDeviceImport#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#ipv6_address_list PnpDeviceImport#ipv6_address_list}
  */
  readonly ipv6AddressList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#mac_address PnpDeviceImport#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#status PnpDeviceImport#status}
  */
  readonly status?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoIpInterfacesToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoIpInterfaces | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadDeviceInfoIpInterfacesToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoIpInterfaces | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoIpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoIpInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoIpInterfaces | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoIpInterfacesList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoIpInterfaces[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoIpInterfacesOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoIpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#address PnpDeviceImport#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#altitude PnpDeviceImport#altitude}
  */
  readonly altitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#latitude PnpDeviceImport#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#longitude PnpDeviceImport#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#site_id PnpDeviceImport#site_id}
  */
  readonly siteId?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoLocationToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoLocation | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadDeviceInfoLocationToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoLocation | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoLocation | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoLocationList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoLocation[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoLocationOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoNeighborLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#local_interface_name PnpDeviceImport#local_interface_name}
  */
  readonly localInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#local_mac_address PnpDeviceImport#local_mac_address}
  */
  readonly localMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#local_short_interface_name PnpDeviceImport#local_short_interface_name}
  */
  readonly localShortInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#remote_device_name PnpDeviceImport#remote_device_name}
  */
  readonly remoteDeviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#remote_interface_name PnpDeviceImport#remote_interface_name}
  */
  readonly remoteInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#remote_mac_address PnpDeviceImport#remote_mac_address}
  */
  readonly remoteMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#remote_platform PnpDeviceImport#remote_platform}
  */
  readonly remotePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#remote_short_interface_name PnpDeviceImport#remote_short_interface_name}
  */
  readonly remoteShortInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#remote_version PnpDeviceImport#remote_version}
  */
  readonly remoteVersion?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoNeighborLinksToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoNeighborLinks | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadDeviceInfoNeighborLinksToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoNeighborLinks | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoNeighborLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoNeighborLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoNeighborLinks | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoNeighborLinksList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoNeighborLinks[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoNeighborLinksOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoNeighborLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#certificate PnpDeviceImport#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#fqdn PnpDeviceImport#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#ipv4_address PnpDeviceImport#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#ipv6_address PnpDeviceImport#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#port PnpDeviceImport#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#protocol PnpDeviceImport#protocol}
  */
  readonly protocol?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpoint | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpoint | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpoint | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpoint[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#certificate PnpDeviceImport#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#fqdn PnpDeviceImport#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#ipv4_address PnpDeviceImport#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#ipv6_address PnpDeviceImport#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#port PnpDeviceImport#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#protocol PnpDeviceImport#protocol}
  */
  readonly protocol?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpoint | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpoint | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpoint | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpoint[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#created_by PnpDeviceImport#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#discovery_created PnpDeviceImport#discovery_created}
  */
  readonly discoveryCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#profile_name PnpDeviceImport#profile_name}
  */
  readonly profileName?: string;
  /**
  * primary_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#primary_endpoint PnpDeviceImport#primary_endpoint}
  */
  readonly primaryEndpoint?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpoint[] | cdktf.IResolvable;
  /**
  * secondary_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#secondary_endpoint PnpDeviceImport#secondary_endpoint}
  */
  readonly secondaryEndpoint?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpoint[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    discovery_created: cdktf.stringToTerraform(struct!.discoveryCreated),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    primary_endpoint: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointToTerraform, true)(struct!.primaryEndpoint),
    secondary_endpoint: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointToTerraform, true)(struct!.secondaryEndpoint),
  }
}


export function pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointToHclTerraform, true)(struct!.primaryEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointList",
    },
    secondary_endpoint: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointToHclTerraform, true)(struct!.secondaryEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStruct | cdktf.IResolvable | undefined) {
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
  private _primaryEndpoint = new PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpointList(this, "primary_endpoint", false);
  public get primaryEndpoint() {
    return this._primaryEndpoint;
  }
  public putPrimaryEndpoint(value: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListPrimaryEndpoint[] | cdktf.IResolvable) {
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
  private _secondaryEndpoint = new PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpointList(this, "secondary_endpoint", false);
  public get secondaryEndpoint() {
    return this._secondaryEndpoint;
  }
  public putSecondaryEndpoint(value: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListSecondaryEndpoint[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#cli PnpDeviceImport#cli}
  */
  readonly cli?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#cli_output PnpDeviceImport#cli_output}
  */
  readonly cliOutput?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli: cdktf.stringToTerraform(struct!.cli),
    cli_output: cdktf.stringToTerraform(struct!.cliOutput),
  }
}


export function pnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputs | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputs | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputs[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#hardware_version PnpDeviceImport#hardware_version}
  */
  readonly hardwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#license_level PnpDeviceImport#license_level}
  */
  readonly licenseLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#license_type PnpDeviceImport#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#mac_address PnpDeviceImport#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#pid PnpDeviceImport#pid}
  */
  readonly pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#priority PnpDeviceImport#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#role PnpDeviceImport#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#serial_number PnpDeviceImport#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#software_version PnpDeviceImport#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#stack_number PnpDeviceImport#stack_number}
  */
  readonly stackNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#sudi_serial_number PnpDeviceImport#sudi_serial_number}
  */
  readonly sudiSerialNumber?: string;
}

export function pnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStruct | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStruct | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStruct | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfoStackInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#is_full_ring PnpDeviceImport#is_full_ring}
  */
  readonly isFullRing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#stack_ring_protocol PnpDeviceImport#stack_ring_protocol}
  */
  readonly stackRingProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#supports_stack_workflows PnpDeviceImport#supports_stack_workflows}
  */
  readonly supportsStackWorkflows?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#total_member_count PnpDeviceImport#total_member_count}
  */
  readonly totalMemberCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#valid_license_levels PnpDeviceImport#valid_license_levels}
  */
  readonly validLicenseLevels?: string[];
  /**
  * stack_member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#stack_member_list PnpDeviceImport#stack_member_list}
  */
  readonly stackMemberList?: PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadDeviceInfoStackInfoToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoStackInfo | cdktf.IResolvable): any {
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
    stack_member_list: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructToTerraform, true)(struct!.stackMemberList),
  }
}


export function pnpDeviceImportParametersPayloadDeviceInfoStackInfoToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfoStackInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructToHclTerraform, true)(struct!.stackMemberList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadDeviceInfoStackInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfoStackInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfoStackInfo | cdktf.IResolvable | undefined) {
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
  private _stackMemberList = new PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStructList(this, "stack_member_list", false);
  public get stackMemberList() {
    return this._stackMemberList;
  }
  public putStackMemberList(value: PnpDeviceImportParametersPayloadDeviceInfoStackInfoStackMemberListStruct[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoStackInfoList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfoStackInfo[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoStackInfoOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoStackInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadDeviceInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#added_on PnpDeviceImport#added_on}
  */
  readonly addedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#addn_mac_addrs PnpDeviceImport#addn_mac_addrs}
  */
  readonly addnMacAddrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#agent_type PnpDeviceImport#agent_type}
  */
  readonly agentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#auth_status PnpDeviceImport#auth_status}
  */
  readonly authStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#authenticated_sudi_serial_no PnpDeviceImport#authenticated_sudi_serial_no}
  */
  readonly authenticatedSudiSerialNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#capabilities_supported PnpDeviceImport#capabilities_supported}
  */
  readonly capabilitiesSupported?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#cm_state PnpDeviceImport#cm_state}
  */
  readonly cmState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#description PnpDeviceImport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#device_sudi_serial_nos PnpDeviceImport#device_sudi_serial_nos}
  */
  readonly deviceSudiSerialNos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#device_type PnpDeviceImport#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#features_supported PnpDeviceImport#features_supported}
  */
  readonly featuresSupported?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#first_contact PnpDeviceImport#first_contact}
  */
  readonly firstContact?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#hostname PnpDeviceImport#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#image_file PnpDeviceImport#image_file}
  */
  readonly imageFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#image_version PnpDeviceImport#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#last_contact PnpDeviceImport#last_contact}
  */
  readonly lastContact?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#last_sync_time PnpDeviceImport#last_sync_time}
  */
  readonly lastSyncTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#last_update_on PnpDeviceImport#last_update_on}
  */
  readonly lastUpdateOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#mac_address PnpDeviceImport#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#mode PnpDeviceImport#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#onb_state PnpDeviceImport#onb_state}
  */
  readonly onbState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#pid PnpDeviceImport#pid}
  */
  readonly pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#populate_inventory PnpDeviceImport#populate_inventory}
  */
  readonly populateInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#project_id PnpDeviceImport#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#project_name PnpDeviceImport#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#reload_requested PnpDeviceImport#reload_requested}
  */
  readonly reloadRequested?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#serial_number PnpDeviceImport#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#smart_account_id PnpDeviceImport#smart_account_id}
  */
  readonly smartAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#source PnpDeviceImport#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#stack PnpDeviceImport#stack}
  */
  readonly stack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#sudi_required PnpDeviceImport#sudi_required}
  */
  readonly sudiRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#tags PnpDeviceImport#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#user_sudi_serial_nos PnpDeviceImport#user_sudi_serial_nos}
  */
  readonly userSudiSerialNos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#virtual_account_id PnpDeviceImport#virtual_account_id}
  */
  readonly virtualAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#workflow_id PnpDeviceImport#workflow_id}
  */
  readonly workflowId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#workflow_name PnpDeviceImport#workflow_name}
  */
  readonly workflowName?: string;
  /**
  * aaa_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#aaa_credentials PnpDeviceImport#aaa_credentials}
  */
  readonly aaaCredentials?: PnpDeviceImportParametersPayloadDeviceInfoAaaCredentials[] | cdktf.IResolvable;
  /**
  * file_system_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#file_system_list PnpDeviceImport#file_system_list}
  */
  readonly fileSystemList?: PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStruct[] | cdktf.IResolvable;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#http_headers PnpDeviceImport#http_headers}
  */
  readonly httpHeaders?: PnpDeviceImportParametersPayloadDeviceInfoHttpHeaders[] | cdktf.IResolvable;
  /**
  * ip_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#ip_interfaces PnpDeviceImport#ip_interfaces}
  */
  readonly ipInterfaces?: PnpDeviceImportParametersPayloadDeviceInfoIpInterfaces[] | cdktf.IResolvable;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#location PnpDeviceImport#location}
  */
  readonly location?: PnpDeviceImportParametersPayloadDeviceInfoLocation[] | cdktf.IResolvable;
  /**
  * neighbor_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#neighbor_links PnpDeviceImport#neighbor_links}
  */
  readonly neighborLinks?: PnpDeviceImportParametersPayloadDeviceInfoNeighborLinks[] | cdktf.IResolvable;
  /**
  * pnp_profile_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#pnp_profile_list PnpDeviceImport#pnp_profile_list}
  */
  readonly pnpProfileList?: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStruct[] | cdktf.IResolvable;
  /**
  * pre_workflow_cli_ouputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#pre_workflow_cli_ouputs PnpDeviceImport#pre_workflow_cli_ouputs}
  */
  readonly preWorkflowCliOuputs?: PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputs[] | cdktf.IResolvable;
  /**
  * stack_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#stack_info PnpDeviceImport#stack_info}
  */
  readonly stackInfo?: PnpDeviceImportParametersPayloadDeviceInfoStackInfo[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadDeviceInfoToTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfo | cdktf.IResolvable): any {
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
    aaa_credentials: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsToTerraform, true)(struct!.aaaCredentials),
    file_system_list: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructToTerraform, true)(struct!.fileSystemList),
    http_headers: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoHttpHeadersToTerraform, true)(struct!.httpHeaders),
    ip_interfaces: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoIpInterfacesToTerraform, true)(struct!.ipInterfaces),
    location: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoLocationToTerraform, true)(struct!.location),
    neighbor_links: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoNeighborLinksToTerraform, true)(struct!.neighborLinks),
    pnp_profile_list: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructToTerraform, true)(struct!.pnpProfileList),
    pre_workflow_cli_ouputs: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsToTerraform, true)(struct!.preWorkflowCliOuputs),
    stack_info: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoStackInfoToTerraform, true)(struct!.stackInfo),
  }
}


export function pnpDeviceImportParametersPayloadDeviceInfoToHclTerraform(struct?: PnpDeviceImportParametersPayloadDeviceInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsToHclTerraform, true)(struct!.aaaCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsList",
    },
    file_system_list: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructToHclTerraform, true)(struct!.fileSystemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructList",
    },
    http_headers: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoHttpHeadersList",
    },
    ip_interfaces: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoIpInterfacesToHclTerraform, true)(struct!.ipInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoIpInterfacesList",
    },
    location: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoLocationList",
    },
    neighbor_links: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoNeighborLinksToHclTerraform, true)(struct!.neighborLinks),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoNeighborLinksList",
    },
    pnp_profile_list: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructToHclTerraform, true)(struct!.pnpProfileList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructList",
    },
    pre_workflow_cli_ouputs: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsToHclTerraform, true)(struct!.preWorkflowCliOuputs),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsList",
    },
    stack_info: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoStackInfoToHclTerraform, true)(struct!.stackInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoStackInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadDeviceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadDeviceInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadDeviceInfo | cdktf.IResolvable | undefined) {
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
  private _aaaCredentials = new PnpDeviceImportParametersPayloadDeviceInfoAaaCredentialsList(this, "aaa_credentials", false);
  public get aaaCredentials() {
    return this._aaaCredentials;
  }
  public putAaaCredentials(value: PnpDeviceImportParametersPayloadDeviceInfoAaaCredentials[] | cdktf.IResolvable) {
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
  private _fileSystemList = new PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStructList(this, "file_system_list", false);
  public get fileSystemList() {
    return this._fileSystemList;
  }
  public putFileSystemList(value: PnpDeviceImportParametersPayloadDeviceInfoFileSystemListStruct[] | cdktf.IResolvable) {
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
  private _httpHeaders = new PnpDeviceImportParametersPayloadDeviceInfoHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: PnpDeviceImportParametersPayloadDeviceInfoHttpHeaders[] | cdktf.IResolvable) {
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
  private _ipInterfaces = new PnpDeviceImportParametersPayloadDeviceInfoIpInterfacesList(this, "ip_interfaces", false);
  public get ipInterfaces() {
    return this._ipInterfaces;
  }
  public putIpInterfaces(value: PnpDeviceImportParametersPayloadDeviceInfoIpInterfaces[] | cdktf.IResolvable) {
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
  private _location = new PnpDeviceImportParametersPayloadDeviceInfoLocationList(this, "location", false);
  public get location() {
    return this._location;
  }
  public putLocation(value: PnpDeviceImportParametersPayloadDeviceInfoLocation[] | cdktf.IResolvable) {
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
  private _neighborLinks = new PnpDeviceImportParametersPayloadDeviceInfoNeighborLinksList(this, "neighbor_links", false);
  public get neighborLinks() {
    return this._neighborLinks;
  }
  public putNeighborLinks(value: PnpDeviceImportParametersPayloadDeviceInfoNeighborLinks[] | cdktf.IResolvable) {
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
  private _pnpProfileList = new PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStructList(this, "pnp_profile_list", false);
  public get pnpProfileList() {
    return this._pnpProfileList;
  }
  public putPnpProfileList(value: PnpDeviceImportParametersPayloadDeviceInfoPnpProfileListStruct[] | cdktf.IResolvable) {
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
  private _preWorkflowCliOuputs = new PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputsList(this, "pre_workflow_cli_ouputs", false);
  public get preWorkflowCliOuputs() {
    return this._preWorkflowCliOuputs;
  }
  public putPreWorkflowCliOuputs(value: PnpDeviceImportParametersPayloadDeviceInfoPreWorkflowCliOuputs[] | cdktf.IResolvable) {
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
  private _stackInfo = new PnpDeviceImportParametersPayloadDeviceInfoStackInfoList(this, "stack_info", false);
  public get stackInfo() {
    return this._stackInfo;
  }
  public putStackInfo(value: PnpDeviceImportParametersPayloadDeviceInfoStackInfo[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadDeviceInfoList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadDeviceInfo[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadDeviceInfoOutputReference {
    return new PnpDeviceImportParametersPayloadDeviceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#key PnpDeviceImport#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#value PnpDeviceImport#value}
  */
  readonly value?: string;
}

export function pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsToTerraform(struct?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsToHclTerraform(struct?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetails | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetails | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetails[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsOutputReference {
    return new PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#command PnpDeviceImport#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#output_str PnpDeviceImport#output_str}
  */
  readonly outputStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#time_taken PnpDeviceImport#time_taken}
  */
  readonly timeTaken?: number;
}

export function pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructToTerraform(struct?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStruct | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStruct | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStruct | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference {
    return new PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#time_taken PnpDeviceImport#time_taken}
  */
  readonly timeTaken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#type PnpDeviceImport#type}
  */
  readonly type?: string;
  /**
  * addn_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#addn_details PnpDeviceImport#addn_details}
  */
  readonly addnDetails?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetails[] | cdktf.IResolvable;
  /**
  * work_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#work_item_list PnpDeviceImport#work_item_list}
  */
  readonly workItemList?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoToTerraform(struct?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    time_taken: cdktf.numberToTerraform(struct!.timeTaken),
    type: cdktf.stringToTerraform(struct!.type),
    addn_details: cdktf.listMapper(pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsToTerraform, true)(struct!.addnDetails),
    work_item_list: cdktf.listMapper(pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructToTerraform, true)(struct!.workItemList),
  }
}


export function pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoToHclTerraform(struct?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsToHclTerraform, true)(struct!.addnDetails),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsList",
    },
    work_item_list: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructToHclTerraform, true)(struct!.workItemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfo | cdktf.IResolvable | undefined) {
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
  private _addnDetails = new PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetailsList(this, "addn_details", false);
  public get addnDetails() {
    return this._addnDetails;
  }
  public putAddnDetails(value: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoAddnDetails[] | cdktf.IResolvable) {
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
  private _workItemList = new PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
  public putWorkItemList(value: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoWorkItemListStruct[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfo[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoOutputReference {
    return new PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadRunSummaryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#details PnpDeviceImport#details}
  */
  readonly details?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#error_flag PnpDeviceImport#error_flag}
  */
  readonly errorFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#timestamp PnpDeviceImport#timestamp}
  */
  readonly timestamp?: number;
  /**
  * history_task_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#history_task_info PnpDeviceImport#history_task_info}
  */
  readonly historyTaskInfo?: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfo[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadRunSummaryListStructToTerraform(struct?: PnpDeviceImportParametersPayloadRunSummaryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.stringToTerraform(struct!.details),
    error_flag: cdktf.stringToTerraform(struct!.errorFlag),
    timestamp: cdktf.numberToTerraform(struct!.timestamp),
    history_task_info: cdktf.listMapper(pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoToTerraform, true)(struct!.historyTaskInfo),
  }
}


export function pnpDeviceImportParametersPayloadRunSummaryListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadRunSummaryListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoToHclTerraform, true)(struct!.historyTaskInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadRunSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadRunSummaryListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadRunSummaryListStruct | cdktf.IResolvable | undefined) {
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
  private _historyTaskInfo = new PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfoList(this, "history_task_info", false);
  public get historyTaskInfo() {
    return this._historyTaskInfo;
  }
  public putHistoryTaskInfo(value: PnpDeviceImportParametersPayloadRunSummaryListHistoryTaskInfo[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadRunSummaryListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadRunSummaryListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadRunSummaryListStructOutputReference {
    return new PnpDeviceImportParametersPayloadRunSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#command PnpDeviceImport#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#output_str PnpDeviceImport#output_str}
  */
  readonly outputStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#time_taken PnpDeviceImport#time_taken}
  */
  readonly timeTaken?: number;
}

export function pnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadSystemResetWorkflowTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#curr_work_item_idx PnpDeviceImport#curr_work_item_idx}
  */
  readonly currWorkItemIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#task_seq_no PnpDeviceImport#task_seq_no}
  */
  readonly taskSeqNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#time_taken PnpDeviceImport#time_taken}
  */
  readonly timeTaken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#type PnpDeviceImport#type}
  */
  readonly type?: string;
  /**
  * work_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#work_item_list PnpDeviceImport#work_item_list}
  */
  readonly workItemList?: PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadSystemResetWorkflowTasksToTerraform(struct?: PnpDeviceImportParametersPayloadSystemResetWorkflowTasks | cdktf.IResolvable): any {
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
    work_item_list: cdktf.listMapper(pnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructToTerraform, true)(struct!.workItemList),
  }
}


export function pnpDeviceImportParametersPayloadSystemResetWorkflowTasksToHclTerraform(struct?: PnpDeviceImportParametersPayloadSystemResetWorkflowTasks | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructToHclTerraform, true)(struct!.workItemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadSystemResetWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadSystemResetWorkflowTasks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadSystemResetWorkflowTasks | cdktf.IResolvable | undefined) {
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
  private _workItemList = new PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
  public putWorkItemList(value: PnpDeviceImportParametersPayloadSystemResetWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadSystemResetWorkflowTasksList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadSystemResetWorkflowTasks[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadSystemResetWorkflowTasksOutputReference {
    return new PnpDeviceImportParametersPayloadSystemResetWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadSystemResetWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#add_to_inventory PnpDeviceImport#add_to_inventory}
  */
  readonly addToInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#added_on PnpDeviceImport#added_on}
  */
  readonly addedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#config_id PnpDeviceImport#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#curr_task_idx PnpDeviceImport#curr_task_idx}
  */
  readonly currTaskIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#description PnpDeviceImport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#exec_time PnpDeviceImport#exec_time}
  */
  readonly execTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#id PnpDeviceImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#image_id PnpDeviceImport#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#instance_type PnpDeviceImport#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#lastupdate_on PnpDeviceImport#lastupdate_on}
  */
  readonly lastupdateOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#tenant_id PnpDeviceImport#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#type PnpDeviceImport#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#use_state PnpDeviceImport#use_state}
  */
  readonly useState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#version PnpDeviceImport#version}
  */
  readonly version?: number;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#tasks PnpDeviceImport#tasks}
  */
  readonly tasks?: PnpDeviceImportParametersPayloadSystemResetWorkflowTasks[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadSystemResetWorkflowToTerraform(struct?: PnpDeviceImportParametersPayloadSystemResetWorkflow | cdktf.IResolvable): any {
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
    tasks: cdktf.listMapper(pnpDeviceImportParametersPayloadSystemResetWorkflowTasksToTerraform, true)(struct!.tasks),
  }
}


export function pnpDeviceImportParametersPayloadSystemResetWorkflowToHclTerraform(struct?: PnpDeviceImportParametersPayloadSystemResetWorkflow | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadSystemResetWorkflowTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadSystemResetWorkflowTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadSystemResetWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadSystemResetWorkflow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadSystemResetWorkflow | cdktf.IResolvable | undefined) {
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
  private _tasks = new PnpDeviceImportParametersPayloadSystemResetWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: PnpDeviceImportParametersPayloadSystemResetWorkflowTasks[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadSystemResetWorkflowList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadSystemResetWorkflow[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadSystemResetWorkflowOutputReference {
    return new PnpDeviceImportParametersPayloadSystemResetWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#command PnpDeviceImport#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#output_str PnpDeviceImport#output_str}
  */
  readonly outputStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#time_taken PnpDeviceImport#time_taken}
  */
  readonly timeTaken?: number;
}

export function pnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadSystemWorkflowTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#curr_work_item_idx PnpDeviceImport#curr_work_item_idx}
  */
  readonly currWorkItemIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#task_seq_no PnpDeviceImport#task_seq_no}
  */
  readonly taskSeqNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#time_taken PnpDeviceImport#time_taken}
  */
  readonly timeTaken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#type PnpDeviceImport#type}
  */
  readonly type?: string;
  /**
  * work_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#work_item_list PnpDeviceImport#work_item_list}
  */
  readonly workItemList?: PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadSystemWorkflowTasksToTerraform(struct?: PnpDeviceImportParametersPayloadSystemWorkflowTasks | cdktf.IResolvable): any {
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
    work_item_list: cdktf.listMapper(pnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructToTerraform, true)(struct!.workItemList),
  }
}


export function pnpDeviceImportParametersPayloadSystemWorkflowTasksToHclTerraform(struct?: PnpDeviceImportParametersPayloadSystemWorkflowTasks | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructToHclTerraform, true)(struct!.workItemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadSystemWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadSystemWorkflowTasks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadSystemWorkflowTasks | cdktf.IResolvable | undefined) {
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
  private _workItemList = new PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
  public putWorkItemList(value: PnpDeviceImportParametersPayloadSystemWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadSystemWorkflowTasksList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadSystemWorkflowTasks[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadSystemWorkflowTasksOutputReference {
    return new PnpDeviceImportParametersPayloadSystemWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadSystemWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#add_to_inventory PnpDeviceImport#add_to_inventory}
  */
  readonly addToInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#added_on PnpDeviceImport#added_on}
  */
  readonly addedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#config_id PnpDeviceImport#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#curr_task_idx PnpDeviceImport#curr_task_idx}
  */
  readonly currTaskIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#description PnpDeviceImport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#exec_time PnpDeviceImport#exec_time}
  */
  readonly execTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#id PnpDeviceImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#image_id PnpDeviceImport#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#instance_type PnpDeviceImport#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#lastupdate_on PnpDeviceImport#lastupdate_on}
  */
  readonly lastupdateOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#tenant_id PnpDeviceImport#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#type PnpDeviceImport#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#use_state PnpDeviceImport#use_state}
  */
  readonly useState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#version PnpDeviceImport#version}
  */
  readonly version?: number;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#tasks PnpDeviceImport#tasks}
  */
  readonly tasks?: PnpDeviceImportParametersPayloadSystemWorkflowTasks[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadSystemWorkflowToTerraform(struct?: PnpDeviceImportParametersPayloadSystemWorkflow | cdktf.IResolvable): any {
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
    tasks: cdktf.listMapper(pnpDeviceImportParametersPayloadSystemWorkflowTasksToTerraform, true)(struct!.tasks),
  }
}


export function pnpDeviceImportParametersPayloadSystemWorkflowToHclTerraform(struct?: PnpDeviceImportParametersPayloadSystemWorkflow | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadSystemWorkflowTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadSystemWorkflowTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadSystemWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadSystemWorkflow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadSystemWorkflow | cdktf.IResolvable | undefined) {
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
  private _tasks = new PnpDeviceImportParametersPayloadSystemWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: PnpDeviceImportParametersPayloadSystemWorkflowTasks[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadSystemWorkflowList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadSystemWorkflow[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadSystemWorkflowOutputReference {
    return new PnpDeviceImportParametersPayloadSystemWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#command PnpDeviceImport#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#output_str PnpDeviceImport#output_str}
  */
  readonly outputStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#time_taken PnpDeviceImport#time_taken}
  */
  readonly timeTaken?: number;
}

export function pnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructToTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
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


export function pnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStruct | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStruct | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructOutputReference {
    return new PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadWorkflowTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#curr_work_item_idx PnpDeviceImport#curr_work_item_idx}
  */
  readonly currWorkItemIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#task_seq_no PnpDeviceImport#task_seq_no}
  */
  readonly taskSeqNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#time_taken PnpDeviceImport#time_taken}
  */
  readonly timeTaken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#type PnpDeviceImport#type}
  */
  readonly type?: string;
  /**
  * work_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#work_item_list PnpDeviceImport#work_item_list}
  */
  readonly workItemList?: PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadWorkflowTasksToTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowTasks | cdktf.IResolvable): any {
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
    work_item_list: cdktf.listMapper(pnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructToTerraform, true)(struct!.workItemList),
  }
}


export function pnpDeviceImportParametersPayloadWorkflowTasksToHclTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowTasks | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructToHclTerraform, true)(struct!.workItemList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadWorkflowTasks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadWorkflowTasks | cdktf.IResolvable | undefined) {
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
  private _workItemList = new PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
  public putWorkItemList(value: PnpDeviceImportParametersPayloadWorkflowTasksWorkItemListStruct[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadWorkflowTasksList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadWorkflowTasks[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadWorkflowTasksOutputReference {
    return new PnpDeviceImportParametersPayloadWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#add_to_inventory PnpDeviceImport#add_to_inventory}
  */
  readonly addToInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#added_on PnpDeviceImport#added_on}
  */
  readonly addedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#config_id PnpDeviceImport#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#curr_task_idx PnpDeviceImport#curr_task_idx}
  */
  readonly currTaskIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#description PnpDeviceImport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#end_time PnpDeviceImport#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#exec_time PnpDeviceImport#exec_time}
  */
  readonly execTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#id PnpDeviceImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#image_id PnpDeviceImport#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#instance_type PnpDeviceImport#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#lastupdate_on PnpDeviceImport#lastupdate_on}
  */
  readonly lastupdateOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#name PnpDeviceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#start_time PnpDeviceImport#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#state PnpDeviceImport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#tenant_id PnpDeviceImport#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#type PnpDeviceImport#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#use_state PnpDeviceImport#use_state}
  */
  readonly useState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#version PnpDeviceImport#version}
  */
  readonly version?: number;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#tasks PnpDeviceImport#tasks}
  */
  readonly tasks?: PnpDeviceImportParametersPayloadWorkflowTasks[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadWorkflowToTerraform(struct?: PnpDeviceImportParametersPayloadWorkflow | cdktf.IResolvable): any {
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
    tasks: cdktf.listMapper(pnpDeviceImportParametersPayloadWorkflowTasksToTerraform, true)(struct!.tasks),
  }
}


export function pnpDeviceImportParametersPayloadWorkflowToHclTerraform(struct?: PnpDeviceImportParametersPayloadWorkflow | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadWorkflowTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadWorkflowTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadWorkflow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadWorkflow | cdktf.IResolvable | undefined) {
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
  private _tasks = new PnpDeviceImportParametersPayloadWorkflowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: PnpDeviceImportParametersPayloadWorkflowTasks[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadWorkflowList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadWorkflow[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadWorkflowOutputReference {
    return new PnpDeviceImportParametersPayloadWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#key PnpDeviceImport#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#value PnpDeviceImport#value}
  */
  readonly value?: string;
}

export function pnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersToTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersToHclTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParameters | cdktf.IResolvable): any {
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

export class PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParameters | cdktf.IResolvable | undefined) {
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

export class PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParameters[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersOutputReference {
    return new PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadWorkflowParametersConfigListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#config_id PnpDeviceImport#config_id}
  */
  readonly configId?: string;
  /**
  * config_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#config_parameters PnpDeviceImport#config_parameters}
  */
  readonly configParameters?: PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParameters[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadWorkflowParametersConfigListStructToTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowParametersConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    config_parameters: cdktf.listMapper(pnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersToTerraform, true)(struct!.configParameters),
  }
}


export function pnpDeviceImportParametersPayloadWorkflowParametersConfigListStructToHclTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowParametersConfigListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersToHclTerraform, true)(struct!.configParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadWorkflowParametersConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadWorkflowParametersConfigListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadWorkflowParametersConfigListStruct | cdktf.IResolvable | undefined) {
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
  private _configParameters = new PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
  public putConfigParameters(value: PnpDeviceImportParametersPayloadWorkflowParametersConfigListConfigParameters[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadWorkflowParametersConfigListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadWorkflowParametersConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadWorkflowParametersConfigListStructOutputReference {
    return new PnpDeviceImportParametersPayloadWorkflowParametersConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayloadWorkflowParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#license_level PnpDeviceImport#license_level}
  */
  readonly licenseLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#license_type PnpDeviceImport#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#top_of_stack_serial_number PnpDeviceImport#top_of_stack_serial_number}
  */
  readonly topOfStackSerialNumber?: string;
  /**
  * config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#config_list PnpDeviceImport#config_list}
  */
  readonly configList?: PnpDeviceImportParametersPayloadWorkflowParametersConfigListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadWorkflowParametersToTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_level: cdktf.stringToTerraform(struct!.licenseLevel),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    top_of_stack_serial_number: cdktf.stringToTerraform(struct!.topOfStackSerialNumber),
    config_list: cdktf.listMapper(pnpDeviceImportParametersPayloadWorkflowParametersConfigListStructToTerraform, true)(struct!.configList),
  }
}


export function pnpDeviceImportParametersPayloadWorkflowParametersToHclTerraform(struct?: PnpDeviceImportParametersPayloadWorkflowParameters | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadWorkflowParametersConfigListStructToHclTerraform, true)(struct!.configList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadWorkflowParametersConfigListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadWorkflowParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayloadWorkflowParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayloadWorkflowParameters | cdktf.IResolvable | undefined) {
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
  private _configList = new PnpDeviceImportParametersPayloadWorkflowParametersConfigListStructList(this, "config_list", false);
  public get configList() {
    return this._configList;
  }
  public putConfigList(value: PnpDeviceImportParametersPayloadWorkflowParametersConfigListStruct[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadWorkflowParametersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayloadWorkflowParameters[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadWorkflowParametersOutputReference {
    return new PnpDeviceImportParametersPayloadWorkflowParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParametersPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#id PnpDeviceImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#tenant_id PnpDeviceImport#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#version PnpDeviceImport#version}
  */
  readonly version?: number;
  /**
  * device_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#device_info PnpDeviceImport#device_info}
  */
  readonly deviceInfo?: PnpDeviceImportParametersPayloadDeviceInfo[] | cdktf.IResolvable;
  /**
  * run_summary_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#run_summary_list PnpDeviceImport#run_summary_list}
  */
  readonly runSummaryList?: PnpDeviceImportParametersPayloadRunSummaryListStruct[] | cdktf.IResolvable;
  /**
  * system_reset_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#system_reset_workflow PnpDeviceImport#system_reset_workflow}
  */
  readonly systemResetWorkflow?: PnpDeviceImportParametersPayloadSystemResetWorkflow[] | cdktf.IResolvable;
  /**
  * system_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#system_workflow PnpDeviceImport#system_workflow}
  */
  readonly systemWorkflow?: PnpDeviceImportParametersPayloadSystemWorkflow[] | cdktf.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#workflow PnpDeviceImport#workflow}
  */
  readonly workflow?: PnpDeviceImportParametersPayloadWorkflow[] | cdktf.IResolvable;
  /**
  * workflow_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#workflow_parameters PnpDeviceImport#workflow_parameters}
  */
  readonly workflowParameters?: PnpDeviceImportParametersPayloadWorkflowParameters[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersPayloadToTerraform(struct?: PnpDeviceImportParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    version: cdktf.numberToTerraform(struct!.version),
    device_info: cdktf.listMapper(pnpDeviceImportParametersPayloadDeviceInfoToTerraform, true)(struct!.deviceInfo),
    run_summary_list: cdktf.listMapper(pnpDeviceImportParametersPayloadRunSummaryListStructToTerraform, true)(struct!.runSummaryList),
    system_reset_workflow: cdktf.listMapper(pnpDeviceImportParametersPayloadSystemResetWorkflowToTerraform, true)(struct!.systemResetWorkflow),
    system_workflow: cdktf.listMapper(pnpDeviceImportParametersPayloadSystemWorkflowToTerraform, true)(struct!.systemWorkflow),
    workflow: cdktf.listMapper(pnpDeviceImportParametersPayloadWorkflowToTerraform, true)(struct!.workflow),
    workflow_parameters: cdktf.listMapper(pnpDeviceImportParametersPayloadWorkflowParametersToTerraform, true)(struct!.workflowParameters),
  }
}


export function pnpDeviceImportParametersPayloadToHclTerraform(struct?: PnpDeviceImportParametersPayload | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadDeviceInfoToHclTerraform, true)(struct!.deviceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadDeviceInfoList",
    },
    run_summary_list: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadRunSummaryListStructToHclTerraform, true)(struct!.runSummaryList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadRunSummaryListStructList",
    },
    system_reset_workflow: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadSystemResetWorkflowToHclTerraform, true)(struct!.systemResetWorkflow),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadSystemResetWorkflowList",
    },
    system_workflow: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadSystemWorkflowToHclTerraform, true)(struct!.systemWorkflow),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadSystemWorkflowList",
    },
    workflow: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadWorkflowToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadWorkflowList",
    },
    workflow_parameters: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadWorkflowParametersToHclTerraform, true)(struct!.workflowParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadWorkflowParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceImportParametersPayload | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PnpDeviceImportParametersPayload | cdktf.IResolvable | undefined) {
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
  private _deviceInfo = new PnpDeviceImportParametersPayloadDeviceInfoList(this, "device_info", false);
  public get deviceInfo() {
    return this._deviceInfo;
  }
  public putDeviceInfo(value: PnpDeviceImportParametersPayloadDeviceInfo[] | cdktf.IResolvable) {
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
  private _runSummaryList = new PnpDeviceImportParametersPayloadRunSummaryListStructList(this, "run_summary_list", false);
  public get runSummaryList() {
    return this._runSummaryList;
  }
  public putRunSummaryList(value: PnpDeviceImportParametersPayloadRunSummaryListStruct[] | cdktf.IResolvable) {
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
  private _systemResetWorkflow = new PnpDeviceImportParametersPayloadSystemResetWorkflowList(this, "system_reset_workflow", false);
  public get systemResetWorkflow() {
    return this._systemResetWorkflow;
  }
  public putSystemResetWorkflow(value: PnpDeviceImportParametersPayloadSystemResetWorkflow[] | cdktf.IResolvable) {
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
  private _systemWorkflow = new PnpDeviceImportParametersPayloadSystemWorkflowList(this, "system_workflow", false);
  public get systemWorkflow() {
    return this._systemWorkflow;
  }
  public putSystemWorkflow(value: PnpDeviceImportParametersPayloadSystemWorkflow[] | cdktf.IResolvable) {
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
  private _workflow = new PnpDeviceImportParametersPayloadWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: PnpDeviceImportParametersPayloadWorkflow[] | cdktf.IResolvable) {
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
  private _workflowParameters = new PnpDeviceImportParametersPayloadWorkflowParametersList(this, "workflow_parameters", false);
  public get workflowParameters() {
    return this._workflowParameters;
  }
  public putWorkflowParameters(value: PnpDeviceImportParametersPayloadWorkflowParameters[] | cdktf.IResolvable) {
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

export class PnpDeviceImportParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceImportParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceImportParametersPayloadOutputReference {
    return new PnpDeviceImportParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceImportParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#payload PnpDeviceImport#payload}
  */
  readonly payload?: PnpDeviceImportParametersPayload[] | cdktf.IResolvable;
}

export function pnpDeviceImportParametersToTerraform(struct?: PnpDeviceImportParametersOutputReference | PnpDeviceImportParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(pnpDeviceImportParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function pnpDeviceImportParametersToHclTerraform(struct?: PnpDeviceImportParametersOutputReference | PnpDeviceImportParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(pnpDeviceImportParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceImportParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceImportParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpDeviceImportParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceImportParameters | undefined) {
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
  private _payload = new PnpDeviceImportParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: PnpDeviceImportParametersPayload[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import dnacenter_pnp_device_import}
*/
export class PnpDeviceImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_device_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpDeviceImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpDeviceImport to import
  * @param importFromId The id of the existing PnpDeviceImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpDeviceImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_device_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_import dnacenter_pnp_device_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpDeviceImportConfig
  */
  public constructor(scope: Construct, id: string, config: PnpDeviceImportConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_device_import',
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
  private _item = new PnpDeviceImportItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new PnpDeviceImportParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PnpDeviceImportParameters) {
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
      parameters: pnpDeviceImportParametersToTerraform(this._parameters.internalValue),
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
        value: pnpDeviceImportParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpDeviceImportParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
