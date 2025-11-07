// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorTestCreateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#id SensorTestCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#parameters SensorTestCreate#parameters}
  */
  readonly parameters: SensorTestCreateParameters;
}
export interface SensorTestCreateItemApCoverage {
}

export function sensorTestCreateItemApCoverageToTerraform(struct?: SensorTestCreateItemApCoverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestCreateItemApCoverageToHclTerraform(struct?: SensorTestCreateItemApCoverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestCreateItemApCoverageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateItemApCoverage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateItemApCoverage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bands - computed: true, optional: false, required: false
  public get bands() {
    return this.getStringAttribute('bands');
  }

  // number_of_aps_to_test - computed: true, optional: false, required: false
  public get numberOfApsToTest() {
    return this.getNumberAttribute('number_of_aps_to_test');
  }

  // rssi_threshold - computed: true, optional: false, required: false
  public get rssiThreshold() {
    return this.getNumberAttribute('rssi_threshold');
  }
}

export class SensorTestCreateItemApCoverageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateItemApCoverageOutputReference {
    return new SensorTestCreateItemApCoverageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateItemSsidsTests {
}

export function sensorTestCreateItemSsidsTestsToTerraform(struct?: SensorTestCreateItemSsidsTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestCreateItemSsidsTestsToHclTerraform(struct?: SensorTestCreateItemSsidsTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestCreateItemSsidsTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateItemSsidsTests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateItemSsidsTests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getListAttribute('config');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SensorTestCreateItemSsidsTestsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateItemSsidsTestsOutputReference {
    return new SensorTestCreateItemSsidsTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateItemSsidsThirdParty {
}

export function sensorTestCreateItemSsidsThirdPartyToTerraform(struct?: SensorTestCreateItemSsidsThirdParty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestCreateItemSsidsThirdPartyToHclTerraform(struct?: SensorTestCreateItemSsidsThirdParty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestCreateItemSsidsThirdPartyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateItemSsidsThirdParty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateItemSsidsThirdParty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected - computed: true, optional: false, required: false
  public get selected() {
    return this.getStringAttribute('selected');
  }
}

export class SensorTestCreateItemSsidsThirdPartyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateItemSsidsThirdPartyOutputReference {
    return new SensorTestCreateItemSsidsThirdPartyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateItemSsids {
}

export function sensorTestCreateItemSsidsToTerraform(struct?: SensorTestCreateItemSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestCreateItemSsidsToHclTerraform(struct?: SensorTestCreateItemSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestCreateItemSsidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateItemSsids | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateItemSsids | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_protocol - computed: true, optional: false, required: false
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // auth_type_rcvd - computed: true, optional: false, required: false
  public get authTypeRcvd() {
    return this.getStringAttribute('auth_type_rcvd');
  }

  // bands - computed: true, optional: false, required: false
  public get bands() {
    return this.getStringAttribute('bands');
  }

  // certdownloadurl - computed: true, optional: false, required: false
  public get certdownloadurl() {
    return this.getStringAttribute('certdownloadurl');
  }

  // certfilename - computed: true, optional: false, required: false
  public get certfilename() {
    return this.getStringAttribute('certfilename');
  }

  // certpassphrase - computed: true, optional: false, required: false
  public get certpassphrase() {
    return this.getStringAttribute('certpassphrase');
  }

  // certstatus - computed: true, optional: false, required: false
  public get certstatus() {
    return this.getStringAttribute('certstatus');
  }

  // certxferprotocol - computed: true, optional: false, required: false
  public get certxferprotocol() {
    return this.getStringAttribute('certxferprotocol');
  }

  // eap_method - computed: true, optional: false, required: false
  public get eapMethod() {
    return this.getStringAttribute('eap_method');
  }

  // ext_web_auth - computed: true, optional: false, required: false
  public get extWebAuth() {
    return this.getStringAttribute('ext_web_auth');
  }

  // ext_web_auth_access_url - computed: true, optional: false, required: false
  public get extWebAuthAccessUrl() {
    return this.getStringAttribute('ext_web_auth_access_url');
  }

  // ext_web_auth_html_tag - computed: true, optional: false, required: false
  public get extWebAuthHtmlTag() {
    return this.getListAttribute('ext_web_auth_html_tag');
  }

  // ext_web_auth_portal - computed: true, optional: false, required: false
  public get extWebAuthPortal() {
    return this.getStringAttribute('ext_web_auth_portal');
  }

  // ext_web_auth_virtual_ip - computed: true, optional: false, required: false
  public get extWebAuthVirtualIp() {
    return this.getStringAttribute('ext_web_auth_virtual_ip');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // layer3web_auth_email_address - computed: true, optional: false, required: false
  public get layer3WebAuthEmailAddress() {
    return this.getStringAttribute('layer3web_auth_email_address');
  }

  // layer3web_authpassword - computed: true, optional: false, required: false
  public get layer3WebAuthpassword() {
    return this.getStringAttribute('layer3web_authpassword');
  }

  // layer3web_authsecurity - computed: true, optional: false, required: false
  public get layer3WebAuthsecurity() {
    return this.getStringAttribute('layer3web_authsecurity');
  }

  // layer3web_authuser_name - computed: true, optional: false, required: false
  public get layer3WebAuthuserName() {
    return this.getStringAttribute('layer3web_authuser_name');
  }

  // num_aps - computed: true, optional: false, required: false
  public get numAps() {
    return this.getNumberAttribute('num_aps');
  }

  // num_sensors - computed: true, optional: false, required: false
  public get numSensors() {
    return this.getNumberAttribute('num_sensors');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // psk - computed: true, optional: false, required: false
  public get psk() {
    return this.getStringAttribute('psk');
  }

  // qos_policy - computed: true, optional: false, required: false
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }

  // scep - computed: true, optional: false, required: false
  public get scep() {
    return this.getStringAttribute('scep');
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tests - computed: true, optional: false, required: false
  private _tests = new SensorTestCreateItemSsidsTestsList(this, "tests", false);
  public get tests() {
    return this._tests;
  }

  // third_party - computed: true, optional: false, required: false
  private _thirdParty = new SensorTestCreateItemSsidsThirdPartyList(this, "third_party", false);
  public get thirdParty() {
    return this._thirdParty;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getNumberAttribute('valid_from');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getNumberAttribute('valid_to');
  }

  // white_list - computed: true, optional: false, required: false
  public get whiteList() {
    return this.getStringAttribute('white_list');
  }

  // wlan_id - computed: true, optional: false, required: false
  public get wlanId() {
    return this.getNumberAttribute('wlan_id');
  }

  // wlc - computed: true, optional: false, required: false
  public get wlc() {
    return this.getStringAttribute('wlc');
  }
}

export class SensorTestCreateItemSsidsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateItemSsidsOutputReference {
    return new SensorTestCreateItemSsidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateItem {
}

export function sensorTestCreateItemToTerraform(struct?: SensorTestCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestCreateItemToHclTerraform(struct?: SensorTestCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestCreateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_coverage - computed: true, optional: false, required: false
  private _apCoverage = new SensorTestCreateItemApCoverageList(this, "ap_coverage", false);
  public get apCoverage() {
    return this._apCoverage;
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // legacy_test_suite - computed: true, optional: false, required: false
  public get legacyTestSuite() {
    return this.getStringAttribute('legacy_test_suite');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_info_list - computed: true, optional: false, required: false
  public get locationInfoList() {
    return this.getListAttribute('location_info_list');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getNumberAttribute('model_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_associated_sensor - computed: true, optional: false, required: false
  public get numAssociatedSensor() {
    return this.getNumberAttribute('num_associated_sensor');
  }

  // num_neighbor_apthreshold - computed: true, optional: false, required: false
  public get numNeighborApthreshold() {
    return this.getNumberAttribute('num_neighbor_apthreshold');
  }

  // r_connection - computed: true, optional: false, required: false
  public get rConnection() {
    return this.getStringAttribute('r_connection');
  }

  // radio_as_sensor_removed - computed: true, optional: false, required: false
  public get radioAsSensorRemoved() {
    return this.getStringAttribute('radio_as_sensor_removed');
  }

  // rssi_threshold - computed: true, optional: false, required: false
  public get rssiThreshold() {
    return this.getNumberAttribute('rssi_threshold');
  }

  // run_now - computed: true, optional: false, required: false
  public get runNow() {
    return this.getStringAttribute('run_now');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // schedule_in_days - computed: true, optional: false, required: false
  public get scheduleInDays() {
    return this.getNumberAttribute('schedule_in_days');
  }

  // sensors - computed: true, optional: false, required: false
  public get sensors() {
    return this.getStringAttribute('sensors');
  }

  // show_wlc_upgrade_banner - computed: true, optional: false, required: false
  public get showWlcUpgradeBanner() {
    return this.getStringAttribute('show_wlc_upgrade_banner');
  }

  // site_hierarchy - computed: true, optional: false, required: false
  public get siteHierarchy() {
    return this.getStringAttribute('site_hierarchy');
  }

  // ssids - computed: true, optional: false, required: false
  private _ssids = new SensorTestCreateItemSsidsList(this, "ssids", false);
  public get ssids() {
    return this._ssids;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // test_duration_estimate - computed: true, optional: false, required: false
  public get testDurationEstimate() {
    return this.getNumberAttribute('test_duration_estimate');
  }

  // test_schedule_mode - computed: true, optional: false, required: false
  public get testScheduleMode() {
    return this.getStringAttribute('test_schedule_mode');
  }

  // test_template - computed: true, optional: false, required: false
  public get testTemplate() {
    return this.getStringAttribute('test_template');
  }

  // tests - computed: true, optional: false, required: false
  public get tests() {
    return this.getStringAttribute('tests');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // wlans - computed: true, optional: false, required: false
  public get wlans() {
    return this.getListAttribute('wlans');
  }
}

export class SensorTestCreateItemList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateItemOutputReference {
    return new SensorTestCreateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateParametersApCoverage {
  /**
  * Bands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#bands SensorTestCreate#bands}
  */
  readonly bands?: string;
  /**
  * Number Of Aps To Test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#number_of_aps_to_test SensorTestCreate#number_of_aps_to_test}
  */
  readonly numberOfApsToTest?: string;
  /**
  * Rssi Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#rssi_threshold SensorTestCreate#rssi_threshold}
  */
  readonly rssiThreshold?: string;
}

export function sensorTestCreateParametersApCoverageToTerraform(struct?: SensorTestCreateParametersApCoverage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bands: cdktf.stringToTerraform(struct!.bands),
    number_of_aps_to_test: cdktf.stringToTerraform(struct!.numberOfApsToTest),
    rssi_threshold: cdktf.stringToTerraform(struct!.rssiThreshold),
  }
}


export function sensorTestCreateParametersApCoverageToHclTerraform(struct?: SensorTestCreateParametersApCoverage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bands: {
      value: cdktf.stringToHclTerraform(struct!.bands),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_aps_to_test: {
      value: cdktf.stringToHclTerraform(struct!.numberOfApsToTest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rssi_threshold: {
      value: cdktf.stringToHclTerraform(struct!.rssiThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestCreateParametersApCoverageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateParametersApCoverage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bands !== undefined) {
      hasAnyValues = true;
      internalValueResult.bands = this._bands;
    }
    if (this._numberOfApsToTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfApsToTest = this._numberOfApsToTest;
    }
    if (this._rssiThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rssiThreshold = this._rssiThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateParametersApCoverage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bands = undefined;
      this._numberOfApsToTest = undefined;
      this._rssiThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bands = value.bands;
      this._numberOfApsToTest = value.numberOfApsToTest;
      this._rssiThreshold = value.rssiThreshold;
    }
  }

  // bands - computed: false, optional: true, required: false
  private _bands?: string; 
  public get bands() {
    return this.getStringAttribute('bands');
  }
  public set bands(value: string) {
    this._bands = value;
  }
  public resetBands() {
    this._bands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandsInput() {
    return this._bands;
  }

  // number_of_aps_to_test - computed: false, optional: true, required: false
  private _numberOfApsToTest?: string; 
  public get numberOfApsToTest() {
    return this.getStringAttribute('number_of_aps_to_test');
  }
  public set numberOfApsToTest(value: string) {
    this._numberOfApsToTest = value;
  }
  public resetNumberOfApsToTest() {
    this._numberOfApsToTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfApsToTestInput() {
    return this._numberOfApsToTest;
  }

  // rssi_threshold - computed: false, optional: true, required: false
  private _rssiThreshold?: string; 
  public get rssiThreshold() {
    return this.getStringAttribute('rssi_threshold');
  }
  public set rssiThreshold(value: string) {
    this._rssiThreshold = value;
  }
  public resetRssiThreshold() {
    this._rssiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssiThresholdInput() {
    return this._rssiThreshold;
  }
}

export class SensorTestCreateParametersApCoverageList extends cdktf.ComplexList {
  public internalValue? : SensorTestCreateParametersApCoverage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateParametersApCoverageOutputReference {
    return new SensorTestCreateParametersApCoverageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateParametersSsidsTests {
  /**
  * Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#config SensorTestCreate#config}
  */
  readonly config?: string[];
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#name SensorTestCreate#name}
  */
  readonly name?: string;
}

export function sensorTestCreateParametersSsidsTestsToTerraform(struct?: SensorTestCreateParametersSsidsTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sensorTestCreateParametersSsidsTestsToHclTerraform(struct?: SensorTestCreateParametersSsidsTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.config),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SensorTestCreateParametersSsidsTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateParametersSsidsTests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateParametersSsidsTests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string[]; 
  public get config() {
    return this.getListAttribute('config');
  }
  public set config(value: string[]) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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
}

export class SensorTestCreateParametersSsidsTestsList extends cdktf.ComplexList {
  public internalValue? : SensorTestCreateParametersSsidsTests[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateParametersSsidsTestsOutputReference {
    return new SensorTestCreateParametersSsidsTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateParametersSsidsThirdParty {
  /**
  * Selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#selected SensorTestCreate#selected}
  */
  readonly selected?: string;
}

export function sensorTestCreateParametersSsidsThirdPartyToTerraform(struct?: SensorTestCreateParametersSsidsThirdParty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected: cdktf.stringToTerraform(struct!.selected),
  }
}


export function sensorTestCreateParametersSsidsThirdPartyToHclTerraform(struct?: SensorTestCreateParametersSsidsThirdParty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected: {
      value: cdktf.stringToHclTerraform(struct!.selected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestCreateParametersSsidsThirdPartyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateParametersSsidsThirdParty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selected !== undefined) {
      hasAnyValues = true;
      internalValueResult.selected = this._selected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateParametersSsidsThirdParty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selected = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selected = value.selected;
    }
  }

  // selected - computed: false, optional: true, required: false
  private _selected?: string; 
  public get selected() {
    return this.getStringAttribute('selected');
  }
  public set selected(value: string) {
    this._selected = value;
  }
  public resetSelected() {
    this._selected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedInput() {
    return this._selected;
  }
}

export class SensorTestCreateParametersSsidsThirdPartyList extends cdktf.ComplexList {
  public internalValue? : SensorTestCreateParametersSsidsThirdParty[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateParametersSsidsThirdPartyOutputReference {
    return new SensorTestCreateParametersSsidsThirdPartyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateParametersSsids {
  /**
  * Auth Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#auth_type SensorTestCreate#auth_type}
  */
  readonly authType?: string;
  /**
  * Categories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#categories SensorTestCreate#categories}
  */
  readonly categories?: string[];
  /**
  * Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#profile_name SensorTestCreate#profile_name}
  */
  readonly profileName?: string;
  /**
  * Psk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#psk SensorTestCreate#psk}
  */
  readonly psk?: string;
  /**
  * Qos Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#qos_policy SensorTestCreate#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Ssid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#ssid SensorTestCreate#ssid}
  */
  readonly ssid?: string;
  /**
  * tests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#tests SensorTestCreate#tests}
  */
  readonly tests?: SensorTestCreateParametersSsidsTests[] | cdktf.IResolvable;
  /**
  * third_party block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#third_party SensorTestCreate#third_party}
  */
  readonly thirdParty?: SensorTestCreateParametersSsidsThirdParty[] | cdktf.IResolvable;
}

export function sensorTestCreateParametersSsidsToTerraform(struct?: SensorTestCreateParametersSsids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    psk: cdktf.stringToTerraform(struct!.psk),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    ssid: cdktf.stringToTerraform(struct!.ssid),
    tests: cdktf.listMapper(sensorTestCreateParametersSsidsTestsToTerraform, true)(struct!.tests),
    third_party: cdktf.listMapper(sensorTestCreateParametersSsidsThirdPartyToTerraform, true)(struct!.thirdParty),
  }
}


export function sensorTestCreateParametersSsidsToHclTerraform(struct?: SensorTestCreateParametersSsids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid: {
      value: cdktf.stringToHclTerraform(struct!.ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tests: {
      value: cdktf.listMapperHcl(sensorTestCreateParametersSsidsTestsToHclTerraform, true)(struct!.tests),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestCreateParametersSsidsTestsList",
    },
    third_party: {
      value: cdktf.listMapperHcl(sensorTestCreateParametersSsidsThirdPartyToHclTerraform, true)(struct!.thirdParty),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestCreateParametersSsidsThirdPartyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestCreateParametersSsidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestCreateParametersSsids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssid = this._ssid;
    }
    if (this._tests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tests = this._tests?.internalValue;
    }
    if (this._thirdParty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdParty = this._thirdParty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateParametersSsids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._categories = undefined;
      this._profileName = undefined;
      this._psk = undefined;
      this._qosPolicy = undefined;
      this._ssid = undefined;
      this._tests.internalValue = undefined;
      this._thirdParty.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._categories = value.categories;
      this._profileName = value.profileName;
      this._psk = value.psk;
      this._qosPolicy = value.qosPolicy;
      this._ssid = value.ssid;
      this._tests.internalValue = value.tests;
      this._thirdParty.internalValue = value.thirdParty;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // profile_name - computed: false, optional: true, required: false
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

  // psk - computed: false, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // tests - computed: false, optional: true, required: false
  private _tests = new SensorTestCreateParametersSsidsTestsList(this, "tests", false);
  public get tests() {
    return this._tests;
  }
  public putTests(value: SensorTestCreateParametersSsidsTests[] | cdktf.IResolvable) {
    this._tests.internalValue = value;
  }
  public resetTests() {
    this._tests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testsInput() {
    return this._tests.internalValue;
  }

  // third_party - computed: false, optional: true, required: false
  private _thirdParty = new SensorTestCreateParametersSsidsThirdPartyList(this, "third_party", false);
  public get thirdParty() {
    return this._thirdParty;
  }
  public putThirdParty(value: SensorTestCreateParametersSsidsThirdParty[] | cdktf.IResolvable) {
    this._thirdParty.internalValue = value;
  }
  public resetThirdParty() {
    this._thirdParty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyInput() {
    return this._thirdParty.internalValue;
  }
}

export class SensorTestCreateParametersSsidsList extends cdktf.ComplexList {
  public internalValue? : SensorTestCreateParametersSsids[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestCreateParametersSsidsOutputReference {
    return new SensorTestCreateParametersSsidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestCreateParameters {
  /**
  * Model Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#model_version SensorTestCreate#model_version}
  */
  readonly modelVersion?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#name SensorTestCreate#name}
  */
  readonly name?: string;
  /**
  * r_connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#r_connection SensorTestCreate#r_connection}
  */
  readonly rConnection?: string;
  /**
  * ap_coverage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#ap_coverage SensorTestCreate#ap_coverage}
  */
  readonly apCoverage?: SensorTestCreateParametersApCoverage[] | cdktf.IResolvable;
  /**
  * ssids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#ssids SensorTestCreate#ssids}
  */
  readonly ssids?: SensorTestCreateParametersSsids[] | cdktf.IResolvable;
}

export function sensorTestCreateParametersToTerraform(struct?: SensorTestCreateParametersOutputReference | SensorTestCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_version: cdktf.numberToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    r_connection: cdktf.stringToTerraform(struct!.rConnection),
    ap_coverage: cdktf.listMapper(sensorTestCreateParametersApCoverageToTerraform, true)(struct!.apCoverage),
    ssids: cdktf.listMapper(sensorTestCreateParametersSsidsToTerraform, true)(struct!.ssids),
  }
}


export function sensorTestCreateParametersToHclTerraform(struct?: SensorTestCreateParametersOutputReference | SensorTestCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_version: {
      value: cdktf.numberToHclTerraform(struct!.modelVersion),
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
    r_connection: {
      value: cdktf.stringToHclTerraform(struct!.rConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_coverage: {
      value: cdktf.listMapperHcl(sensorTestCreateParametersApCoverageToHclTerraform, true)(struct!.apCoverage),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestCreateParametersApCoverageList",
    },
    ssids: {
      value: cdktf.listMapperHcl(sensorTestCreateParametersSsidsToHclTerraform, true)(struct!.ssids),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestCreateParametersSsidsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestCreateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SensorTestCreateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.rConnection = this._rConnection;
    }
    if (this._apCoverage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apCoverage = this._apCoverage?.internalValue;
    }
    if (this._ssids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssids = this._ssids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestCreateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modelVersion = undefined;
      this._name = undefined;
      this._rConnection = undefined;
      this._apCoverage.internalValue = undefined;
      this._ssids.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._rConnection = value.rConnection;
      this._apCoverage.internalValue = value.apCoverage;
      this._ssids.internalValue = value.ssids;
    }
  }

  // model_version - computed: false, optional: true, required: false
  private _modelVersion?: number; 
  public get modelVersion() {
    return this.getNumberAttribute('model_version');
  }
  public set modelVersion(value: number) {
    this._modelVersion = value;
  }
  public resetModelVersion() {
    this._modelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionInput() {
    return this._modelVersion;
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

  // r_connection - computed: false, optional: true, required: false
  private _rConnection?: string; 
  public get rConnection() {
    return this.getStringAttribute('r_connection');
  }
  public set rConnection(value: string) {
    this._rConnection = value;
  }
  public resetRConnection() {
    this._rConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rConnectionInput() {
    return this._rConnection;
  }

  // ap_coverage - computed: false, optional: true, required: false
  private _apCoverage = new SensorTestCreateParametersApCoverageList(this, "ap_coverage", false);
  public get apCoverage() {
    return this._apCoverage;
  }
  public putApCoverage(value: SensorTestCreateParametersApCoverage[] | cdktf.IResolvable) {
    this._apCoverage.internalValue = value;
  }
  public resetApCoverage() {
    this._apCoverage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apCoverageInput() {
    return this._apCoverage.internalValue;
  }

  // ssids - computed: false, optional: true, required: false
  private _ssids = new SensorTestCreateParametersSsidsList(this, "ssids", false);
  public get ssids() {
    return this._ssids;
  }
  public putSsids(value: SensorTestCreateParametersSsids[] | cdktf.IResolvable) {
    this._ssids.internalValue = value;
  }
  public resetSsids() {
    this._ssids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidsInput() {
    return this._ssids.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create dnacenter_sensor_test_create}
*/
export class SensorTestCreate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sensor_test_create";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorTestCreate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorTestCreate to import
  * @param importFromId The id of the existing SensorTestCreate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorTestCreate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sensor_test_create", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_create dnacenter_sensor_test_create} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorTestCreateConfig
  */
  public constructor(scope: Construct, id: string, config: SensorTestCreateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sensor_test_create',
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
  private _item = new SensorTestCreateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new SensorTestCreateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SensorTestCreateParameters) {
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
      parameters: sensorTestCreateParametersToTerraform(this._parameters.internalValue),
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
        value: sensorTestCreateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SensorTestCreateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
