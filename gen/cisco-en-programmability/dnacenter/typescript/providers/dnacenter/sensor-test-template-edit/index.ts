// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorTestTemplateEditConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#id SensorTestTemplateEdit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#parameters SensorTestTemplateEdit#parameters}
  */
  readonly parameters: SensorTestTemplateEditParameters;
}
export interface SensorTestTemplateEditItemApCoverage {
}

export function sensorTestTemplateEditItemApCoverageToTerraform(struct?: SensorTestTemplateEditItemApCoverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemApCoverageToHclTerraform(struct?: SensorTestTemplateEditItemApCoverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemApCoverageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemApCoverage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemApCoverage | undefined) {
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

export class SensorTestTemplateEditItemApCoverageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemApCoverageOutputReference {
    return new SensorTestTemplateEditItemApCoverageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemLocationInfoListStruct {
}

export function sensorTestTemplateEditItemLocationInfoListStructToTerraform(struct?: SensorTestTemplateEditItemLocationInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemLocationInfoListStructToHclTerraform(struct?: SensorTestTemplateEditItemLocationInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemLocationInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemLocationInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemLocationInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_sensors - computed: true, optional: false, required: false
  public get allSensors() {
    return this.getStringAttribute('all_sensors');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // location_type - computed: true, optional: false, required: false
  public get locationType() {
    return this.getStringAttribute('location_type');
  }

  // mac_address_list - computed: true, optional: false, required: false
  public get macAddressList() {
    return this.getListAttribute('mac_address_list');
  }

  // site_hierarchy - computed: true, optional: false, required: false
  public get siteHierarchy() {
    return this.getStringAttribute('site_hierarchy');
  }
}

export class SensorTestTemplateEditItemLocationInfoListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemLocationInfoListStructOutputReference {
    return new SensorTestTemplateEditItemLocationInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemScheduleFrequency {
}

export function sensorTestTemplateEditItemScheduleFrequencyToTerraform(struct?: SensorTestTemplateEditItemScheduleFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemScheduleFrequencyToHclTerraform(struct?: SensorTestTemplateEditItemScheduleFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemScheduleFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemScheduleFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemScheduleFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class SensorTestTemplateEditItemScheduleFrequencyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemScheduleFrequencyOutputReference {
    return new SensorTestTemplateEditItemScheduleFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequency {
}

export function sensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequencyToTerraform(struct?: SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequencyToHclTerraform(struct?: SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequencyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequencyOutputReference {
    return new SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemScheduleScheduleRangeTimeRange {
}

export function sensorTestTemplateEditItemScheduleScheduleRangeTimeRangeToTerraform(struct?: SensorTestTemplateEditItemScheduleScheduleRangeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemScheduleScheduleRangeTimeRangeToHclTerraform(struct?: SensorTestTemplateEditItemScheduleScheduleRangeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemScheduleScheduleRangeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemScheduleScheduleRangeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  private _frequency = new SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeFrequencyList(this, "frequency", false);
  public get frequency() {
    return this._frequency;
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeOutputReference {
    return new SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemScheduleScheduleRange {
}

export function sensorTestTemplateEditItemScheduleScheduleRangeToTerraform(struct?: SensorTestTemplateEditItemScheduleScheduleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemScheduleScheduleRangeToHclTerraform(struct?: SensorTestTemplateEditItemScheduleScheduleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemScheduleScheduleRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemScheduleScheduleRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemScheduleScheduleRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // time_range - computed: true, optional: false, required: false
  private _timeRange = new SensorTestTemplateEditItemScheduleScheduleRangeTimeRangeList(this, "time_range", false);
  public get timeRange() {
    return this._timeRange;
  }
}

export class SensorTestTemplateEditItemScheduleScheduleRangeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemScheduleScheduleRangeOutputReference {
    return new SensorTestTemplateEditItemScheduleScheduleRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemSchedule {
}

export function sensorTestTemplateEditItemScheduleToTerraform(struct?: SensorTestTemplateEditItemSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemScheduleToHclTerraform(struct?: SensorTestTemplateEditItemSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  private _frequency = new SensorTestTemplateEditItemScheduleFrequencyList(this, "frequency", false);
  public get frequency() {
    return this._frequency;
  }

  // schedule_range - computed: true, optional: false, required: false
  private _scheduleRange = new SensorTestTemplateEditItemScheduleScheduleRangeList(this, "schedule_range", false);
  public get scheduleRange() {
    return this._scheduleRange;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // test_schedule_mode - computed: true, optional: false, required: false
  public get testScheduleMode() {
    return this.getStringAttribute('test_schedule_mode');
  }
}

export class SensorTestTemplateEditItemScheduleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemScheduleOutputReference {
    return new SensorTestTemplateEditItemScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemSsidsTests {
}

export function sensorTestTemplateEditItemSsidsTestsToTerraform(struct?: SensorTestTemplateEditItemSsidsTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemSsidsTestsToHclTerraform(struct?: SensorTestTemplateEditItemSsidsTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemSsidsTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemSsidsTests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemSsidsTests | undefined) {
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

export class SensorTestTemplateEditItemSsidsTestsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemSsidsTestsOutputReference {
    return new SensorTestTemplateEditItemSsidsTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemSsidsThirdParty {
}

export function sensorTestTemplateEditItemSsidsThirdPartyToTerraform(struct?: SensorTestTemplateEditItemSsidsThirdParty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemSsidsThirdPartyToHclTerraform(struct?: SensorTestTemplateEditItemSsidsThirdParty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemSsidsThirdPartyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemSsidsThirdParty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemSsidsThirdParty | undefined) {
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

export class SensorTestTemplateEditItemSsidsThirdPartyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemSsidsThirdPartyOutputReference {
    return new SensorTestTemplateEditItemSsidsThirdPartyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItemSsids {
}

export function sensorTestTemplateEditItemSsidsToTerraform(struct?: SensorTestTemplateEditItemSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemSsidsToHclTerraform(struct?: SensorTestTemplateEditItemSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemSsidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItemSsids | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItemSsids | undefined) {
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
    return this.getListAttribute('layer3web_auth_email_address');
  }

  // layer3web_authpassword - computed: true, optional: false, required: false
  public get layer3WebAuthpassword() {
    return this.getListAttribute('layer3web_authpassword');
  }

  // layer3web_authsecurity - computed: true, optional: false, required: false
  public get layer3WebAuthsecurity() {
    return this.getListAttribute('layer3web_authsecurity');
  }

  // layer3web_authuser_name - computed: true, optional: false, required: false
  public get layer3WebAuthuserName() {
    return this.getListAttribute('layer3web_authuser_name');
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
  private _tests = new SensorTestTemplateEditItemSsidsTestsList(this, "tests", false);
  public get tests() {
    return this._tests;
  }

  // third_party - computed: true, optional: false, required: false
  private _thirdParty = new SensorTestTemplateEditItemSsidsThirdPartyList(this, "third_party", false);
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

export class SensorTestTemplateEditItemSsidsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemSsidsOutputReference {
    return new SensorTestTemplateEditItemSsidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditItem {
}

export function sensorTestTemplateEditItemToTerraform(struct?: SensorTestTemplateEditItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateEditItemToHclTerraform(struct?: SensorTestTemplateEditItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateEditItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_coverage - computed: true, optional: false, required: false
  private _apCoverage = new SensorTestTemplateEditItemApCoverageList(this, "ap_coverage", false);
  public get apCoverage() {
    return this._apCoverage;
  }

  // connection - computed: true, optional: false, required: false
  public get connection() {
    return this.getStringAttribute('connection');
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
  private _locationInfoList = new SensorTestTemplateEditItemLocationInfoListStructList(this, "location_info_list", false);
  public get locationInfoList() {
    return this._locationInfoList;
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
  private _schedule = new SensorTestTemplateEditItemScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // schedule_in_days - computed: true, optional: false, required: false
  public get scheduleInDays() {
    return this.getNumberAttribute('schedule_in_days');
  }

  // sensors - computed: true, optional: false, required: false
  public get sensors() {
    return this.getListAttribute('sensors');
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
  private _ssids = new SensorTestTemplateEditItemSsidsList(this, "ssids", false);
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

export class SensorTestTemplateEditItemList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditItemOutputReference {
    return new SensorTestTemplateEditItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditParametersLocationInfoListStruct {
  /**
  * All Sensors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#all_sensors SensorTestTemplateEdit#all_sensors}
  */
  readonly allSensors?: string;
  /**
  * Location Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#location_id SensorTestTemplateEdit#location_id}
  */
  readonly locationId?: string;
  /**
  * Location Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#location_type SensorTestTemplateEdit#location_type}
  */
  readonly locationType?: string;
  /**
  * Site Hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#site_hierarchy SensorTestTemplateEdit#site_hierarchy}
  */
  readonly siteHierarchy?: string;
}

export function sensorTestTemplateEditParametersLocationInfoListStructToTerraform(struct?: SensorTestTemplateEditParametersLocationInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_sensors: cdktf.stringToTerraform(struct!.allSensors),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    site_hierarchy: cdktf.stringToTerraform(struct!.siteHierarchy),
  }
}


export function sensorTestTemplateEditParametersLocationInfoListStructToHclTerraform(struct?: SensorTestTemplateEditParametersLocationInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_sensors: {
      value: cdktf.stringToHclTerraform(struct!.allSensors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestTemplateEditParametersLocationInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditParametersLocationInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allSensors !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSensors = this._allSensors;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._siteHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteHierarchy = this._siteHierarchy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditParametersLocationInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allSensors = undefined;
      this._locationId = undefined;
      this._locationType = undefined;
      this._siteHierarchy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allSensors = value.allSensors;
      this._locationId = value.locationId;
      this._locationType = value.locationType;
      this._siteHierarchy = value.siteHierarchy;
    }
  }

  // all_sensors - computed: true, optional: true, required: false
  private _allSensors?: string; 
  public get allSensors() {
    return this.getStringAttribute('all_sensors');
  }
  public set allSensors(value: string) {
    this._allSensors = value;
  }
  public resetAllSensors() {
    this._allSensors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSensorsInput() {
    return this._allSensors;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // location_type - computed: true, optional: true, required: false
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }

  // site_hierarchy - computed: true, optional: true, required: false
  private _siteHierarchy?: string; 
  public get siteHierarchy() {
    return this.getStringAttribute('site_hierarchy');
  }
  public set siteHierarchy(value: string) {
    this._siteHierarchy = value;
  }
  public resetSiteHierarchy() {
    this._siteHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteHierarchyInput() {
    return this._siteHierarchy;
  }
}

export class SensorTestTemplateEditParametersLocationInfoListStructList extends cdktf.ComplexList {
  public internalValue? : SensorTestTemplateEditParametersLocationInfoListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditParametersLocationInfoListStructOutputReference {
    return new SensorTestTemplateEditParametersLocationInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditParametersScheduleFrequency {
  /**
  * Unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#unit SensorTestTemplateEdit#unit}
  */
  readonly unit?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#value SensorTestTemplateEdit#value}
  */
  readonly value?: number;
}

export function sensorTestTemplateEditParametersScheduleFrequencyToTerraform(struct?: SensorTestTemplateEditParametersScheduleFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sensorTestTemplateEditParametersScheduleFrequencyToHclTerraform(struct?: SensorTestTemplateEditParametersScheduleFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestTemplateEditParametersScheduleFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditParametersScheduleFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditParametersScheduleFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class SensorTestTemplateEditParametersScheduleFrequencyList extends cdktf.ComplexList {
  public internalValue? : SensorTestTemplateEditParametersScheduleFrequency[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditParametersScheduleFrequencyOutputReference {
    return new SensorTestTemplateEditParametersScheduleFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequency {
  /**
  * Unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#unit SensorTestTemplateEdit#unit}
  */
  readonly unit?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#value SensorTestTemplateEdit#value}
  */
  readonly value?: number;
}

export function sensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyToTerraform(struct?: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyToHclTerraform(struct?: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyList extends cdktf.ComplexList {
  public internalValue? : SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequency[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyOutputReference {
    return new SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditParametersScheduleScheduleRangeTimeRange {
  /**
  * From
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#from SensorTestTemplateEdit#from}
  */
  readonly from?: string;
  /**
  * To
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#to SensorTestTemplateEdit#to}
  */
  readonly to?: string;
  /**
  * frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#frequency SensorTestTemplateEdit#frequency}
  */
  readonly frequency?: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequency[] | cdktf.IResolvable;
}

export function sensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeToTerraform(struct?: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
    frequency: cdktf.listMapper(sensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyToTerraform, true)(struct!.frequency),
  }
}


export function sensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeToHclTerraform(struct?: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.listMapperHcl(sensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyToHclTerraform, true)(struct!.frequency),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditParametersScheduleScheduleRangeTimeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._frequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
      this._frequency.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
      this._frequency.internalValue = value.frequency;
    }
  }

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency = new SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequencyList(this, "frequency", false);
  public get frequency() {
    return this._frequency;
  }
  public putFrequency(value: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeFrequency[] | cdktf.IResolvable) {
    this._frequency.internalValue = value;
  }
  public resetFrequency() {
    this._frequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency.internalValue;
  }
}

export class SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeList extends cdktf.ComplexList {
  public internalValue? : SensorTestTemplateEditParametersScheduleScheduleRangeTimeRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeOutputReference {
    return new SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditParametersScheduleScheduleRange {
  /**
  * Day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#day SensorTestTemplateEdit#day}
  */
  readonly day?: string;
  /**
  * time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#time_range SensorTestTemplateEdit#time_range}
  */
  readonly timeRange?: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRange[] | cdktf.IResolvable;
}

export function sensorTestTemplateEditParametersScheduleScheduleRangeToTerraform(struct?: SensorTestTemplateEditParametersScheduleScheduleRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    time_range: cdktf.listMapper(sensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeToTerraform, true)(struct!.timeRange),
  }
}


export function sensorTestTemplateEditParametersScheduleScheduleRangeToHclTerraform(struct?: SensorTestTemplateEditParametersScheduleScheduleRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_range: {
      value: cdktf.listMapperHcl(sensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeToHclTerraform, true)(struct!.timeRange),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestTemplateEditParametersScheduleScheduleRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditParametersScheduleScheduleRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._timeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditParametersScheduleScheduleRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._timeRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._timeRange.internalValue = value.timeRange;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange = new SensorTestTemplateEditParametersScheduleScheduleRangeTimeRangeList(this, "time_range", false);
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: SensorTestTemplateEditParametersScheduleScheduleRangeTimeRange[] | cdktf.IResolvable) {
    this._timeRange.internalValue = value;
  }
  public resetTimeRange() {
    this._timeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }
}

export class SensorTestTemplateEditParametersScheduleScheduleRangeList extends cdktf.ComplexList {
  public internalValue? : SensorTestTemplateEditParametersScheduleScheduleRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditParametersScheduleScheduleRangeOutputReference {
    return new SensorTestTemplateEditParametersScheduleScheduleRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditParametersSchedule {
  /**
  * Test Schedule Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#test_schedule_mode SensorTestTemplateEdit#test_schedule_mode}
  */
  readonly testScheduleMode?: string;
  /**
  * frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#frequency SensorTestTemplateEdit#frequency}
  */
  readonly frequency?: SensorTestTemplateEditParametersScheduleFrequency[] | cdktf.IResolvable;
  /**
  * schedule_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#schedule_range SensorTestTemplateEdit#schedule_range}
  */
  readonly scheduleRange?: SensorTestTemplateEditParametersScheduleScheduleRange[] | cdktf.IResolvable;
}

export function sensorTestTemplateEditParametersScheduleToTerraform(struct?: SensorTestTemplateEditParametersSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_schedule_mode: cdktf.stringToTerraform(struct!.testScheduleMode),
    frequency: cdktf.listMapper(sensorTestTemplateEditParametersScheduleFrequencyToTerraform, true)(struct!.frequency),
    schedule_range: cdktf.listMapper(sensorTestTemplateEditParametersScheduleScheduleRangeToTerraform, true)(struct!.scheduleRange),
  }
}


export function sensorTestTemplateEditParametersScheduleToHclTerraform(struct?: SensorTestTemplateEditParametersSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_schedule_mode: {
      value: cdktf.stringToHclTerraform(struct!.testScheduleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.listMapperHcl(sensorTestTemplateEditParametersScheduleFrequencyToHclTerraform, true)(struct!.frequency),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestTemplateEditParametersScheduleFrequencyList",
    },
    schedule_range: {
      value: cdktf.listMapperHcl(sensorTestTemplateEditParametersScheduleScheduleRangeToHclTerraform, true)(struct!.scheduleRange),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestTemplateEditParametersScheduleScheduleRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestTemplateEditParametersScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateEditParametersSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testScheduleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.testScheduleMode = this._testScheduleMode;
    }
    if (this._frequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency?.internalValue;
    }
    if (this._scheduleRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleRange = this._scheduleRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditParametersSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testScheduleMode = undefined;
      this._frequency.internalValue = undefined;
      this._scheduleRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testScheduleMode = value.testScheduleMode;
      this._frequency.internalValue = value.frequency;
      this._scheduleRange.internalValue = value.scheduleRange;
    }
  }

  // test_schedule_mode - computed: true, optional: true, required: false
  private _testScheduleMode?: string; 
  public get testScheduleMode() {
    return this.getStringAttribute('test_schedule_mode');
  }
  public set testScheduleMode(value: string) {
    this._testScheduleMode = value;
  }
  public resetTestScheduleMode() {
    this._testScheduleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testScheduleModeInput() {
    return this._testScheduleMode;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency = new SensorTestTemplateEditParametersScheduleFrequencyList(this, "frequency", false);
  public get frequency() {
    return this._frequency;
  }
  public putFrequency(value: SensorTestTemplateEditParametersScheduleFrequency[] | cdktf.IResolvable) {
    this._frequency.internalValue = value;
  }
  public resetFrequency() {
    this._frequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency.internalValue;
  }

  // schedule_range - computed: false, optional: true, required: false
  private _scheduleRange = new SensorTestTemplateEditParametersScheduleScheduleRangeList(this, "schedule_range", false);
  public get scheduleRange() {
    return this._scheduleRange;
  }
  public putScheduleRange(value: SensorTestTemplateEditParametersScheduleScheduleRange[] | cdktf.IResolvable) {
    this._scheduleRange.internalValue = value;
  }
  public resetScheduleRange() {
    this._scheduleRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRangeInput() {
    return this._scheduleRange.internalValue;
  }
}

export class SensorTestTemplateEditParametersScheduleList extends cdktf.ComplexList {
  public internalValue? : SensorTestTemplateEditParametersSchedule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SensorTestTemplateEditParametersScheduleOutputReference {
    return new SensorTestTemplateEditParametersScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateEditParameters {
  /**
  * Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#template_name SensorTestTemplateEdit#template_name}
  */
  readonly templateName?: string;
  /**
  * location_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#location_info_list SensorTestTemplateEdit#location_info_list}
  */
  readonly locationInfoList?: SensorTestTemplateEditParametersLocationInfoListStruct[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#schedule SensorTestTemplateEdit#schedule}
  */
  readonly schedule?: SensorTestTemplateEditParametersSchedule[] | cdktf.IResolvable;
}

export function sensorTestTemplateEditParametersToTerraform(struct?: SensorTestTemplateEditParametersOutputReference | SensorTestTemplateEditParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_name: cdktf.stringToTerraform(struct!.templateName),
    location_info_list: cdktf.listMapper(sensorTestTemplateEditParametersLocationInfoListStructToTerraform, true)(struct!.locationInfoList),
    schedule: cdktf.listMapper(sensorTestTemplateEditParametersScheduleToTerraform, true)(struct!.schedule),
  }
}


export function sensorTestTemplateEditParametersToHclTerraform(struct?: SensorTestTemplateEditParametersOutputReference | SensorTestTemplateEditParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_info_list: {
      value: cdktf.listMapperHcl(sensorTestTemplateEditParametersLocationInfoListStructToHclTerraform, true)(struct!.locationInfoList),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestTemplateEditParametersLocationInfoListStructList",
    },
    schedule: {
      value: cdktf.listMapperHcl(sensorTestTemplateEditParametersScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "SensorTestTemplateEditParametersScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestTemplateEditParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SensorTestTemplateEditParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._locationInfoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationInfoList = this._locationInfoList?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateEditParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateName = undefined;
      this._locationInfoList.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateName = value.templateName;
      this._locationInfoList.internalValue = value.locationInfoList;
      this._schedule.internalValue = value.schedule;
    }
  }

  // template_name - computed: true, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // location_info_list - computed: false, optional: true, required: false
  private _locationInfoList = new SensorTestTemplateEditParametersLocationInfoListStructList(this, "location_info_list", false);
  public get locationInfoList() {
    return this._locationInfoList;
  }
  public putLocationInfoList(value: SensorTestTemplateEditParametersLocationInfoListStruct[] | cdktf.IResolvable) {
    this._locationInfoList.internalValue = value;
  }
  public resetLocationInfoList() {
    this._locationInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInfoListInput() {
    return this._locationInfoList.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new SensorTestTemplateEditParametersScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SensorTestTemplateEditParametersSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit dnacenter_sensor_test_template_edit}
*/
export class SensorTestTemplateEdit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sensor_test_template_edit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorTestTemplateEdit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorTestTemplateEdit to import
  * @param importFromId The id of the existing SensorTestTemplateEdit that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorTestTemplateEdit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sensor_test_template_edit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_edit dnacenter_sensor_test_template_edit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorTestTemplateEditConfig
  */
  public constructor(scope: Construct, id: string, config: SensorTestTemplateEditConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sensor_test_template_edit',
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
  private _item = new SensorTestTemplateEditItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new SensorTestTemplateEditParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SensorTestTemplateEditParameters) {
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
      parameters: sensorTestTemplateEditParametersToTerraform(this._parameters.internalValue),
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
        value: sensorTestTemplateEditParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SensorTestTemplateEditParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
