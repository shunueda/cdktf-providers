// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterDeviceHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceRole query parameter. The device role (One of CORE, ACCESS, DISTRIBUTION, ROUTER, WLC, AP)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#device_role DataDnacenterDeviceHealth#device_role}
  */
  readonly deviceRole?: string;
  /**
  * endTime query parameter. UTC epoch time in miliseconds
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#end_time DataDnacenterDeviceHealth#end_time}
  */
  readonly endTime?: number;
  /**
  * health query parameter. The device overall health (One of POOR, FAIR, GOOD)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#health DataDnacenterDeviceHealth#health}
  */
  readonly health?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#id DataDnacenterDeviceHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter. Max number of device entries in the response (default to 50.  Max at 1000)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#limit DataDnacenterDeviceHealth#limit}
  */
  readonly limit?: number;
  /**
  * offset query parameter. The offset of the first device in the returned data
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#offset DataDnacenterDeviceHealth#offset}
  */
  readonly offset?: number;
  /**
  * siteId query parameter. Assurance site UUID value
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#site_id DataDnacenterDeviceHealth#site_id}
  */
  readonly siteId?: string;
  /**
  * startTime query parameter. UTC epoch time in milliseconds
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#start_time DataDnacenterDeviceHealth#start_time}
  */
  readonly startTime?: number;
}
export interface DataDnacenterDeviceHealthItemsAirQualityHealth {
}

