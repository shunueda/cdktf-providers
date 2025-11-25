// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpTkeAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#id MonitorTmpTkeAlertPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#instance_id MonitorTmpTkeAlertPolicy#instance_id}
  */
  readonly instanceId: string;
  /**
  * alert_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#alert_rule MonitorTmpTkeAlertPolicy#alert_rule}
  */
  readonly alertRule: MonitorTmpTkeAlertPolicyAlertRule;
}
export interface MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManager {
  /**
  * The ID of the cluster where the alertmanager is deployed. Note: This field may return null, indicating that a valid value could not be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#cluster_id MonitorTmpTkeAlertPolicy#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Alertmanager is deployed in the cluster type. Note: This field may return null, indicating that a valid value could not be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#cluster_type MonitorTmpTkeAlertPolicy#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Alertmanager url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#url MonitorTmpTkeAlertPolicy#url}
  */
  readonly url: string;
}

export function monitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerToTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerOutputReference | MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManager): any {
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


export function monitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerToHclTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerOutputReference | MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManager): any {
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

export class MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManager | undefined {
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

  public set internalValue(value: MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._clusterType = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface MonitorTmpTkeAlertPolicyAlertRuleNotification {
  /**
  * Whether it is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#enabled MonitorTmpTkeAlertPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Alarm notification method. At present, there are SMS, EMAIL, CALL, WECHAT methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#notify_way MonitorTmpTkeAlertPolicy#notify_way}
  */
  readonly notifyWay?: string[];
  /**
  * Telephone alerts reach notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#phone_arrive_notice MonitorTmpTkeAlertPolicy#phone_arrive_notice}
  */
  readonly phoneArriveNotice?: boolean | cdktf.IResolvable;
  /**
  * Effective end timeTelephone alarm wheel interval. Units: Seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#phone_circle_interval MonitorTmpTkeAlertPolicy#phone_circle_interval}
  */
  readonly phoneCircleInterval?: number;
  /**
  * PhoneCircleTimes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#phone_circle_times MonitorTmpTkeAlertPolicy#phone_circle_times}
  */
  readonly phoneCircleTimes?: number;
  /**
  * Telephone alarm wheel intervals. Units: Seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#phone_inner_interval MonitorTmpTkeAlertPolicy#phone_inner_interval}
  */
  readonly phoneInnerInterval?: number;
  /**
  * Telephone alarm sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#phone_notify_order MonitorTmpTkeAlertPolicy#phone_notify_order}
  */
  readonly phoneNotifyOrder?: number[];
  /**
  * Alert Receiving Group (User Group).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#receiver_groups MonitorTmpTkeAlertPolicy#receiver_groups}
  */
  readonly receiverGroups?: string[];
  /**
  * Convergence time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#repeat_interval MonitorTmpTkeAlertPolicy#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Effective end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#time_range_end MonitorTmpTkeAlertPolicy#time_range_end}
  */
  readonly timeRangeEnd?: string;
  /**
  * The time from which it takes effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#time_range_start MonitorTmpTkeAlertPolicy#time_range_start}
  */
  readonly timeRangeStart?: string;
  /**
  * The channel type, which defaults to amp, supports the following `amp`, `webhook`, `alertmanager`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#type MonitorTmpTkeAlertPolicy#type}
  */
  readonly type: string;
  /**
  * If Type is webhook, the field is required. Note: This field may return null, indicating that a valid value could not be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#web_hook MonitorTmpTkeAlertPolicy#web_hook}
  */
  readonly webHook?: string;
  /**
  * alert_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#alert_manager MonitorTmpTkeAlertPolicy#alert_manager}
  */
  readonly alertManager?: MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManager;
}

export function monitorTmpTkeAlertPolicyAlertRuleNotificationToTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleNotificationOutputReference | MonitorTmpTkeAlertPolicyAlertRuleNotification): any {
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
    alert_manager: monitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerToTerraform(struct!.alertManager),
  }
}


export function monitorTmpTkeAlertPolicyAlertRuleNotificationToHclTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleNotificationOutputReference | MonitorTmpTkeAlertPolicyAlertRuleNotification): any {
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
      value: monitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerToHclTerraform(struct!.alertManager),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeAlertPolicyAlertRuleNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpTkeAlertPolicyAlertRuleNotification | undefined {
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

  public set internalValue(value: MonitorTmpTkeAlertPolicyAlertRuleNotification | undefined) {
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
  private _alertManager = new MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManagerOutputReference(this, "alert_manager");
  public get alertManager() {
    return this._alertManager;
  }
  public putAlertManager(value: MonitorTmpTkeAlertPolicyAlertRuleNotificationAlertManager) {
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
export interface MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotations {
  /**
  * Name of map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#name MonitorTmpTkeAlertPolicy#name}
  */
  readonly name: string;
  /**
  * Value of map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#value MonitorTmpTkeAlertPolicy#value}
  */
  readonly value: string;
}

export function monitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsToTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsToHclTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotations[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsOutputReference {
    return new MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeAlertPolicyAlertRuleRulesLabels {
  /**
  * Name of map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#name MonitorTmpTkeAlertPolicy#name}
  */
  readonly name: string;
  /**
  * Value of map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#value MonitorTmpTkeAlertPolicy#value}
  */
  readonly value: string;
}

export function monitorTmpTkeAlertPolicyAlertRuleRulesLabelsToTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleRulesLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorTmpTkeAlertPolicyAlertRuleRulesLabelsToHclTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleRulesLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeAlertPolicyAlertRuleRulesLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeAlertPolicyAlertRuleRulesLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeAlertPolicyAlertRuleRulesLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MonitorTmpTkeAlertPolicyAlertRuleRulesLabelsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeAlertPolicyAlertRuleRulesLabels[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeAlertPolicyAlertRuleRulesLabelsOutputReference {
    return new MonitorTmpTkeAlertPolicyAlertRuleRulesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeAlertPolicyAlertRuleRules {
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#describe MonitorTmpTkeAlertPolicy#describe}
  */
  readonly describe?: string;
  /**
  * Time of duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#for MonitorTmpTkeAlertPolicy#for}
  */
  readonly for: string;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#name MonitorTmpTkeAlertPolicy#name}
  */
  readonly name: string;
  /**
  * Prometheus statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#rule MonitorTmpTkeAlertPolicy#rule}
  */
  readonly rule: string;
  /**
  * Alarm rule status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#rule_state MonitorTmpTkeAlertPolicy#rule_state}
  */
  readonly ruleState?: number;
  /**
  * Alert sending template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#template MonitorTmpTkeAlertPolicy#template}
  */
  readonly template: string;
  /**
  * annotations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#annotations MonitorTmpTkeAlertPolicy#annotations}
  */
  readonly annotations?: MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotations[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#labels MonitorTmpTkeAlertPolicy#labels}
  */
  readonly labels: MonitorTmpTkeAlertPolicyAlertRuleRulesLabels[] | cdktf.IResolvable;
}

export function monitorTmpTkeAlertPolicyAlertRuleRulesToTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    describe: cdktf.stringToTerraform(struct!.describe),
    for: cdktf.stringToTerraform(struct!.for),
    name: cdktf.stringToTerraform(struct!.name),
    rule: cdktf.stringToTerraform(struct!.rule),
    rule_state: cdktf.numberToTerraform(struct!.ruleState),
    template: cdktf.stringToTerraform(struct!.template),
    annotations: cdktf.listMapper(monitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsToTerraform, true)(struct!.annotations),
    labels: cdktf.listMapper(monitorTmpTkeAlertPolicyAlertRuleRulesLabelsToTerraform, true)(struct!.labels),
  }
}


export function monitorTmpTkeAlertPolicyAlertRuleRulesToHclTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    describe: {
      value: cdktf.stringToHclTerraform(struct!.describe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for: {
      value: cdktf.stringToHclTerraform(struct!.for),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_state: {
      value: cdktf.numberToHclTerraform(struct!.ruleState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(monitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsToHclTerraform, true)(struct!.annotations),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsList",
    },
    labels: {
      value: cdktf.listMapperHcl(monitorTmpTkeAlertPolicyAlertRuleRulesLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeAlertPolicyAlertRuleRulesLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeAlertPolicyAlertRuleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeAlertPolicyAlertRuleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describe !== undefined) {
      hasAnyValues = true;
      internalValueResult.describe = this._describe;
    }
    if (this._for !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ruleState !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleState = this._ruleState;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeAlertPolicyAlertRuleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._describe = undefined;
      this._for = undefined;
      this._name = undefined;
      this._rule = undefined;
      this._ruleState = undefined;
      this._template = undefined;
      this._annotations.internalValue = undefined;
      this._labels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._describe = value.describe;
      this._for = value.for;
      this._name = value.name;
      this._rule = value.rule;
      this._ruleState = value.ruleState;
      this._template = value.template;
      this._annotations.internalValue = value.annotations;
      this._labels.internalValue = value.labels;
    }
  }

  // describe - computed: false, optional: true, required: false
  private _describe?: string; 
  public get describe() {
    return this.getStringAttribute('describe');
  }
  public set describe(value: string) {
    this._describe = value;
  }
  public resetDescribe() {
    this._describe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get describeInput() {
    return this._describe;
  }

  // for - computed: false, optional: false, required: true
  private _for?: string; 
  public get for() {
    return this.getStringAttribute('for');
  }
  public set for(value: string) {
    this._for = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for;
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_state - computed: false, optional: true, required: false
  private _ruleState?: number; 
  public get ruleState() {
    return this.getNumberAttribute('rule_state');
  }
  public set ruleState(value: number) {
    this._ruleState = value;
  }
  public resetRuleState() {
    this._ruleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStateInput() {
    return this._ruleState;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations = new MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotationsList(this, "annotations", false);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: MonitorTmpTkeAlertPolicyAlertRuleRulesAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // labels - computed: false, optional: false, required: true
  private _labels = new MonitorTmpTkeAlertPolicyAlertRuleRulesLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: MonitorTmpTkeAlertPolicyAlertRuleRulesLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}

export class MonitorTmpTkeAlertPolicyAlertRuleRulesList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeAlertPolicyAlertRuleRules[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeAlertPolicyAlertRuleRulesOutputReference {
    return new MonitorTmpTkeAlertPolicyAlertRuleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeAlertPolicyAlertRule {
  /**
  * If the alarm policy is derived from the CRD resource definition of the user cluster, the ClusterId is the cluster ID to which it belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#cluster_id MonitorTmpTkeAlertPolicy#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Alarm policy ID. Note: This field may return null, indicating that a valid value could not be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#id MonitorTmpTkeAlertPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#name MonitorTmpTkeAlertPolicy#name}
  */
  readonly name: string;
  /**
  * If the alarm is sent from a template, the TemplateId is the template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#template_id MonitorTmpTkeAlertPolicy#template_id}
  */
  readonly templateId?: string;
  /**
  * Last modified time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#updated_at MonitorTmpTkeAlertPolicy#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#notification MonitorTmpTkeAlertPolicy#notification}
  */
  readonly notification?: MonitorTmpTkeAlertPolicyAlertRuleNotification;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#rules MonitorTmpTkeAlertPolicy#rules}
  */
  readonly rules: MonitorTmpTkeAlertPolicyAlertRuleRules[] | cdktf.IResolvable;
}

export function monitorTmpTkeAlertPolicyAlertRuleToTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleOutputReference | MonitorTmpTkeAlertPolicyAlertRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
    notification: monitorTmpTkeAlertPolicyAlertRuleNotificationToTerraform(struct!.notification),
    rules: cdktf.listMapper(monitorTmpTkeAlertPolicyAlertRuleRulesToTerraform, true)(struct!.rules),
  }
}


export function monitorTmpTkeAlertPolicyAlertRuleToHclTerraform(struct?: MonitorTmpTkeAlertPolicyAlertRuleOutputReference | MonitorTmpTkeAlertPolicyAlertRule): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification: {
      value: monitorTmpTkeAlertPolicyAlertRuleNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeAlertPolicyAlertRuleNotificationList",
    },
    rules: {
      value: cdktf.listMapperHcl(monitorTmpTkeAlertPolicyAlertRuleRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeAlertPolicyAlertRuleRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeAlertPolicyAlertRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpTkeAlertPolicyAlertRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeAlertPolicyAlertRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._templateId = undefined;
      this._updatedAt = undefined;
      this._notification.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._id = value.id;
      this._name = value.name;
      this._templateId = value.templateId;
      this._updatedAt = value.updatedAt;
      this._notification.internalValue = value.notification;
      this._rules.internalValue = value.rules;
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

  // id - computed: false, optional: true, required: false
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new MonitorTmpTkeAlertPolicyAlertRuleNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: MonitorTmpTkeAlertPolicyAlertRuleNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new MonitorTmpTkeAlertPolicyAlertRuleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: MonitorTmpTkeAlertPolicyAlertRuleRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy tencentcloud_monitor_tmp_tke_alert_policy}
*/
export class MonitorTmpTkeAlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_tke_alert_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpTkeAlertPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpTkeAlertPolicy to import
  * @param importFromId The id of the existing MonitorTmpTkeAlertPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpTkeAlertPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_tke_alert_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_tke_alert_policy tencentcloud_monitor_tmp_tke_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpTkeAlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpTkeAlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_tke_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._alertRule.internalValue = config.alertRule;
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

  // alert_rule - computed: false, optional: false, required: true
  private _alertRule = new MonitorTmpTkeAlertPolicyAlertRuleOutputReference(this, "alert_rule");
  public get alertRule() {
    return this._alertRule;
  }
  public putAlertRule(value: MonitorTmpTkeAlertPolicyAlertRule) {
    this._alertRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleInput() {
    return this._alertRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      alert_rule: monitorTmpTkeAlertPolicyAlertRuleToTerraform(this._alertRule.internalValue),
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
      alert_rule: {
        value: monitorTmpTkeAlertPolicyAlertRuleToHclTerraform(this._alertRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpTkeAlertPolicyAlertRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
