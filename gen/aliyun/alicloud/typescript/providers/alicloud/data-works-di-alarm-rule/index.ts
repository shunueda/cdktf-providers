// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWorksDiAlarmRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#description DataWorksDiAlarmRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#di_alarm_rule_name DataWorksDiAlarmRule#di_alarm_rule_name}
  */
  readonly diAlarmRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#di_job_id DataWorksDiAlarmRule#di_job_id}
  */
  readonly diJobId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#enabled DataWorksDiAlarmRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#id DataWorksDiAlarmRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#metric_type DataWorksDiAlarmRule#metric_type}
  */
  readonly metricType: string;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#notification_settings DataWorksDiAlarmRule#notification_settings}
  */
  readonly notificationSettings: DataWorksDiAlarmRuleNotificationSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#timeouts DataWorksDiAlarmRule#timeouts}
  */
  readonly timeouts?: DataWorksDiAlarmRuleTimeouts;
  /**
  * trigger_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#trigger_conditions DataWorksDiAlarmRule#trigger_conditions}
  */
  readonly triggerConditions: DataWorksDiAlarmRuleTriggerConditions[] | cdktf.IResolvable;
}
export interface DataWorksDiAlarmRuleNotificationSettingsNotificationChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#channels DataWorksDiAlarmRule#channels}
  */
  readonly channels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#severity DataWorksDiAlarmRule#severity}
  */
  readonly severity?: string;
}

export function dataWorksDiAlarmRuleNotificationSettingsNotificationChannelsToTerraform(struct?: DataWorksDiAlarmRuleNotificationSettingsNotificationChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function dataWorksDiAlarmRuleNotificationSettingsNotificationChannelsToHclTerraform(struct?: DataWorksDiAlarmRuleNotificationSettingsNotificationChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiAlarmRuleNotificationSettingsNotificationChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiAlarmRuleNotificationSettingsNotificationChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiAlarmRuleNotificationSettingsNotificationChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channels = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channels = value.channels;
      this._severity = value.severity;
    }
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class DataWorksDiAlarmRuleNotificationSettingsNotificationChannelsList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiAlarmRuleNotificationSettingsNotificationChannels[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiAlarmRuleNotificationSettingsNotificationChannelsOutputReference {
    return new DataWorksDiAlarmRuleNotificationSettingsNotificationChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiAlarmRuleNotificationSettingsNotificationReceivers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#receiver_type DataWorksDiAlarmRule#receiver_type}
  */
  readonly receiverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#receiver_values DataWorksDiAlarmRule#receiver_values}
  */
  readonly receiverValues?: string[];
}

export function dataWorksDiAlarmRuleNotificationSettingsNotificationReceiversToTerraform(struct?: DataWorksDiAlarmRuleNotificationSettingsNotificationReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receiver_type: cdktf.stringToTerraform(struct!.receiverType),
    receiver_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receiverValues),
  }
}


