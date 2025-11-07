// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterPnpGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_global_settings#id DataDnacenterPnpGlobalSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterPnpGlobalSettingsItemAaaCredentials {
}

export function dataDnacenterPnpGlobalSettingsItemAaaCredentialsToTerraform(struct?: DataDnacenterPnpGlobalSettingsItemAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpGlobalSettingsItemAaaCredentialsToHclTerraform(struct?: DataDnacenterPnpGlobalSettingsItemAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpGlobalSettingsItemAaaCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpGlobalSettingsItemAaaCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpGlobalSettingsItemAaaCredentials | undefined) {
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

export class DataDnacenterPnpGlobalSettingsItemAaaCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpGlobalSettingsItemAaaCredentialsOutputReference {
    return new DataDnacenterPnpGlobalSettingsItemAaaCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpGlobalSettingsItemDefaultProfile {
}

export function dataDnacenterPnpGlobalSettingsItemDefaultProfileToTerraform(struct?: DataDnacenterPnpGlobalSettingsItemDefaultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpGlobalSettingsItemDefaultProfileToHclTerraform(struct?: DataDnacenterPnpGlobalSettingsItemDefaultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpGlobalSettingsItemDefaultProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpGlobalSettingsItemDefaultProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpGlobalSettingsItemDefaultProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // fqdn_addresses - computed: true, optional: false, required: false
  public get fqdnAddresses() {
    return this.getListAttribute('fqdn_addresses');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // proxy - computed: true, optional: false, required: false
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
}

export class DataDnacenterPnpGlobalSettingsItemDefaultProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpGlobalSettingsItemDefaultProfileOutputReference {
    return new DataDnacenterPnpGlobalSettingsItemDefaultProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpGlobalSettingsItemSavaMappingListProfile {
}

export function dataDnacenterPnpGlobalSettingsItemSavaMappingListProfileToTerraform(struct?: DataDnacenterPnpGlobalSettingsItemSavaMappingListProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpGlobalSettingsItemSavaMappingListProfileToHclTerraform(struct?: DataDnacenterPnpGlobalSettingsItemSavaMappingListProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpGlobalSettingsItemSavaMappingListProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpGlobalSettingsItemSavaMappingListProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpGlobalSettingsItemSavaMappingListProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_fqdn - computed: true, optional: false, required: false
  public get addressFqdn() {
    return this.getStringAttribute('address_fqdn');
  }

  // address_ip_v4 - computed: true, optional: false, required: false
  public get addressIpV4() {
    return this.getStringAttribute('address_ip_v4');
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // make_default - computed: true, optional: false, required: false
  public get makeDefault() {
    return this.getStringAttribute('make_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // proxy - computed: true, optional: false, required: false
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
}

export class DataDnacenterPnpGlobalSettingsItemSavaMappingListProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpGlobalSettingsItemSavaMappingListProfileOutputReference {
    return new DataDnacenterPnpGlobalSettingsItemSavaMappingListProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct {
}

export function dataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructToTerraform(struct?: DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructToHclTerraform(struct?: DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_sn_list - computed: true, optional: false, required: false
  public get deviceSnList() {
    return this.getListAttribute('device_sn_list');
  }

  // sync_type - computed: true, optional: false, required: false
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
}

export class DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructOutputReference {
    return new DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResult {
}

export function dataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultToTerraform(struct?: DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultToHclTerraform(struct?: DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sync_list - computed: true, optional: false, required: false
  private _syncList = new DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructList(this, "sync_list", false);
  public get syncList() {
    return this._syncList;
  }

  // sync_msg - computed: true, optional: false, required: false
  public get syncMsg() {
    return this.getStringAttribute('sync_msg');
  }
}

export class DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultOutputReference {
    return new DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpGlobalSettingsItemSavaMappingListStruct {
}

export function dataDnacenterPnpGlobalSettingsItemSavaMappingListStructToTerraform(struct?: DataDnacenterPnpGlobalSettingsItemSavaMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpGlobalSettingsItemSavaMappingListStructToHclTerraform(struct?: DataDnacenterPnpGlobalSettingsItemSavaMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpGlobalSettingsItemSavaMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpGlobalSettingsItemSavaMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpGlobalSettingsItemSavaMappingListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_sync_period - computed: true, optional: false, required: false
  public get autoSyncPeriod() {
    return this.getNumberAttribute('auto_sync_period');
  }

  // cco_user - computed: true, optional: false, required: false
  public get ccoUser() {
    return this.getStringAttribute('cco_user');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }

  // last_sync - computed: true, optional: false, required: false
  public get lastSync() {
    return this.getNumberAttribute('last_sync');
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new DataDnacenterPnpGlobalSettingsItemSavaMappingListProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }

  // smart_account_id - computed: true, optional: false, required: false
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }

  // sync_result - computed: true, optional: false, required: false
  private _syncResult = new DataDnacenterPnpGlobalSettingsItemSavaMappingListSyncResultList(this, "sync_result", false);
  public get syncResult() {
    return this._syncResult;
  }

  // sync_result_str - computed: true, optional: false, required: false
  public get syncResultStr() {
    return this.getStringAttribute('sync_result_str');
  }

  // sync_start_time - computed: true, optional: false, required: false
  public get syncStartTime() {
    return this.getNumberAttribute('sync_start_time');
  }

  // sync_status - computed: true, optional: false, required: false
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // virtual_account_id - computed: true, optional: false, required: false
  public get virtualAccountId() {
    return this.getStringAttribute('virtual_account_id');
  }
}

export class DataDnacenterPnpGlobalSettingsItemSavaMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpGlobalSettingsItemSavaMappingListStructOutputReference {
    return new DataDnacenterPnpGlobalSettingsItemSavaMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpGlobalSettingsItemTaskTimeOuts {
}

export function dataDnacenterPnpGlobalSettingsItemTaskTimeOutsToTerraform(struct?: DataDnacenterPnpGlobalSettingsItemTaskTimeOuts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpGlobalSettingsItemTaskTimeOutsToHclTerraform(struct?: DataDnacenterPnpGlobalSettingsItemTaskTimeOuts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpGlobalSettingsItemTaskTimeOutsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpGlobalSettingsItemTaskTimeOuts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpGlobalSettingsItemTaskTimeOuts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_time_out - computed: true, optional: false, required: false
  public get configTimeOut() {
    return this.getNumberAttribute('config_time_out');
  }

  // general_time_out - computed: true, optional: false, required: false
  public get generalTimeOut() {
    return this.getNumberAttribute('general_time_out');
  }

  // image_download_time_out - computed: true, optional: false, required: false
  public get imageDownloadTimeOut() {
    return this.getNumberAttribute('image_download_time_out');
  }
}

export class DataDnacenterPnpGlobalSettingsItemTaskTimeOutsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpGlobalSettingsItemTaskTimeOutsOutputReference {
    return new DataDnacenterPnpGlobalSettingsItemTaskTimeOutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPnpGlobalSettingsItem {
}

export function dataDnacenterPnpGlobalSettingsItemToTerraform(struct?: DataDnacenterPnpGlobalSettingsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpGlobalSettingsItemToHclTerraform(struct?: DataDnacenterPnpGlobalSettingsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpGlobalSettingsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpGlobalSettingsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpGlobalSettingsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_credentials - computed: true, optional: false, required: false
  private _aaaCredentials = new DataDnacenterPnpGlobalSettingsItemAaaCredentialsList(this, "aaa_credentials", false);
  public get aaaCredentials() {
    return this._aaaCredentials;
  }

  // accept_eula - computed: true, optional: false, required: false
  public get acceptEula() {
    return this.getStringAttribute('accept_eula');
  }

  // default_profile - computed: true, optional: false, required: false
  private _defaultProfile = new DataDnacenterPnpGlobalSettingsItemDefaultProfileList(this, "default_profile", false);
  public get defaultProfile() {
    return this._defaultProfile;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sava_mapping_list - computed: true, optional: false, required: false
  private _savaMappingList = new DataDnacenterPnpGlobalSettingsItemSavaMappingListStructList(this, "sava_mapping_list", false);
  public get savaMappingList() {
    return this._savaMappingList;
  }

  // task_time_outs - computed: true, optional: false, required: false
  private _taskTimeOuts = new DataDnacenterPnpGlobalSettingsItemTaskTimeOutsList(this, "task_time_outs", false);
  public get taskTimeOuts() {
    return this._taskTimeOuts;
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
}

export class DataDnacenterPnpGlobalSettingsItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpGlobalSettingsItemOutputReference {
    return new DataDnacenterPnpGlobalSettingsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_global_settings dnacenter_pnp_global_settings}
*/
export class DataDnacenterPnpGlobalSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterPnpGlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterPnpGlobalSettings to import
  * @param importFromId The id of the existing DataDnacenterPnpGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterPnpGlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_global_settings dnacenter_pnp_global_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterPnpGlobalSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterPnpGlobalSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_global_settings',
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
  private _item = new DataDnacenterPnpGlobalSettingsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
