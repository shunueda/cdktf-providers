// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleClusterConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPowerscaleClusterAcs {
}

export function dataPowerscaleClusterAcsToTerraform(struct?: DataPowerscaleClusterAcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterAcsToHclTerraform(struct?: DataPowerscaleClusterAcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterAcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterAcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterAcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_nodes_sn - computed: true, optional: false, required: false
  public get failedNodesSn() {
    return this.getListAttribute('failed_nodes_sn');
  }

  // joined_nodes - computed: true, optional: false, required: false
  public get joinedNodes() {
    return this.getNumberAttribute('joined_nodes');
  }

  // license_status - computed: true, optional: false, required: false
  public get licenseStatus() {
    return this.getStringAttribute('license_status');
  }

  // srs_status - computed: true, optional: false, required: false
  public get srsStatus() {
    return this.getStringAttribute('srs_status');
  }

  // total_nodes - computed: true, optional: false, required: false
  public get totalNodes() {
    return this.getNumberAttribute('total_nodes');
  }

  // unresponsive_sn - computed: true, optional: false, required: false
  public get unresponsiveSn() {
    return this.getListAttribute('unresponsive_sn');
  }
}
export interface DataPowerscaleClusterConfigDevices {
}

export function dataPowerscaleClusterConfigDevicesToTerraform(struct?: DataPowerscaleClusterConfigDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterConfigDevicesToHclTerraform(struct?: DataPowerscaleClusterConfigDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterConfigDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterConfigDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterConfigDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // devid - computed: true, optional: false, required: false
  public get devid() {
    return this.getNumberAttribute('devid');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // is_up - computed: true, optional: false, required: false
  public get isUp() {
    return this.getBooleanAttribute('is_up');
  }

  // lnn - computed: true, optional: false, required: false
  public get lnn() {
    return this.getNumberAttribute('lnn');
  }
}

export class DataPowerscaleClusterConfigDevicesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterConfigDevicesOutputReference {
    return new DataPowerscaleClusterConfigDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterConfigOnefsVersion {
}

export function dataPowerscaleClusterConfigOnefsVersionToTerraform(struct?: DataPowerscaleClusterConfigOnefsVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterConfigOnefsVersionToHclTerraform(struct?: DataPowerscaleClusterConfigOnefsVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterConfigOnefsVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterConfigOnefsVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterConfigOnefsVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // release - computed: true, optional: false, required: false
  public get release() {
    return this.getStringAttribute('release');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataPowerscaleClusterConfigTimezone {
}

export function dataPowerscaleClusterConfigTimezoneToTerraform(struct?: DataPowerscaleClusterConfigTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterConfigTimezoneToHclTerraform(struct?: DataPowerscaleClusterConfigTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterConfigTimezoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterConfigTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterConfigTimezone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abbreviation - computed: true, optional: false, required: false
  public get abbreviation() {
    return this.getStringAttribute('abbreviation');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getStringAttribute('custom');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataPowerscaleClusterConfigA {
}

export function dataPowerscaleClusterConfigAToTerraform(struct?: DataPowerscaleClusterConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterConfigAToHclTerraform(struct?: DataPowerscaleClusterConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataPowerscaleClusterConfigDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // join_mode - computed: true, optional: false, required: false
  public get joinMode() {
    return this.getStringAttribute('join_mode');
  }

  // local_devid - computed: true, optional: false, required: false
  public get localDevid() {
    return this.getNumberAttribute('local_devid');
  }

  // local_lnn - computed: true, optional: false, required: false
  public get localLnn() {
    return this.getNumberAttribute('local_lnn');
  }

  // local_serial - computed: true, optional: false, required: false
  public get localSerial() {
    return this.getStringAttribute('local_serial');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // onefs_version - computed: true, optional: false, required: false
  private _onefsVersion = new DataPowerscaleClusterConfigOnefsVersionOutputReference(this, "onefs_version");
  public get onefsVersion() {
    return this._onefsVersion;
  }

  // timezone - computed: true, optional: false, required: false
  private _timezone = new DataPowerscaleClusterConfigTimezoneOutputReference(this, "timezone");
  public get timezone() {
    return this._timezone;
  }
}
export interface DataPowerscaleClusterIdentityLogon {
}

export function dataPowerscaleClusterIdentityLogonToTerraform(struct?: DataPowerscaleClusterIdentityLogon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterIdentityLogonToHclTerraform(struct?: DataPowerscaleClusterIdentityLogon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterIdentityLogonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterIdentityLogon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterIdentityLogon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // motd - computed: true, optional: false, required: false
  public get motd() {
    return this.getStringAttribute('motd');
  }

  // motd_header - computed: true, optional: false, required: false
  public get motdHeader() {
    return this.getStringAttribute('motd_header');
  }
}
export interface DataPowerscaleClusterIdentity {
}

export function dataPowerscaleClusterIdentityToTerraform(struct?: DataPowerscaleClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterIdentityToHclTerraform(struct?: DataPowerscaleClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // logon - computed: true, optional: false, required: false
  private _logon = new DataPowerscaleClusterIdentityLogonOutputReference(this, "logon");
  public get logon() {
    return this._logon;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataPowerscaleClusterInternalNetworksFailoverIpAddresses {
}

export function dataPowerscaleClusterInternalNetworksFailoverIpAddressesToTerraform(struct?: DataPowerscaleClusterInternalNetworksFailoverIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterInternalNetworksFailoverIpAddressesToHclTerraform(struct?: DataPowerscaleClusterInternalNetworksFailoverIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterInternalNetworksFailoverIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterInternalNetworksFailoverIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterInternalNetworksFailoverIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }
}

export class DataPowerscaleClusterInternalNetworksFailoverIpAddressesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterInternalNetworksFailoverIpAddressesOutputReference {
    return new DataPowerscaleClusterInternalNetworksFailoverIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterInternalNetworksIntAIpAddresses {
}

export function dataPowerscaleClusterInternalNetworksIntAIpAddressesToTerraform(struct?: DataPowerscaleClusterInternalNetworksIntAIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterInternalNetworksIntAIpAddressesToHclTerraform(struct?: DataPowerscaleClusterInternalNetworksIntAIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterInternalNetworksIntAIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterInternalNetworksIntAIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterInternalNetworksIntAIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }
}

export class DataPowerscaleClusterInternalNetworksIntAIpAddressesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterInternalNetworksIntAIpAddressesOutputReference {
    return new DataPowerscaleClusterInternalNetworksIntAIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterInternalNetworksIntBIpAddresses {
}

export function dataPowerscaleClusterInternalNetworksIntBIpAddressesToTerraform(struct?: DataPowerscaleClusterInternalNetworksIntBIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterInternalNetworksIntBIpAddressesToHclTerraform(struct?: DataPowerscaleClusterInternalNetworksIntBIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterInternalNetworksIntBIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterInternalNetworksIntBIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterInternalNetworksIntBIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }
}

export class DataPowerscaleClusterInternalNetworksIntBIpAddressesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterInternalNetworksIntBIpAddressesOutputReference {
    return new DataPowerscaleClusterInternalNetworksIntBIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterInternalNetworks {
}

export function dataPowerscaleClusterInternalNetworksToTerraform(struct?: DataPowerscaleClusterInternalNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterInternalNetworksToHclTerraform(struct?: DataPowerscaleClusterInternalNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterInternalNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterInternalNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterInternalNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failover_ip_addresses - computed: true, optional: false, required: false
  private _failoverIpAddresses = new DataPowerscaleClusterInternalNetworksFailoverIpAddressesList(this, "failover_ip_addresses", false);
  public get failoverIpAddresses() {
    return this._failoverIpAddresses;
  }

  // failover_status - computed: true, optional: false, required: false
  public get failoverStatus() {
    return this.getStringAttribute('failover_status');
  }

  // int_a_fabric - computed: true, optional: false, required: false
  public get intAFabric() {
    return this.getStringAttribute('int_a_fabric');
  }

  // int_a_ip_addresses - computed: true, optional: false, required: false
  private _intAIpAddresses = new DataPowerscaleClusterInternalNetworksIntAIpAddressesList(this, "int_a_ip_addresses", false);
  public get intAIpAddresses() {
    return this._intAIpAddresses;
  }

  // int_a_mtu - computed: true, optional: false, required: false
  public get intAMtu() {
    return this.getNumberAttribute('int_a_mtu');
  }

  // int_a_prefix_length - computed: true, optional: false, required: false
  public get intAPrefixLength() {
    return this.getNumberAttribute('int_a_prefix_length');
  }

  // int_a_status - computed: true, optional: false, required: false
  public get intAStatus() {
    return this.getStringAttribute('int_a_status');
  }

  // int_b_fabric - computed: true, optional: false, required: false
  public get intBFabric() {
    return this.getStringAttribute('int_b_fabric');
  }

  // int_b_ip_addresses - computed: true, optional: false, required: false
  private _intBIpAddresses = new DataPowerscaleClusterInternalNetworksIntBIpAddressesList(this, "int_b_ip_addresses", false);
  public get intBIpAddresses() {
    return this._intBIpAddresses;
  }

  // int_b_mtu - computed: true, optional: false, required: false
  public get intBMtu() {
    return this.getNumberAttribute('int_b_mtu');
  }

  // int_b_prefix_length - computed: true, optional: false, required: false
  public get intBPrefixLength() {
    return this.getNumberAttribute('int_b_prefix_length');
  }
}
export interface DataPowerscaleClusterNodesErrors {
}

export function dataPowerscaleClusterNodesErrorsToTerraform(struct?: DataPowerscaleClusterNodesErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesErrorsToHclTerraform(struct?: DataPowerscaleClusterNodesErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // lnn - computed: true, optional: false, required: false
  public get lnn() {
    return this.getNumberAttribute('lnn');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }
}

export class DataPowerscaleClusterNodesErrorsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesErrorsOutputReference {
    return new DataPowerscaleClusterNodesErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodesNodesDrivesFirmware {
}

export function dataPowerscaleClusterNodesNodesDrivesFirmwareToTerraform(struct?: DataPowerscaleClusterNodesNodesDrivesFirmware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesDrivesFirmwareToHclTerraform(struct?: DataPowerscaleClusterNodesNodesDrivesFirmware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesDrivesFirmwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesDrivesFirmware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesDrivesFirmware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_firmware - computed: true, optional: false, required: false
  public get currentFirmware() {
    return this.getStringAttribute('current_firmware');
  }

  // desired_firmware - computed: true, optional: false, required: false
  public get desiredFirmware() {
    return this.getStringAttribute('desired_firmware');
  }
}
export interface DataPowerscaleClusterNodesNodesDrives {
}

export function dataPowerscaleClusterNodesNodesDrivesToTerraform(struct?: DataPowerscaleClusterNodesNodesDrives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesDrivesToHclTerraform(struct?: DataPowerscaleClusterNodesNodesDrives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesDrivesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesNodesDrives | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesDrives | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baynum - computed: true, optional: false, required: false
  public get baynum() {
    return this.getNumberAttribute('baynum');
  }

  // blocks - computed: true, optional: false, required: false
  public get blocks() {
    return this.getNumberAttribute('blocks');
  }

  // chassis - computed: true, optional: false, required: false
  public get chassis() {
    return this.getNumberAttribute('chassis');
  }

  // devname - computed: true, optional: false, required: false
  public get devname() {
    return this.getStringAttribute('devname');
  }

  // firmware - computed: true, optional: false, required: false
  private _firmware = new DataPowerscaleClusterNodesNodesDrivesFirmwareOutputReference(this, "firmware");
  public get firmware() {
    return this._firmware;
  }

  // handle - computed: true, optional: false, required: false
  public get handle() {
    return this.getNumberAttribute('handle');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // lnum - computed: true, optional: false, required: false
  public get lnum() {
    return this.getNumberAttribute('lnum');
  }

  // locnstr - computed: true, optional: false, required: false
  public get locnstr() {
    return this.getStringAttribute('locnstr');
  }

  // logical_block_length - computed: true, optional: false, required: false
  public get logicalBlockLength() {
    return this.getNumberAttribute('logical_block_length');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // physical_block_length - computed: true, optional: false, required: false
  public get physicalBlockLength() {
    return this.getNumberAttribute('physical_block_length');
  }

  // present - computed: true, optional: false, required: false
  public get present() {
    return this.getBooleanAttribute('present');
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // purpose_description - computed: true, optional: false, required: false
  public get purposeDescription() {
    return this.getStringAttribute('purpose_description');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // ui_state - computed: true, optional: false, required: false
  public get uiState() {
    return this.getStringAttribute('ui_state');
  }

  // wwn - computed: true, optional: false, required: false
  public get wwn() {
    return this.getStringAttribute('wwn');
  }

  // x_loc - computed: true, optional: false, required: false
  public get xLoc() {
    return this.getNumberAttribute('x_loc');
  }

  // y_loc - computed: true, optional: false, required: false
  public get yLoc() {
    return this.getNumberAttribute('y_loc');
  }
}

export class DataPowerscaleClusterNodesNodesDrivesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesNodesDrivesOutputReference {
    return new DataPowerscaleClusterNodesNodesDrivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodesNodesHardware {
}

export function dataPowerscaleClusterNodesNodesHardwareToTerraform(struct?: DataPowerscaleClusterNodesNodesHardware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesHardwareToHclTerraform(struct?: DataPowerscaleClusterNodesNodesHardware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesHardwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesHardware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesHardware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chassis - computed: true, optional: false, required: false
  public get chassis() {
    return this.getStringAttribute('chassis');
  }

  // chassis_code - computed: true, optional: false, required: false
  public get chassisCode() {
    return this.getStringAttribute('chassis_code');
  }

  // chassis_count - computed: true, optional: false, required: false
  public get chassisCount() {
    return this.getStringAttribute('chassis_count');
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // disk_controller - computed: true, optional: false, required: false
  public get diskController() {
    return this.getStringAttribute('disk_controller');
  }

  // disk_expander - computed: true, optional: false, required: false
  public get diskExpander() {
    return this.getStringAttribute('disk_expander');
  }

  // family_code - computed: true, optional: false, required: false
  public get familyCode() {
    return this.getStringAttribute('family_code');
  }

  // flash_drive - computed: true, optional: false, required: false
  public get flashDrive() {
    return this.getStringAttribute('flash_drive');
  }

  // generation_code - computed: true, optional: false, required: false
  public get generationCode() {
    return this.getStringAttribute('generation_code');
  }

  // hwgen - computed: true, optional: false, required: false
  public get hwgen() {
    return this.getStringAttribute('hwgen');
  }

  // imb_version - computed: true, optional: false, required: false
  public get imbVersion() {
    return this.getStringAttribute('imb_version');
  }

  // infiniband - computed: true, optional: false, required: false
  public get infiniband() {
    return this.getStringAttribute('infiniband');
  }

  // lcd_version - computed: true, optional: false, required: false
  public get lcdVersion() {
    return this.getStringAttribute('lcd_version');
  }

  // motherboard - computed: true, optional: false, required: false
  public get motherboard() {
    return this.getStringAttribute('motherboard');
  }

  // net_interfaces - computed: true, optional: false, required: false
  public get netInterfaces() {
    return this.getStringAttribute('net_interfaces');
  }

  // nvram - computed: true, optional: false, required: false
  public get nvram() {
    return this.getStringAttribute('nvram');
  }

  // powersupplies - computed: true, optional: false, required: false
  public get powersupplies() {
    return this.getListAttribute('powersupplies');
  }

  // processor - computed: true, optional: false, required: false
  public get processor() {
    return this.getStringAttribute('processor');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // series - computed: true, optional: false, required: false
  public get series() {
    return this.getStringAttribute('series');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export interface DataPowerscaleClusterNodesNodesPartitionsPartitionsStatfs {
}

export function dataPowerscaleClusterNodesNodesPartitionsPartitionsStatfsToTerraform(struct?: DataPowerscaleClusterNodesNodesPartitionsPartitionsStatfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesPartitionsPartitionsStatfsToHclTerraform(struct?: DataPowerscaleClusterNodesNodesPartitionsPartitionsStatfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesPartitionsPartitionsStatfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesPartitionsPartitionsStatfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesPartitionsPartitionsStatfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // f_bavail - computed: true, optional: false, required: false
  public get fBavail() {
    return this.getNumberAttribute('f_bavail');
  }

  // f_bfree - computed: true, optional: false, required: false
  public get fBfree() {
    return this.getNumberAttribute('f_bfree');
  }

  // f_blocks - computed: true, optional: false, required: false
  public get fBlocks() {
    return this.getNumberAttribute('f_blocks');
  }

  // f_bsize - computed: true, optional: false, required: false
  public get fBsize() {
    return this.getNumberAttribute('f_bsize');
  }

  // f_ffree - computed: true, optional: false, required: false
  public get fFfree() {
    return this.getNumberAttribute('f_ffree');
  }

  // f_files - computed: true, optional: false, required: false
  public get fFiles() {
    return this.getNumberAttribute('f_files');
  }

  // f_flags - computed: true, optional: false, required: false
  public get fFlags() {
    return this.getNumberAttribute('f_flags');
  }

  // f_fstypename - computed: true, optional: false, required: false
  public get fFstypename() {
    return this.getStringAttribute('f_fstypename');
  }

  // f_iosize - computed: true, optional: false, required: false
  public get fIosize() {
    return this.getNumberAttribute('f_iosize');
  }

  // f_mntfromname - computed: true, optional: false, required: false
  public get fMntfromname() {
    return this.getStringAttribute('f_mntfromname');
  }

  // f_mntonname - computed: true, optional: false, required: false
  public get fMntonname() {
    return this.getStringAttribute('f_mntonname');
  }

  // f_namemax - computed: true, optional: false, required: false
  public get fNamemax() {
    return this.getNumberAttribute('f_namemax');
  }

  // f_owner - computed: true, optional: false, required: false
  public get fOwner() {
    return this.getNumberAttribute('f_owner');
  }

  // f_type - computed: true, optional: false, required: false
  public get fType() {
    return this.getNumberAttribute('f_type');
  }

  // f_version - computed: true, optional: false, required: false
  public get fVersion() {
    return this.getNumberAttribute('f_version');
  }
}
export interface DataPowerscaleClusterNodesNodesPartitionsPartitions {
}

export function dataPowerscaleClusterNodesNodesPartitionsPartitionsToTerraform(struct?: DataPowerscaleClusterNodesNodesPartitionsPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesPartitionsPartitionsToHclTerraform(struct?: DataPowerscaleClusterNodesNodesPartitionsPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesPartitionsPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesNodesPartitionsPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesPartitionsPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // component_devices - computed: true, optional: false, required: false
  public get componentDevices() {
    return this.getStringAttribute('component_devices');
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }

  // percent_used - computed: true, optional: false, required: false
  public get percentUsed() {
    return this.getStringAttribute('percent_used');
  }

  // statfs - computed: true, optional: false, required: false
  private _statfs = new DataPowerscaleClusterNodesNodesPartitionsPartitionsStatfsOutputReference(this, "statfs");
  public get statfs() {
    return this._statfs;
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class DataPowerscaleClusterNodesNodesPartitionsPartitionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesNodesPartitionsPartitionsOutputReference {
    return new DataPowerscaleClusterNodesNodesPartitionsPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodesNodesPartitions {
}

export function dataPowerscaleClusterNodesNodesPartitionsToTerraform(struct?: DataPowerscaleClusterNodesNodesPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesPartitionsToHclTerraform(struct?: DataPowerscaleClusterNodesNodesPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesPartitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // partitions - computed: true, optional: false, required: false
  private _partitions = new DataPowerscaleClusterNodesNodesPartitionsPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
}
export interface DataPowerscaleClusterNodesNodesSensorsSensorsValues {
}

export function dataPowerscaleClusterNodesNodesSensorsSensorsValuesToTerraform(struct?: DataPowerscaleClusterNodesNodesSensorsSensorsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesSensorsSensorsValuesToHclTerraform(struct?: DataPowerscaleClusterNodesNodesSensorsSensorsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesSensorsSensorsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesNodesSensorsSensorsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesSensorsSensorsValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPowerscaleClusterNodesNodesSensorsSensorsValuesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesNodesSensorsSensorsValuesOutputReference {
    return new DataPowerscaleClusterNodesNodesSensorsSensorsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodesNodesSensorsSensors {
}

export function dataPowerscaleClusterNodesNodesSensorsSensorsToTerraform(struct?: DataPowerscaleClusterNodesNodesSensorsSensors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesSensorsSensorsToHclTerraform(struct?: DataPowerscaleClusterNodesNodesSensorsSensors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesSensorsSensorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesNodesSensorsSensors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesSensorsSensors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataPowerscaleClusterNodesNodesSensorsSensorsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataPowerscaleClusterNodesNodesSensorsSensorsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesNodesSensorsSensorsOutputReference {
    return new DataPowerscaleClusterNodesNodesSensorsSensorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodesNodesSensors {
}

export function dataPowerscaleClusterNodesNodesSensorsToTerraform(struct?: DataPowerscaleClusterNodesNodesSensors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesSensorsToHclTerraform(struct?: DataPowerscaleClusterNodesNodesSensors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesSensorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesSensors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesSensors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensors - computed: true, optional: false, required: false
  private _sensors = new DataPowerscaleClusterNodesNodesSensorsSensorsList(this, "sensors", false);
  public get sensors() {
    return this._sensors;
  }
}
export interface DataPowerscaleClusterNodesNodesStateReadonly {
}

export function dataPowerscaleClusterNodesNodesStateReadonlyToTerraform(struct?: DataPowerscaleClusterNodesNodesStateReadonly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStateReadonlyToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStateReadonly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStateReadonlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesStateReadonly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStateReadonly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed - computed: true, optional: false, required: false
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getBooleanAttribute('mode');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataPowerscaleClusterNodesNodesStateServicelight {
}

export function dataPowerscaleClusterNodesNodesStateServicelightToTerraform(struct?: DataPowerscaleClusterNodesNodesStateServicelight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStateServicelightToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStateServicelight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStateServicelightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesStateServicelight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStateServicelight | undefined) {
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
export interface DataPowerscaleClusterNodesNodesStateSmartfail {
}

export function dataPowerscaleClusterNodesNodesStateSmartfailToTerraform(struct?: DataPowerscaleClusterNodesNodesStateSmartfail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStateSmartfailToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStateSmartfail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStateSmartfailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesStateSmartfail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStateSmartfail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // smartfailed - computed: true, optional: false, required: false
  public get smartfailed() {
    return this.getBooleanAttribute('smartfailed');
  }
}
export interface DataPowerscaleClusterNodesNodesState {
}

export function dataPowerscaleClusterNodesNodesStateToTerraform(struct?: DataPowerscaleClusterNodesNodesState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStateToHclTerraform(struct?: DataPowerscaleClusterNodesNodesState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // readonly - computed: true, optional: false, required: false
  private _readonly = new DataPowerscaleClusterNodesNodesStateReadonlyOutputReference(this, "readonly");
  public get readonly() {
    return this._readonly;
  }

  // servicelight - computed: true, optional: false, required: false
  private _servicelight = new DataPowerscaleClusterNodesNodesStateServicelightOutputReference(this, "servicelight");
  public get servicelight() {
    return this._servicelight;
  }

  // smartfail - computed: true, optional: false, required: false
  private _smartfail = new DataPowerscaleClusterNodesNodesStateSmartfailOutputReference(this, "smartfail");
  public get smartfail() {
    return this._smartfail;
  }
}
export interface DataPowerscaleClusterNodesNodesStatusBatterystatus {
}

export function dataPowerscaleClusterNodesNodesStatusBatterystatusToTerraform(struct?: DataPowerscaleClusterNodesNodesStatusBatterystatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStatusBatterystatusToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStatusBatterystatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStatusBatterystatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesStatusBatterystatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStatusBatterystatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_test_time1 - computed: true, optional: false, required: false
  public get lastTestTime1() {
    return this.getStringAttribute('last_test_time1');
  }

  // last_test_time2 - computed: true, optional: false, required: false
  public get lastTestTime2() {
    return this.getStringAttribute('last_test_time2');
  }

  // next_test_time1 - computed: true, optional: false, required: false
  public get nextTestTime1() {
    return this.getStringAttribute('next_test_time1');
  }

  // next_test_time2 - computed: true, optional: false, required: false
  public get nextTestTime2() {
    return this.getStringAttribute('next_test_time2');
  }

  // present - computed: true, optional: false, required: false
  public get present() {
    return this.getBooleanAttribute('present');
  }

  // result1 - computed: true, optional: false, required: false
  public get result1() {
    return this.getStringAttribute('result1');
  }

  // result2 - computed: true, optional: false, required: false
  public get result2() {
    return this.getStringAttribute('result2');
  }

  // status1 - computed: true, optional: false, required: false
  public get status1() {
    return this.getStringAttribute('status1');
  }

  // status2 - computed: true, optional: false, required: false
  public get status2() {
    return this.getStringAttribute('status2');
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getBooleanAttribute('supported');
  }
}
export interface DataPowerscaleClusterNodesNodesStatusCapacity {
}

export function dataPowerscaleClusterNodesNodesStatusCapacityToTerraform(struct?: DataPowerscaleClusterNodesNodesStatusCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStatusCapacityToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStatusCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStatusCapacityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesNodesStatusCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStatusCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bytes - computed: true, optional: false, required: false
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerscaleClusterNodesNodesStatusCapacityList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesNodesStatusCapacityOutputReference {
    return new DataPowerscaleClusterNodesNodesStatusCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodesNodesStatusCpu {
}

export function dataPowerscaleClusterNodesNodesStatusCpuToTerraform(struct?: DataPowerscaleClusterNodesNodesStatusCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStatusCpuToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStatusCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStatusCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesStatusCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStatusCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // overtemp - computed: true, optional: false, required: false
  public get overtemp() {
    return this.getStringAttribute('overtemp');
  }

  // proc - computed: true, optional: false, required: false
  public get proc() {
    return this.getStringAttribute('proc');
  }

  // speed_limit - computed: true, optional: false, required: false
  public get speedLimit() {
    return this.getStringAttribute('speed_limit');
  }
}
export interface DataPowerscaleClusterNodesNodesStatusNvramBatteries {
}

export function dataPowerscaleClusterNodesNodesStatusNvramBatteriesToTerraform(struct?: DataPowerscaleClusterNodesNodesStatusNvramBatteries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStatusNvramBatteriesToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStatusNvramBatteries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStatusNvramBatteriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesNodesStatusNvramBatteries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStatusNvramBatteries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // voltage - computed: true, optional: false, required: false
  public get voltage() {
    return this.getStringAttribute('voltage');
  }
}

export class DataPowerscaleClusterNodesNodesStatusNvramBatteriesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesNodesStatusNvramBatteriesOutputReference {
    return new DataPowerscaleClusterNodesNodesStatusNvramBatteriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodesNodesStatusNvram {
}

export function dataPowerscaleClusterNodesNodesStatusNvramToTerraform(struct?: DataPowerscaleClusterNodesNodesStatusNvram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStatusNvramToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStatusNvram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStatusNvramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesStatusNvram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStatusNvram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batteries - computed: true, optional: false, required: false
  private _batteries = new DataPowerscaleClusterNodesNodesStatusNvramBatteriesList(this, "batteries", false);
  public get batteries() {
    return this._batteries;
  }

  // battery_count - computed: true, optional: false, required: false
  public get batteryCount() {
    return this.getNumberAttribute('battery_count');
  }

  // charge_status - computed: true, optional: false, required: false
  public get chargeStatus() {
    return this.getStringAttribute('charge_status');
  }

  // charge_status_number - computed: true, optional: false, required: false
  public get chargeStatusNumber() {
    return this.getNumberAttribute('charge_status_number');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // present - computed: true, optional: false, required: false
  public get present() {
    return this.getBooleanAttribute('present');
  }

  // present_flash - computed: true, optional: false, required: false
  public get presentFlash() {
    return this.getBooleanAttribute('present_flash');
  }

  // present_size - computed: true, optional: false, required: false
  public get presentSize() {
    return this.getNumberAttribute('present_size');
  }

  // present_type - computed: true, optional: false, required: false
  public get presentType() {
    return this.getStringAttribute('present_type');
  }

  // ship_mode - computed: true, optional: false, required: false
  public get shipMode() {
    return this.getNumberAttribute('ship_mode');
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getBooleanAttribute('supported');
  }

  // supported_flash - computed: true, optional: false, required: false
  public get supportedFlash() {
    return this.getBooleanAttribute('supported_flash');
  }

  // supported_size - computed: true, optional: false, required: false
  public get supportedSize() {
    return this.getNumberAttribute('supported_size');
  }

  // supported_type - computed: true, optional: false, required: false
  public get supportedType() {
    return this.getStringAttribute('supported_type');
  }
}
export interface DataPowerscaleClusterNodesNodesStatusPowersuppliesSupplies {
}

export function dataPowerscaleClusterNodesNodesStatusPowersuppliesSuppliesToTerraform(struct?: DataPowerscaleClusterNodesNodesStatusPowersuppliesSupplies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStatusPowersuppliesSuppliesToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStatusPowersuppliesSupplies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStatusPowersuppliesSuppliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesNodesStatusPowersuppliesSupplies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStatusPowersuppliesSupplies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chassis - computed: true, optional: false, required: false
  public get chassis() {
    return this.getNumberAttribute('chassis');
  }

  // firmware - computed: true, optional: false, required: false
  public get firmware() {
    return this.getStringAttribute('firmware');
  }

  // good - computed: true, optional: false, required: false
  public get good() {
    return this.getStringAttribute('good');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerscaleClusterNodesNodesStatusPowersuppliesSuppliesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesNodesStatusPowersuppliesSuppliesOutputReference {
    return new DataPowerscaleClusterNodesNodesStatusPowersuppliesSuppliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodesNodesStatusPowersupplies {
}

export function dataPowerscaleClusterNodesNodesStatusPowersuppliesToTerraform(struct?: DataPowerscaleClusterNodesNodesStatusPowersupplies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStatusPowersuppliesToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStatusPowersupplies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStatusPowersuppliesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesStatusPowersupplies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStatusPowersupplies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // failures - computed: true, optional: false, required: false
  public get failures() {
    return this.getNumberAttribute('failures');
  }

  // has_cff - computed: true, optional: false, required: false
  public get hasCff() {
    return this.getBooleanAttribute('has_cff');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supplies - computed: true, optional: false, required: false
  private _supplies = new DataPowerscaleClusterNodesNodesStatusPowersuppliesSuppliesList(this, "supplies", false);
  public get supplies() {
    return this._supplies;
  }

  // supports_cff - computed: true, optional: false, required: false
  public get supportsCff() {
    return this.getBooleanAttribute('supports_cff');
  }
}
export interface DataPowerscaleClusterNodesNodesStatus {
}

export function dataPowerscaleClusterNodesNodesStatusToTerraform(struct?: DataPowerscaleClusterNodesNodesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesStatusToHclTerraform(struct?: DataPowerscaleClusterNodesNodesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodesNodesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batterystatus - computed: true, optional: false, required: false
  private _batterystatus = new DataPowerscaleClusterNodesNodesStatusBatterystatusOutputReference(this, "batterystatus");
  public get batterystatus() {
    return this._batterystatus;
  }

  // capacity - computed: true, optional: false, required: false
  private _capacity = new DataPowerscaleClusterNodesNodesStatusCapacityList(this, "capacity", false);
  public get capacity() {
    return this._capacity;
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataPowerscaleClusterNodesNodesStatusCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }

  // nvram - computed: true, optional: false, required: false
  private _nvram = new DataPowerscaleClusterNodesNodesStatusNvramOutputReference(this, "nvram");
  public get nvram() {
    return this._nvram;
  }

  // powersupplies - computed: true, optional: false, required: false
  private _powersupplies = new DataPowerscaleClusterNodesNodesStatusPowersuppliesOutputReference(this, "powersupplies");
  public get powersupplies() {
    return this._powersupplies;
  }

  // release - computed: true, optional: false, required: false
  public get release() {
    return this.getStringAttribute('release');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataPowerscaleClusterNodesNodes {
}

export function dataPowerscaleClusterNodesNodesToTerraform(struct?: DataPowerscaleClusterNodesNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesNodesToHclTerraform(struct?: DataPowerscaleClusterNodesNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleClusterNodesNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodesNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drives - computed: true, optional: false, required: false
  private _drives = new DataPowerscaleClusterNodesNodesDrivesList(this, "drives", false);
  public get drives() {
    return this._drives;
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // hardware - computed: true, optional: false, required: false
  private _hardware = new DataPowerscaleClusterNodesNodesHardwareOutputReference(this, "hardware");
  public get hardware() {
    return this._hardware;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // lnn - computed: true, optional: false, required: false
  public get lnn() {
    return this.getNumberAttribute('lnn');
  }

  // partitions - computed: true, optional: false, required: false
  private _partitions = new DataPowerscaleClusterNodesNodesPartitionsOutputReference(this, "partitions");
  public get partitions() {
    return this._partitions;
  }

  // sensors - computed: true, optional: false, required: false
  private _sensors = new DataPowerscaleClusterNodesNodesSensorsOutputReference(this, "sensors");
  public get sensors() {
    return this._sensors;
  }

  // state - computed: true, optional: false, required: false
  private _state = new DataPowerscaleClusterNodesNodesStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataPowerscaleClusterNodesNodesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}

export class DataPowerscaleClusterNodesNodesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPowerscaleClusterNodesNodesOutputReference {
    return new DataPowerscaleClusterNodesNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleClusterNodes {
}

export function dataPowerscaleClusterNodesToTerraform(struct?: DataPowerscaleClusterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterNodesToHclTerraform(struct?: DataPowerscaleClusterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataPowerscaleClusterNodesErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataPowerscaleClusterNodesNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/cluster powerscale_cluster}
*/
export class DataPowerscaleCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleCluster to import
  * @param importFromId The id of the existing DataPowerscaleCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/cluster powerscale_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_cluster',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs - computed: true, optional: false, required: false
  private _acs = new DataPowerscaleClusterAcsOutputReference(this, "acs");
  public get acs() {
    return this._acs;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataPowerscaleClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  private _identity = new DataPowerscaleClusterIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }

  // internal_networks - computed: true, optional: false, required: false
  private _internalNetworks = new DataPowerscaleClusterInternalNetworksOutputReference(this, "internal_networks");
  public get internalNetworks() {
    return this._internalNetworks;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataPowerscaleClusterNodesOutputReference(this, "nodes");
  public get nodes() {
    return this._nodes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
