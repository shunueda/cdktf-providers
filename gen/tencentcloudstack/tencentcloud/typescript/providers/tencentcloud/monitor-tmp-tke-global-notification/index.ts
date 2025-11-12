// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpTkeGlobalNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#id MonitorTmpTkeGlobalNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#instance_id MonitorTmpTkeGlobalNotification#instance_id}
  */
  readonly instanceId: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#notification MonitorTmpTkeGlobalNotification#notification}
  */
  readonly notification: MonitorTmpTkeGlobalNotificationNotification;
}
export interface MonitorTmpTkeGlobalNotificationNotificationAlertManager {
  /**
  * Cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#cluster_id MonitorTmpTkeGlobalNotification#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Cluster type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#cluster_type MonitorTmpTkeGlobalNotification#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Alert manager url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#url MonitorTmpTkeGlobalNotification#url}
  */
  readonly url: string;
}

export function monitorTmpTkeGlobalNotificationNotificationAlertManagerToTerraform(struct?: MonitorTmpTkeGlobalNotificationNotificationAlertManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function monitorTmpTkeGlobalNotificationNotificationAlertManagerToHclTerraform(struct?: MonitorTmpTkeGlobalNotificationNotificationAlertManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeGlobalNotificationNotificationAlertManagerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeGlobalNotificationNotificationAlertManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeGlobalNotificationNotificationAlertManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._clusterType = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._clusterType = value.clusterType;
      this._url = value.url;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
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
}

export class MonitorTmpTkeGlobalNotificationNotificationAlertManagerList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeGlobalNotificationNotificationAlertManager[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeGlobalNotificationNotificationAlertManagerOutputReference {
    return new MonitorTmpTkeGlobalNotificationNotificationAlertManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeGlobalNotificationNotification {
  /**
  * Alarm notification switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#enabled MonitorTmpTkeGlobalNotification#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Alarm notification method, Valid values: `SMS`, `EMAIL`, `CALL`, `WECHAT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#notify_way MonitorTmpTkeGlobalNotification#notify_way}
  */
  readonly notifyWay?: string[];
  /**
  * Phone Alarm Reach Notification, NotifyWay is `CALL`, and this parameter is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#phone_arrive_notice MonitorTmpTkeGlobalNotification#phone_arrive_notice}
  */
  readonly phoneArriveNotice?: boolean | cdktf.IResolvable;
  /**
  * Telephone alarm off-wheel interval, NotifyWay is `CALL`, and this parameter is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#phone_circle_interval MonitorTmpTkeGlobalNotification#phone_circle_interval}
  */
  readonly phoneCircleInterval?: number;
  /**
  * Number of phone alerts (user group), NotifyWay is `CALL`, and this parameter is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#phone_circle_times MonitorTmpTkeGlobalNotification#phone_circle_times}
  */
  readonly phoneCircleTimes?: number;
  /**
  * Interval between telephone alarm rounds, NotifyWay is `CALL`, and this parameter is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#phone_inner_interval MonitorTmpTkeGlobalNotification#phone_inner_interval}
  */
  readonly phoneInnerInterval?: number;
  /**
  * Phone alert sequence, NotifyWay is `CALL`, and this parameter is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#phone_notify_order MonitorTmpTkeGlobalNotification#phone_notify_order}
  */
  readonly phoneNotifyOrder?: number[];
  /**
  * Alarm receiving group(user group).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#receiver_groups MonitorTmpTkeGlobalNotification#receiver_groups}
  */
  readonly receiverGroups?: string[];
  /**
  * Convergence time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#repeat_interval MonitorTmpTkeGlobalNotification#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Effective end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#time_range_end MonitorTmpTkeGlobalNotification#time_range_end}
  */
  readonly timeRangeEnd?: string;
  /**
  * Effective start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#time_range_start MonitorTmpTkeGlobalNotification#time_range_start}
  */
  readonly timeRangeStart?: string;
  /**
  * Alarm notification type, Valid values: `amp`, `webhook`, `alertmanager`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#type MonitorTmpTkeGlobalNotification#type}
  */
  readonly type: string;
  /**
  * Web hook, if Type is `webhook`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#web_hook MonitorTmpTkeGlobalNotification#web_hook}
  */
  readonly webHook?: string;
  /**
  * alert_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#alert_manager MonitorTmpTkeGlobalNotification#alert_manager}
  */
  readonly alertManager?: MonitorTmpTkeGlobalNotificationNotificationAlertManager[] | cdktf.IResolvable;
}

export function monitorTmpTkeGlobalNotificationNotificationToTerraform(struct?: MonitorTmpTkeGlobalNotificationNotificationOutputReference | MonitorTmpTkeGlobalNotificationNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    notify_way: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyWay),
    phone_arrive_notice: cdktf.booleanToTerraform(struct!.phoneArriveNotice),
    phone_circle_interval: cdktf.numberToTerraform(struct!.phoneCircleInterval),
    phone_circle_times: cdktf.numberToTerraform(struct!.phoneCircleTimes),
    phone_inner_interval: cdktf.numberToTerraform(struct!.phoneInnerInterval),
    phone_notify_order: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.phoneNotifyOrder),
    receiver_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receiverGroups),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    time_range_end: cdktf.stringToTerraform(struct!.timeRangeEnd),
    time_range_start: cdktf.stringToTerraform(struct!.timeRangeStart),
    type: cdktf.stringToTerraform(struct!.type),
    web_hook: cdktf.stringToTerraform(struct!.webHook),
    alert_manager: cdktf.listMapper(monitorTmpTkeGlobalNotificationNotificationAlertManagerToTerraform, true)(struct!.alertManager),
  }
}