export function dataDnacenterDeviceHealthItemsAirQualityHealthToTerraform(struct?: DataDnacenterDeviceHealthItemsAirQualityHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceHealthItemsAirQualityHealthToHclTerraform(struct?: DataDnacenterDeviceHealthItemsAirQualityHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceHealthItemsAirQualityHealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceHealthItemsAirQualityHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceHealthItemsAirQualityHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ghz24 - computed: true, optional: false, required: false
  public get ghz24() {
    return this.getNumberAttribute('ghz24');
  }

  // ghz50 - computed: true, optional: false, required: false
  public get ghz50() {
    return this.getNumberAttribute('ghz50');
  }

  // radio0 - computed: true, optional: false, required: false
  public get radio0() {
    return this.getNumberAttribute('radio0');
  }

  // radio1 - computed: true, optional: false, required: false
  public get radio1() {
    return this.getNumberAttribute('radio1');
  }
}

export class DataDnacenterDeviceHealthItemsAirQualityHealthList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDnacenterDeviceHealthItemsAirQualityHealthOutputReference {
    return new DataDnacenterDeviceHealthItemsAirQualityHealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceHealthItemsClientCount {
}

export function dataDnacenterDeviceHealthItemsClientCountToTerraform(struct?: DataDnacenterDeviceHealthItemsClientCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceHealthItemsClientCountToHclTerraform(struct?: DataDnacenterDeviceHealthItemsClientCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceHealthItemsClientCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceHealthItemsClientCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceHealthItemsClientCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ghz24 - computed: true, optional: false, required: false
  public get ghz24() {
    return this.getNumberAttribute('ghz24');
  }

  // ghz50 - computed: true, optional: false, required: false
  public get ghz50() {
    return this.getNumberAttribute('ghz50');
  }

  // radio0 - computed: true, optional: false, required: false
  public get radio0() {
    return this.getNumberAttribute('radio0');
  }

  // radio1 - computed: true, optional: false, required: false
  public get radio1() {
    return this.getNumberAttribute('radio1');
  }
}

export class DataDnacenterDeviceHealthItemsClientCountList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDnacenterDeviceHealthItemsClientCountOutputReference {
    return new DataDnacenterDeviceHealthItemsClientCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceHealthItemsInterferenceHealth {
}

export function dataDnacenterDeviceHealthItemsInterferenceHealthToTerraform(struct?: DataDnacenterDeviceHealthItemsInterferenceHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceHealthItemsInterferenceHealthToHclTerraform(struct?: DataDnacenterDeviceHealthItemsInterferenceHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceHealthItemsInterferenceHealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceHealthItemsInterferenceHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceHealthItemsInterferenceHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ghz24 - computed: true, optional: false, required: false
  public get ghz24() {
    return this.getNumberAttribute('ghz24');
  }

  // ghz50 - computed: true, optional: false, required: false
  public get ghz50() {
    return this.getNumberAttribute('ghz50');
  }

  // radio0 - computed: true, optional: false, required: false
  public get radio0() {
    return this.getNumberAttribute('radio0');
  }

  // radio1 - computed: true, optional: false, required: false
  public get radio1() {
    return this.getNumberAttribute('radio1');
  }
}

export class DataDnacenterDeviceHealthItemsInterferenceHealthList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDnacenterDeviceHealthItemsInterferenceHealthOutputReference {
    return new DataDnacenterDeviceHealthItemsInterferenceHealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceHealthItemsNoiseHealth {
}

export function dataDnacenterDeviceHealthItemsNoiseHealthToTerraform(struct?: DataDnacenterDeviceHealthItemsNoiseHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceHealthItemsNoiseHealthToHclTerraform(struct?: DataDnacenterDeviceHealthItemsNoiseHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceHealthItemsNoiseHealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceHealthItemsNoiseHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceHealthItemsNoiseHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ghz50 - computed: true, optional: false, required: false
  public get ghz50() {
    return this.getNumberAttribute('ghz50');
  }

  // radio1 - computed: true, optional: false, required: false
  public get radio1() {
    return this.getNumberAttribute('radio1');
  }
}

export class DataDnacenterDeviceHealthItemsNoiseHealthList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDnacenterDeviceHealthItemsNoiseHealthOutputReference {
    return new DataDnacenterDeviceHealthItemsNoiseHealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceHealthItemsUtilizationHealth {
}

export function dataDnacenterDeviceHealthItemsUtilizationHealthToTerraform(struct?: DataDnacenterDeviceHealthItemsUtilizationHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceHealthItemsUtilizationHealthToHclTerraform(struct?: DataDnacenterDeviceHealthItemsUtilizationHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceHealthItemsUtilizationHealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceHealthItemsUtilizationHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceHealthItemsUtilizationHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ghz24 - computed: true, optional: false, required: false
  public get ghz24() {
    return this.getNumberAttribute('ghz24');
  }

  // ghz50 - computed: true, optional: false, required: false
  public get ghz50() {
    return this.getNumberAttribute('ghz50');
  }

  // radio0 - computed: true, optional: false, required: false
  public get radio0() {
    return this.getNumberAttribute('radio0');
  }

  // radio1 - computed: true, optional: false, required: false
  public get radio1() {
    return this.getNumberAttribute('radio1');
  }
}

export class DataDnacenterDeviceHealthItemsUtilizationHealthList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDnacenterDeviceHealthItemsUtilizationHealthOutputReference {
    return new DataDnacenterDeviceHealthItemsUtilizationHealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceHealthItems {
}

export function dataDnacenterDeviceHealthItemsToTerraform(struct?: DataDnacenterDeviceHealthItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceHealthItemsToHclTerraform(struct?: DataDnacenterDeviceHealthItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceHealthItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceHealthItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceHealthItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // air_quality_health - computed: true, optional: false, required: false
  private _airQualityHealth = new DataDnacenterDeviceHealthItemsAirQualityHealthList(this, "air_quality_health", false);
  public get airQualityHealth() {
    return this._airQualityHealth;
  }

  // client_count - computed: true, optional: false, required: false
  private _clientCount = new DataDnacenterDeviceHealthItemsClientCountList(this, "client_count", false);
  public get clientCount() {
    return this._clientCount;
  }

  // cpu_health - computed: true, optional: false, required: false
  public get cpuHealth() {
    return this.getNumberAttribute('cpu_health');
  }

  // cpu_ulitilization - computed: true, optional: false, required: false
  public get cpuUlitilization() {
    return this.getNumberAttribute('cpu_ulitilization');
  }

  // device_family - computed: true, optional: false, required: false
  public get deviceFamily() {
    return this.getStringAttribute('device_family');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // inter_device_link_avail_health - computed: true, optional: false, required: false
  public get interDeviceLinkAvailHealth() {
    return this.getNumberAttribute('inter_device_link_avail_health');
  }

  // interface_link_err_health - computed: true, optional: false, required: false
  public get interfaceLinkErrHealth() {
    return this.getNumberAttribute('interface_link_err_health');
  }

  // interference_health - computed: true, optional: false, required: false
  private _interferenceHealth = new DataDnacenterDeviceHealthItemsInterferenceHealthList(this, "interference_health", false);
  public get interferenceHealth() {
    return this._interferenceHealth;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // issue_count - computed: true, optional: false, required: false
  public get issueCount() {
    return this.getNumberAttribute('issue_count');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // memory_utilization - computed: true, optional: false, required: false
  public get memoryUtilization() {
    return this.getNumberAttribute('memory_utilization');
  }

  // memory_utilization_health - computed: true, optional: false, required: false
  public get memoryUtilizationHealth() {
    return this.getNumberAttribute('memory_utilization_health');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // noise_health - computed: true, optional: false, required: false
  private _noiseHealth = new DataDnacenterDeviceHealthItemsNoiseHealthList(this, "noise_health", false);
  public get noiseHealth() {
    return this._noiseHealth;
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // overall_health - computed: true, optional: false, required: false
  public get overallHealth() {
    return this.getNumberAttribute('overall_health');
  }

  // reachability_health - computed: true, optional: false, required: false
  public get reachabilityHealth() {
    return this.getStringAttribute('reachability_health');
  }

  // utilization_health - computed: true, optional: false, required: false
  private _utilizationHealth = new DataDnacenterDeviceHealthItemsUtilizationHealthList(this, "utilization_health", false);
  public get utilizationHealth() {
    return this._utilizationHealth;
  }
}

export class DataDnacenterDeviceHealthItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDnacenterDeviceHealthItemsOutputReference {
    return new DataDnacenterDeviceHealthItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health dnacenter_device_health}
*/
export class DataDnacenterDeviceHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_device_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterDeviceHealth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterDeviceHealth to import
  * @param importFromId The id of the existing DataDnacenterDeviceHealth that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterDeviceHealth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_device_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_health dnacenter_device_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterDeviceHealthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterDeviceHealthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_device_health',
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
    this._deviceRole = config.deviceRole;
    this._endTime = config.endTime;
    this._health = config.health;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._siteId = config.siteId;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_role - computed: false, optional: true, required: false
  private _deviceRole?: string; 
  public get deviceRole() {
    return this.getStringAttribute('device_role');
  }
  public set deviceRole(value: string) {
    this._deviceRole = value;
  }
  public resetDeviceRole() {
    this._deviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRoleInput() {
    return this._deviceRole;
  }

  // end_time - computed: false, optional: true, required: false
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

  // health - computed: false, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterDeviceHealthItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // site_id - computed: false, optional: true, required: false
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

  // start_time - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_role: cdktf.stringToTerraform(this._deviceRole),
      end_time: cdktf.numberToTerraform(this._endTime),
      health: cdktf.stringToTerraform(this._health),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      site_id: cdktf.stringToTerraform(this._siteId),
      start_time: cdktf.numberToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_role: {
        value: cdktf.stringToHclTerraform(this._deviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health: {
        value: cdktf.stringToHclTerraform(this._health),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
