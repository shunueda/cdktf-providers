// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafIpAccessControlV2Config extends cdktf.TerraformMetaArguments {
  /**
  * 42: blocklist; 40: allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#action_type WafIpAccessControlV2#action_type}
  */
  readonly actionType: number;
  /**
  * Specific domain name, for example, test.qcloudwaf.com.
  * Global domain name, that is, global.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#domain WafIpAccessControlV2#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#id WafIpAccessControlV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#instance_id WafIpAccessControlV2#instance_id}
  */
  readonly instanceId: string;
  /**
  * IP parameter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#ip_list WafIpAccessControlV2#ip_list}
  */
  readonly ipList: string[];
  /**
  * Scheduled configuration type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#job_type WafIpAccessControlV2#job_type}
  */
  readonly jobType?: string;
  /**
  * Remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#note WafIpAccessControlV2#note}
  */
  readonly note?: string;
  /**
  * job_date_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#job_date_time WafIpAccessControlV2#job_date_time}
  */
  readonly jobDateTime?: WafIpAccessControlV2JobDateTime;
}
export interface WafIpAccessControlV2JobDateTimeCron {
  /**
  * Days in each month for execution
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#days WafIpAccessControlV2#days}
  */
  readonly days?: number[];
  /**
  * End time
  * 
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#end_time WafIpAccessControlV2#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time
  * 
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#start_time WafIpAccessControlV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Days of each week for execution
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#w_days WafIpAccessControlV2#w_days}
  */
  readonly wDays?: number[];
}

export function wafIpAccessControlV2JobDateTimeCronToTerraform(struct?: WafIpAccessControlV2JobDateTimeCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    w_days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.wDays),
  }
}


export function wafIpAccessControlV2JobDateTimeCronToHclTerraform(struct?: WafIpAccessControlV2JobDateTimeCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    w_days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.wDays),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafIpAccessControlV2JobDateTimeCronOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafIpAccessControlV2JobDateTimeCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._wDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.wDays = this._wDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafIpAccessControlV2JobDateTimeCron | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._wDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._wDays = value.wDays;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days')));
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // w_days - computed: false, optional: true, required: false
  private _wDays?: number[]; 
  public get wDays() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('w_days')));
  }
  public set wDays(value: number[]) {
    this._wDays = value;
  }
  public resetWDays() {
    this._wDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wDaysInput() {
    return this._wDays;
  }
}