export function monitorTmpTkeGlobalNotificationNotificationToHclTerraform(struct?: MonitorTmpTkeGlobalNotificationNotificationOutputReference | MonitorTmpTkeGlobalNotificationNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_way: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyWay),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    phone_arrive_notice: {
      value: cdktf.booleanToHclTerraform(struct!.phoneArriveNotice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    phone_notify_order: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.phoneNotifyOrder),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    receiver_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receiverGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_range_end: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_range_start: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_hook: {
      value: cdktf.stringToHclTerraform(struct!.webHook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_manager: {
      value: cdktf.listMapperHcl(monitorTmpTkeGlobalNotificationNotificationAlertManagerToHclTerraform, true)(struct!.alertManager),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeGlobalNotificationNotificationAlertManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeGlobalNotificationNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpTkeGlobalNotificationNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._notifyWay !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyWay = this._notifyWay;
    }
    if (this._phoneArriveNotice !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneArriveNotice = this._phoneArriveNotice;
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
    if (this._phoneNotifyOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNotifyOrder = this._phoneNotifyOrder;
    }
    if (this._receiverGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverGroups = this._receiverGroups;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._timeRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeEnd = this._timeRangeEnd;
    }
    if (this._timeRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeStart = this._timeRangeStart;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._webHook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHook = this._webHook;
    }
    if (this._alertManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertManager = this._alertManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeGlobalNotificationNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._notifyWay = undefined;
      this._phoneArriveNotice = undefined;
      this._phoneCircleInterval = undefined;
      this._phoneCircleTimes = undefined;
      this._phoneInnerInterval = undefined;
      this._phoneNotifyOrder = undefined;
      this._receiverGroups = undefined;
      this._repeatInterval = undefined;
      this._timeRangeEnd = undefined;
      this._timeRangeStart = undefined;
      this._type = undefined;
      this._webHook = undefined;
      this._alertManager.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._notifyWay = value.notifyWay;
      this._phoneArriveNotice = value.phoneArriveNotice;
      this._phoneCircleInterval = value.phoneCircleInterval;
      this._phoneCircleTimes = value.phoneCircleTimes;
      this._phoneInnerInterval = value.phoneInnerInterval;
      this._phoneNotifyOrder = value.phoneNotifyOrder;
      this._receiverGroups = value.receiverGroups;
      this._repeatInterval = value.repeatInterval;
      this._timeRangeEnd = value.timeRangeEnd;
      this._timeRangeStart = value.timeRangeStart;
      this._type = value.type;
      this._webHook = value.webHook;
      this._alertManager.internalValue = value.alertManager;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // notify_way - computed: false, optional: true, required: false
  private _notifyWay?: string[]; 
  public get notifyWay() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_way'));
  }
  public set notifyWay(value: string[]) {
    this._notifyWay = value;
  }
  public resetNotifyWay() {
    this._notifyWay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWayInput() {
    return this._notifyWay;
  }

  // phone_arrive_notice - computed: false, optional: true, required: false
  private _phoneArriveNotice?: boolean | cdktf.IResolvable; 
  public get phoneArriveNotice() {
    return this.getBooleanAttribute('phone_arrive_notice');
  }
  public set phoneArriveNotice(value: boolean | cdktf.IResolvable) {
    this._phoneArriveNotice = value;
  }
  public resetPhoneArriveNotice() {
    this._phoneArriveNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneArriveNoticeInput() {
    return this._phoneArriveNotice;
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

  // phone_notify_order - computed: false, optional: true, required: false
  private _phoneNotifyOrder?: number[]; 
  public get phoneNotifyOrder() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('phone_notify_order')));
  }
  public set phoneNotifyOrder(value: number[]) {
    this._phoneNotifyOrder = value;
  }
  public resetPhoneNotifyOrder() {
    this._phoneNotifyOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNotifyOrderInput() {
    return this._phoneNotifyOrder;
  }

  // receiver_groups - computed: false, optional: true, required: false
  private _receiverGroups?: string[]; 
  public get receiverGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('receiver_groups'));
  }
  public set receiverGroups(value: string[]) {
    this._receiverGroups = value;
  }
  public resetReceiverGroups() {
    this._receiverGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverGroupsInput() {
    return this._receiverGroups;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // time_range_end - computed: false, optional: true, required: false
  private _timeRangeEnd?: string; 
  public get timeRangeEnd() {
    return this.getStringAttribute('time_range_end');
  }
  public set timeRangeEnd(value: string) {
    this._timeRangeEnd = value;
  }
  public resetTimeRangeEnd() {
    this._timeRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeEndInput() {
    return this._timeRangeEnd;
  }

  // time_range_start - computed: false, optional: true, required: false
  private _timeRangeStart?: string; 
  public get timeRangeStart() {
    return this.getStringAttribute('time_range_start');
  }
  public set timeRangeStart(value: string) {
    this._timeRangeStart = value;
  }
  public resetTimeRangeStart() {
    this._timeRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeStartInput() {
    return this._timeRangeStart;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // web_hook - computed: false, optional: true, required: false
  private _webHook?: string; 
  public get webHook() {
    return this.getStringAttribute('web_hook');
  }
  public set webHook(value: string) {
    this._webHook = value;
  }
  public resetWebHook() {
    this._webHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHookInput() {
    return this._webHook;
  }

  // alert_manager - computed: false, optional: true, required: false
  private _alertManager = new MonitorTmpTkeGlobalNotificationNotificationAlertManagerList(this, "alert_manager", false);
  public get alertManager() {
    return this._alertManager;
  }
  public putAlertManager(value: MonitorTmpTkeGlobalNotificationNotificationAlertManager[] | cdktf.IResolvable) {
    this._alertManager.internalValue = value;
  }
  public resetAlertManager() {
    this._alertManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertManagerInput() {
    return this._alertManager.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification tencentcloud_monitor_tmp_tke_global_notification}
*/
export class MonitorTmpTkeGlobalNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_tke_global_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpTkeGlobalNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpTkeGlobalNotification to import
  * @param importFromId The id of the existing MonitorTmpTkeGlobalNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpTkeGlobalNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_tke_global_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/monitor_tmp_tke_global_notification tencentcloud_monitor_tmp_tke_global_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpTkeGlobalNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpTkeGlobalNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_tke_global_notification',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
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
    this._instanceId = config.instanceId;
    this._notification.internalValue = config.notification;
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

  // notification - computed: false, optional: false, required: true
  private _notification = new MonitorTmpTkeGlobalNotificationNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: MonitorTmpTkeGlobalNotificationNotification) {
    this._notification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      notification: monitorTmpTkeGlobalNotificationNotificationToTerraform(this._notification.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification: {
        value: monitorTmpTkeGlobalNotificationNotificationToHclTerraform(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpTkeGlobalNotificationNotificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
