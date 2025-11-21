// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorAlarmNoticesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Receive group list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#group_ids DataTencentcloudMonitorAlarmNotices#group_ids}
  */
  readonly groupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#id DataTencentcloudMonitorAlarmNotices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Alarm notification template name Used for fuzzy search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#name DataTencentcloudMonitorAlarmNotices#name}
  */
  readonly name?: string;
  /**
  * Receive group list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#notice_ids DataTencentcloudMonitorAlarmNotices#notice_ids}
  */
  readonly noticeIds?: string[];
  /**
  * Sort by update time ASC=forward order DESC=reverse order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#order DataTencentcloudMonitorAlarmNotices#order}
  */
  readonly order?: string;
  /**
  * The primary account uid is used to create a preset notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#owner_uid DataTencentcloudMonitorAlarmNotices#owner_uid}
  */
  readonly ownerUid?: number;
  /**
  * To filter alarm notification templates according to recipients, you need to select the notification user type. USER=user GROUP=user group Leave blank = not filter by recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#receiver_type DataTencentcloudMonitorAlarmNotices#receiver_type}
  */
  readonly receiverType?: string;
  /**
  * Used to store results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#result_output_file DataTencentcloudMonitorAlarmNotices#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * List of recipients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#user_ids DataTencentcloudMonitorAlarmNotices#user_ids}
  */
  readonly userIds?: number[];
}
export interface DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNotices {
}

export function dataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNoticesToTerraform(struct?: DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNoticesToHclTerraform(struct?: DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNotices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNotices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getNumberAttribute('enable');
  }

  // log_set_id - computed: true, optional: false, required: false
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNoticesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNoticesOutputReference {
    return new DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNotices {
}

export function dataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNoticesToTerraform(struct?: DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNoticesToHclTerraform(struct?: DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNotices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNotices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // weekday - computed: true, optional: false, required: false
  public get weekday() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weekday')));
  }
}

export class DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNoticesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNoticesOutputReference {
    return new DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNotices {
}

export function dataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNoticesToTerraform(struct?: DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNoticesToHclTerraform(struct?: DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNotices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNotices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('group_ids')));
  }

  // need_phone_arrive_notice - computed: true, optional: false, required: false
  public get needPhoneArriveNotice() {
    return this.getNumberAttribute('need_phone_arrive_notice');
  }

  // notice_way - computed: true, optional: false, required: false
  public get noticeWay() {
    return cdktf.Fn.tolist(this.getListAttribute('notice_way'));
  }

  // phone_call_type - computed: true, optional: false, required: false
  public get phoneCallType() {
    return this.getStringAttribute('phone_call_type');
  }

  // phone_circle_interval - computed: true, optional: false, required: false
  public get phoneCircleInterval() {
    return this.getNumberAttribute('phone_circle_interval');
  }

  // phone_circle_times - computed: true, optional: false, required: false
  public get phoneCircleTimes() {
    return this.getNumberAttribute('phone_circle_times');
  }

  // phone_inner_interval - computed: true, optional: false, required: false
  public get phoneInnerInterval() {
    return this.getNumberAttribute('phone_inner_interval');
  }

  // phone_order - computed: true, optional: false, required: false
  public get phoneOrder() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('phone_order')));
  }

  // receiver_type - computed: true, optional: false, required: false
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_ids')));
  }

  // weekday - computed: true, optional: false, required: false
  public get weekday() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weekday')));
  }
}

