// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterPnpDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * cmState query parameter. Device Connection Manager State
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#cm_state DataDnacenterPnpDevice#cm_state}
  */
  readonly cmState?: string[];
  /**
  * hostname query parameter. Device Hostname
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#hostname DataDnacenterPnpDevice#hostname}
  */
  readonly hostname?: string;
  /**
  * id path parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#id DataDnacenterPnpDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * lastContact query parameter. Device Has Contacted lastContact > 0
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#last_contact DataDnacenterPnpDevice#last_contact}
  */
  readonly lastContact?: boolean | cdktf.IResolvable;
  /**
  * limit query parameter. Limits number of results
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#limit DataDnacenterPnpDevice#limit}
  */
  readonly limit?: number;
  /**
  * macAddress query parameter. Device Mac Address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#mac_address DataDnacenterPnpDevice#mac_address}
  */
  readonly macAddress?: string;
  /**
  * name query parameter. Device Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#name DataDnacenterPnpDevice#name}
  */
  readonly name?: string[];
  /**
  * offset query parameter. Index of first result
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#offset DataDnacenterPnpDevice#offset}
  */
  readonly offset?: number;
  /**
  * onbState query parameter. Device Onboarding State
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#onb_state DataDnacenterPnpDevice#onb_state}
  */
  readonly onbState?: string[];
  /**
  * pid query parameter. Device ProductId
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#pid DataDnacenterPnpDevice#pid}
  */
  readonly pid?: string[];
  /**
  * projectId query parameter. Device Project Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#project_id DataDnacenterPnpDevice#project_id}
  */
  readonly projectId?: string[];
  /**
  * projectName query parameter. Device Project Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#project_name DataDnacenterPnpDevice#project_name}
  */
  readonly projectName?: string[];
  /**
  * serialNumber query parameter. Device Serial Number
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#serial_number DataDnacenterPnpDevice#serial_number}
  */
  readonly serialNumber?: string[];
  /**
  * siteName query parameter. Device Site Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#site_name DataDnacenterPnpDevice#site_name}
  */
  readonly siteName?: string;
  /**
  * smartAccountId query parameter. Device Smart Account
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#smart_account_id DataDnacenterPnpDevice#smart_account_id}
  */
  readonly smartAccountId?: string[];
  /**
  * sort query parameter. Comma seperated list of fields to sort on
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#sort DataDnacenterPnpDevice#sort}
  */
  readonly sort?: string[];
  /**
  * sortOrder query parameter. Sort Order Ascending (asc) or Descending (des)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#sort_order DataDnacenterPnpDevice#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * source query parameter. Device Source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#source DataDnacenterPnpDevice#source}
  */
  readonly source?: string[];
  /**
  * state query parameter. Device State
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#state DataDnacenterPnpDevice#state}
  */
  readonly state?: string[];
  /**
  * virtualAccountId query parameter. Device Virtual Account
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#virtual_account_id DataDnacenterPnpDevice#virtual_account_id}
  */
  readonly virtualAccountId?: string[];
  /**
  * workflowId query parameter. Device Workflow Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#workflow_id DataDnacenterPnpDevice#workflow_id}
  */
  readonly workflowId?: string[];
  /**
  * workflowName query parameter. Device Workflow Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#workflow_name DataDnacenterPnpDevice#workflow_name}
  */
  readonly workflowName?: string[];
}
export interface DataDnacenterPnpDeviceItemDayZeroConfig {
}

