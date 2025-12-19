// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorAlarmNoticeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#id MonitorAlarmNotice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notification template name within 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#name MonitorAlarmNotice#name}
  */
  readonly name: string;
  /**
  * Notification language zh-CN=Chinese en-US=English.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#notice_language MonitorAlarmNotice#notice_language}
  */
  readonly noticeLanguage: string;
  /**
  * Alarm notification type ALARM=Notification not restored OK=Notification restored ALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#notice_type MonitorAlarmNotice#notice_type}
  */
  readonly noticeType: string;
  /**
  * cls_notices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#cls_notices MonitorAlarmNotice#cls_notices}
  */
  readonly clsNotices?: MonitorAlarmNoticeClsNotices[] | cdktf.IResolvable;
  /**
  * url_notices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#url_notices MonitorAlarmNotice#url_notices}
  */
  readonly urlNotices?: MonitorAlarmNoticeUrlNotices[] | cdktf.IResolvable;
  /**
  * user_notices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#user_notices MonitorAlarmNotice#user_notices}
  */
  readonly userNotices?: MonitorAlarmNoticeUserNotices[] | cdktf.IResolvable;
}
export interface MonitorAlarmNoticeClsNotices {
  /**
  * Start-stop status, can not be transmitted, default enabled. 0= Disabled, 1= enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#enable MonitorAlarmNotice#enable}
  */
  readonly enable?: number;
  /**
  * Log collection Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#log_set_id MonitorAlarmNotice#log_set_id}
  */
  readonly logSetId: string;
  /**
  * Regional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#region MonitorAlarmNotice#region}
  */
  readonly region: string;
  /**
  * Theme Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#topic_id MonitorAlarmNotice#topic_id}
  */
  readonly topicId: string;
}

export function monitorAlarmNoticeClsNoticesToTerraform(struct?: MonitorAlarmNoticeClsNotices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    log_set_id: cdktf.stringToTerraform(struct!.logSetId),
    region: cdktf.stringToTerraform(struct!.region),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
  }
}


