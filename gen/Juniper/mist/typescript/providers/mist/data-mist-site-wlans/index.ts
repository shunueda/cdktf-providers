// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_wlans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistSiteWlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_wlans#site_id DataMistSiteWlans#site_id}
  */
  readonly siteId: string;
}
export interface DataMistSiteWlansSiteWlansAcctServers {
}

export function dataMistSiteWlansSiteWlansAcctServersToTerraform(struct?: DataMistSiteWlansSiteWlansAcctServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansAcctServersToHclTerraform(struct?: DataMistSiteWlansSiteWlansAcctServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansAcctServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistSiteWlansSiteWlansAcctServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansAcctServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // keywrap_enabled - computed: true, optional: false, required: false
  public get keywrapEnabled() {
    return this.getBooleanAttribute('keywrap_enabled');
  }

  // keywrap_format - computed: true, optional: false, required: false
  public get keywrapFormat() {
    return this.getStringAttribute('keywrap_format');
  }

  // keywrap_kek - computed: true, optional: false, required: false
  public get keywrapKek() {
    return this.getStringAttribute('keywrap_kek');
  }

  // keywrap_mack - computed: true, optional: false, required: false
  public get keywrapMack() {
    return this.getStringAttribute('keywrap_mack');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataMistSiteWlansSiteWlansAcctServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMistSiteWlansSiteWlansAcctServersOutputReference {
    return new DataMistSiteWlansSiteWlansAcctServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistSiteWlansSiteWlansAirwatch {
}

export function dataMistSiteWlansSiteWlansAirwatchToTerraform(struct?: DataMistSiteWlansSiteWlansAirwatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansAirwatchToHclTerraform(struct?: DataMistSiteWlansSiteWlansAirwatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansAirwatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansAirwatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansAirwatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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
export interface DataMistSiteWlansSiteWlansAppLimit {
}

export function dataMistSiteWlansSiteWlansAppLimitToTerraform(struct?: DataMistSiteWlansSiteWlansAppLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansAppLimitToHclTerraform(struct?: DataMistSiteWlansSiteWlansAppLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansAppLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansAppLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansAppLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new cdktf.NumberMap(this, "apps");
  public get apps() {
    return this._apps;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // wxtag_ids - computed: true, optional: false, required: false
  private _wxtagIds = new cdktf.NumberMap(this, "wxtag_ids");
  public get wxtagIds() {
    return this._wxtagIds;
  }
}
export interface DataMistSiteWlansSiteWlansAppQosApps {
}

export function dataMistSiteWlansSiteWlansAppQosAppsToTerraform(struct?: DataMistSiteWlansSiteWlansAppQosApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansAppQosAppsToHclTerraform(struct?: DataMistSiteWlansSiteWlansAppQosApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansAppQosAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansAppQosApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansAppQosApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // dst_subnet - computed: true, optional: false, required: false
  public get dstSubnet() {
    return this.getStringAttribute('dst_subnet');
  }

  // src_subnet - computed: true, optional: false, required: false
  public get srcSubnet() {
    return this.getStringAttribute('src_subnet');
  }
}

export class DataMistSiteWlansSiteWlansAppQosAppsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistSiteWlansSiteWlansAppQosAppsOutputReference {
    return new DataMistSiteWlansSiteWlansAppQosAppsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistSiteWlansSiteWlansAppQosOthers {
}

export function dataMistSiteWlansSiteWlansAppQosOthersToTerraform(struct?: DataMistSiteWlansSiteWlansAppQosOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansAppQosOthersToHclTerraform(struct?: DataMistSiteWlansSiteWlansAppQosOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansAppQosOthersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistSiteWlansSiteWlansAppQosOthers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansAppQosOthers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // dst_subnet - computed: true, optional: false, required: false
  public get dstSubnet() {
    return this.getStringAttribute('dst_subnet');
  }

  // port_ranges - computed: true, optional: false, required: false
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // src_subnet - computed: true, optional: false, required: false
  public get srcSubnet() {
    return this.getStringAttribute('src_subnet');
  }
}

export class DataMistSiteWlansSiteWlansAppQosOthersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMistSiteWlansSiteWlansAppQosOthersOutputReference {
    return new DataMistSiteWlansSiteWlansAppQosOthersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistSiteWlansSiteWlansAppQos {
}

export function dataMistSiteWlansSiteWlansAppQosToTerraform(struct?: DataMistSiteWlansSiteWlansAppQos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansAppQosToHclTerraform(struct?: DataMistSiteWlansSiteWlansAppQos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansAppQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansAppQos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansAppQos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new DataMistSiteWlansSiteWlansAppQosAppsMap(this, "apps");
  public get apps() {
    return this._apps;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // others - computed: true, optional: false, required: false
  private _others = new DataMistSiteWlansSiteWlansAppQosOthersList(this, "others", false);
  public get others() {
    return this._others;
  }
}
export interface DataMistSiteWlansSiteWlansAuth {
}

export function dataMistSiteWlansSiteWlansAuthToTerraform(struct?: DataMistSiteWlansSiteWlansAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansAuthToHclTerraform(struct?: DataMistSiteWlansSiteWlansAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anticlog_threshold - computed: true, optional: false, required: false
  public get anticlogThreshold() {
    return this.getNumberAttribute('anticlog_threshold');
  }

  // eap_reauth - computed: true, optional: false, required: false
  public get eapReauth() {
    return this.getBooleanAttribute('eap_reauth');
  }

  // enable_mac_auth - computed: true, optional: false, required: false
  public get enableMacAuth() {
    return this.getBooleanAttribute('enable_mac_auth');
  }

  // key_idx - computed: true, optional: false, required: false
  public get keyIdx() {
    return this.getNumberAttribute('key_idx');
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // multi_psk_only - computed: true, optional: false, required: false
  public get multiPskOnly() {
    return this.getBooleanAttribute('multi_psk_only');
  }

  // owe - computed: true, optional: false, required: false
  public get owe() {
    return this.getStringAttribute('owe');
  }

  // pairwise - computed: true, optional: false, required: false
  public get pairwise() {
    return this.getListAttribute('pairwise');
  }

  // private_wlan - computed: true, optional: false, required: false
  public get privateWlan() {
    return this.getBooleanAttribute('private_wlan');
  }

  // psk - computed: true, optional: false, required: false
  public get psk() {
    return this.getStringAttribute('psk');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // wep_as_secondary_auth - computed: true, optional: false, required: false
  public get wepAsSecondaryAuth() {
    return this.getBooleanAttribute('wep_as_secondary_auth');
  }
}
export interface DataMistSiteWlansSiteWlansAuthServers {
}

export function dataMistSiteWlansSiteWlansAuthServersToTerraform(struct?: DataMistSiteWlansSiteWlansAuthServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansAuthServersToHclTerraform(struct?: DataMistSiteWlansSiteWlansAuthServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansAuthServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistSiteWlansSiteWlansAuthServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansAuthServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // keywrap_enabled - computed: true, optional: false, required: false
  public get keywrapEnabled() {
    return this.getBooleanAttribute('keywrap_enabled');
  }

  // keywrap_format - computed: true, optional: false, required: false
  public get keywrapFormat() {
    return this.getStringAttribute('keywrap_format');
  }

  // keywrap_kek - computed: true, optional: false, required: false
  public get keywrapKek() {
    return this.getStringAttribute('keywrap_kek');
  }

  // keywrap_mack - computed: true, optional: false, required: false
  public get keywrapMack() {
    return this.getStringAttribute('keywrap_mack');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // require_message_authenticator - computed: true, optional: false, required: false
  public get requireMessageAuthenticator() {
    return this.getBooleanAttribute('require_message_authenticator');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataMistSiteWlansSiteWlansAuthServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMistSiteWlansSiteWlansAuthServersOutputReference {
    return new DataMistSiteWlansSiteWlansAuthServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistSiteWlansSiteWlansBonjourServices {
}

export function dataMistSiteWlansSiteWlansBonjourServicesToTerraform(struct?: DataMistSiteWlansSiteWlansBonjourServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansBonjourServicesToHclTerraform(struct?: DataMistSiteWlansSiteWlansBonjourServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansBonjourServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansBonjourServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansBonjourServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_local - computed: true, optional: false, required: false
  public get disableLocal() {
    return this.getBooleanAttribute('disable_local');
  }

  // radius_groups - computed: true, optional: false, required: false
  public get radiusGroups() {
    return this.getListAttribute('radius_groups');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataMistSiteWlansSiteWlansBonjourServicesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistSiteWlansSiteWlansBonjourServicesOutputReference {
    return new DataMistSiteWlansSiteWlansBonjourServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistSiteWlansSiteWlansBonjour {
}

export function dataMistSiteWlansSiteWlansBonjourToTerraform(struct?: DataMistSiteWlansSiteWlansBonjour): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansBonjourToHclTerraform(struct?: DataMistSiteWlansSiteWlansBonjour): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansBonjourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansBonjour | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansBonjour | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_vlan_ids - computed: true, optional: false, required: false
  public get additionalVlanIds() {
    return this.getListAttribute('additional_vlan_ids');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataMistSiteWlansSiteWlansBonjourServicesMap(this, "services");
  public get services() {
    return this._services;
  }
}
export interface DataMistSiteWlansSiteWlansCiscoCwa {
}

export function dataMistSiteWlansSiteWlansCiscoCwaToTerraform(struct?: DataMistSiteWlansSiteWlansCiscoCwa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansCiscoCwaToHclTerraform(struct?: DataMistSiteWlansSiteWlansCiscoCwa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansCiscoCwaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansCiscoCwa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansCiscoCwa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_hostnames - computed: true, optional: false, required: false
  public get allowedHostnames() {
    return this.getListAttribute('allowed_hostnames');
  }

  // allowed_subnets - computed: true, optional: false, required: false
  public get allowedSubnets() {
    return this.getListAttribute('allowed_subnets');
  }

  // blocked_subnets - computed: true, optional: false, required: false
  public get blockedSubnets() {
    return this.getListAttribute('blocked_subnets');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataMistSiteWlansSiteWlansCoaServers {
}

export function dataMistSiteWlansSiteWlansCoaServersToTerraform(struct?: DataMistSiteWlansSiteWlansCoaServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansCoaServersToHclTerraform(struct?: DataMistSiteWlansSiteWlansCoaServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansCoaServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistSiteWlansSiteWlansCoaServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansCoaServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_event_timestamp_check - computed: true, optional: false, required: false
  public get disableEventTimestampCheck() {
    return this.getBooleanAttribute('disable_event_timestamp_check');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataMistSiteWlansSiteWlansCoaServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMistSiteWlansSiteWlansCoaServersOutputReference {
    return new DataMistSiteWlansSiteWlansCoaServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistSiteWlansSiteWlansDnsServerRewrite {
}

export function dataMistSiteWlansSiteWlansDnsServerRewriteToTerraform(struct?: DataMistSiteWlansSiteWlansDnsServerRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansDnsServerRewriteToHclTerraform(struct?: DataMistSiteWlansSiteWlansDnsServerRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansDnsServerRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansDnsServerRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansDnsServerRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // radius_groups - computed: true, optional: false, required: false
  private _radiusGroups = new cdktf.StringMap(this, "radius_groups");
  public get radiusGroups() {
    return this._radiusGroups;
  }
}
export interface DataMistSiteWlansSiteWlansDynamicPsk {
}

export function dataMistSiteWlansSiteWlansDynamicPskToTerraform(struct?: DataMistSiteWlansSiteWlansDynamicPsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansDynamicPskToHclTerraform(struct?: DataMistSiteWlansSiteWlansDynamicPsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansDynamicPskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansDynamicPsk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansDynamicPsk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_psk - computed: true, optional: false, required: false
  public get defaultPsk() {
    return this.getStringAttribute('default_psk');
  }

  // default_vlan_id - computed: true, optional: false, required: false
  public get defaultVlanId() {
    return this.getStringAttribute('default_vlan_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // force_lookup - computed: true, optional: false, required: false
  public get forceLookup() {
    return this.getBooleanAttribute('force_lookup');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}
export interface DataMistSiteWlansSiteWlansDynamicVlan {
}

export function dataMistSiteWlansSiteWlansDynamicVlanToTerraform(struct?: DataMistSiteWlansSiteWlansDynamicVlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansDynamicVlanToHclTerraform(struct?: DataMistSiteWlansSiteWlansDynamicVlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansDynamicVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansDynamicVlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansDynamicVlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_vlan_ids - computed: true, optional: false, required: false
  public get defaultVlanIds() {
    return this.getListAttribute('default_vlan_ids');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // local_vlan_ids - computed: true, optional: false, required: false
  public get localVlanIds() {
    return this.getListAttribute('local_vlan_ids');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vlans - computed: true, optional: false, required: false
  private _vlans = new cdktf.StringMap(this, "vlans");
  public get vlans() {
    return this._vlans;
  }
}
export interface DataMistSiteWlansSiteWlansHotspot20 {
}

export function dataMistSiteWlansSiteWlansHotspot20ToTerraform(struct?: DataMistSiteWlansSiteWlansHotspot20): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansHotspot20ToHclTerraform(struct?: DataMistSiteWlansSiteWlansHotspot20): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansHotspot20OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansHotspot20 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansHotspot20 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getListAttribute('domain_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // nai_realms - computed: true, optional: false, required: false
  public get naiRealms() {
    return this.getListAttribute('nai_realms');
  }

  // operators - computed: true, optional: false, required: false
  public get operators() {
    return this.getListAttribute('operators');
  }

  // rcoi - computed: true, optional: false, required: false
  public get rcoi() {
    return this.getListAttribute('rcoi');
  }

  // venue_name - computed: true, optional: false, required: false
  public get venueName() {
    return this.getStringAttribute('venue_name');
  }
}
export interface DataMistSiteWlansSiteWlansInjectDhcpOption82 {
}

export function dataMistSiteWlansSiteWlansInjectDhcpOption82ToTerraform(struct?: DataMistSiteWlansSiteWlansInjectDhcpOption82): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansInjectDhcpOption82ToHclTerraform(struct?: DataMistSiteWlansSiteWlansInjectDhcpOption82): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansInjectDhcpOption82OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansInjectDhcpOption82 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansInjectDhcpOption82 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // circuit_id - computed: true, optional: false, required: false
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataMistSiteWlansSiteWlansMistNac {
}

export function dataMistSiteWlansSiteWlansMistNacToTerraform(struct?: DataMistSiteWlansSiteWlansMistNac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansMistNacToHclTerraform(struct?: DataMistSiteWlansSiteWlansMistNac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansMistNacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansMistNac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansMistNac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataMistSiteWlansSiteWlansPortal {
}

export function dataMistSiteWlansSiteWlansPortalToTerraform(struct?: DataMistSiteWlansSiteWlansPortal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansPortalToHclTerraform(struct?: DataMistSiteWlansSiteWlansPortal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansPortalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansPortal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansPortal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_wlan_id_roam - computed: true, optional: false, required: false
  public get allowWlanIdRoam() {
    return this.getBooleanAttribute('allow_wlan_id_roam');
  }

  // amazon_client_id - computed: true, optional: false, required: false
  public get amazonClientId() {
    return this.getStringAttribute('amazon_client_id');
  }

  // amazon_client_secret - computed: true, optional: false, required: false
  public get amazonClientSecret() {
    return this.getStringAttribute('amazon_client_secret');
  }

  // amazon_email_domains - computed: true, optional: false, required: false
  public get amazonEmailDomains() {
    return this.getListAttribute('amazon_email_domains');
  }

  // amazon_enabled - computed: true, optional: false, required: false
  public get amazonEnabled() {
    return this.getBooleanAttribute('amazon_enabled');
  }

  // amazon_expire - computed: true, optional: false, required: false
  public get amazonExpire() {
    return this.getNumberAttribute('amazon_expire');
  }

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.getStringAttribute('auth');
  }

  // azure_client_id - computed: true, optional: false, required: false
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }

  // azure_client_secret - computed: true, optional: false, required: false
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }

  // azure_enabled - computed: true, optional: false, required: false
  public get azureEnabled() {
    return this.getBooleanAttribute('azure_enabled');
  }

  // azure_expire - computed: true, optional: false, required: false
  public get azureExpire() {
    return this.getNumberAttribute('azure_expire');
  }

  // azure_tenant_id - computed: true, optional: false, required: false
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }

  // broadnet_password - computed: true, optional: false, required: false
  public get broadnetPassword() {
    return this.getStringAttribute('broadnet_password');
  }

  // broadnet_sid - computed: true, optional: false, required: false
  public get broadnetSid() {
    return this.getStringAttribute('broadnet_sid');
  }

  // broadnet_user_id - computed: true, optional: false, required: false
  public get broadnetUserId() {
    return this.getStringAttribute('broadnet_user_id');
  }

  // bypass_when_cloud_down - computed: true, optional: false, required: false
  public get bypassWhenCloudDown() {
    return this.getBooleanAttribute('bypass_when_cloud_down');
  }

  // clickatell_api_key - computed: true, optional: false, required: false
  public get clickatellApiKey() {
    return this.getStringAttribute('clickatell_api_key');
  }

  // cross_site - computed: true, optional: false, required: false
  public get crossSite() {
    return this.getBooleanAttribute('cross_site');
  }

  // email_enabled - computed: true, optional: false, required: false
  public get emailEnabled() {
    return this.getBooleanAttribute('email_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expire - computed: true, optional: false, required: false
  public get expire() {
    return this.getNumberAttribute('expire');
  }

  // external_portal_url - computed: true, optional: false, required: false
  public get externalPortalUrl() {
    return this.getStringAttribute('external_portal_url');
  }

  // facebook_client_id - computed: true, optional: false, required: false
  public get facebookClientId() {
    return this.getStringAttribute('facebook_client_id');
  }

  // facebook_client_secret - computed: true, optional: false, required: false
  public get facebookClientSecret() {
    return this.getStringAttribute('facebook_client_secret');
  }

  // facebook_email_domains - computed: true, optional: false, required: false
  public get facebookEmailDomains() {
    return this.getListAttribute('facebook_email_domains');
  }

  // facebook_enabled - computed: true, optional: false, required: false
  public get facebookEnabled() {
    return this.getBooleanAttribute('facebook_enabled');
  }

  // facebook_expire - computed: true, optional: false, required: false
  public get facebookExpire() {
    return this.getNumberAttribute('facebook_expire');
  }

  // forward - computed: true, optional: false, required: false
  public get forward() {
    return this.getBooleanAttribute('forward');
  }

  // forward_url - computed: true, optional: false, required: false
  public get forwardUrl() {
    return this.getStringAttribute('forward_url');
  }

  // google_client_id - computed: true, optional: false, required: false
  public get googleClientId() {
    return this.getStringAttribute('google_client_id');
  }

  // google_client_secret - computed: true, optional: false, required: false
  public get googleClientSecret() {
    return this.getStringAttribute('google_client_secret');
  }

  // google_email_domains - computed: true, optional: false, required: false
  public get googleEmailDomains() {
    return this.getListAttribute('google_email_domains');
  }

  // google_enabled - computed: true, optional: false, required: false
  public get googleEnabled() {
    return this.getBooleanAttribute('google_enabled');
  }

  // google_expire - computed: true, optional: false, required: false
  public get googleExpire() {
    return this.getNumberAttribute('google_expire');
  }

  // gupshup_password - computed: true, optional: false, required: false
  public get gupshupPassword() {
    return this.getStringAttribute('gupshup_password');
  }

  // gupshup_userid - computed: true, optional: false, required: false
  public get gupshupUserid() {
    return this.getStringAttribute('gupshup_userid');
  }

  // microsoft_client_id - computed: true, optional: false, required: false
  public get microsoftClientId() {
    return this.getStringAttribute('microsoft_client_id');
  }

  // microsoft_client_secret - computed: true, optional: false, required: false
  public get microsoftClientSecret() {
    return this.getStringAttribute('microsoft_client_secret');
  }

  // microsoft_email_domains - computed: true, optional: false, required: false
  public get microsoftEmailDomains() {
    return this.getListAttribute('microsoft_email_domains');
  }

  // microsoft_enabled - computed: true, optional: false, required: false
  public get microsoftEnabled() {
    return this.getBooleanAttribute('microsoft_enabled');
  }

  // microsoft_expire - computed: true, optional: false, required: false
  public get microsoftExpire() {
    return this.getNumberAttribute('microsoft_expire');
  }

  // passphrase_enabled - computed: true, optional: false, required: false
  public get passphraseEnabled() {
    return this.getBooleanAttribute('passphrase_enabled');
  }

  // passphrase_expire - computed: true, optional: false, required: false
  public get passphraseExpire() {
    return this.getNumberAttribute('passphrase_expire');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // predefined_sponsors_enabled - computed: true, optional: false, required: false
  public get predefinedSponsorsEnabled() {
    return this.getBooleanAttribute('predefined_sponsors_enabled');
  }

  // predefined_sponsors_hide_email - computed: true, optional: false, required: false
  public get predefinedSponsorsHideEmail() {
    return this.getBooleanAttribute('predefined_sponsors_hide_email');
  }

  // privacy - computed: true, optional: false, required: false
  public get privacy() {
    return this.getBooleanAttribute('privacy');
  }

  // puzzel_password - computed: true, optional: false, required: false
  public get puzzelPassword() {
    return this.getStringAttribute('puzzel_password');
  }

  // puzzel_service_id - computed: true, optional: false, required: false
  public get puzzelServiceId() {
    return this.getStringAttribute('puzzel_service_id');
  }

  // puzzel_username - computed: true, optional: false, required: false
  public get puzzelUsername() {
    return this.getStringAttribute('puzzel_username');
  }

  // sms_enabled - computed: true, optional: false, required: false
  public get smsEnabled() {
    return this.getBooleanAttribute('sms_enabled');
  }

  // sms_expire - computed: true, optional: false, required: false
  public get smsExpire() {
    return this.getNumberAttribute('sms_expire');
  }

  // sms_message_format - computed: true, optional: false, required: false
  public get smsMessageFormat() {
    return this.getStringAttribute('sms_message_format');
  }

  // sms_provider - computed: true, optional: false, required: false
  public get smsProvider() {
    return this.getStringAttribute('sms_provider');
  }

  // sponsor_auto_approve - computed: true, optional: false, required: false
  public get sponsorAutoApprove() {
    return this.getBooleanAttribute('sponsor_auto_approve');
  }

  // sponsor_email_domains - computed: true, optional: false, required: false
  public get sponsorEmailDomains() {
    return this.getListAttribute('sponsor_email_domains');
  }

  // sponsor_enabled - computed: true, optional: false, required: false
  public get sponsorEnabled() {
    return this.getBooleanAttribute('sponsor_enabled');
  }

  // sponsor_expire - computed: true, optional: false, required: false
  public get sponsorExpire() {
    return this.getNumberAttribute('sponsor_expire');
  }

  // sponsor_link_validity_duration - computed: true, optional: false, required: false
  public get sponsorLinkValidityDuration() {
    return this.getStringAttribute('sponsor_link_validity_duration');
  }

  // sponsor_notify_all - computed: true, optional: false, required: false
  public get sponsorNotifyAll() {
    return this.getBooleanAttribute('sponsor_notify_all');
  }

  // sponsor_status_notify - computed: true, optional: false, required: false
  public get sponsorStatusNotify() {
    return this.getBooleanAttribute('sponsor_status_notify');
  }

  // sponsors - computed: true, optional: false, required: false
  private _sponsors = new cdktf.StringMap(this, "sponsors");
  public get sponsors() {
    return this._sponsors;
  }

  // sso_default_role - computed: true, optional: false, required: false
  public get ssoDefaultRole() {
    return this.getStringAttribute('sso_default_role');
  }

  // sso_forced_role - computed: true, optional: false, required: false
  public get ssoForcedRole() {
    return this.getStringAttribute('sso_forced_role');
  }

  // sso_idp_cert - computed: true, optional: false, required: false
  public get ssoIdpCert() {
    return this.getStringAttribute('sso_idp_cert');
  }

  // sso_idp_sign_algo - computed: true, optional: false, required: false
  public get ssoIdpSignAlgo() {
    return this.getStringAttribute('sso_idp_sign_algo');
  }

  // sso_idp_sso_url - computed: true, optional: false, required: false
  public get ssoIdpSsoUrl() {
    return this.getStringAttribute('sso_idp_sso_url');
  }

  // sso_issuer - computed: true, optional: false, required: false
  public get ssoIssuer() {
    return this.getStringAttribute('sso_issuer');
  }

  // sso_nameid_format - computed: true, optional: false, required: false
  public get ssoNameidFormat() {
    return this.getStringAttribute('sso_nameid_format');
  }

  // telstra_client_id - computed: true, optional: false, required: false
  public get telstraClientId() {
    return this.getStringAttribute('telstra_client_id');
  }

  // telstra_client_secret - computed: true, optional: false, required: false
  public get telstraClientSecret() {
    return this.getStringAttribute('telstra_client_secret');
  }

  // twilio_auth_token - computed: true, optional: false, required: false
  public get twilioAuthToken() {
    return this.getStringAttribute('twilio_auth_token');
  }

  // twilio_phone_number - computed: true, optional: false, required: false
  public get twilioPhoneNumber() {
    return this.getStringAttribute('twilio_phone_number');
  }

  // twilio_sid - computed: true, optional: false, required: false
  public get twilioSid() {
    return this.getStringAttribute('twilio_sid');
  }
}
export interface DataMistSiteWlansSiteWlansQos {
}

export function dataMistSiteWlansSiteWlansQosToTerraform(struct?: DataMistSiteWlansSiteWlansQos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansQosToHclTerraform(struct?: DataMistSiteWlansSiteWlansQos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansQos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansQos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
}
export interface DataMistSiteWlansSiteWlansRadsecServers {
}

export function dataMistSiteWlansSiteWlansRadsecServersToTerraform(struct?: DataMistSiteWlansSiteWlansRadsecServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansRadsecServersToHclTerraform(struct?: DataMistSiteWlansSiteWlansRadsecServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansRadsecServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistSiteWlansSiteWlansRadsecServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansRadsecServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataMistSiteWlansSiteWlansRadsecServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMistSiteWlansSiteWlansRadsecServersOutputReference {
    return new DataMistSiteWlansSiteWlansRadsecServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistSiteWlansSiteWlansRadsec {
}

export function dataMistSiteWlansSiteWlansRadsecToTerraform(struct?: DataMistSiteWlansSiteWlansRadsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansRadsecToHclTerraform(struct?: DataMistSiteWlansSiteWlansRadsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansRadsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansRadsec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansRadsec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coa_enabled - computed: true, optional: false, required: false
  public get coaEnabled() {
    return this.getBooleanAttribute('coa_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }

  // mxcluster_ids - computed: true, optional: false, required: false
  public get mxclusterIds() {
    return this.getListAttribute('mxcluster_ids');
  }

  // proxy_hosts - computed: true, optional: false, required: false
  public get proxyHosts() {
    return this.getListAttribute('proxy_hosts');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataMistSiteWlansSiteWlansRadsecServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }

  // use_mxedge - computed: true, optional: false, required: false
  public get useMxedge() {
    return this.getBooleanAttribute('use_mxedge');
  }

  // use_site_mxedge - computed: true, optional: false, required: false
  public get useSiteMxedge() {
    return this.getBooleanAttribute('use_site_mxedge');
  }
}
export interface DataMistSiteWlansSiteWlansRateset {
}

export function dataMistSiteWlansSiteWlansRatesetToTerraform(struct?: DataMistSiteWlansSiteWlansRateset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansRatesetToHclTerraform(struct?: DataMistSiteWlansSiteWlansRateset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansRatesetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansRateset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansRateset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eht - computed: true, optional: false, required: false
  public get eht() {
    return this.getStringAttribute('eht');
  }

  // he - computed: true, optional: false, required: false
  public get he() {
    return this.getStringAttribute('he');
  }

  // ht - computed: true, optional: false, required: false
  public get ht() {
    return this.getStringAttribute('ht');
  }

  // legacy - computed: true, optional: false, required: false
  public get legacy() {
    return this.getListAttribute('legacy');
  }

  // min_rssi - computed: true, optional: false, required: false
  public get minRssi() {
    return this.getNumberAttribute('min_rssi');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // vht - computed: true, optional: false, required: false
  public get vht() {
    return this.getStringAttribute('vht');
  }
}

export class DataMistSiteWlansSiteWlansRatesetMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistSiteWlansSiteWlansRatesetOutputReference {
    return new DataMistSiteWlansSiteWlansRatesetOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistSiteWlansSiteWlansScheduleHours {
}

export function dataMistSiteWlansSiteWlansScheduleHoursToTerraform(struct?: DataMistSiteWlansSiteWlansScheduleHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansScheduleHoursToHclTerraform(struct?: DataMistSiteWlansSiteWlansScheduleHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansScheduleHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansScheduleHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansScheduleHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fri - computed: true, optional: false, required: false
  public get fri() {
    return this.getStringAttribute('fri');
  }

  // mon - computed: true, optional: false, required: false
  public get mon() {
    return this.getStringAttribute('mon');
  }

  // sat - computed: true, optional: false, required: false
  public get sat() {
    return this.getStringAttribute('sat');
  }

  // sun - computed: true, optional: false, required: false
  public get sun() {
    return this.getStringAttribute('sun');
  }

  // thu - computed: true, optional: false, required: false
  public get thu() {
    return this.getStringAttribute('thu');
  }

  // tue - computed: true, optional: false, required: false
  public get tue() {
    return this.getStringAttribute('tue');
  }

  // wed - computed: true, optional: false, required: false
  public get wed() {
    return this.getStringAttribute('wed');
  }
}
export interface DataMistSiteWlansSiteWlansSchedule {
}

export function dataMistSiteWlansSiteWlansScheduleToTerraform(struct?: DataMistSiteWlansSiteWlansSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansScheduleToHclTerraform(struct?: DataMistSiteWlansSiteWlansSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteWlansSiteWlansSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlansSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // hours - computed: true, optional: false, required: false
  private _hours = new DataMistSiteWlansSiteWlansScheduleHoursOutputReference(this, "hours");
  public get hours() {
    return this._hours;
  }
}
export interface DataMistSiteWlansSiteWlans {
}

export function dataMistSiteWlansSiteWlansToTerraform(struct?: DataMistSiteWlansSiteWlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWlansSiteWlansToHclTerraform(struct?: DataMistSiteWlansSiteWlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWlansSiteWlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistSiteWlansSiteWlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWlansSiteWlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acct_immediate_update - computed: true, optional: false, required: false
  public get acctImmediateUpdate() {
    return this.getBooleanAttribute('acct_immediate_update');
  }

  // acct_interim_interval - computed: true, optional: false, required: false
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }

  // acct_servers - computed: true, optional: false, required: false
  private _acctServers = new DataMistSiteWlansSiteWlansAcctServersList(this, "acct_servers", false);
  public get acctServers() {
    return this._acctServers;
  }

  // airwatch - computed: true, optional: false, required: false
  private _airwatch = new DataMistSiteWlansSiteWlansAirwatchOutputReference(this, "airwatch");
  public get airwatch() {
    return this._airwatch;
  }

  // allow_ipv6_ndp - computed: true, optional: false, required: false
  public get allowIpv6Ndp() {
    return this.getBooleanAttribute('allow_ipv6_ndp');
  }

  // allow_mdns - computed: true, optional: false, required: false
  public get allowMdns() {
    return this.getBooleanAttribute('allow_mdns');
  }

  // allow_ssdp - computed: true, optional: false, required: false
  public get allowSsdp() {
    return this.getBooleanAttribute('allow_ssdp');
  }

  // ap_ids - computed: true, optional: false, required: false
  public get apIds() {
    return this.getListAttribute('ap_ids');
  }

  // app_limit - computed: true, optional: false, required: false
  private _appLimit = new DataMistSiteWlansSiteWlansAppLimitOutputReference(this, "app_limit");
  public get appLimit() {
    return this._appLimit;
  }

  // app_qos - computed: true, optional: false, required: false
  private _appQos = new DataMistSiteWlansSiteWlansAppQosOutputReference(this, "app_qos");
  public get appQos() {
    return this._appQos;
  }

  // apply_to - computed: true, optional: false, required: false
  public get applyTo() {
    return this.getStringAttribute('apply_to');
  }

  // arp_filter - computed: true, optional: false, required: false
  public get arpFilter() {
    return this.getBooleanAttribute('arp_filter');
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataMistSiteWlansSiteWlansAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // auth_server_selection - computed: true, optional: false, required: false
  public get authServerSelection() {
    return this.getStringAttribute('auth_server_selection');
  }

  // auth_servers - computed: true, optional: false, required: false
  private _authServers = new DataMistSiteWlansSiteWlansAuthServersList(this, "auth_servers", false);
  public get authServers() {
    return this._authServers;
  }

  // auth_servers_nas_id - computed: true, optional: false, required: false
  public get authServersNasId() {
    return this.getStringAttribute('auth_servers_nas_id');
  }

  // auth_servers_nas_ip - computed: true, optional: false, required: false
  public get authServersNasIp() {
    return this.getStringAttribute('auth_servers_nas_ip');
  }

  // auth_servers_retries - computed: true, optional: false, required: false
  public get authServersRetries() {
    return this.getNumberAttribute('auth_servers_retries');
  }

  // auth_servers_timeout - computed: true, optional: false, required: false
  public get authServersTimeout() {
    return this.getNumberAttribute('auth_servers_timeout');
  }

  // band_steer - computed: true, optional: false, required: false
  public get bandSteer() {
    return this.getBooleanAttribute('band_steer');
  }

  // band_steer_force_band5 - computed: true, optional: false, required: false
  public get bandSteerForceBand5() {
    return this.getBooleanAttribute('band_steer_force_band5');
  }

  // bands - computed: true, optional: false, required: false
  public get bands() {
    return this.getListAttribute('bands');
  }

  // block_blacklist_clients - computed: true, optional: false, required: false
  public get blockBlacklistClients() {
    return this.getBooleanAttribute('block_blacklist_clients');
  }

  // bonjour - computed: true, optional: false, required: false
  private _bonjour = new DataMistSiteWlansSiteWlansBonjourOutputReference(this, "bonjour");
  public get bonjour() {
    return this._bonjour;
  }

  // cisco_cwa - computed: true, optional: false, required: false
  private _ciscoCwa = new DataMistSiteWlansSiteWlansCiscoCwaOutputReference(this, "cisco_cwa");
  public get ciscoCwa() {
    return this._ciscoCwa;
  }

  // client_limit_down - computed: true, optional: false, required: false
  public get clientLimitDown() {
    return this.getStringAttribute('client_limit_down');
  }

  // client_limit_down_enabled - computed: true, optional: false, required: false
  public get clientLimitDownEnabled() {
    return this.getBooleanAttribute('client_limit_down_enabled');
  }

  // client_limit_up - computed: true, optional: false, required: false
  public get clientLimitUp() {
    return this.getStringAttribute('client_limit_up');
  }

  // client_limit_up_enabled - computed: true, optional: false, required: false
  public get clientLimitUpEnabled() {
    return this.getBooleanAttribute('client_limit_up_enabled');
  }

  // coa_servers - computed: true, optional: false, required: false
  private _coaServers = new DataMistSiteWlansSiteWlansCoaServersList(this, "coa_servers", false);
  public get coaServers() {
    return this._coaServers;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // disable_11ax - computed: true, optional: false, required: false
  public get disable11Ax() {
    return this.getBooleanAttribute('disable_11ax');
  }

  // disable_11be - computed: true, optional: false, required: false
  public get disable11Be() {
    return this.getBooleanAttribute('disable_11be');
  }

  // disable_ht_vht_rates - computed: true, optional: false, required: false
  public get disableHtVhtRates() {
    return this.getBooleanAttribute('disable_ht_vht_rates');
  }

  // disable_uapsd - computed: true, optional: false, required: false
  public get disableUapsd() {
    return this.getBooleanAttribute('disable_uapsd');
  }

  // disable_v1_roam_notify - computed: true, optional: false, required: false
  public get disableV1RoamNotify() {
    return this.getBooleanAttribute('disable_v1_roam_notify');
  }

  // disable_v2_roam_notify - computed: true, optional: false, required: false
  public get disableV2RoamNotify() {
    return this.getBooleanAttribute('disable_v2_roam_notify');
  }

  // disable_when_gateway_unreachable - computed: true, optional: false, required: false
  public get disableWhenGatewayUnreachable() {
    return this.getBooleanAttribute('disable_when_gateway_unreachable');
  }

  // disable_when_mxtunnel_down - computed: true, optional: false, required: false
  public get disableWhenMxtunnelDown() {
    return this.getBooleanAttribute('disable_when_mxtunnel_down');
  }

  // disable_wmm - computed: true, optional: false, required: false
  public get disableWmm() {
    return this.getBooleanAttribute('disable_wmm');
  }

  // dns_server_rewrite - computed: true, optional: false, required: false
  private _dnsServerRewrite = new DataMistSiteWlansSiteWlansDnsServerRewriteOutputReference(this, "dns_server_rewrite");
  public get dnsServerRewrite() {
    return this._dnsServerRewrite;
  }

  // dtim - computed: true, optional: false, required: false
  public get dtim() {
    return this.getNumberAttribute('dtim');
  }

  // dynamic_psk - computed: true, optional: false, required: false
  private _dynamicPsk = new DataMistSiteWlansSiteWlansDynamicPskOutputReference(this, "dynamic_psk");
  public get dynamicPsk() {
    return this._dynamicPsk;
  }

  // dynamic_vlan - computed: true, optional: false, required: false
  private _dynamicVlan = new DataMistSiteWlansSiteWlansDynamicVlanOutputReference(this, "dynamic_vlan");
  public get dynamicVlan() {
    return this._dynamicVlan;
  }

  // enable_local_keycaching - computed: true, optional: false, required: false
  public get enableLocalKeycaching() {
    return this.getBooleanAttribute('enable_local_keycaching');
  }

  // enable_wireless_bridging - computed: true, optional: false, required: false
  public get enableWirelessBridging() {
    return this.getBooleanAttribute('enable_wireless_bridging');
  }

  // enable_wireless_bridging_dhcp_tracking - computed: true, optional: false, required: false
  public get enableWirelessBridgingDhcpTracking() {
    return this.getBooleanAttribute('enable_wireless_bridging_dhcp_tracking');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fast_dot1x_timers - computed: true, optional: false, required: false
  public get fastDot1XTimers() {
    return this.getBooleanAttribute('fast_dot1x_timers');
  }

  // hide_ssid - computed: true, optional: false, required: false
  public get hideSsid() {
    return this.getBooleanAttribute('hide_ssid');
  }

  // hostname_ie - computed: true, optional: false, required: false
  public get hostnameIe() {
    return this.getBooleanAttribute('hostname_ie');
  }

  // hotspot20 - computed: true, optional: false, required: false
  private _hotspot20 = new DataMistSiteWlansSiteWlansHotspot20OutputReference(this, "hotspot20");
  public get hotspot20() {
    return this._hotspot20;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inject_dhcp_option_82 - computed: true, optional: false, required: false
  private _injectDhcpOption82 = new DataMistSiteWlansSiteWlansInjectDhcpOption82OutputReference(this, "inject_dhcp_option_82");
  public get injectDhcpOption82() {
    return this._injectDhcpOption82;
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // isolation - computed: true, optional: false, required: false
  public get isolation() {
    return this.getBooleanAttribute('isolation');
  }

  // l2_isolation - computed: true, optional: false, required: false
  public get l2Isolation() {
    return this.getBooleanAttribute('l2_isolation');
  }

  // legacy_overds - computed: true, optional: false, required: false
  public get legacyOverds() {
    return this.getBooleanAttribute('legacy_overds');
  }

  // limit_bcast - computed: true, optional: false, required: false
  public get limitBcast() {
    return this.getBooleanAttribute('limit_bcast');
  }

  // limit_probe_response - computed: true, optional: false, required: false
  public get limitProbeResponse() {
    return this.getBooleanAttribute('limit_probe_response');
  }

  // max_idletime - computed: true, optional: false, required: false
  public get maxIdletime() {
    return this.getNumberAttribute('max_idletime');
  }

  // max_num_clients - computed: true, optional: false, required: false
  public get maxNumClients() {
    return this.getNumberAttribute('max_num_clients');
  }

  // mist_nac - computed: true, optional: false, required: false
  private _mistNac = new DataMistSiteWlansSiteWlansMistNacOutputReference(this, "mist_nac");
  public get mistNac() {
    return this._mistNac;
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // msp_id - computed: true, optional: false, required: false
  public get mspId() {
    return this.getStringAttribute('msp_id');
  }

  // mxtunnel_ids - computed: true, optional: false, required: false
  public get mxtunnelIds() {
    return this.getListAttribute('mxtunnel_ids');
  }

  // mxtunnel_name - computed: true, optional: false, required: false
  public get mxtunnelName() {
    return this.getListAttribute('mxtunnel_name');
  }

  // no_static_dns - computed: true, optional: false, required: false
  public get noStaticDns() {
    return this.getBooleanAttribute('no_static_dns');
  }

  // no_static_ip - computed: true, optional: false, required: false
  public get noStaticIp() {
    return this.getBooleanAttribute('no_static_ip');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // portal - computed: true, optional: false, required: false
  private _portal = new DataMistSiteWlansSiteWlansPortalOutputReference(this, "portal");
  public get portal() {
    return this._portal;
  }

  // portal_allowed_hostnames - computed: true, optional: false, required: false
  public get portalAllowedHostnames() {
    return this.getListAttribute('portal_allowed_hostnames');
  }

  // portal_allowed_subnets - computed: true, optional: false, required: false
  public get portalAllowedSubnets() {
    return this.getListAttribute('portal_allowed_subnets');
  }

  // portal_api_secret - computed: true, optional: false, required: false
  public get portalApiSecret() {
    return this.getStringAttribute('portal_api_secret');
  }

  // portal_denied_hostnames - computed: true, optional: false, required: false
  public get portalDeniedHostnames() {
    return this.getListAttribute('portal_denied_hostnames');
  }

  // portal_image - computed: true, optional: false, required: false
  public get portalImage() {
    return this.getStringAttribute('portal_image');
  }

  // portal_sso_url - computed: true, optional: false, required: false
  public get portalSsoUrl() {
    return this.getStringAttribute('portal_sso_url');
  }

  // qos - computed: true, optional: false, required: false
  private _qos = new DataMistSiteWlansSiteWlansQosOutputReference(this, "qos");
  public get qos() {
    return this._qos;
  }

  // radsec - computed: true, optional: false, required: false
  private _radsec = new DataMistSiteWlansSiteWlansRadsecOutputReference(this, "radsec");
  public get radsec() {
    return this._radsec;
  }

  // rateset - computed: true, optional: false, required: false
  private _rateset = new DataMistSiteWlansSiteWlansRatesetMap(this, "rateset");
  public get rateset() {
    return this._rateset;
  }

  // reconnect_clients_when_roaming_mxcluster - computed: true, optional: false, required: false
  public get reconnectClientsWhenRoamingMxcluster() {
    return this.getBooleanAttribute('reconnect_clients_when_roaming_mxcluster');
  }

  // roam_mode - computed: true, optional: false, required: false
  public get roamMode() {
    return this.getStringAttribute('roam_mode');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataMistSiteWlansSiteWlansScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // sle_excluded - computed: true, optional: false, required: false
  public get sleExcluded() {
    return this.getBooleanAttribute('sle_excluded');
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }

  // use_eapol_v1 - computed: true, optional: false, required: false
  public get useEapolV1() {
    return this.getBooleanAttribute('use_eapol_v1');
  }

  // vlan_enabled - computed: true, optional: false, required: false
  public get vlanEnabled() {
    return this.getBooleanAttribute('vlan_enabled');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vlan_ids - computed: true, optional: false, required: false
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }

  // vlan_pooling - computed: true, optional: false, required: false
  public get vlanPooling() {
    return this.getBooleanAttribute('vlan_pooling');
  }

  // wlan_limit_down - computed: true, optional: false, required: false
  public get wlanLimitDown() {
    return this.getStringAttribute('wlan_limit_down');
  }

  // wlan_limit_down_enabled - computed: true, optional: false, required: false
  public get wlanLimitDownEnabled() {
    return this.getBooleanAttribute('wlan_limit_down_enabled');
  }

  // wlan_limit_up - computed: true, optional: false, required: false
  public get wlanLimitUp() {
    return this.getStringAttribute('wlan_limit_up');
  }

  // wlan_limit_up_enabled - computed: true, optional: false, required: false
  public get wlanLimitUpEnabled() {
    return this.getBooleanAttribute('wlan_limit_up_enabled');
  }

  // wxtag_ids - computed: true, optional: false, required: false
  public get wxtagIds() {
    return this.getListAttribute('wxtag_ids');
  }

  // wxtunnel_id - computed: true, optional: false, required: false
  public get wxtunnelId() {
    return this.getStringAttribute('wxtunnel_id');
  }

  // wxtunnel_remote_id - computed: true, optional: false, required: false
  public get wxtunnelRemoteId() {
    return this.getStringAttribute('wxtunnel_remote_id');
  }
}

export class DataMistSiteWlansSiteWlansList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMistSiteWlansSiteWlansOutputReference {
    return new DataMistSiteWlansSiteWlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_wlans mist_site_wlans}
*/
export class DataMistSiteWlans extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site_wlans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistSiteWlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistSiteWlans to import
  * @param importFromId The id of the existing DataMistSiteWlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_wlans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistSiteWlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site_wlans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_wlans mist_site_wlans} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistSiteWlansConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistSiteWlansConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site_wlans',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_wlans - computed: true, optional: false, required: false
  private _siteWlans = new DataMistSiteWlansSiteWlansList(this, "site_wlans", true);
  public get siteWlans() {
    return this._siteWlans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
