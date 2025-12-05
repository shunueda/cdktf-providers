// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpAlertGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tencent cloud notification template id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#amp_receivers MonitorTmpAlertGroup#amp_receivers}
  */
  readonly ampReceivers?: string[];
  /**
  * Unique alert group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#group_name MonitorTmpAlertGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#id MonitorTmpAlertGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#instance_id MonitorTmpAlertGroup#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Alert message send interval, default 1 hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#repeat_interval MonitorTmpAlertGroup#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * custom_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#custom_receiver MonitorTmpAlertGroup#custom_receiver}
  */
  readonly customReceiver?: MonitorTmpAlertGroupCustomReceiver;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#rules MonitorTmpAlertGroup#rules}
  */
  readonly rules?: MonitorTmpAlertGroupRules[] | cdktf.IResolvable;
}
export interface MonitorTmpAlertGroupCustomReceiverAllowedTimeRanges {
  /**
  * Time range end, seconds since 0 o'clock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#end MonitorTmpAlertGroup#end}
  */
  readonly end?: string;
  /**
  * Time range start, seconds since 0 o'clock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#start MonitorTmpAlertGroup#start}
  */
  readonly start?: string;
}

export function monitorTmpAlertGroupCustomReceiverAllowedTimeRangesToTerraform(struct?: MonitorTmpAlertGroupCustomReceiverAllowedTimeRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function monitorTmpAlertGroupCustomReceiverAllowedTimeRangesToHclTerraform(struct?: MonitorTmpAlertGroupCustomReceiverAllowedTimeRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpAlertGroupCustomReceiverAllowedTimeRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpAlertGroupCustomReceiverAllowedTimeRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpAlertGroupCustomReceiverAllowedTimeRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class MonitorTmpAlertGroupCustomReceiverAllowedTimeRangesList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpAlertGroupCustomReceiverAllowedTimeRanges[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpAlertGroupCustomReceiverAllowedTimeRangesOutputReference {
    return new MonitorTmpAlertGroupCustomReceiverAllowedTimeRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpAlertGroupCustomReceiver {
  /**
  * Only effect when alertmanager in user cluster, this cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#cluster_id MonitorTmpAlertGroup#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Only effect when alertmanager in user cluster, this cluster type (tke|eks|tdcc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#cluster_type MonitorTmpAlertGroup#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Custom receiver type, webhook|alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#type MonitorTmpAlertGroup#type}
  */
  readonly type?: string;
  /**
  * Custom receiver address, can be accessed by process in prometheus instance subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#url MonitorTmpAlertGroup#url}
  */
  readonly url?: string;
  /**
  * allowed_time_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#allowed_time_ranges MonitorTmpAlertGroup#allowed_time_ranges}
  */
  readonly allowedTimeRanges?: MonitorTmpAlertGroupCustomReceiverAllowedTimeRanges[] | cdktf.IResolvable;
}

export function monitorTmpAlertGroupCustomReceiverToTerraform(struct?: MonitorTmpAlertGroupCustomReceiverOutputReference | MonitorTmpAlertGroupCustomReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    allowed_time_ranges: cdktf.listMapper(monitorTmpAlertGroupCustomReceiverAllowedTimeRangesToTerraform, true)(struct!.allowedTimeRanges),
  }
}


export function monitorTmpAlertGroupCustomReceiverToHclTerraform(struct?: MonitorTmpAlertGroupCustomReceiverOutputReference | MonitorTmpAlertGroupCustomReceiver): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    allowed_time_ranges: {
      value: cdktf.listMapperHcl(monitorTmpAlertGroupCustomReceiverAllowedTimeRangesToHclTerraform, true)(struct!.allowedTimeRanges),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpAlertGroupCustomReceiverAllowedTimeRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpAlertGroupCustomReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpAlertGroupCustomReceiver | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._allowedTimeRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTimeRanges = this._allowedTimeRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpAlertGroupCustomReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._clusterType = undefined;
      this._type = undefined;
      this._url = undefined;
      this._allowedTimeRanges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._clusterType = value.clusterType;
      this._type = value.type;
      this._url = value.url;
      this._allowedTimeRanges.internalValue = value.allowedTimeRanges;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // allowed_time_ranges - computed: false, optional: true, required: false
  private _allowedTimeRanges = new MonitorTmpAlertGroupCustomReceiverAllowedTimeRangesList(this, "allowed_time_ranges", false);
  public get allowedTimeRanges() {
    return this._allowedTimeRanges;
  }
  public putAllowedTimeRanges(value: MonitorTmpAlertGroupCustomReceiverAllowedTimeRanges[] | cdktf.IResolvable) {
    this._allowedTimeRanges.internalValue = value;
  }
  public resetAllowedTimeRanges() {
    this._allowedTimeRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTimeRangesInput() {
    return this._allowedTimeRanges.internalValue;
  }
}
export interface MonitorTmpAlertGroupRules {
  /**
  * Annotation of alert rule. `summary`, `description` is special annotation in prometheus, mapping `Alarm Object`, `Alarm Information` in alarm message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#annotations MonitorTmpAlertGroup#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Rule alarm duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#duration MonitorTmpAlertGroup#duration}
  */
  readonly duration?: string;
  /**
  * Prometheus alert expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#expr MonitorTmpAlertGroup#expr}
  */
  readonly expr?: string;
  /**
  * Labels of alert rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#labels MonitorTmpAlertGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Alert rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#rule_name MonitorTmpAlertGroup#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Rule state. `2`-enable, `3`-disable, default `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#state MonitorTmpAlertGroup#state}
  */
  readonly state?: number;
}

export function monitorTmpAlertGroupRulesToTerraform(struct?: MonitorTmpAlertGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    duration: cdktf.stringToTerraform(struct!.duration),
    expr: cdktf.stringToTerraform(struct!.expr),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    state: cdktf.numberToTerraform(struct!.state),
  }
}


export function monitorTmpAlertGroupRulesToHclTerraform(struct?: MonitorTmpAlertGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.numberToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpAlertGroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpAlertGroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpAlertGroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._duration = undefined;
      this._expr = undefined;
      this._labels = undefined;
      this._ruleName = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._duration = value.duration;
      this._expr = value.expr;
      this._labels = value.labels;
      this._ruleName = value.ruleName;
      this._state = value.state;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // state - computed: false, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class MonitorTmpAlertGroupRulesList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpAlertGroupRules[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpAlertGroupRulesOutputReference {
    return new MonitorTmpAlertGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group tencentcloud_monitor_tmp_alert_group}
*/
export class MonitorTmpAlertGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_alert_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpAlertGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpAlertGroup to import
  * @param importFromId The id of the existing MonitorTmpAlertGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpAlertGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_alert_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/monitor_tmp_alert_group tencentcloud_monitor_tmp_alert_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpAlertGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpAlertGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_alert_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ampReceivers = config.ampReceivers;
    this._groupName = config.groupName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._repeatInterval = config.repeatInterval;
    this._customReceiver.internalValue = config.customReceiver;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amp_receivers - computed: false, optional: true, required: false
  private _ampReceivers?: string[]; 
  public get ampReceivers() {
    return cdktf.Fn.tolist(this.getListAttribute('amp_receivers'));
  }
  public set ampReceivers(value: string[]) {
    this._ampReceivers = value;
  }
  public resetAmpReceivers() {
    this._ampReceivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ampReceiversInput() {
    return this._ampReceivers;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // custom_receiver - computed: false, optional: true, required: false
  private _customReceiver = new MonitorTmpAlertGroupCustomReceiverOutputReference(this, "custom_receiver");
  public get customReceiver() {
    return this._customReceiver;
  }
  public putCustomReceiver(value: MonitorTmpAlertGroupCustomReceiver) {
    this._customReceiver.internalValue = value;
  }
  public resetCustomReceiver() {
    this._customReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReceiverInput() {
    return this._customReceiver.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new MonitorTmpAlertGroupRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: MonitorTmpAlertGroupRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amp_receivers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ampReceivers),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      repeat_interval: cdktf.stringToTerraform(this._repeatInterval),
      custom_receiver: monitorTmpAlertGroupCustomReceiverToTerraform(this._customReceiver.internalValue),
      rules: cdktf.listMapper(monitorTmpAlertGroupRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amp_receivers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ampReceivers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      repeat_interval: {
        value: cdktf.stringToHclTerraform(this._repeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_receiver: {
        value: monitorTmpAlertGroupCustomReceiverToHclTerraform(this._customReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpAlertGroupCustomReceiverList",
      },
      rules: {
        value: cdktf.listMapperHcl(monitorTmpAlertGroupRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpAlertGroupRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
