// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#id PnpGlobalSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#parameters PnpGlobalSettings#parameters}
  */
  readonly parameters: PnpGlobalSettingsParameters;
}
export interface PnpGlobalSettingsItemAaaCredentials {
}

export function pnpGlobalSettingsItemAaaCredentialsToTerraform(struct?: PnpGlobalSettingsItemAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpGlobalSettingsItemAaaCredentialsToHclTerraform(struct?: PnpGlobalSettingsItemAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpGlobalSettingsItemAaaCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsItemAaaCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsItemAaaCredentials | undefined) {
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

export class PnpGlobalSettingsItemAaaCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): PnpGlobalSettingsItemAaaCredentialsOutputReference {
    return new PnpGlobalSettingsItemAaaCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsItemDefaultProfile {
}

export function pnpGlobalSettingsItemDefaultProfileToTerraform(struct?: PnpGlobalSettingsItemDefaultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpGlobalSettingsItemDefaultProfileToHclTerraform(struct?: PnpGlobalSettingsItemDefaultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpGlobalSettingsItemDefaultProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsItemDefaultProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsItemDefaultProfile | undefined) {
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

export class PnpGlobalSettingsItemDefaultProfileList extends cdktf.ComplexList {

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
  public get(index: number): PnpGlobalSettingsItemDefaultProfileOutputReference {
    return new PnpGlobalSettingsItemDefaultProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsItemSavaMappingListProfile {
}

export function pnpGlobalSettingsItemSavaMappingListProfileToTerraform(struct?: PnpGlobalSettingsItemSavaMappingListProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpGlobalSettingsItemSavaMappingListProfileToHclTerraform(struct?: PnpGlobalSettingsItemSavaMappingListProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpGlobalSettingsItemSavaMappingListProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsItemSavaMappingListProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsItemSavaMappingListProfile | undefined) {
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

export class PnpGlobalSettingsItemSavaMappingListProfileList extends cdktf.ComplexList {

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
  public get(index: number): PnpGlobalSettingsItemSavaMappingListProfileOutputReference {
    return new PnpGlobalSettingsItemSavaMappingListProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct {
}

export function pnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructToTerraform(struct?: PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructToHclTerraform(struct?: PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStruct | undefined) {
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

export class PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructOutputReference {
    return new PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsItemSavaMappingListSyncResult {
}

export function pnpGlobalSettingsItemSavaMappingListSyncResultToTerraform(struct?: PnpGlobalSettingsItemSavaMappingListSyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpGlobalSettingsItemSavaMappingListSyncResultToHclTerraform(struct?: PnpGlobalSettingsItemSavaMappingListSyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpGlobalSettingsItemSavaMappingListSyncResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsItemSavaMappingListSyncResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsItemSavaMappingListSyncResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sync_list - computed: true, optional: false, required: false
  private _syncList = new PnpGlobalSettingsItemSavaMappingListSyncResultSyncListStructList(this, "sync_list", false);
  public get syncList() {
    return this._syncList;
  }

  // sync_msg - computed: true, optional: false, required: false
  public get syncMsg() {
    return this.getStringAttribute('sync_msg');
  }
}

export class PnpGlobalSettingsItemSavaMappingListSyncResultList extends cdktf.ComplexList {

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
  public get(index: number): PnpGlobalSettingsItemSavaMappingListSyncResultOutputReference {
    return new PnpGlobalSettingsItemSavaMappingListSyncResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsItemSavaMappingListStruct {
}

export function pnpGlobalSettingsItemSavaMappingListStructToTerraform(struct?: PnpGlobalSettingsItemSavaMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpGlobalSettingsItemSavaMappingListStructToHclTerraform(struct?: PnpGlobalSettingsItemSavaMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpGlobalSettingsItemSavaMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsItemSavaMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsItemSavaMappingListStruct | undefined) {
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
  private _profile = new PnpGlobalSettingsItemSavaMappingListProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }

  // smart_account_id - computed: true, optional: false, required: false
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }

  // sync_result - computed: true, optional: false, required: false
  private _syncResult = new PnpGlobalSettingsItemSavaMappingListSyncResultList(this, "sync_result", false);
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

export class PnpGlobalSettingsItemSavaMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): PnpGlobalSettingsItemSavaMappingListStructOutputReference {
    return new PnpGlobalSettingsItemSavaMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsItemTaskTimeOuts {
}

export function pnpGlobalSettingsItemTaskTimeOutsToTerraform(struct?: PnpGlobalSettingsItemTaskTimeOuts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpGlobalSettingsItemTaskTimeOutsToHclTerraform(struct?: PnpGlobalSettingsItemTaskTimeOuts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpGlobalSettingsItemTaskTimeOutsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsItemTaskTimeOuts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsItemTaskTimeOuts | undefined) {
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

export class PnpGlobalSettingsItemTaskTimeOutsList extends cdktf.ComplexList {

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
  public get(index: number): PnpGlobalSettingsItemTaskTimeOutsOutputReference {
    return new PnpGlobalSettingsItemTaskTimeOutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsItem {
}

export function pnpGlobalSettingsItemToTerraform(struct?: PnpGlobalSettingsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpGlobalSettingsItemToHclTerraform(struct?: PnpGlobalSettingsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpGlobalSettingsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_credentials - computed: true, optional: false, required: false
  private _aaaCredentials = new PnpGlobalSettingsItemAaaCredentialsList(this, "aaa_credentials", false);
  public get aaaCredentials() {
    return this._aaaCredentials;
  }

  // accept_eula - computed: true, optional: false, required: false
  public get acceptEula() {
    return this.getStringAttribute('accept_eula');
  }

  // default_profile - computed: true, optional: false, required: false
  private _defaultProfile = new PnpGlobalSettingsItemDefaultProfileList(this, "default_profile", false);
  public get defaultProfile() {
    return this._defaultProfile;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sava_mapping_list - computed: true, optional: false, required: false
  private _savaMappingList = new PnpGlobalSettingsItemSavaMappingListStructList(this, "sava_mapping_list", false);
  public get savaMappingList() {
    return this._savaMappingList;
  }

  // task_time_outs - computed: true, optional: false, required: false
  private _taskTimeOuts = new PnpGlobalSettingsItemTaskTimeOutsList(this, "task_time_outs", false);
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

export class PnpGlobalSettingsItemList extends cdktf.ComplexList {

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
  public get(index: number): PnpGlobalSettingsItemOutputReference {
    return new PnpGlobalSettingsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsParametersAaaCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#password PnpGlobalSettings#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#username PnpGlobalSettings#username}
  */
  readonly username?: string;
}

export function pnpGlobalSettingsParametersAaaCredentialsToTerraform(struct?: PnpGlobalSettingsParametersAaaCredentialsOutputReference | PnpGlobalSettingsParametersAaaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function pnpGlobalSettingsParametersAaaCredentialsToHclTerraform(struct?: PnpGlobalSettingsParametersAaaCredentialsOutputReference | PnpGlobalSettingsParametersAaaCredentials): any {
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

export class PnpGlobalSettingsParametersAaaCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpGlobalSettingsParametersAaaCredentials | undefined {
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

  public set internalValue(value: PnpGlobalSettingsParametersAaaCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
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

  // username - computed: false, optional: true, required: false
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
export interface PnpGlobalSettingsParametersDefaultProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#cert PnpGlobalSettings#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#fqdn_addresses PnpGlobalSettings#fqdn_addresses}
  */
  readonly fqdnAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#ip_addresses PnpGlobalSettings#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#port PnpGlobalSettings#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#proxy PnpGlobalSettings#proxy}
  */
  readonly proxy?: string;
}

export function pnpGlobalSettingsParametersDefaultProfileToTerraform(struct?: PnpGlobalSettingsParametersDefaultProfileOutputReference | PnpGlobalSettingsParametersDefaultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    fqdn_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdnAddresses),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    port: cdktf.numberToTerraform(struct!.port),
    proxy: cdktf.stringToTerraform(struct!.proxy),
  }
}


export function pnpGlobalSettingsParametersDefaultProfileToHclTerraform(struct?: PnpGlobalSettingsParametersDefaultProfileOutputReference | PnpGlobalSettingsParametersDefaultProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdnAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpGlobalSettingsParametersDefaultProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpGlobalSettingsParametersDefaultProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._fqdnAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnAddresses = this._fqdnAddresses;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsParametersDefaultProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._fqdnAddresses = undefined;
      this._ipAddresses = undefined;
      this._port = undefined;
      this._proxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._fqdnAddresses = value.fqdnAddresses;
      this._ipAddresses = value.ipAddresses;
      this._port = value.port;
      this._proxy = value.proxy;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // fqdn_addresses - computed: false, optional: true, required: false
  private _fqdnAddresses?: string[]; 
  public get fqdnAddresses() {
    return this.getListAttribute('fqdn_addresses');
  }
  public set fqdnAddresses(value: string[]) {
    this._fqdnAddresses = value;
  }
  public resetFqdnAddresses() {
    this._fqdnAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnAddressesInput() {
    return this._fqdnAddresses;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // port - computed: false, optional: true, required: false
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

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }
}
export interface PnpGlobalSettingsParametersSavaMappingListProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#address_fqdn PnpGlobalSettings#address_fqdn}
  */
  readonly addressFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#address_ip_v4 PnpGlobalSettings#address_ip_v4}
  */
  readonly addressIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#cert PnpGlobalSettings#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#make_default PnpGlobalSettings#make_default}
  */
  readonly makeDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#name PnpGlobalSettings#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#port PnpGlobalSettings#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#profile_id PnpGlobalSettings#profile_id}
  */
  readonly profileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#proxy PnpGlobalSettings#proxy}
  */
  readonly proxy?: string;
}

export function pnpGlobalSettingsParametersSavaMappingListProfileToTerraform(struct?: PnpGlobalSettingsParametersSavaMappingListProfileOutputReference | PnpGlobalSettingsParametersSavaMappingListProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_fqdn: cdktf.stringToTerraform(struct!.addressFqdn),
    address_ip_v4: cdktf.stringToTerraform(struct!.addressIpV4),
    cert: cdktf.stringToTerraform(struct!.cert),
    make_default: cdktf.stringToTerraform(struct!.makeDefault),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    proxy: cdktf.stringToTerraform(struct!.proxy),
  }
}


export function pnpGlobalSettingsParametersSavaMappingListProfileToHclTerraform(struct?: PnpGlobalSettingsParametersSavaMappingListProfileOutputReference | PnpGlobalSettingsParametersSavaMappingListProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.addressFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_ip_v4: {
      value: cdktf.stringToHclTerraform(struct!.addressIpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    make_default: {
      value: cdktf.stringToHclTerraform(struct!.makeDefault),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpGlobalSettingsParametersSavaMappingListProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpGlobalSettingsParametersSavaMappingListProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFqdn = this._addressFqdn;
    }
    if (this._addressIpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressIpV4 = this._addressIpV4;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._makeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.makeDefault = this._makeDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsParametersSavaMappingListProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressFqdn = undefined;
      this._addressIpV4 = undefined;
      this._cert = undefined;
      this._makeDefault = undefined;
      this._name = undefined;
      this._port = undefined;
      this._profileId = undefined;
      this._proxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressFqdn = value.addressFqdn;
      this._addressIpV4 = value.addressIpV4;
      this._cert = value.cert;
      this._makeDefault = value.makeDefault;
      this._name = value.name;
      this._port = value.port;
      this._profileId = value.profileId;
      this._proxy = value.proxy;
    }
  }

  // address_fqdn - computed: false, optional: true, required: false
  private _addressFqdn?: string; 
  public get addressFqdn() {
    return this.getStringAttribute('address_fqdn');
  }
  public set addressFqdn(value: string) {
    this._addressFqdn = value;
  }
  public resetAddressFqdn() {
    this._addressFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFqdnInput() {
    return this._addressFqdn;
  }

  // address_ip_v4 - computed: false, optional: true, required: false
  private _addressIpV4?: string; 
  public get addressIpV4() {
    return this.getStringAttribute('address_ip_v4');
  }
  public set addressIpV4(value: string) {
    this._addressIpV4 = value;
  }
  public resetAddressIpV4() {
    this._addressIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpV4Input() {
    return this._addressIpV4;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // make_default - computed: false, optional: true, required: false
  private _makeDefault?: string; 
  public get makeDefault() {
    return this.getStringAttribute('make_default');
  }
  public set makeDefault(value: string) {
    this._makeDefault = value;
  }
  public resetMakeDefault() {
    this._makeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makeDefaultInput() {
    return this._makeDefault;
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

  // port - computed: false, optional: true, required: false
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

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }
}
export interface PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#device_sn_list PnpGlobalSettings#device_sn_list}
  */
  readonly deviceSnList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#sync_type PnpGlobalSettings#sync_type}
  */
  readonly syncType?: string;
}

export function pnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructToTerraform(struct?: PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_sn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceSnList),
    sync_type: cdktf.stringToTerraform(struct!.syncType),
  }
}


export function pnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructToHclTerraform(struct?: PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_sn_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceSnList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sync_type: {
      value: cdktf.stringToHclTerraform(struct!.syncType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceSnList !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSnList = this._deviceSnList;
    }
    if (this._syncType !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncType = this._syncType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceSnList = undefined;
      this._syncType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceSnList = value.deviceSnList;
      this._syncType = value.syncType;
    }
  }

  // device_sn_list - computed: false, optional: true, required: false
  private _deviceSnList?: string[]; 
  public get deviceSnList() {
    return this.getListAttribute('device_sn_list');
  }
  public set deviceSnList(value: string[]) {
    this._deviceSnList = value;
  }
  public resetDeviceSnList() {
    this._deviceSnList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSnListInput() {
    return this._deviceSnList;
  }

  // sync_type - computed: false, optional: true, required: false
  private _syncType?: string; 
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
  public set syncType(value: string) {
    this._syncType = value;
  }
  public resetSyncType() {
    this._syncType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType;
  }
}

export class PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructList extends cdktf.ComplexList {
  public internalValue? : PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructOutputReference {
    return new PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsParametersSavaMappingListSyncResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#sync_msg PnpGlobalSettings#sync_msg}
  */
  readonly syncMsg?: string;
  /**
  * sync_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#sync_list PnpGlobalSettings#sync_list}
  */
  readonly syncList?: PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStruct[] | cdktf.IResolvable;
}

export function pnpGlobalSettingsParametersSavaMappingListSyncResultToTerraform(struct?: PnpGlobalSettingsParametersSavaMappingListSyncResultOutputReference | PnpGlobalSettingsParametersSavaMappingListSyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_msg: cdktf.stringToTerraform(struct!.syncMsg),
    sync_list: cdktf.listMapper(pnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructToTerraform, true)(struct!.syncList),
  }
}


export function pnpGlobalSettingsParametersSavaMappingListSyncResultToHclTerraform(struct?: PnpGlobalSettingsParametersSavaMappingListSyncResultOutputReference | PnpGlobalSettingsParametersSavaMappingListSyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_msg: {
      value: cdktf.stringToHclTerraform(struct!.syncMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_list: {
      value: cdktf.listMapperHcl(pnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructToHclTerraform, true)(struct!.syncList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpGlobalSettingsParametersSavaMappingListSyncResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpGlobalSettingsParametersSavaMappingListSyncResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMsg = this._syncMsg;
    }
    if (this._syncList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncList = this._syncList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsParametersSavaMappingListSyncResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncMsg = undefined;
      this._syncList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncMsg = value.syncMsg;
      this._syncList.internalValue = value.syncList;
    }
  }

  // sync_msg - computed: false, optional: true, required: false
  private _syncMsg?: string; 
  public get syncMsg() {
    return this.getStringAttribute('sync_msg');
  }
  public set syncMsg(value: string) {
    this._syncMsg = value;
  }
  public resetSyncMsg() {
    this._syncMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMsgInput() {
    return this._syncMsg;
  }

  // sync_list - computed: false, optional: true, required: false
  private _syncList = new PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStructList(this, "sync_list", false);
  public get syncList() {
    return this._syncList;
  }
  public putSyncList(value: PnpGlobalSettingsParametersSavaMappingListSyncResultSyncListStruct[] | cdktf.IResolvable) {
    this._syncList.internalValue = value;
  }
  public resetSyncList() {
    this._syncList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncListInput() {
    return this._syncList.internalValue;
  }
}
export interface PnpGlobalSettingsParametersSavaMappingListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#auto_sync_period PnpGlobalSettings#auto_sync_period}
  */
  readonly autoSyncPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#cco_user PnpGlobalSettings#cco_user}
  */
  readonly ccoUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#expiry PnpGlobalSettings#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#last_sync PnpGlobalSettings#last_sync}
  */
  readonly lastSync?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#smart_account_id PnpGlobalSettings#smart_account_id}
  */
  readonly smartAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#sync_result_str PnpGlobalSettings#sync_result_str}
  */
  readonly syncResultStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#sync_start_time PnpGlobalSettings#sync_start_time}
  */
  readonly syncStartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#sync_status PnpGlobalSettings#sync_status}
  */
  readonly syncStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#tenant_id PnpGlobalSettings#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#token PnpGlobalSettings#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#virtual_account_id PnpGlobalSettings#virtual_account_id}
  */
  readonly virtualAccountId?: string;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#profile PnpGlobalSettings#profile}
  */
  readonly profile?: PnpGlobalSettingsParametersSavaMappingListProfile;
  /**
  * sync_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#sync_result PnpGlobalSettings#sync_result}
  */
  readonly syncResult?: PnpGlobalSettingsParametersSavaMappingListSyncResult;
}

export function pnpGlobalSettingsParametersSavaMappingListStructToTerraform(struct?: PnpGlobalSettingsParametersSavaMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_sync_period: cdktf.numberToTerraform(struct!.autoSyncPeriod),
    cco_user: cdktf.stringToTerraform(struct!.ccoUser),
    expiry: cdktf.numberToTerraform(struct!.expiry),
    last_sync: cdktf.numberToTerraform(struct!.lastSync),
    smart_account_id: cdktf.stringToTerraform(struct!.smartAccountId),
    sync_result_str: cdktf.stringToTerraform(struct!.syncResultStr),
    sync_start_time: cdktf.numberToTerraform(struct!.syncStartTime),
    sync_status: cdktf.stringToTerraform(struct!.syncStatus),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    token: cdktf.stringToTerraform(struct!.token),
    virtual_account_id: cdktf.stringToTerraform(struct!.virtualAccountId),
    profile: pnpGlobalSettingsParametersSavaMappingListProfileToTerraform(struct!.profile),
    sync_result: pnpGlobalSettingsParametersSavaMappingListSyncResultToTerraform(struct!.syncResult),
  }
}


export function pnpGlobalSettingsParametersSavaMappingListStructToHclTerraform(struct?: PnpGlobalSettingsParametersSavaMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_sync_period: {
      value: cdktf.numberToHclTerraform(struct!.autoSyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cco_user: {
      value: cdktf.stringToHclTerraform(struct!.ccoUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_sync: {
      value: cdktf.numberToHclTerraform(struct!.lastSync),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_account_id: {
      value: cdktf.stringToHclTerraform(struct!.smartAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_result_str: {
      value: cdktf.stringToHclTerraform(struct!.syncResultStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_start_time: {
      value: cdktf.numberToHclTerraform(struct!.syncStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_status: {
      value: cdktf.stringToHclTerraform(struct!.syncStatus),
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
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_account_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: pnpGlobalSettingsParametersSavaMappingListProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "PnpGlobalSettingsParametersSavaMappingListProfileList",
    },
    sync_result: {
      value: pnpGlobalSettingsParametersSavaMappingListSyncResultToHclTerraform(struct!.syncResult),
      isBlock: true,
      type: "list",
      storageClassType: "PnpGlobalSettingsParametersSavaMappingListSyncResultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpGlobalSettingsParametersSavaMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpGlobalSettingsParametersSavaMappingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSyncPeriod = this._autoSyncPeriod;
    }
    if (this._ccoUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccoUser = this._ccoUser;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._lastSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSync = this._lastSync;
    }
    if (this._smartAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartAccountId = this._smartAccountId;
    }
    if (this._syncResultStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncResultStr = this._syncResultStr;
    }
    if (this._syncStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncStartTime = this._syncStartTime;
    }
    if (this._syncStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncStatus = this._syncStatus;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._virtualAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualAccountId = this._virtualAccountId;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._syncResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncResult = this._syncResult?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsParametersSavaMappingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSyncPeriod = undefined;
      this._ccoUser = undefined;
      this._expiry = undefined;
      this._lastSync = undefined;
      this._smartAccountId = undefined;
      this._syncResultStr = undefined;
      this._syncStartTime = undefined;
      this._syncStatus = undefined;
      this._tenantId = undefined;
      this._token = undefined;
      this._virtualAccountId = undefined;
      this._profile.internalValue = undefined;
      this._syncResult.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSyncPeriod = value.autoSyncPeriod;
      this._ccoUser = value.ccoUser;
      this._expiry = value.expiry;
      this._lastSync = value.lastSync;
      this._smartAccountId = value.smartAccountId;
      this._syncResultStr = value.syncResultStr;
      this._syncStartTime = value.syncStartTime;
      this._syncStatus = value.syncStatus;
      this._tenantId = value.tenantId;
      this._token = value.token;
      this._virtualAccountId = value.virtualAccountId;
      this._profile.internalValue = value.profile;
      this._syncResult.internalValue = value.syncResult;
    }
  }

  // auto_sync_period - computed: false, optional: true, required: false
  private _autoSyncPeriod?: number; 
  public get autoSyncPeriod() {
    return this.getNumberAttribute('auto_sync_period');
  }
  public set autoSyncPeriod(value: number) {
    this._autoSyncPeriod = value;
  }
  public resetAutoSyncPeriod() {
    this._autoSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncPeriodInput() {
    return this._autoSyncPeriod;
  }

  // cco_user - computed: false, optional: true, required: false
  private _ccoUser?: string; 
  public get ccoUser() {
    return this.getStringAttribute('cco_user');
  }
  public set ccoUser(value: string) {
    this._ccoUser = value;
  }
  public resetCcoUser() {
    this._ccoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccoUserInput() {
    return this._ccoUser;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // last_sync - computed: false, optional: true, required: false
  private _lastSync?: number; 
  public get lastSync() {
    return this.getNumberAttribute('last_sync');
  }
  public set lastSync(value: number) {
    this._lastSync = value;
  }
  public resetLastSync() {
    this._lastSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSyncInput() {
    return this._lastSync;
  }

  // smart_account_id - computed: false, optional: true, required: false
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

  // sync_result_str - computed: false, optional: true, required: false
  private _syncResultStr?: string; 
  public get syncResultStr() {
    return this.getStringAttribute('sync_result_str');
  }
  public set syncResultStr(value: string) {
    this._syncResultStr = value;
  }
  public resetSyncResultStr() {
    this._syncResultStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncResultStrInput() {
    return this._syncResultStr;
  }

  // sync_start_time - computed: false, optional: true, required: false
  private _syncStartTime?: number; 
  public get syncStartTime() {
    return this.getNumberAttribute('sync_start_time');
  }
  public set syncStartTime(value: number) {
    this._syncStartTime = value;
  }
  public resetSyncStartTime() {
    this._syncStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStartTimeInput() {
    return this._syncStartTime;
  }

  // sync_status - computed: false, optional: true, required: false
  private _syncStatus?: string; 
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }
  public set syncStatus(value: string) {
    this._syncStatus = value;
  }
  public resetSyncStatus() {
    this._syncStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStatusInput() {
    return this._syncStatus;
  }

  // tenant_id - computed: false, optional: true, required: false
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // virtual_account_id - computed: false, optional: true, required: false
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

  // profile - computed: false, optional: true, required: false
  private _profile = new PnpGlobalSettingsParametersSavaMappingListProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: PnpGlobalSettingsParametersSavaMappingListProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // sync_result - computed: false, optional: true, required: false
  private _syncResult = new PnpGlobalSettingsParametersSavaMappingListSyncResultOutputReference(this, "sync_result");
  public get syncResult() {
    return this._syncResult;
  }
  public putSyncResult(value: PnpGlobalSettingsParametersSavaMappingListSyncResult) {
    this._syncResult.internalValue = value;
  }
  public resetSyncResult() {
    this._syncResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncResultInput() {
    return this._syncResult.internalValue;
  }
}

export class PnpGlobalSettingsParametersSavaMappingListStructList extends cdktf.ComplexList {
  public internalValue? : PnpGlobalSettingsParametersSavaMappingListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpGlobalSettingsParametersSavaMappingListStructOutputReference {
    return new PnpGlobalSettingsParametersSavaMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpGlobalSettingsParametersTaskTimeOuts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#config_time_out PnpGlobalSettings#config_time_out}
  */
  readonly configTimeOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#general_time_out PnpGlobalSettings#general_time_out}
  */
  readonly generalTimeOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#image_download_time_out PnpGlobalSettings#image_download_time_out}
  */
  readonly imageDownloadTimeOut?: number;
}

export function pnpGlobalSettingsParametersTaskTimeOutsToTerraform(struct?: PnpGlobalSettingsParametersTaskTimeOutsOutputReference | PnpGlobalSettingsParametersTaskTimeOuts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_time_out: cdktf.numberToTerraform(struct!.configTimeOut),
    general_time_out: cdktf.numberToTerraform(struct!.generalTimeOut),
    image_download_time_out: cdktf.numberToTerraform(struct!.imageDownloadTimeOut),
  }
}


export function pnpGlobalSettingsParametersTaskTimeOutsToHclTerraform(struct?: PnpGlobalSettingsParametersTaskTimeOutsOutputReference | PnpGlobalSettingsParametersTaskTimeOuts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_time_out: {
      value: cdktf.numberToHclTerraform(struct!.configTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    general_time_out: {
      value: cdktf.numberToHclTerraform(struct!.generalTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_download_time_out: {
      value: cdktf.numberToHclTerraform(struct!.imageDownloadTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpGlobalSettingsParametersTaskTimeOutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpGlobalSettingsParametersTaskTimeOuts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.configTimeOut = this._configTimeOut;
    }
    if (this._generalTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.generalTimeOut = this._generalTimeOut;
    }
    if (this._imageDownloadTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDownloadTimeOut = this._imageDownloadTimeOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsParametersTaskTimeOuts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configTimeOut = undefined;
      this._generalTimeOut = undefined;
      this._imageDownloadTimeOut = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configTimeOut = value.configTimeOut;
      this._generalTimeOut = value.generalTimeOut;
      this._imageDownloadTimeOut = value.imageDownloadTimeOut;
    }
  }

  // config_time_out - computed: false, optional: true, required: false
  private _configTimeOut?: number; 
  public get configTimeOut() {
    return this.getNumberAttribute('config_time_out');
  }
  public set configTimeOut(value: number) {
    this._configTimeOut = value;
  }
  public resetConfigTimeOut() {
    this._configTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTimeOutInput() {
    return this._configTimeOut;
  }

  // general_time_out - computed: false, optional: true, required: false
  private _generalTimeOut?: number; 
  public get generalTimeOut() {
    return this.getNumberAttribute('general_time_out');
  }
  public set generalTimeOut(value: number) {
    this._generalTimeOut = value;
  }
  public resetGeneralTimeOut() {
    this._generalTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalTimeOutInput() {
    return this._generalTimeOut;
  }

  // image_download_time_out - computed: false, optional: true, required: false
  private _imageDownloadTimeOut?: number; 
  public get imageDownloadTimeOut() {
    return this.getNumberAttribute('image_download_time_out');
  }
  public set imageDownloadTimeOut(value: number) {
    this._imageDownloadTimeOut = value;
  }
  public resetImageDownloadTimeOut() {
    this._imageDownloadTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDownloadTimeOutInput() {
    return this._imageDownloadTimeOut;
  }
}
export interface PnpGlobalSettingsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#accept_eula PnpGlobalSettings#accept_eula}
  */
  readonly acceptEula?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#id PnpGlobalSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#tenant_id PnpGlobalSettings#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#version PnpGlobalSettings#version}
  */
  readonly version?: number;
  /**
  * aaa_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#aaa_credentials PnpGlobalSettings#aaa_credentials}
  */
  readonly aaaCredentials?: PnpGlobalSettingsParametersAaaCredentials;
  /**
  * default_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#default_profile PnpGlobalSettings#default_profile}
  */
  readonly defaultProfile?: PnpGlobalSettingsParametersDefaultProfile;
  /**
  * sava_mapping_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#sava_mapping_list PnpGlobalSettings#sava_mapping_list}
  */
  readonly savaMappingList?: PnpGlobalSettingsParametersSavaMappingListStruct[] | cdktf.IResolvable;
  /**
  * task_time_outs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#task_time_outs PnpGlobalSettings#task_time_outs}
  */
  readonly taskTimeOuts?: PnpGlobalSettingsParametersTaskTimeOuts;
}

export function pnpGlobalSettingsParametersToTerraform(struct?: PnpGlobalSettingsParametersOutputReference | PnpGlobalSettingsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_eula: cdktf.stringToTerraform(struct!.acceptEula),
    id: cdktf.stringToTerraform(struct!.id),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    version: cdktf.numberToTerraform(struct!.version),
    aaa_credentials: pnpGlobalSettingsParametersAaaCredentialsToTerraform(struct!.aaaCredentials),
    default_profile: pnpGlobalSettingsParametersDefaultProfileToTerraform(struct!.defaultProfile),
    sava_mapping_list: cdktf.listMapper(pnpGlobalSettingsParametersSavaMappingListStructToTerraform, true)(struct!.savaMappingList),
    task_time_outs: pnpGlobalSettingsParametersTaskTimeOutsToTerraform(struct!.taskTimeOuts),
  }
}


export function pnpGlobalSettingsParametersToHclTerraform(struct?: PnpGlobalSettingsParametersOutputReference | PnpGlobalSettingsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_eula: {
      value: cdktf.stringToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    aaa_credentials: {
      value: pnpGlobalSettingsParametersAaaCredentialsToHclTerraform(struct!.aaaCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "PnpGlobalSettingsParametersAaaCredentialsList",
    },
    default_profile: {
      value: pnpGlobalSettingsParametersDefaultProfileToHclTerraform(struct!.defaultProfile),
      isBlock: true,
      type: "list",
      storageClassType: "PnpGlobalSettingsParametersDefaultProfileList",
    },
    sava_mapping_list: {
      value: cdktf.listMapperHcl(pnpGlobalSettingsParametersSavaMappingListStructToHclTerraform, true)(struct!.savaMappingList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpGlobalSettingsParametersSavaMappingListStructList",
    },
    task_time_outs: {
      value: pnpGlobalSettingsParametersTaskTimeOutsToHclTerraform(struct!.taskTimeOuts),
      isBlock: true,
      type: "list",
      storageClassType: "PnpGlobalSettingsParametersTaskTimeOutsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpGlobalSettingsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpGlobalSettingsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
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
    if (this._aaaCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaCredentials = this._aaaCredentials?.internalValue;
    }
    if (this._defaultProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultProfile = this._defaultProfile?.internalValue;
    }
    if (this._savaMappingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savaMappingList = this._savaMappingList?.internalValue;
    }
    if (this._taskTimeOuts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTimeOuts = this._taskTimeOuts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpGlobalSettingsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptEula = undefined;
      this._id = undefined;
      this._tenantId = undefined;
      this._version = undefined;
      this._aaaCredentials.internalValue = undefined;
      this._defaultProfile.internalValue = undefined;
      this._savaMappingList.internalValue = undefined;
      this._taskTimeOuts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptEula = value.acceptEula;
      this._id = value.id;
      this._tenantId = value.tenantId;
      this._version = value.version;
      this._aaaCredentials.internalValue = value.aaaCredentials;
      this._defaultProfile.internalValue = value.defaultProfile;
      this._savaMappingList.internalValue = value.savaMappingList;
      this._taskTimeOuts.internalValue = value.taskTimeOuts;
    }
  }

  // accept_eula - computed: false, optional: true, required: false
  private _acceptEula?: string; 
  public get acceptEula() {
    return this.getStringAttribute('accept_eula');
  }
  public set acceptEula(value: string) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
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

  // tenant_id - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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

  // aaa_credentials - computed: false, optional: true, required: false
  private _aaaCredentials = new PnpGlobalSettingsParametersAaaCredentialsOutputReference(this, "aaa_credentials");
  public get aaaCredentials() {
    return this._aaaCredentials;
  }
  public putAaaCredentials(value: PnpGlobalSettingsParametersAaaCredentials) {
    this._aaaCredentials.internalValue = value;
  }
  public resetAaaCredentials() {
    this._aaaCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaCredentialsInput() {
    return this._aaaCredentials.internalValue;
  }

  // default_profile - computed: false, optional: true, required: false
  private _defaultProfile = new PnpGlobalSettingsParametersDefaultProfileOutputReference(this, "default_profile");
  public get defaultProfile() {
    return this._defaultProfile;
  }
  public putDefaultProfile(value: PnpGlobalSettingsParametersDefaultProfile) {
    this._defaultProfile.internalValue = value;
  }
  public resetDefaultProfile() {
    this._defaultProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProfileInput() {
    return this._defaultProfile.internalValue;
  }

  // sava_mapping_list - computed: false, optional: true, required: false
  private _savaMappingList = new PnpGlobalSettingsParametersSavaMappingListStructList(this, "sava_mapping_list", false);
  public get savaMappingList() {
    return this._savaMappingList;
  }
  public putSavaMappingList(value: PnpGlobalSettingsParametersSavaMappingListStruct[] | cdktf.IResolvable) {
    this._savaMappingList.internalValue = value;
  }
  public resetSavaMappingList() {
    this._savaMappingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savaMappingListInput() {
    return this._savaMappingList.internalValue;
  }

  // task_time_outs - computed: false, optional: true, required: false
  private _taskTimeOuts = new PnpGlobalSettingsParametersTaskTimeOutsOutputReference(this, "task_time_outs");
  public get taskTimeOuts() {
    return this._taskTimeOuts;
  }
  public putTaskTimeOuts(value: PnpGlobalSettingsParametersTaskTimeOuts) {
    this._taskTimeOuts.internalValue = value;
  }
  public resetTaskTimeOuts() {
    this._taskTimeOuts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTimeOutsInput() {
    return this._taskTimeOuts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings dnacenter_pnp_global_settings}
*/
export class PnpGlobalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpGlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpGlobalSettings to import
  * @param importFromId The id of the existing PnpGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpGlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_global_settings dnacenter_pnp_global_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpGlobalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: PnpGlobalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
  private _item = new PnpGlobalSettingsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new PnpGlobalSettingsParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PnpGlobalSettingsParameters) {
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
      parameters: pnpGlobalSettingsParametersToTerraform(this._parameters.internalValue),
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
        value: pnpGlobalSettingsParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpGlobalSettingsParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