export function monitorAlarmNoticeClsNoticesToHclTerraform(struct?: MonitorAlarmNoticeClsNotices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_set_id: {
      value: cdktf.stringToHclTerraform(struct!.logSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmNoticeClsNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlarmNoticeClsNotices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._logSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetId = this._logSetId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmNoticeClsNotices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._logSetId = undefined;
      this._region = undefined;
      this._topicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._logSetId = value.logSetId;
      this._region = value.region;
      this._topicId = value.topicId;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // log_set_id - computed: false, optional: false, required: true
  private _logSetId?: string; 
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }
  public set logSetId(value: string) {
    this._logSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetIdInput() {
    return this._logSetId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }
}

export class MonitorAlarmNoticeClsNoticesList extends cdktf.ComplexList {
  public internalValue? : MonitorAlarmNoticeClsNotices[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlarmNoticeClsNoticesOutputReference {
    return new MonitorAlarmNoticeClsNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlarmNoticeUrlNotices {
  /**
  * Notification End Time Seconds at the start of a day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#end_time MonitorAlarmNotice#end_time}
  */
  readonly endTime?: number;
  /**
  * If passed verification `0` is no, `1` is yes. Default `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#is_valid MonitorAlarmNotice#is_valid}
  */
  readonly isValid?: number;
  /**
  * Notification Start Time Number of seconds at the start of a day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#start_time MonitorAlarmNotice#start_time}
  */
  readonly startTime?: number;
  /**
  * Callback URL (limited to 256 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#url MonitorAlarmNotice#url}
  */
  readonly url: string;
  /**
  * Verification code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#validation_code MonitorAlarmNotice#validation_code}
  */
  readonly validationCode?: string;
  /**
  * Notification period 1-7 indicates Monday to Sunday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#weekday MonitorAlarmNotice#weekday}
  */
  readonly weekday?: number[];
}

export function monitorAlarmNoticeUrlNoticesToTerraform(struct?: MonitorAlarmNoticeUrlNotices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    is_valid: cdktf.numberToTerraform(struct!.isValid),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    url: cdktf.stringToTerraform(struct!.url),
    validation_code: cdktf.stringToTerraform(struct!.validationCode),
    weekday: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weekday),
  }
}


export function monitorAlarmNoticeUrlNoticesToHclTerraform(struct?: MonitorAlarmNoticeUrlNotices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_valid: {
      value: cdktf.numberToHclTerraform(struct!.isValid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_code: {
      value: cdktf.stringToHclTerraform(struct!.validationCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekday: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weekday),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmNoticeUrlNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlarmNoticeUrlNotices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._isValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValid = this._isValid;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._validationCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationCode = this._validationCode;
    }
    if (this._weekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekday = this._weekday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmNoticeUrlNotices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._isValid = undefined;
      this._startTime = undefined;
      this._url = undefined;
      this._validationCode = undefined;
      this._weekday = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._isValid = value.isValid;
      this._startTime = value.startTime;
      this._url = value.url;
      this._validationCode = value.validationCode;
      this._weekday = value.weekday;
    }
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

  // is_valid - computed: true, optional: true, required: false
  private _isValid?: number; 
  public get isValid() {
    return this.getNumberAttribute('is_valid');
  }
  public set isValid(value: number) {
    this._isValid = value;
  }
  public resetIsValid() {
    this._isValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValidInput() {
    return this._isValid;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // validation_code - computed: false, optional: true, required: false
  private _validationCode?: string; 
  public get validationCode() {
    return this.getStringAttribute('validation_code');
  }
  public set validationCode(value: string) {
    this._validationCode = value;
  }
  public resetValidationCode() {
    this._validationCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCodeInput() {
    return this._validationCode;
  }

  // weekday - computed: false, optional: true, required: false
  private _weekday?: number[]; 
  public get weekday() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weekday')));
  }
  public set weekday(value: number[]) {
    this._weekday = value;
  }
  public resetWeekday() {
    this._weekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayInput() {
    return this._weekday;
  }
}

export class MonitorAlarmNoticeUrlNoticesList extends cdktf.ComplexList {
  public internalValue? : MonitorAlarmNoticeUrlNotices[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlarmNoticeUrlNoticesOutputReference {
    return new MonitorAlarmNoticeUrlNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlarmNoticeUserNotices {
  /**
  * The number of seconds since the notification end time 00:00:00 (value range 0-86399).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#end_time MonitorAlarmNotice#end_time}
  */
  readonly endTime: number;
  /**
  * User group ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#group_ids MonitorAlarmNotice#group_ids}
  */
  readonly groupIds?: number[];
  /**
  * Contact notification required 0= No 1= Yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#need_phone_arrive_notice MonitorAlarmNotice#need_phone_arrive_notice}
  */
  readonly needPhoneArriveNotice?: number;
  /**
  * Notification Channel List EMAIL=Mail SMS=SMS CALL=Telephone WECHAT=WeChat RTX=Enterprise WeChat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#notice_way MonitorAlarmNotice#notice_way}
  */
  readonly noticeWay: string[];
  /**
  * Call type SYNC= Simultaneous call CIRCLE= Round call If this parameter is not specified, the default value is round call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#phone_call_type MonitorAlarmNotice#phone_call_type}
  */
  readonly phoneCallType?: string;
  /**
  * Number of seconds between polls (value range: 60-900).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#phone_circle_interval MonitorAlarmNotice#phone_circle_interval}
  */
  readonly phoneCircleInterval?: number;
  /**
  * Number of telephone polls (value range: 1-5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#phone_circle_times MonitorAlarmNotice#phone_circle_times}
  */
  readonly phoneCircleTimes?: number;
  /**
  * Number of seconds between calls in a polling session (value range: 60-900).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#phone_inner_interval MonitorAlarmNotice#phone_inner_interval}
  */
  readonly phoneInnerInterval?: number;
  /**
  * Telephone polling list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#phone_order MonitorAlarmNotice#phone_order}
  */
  readonly phoneOrder?: number[];
  /**
  * Recipient Type USER=User GROUP=User Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#receiver_type MonitorAlarmNotice#receiver_type}
  */
  readonly receiverType: string;
  /**
  * The number of seconds since the notification start time 00:00:00 (value range 0-86399).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#start_time MonitorAlarmNotice#start_time}
  */
  readonly startTime: number;
  /**
  * User UID List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#user_ids MonitorAlarmNotice#user_ids}
  */
  readonly userIds?: number[];
  /**
  * Notification period 1-7 indicates Monday to Sunday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#weekday MonitorAlarmNotice#weekday}
  */
  readonly weekday?: number[];
}

export function monitorAlarmNoticeUserNoticesToTerraform(struct?: MonitorAlarmNoticeUserNotices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIds),
    need_phone_arrive_notice: cdktf.numberToTerraform(struct!.needPhoneArriveNotice),
    notice_way: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noticeWay),
    phone_call_type: cdktf.stringToTerraform(struct!.phoneCallType),
    phone_circle_interval: cdktf.numberToTerraform(struct!.phoneCircleInterval),
    phone_circle_times: cdktf.numberToTerraform(struct!.phoneCircleTimes),
    phone_inner_interval: cdktf.numberToTerraform(struct!.phoneInnerInterval),
    phone_order: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.phoneOrder),
    receiver_type: cdktf.stringToTerraform(struct!.receiverType),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.userIds),
    weekday: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weekday),
  }
}


export function monitorAlarmNoticeUserNoticesToHclTerraform(struct?: MonitorAlarmNoticeUserNotices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    need_phone_arrive_notice: {
      value: cdktf.numberToHclTerraform(struct!.needPhoneArriveNotice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notice_way: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noticeWay),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    phone_call_type: {
      value: cdktf.stringToHclTerraform(struct!.phoneCallType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_circle_interval: {
      value: cdktf.numberToHclTerraform(struct!.phoneCircleInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phone_circle_times: {
      value: cdktf.numberToHclTerraform(struct!.phoneCircleTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phone_inner_interval: {
      value: cdktf.numberToHclTerraform(struct!.phoneInnerInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phone_order: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.phoneOrder),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    receiver_type: {
      value: cdktf.stringToHclTerraform(struct!.receiverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.userIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    weekday: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weekday),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlarmNoticeUserNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlarmNoticeUserNotices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._needPhoneArriveNotice !== undefined) {
      hasAnyValues = true;
      internalValueResult.needPhoneArriveNotice = this._needPhoneArriveNotice;
    }
    if (this._noticeWay !== undefined) {
      hasAnyValues = true;
      internalValueResult.noticeWay = this._noticeWay;
    }
    if (this._phoneCallType !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneCallType = this._phoneCallType;
    }
    if (this._phoneCircleInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneCircleInterval = this._phoneCircleInterval;
    }
    if (this._phoneCircleTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneCircleTimes = this._phoneCircleTimes;
    }
    if (this._phoneInnerInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneInnerInterval = this._phoneInnerInterval;
    }
    if (this._phoneOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneOrder = this._phoneOrder;
    }
    if (this._receiverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverType = this._receiverType;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._userIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIds = this._userIds;
    }
    if (this._weekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekday = this._weekday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlarmNoticeUserNotices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._groupIds = undefined;
      this._needPhoneArriveNotice = undefined;
      this._noticeWay = undefined;
      this._phoneCallType = undefined;
      this._phoneCircleInterval = undefined;
      this._phoneCircleTimes = undefined;
      this._phoneInnerInterval = undefined;
      this._phoneOrder = undefined;
      this._receiverType = undefined;
      this._startTime = undefined;
      this._userIds = undefined;
      this._weekday = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._groupIds = value.groupIds;
      this._needPhoneArriveNotice = value.needPhoneArriveNotice;
      this._noticeWay = value.noticeWay;
      this._phoneCallType = value.phoneCallType;
      this._phoneCircleInterval = value.phoneCircleInterval;
      this._phoneCircleTimes = value.phoneCircleTimes;
      this._phoneInnerInterval = value.phoneInnerInterval;
      this._phoneOrder = value.phoneOrder;
      this._receiverType = value.receiverType;
      this._startTime = value.startTime;
      this._userIds = value.userIds;
      this._weekday = value.weekday;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: number[]; 
  public get groupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('group_ids')));
  }
  public set groupIds(value: number[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // need_phone_arrive_notice - computed: false, optional: true, required: false
  private _needPhoneArriveNotice?: number; 
  public get needPhoneArriveNotice() {
    return this.getNumberAttribute('need_phone_arrive_notice');
  }
  public set needPhoneArriveNotice(value: number) {
    this._needPhoneArriveNotice = value;
  }
  public resetNeedPhoneArriveNotice() {
    this._needPhoneArriveNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needPhoneArriveNoticeInput() {
    return this._needPhoneArriveNotice;
  }

  // notice_way - computed: false, optional: false, required: true
  private _noticeWay?: string[]; 
  public get noticeWay() {
    return cdktf.Fn.tolist(this.getListAttribute('notice_way'));
  }
  public set noticeWay(value: string[]) {
    this._noticeWay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeWayInput() {
    return this._noticeWay;
  }

  // phone_call_type - computed: false, optional: true, required: false
  private _phoneCallType?: string; 
  public get phoneCallType() {
    return this.getStringAttribute('phone_call_type');
  }
  public set phoneCallType(value: string) {
    this._phoneCallType = value;
  }
  public resetPhoneCallType() {
    this._phoneCallType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneCallTypeInput() {
    return this._phoneCallType;
  }

  // phone_circle_interval - computed: false, optional: true, required: false
  private _phoneCircleInterval?: number; 
  public get phoneCircleInterval() {
    return this.getNumberAttribute('phone_circle_interval');
  }
  public set phoneCircleInterval(value: number) {
    this._phoneCircleInterval = value;
  }
  public resetPhoneCircleInterval() {
    this._phoneCircleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneCircleIntervalInput() {
    return this._phoneCircleInterval;
  }

  // phone_circle_times - computed: false, optional: true, required: false
  private _phoneCircleTimes?: number; 
  public get phoneCircleTimes() {
    return this.getNumberAttribute('phone_circle_times');
  }
  public set phoneCircleTimes(value: number) {
    this._phoneCircleTimes = value;
  }
  public resetPhoneCircleTimes() {
    this._phoneCircleTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneCircleTimesInput() {
    return this._phoneCircleTimes;
  }

  // phone_inner_interval - computed: false, optional: true, required: false
  private _phoneInnerInterval?: number; 
  public get phoneInnerInterval() {
    return this.getNumberAttribute('phone_inner_interval');
  }
  public set phoneInnerInterval(value: number) {
    this._phoneInnerInterval = value;
  }
  public resetPhoneInnerInterval() {
    this._phoneInnerInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInnerIntervalInput() {
    return this._phoneInnerInterval;
  }

  // phone_order - computed: false, optional: true, required: false
  private _phoneOrder?: number[]; 
  public get phoneOrder() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('phone_order')));
  }
  public set phoneOrder(value: number[]) {
    this._phoneOrder = value;
  }
  public resetPhoneOrder() {
    this._phoneOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneOrderInput() {
    return this._phoneOrder;
  }

  // receiver_type - computed: false, optional: false, required: true
  private _receiverType?: string; 
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }
  public set receiverType(value: string) {
    this._receiverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTypeInput() {
    return this._receiverType;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: number[]; 
  public get userIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_ids')));
  }
  public set userIds(value: number[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // weekday - computed: false, optional: true, required: false
  private _weekday?: number[]; 
  public get weekday() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weekday')));
  }
  public set weekday(value: number[]) {
    this._weekday = value;
  }
  public resetWeekday() {
    this._weekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayInput() {
    return this._weekday;
  }
}

export class MonitorAlarmNoticeUserNoticesList extends cdktf.ComplexList {
  public internalValue? : MonitorAlarmNoticeUserNotices[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlarmNoticeUserNoticesOutputReference {
    return new MonitorAlarmNoticeUserNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice tencentcloud_monitor_alarm_notice}
*/
export class MonitorAlarmNotice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_alarm_notice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorAlarmNotice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorAlarmNotice to import
  * @param importFromId The id of the existing MonitorAlarmNotice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorAlarmNotice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_alarm_notice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/monitor_alarm_notice tencentcloud_monitor_alarm_notice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAlarmNoticeConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAlarmNoticeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_alarm_notice',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._name = config.name;
    this._noticeLanguage = config.noticeLanguage;
    this._noticeType = config.noticeType;
    this._clsNotices.internalValue = config.clsNotices;
    this._urlNotices.internalValue = config.urlNotices;
    this._userNotices.internalValue = config.userNotices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amp_consumer_id - computed: true, optional: false, required: false
  public get ampConsumerId() {
    return this.getStringAttribute('amp_consumer_id');
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

  // is_preset - computed: true, optional: false, required: false
  public get isPreset() {
    return this.getNumberAttribute('is_preset');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notice_language - computed: false, optional: false, required: true
  private _noticeLanguage?: string; 
  public get noticeLanguage() {
    return this.getStringAttribute('notice_language');
  }
  public set noticeLanguage(value: string) {
    this._noticeLanguage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeLanguageInput() {
    return this._noticeLanguage;
  }

  // notice_type - computed: false, optional: false, required: true
  private _noticeType?: string; 
  public get noticeType() {
    return this.getStringAttribute('notice_type');
  }
  public set noticeType(value: string) {
    this._noticeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeTypeInput() {
    return this._noticeType;
  }

  // policy_ids - computed: true, optional: false, required: false
  public get policyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_ids'));
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // cls_notices - computed: false, optional: true, required: false
  private _clsNotices = new MonitorAlarmNoticeClsNoticesList(this, "cls_notices", false);
  public get clsNotices() {
    return this._clsNotices;
  }
  public putClsNotices(value: MonitorAlarmNoticeClsNotices[] | cdktf.IResolvable) {
    this._clsNotices.internalValue = value;
  }
  public resetClsNotices() {
    this._clsNotices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsNoticesInput() {
    return this._clsNotices.internalValue;
  }

  // url_notices - computed: false, optional: true, required: false
  private _urlNotices = new MonitorAlarmNoticeUrlNoticesList(this, "url_notices", false);
  public get urlNotices() {
    return this._urlNotices;
  }
  public putUrlNotices(value: MonitorAlarmNoticeUrlNotices[] | cdktf.IResolvable) {
    this._urlNotices.internalValue = value;
  }
  public resetUrlNotices() {
    this._urlNotices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlNoticesInput() {
    return this._urlNotices.internalValue;
  }

  // user_notices - computed: false, optional: true, required: false
  private _userNotices = new MonitorAlarmNoticeUserNoticesList(this, "user_notices", false);
  public get userNotices() {
    return this._userNotices;
  }
  public putUserNotices(value: MonitorAlarmNoticeUserNotices[] | cdktf.IResolvable) {
    this._userNotices.internalValue = value;
  }
  public resetUserNotices() {
    this._userNotices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNoticesInput() {
    return this._userNotices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notice_language: cdktf.stringToTerraform(this._noticeLanguage),
      notice_type: cdktf.stringToTerraform(this._noticeType),
      cls_notices: cdktf.listMapper(monitorAlarmNoticeClsNoticesToTerraform, true)(this._clsNotices.internalValue),
      url_notices: cdktf.listMapper(monitorAlarmNoticeUrlNoticesToTerraform, true)(this._urlNotices.internalValue),
      user_notices: cdktf.listMapper(monitorAlarmNoticeUserNoticesToTerraform, true)(this._userNotices.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notice_language: {
        value: cdktf.stringToHclTerraform(this._noticeLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notice_type: {
        value: cdktf.stringToHclTerraform(this._noticeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cls_notices: {
        value: cdktf.listMapperHcl(monitorAlarmNoticeClsNoticesToHclTerraform, true)(this._clsNotices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlarmNoticeClsNoticesList",
      },
      url_notices: {
        value: cdktf.listMapperHcl(monitorAlarmNoticeUrlNoticesToHclTerraform, true)(this._urlNotices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlarmNoticeUrlNoticesList",
      },
      user_notices: {
        value: cdktf.listMapperHcl(monitorAlarmNoticeUserNoticesToHclTerraform, true)(this._userNotices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlarmNoticeUserNoticesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