export function dataDnacenterPnpDeviceItemDayZeroConfigToTerraform(struct?: DataDnacenterPnpDeviceItemDayZeroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDayZeroConfigToHclTerraform(struct?: DataDnacenterPnpDeviceItemDayZeroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDayZeroConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDayZeroConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDayZeroConfig | undefined) {
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

export class DataDnacenterPnpDeviceItemDayZeroConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDayZeroConfigOutputReference {
    return new DataDnacenterPnpDeviceItemDayZeroConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoAaaCredentials {
}

export function dataDnacenterPnpDeviceItemDeviceInfoAaaCredentialsToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoAaaCredentialsToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoAaaCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoAaaCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoAaaCredentials | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoAaaCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoAaaCredentialsOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoAaaCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStruct {
}

export function dataDnacenterPnpDeviceItemDeviceInfoFileSystemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoFileSystemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoHttpHeaders {
}

export function dataDnacenterPnpDeviceItemDeviceInfoHttpHeadersToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoHttpHeadersToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoHttpHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoHttpHeaders | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoHttpHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoHttpHeadersOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoIpInterfaces {
}

export function dataDnacenterPnpDeviceItemDeviceInfoIpInterfacesToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoIpInterfacesToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoIpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoIpInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoIpInterfaces | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoIpInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoIpInterfacesOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoIpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoLocation {
}

export function dataDnacenterPnpDeviceItemDeviceInfoLocationToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoLocationToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoLocation | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoLocationOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoNeighborLinks {
}

export function dataDnacenterPnpDeviceItemDeviceInfoNeighborLinksToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoNeighborLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoNeighborLinksToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoNeighborLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoNeighborLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoNeighborLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoNeighborLinks | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoNeighborLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoNeighborLinksOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoNeighborLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint {
}

export function dataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpoint | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint {
}

export function dataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpoint | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStruct {
}

export function dataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStructToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStruct | undefined) {
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
  private _primaryEndpoint = new DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListPrimaryEndpointList(this, "primary_endpoint", false);
  public get primaryEndpoint() {
    return this._primaryEndpoint;
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // secondary_endpoint - computed: true, optional: false, required: false
  private _secondaryEndpoint = new DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListSecondaryEndpointList(this, "secondary_endpoint", false);
  public get secondaryEndpoint() {
    return this._secondaryEndpoint;
  }
}

export class DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStructOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputs {
}

export function dataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputsToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputsToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputs | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputsOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStruct {
}

export function dataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStructToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStructOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfoStackInfo {
}

export function dataDnacenterPnpDeviceItemDeviceInfoStackInfoToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoStackInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoStackInfoToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfoStackInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoStackInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfoStackInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfoStackInfo | undefined) {
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
  private _stackMemberList = new DataDnacenterPnpDeviceItemDeviceInfoStackInfoStackMemberListStructList(this, "stack_member_list", false);
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

export class DataDnacenterPnpDeviceItemDeviceInfoStackInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoStackInfoOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoStackInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemDeviceInfo {
}

export function dataDnacenterPnpDeviceItemDeviceInfoToTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemDeviceInfoToHclTerraform(struct?: DataDnacenterPnpDeviceItemDeviceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemDeviceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemDeviceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemDeviceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_credentials - computed: true, optional: false, required: false
  private _aaaCredentials = new DataDnacenterPnpDeviceItemDeviceInfoAaaCredentialsList(this, "aaa_credentials", false);
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
  private _fileSystemList = new DataDnacenterPnpDeviceItemDeviceInfoFileSystemListStructList(this, "file_system_list", false);
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
  private _httpHeaders = new DataDnacenterPnpDeviceItemDeviceInfoHttpHeadersList(this, "http_headers", false);
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
  private _ipInterfaces = new DataDnacenterPnpDeviceItemDeviceInfoIpInterfacesList(this, "ip_interfaces", false);
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
  private _location = new DataDnacenterPnpDeviceItemDeviceInfoLocationList(this, "location", false);
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
  private _neighborLinks = new DataDnacenterPnpDeviceItemDeviceInfoNeighborLinksList(this, "neighbor_links", false);
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
  private _pnpProfileList = new DataDnacenterPnpDeviceItemDeviceInfoPnpProfileListStructList(this, "pnp_profile_list", false);
  public get pnpProfileList() {
    return this._pnpProfileList;
  }

  // populate_inventory - computed: true, optional: false, required: false
  public get populateInventory() {
    return this.getStringAttribute('populate_inventory');
  }

  // pre_workflow_cli_ouputs - computed: true, optional: false, required: false
  private _preWorkflowCliOuputs = new DataDnacenterPnpDeviceItemDeviceInfoPreWorkflowCliOuputsList(this, "pre_workflow_cli_ouputs", false);
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
  private _stackInfo = new DataDnacenterPnpDeviceItemDeviceInfoStackInfoList(this, "stack_info", false);
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

export class DataDnacenterPnpDeviceItemDeviceInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemDeviceInfoOutputReference {
    return new DataDnacenterPnpDeviceItemDeviceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails {
}

export function dataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsToTerraform(struct?: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsToHclTerraform(struct?: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetails | undefined) {
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

export class DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsOutputReference {
    return new DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct {
}

export function dataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfo {
}

export function dataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoToTerraform(struct?: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoToHclTerraform(struct?: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addn_details - computed: true, optional: false, required: false
  private _addnDetails = new DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoAddnDetailsList(this, "addn_details", false);
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
  private _workItemList = new DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoOutputReference {
    return new DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemRunSummaryListStruct {
}

export function dataDnacenterPnpDeviceItemRunSummaryListStructToTerraform(struct?: DataDnacenterPnpDeviceItemRunSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemRunSummaryListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemRunSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemRunSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemRunSummaryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemRunSummaryListStruct | undefined) {
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
  private _historyTaskInfo = new DataDnacenterPnpDeviceItemRunSummaryListHistoryTaskInfoList(this, "history_task_info", false);
  public get historyTaskInfo() {
    return this._historyTaskInfo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}

export class DataDnacenterPnpDeviceItemRunSummaryListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemRunSummaryListStructOutputReference {
    return new DataDnacenterPnpDeviceItemRunSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct {
}

export function dataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemSystemResetWorkflowTasks {
}

export function dataDnacenterPnpDeviceItemSystemResetWorkflowTasksToTerraform(struct?: DataDnacenterPnpDeviceItemSystemResetWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemSystemResetWorkflowTasksToHclTerraform(struct?: DataDnacenterPnpDeviceItemSystemResetWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemSystemResetWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemSystemResetWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemSystemResetWorkflowTasks | undefined) {
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
  private _workItemList = new DataDnacenterPnpDeviceItemSystemResetWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class DataDnacenterPnpDeviceItemSystemResetWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemSystemResetWorkflowTasksOutputReference {
    return new DataDnacenterPnpDeviceItemSystemResetWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemSystemResetWorkflow {
}

export function dataDnacenterPnpDeviceItemSystemResetWorkflowToTerraform(struct?: DataDnacenterPnpDeviceItemSystemResetWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemSystemResetWorkflowToHclTerraform(struct?: DataDnacenterPnpDeviceItemSystemResetWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemSystemResetWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemSystemResetWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemSystemResetWorkflow | undefined) {
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
  private _tasks = new DataDnacenterPnpDeviceItemSystemResetWorkflowTasksList(this, "tasks", false);
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

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
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

export class DataDnacenterPnpDeviceItemSystemResetWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemSystemResetWorkflowOutputReference {
    return new DataDnacenterPnpDeviceItemSystemResetWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStruct {
}

export function dataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemSystemWorkflowTasks {
}

export function dataDnacenterPnpDeviceItemSystemWorkflowTasksToTerraform(struct?: DataDnacenterPnpDeviceItemSystemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemSystemWorkflowTasksToHclTerraform(struct?: DataDnacenterPnpDeviceItemSystemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemSystemWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemSystemWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemSystemWorkflowTasks | undefined) {
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
  private _workItemList = new DataDnacenterPnpDeviceItemSystemWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class DataDnacenterPnpDeviceItemSystemWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemSystemWorkflowTasksOutputReference {
    return new DataDnacenterPnpDeviceItemSystemWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemSystemWorkflow {
}

export function dataDnacenterPnpDeviceItemSystemWorkflowToTerraform(struct?: DataDnacenterPnpDeviceItemSystemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemSystemWorkflowToHclTerraform(struct?: DataDnacenterPnpDeviceItemSystemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemSystemWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemSystemWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemSystemWorkflow | undefined) {
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
  private _tasks = new DataDnacenterPnpDeviceItemSystemWorkflowTasksList(this, "tasks", false);
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

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
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

export class DataDnacenterPnpDeviceItemSystemWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemSystemWorkflowOutputReference {
    return new DataDnacenterPnpDeviceItemSystemWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStruct {
}

export function dataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemWorkflowTasks {
}

export function dataDnacenterPnpDeviceItemWorkflowTasksToTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemWorkflowTasksToHclTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemWorkflowTasks | undefined) {
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
  private _workItemList = new DataDnacenterPnpDeviceItemWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class DataDnacenterPnpDeviceItemWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemWorkflowTasksOutputReference {
    return new DataDnacenterPnpDeviceItemWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemWorkflow {
}

export function dataDnacenterPnpDeviceItemWorkflowToTerraform(struct?: DataDnacenterPnpDeviceItemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemWorkflowToHclTerraform(struct?: DataDnacenterPnpDeviceItemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemWorkflow | undefined) {
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
  private _tasks = new DataDnacenterPnpDeviceItemWorkflowTasksList(this, "tasks", false);
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

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
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

export class DataDnacenterPnpDeviceItemWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemWorkflowOutputReference {
    return new DataDnacenterPnpDeviceItemWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParameters {
}

export function dataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParametersToTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParametersToHclTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParameters | undefined) {
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

export class DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParametersOutputReference {
    return new DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemWorkflowParametersConfigListStruct {
}

export function dataDnacenterPnpDeviceItemWorkflowParametersConfigListStructToTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowParametersConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemWorkflowParametersConfigListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowParametersConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemWorkflowParametersConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemWorkflowParametersConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemWorkflowParametersConfigListStruct | undefined) {
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
  private _configParameters = new DataDnacenterPnpDeviceItemWorkflowParametersConfigListConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
}

export class DataDnacenterPnpDeviceItemWorkflowParametersConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemWorkflowParametersConfigListStructOutputReference {
    return new DataDnacenterPnpDeviceItemWorkflowParametersConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemWorkflowParameters {
}

export function dataDnacenterPnpDeviceItemWorkflowParametersToTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemWorkflowParametersToHclTerraform(struct?: DataDnacenterPnpDeviceItemWorkflowParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemWorkflowParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemWorkflowParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemWorkflowParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_list - computed: true, optional: false, required: false
  private _configList = new DataDnacenterPnpDeviceItemWorkflowParametersConfigListStructList(this, "config_list", false);
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

export class DataDnacenterPnpDeviceItemWorkflowParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemWorkflowParametersOutputReference {
    return new DataDnacenterPnpDeviceItemWorkflowParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItem {
}

export function dataDnacenterPnpDeviceItemToTerraform(struct?: DataDnacenterPnpDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemToHclTerraform(struct?: DataDnacenterPnpDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_zero_config - computed: true, optional: false, required: false
  private _dayZeroConfig = new DataDnacenterPnpDeviceItemDayZeroConfigList(this, "day_zero_config", false);
  public get dayZeroConfig() {
    return this._dayZeroConfig;
  }

  // day_zero_config_preview - computed: true, optional: false, required: false
  public get dayZeroConfigPreview() {
    return this.getStringAttribute('day_zero_config_preview');
  }

  // device_info - computed: true, optional: false, required: false
  private _deviceInfo = new DataDnacenterPnpDeviceItemDeviceInfoList(this, "device_info", false);
  public get deviceInfo() {
    return this._deviceInfo;
  }

  // run_summary_list - computed: true, optional: false, required: false
  private _runSummaryList = new DataDnacenterPnpDeviceItemRunSummaryListStructList(this, "run_summary_list", false);
  public get runSummaryList() {
    return this._runSummaryList;
  }

  // system_reset_workflow - computed: true, optional: false, required: false
  private _systemResetWorkflow = new DataDnacenterPnpDeviceItemSystemResetWorkflowList(this, "system_reset_workflow", false);
  public get systemResetWorkflow() {
    return this._systemResetWorkflow;
  }

  // system_workflow - computed: true, optional: false, required: false
  private _systemWorkflow = new DataDnacenterPnpDeviceItemSystemWorkflowList(this, "system_workflow", false);
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
  private _workflow = new DataDnacenterPnpDeviceItemWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }

  // workflow_parameters - computed: true, optional: false, required: false
  private _workflowParameters = new DataDnacenterPnpDeviceItemWorkflowParametersList(this, "workflow_parameters", false);
  public get workflowParameters() {
    return this._workflowParameters;
  }
}

export class DataDnacenterPnpDeviceItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemOutputReference {
    return new DataDnacenterPnpDeviceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDayZeroConfig {
}

export function dataDnacenterPnpDeviceItemsDayZeroConfigToTerraform(struct?: DataDnacenterPnpDeviceItemsDayZeroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDayZeroConfigToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDayZeroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDayZeroConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDayZeroConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDayZeroConfig | undefined) {
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

export class DataDnacenterPnpDeviceItemsDayZeroConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDayZeroConfigOutputReference {
    return new DataDnacenterPnpDeviceItemsDayZeroConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentials {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoAaaCredentialsToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoAaaCredentialsToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentials | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentialsOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStruct {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoHttpHeaders {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoHttpHeadersToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoHttpHeadersToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoHttpHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoHttpHeaders | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoHttpHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoHttpHeadersOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoIpInterfaces {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoIpInterfacesToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoIpInterfacesToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoIpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoIpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoIpInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoIpInterfaces | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoIpInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoIpInterfacesOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoIpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoLocation {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoLocationToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoLocationToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoLocation | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoLocationOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinks {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoNeighborLinksToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoNeighborLinksToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinks | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinksOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpoint {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpointToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpointToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpoint | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpointOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpoint {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpointToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpointToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpoint | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpointOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStruct {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStruct | undefined) {
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
  private _primaryEndpoint = new DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListPrimaryEndpointList(this, "primary_endpoint", false);
  public get primaryEndpoint() {
    return this._primaryEndpoint;
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // secondary_endpoint - computed: true, optional: false, required: false
  private _secondaryEndpoint = new DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListSecondaryEndpointList(this, "secondary_endpoint", false);
  public get secondaryEndpoint() {
    return this._secondaryEndpoint;
  }
}

export class DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputs {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputsToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputsToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputs | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputsOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStruct {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfoStackInfo {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoStackInfoToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoStackInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoStackInfoToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfoStackInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoStackInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfoStackInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfoStackInfo | undefined) {
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
  private _stackMemberList = new DataDnacenterPnpDeviceItemsDeviceInfoStackInfoStackMemberListStructList(this, "stack_member_list", false);
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

export class DataDnacenterPnpDeviceItemsDeviceInfoStackInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoStackInfoOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoStackInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsDeviceInfo {
}

export function dataDnacenterPnpDeviceItemsDeviceInfoToTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsDeviceInfoToHclTerraform(struct?: DataDnacenterPnpDeviceItemsDeviceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsDeviceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsDeviceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsDeviceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_credentials - computed: true, optional: false, required: false
  private _aaaCredentials = new DataDnacenterPnpDeviceItemsDeviceInfoAaaCredentialsList(this, "aaa_credentials", false);
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
  private _fileSystemList = new DataDnacenterPnpDeviceItemsDeviceInfoFileSystemListStructList(this, "file_system_list", false);
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
  private _httpHeaders = new DataDnacenterPnpDeviceItemsDeviceInfoHttpHeadersList(this, "http_headers", false);
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
  private _ipInterfaces = new DataDnacenterPnpDeviceItemsDeviceInfoIpInterfacesList(this, "ip_interfaces", false);
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
  private _location = new DataDnacenterPnpDeviceItemsDeviceInfoLocationList(this, "location", false);
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
  private _neighborLinks = new DataDnacenterPnpDeviceItemsDeviceInfoNeighborLinksList(this, "neighbor_links", false);
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
  private _pnpProfileList = new DataDnacenterPnpDeviceItemsDeviceInfoPnpProfileListStructList(this, "pnp_profile_list", false);
  public get pnpProfileList() {
    return this._pnpProfileList;
  }

  // populate_inventory - computed: true, optional: false, required: false
  public get populateInventory() {
    return this.getStringAttribute('populate_inventory');
  }

  // pre_workflow_cli_ouputs - computed: true, optional: false, required: false
  private _preWorkflowCliOuputs = new DataDnacenterPnpDeviceItemsDeviceInfoPreWorkflowCliOuputsList(this, "pre_workflow_cli_ouputs", false);
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
  private _stackInfo = new DataDnacenterPnpDeviceItemsDeviceInfoStackInfoList(this, "stack_info", false);
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

export class DataDnacenterPnpDeviceItemsDeviceInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsDeviceInfoOutputReference {
    return new DataDnacenterPnpDeviceItemsDeviceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetails {
}

export function dataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetailsToTerraform(struct?: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetailsToHclTerraform(struct?: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetails | undefined) {
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

export class DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetailsOutputReference {
    return new DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStruct {
}

export function dataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfo {
}

export function dataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoToTerraform(struct?: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoToHclTerraform(struct?: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addn_details - computed: true, optional: false, required: false
  private _addnDetails = new DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoAddnDetailsList(this, "addn_details", false);
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
  private _workItemList = new DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoOutputReference {
    return new DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsRunSummaryListStruct {
}

export function dataDnacenterPnpDeviceItemsRunSummaryListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsRunSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsRunSummaryListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsRunSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsRunSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsRunSummaryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsRunSummaryListStruct | undefined) {
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
  private _historyTaskInfo = new DataDnacenterPnpDeviceItemsRunSummaryListHistoryTaskInfoList(this, "history_task_info", false);
  public get historyTaskInfo() {
    return this._historyTaskInfo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}

export class DataDnacenterPnpDeviceItemsRunSummaryListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsRunSummaryListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsRunSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStruct {
}

export function dataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsSystemResetWorkflowTasks {
}

export function dataDnacenterPnpDeviceItemsSystemResetWorkflowTasksToTerraform(struct?: DataDnacenterPnpDeviceItemsSystemResetWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsSystemResetWorkflowTasksToHclTerraform(struct?: DataDnacenterPnpDeviceItemsSystemResetWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsSystemResetWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsSystemResetWorkflowTasks | undefined) {
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
  private _workItemList = new DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksOutputReference {
    return new DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsSystemResetWorkflow {
}

export function dataDnacenterPnpDeviceItemsSystemResetWorkflowToTerraform(struct?: DataDnacenterPnpDeviceItemsSystemResetWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsSystemResetWorkflowToHclTerraform(struct?: DataDnacenterPnpDeviceItemsSystemResetWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsSystemResetWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsSystemResetWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsSystemResetWorkflow | undefined) {
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
  private _tasks = new DataDnacenterPnpDeviceItemsSystemResetWorkflowTasksList(this, "tasks", false);
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

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
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

export class DataDnacenterPnpDeviceItemsSystemResetWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsSystemResetWorkflowOutputReference {
    return new DataDnacenterPnpDeviceItemsSystemResetWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStruct {
}

export function dataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsSystemWorkflowTasks {
}

export function dataDnacenterPnpDeviceItemsSystemWorkflowTasksToTerraform(struct?: DataDnacenterPnpDeviceItemsSystemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsSystemWorkflowTasksToHclTerraform(struct?: DataDnacenterPnpDeviceItemsSystemWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsSystemWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsSystemWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsSystemWorkflowTasks | undefined) {
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
  private _workItemList = new DataDnacenterPnpDeviceItemsSystemWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class DataDnacenterPnpDeviceItemsSystemWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsSystemWorkflowTasksOutputReference {
    return new DataDnacenterPnpDeviceItemsSystemWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsSystemWorkflow {
}

export function dataDnacenterPnpDeviceItemsSystemWorkflowToTerraform(struct?: DataDnacenterPnpDeviceItemsSystemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsSystemWorkflowToHclTerraform(struct?: DataDnacenterPnpDeviceItemsSystemWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsSystemWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsSystemWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsSystemWorkflow | undefined) {
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
  private _tasks = new DataDnacenterPnpDeviceItemsSystemWorkflowTasksList(this, "tasks", false);
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

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
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

export class DataDnacenterPnpDeviceItemsSystemWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsSystemWorkflowOutputReference {
    return new DataDnacenterPnpDeviceItemsSystemWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStruct {
}

export function dataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStruct | undefined) {
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

export class DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsWorkflowTasks {
}

export function dataDnacenterPnpDeviceItemsWorkflowTasksToTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsWorkflowTasksToHclTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsWorkflowTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsWorkflowTasks | undefined) {
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
  private _workItemList = new DataDnacenterPnpDeviceItemsWorkflowTasksWorkItemListStructList(this, "work_item_list", false);
  public get workItemList() {
    return this._workItemList;
  }
}

export class DataDnacenterPnpDeviceItemsWorkflowTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsWorkflowTasksOutputReference {
    return new DataDnacenterPnpDeviceItemsWorkflowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsWorkflow {
}

export function dataDnacenterPnpDeviceItemsWorkflowToTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsWorkflowToHclTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsWorkflow | undefined) {
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
  private _tasks = new DataDnacenterPnpDeviceItemsWorkflowTasksList(this, "tasks", false);
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

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
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

export class DataDnacenterPnpDeviceItemsWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsWorkflowOutputReference {
    return new DataDnacenterPnpDeviceItemsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParameters {
}

export function dataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParametersToTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParametersToHclTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParameters | undefined) {
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

export class DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParametersOutputReference {
    return new DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStruct {
}

export function dataDnacenterPnpDeviceItemsWorkflowParametersConfigListStructToTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsWorkflowParametersConfigListStructToHclTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStruct | undefined) {
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
  private _configParameters = new DataDnacenterPnpDeviceItemsWorkflowParametersConfigListConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
}

export class DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStructOutputReference {
    return new DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItemsWorkflowParameters {
}

export function dataDnacenterPnpDeviceItemsWorkflowParametersToTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsWorkflowParametersToHclTerraform(struct?: DataDnacenterPnpDeviceItemsWorkflowParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsWorkflowParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItemsWorkflowParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItemsWorkflowParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_list - computed: true, optional: false, required: false
  private _configList = new DataDnacenterPnpDeviceItemsWorkflowParametersConfigListStructList(this, "config_list", false);
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

export class DataDnacenterPnpDeviceItemsWorkflowParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsWorkflowParametersOutputReference {
    return new DataDnacenterPnpDeviceItemsWorkflowParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpDeviceItems {
}

export function dataDnacenterPnpDeviceItemsToTerraform(struct?: DataDnacenterPnpDeviceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceItemsToHclTerraform(struct?: DataDnacenterPnpDeviceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_zero_config - computed: true, optional: false, required: false
  private _dayZeroConfig = new DataDnacenterPnpDeviceItemsDayZeroConfigList(this, "day_zero_config", false);
  public get dayZeroConfig() {
    return this._dayZeroConfig;
  }

  // day_zero_config_preview - computed: true, optional: false, required: false
  public get dayZeroConfigPreview() {
    return this.getStringAttribute('day_zero_config_preview');
  }

  // device_info - computed: true, optional: false, required: false
  private _deviceInfo = new DataDnacenterPnpDeviceItemsDeviceInfoList(this, "device_info", false);
  public get deviceInfo() {
    return this._deviceInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // run_summary_list - computed: true, optional: false, required: false
  private _runSummaryList = new DataDnacenterPnpDeviceItemsRunSummaryListStructList(this, "run_summary_list", false);
  public get runSummaryList() {
    return this._runSummaryList;
  }

  // system_reset_workflow - computed: true, optional: false, required: false
  private _systemResetWorkflow = new DataDnacenterPnpDeviceItemsSystemResetWorkflowList(this, "system_reset_workflow", false);
  public get systemResetWorkflow() {
    return this._systemResetWorkflow;
  }

  // system_workflow - computed: true, optional: false, required: false
  private _systemWorkflow = new DataDnacenterPnpDeviceItemsSystemWorkflowList(this, "system_workflow", false);
  public get systemWorkflow() {
    return this._systemWorkflow;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // workflow - computed: true, optional: false, required: false
  private _workflow = new DataDnacenterPnpDeviceItemsWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }

  // workflow_parameters - computed: true, optional: false, required: false
  private _workflowParameters = new DataDnacenterPnpDeviceItemsWorkflowParametersList(this, "workflow_parameters", false);
  public get workflowParameters() {
    return this._workflowParameters;
  }
}

export class DataDnacenterPnpDeviceItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceItemsOutputReference {
    return new DataDnacenterPnpDeviceItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device dnacenter_pnp_device}
*/
export class DataDnacenterPnpDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterPnpDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterPnpDevice to import
  * @param importFromId The id of the existing DataDnacenterPnpDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterPnpDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device dnacenter_pnp_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterPnpDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterPnpDeviceConfig = {}) {
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
    this._cmState = config.cmState;
    this._hostname = config.hostname;
    this._id = config.id;
    this._lastContact = config.lastContact;
    this._limit = config.limit;
    this._macAddress = config.macAddress;
    this._name = config.name;
    this._offset = config.offset;
    this._onbState = config.onbState;
    this._pid = config.pid;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._serialNumber = config.serialNumber;
    this._siteName = config.siteName;
    this._smartAccountId = config.smartAccountId;
    this._sort = config.sort;
    this._sortOrder = config.sortOrder;
    this._source = config.source;
    this._state = config.state;
    this._virtualAccountId = config.virtualAccountId;
    this._workflowId = config.workflowId;
    this._workflowName = config.workflowName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cm_state - computed: false, optional: true, required: false
  private _cmState?: string[]; 
  public get cmState() {
    return this.getListAttribute('cm_state');
  }
  public set cmState(value: string[]) {
    this._cmState = value;
  }
  public resetCmState() {
    this._cmState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmStateInput() {
    return this._cmState;
  }

  // hostname - computed: false, optional: true, required: false
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterPnpDeviceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterPnpDeviceItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // last_contact - computed: false, optional: true, required: false
  private _lastContact?: boolean | cdktf.IResolvable; 
  public get lastContact() {
    return this.getBooleanAttribute('last_contact');
  }
  public set lastContact(value: boolean | cdktf.IResolvable) {
    this._lastContact = value;
  }
  public resetLastContact() {
    this._lastContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastContactInput() {
    return this._lastContact;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // mac_address - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // onb_state - computed: false, optional: true, required: false
  private _onbState?: string[]; 
  public get onbState() {
    return this.getListAttribute('onb_state');
  }
  public set onbState(value: string[]) {
    this._onbState = value;
  }
  public resetOnbState() {
    this._onbState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onbStateInput() {
    return this._onbState;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: string[]; 
  public get pid() {
    return this.getListAttribute('pid');
  }
  public set pid(value: string[]) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string[]; 
  public get projectId() {
    return this.getListAttribute('project_id');
  }
  public set projectId(value: string[]) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string[]; 
  public get projectName() {
    return this.getListAttribute('project_name');
  }
  public set projectName(value: string[]) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string[]; 
  public get serialNumber() {
    return this.getListAttribute('serial_number');
  }
  public set serialNumber(value: string[]) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // site_name - computed: false, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // smart_account_id - computed: false, optional: true, required: false
  private _smartAccountId?: string[]; 
  public get smartAccountId() {
    return this.getListAttribute('smart_account_id');
  }
  public set smartAccountId(value: string[]) {
    this._smartAccountId = value;
  }
  public resetSmartAccountId() {
    this._smartAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string[]; 
  public get sort() {
    return this.getListAttribute('sort');
  }
  public set sort(value: string[]) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return this.getListAttribute('state');
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // virtual_account_id - computed: false, optional: true, required: false
  private _virtualAccountId?: string[]; 
  public get virtualAccountId() {
    return this.getListAttribute('virtual_account_id');
  }
  public set virtualAccountId(value: string[]) {
    this._virtualAccountId = value;
  }
  public resetVirtualAccountId() {
    this._virtualAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountIdInput() {
    return this._virtualAccountId;
  }

  // workflow_id - computed: false, optional: true, required: false
  private _workflowId?: string[]; 
  public get workflowId() {
    return this.getListAttribute('workflow_id');
  }
  public set workflowId(value: string[]) {
    this._workflowId = value;
  }
  public resetWorkflowId() {
    this._workflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // workflow_name - computed: false, optional: true, required: false
  private _workflowName?: string[]; 
  public get workflowName() {
    return this.getListAttribute('workflow_name');
  }
  public set workflowName(value: string[]) {
    this._workflowName = value;
  }
  public resetWorkflowName() {
    this._workflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cm_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cmState),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      last_contact: cdktf.booleanToTerraform(this._lastContact),
      limit: cdktf.numberToTerraform(this._limit),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      onb_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onbState),
      pid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pid),
      project_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectId),
      project_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectName),
      serial_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumber),
      site_name: cdktf.stringToTerraform(this._siteName),
      smart_account_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smartAccountId),
      sort: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sort),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._state),
      virtual_account_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualAccountId),
      workflow_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workflowId),
      workflow_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workflowName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cm_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cmState),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      last_contact: {
        value: cdktf.booleanToHclTerraform(this._lastContact),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._name),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      onb_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onbState),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pid),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      serial_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumber),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_account_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smartAccountId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sort: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sort),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._state),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virtual_account_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualAccountId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workflow_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workflowId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workflow_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workflowName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
