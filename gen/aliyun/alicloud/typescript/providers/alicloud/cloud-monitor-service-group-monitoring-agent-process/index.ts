// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudMonitorServiceGroupMonitoringAgentProcessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#group_id CloudMonitorServiceGroupMonitoringAgentProcess#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#id CloudMonitorServiceGroupMonitoringAgentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#match_express_filter_relation CloudMonitorServiceGroupMonitoringAgentProcess#match_express_filter_relation}
  */
  readonly matchExpressFilterRelation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#process_name CloudMonitorServiceGroupMonitoringAgentProcess#process_name}
  */
  readonly processName: string;
  /**
  * alert_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#alert_config CloudMonitorServiceGroupMonitoringAgentProcess#alert_config}
  */
  readonly alertConfig: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfig[] | cdktf.IResolvable;
  /**
  * match_express block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#match_express CloudMonitorServiceGroupMonitoringAgentProcess#match_express}
  */
  readonly matchExpress?: CloudMonitorServiceGroupMonitoringAgentProcessMatchExpress[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#timeouts CloudMonitorServiceGroupMonitoringAgentProcess#timeouts}
  */
  readonly timeouts?: CloudMonitorServiceGroupMonitoringAgentProcessTimeouts;
}
export interface CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#arn CloudMonitorServiceGroupMonitoringAgentProcess#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#json_params CloudMonitorServiceGroupMonitoringAgentProcess#json_params}
  */
  readonly jsonParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#level CloudMonitorServiceGroupMonitoringAgentProcess#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#target_list_id CloudMonitorServiceGroupMonitoringAgentProcess#target_list_id}
  */
  readonly targetListId?: string;
}

export function cloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructToTerraform(struct?: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    json_params: cdktf.stringToTerraform(struct!.jsonParams),
    level: cdktf.stringToTerraform(struct!.level),
    target_list_id: cdktf.stringToTerraform(struct!.targetListId),
  }
}