export function dataWorksDiAlarmRuleNotificationSettingsNotificationReceiversToHclTerraform(struct?: DataWorksDiAlarmRuleNotificationSettingsNotificationReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receiver_type: {
      value: cdktf.stringToHclTerraform(struct!.receiverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiver_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receiverValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiAlarmRuleNotificationSettingsNotificationReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiAlarmRuleNotificationSettingsNotificationReceivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receiverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverType = this._receiverType;
    }
    if (this._receiverValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverValues = this._receiverValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiAlarmRuleNotificationSettingsNotificationReceivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._receiverType = undefined;
      this._receiverValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._receiverType = value.receiverType;
      this._receiverValues = value.receiverValues;
    }
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

  // receiver_values - computed: false, optional: true, required: false
  private _receiverValues?: string[]; 
  public get receiverValues() {
    return this.getListAttribute('receiver_values');
  }
  public set receiverValues(value: string[]) {
    this._receiverValues = value;
  }
  public resetReceiverValues() {
    this._receiverValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverValuesInput() {
    return this._receiverValues;
  }
}

export class DataWorksDiAlarmRuleNotificationSettingsNotificationReceiversList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiAlarmRuleNotificationSettingsNotificationReceivers[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiAlarmRuleNotificationSettingsNotificationReceiversOutputReference {
    return new DataWorksDiAlarmRuleNotificationSettingsNotificationReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiAlarmRuleNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#inhibition_interval DataWorksDiAlarmRule#inhibition_interval}
  */
  readonly inhibitionInterval?: number;
  /**
  * notification_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#notification_channels DataWorksDiAlarmRule#notification_channels}
  */
  readonly notificationChannels?: DataWorksDiAlarmRuleNotificationSettingsNotificationChannels[] | cdktf.IResolvable;
  /**
  * notification_receivers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#notification_receivers DataWorksDiAlarmRule#notification_receivers}
  */
  readonly notificationReceivers?: DataWorksDiAlarmRuleNotificationSettingsNotificationReceivers[] | cdktf.IResolvable;
}

export function dataWorksDiAlarmRuleNotificationSettingsToTerraform(struct?: DataWorksDiAlarmRuleNotificationSettingsOutputReference | DataWorksDiAlarmRuleNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inhibition_interval: cdktf.numberToTerraform(struct!.inhibitionInterval),
    notification_channels: cdktf.listMapper(dataWorksDiAlarmRuleNotificationSettingsNotificationChannelsToTerraform, true)(struct!.notificationChannels),
    notification_receivers: cdktf.listMapper(dataWorksDiAlarmRuleNotificationSettingsNotificationReceiversToTerraform, true)(struct!.notificationReceivers),
  }
}


export function dataWorksDiAlarmRuleNotificationSettingsToHclTerraform(struct?: DataWorksDiAlarmRuleNotificationSettingsOutputReference | DataWorksDiAlarmRuleNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inhibition_interval: {
      value: cdktf.numberToHclTerraform(struct!.inhibitionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_channels: {
      value: cdktf.listMapperHcl(dataWorksDiAlarmRuleNotificationSettingsNotificationChannelsToHclTerraform, true)(struct!.notificationChannels),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiAlarmRuleNotificationSettingsNotificationChannelsList",
    },
    notification_receivers: {
      value: cdktf.listMapperHcl(dataWorksDiAlarmRuleNotificationSettingsNotificationReceiversToHclTerraform, true)(struct!.notificationReceivers),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiAlarmRuleNotificationSettingsNotificationReceiversList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiAlarmRuleNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataWorksDiAlarmRuleNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inhibitionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.inhibitionInterval = this._inhibitionInterval;
    }
    if (this._notificationChannels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationChannels = this._notificationChannels?.internalValue;
    }
    if (this._notificationReceivers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationReceivers = this._notificationReceivers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiAlarmRuleNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inhibitionInterval = undefined;
      this._notificationChannels.internalValue = undefined;
      this._notificationReceivers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inhibitionInterval = value.inhibitionInterval;
      this._notificationChannels.internalValue = value.notificationChannels;
      this._notificationReceivers.internalValue = value.notificationReceivers;
    }
  }

  // inhibition_interval - computed: false, optional: true, required: false
  private _inhibitionInterval?: number; 
  public get inhibitionInterval() {
    return this.getNumberAttribute('inhibition_interval');
  }
  public set inhibitionInterval(value: number) {
    this._inhibitionInterval = value;
  }
  public resetInhibitionInterval() {
    this._inhibitionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inhibitionIntervalInput() {
    return this._inhibitionInterval;
  }

  // notification_channels - computed: false, optional: true, required: false
  private _notificationChannels = new DataWorksDiAlarmRuleNotificationSettingsNotificationChannelsList(this, "notification_channels", false);
  public get notificationChannels() {
    return this._notificationChannels;
  }
  public putNotificationChannels(value: DataWorksDiAlarmRuleNotificationSettingsNotificationChannels[] | cdktf.IResolvable) {
    this._notificationChannels.internalValue = value;
  }
  public resetNotificationChannels() {
    this._notificationChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelsInput() {
    return this._notificationChannels.internalValue;
  }

  // notification_receivers - computed: false, optional: true, required: false
  private _notificationReceivers = new DataWorksDiAlarmRuleNotificationSettingsNotificationReceiversList(this, "notification_receivers", false);
  public get notificationReceivers() {
    return this._notificationReceivers;
  }
  public putNotificationReceivers(value: DataWorksDiAlarmRuleNotificationSettingsNotificationReceivers[] | cdktf.IResolvable) {
    this._notificationReceivers.internalValue = value;
  }
  public resetNotificationReceivers() {
    this._notificationReceivers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationReceiversInput() {
    return this._notificationReceivers.internalValue;
  }
}
export interface DataWorksDiAlarmRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#create DataWorksDiAlarmRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#delete DataWorksDiAlarmRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#update DataWorksDiAlarmRule#update}
  */
  readonly update?: string;
}

export function dataWorksDiAlarmRuleTimeoutsToTerraform(struct?: DataWorksDiAlarmRuleTimeouts | cdktf.IResolvable): any {
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


export function dataWorksDiAlarmRuleTimeoutsToHclTerraform(struct?: DataWorksDiAlarmRuleTimeouts | cdktf.IResolvable): any {
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

export class DataWorksDiAlarmRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataWorksDiAlarmRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataWorksDiAlarmRuleTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataWorksDiAlarmRuleTriggerConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#ddl_report_tags DataWorksDiAlarmRule#ddl_report_tags}
  */
  readonly ddlReportTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#duration DataWorksDiAlarmRule#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#severity DataWorksDiAlarmRule#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#threshold DataWorksDiAlarmRule#threshold}
  */
  readonly threshold?: number;
}

export function dataWorksDiAlarmRuleTriggerConditionsToTerraform(struct?: DataWorksDiAlarmRuleTriggerConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddl_report_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddlReportTags),
    duration: cdktf.numberToTerraform(struct!.duration),
    severity: cdktf.stringToTerraform(struct!.severity),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function dataWorksDiAlarmRuleTriggerConditionsToHclTerraform(struct?: DataWorksDiAlarmRuleTriggerConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddl_report_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddlReportTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiAlarmRuleTriggerConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiAlarmRuleTriggerConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddlReportTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddlReportTags = this._ddlReportTags;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiAlarmRuleTriggerConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddlReportTags = undefined;
      this._duration = undefined;
      this._severity = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddlReportTags = value.ddlReportTags;
      this._duration = value.duration;
      this._severity = value.severity;
      this._threshold = value.threshold;
    }
  }

  // ddl_report_tags - computed: false, optional: true, required: false
  private _ddlReportTags?: string[]; 
  public get ddlReportTags() {
    return this.getListAttribute('ddl_report_tags');
  }
  public set ddlReportTags(value: string[]) {
    this._ddlReportTags = value;
  }
  public resetDdlReportTags() {
    this._ddlReportTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlReportTagsInput() {
    return this._ddlReportTags;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class DataWorksDiAlarmRuleTriggerConditionsList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiAlarmRuleTriggerConditions[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiAlarmRuleTriggerConditionsOutputReference {
    return new DataWorksDiAlarmRuleTriggerConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule alicloud_data_works_di_alarm_rule}
*/
export class DataWorksDiAlarmRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_data_works_di_alarm_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWorksDiAlarmRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWorksDiAlarmRule to import
  * @param importFromId The id of the existing DataWorksDiAlarmRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWorksDiAlarmRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_data_works_di_alarm_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/data_works_di_alarm_rule alicloud_data_works_di_alarm_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWorksDiAlarmRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataWorksDiAlarmRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_data_works_di_alarm_rule',
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
    this._description = config.description;
    this._diAlarmRuleName = config.diAlarmRuleName;
    this._diJobId = config.diJobId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._metricType = config.metricType;
    this._notificationSettings.internalValue = config.notificationSettings;
    this._timeouts.internalValue = config.timeouts;
    this._triggerConditions.internalValue = config.triggerConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // di_alarm_rule_id - computed: true, optional: false, required: false
  public get diAlarmRuleId() {
    return this.getNumberAttribute('di_alarm_rule_id');
  }

  // di_alarm_rule_name - computed: false, optional: false, required: true
  private _diAlarmRuleName?: string; 
  public get diAlarmRuleName() {
    return this.getStringAttribute('di_alarm_rule_name');
  }
  public set diAlarmRuleName(value: string) {
    this._diAlarmRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diAlarmRuleNameInput() {
    return this._diAlarmRuleName;
  }

  // di_job_id - computed: false, optional: false, required: true
  private _diJobId?: number; 
  public get diJobId() {
    return this.getNumberAttribute('di_job_id');
  }
  public set diJobId(value: number) {
    this._diJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diJobIdInput() {
    return this._diJobId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // notification_settings - computed: false, optional: false, required: true
  private _notificationSettings = new DataWorksDiAlarmRuleNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: DataWorksDiAlarmRuleNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataWorksDiAlarmRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataWorksDiAlarmRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger_conditions - computed: false, optional: false, required: true
  private _triggerConditions = new DataWorksDiAlarmRuleTriggerConditionsList(this, "trigger_conditions", false);
  public get triggerConditions() {
    return this._triggerConditions;
  }
  public putTriggerConditions(value: DataWorksDiAlarmRuleTriggerConditions[] | cdktf.IResolvable) {
    this._triggerConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionsInput() {
    return this._triggerConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      di_alarm_rule_name: cdktf.stringToTerraform(this._diAlarmRuleName),
      di_job_id: cdktf.numberToTerraform(this._diJobId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      metric_type: cdktf.stringToTerraform(this._metricType),
      notification_settings: dataWorksDiAlarmRuleNotificationSettingsToTerraform(this._notificationSettings.internalValue),
      timeouts: dataWorksDiAlarmRuleTimeoutsToTerraform(this._timeouts.internalValue),
      trigger_conditions: cdktf.listMapper(dataWorksDiAlarmRuleTriggerConditionsToTerraform, true)(this._triggerConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      di_alarm_rule_name: {
        value: cdktf.stringToHclTerraform(this._diAlarmRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      di_job_id: {
        value: cdktf.numberToHclTerraform(this._diJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_settings: {
        value: dataWorksDiAlarmRuleNotificationSettingsToHclTerraform(this._notificationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWorksDiAlarmRuleNotificationSettingsList",
      },
      timeouts: {
        value: dataWorksDiAlarmRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataWorksDiAlarmRuleTimeouts",
      },
      trigger_conditions: {
        value: cdktf.listMapperHcl(dataWorksDiAlarmRuleTriggerConditionsToHclTerraform, true)(this._triggerConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWorksDiAlarmRuleTriggerConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