export class DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNoticesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNoticesOutputReference {
    return new DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmNoticesAlarmNotice {
}

export function dataTencentcloudMonitorAlarmNoticesAlarmNoticeToTerraform(struct?: DataTencentcloudMonitorAlarmNoticesAlarmNotice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmNoticesAlarmNoticeToHclTerraform(struct?: DataTencentcloudMonitorAlarmNoticesAlarmNotice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmNoticesAlarmNoticeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmNoticesAlarmNotice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmNoticesAlarmNotice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amp_consumer_id - computed: true, optional: false, required: false
  public get ampConsumerId() {
    return this.getStringAttribute('amp_consumer_id');
  }

  // cls_notices - computed: true, optional: false, required: false
  private _clsNotices = new DataTencentcloudMonitorAlarmNoticesAlarmNoticeClsNoticesList(this, "cls_notices", false);
  public get clsNotices() {
    return this._clsNotices;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_preset - computed: true, optional: false, required: false
  public get isPreset() {
    return this.getNumberAttribute('is_preset');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notice_language - computed: true, optional: false, required: false
  public get noticeLanguage() {
    return this.getStringAttribute('notice_language');
  }

  // notice_type - computed: true, optional: false, required: false
  public get noticeType() {
    return this.getStringAttribute('notice_type');
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

  // url_notices - computed: true, optional: false, required: false
  private _urlNotices = new DataTencentcloudMonitorAlarmNoticesAlarmNoticeUrlNoticesList(this, "url_notices", false);
  public get urlNotices() {
    return this._urlNotices;
  }

  // user_notices - computed: true, optional: false, required: false
  private _userNotices = new DataTencentcloudMonitorAlarmNoticesAlarmNoticeUserNoticesList(this, "user_notices", false);
  public get userNotices() {
    return this._userNotices;
  }
}

export class DataTencentcloudMonitorAlarmNoticesAlarmNoticeList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmNoticesAlarmNoticeOutputReference {
    return new DataTencentcloudMonitorAlarmNoticesAlarmNoticeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices tencentcloud_monitor_alarm_notices}
*/
export class DataTencentcloudMonitorAlarmNotices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_alarm_notices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorAlarmNotices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorAlarmNotices to import
  * @param importFromId The id of the existing DataTencentcloudMonitorAlarmNotices that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorAlarmNotices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_alarm_notices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/monitor_alarm_notices tencentcloud_monitor_alarm_notices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorAlarmNoticesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorAlarmNoticesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_alarm_notices',
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
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._name = config.name;
    this._noticeIds = config.noticeIds;
    this._order = config.order;
    this._ownerUid = config.ownerUid;
    this._receiverType = config.receiverType;
    this._resultOutputFile = config.resultOutputFile;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_notice - computed: true, optional: false, required: false
  private _alarmNotice = new DataTencentcloudMonitorAlarmNoticesAlarmNoticeList(this, "alarm_notice", false);
  public get alarmNotice() {
    return this._alarmNotice;
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

  // notice_ids - computed: false, optional: true, required: false
  private _noticeIds?: string[]; 
  public get noticeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('notice_ids'));
  }
  public set noticeIds(value: string[]) {
    this._noticeIds = value;
  }
  public resetNoticeIds() {
    this._noticeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeIdsInput() {
    return this._noticeIds;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // owner_uid - computed: false, optional: true, required: false
  private _ownerUid?: number; 
  public get ownerUid() {
    return this.getNumberAttribute('owner_uid');
  }
  public set ownerUid(value: number) {
    this._ownerUid = value;
  }
  public resetOwnerUid() {
    this._ownerUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUidInput() {
    return this._ownerUid;
  }

  // receiver_type - computed: false, optional: true, required: false
  private _receiverType?: string; 
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }
  public set receiverType(value: string) {
    this._receiverType = value;
  }
  public resetReceiverType() {
    this._receiverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTypeInput() {
    return this._receiverType;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notice_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noticeIds),
      order: cdktf.stringToTerraform(this._order),
      owner_uid: cdktf.numberToTerraform(this._ownerUid),
      receiver_type: cdktf.stringToTerraform(this._receiverType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
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
      notice_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noticeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_uid: {
        value: cdktf.numberToHclTerraform(this._ownerUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receiver_type: {
        value: cdktf.stringToHclTerraform(this._receiverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