export class WafIpAccessControlV2JobDateTimeCronList extends cdktf.ComplexList {
  public internalValue? : WafIpAccessControlV2JobDateTimeCron[] | cdktf.IResolvable

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
  public get(index: number): WafIpAccessControlV2JobDateTimeCronOutputReference {
    return new WafIpAccessControlV2JobDateTimeCronOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafIpAccessControlV2JobDateTimeTimed {
  /**
  * End timestamp, in seconds
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#end_date_time WafIpAccessControlV2#end_date_time}
  */
  readonly endDateTime?: number;
  /**
  * Start timestamp, in seconds
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#start_date_time WafIpAccessControlV2#start_date_time}
  */
  readonly startDateTime?: number;
}

export function wafIpAccessControlV2JobDateTimeTimedToTerraform(struct?: WafIpAccessControlV2JobDateTimeTimed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date_time: cdktf.numberToTerraform(struct!.endDateTime),
    start_date_time: cdktf.numberToTerraform(struct!.startDateTime),
  }
}


export function wafIpAccessControlV2JobDateTimeTimedToHclTerraform(struct?: WafIpAccessControlV2JobDateTimeTimed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date_time: {
      value: cdktf.numberToHclTerraform(struct!.endDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date_time: {
      value: cdktf.numberToHclTerraform(struct!.startDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafIpAccessControlV2JobDateTimeTimedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafIpAccessControlV2JobDateTimeTimed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDateTime = this._endDateTime;
    }
    if (this._startDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDateTime = this._startDateTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafIpAccessControlV2JobDateTimeTimed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDateTime = undefined;
      this._startDateTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDateTime = value.endDateTime;
      this._startDateTime = value.startDateTime;
    }
  }

  // end_date_time - computed: false, optional: true, required: false
  private _endDateTime?: number; 
  public get endDateTime() {
    return this.getNumberAttribute('end_date_time');
  }
  public set endDateTime(value: number) {
    this._endDateTime = value;
  }
  public resetEndDateTime() {
    this._endDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTimeInput() {
    return this._endDateTime;
  }

  // start_date_time - computed: false, optional: true, required: false
  private _startDateTime?: number; 
  public get startDateTime() {
    return this.getNumberAttribute('start_date_time');
  }
  public set startDateTime(value: number) {
    this._startDateTime = value;
  }
  public resetStartDateTime() {
    this._startDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeInput() {
    return this._startDateTime;
  }
}

export class WafIpAccessControlV2JobDateTimeTimedList extends cdktf.ComplexList {
  public internalValue? : WafIpAccessControlV2JobDateTimeTimed[] | cdktf.IResolvable

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
  public get(index: number): WafIpAccessControlV2JobDateTimeTimedOutputReference {
    return new WafIpAccessControlV2JobDateTimeTimedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafIpAccessControlV2JobDateTime {
  /**
  * Time zone
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#time_t_zone WafIpAccessControlV2#time_t_zone}
  */
  readonly timeTZone?: string;
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#cron WafIpAccessControlV2#cron}
  */
  readonly cron?: WafIpAccessControlV2JobDateTimeCron[] | cdktf.IResolvable;
  /**
  * timed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#timed WafIpAccessControlV2#timed}
  */
  readonly timed?: WafIpAccessControlV2JobDateTimeTimed[] | cdktf.IResolvable;
}

export function wafIpAccessControlV2JobDateTimeToTerraform(struct?: WafIpAccessControlV2JobDateTimeOutputReference | WafIpAccessControlV2JobDateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_t_zone: cdktf.stringToTerraform(struct!.timeTZone),
    cron: cdktf.listMapper(wafIpAccessControlV2JobDateTimeCronToTerraform, true)(struct!.cron),
    timed: cdktf.listMapper(wafIpAccessControlV2JobDateTimeTimedToTerraform, true)(struct!.timed),
  }
}


export function wafIpAccessControlV2JobDateTimeToHclTerraform(struct?: WafIpAccessControlV2JobDateTimeOutputReference | WafIpAccessControlV2JobDateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_t_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeTZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron: {
      value: cdktf.listMapperHcl(wafIpAccessControlV2JobDateTimeCronToHclTerraform, true)(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "WafIpAccessControlV2JobDateTimeCronList",
    },
    timed: {
      value: cdktf.listMapperHcl(wafIpAccessControlV2JobDateTimeTimedToHclTerraform, true)(struct!.timed),
      isBlock: true,
      type: "list",
      storageClassType: "WafIpAccessControlV2JobDateTimeTimedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafIpAccessControlV2JobDateTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafIpAccessControlV2JobDateTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeTZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTZone = this._timeTZone;
    }
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    if (this._timed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timed = this._timed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafIpAccessControlV2JobDateTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeTZone = undefined;
      this._cron.internalValue = undefined;
      this._timed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeTZone = value.timeTZone;
      this._cron.internalValue = value.cron;
      this._timed.internalValue = value.timed;
    }
  }

  // time_t_zone - computed: false, optional: true, required: false
  private _timeTZone?: string; 
  public get timeTZone() {
    return this.getStringAttribute('time_t_zone');
  }
  public set timeTZone(value: string) {
    this._timeTZone = value;
  }
  public resetTimeTZone() {
    this._timeTZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTZoneInput() {
    return this._timeTZone;
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new WafIpAccessControlV2JobDateTimeCronList(this, "cron", false);
  public get cron() {
    return this._cron;
  }
  public putCron(value: WafIpAccessControlV2JobDateTimeCron[] | cdktf.IResolvable) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // timed - computed: false, optional: true, required: false
  private _timed = new WafIpAccessControlV2JobDateTimeTimedList(this, "timed", false);
  public get timed() {
    return this._timed;
  }
  public putTimed(value: WafIpAccessControlV2JobDateTimeTimed[] | cdktf.IResolvable) {
    this._timed.internalValue = value;
  }
  public resetTimed() {
    this._timed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedInput() {
    return this._timed.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2 tencentcloud_waf_ip_access_control_v2}
*/
export class WafIpAccessControlV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_ip_access_control_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafIpAccessControlV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafIpAccessControlV2 to import
  * @param importFromId The id of the existing WafIpAccessControlV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafIpAccessControlV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_ip_access_control_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/waf_ip_access_control_v2 tencentcloud_waf_ip_access_control_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafIpAccessControlV2Config
  */
  public constructor(scope: Construct, id: string, config: WafIpAccessControlV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_ip_access_control_v2',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._domain = config.domain;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ipList = config.ipList;
    this._jobType = config.jobType;
    this._note = config.note;
    this._jobDateTime.internalValue = config.jobDateTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: false, required: true
  private _actionType?: number; 
  public get actionType() {
    return this.getNumberAttribute('action_type');
  }
  public set actionType(value: number) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip_list - computed: false, optional: false, required: true
  private _ipList?: string[]; 
  public get ipList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_list'));
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // job_type - computed: true, optional: true, required: false
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  public resetJobType() {
    this._jobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // job_date_time - computed: false, optional: true, required: false
  private _jobDateTime = new WafIpAccessControlV2JobDateTimeOutputReference(this, "job_date_time");
  public get jobDateTime() {
    return this._jobDateTime;
  }
  public putJobDateTime(value: WafIpAccessControlV2JobDateTime) {
    this._jobDateTime.internalValue = value;
  }
  public resetJobDateTime() {
    this._jobDateTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDateTimeInput() {
    return this._jobDateTime.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.numberToTerraform(this._actionType),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipList),
      job_type: cdktf.stringToTerraform(this._jobType),
      note: cdktf.stringToTerraform(this._note),
      job_date_time: wafIpAccessControlV2JobDateTimeToTerraform(this._jobDateTime.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.numberToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_date_time: {
        value: wafIpAccessControlV2JobDateTimeToHclTerraform(this._jobDateTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafIpAccessControlV2JobDateTimeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
