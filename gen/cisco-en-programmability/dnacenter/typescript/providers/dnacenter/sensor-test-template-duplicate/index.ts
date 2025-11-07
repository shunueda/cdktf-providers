// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_duplicate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorTestTemplateDuplicateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_duplicate#id SensorTestTemplateDuplicate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_duplicate#parameters SensorTestTemplateDuplicate#parameters}
  */
  readonly parameters: SensorTestTemplateDuplicateParameters;
}
export interface SensorTestTemplateDuplicateItemApCoverage {
}

export function sensorTestTemplateDuplicateItemApCoverageToTerraform(struct?: SensorTestTemplateDuplicateItemApCoverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemApCoverageToHclTerraform(struct?: SensorTestTemplateDuplicateItemApCoverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemApCoverageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemApCoverage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemApCoverage | undefined) {
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

export class SensorTestTemplateDuplicateItemApCoverageList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemApCoverageOutputReference {
    return new SensorTestTemplateDuplicateItemApCoverageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemLocationInfoListStruct {
}

export function sensorTestTemplateDuplicateItemLocationInfoListStructToTerraform(struct?: SensorTestTemplateDuplicateItemLocationInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemLocationInfoListStructToHclTerraform(struct?: SensorTestTemplateDuplicateItemLocationInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemLocationInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemLocationInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemLocationInfoListStruct | undefined) {
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

export class SensorTestTemplateDuplicateItemLocationInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemLocationInfoListStructOutputReference {
    return new SensorTestTemplateDuplicateItemLocationInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemScheduleFrequency {
}

export function sensorTestTemplateDuplicateItemScheduleFrequencyToTerraform(struct?: SensorTestTemplateDuplicateItemScheduleFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemScheduleFrequencyToHclTerraform(struct?: SensorTestTemplateDuplicateItemScheduleFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemScheduleFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemScheduleFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemScheduleFrequency | undefined) {
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

export class SensorTestTemplateDuplicateItemScheduleFrequencyList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemScheduleFrequencyOutputReference {
    return new SensorTestTemplateDuplicateItemScheduleFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequency {
}

export function sensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequencyToTerraform(struct?: SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequencyToHclTerraform(struct?: SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequency | undefined) {
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

export class SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequencyList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequencyOutputReference {
    return new SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRange {
}

export function sensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeToTerraform(struct?: SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeToHclTerraform(struct?: SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  private _frequency = new SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeFrequencyList(this, "frequency", false);
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

export class SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeOutputReference {
    return new SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemScheduleScheduleRange {
}

export function sensorTestTemplateDuplicateItemScheduleScheduleRangeToTerraform(struct?: SensorTestTemplateDuplicateItemScheduleScheduleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemScheduleScheduleRangeToHclTerraform(struct?: SensorTestTemplateDuplicateItemScheduleScheduleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemScheduleScheduleRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemScheduleScheduleRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemScheduleScheduleRange | undefined) {
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
  private _timeRange = new SensorTestTemplateDuplicateItemScheduleScheduleRangeTimeRangeList(this, "time_range", false);
  public get timeRange() {
    return this._timeRange;
  }
}

export class SensorTestTemplateDuplicateItemScheduleScheduleRangeList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemScheduleScheduleRangeOutputReference {
    return new SensorTestTemplateDuplicateItemScheduleScheduleRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemSchedule {
}

export function sensorTestTemplateDuplicateItemScheduleToTerraform(struct?: SensorTestTemplateDuplicateItemSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemScheduleToHclTerraform(struct?: SensorTestTemplateDuplicateItemSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  private _frequency = new SensorTestTemplateDuplicateItemScheduleFrequencyList(this, "frequency", false);
  public get frequency() {
    return this._frequency;
  }

  // schedule_range - computed: true, optional: false, required: false
  private _scheduleRange = new SensorTestTemplateDuplicateItemScheduleScheduleRangeList(this, "schedule_range", false);
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

export class SensorTestTemplateDuplicateItemScheduleList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemScheduleOutputReference {
    return new SensorTestTemplateDuplicateItemScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemSsidsTests {
}

export function sensorTestTemplateDuplicateItemSsidsTestsToTerraform(struct?: SensorTestTemplateDuplicateItemSsidsTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemSsidsTestsToHclTerraform(struct?: SensorTestTemplateDuplicateItemSsidsTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemSsidsTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemSsidsTests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemSsidsTests | undefined) {
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

export class SensorTestTemplateDuplicateItemSsidsTestsList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemSsidsTestsOutputReference {
    return new SensorTestTemplateDuplicateItemSsidsTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemSsidsThirdParty {
}

export function sensorTestTemplateDuplicateItemSsidsThirdPartyToTerraform(struct?: SensorTestTemplateDuplicateItemSsidsThirdParty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemSsidsThirdPartyToHclTerraform(struct?: SensorTestTemplateDuplicateItemSsidsThirdParty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemSsidsThirdPartyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemSsidsThirdParty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemSsidsThirdParty | undefined) {
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

export class SensorTestTemplateDuplicateItemSsidsThirdPartyList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemSsidsThirdPartyOutputReference {
    return new SensorTestTemplateDuplicateItemSsidsThirdPartyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItemSsids {
}

export function sensorTestTemplateDuplicateItemSsidsToTerraform(struct?: SensorTestTemplateDuplicateItemSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemSsidsToHclTerraform(struct?: SensorTestTemplateDuplicateItemSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemSsidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItemSsids | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItemSsids | undefined) {
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
  private _tests = new SensorTestTemplateDuplicateItemSsidsTestsList(this, "tests", false);
  public get tests() {
    return this._tests;
  }

  // third_party - computed: true, optional: false, required: false
  private _thirdParty = new SensorTestTemplateDuplicateItemSsidsThirdPartyList(this, "third_party", false);
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

export class SensorTestTemplateDuplicateItemSsidsList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemSsidsOutputReference {
    return new SensorTestTemplateDuplicateItemSsidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateItem {
}

export function sensorTestTemplateDuplicateItemToTerraform(struct?: SensorTestTemplateDuplicateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensorTestTemplateDuplicateItemToHclTerraform(struct?: SensorTestTemplateDuplicateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensorTestTemplateDuplicateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorTestTemplateDuplicateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_coverage - computed: true, optional: false, required: false
  private _apCoverage = new SensorTestTemplateDuplicateItemApCoverageList(this, "ap_coverage", false);
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
  private _locationInfoList = new SensorTestTemplateDuplicateItemLocationInfoListStructList(this, "location_info_list", false);
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
  private _schedule = new SensorTestTemplateDuplicateItemScheduleList(this, "schedule", false);
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
  private _ssids = new SensorTestTemplateDuplicateItemSsidsList(this, "ssids", false);
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

export class SensorTestTemplateDuplicateItemList extends cdktf.ComplexList {

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
  public get(index: number): SensorTestTemplateDuplicateItemOutputReference {
    return new SensorTestTemplateDuplicateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorTestTemplateDuplicateParameters {
  /**
  * New Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_duplicate#new_template_name SensorTestTemplateDuplicate#new_template_name}
  */
  readonly newTemplateName?: string;
  /**
  * Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_duplicate#template_name SensorTestTemplateDuplicate#template_name}
  */
  readonly templateName?: string;
}

export function sensorTestTemplateDuplicateParametersToTerraform(struct?: SensorTestTemplateDuplicateParametersOutputReference | SensorTestTemplateDuplicateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_template_name: cdktf.stringToTerraform(struct!.newTemplateName),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function sensorTestTemplateDuplicateParametersToHclTerraform(struct?: SensorTestTemplateDuplicateParametersOutputReference | SensorTestTemplateDuplicateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_template_name: {
      value: cdktf.stringToHclTerraform(struct!.newTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorTestTemplateDuplicateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SensorTestTemplateDuplicateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTemplateName = this._newTemplateName;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorTestTemplateDuplicateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newTemplateName = undefined;
      this._templateName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newTemplateName = value.newTemplateName;
      this._templateName = value.templateName;
    }
  }

  // new_template_name - computed: true, optional: true, required: false
  private _newTemplateName?: string; 
  public get newTemplateName() {
    return this.getStringAttribute('new_template_name');
  }
  public set newTemplateName(value: string) {
    this._newTemplateName = value;
  }
  public resetNewTemplateName() {
    this._newTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTemplateNameInput() {
    return this._newTemplateName;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_duplicate dnacenter_sensor_test_template_duplicate}
*/
export class SensorTestTemplateDuplicate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sensor_test_template_duplicate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorTestTemplateDuplicate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorTestTemplateDuplicate to import
  * @param importFromId The id of the existing SensorTestTemplateDuplicate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_duplicate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorTestTemplateDuplicate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sensor_test_template_duplicate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sensor_test_template_duplicate dnacenter_sensor_test_template_duplicate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorTestTemplateDuplicateConfig
  */
  public constructor(scope: Construct, id: string, config: SensorTestTemplateDuplicateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sensor_test_template_duplicate',
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
  private _item = new SensorTestTemplateDuplicateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new SensorTestTemplateDuplicateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SensorTestTemplateDuplicateParameters) {
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
      parameters: sensorTestTemplateDuplicateParametersToTerraform(this._parameters.internalValue),
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
        value: sensorTestTemplateDuplicateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SensorTestTemplateDuplicateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