export function cloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructToHclTerraform(struct?: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_params: {
      value: cdktf.stringToHclTerraform(struct!.jsonParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_list_id: {
      value: cdktf.stringToHclTerraform(struct!.targetListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._jsonParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonParams = this._jsonParams;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._targetListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetListId = this._targetListId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._jsonParams = undefined;
      this._level = undefined;
      this._targetListId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._jsonParams = value.jsonParams;
      this._level = value.level;
      this._targetListId = value.targetListId;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // json_params - computed: false, optional: true, required: false
  private _jsonParams?: string; 
  public get jsonParams() {
    return this.getStringAttribute('json_params');
  }
  public set jsonParams(value: string) {
    this._jsonParams = value;
  }
  public resetJsonParams() {
    this._jsonParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonParamsInput() {
    return this._jsonParams;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // target_list_id - computed: false, optional: true, required: false
  private _targetListId?: string; 
  public get targetListId() {
    return this.getStringAttribute('target_list_id');
  }
  public set targetListId(value: string) {
    this._targetListId = value;
  }
  public resetTargetListId() {
    this._targetListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetListIdInput() {
    return this._targetListId;
  }
}

export class CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructList extends cdktf.ComplexList {
  public internalValue? : CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructOutputReference {
    return new CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMonitorServiceGroupMonitoringAgentProcessAlertConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#comparison_operator CloudMonitorServiceGroupMonitoringAgentProcess#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#effective_interval CloudMonitorServiceGroupMonitoringAgentProcess#effective_interval}
  */
  readonly effectiveInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#escalations_level CloudMonitorServiceGroupMonitoringAgentProcess#escalations_level}
  */
  readonly escalationsLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#silence_time CloudMonitorServiceGroupMonitoringAgentProcess#silence_time}
  */
  readonly silenceTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#statistics CloudMonitorServiceGroupMonitoringAgentProcess#statistics}
  */
  readonly statistics: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#threshold CloudMonitorServiceGroupMonitoringAgentProcess#threshold}
  */
  readonly threshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#times CloudMonitorServiceGroupMonitoringAgentProcess#times}
  */
  readonly times: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#webhook CloudMonitorServiceGroupMonitoringAgentProcess#webhook}
  */
  readonly webhook?: string;
  /**
  * target_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#target_list CloudMonitorServiceGroupMonitoringAgentProcess#target_list}
  */
  readonly targetList?: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStruct[] | cdktf.IResolvable;
}

export function cloudMonitorServiceGroupMonitoringAgentProcessAlertConfigToTerraform(struct?: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    effective_interval: cdktf.stringToTerraform(struct!.effectiveInterval),
    escalations_level: cdktf.stringToTerraform(struct!.escalationsLevel),
    silence_time: cdktf.numberToTerraform(struct!.silenceTime),
    statistics: cdktf.stringToTerraform(struct!.statistics),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    times: cdktf.stringToTerraform(struct!.times),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    target_list: cdktf.listMapper(cloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructToTerraform, true)(struct!.targetList),
  }
}


export function cloudMonitorServiceGroupMonitoringAgentProcessAlertConfigToHclTerraform(struct?: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_interval: {
      value: cdktf.stringToHclTerraform(struct!.effectiveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalations_level: {
      value: cdktf.stringToHclTerraform(struct!.escalationsLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    silence_time: {
      value: cdktf.numberToHclTerraform(struct!.silenceTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statistics: {
      value: cdktf.stringToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.stringToHclTerraform(struct!.times),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: cdktf.stringToHclTerraform(struct!.webhook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_list: {
      value: cdktf.listMapperHcl(cloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructToHclTerraform, true)(struct!.targetList),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMonitorServiceGroupMonitoringAgentProcessAlertConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._effectiveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveInterval = this._effectiveInterval;
    }
    if (this._escalationsLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationsLevel = this._escalationsLevel;
    }
    if (this._silenceTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.silenceTime = this._silenceTime;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    if (this._targetList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetList = this._targetList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._effectiveInterval = undefined;
      this._escalationsLevel = undefined;
      this._silenceTime = undefined;
      this._statistics = undefined;
      this._threshold = undefined;
      this._times = undefined;
      this._webhook = undefined;
      this._targetList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._effectiveInterval = value.effectiveInterval;
      this._escalationsLevel = value.escalationsLevel;
      this._silenceTime = value.silenceTime;
      this._statistics = value.statistics;
      this._threshold = value.threshold;
      this._times = value.times;
      this._webhook = value.webhook;
      this._targetList.internalValue = value.targetList;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // effective_interval - computed: false, optional: true, required: false
  private _effectiveInterval?: string; 
  public get effectiveInterval() {
    return this.getStringAttribute('effective_interval');
  }
  public set effectiveInterval(value: string) {
    this._effectiveInterval = value;
  }
  public resetEffectiveInterval() {
    this._effectiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveIntervalInput() {
    return this._effectiveInterval;
  }

  // escalations_level - computed: false, optional: false, required: true
  private _escalationsLevel?: string; 
  public get escalationsLevel() {
    return this.getStringAttribute('escalations_level');
  }
  public set escalationsLevel(value: string) {
    this._escalationsLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationsLevelInput() {
    return this._escalationsLevel;
  }

  // silence_time - computed: false, optional: true, required: false
  private _silenceTime?: number; 
  public get silenceTime() {
    return this.getNumberAttribute('silence_time');
  }
  public set silenceTime(value: number) {
    this._silenceTime = value;
  }
  public resetSilenceTime() {
    this._silenceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silenceTimeInput() {
    return this._silenceTime;
  }

  // statistics - computed: false, optional: false, required: true
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // times - computed: false, optional: false, required: true
  private _times?: string; 
  public get times() {
    return this.getStringAttribute('times');
  }
  public set times(value: string) {
    this._times = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // target_list - computed: false, optional: true, required: false
  private _targetList = new CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStructList(this, "target_list", false);
  public get targetList() {
    return this._targetList;
  }
  public putTargetList(value: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigTargetListStruct[] | cdktf.IResolvable) {
    this._targetList.internalValue = value;
  }
  public resetTargetList() {
    this._targetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetListInput() {
    return this._targetList.internalValue;
  }
}

export class CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigList extends cdktf.ComplexList {
  public internalValue? : CloudMonitorServiceGroupMonitoringAgentProcessAlertConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigOutputReference {
    return new CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMonitorServiceGroupMonitoringAgentProcessMatchExpress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#function CloudMonitorServiceGroupMonitoringAgentProcess#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#name CloudMonitorServiceGroupMonitoringAgentProcess#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#value CloudMonitorServiceGroupMonitoringAgentProcess#value}
  */
  readonly value?: string;
}

export function cloudMonitorServiceGroupMonitoringAgentProcessMatchExpressToTerraform(struct?: CloudMonitorServiceGroupMonitoringAgentProcessMatchExpress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudMonitorServiceGroupMonitoringAgentProcessMatchExpressToHclTerraform(struct?: CloudMonitorServiceGroupMonitoringAgentProcessMatchExpress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
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

export class CloudMonitorServiceGroupMonitoringAgentProcessMatchExpressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMonitorServiceGroupMonitoringAgentProcessMatchExpress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
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

  public set internalValue(value: CloudMonitorServiceGroupMonitoringAgentProcessMatchExpress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._function = undefined;
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
      this._function = value.function;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // function - computed: true, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class CloudMonitorServiceGroupMonitoringAgentProcessMatchExpressList extends cdktf.ComplexList {
  public internalValue? : CloudMonitorServiceGroupMonitoringAgentProcessMatchExpress[] | cdktf.IResolvable

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
  public get(index: number): CloudMonitorServiceGroupMonitoringAgentProcessMatchExpressOutputReference {
    return new CloudMonitorServiceGroupMonitoringAgentProcessMatchExpressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMonitorServiceGroupMonitoringAgentProcessTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#create CloudMonitorServiceGroupMonitoringAgentProcess#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#delete CloudMonitorServiceGroupMonitoringAgentProcess#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#update CloudMonitorServiceGroupMonitoringAgentProcess#update}
  */
  readonly update?: string;
}

export function cloudMonitorServiceGroupMonitoringAgentProcessTimeoutsToTerraform(struct?: CloudMonitorServiceGroupMonitoringAgentProcessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudMonitorServiceGroupMonitoringAgentProcessTimeoutsToHclTerraform(struct?: CloudMonitorServiceGroupMonitoringAgentProcessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMonitorServiceGroupMonitoringAgentProcessTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudMonitorServiceGroupMonitoringAgentProcessTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMonitorServiceGroupMonitoringAgentProcessTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process alicloud_cloud_monitor_service_group_monitoring_agent_process}
*/
export class CloudMonitorServiceGroupMonitoringAgentProcess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_monitor_service_group_monitoring_agent_process";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudMonitorServiceGroupMonitoringAgentProcess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudMonitorServiceGroupMonitoringAgentProcess to import
  * @param importFromId The id of the existing CloudMonitorServiceGroupMonitoringAgentProcess that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudMonitorServiceGroupMonitoringAgentProcess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_monitor_service_group_monitoring_agent_process", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_group_monitoring_agent_process alicloud_cloud_monitor_service_group_monitoring_agent_process} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudMonitorServiceGroupMonitoringAgentProcessConfig
  */
  public constructor(scope: Construct, id: string, config: CloudMonitorServiceGroupMonitoringAgentProcessConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_monitor_service_group_monitoring_agent_process',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._matchExpressFilterRelation = config.matchExpressFilterRelation;
    this._processName = config.processName;
    this._alertConfig.internalValue = config.alertConfig;
    this._matchExpress.internalValue = config.matchExpress;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_monitoring_agent_process_id - computed: true, optional: false, required: false
  public get groupMonitoringAgentProcessId() {
    return this.getStringAttribute('group_monitoring_agent_process_id');
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

  // match_express_filter_relation - computed: true, optional: true, required: false
  private _matchExpressFilterRelation?: string; 
  public get matchExpressFilterRelation() {
    return this.getStringAttribute('match_express_filter_relation');
  }
  public set matchExpressFilterRelation(value: string) {
    this._matchExpressFilterRelation = value;
  }
  public resetMatchExpressFilterRelation() {
    this._matchExpressFilterRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressFilterRelationInput() {
    return this._matchExpressFilterRelation;
  }

  // process_name - computed: false, optional: false, required: true
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // alert_config - computed: false, optional: false, required: true
  private _alertConfig = new CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigList(this, "alert_config", false);
  public get alertConfig() {
    return this._alertConfig;
  }
  public putAlertConfig(value: CloudMonitorServiceGroupMonitoringAgentProcessAlertConfig[] | cdktf.IResolvable) {
    this._alertConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigInput() {
    return this._alertConfig.internalValue;
  }

  // match_express - computed: false, optional: true, required: false
  private _matchExpress = new CloudMonitorServiceGroupMonitoringAgentProcessMatchExpressList(this, "match_express", false);
  public get matchExpress() {
    return this._matchExpress;
  }
  public putMatchExpress(value: CloudMonitorServiceGroupMonitoringAgentProcessMatchExpress[] | cdktf.IResolvable) {
    this._matchExpress.internalValue = value;
  }
  public resetMatchExpress() {
    this._matchExpress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressInput() {
    return this._matchExpress.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudMonitorServiceGroupMonitoringAgentProcessTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudMonitorServiceGroupMonitoringAgentProcessTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      match_express_filter_relation: cdktf.stringToTerraform(this._matchExpressFilterRelation),
      process_name: cdktf.stringToTerraform(this._processName),
      alert_config: cdktf.listMapper(cloudMonitorServiceGroupMonitoringAgentProcessAlertConfigToTerraform, true)(this._alertConfig.internalValue),
      match_express: cdktf.listMapper(cloudMonitorServiceGroupMonitoringAgentProcessMatchExpressToTerraform, true)(this._matchExpress.internalValue),
      timeouts: cloudMonitorServiceGroupMonitoringAgentProcessTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      match_express_filter_relation: {
        value: cdktf.stringToHclTerraform(this._matchExpressFilterRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_name: {
        value: cdktf.stringToHclTerraform(this._processName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_config: {
        value: cdktf.listMapperHcl(cloudMonitorServiceGroupMonitoringAgentProcessAlertConfigToHclTerraform, true)(this._alertConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudMonitorServiceGroupMonitoringAgentProcessAlertConfigList",
      },
      match_express: {
        value: cdktf.listMapperHcl(cloudMonitorServiceGroupMonitoringAgentProcessMatchExpressToHclTerraform, true)(this._matchExpress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudMonitorServiceGroupMonitoringAgentProcessMatchExpressList",
      },
      timeouts: {
        value: cloudMonitorServiceGroupMonitoringAgentProcessTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudMonitorServiceGroupMonitoringAgentProcessTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
