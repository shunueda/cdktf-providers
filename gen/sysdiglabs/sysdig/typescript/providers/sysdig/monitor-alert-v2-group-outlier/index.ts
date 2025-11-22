// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorAlertV2GroupOutlierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#algorithm MonitorAlertV2GroupOutlier#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#dbscan_tolerance MonitorAlertV2GroupOutlier#dbscan_tolerance}
  */
  readonly dbscanTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#description MonitorAlertV2GroupOutlier#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#enabled MonitorAlertV2GroupOutlier#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#group MonitorAlertV2GroupOutlier#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#group_aggregation MonitorAlertV2GroupOutlier#group_aggregation}
  */
  readonly groupAggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#group_by MonitorAlertV2GroupOutlier#group_by}
  */
  readonly groupBy: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#id MonitorAlertV2GroupOutlier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#labels MonitorAlertV2GroupOutlier#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#mad_threshold MonitorAlertV2GroupOutlier#mad_threshold}
  */
  readonly madThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#mad_tolerance MonitorAlertV2GroupOutlier#mad_tolerance}
  */
  readonly madTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#metric MonitorAlertV2GroupOutlier#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#name MonitorAlertV2GroupOutlier#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#no_data_behaviour MonitorAlertV2GroupOutlier#no_data_behaviour}
  */
  readonly noDataBehaviour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#observation_window_minutes MonitorAlertV2GroupOutlier#observation_window_minutes}
  */
  readonly observationWindowMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#severity MonitorAlertV2GroupOutlier#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#time_aggregation MonitorAlertV2GroupOutlier#time_aggregation}
  */
  readonly timeAggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#unreported_alert_notifications_retention_seconds MonitorAlertV2GroupOutlier#unreported_alert_notifications_retention_seconds}
  */
  readonly unreportedAlertNotificationsRetentionSeconds?: number;
  /**
  * capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#capture MonitorAlertV2GroupOutlier#capture}
  */
  readonly capture?: MonitorAlertV2GroupOutlierCapture;
  /**
  * custom_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#custom_notification MonitorAlertV2GroupOutlier#custom_notification}
  */
  readonly customNotification?: MonitorAlertV2GroupOutlierCustomNotification;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#link MonitorAlertV2GroupOutlier#link}
  */
  readonly link?: MonitorAlertV2GroupOutlierLink[] | cdktf.IResolvable;
  /**
  * notification_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#notification_channels MonitorAlertV2GroupOutlier#notification_channels}
  */
  readonly notificationChannels?: MonitorAlertV2GroupOutlierNotificationChannels[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#scope MonitorAlertV2GroupOutlier#scope}
  */
  readonly scope?: MonitorAlertV2GroupOutlierScope[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#timeouts MonitorAlertV2GroupOutlier#timeouts}
  */
  readonly timeouts?: MonitorAlertV2GroupOutlierTimeouts;
}
export interface MonitorAlertV2GroupOutlierCapture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#duration_seconds MonitorAlertV2GroupOutlier#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#enabled MonitorAlertV2GroupOutlier#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#filename MonitorAlertV2GroupOutlier#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#filter MonitorAlertV2GroupOutlier#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#storage MonitorAlertV2GroupOutlier#storage}
  */
  readonly storage?: string;
}

export function monitorAlertV2GroupOutlierCaptureToTerraform(struct?: MonitorAlertV2GroupOutlierCaptureOutputReference | MonitorAlertV2GroupOutlierCapture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    filename: cdktf.stringToTerraform(struct!.filename),
    filter: cdktf.stringToTerraform(struct!.filter),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function monitorAlertV2GroupOutlierCaptureToHclTerraform(struct?: MonitorAlertV2GroupOutlierCaptureOutputReference | MonitorAlertV2GroupOutlierCapture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertV2GroupOutlierCaptureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertV2GroupOutlierCapture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertV2GroupOutlierCapture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationSeconds = undefined;
      this._enabled = undefined;
      this._filename = undefined;
      this._filter = undefined;
      this._storage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationSeconds = value.durationSeconds;
      this._enabled = value.enabled;
      this._filename = value.filename;
      this._filter = value.filter;
      this._storage = value.storage;
    }
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
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

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface MonitorAlertV2GroupOutlierCustomNotificationAdditionalField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#name MonitorAlertV2GroupOutlier#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#value MonitorAlertV2GroupOutlier#value}
  */
  readonly value: string;
}

export function monitorAlertV2GroupOutlierCustomNotificationAdditionalFieldToTerraform(struct?: MonitorAlertV2GroupOutlierCustomNotificationAdditionalField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorAlertV2GroupOutlierCustomNotificationAdditionalFieldToHclTerraform(struct?: MonitorAlertV2GroupOutlierCustomNotificationAdditionalField | cdktf.IResolvable): any {
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

export class MonitorAlertV2GroupOutlierCustomNotificationAdditionalFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertV2GroupOutlierCustomNotificationAdditionalField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorAlertV2GroupOutlierCustomNotificationAdditionalField | cdktf.IResolvable | undefined) {
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

export class MonitorAlertV2GroupOutlierCustomNotificationAdditionalFieldList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertV2GroupOutlierCustomNotificationAdditionalField[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertV2GroupOutlierCustomNotificationAdditionalFieldOutputReference {
    return new MonitorAlertV2GroupOutlierCustomNotificationAdditionalFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertV2GroupOutlierCustomNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#append MonitorAlertV2GroupOutlier#append}
  */
  readonly append?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#prepend MonitorAlertV2GroupOutlier#prepend}
  */
  readonly prepend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#subject MonitorAlertV2GroupOutlier#subject}
  */
  readonly subject?: string;
  /**
  * additional_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#additional_field MonitorAlertV2GroupOutlier#additional_field}
  */
  readonly additionalField?: MonitorAlertV2GroupOutlierCustomNotificationAdditionalField[] | cdktf.IResolvable;
}

export function monitorAlertV2GroupOutlierCustomNotificationToTerraform(struct?: MonitorAlertV2GroupOutlierCustomNotificationOutputReference | MonitorAlertV2GroupOutlierCustomNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.stringToTerraform(struct!.append),
    prepend: cdktf.stringToTerraform(struct!.prepend),
    subject: cdktf.stringToTerraform(struct!.subject),
    additional_field: cdktf.listMapper(monitorAlertV2GroupOutlierCustomNotificationAdditionalFieldToTerraform, true)(struct!.additionalField),
  }
}


export function monitorAlertV2GroupOutlierCustomNotificationToHclTerraform(struct?: MonitorAlertV2GroupOutlierCustomNotificationOutputReference | MonitorAlertV2GroupOutlierCustomNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.stringToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepend: {
      value: cdktf.stringToHclTerraform(struct!.prepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_field: {
      value: cdktf.listMapperHcl(monitorAlertV2GroupOutlierCustomNotificationAdditionalFieldToHclTerraform, true)(struct!.additionalField),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorAlertV2GroupOutlierCustomNotificationAdditionalFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertV2GroupOutlierCustomNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertV2GroupOutlierCustomNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._prepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepend = this._prepend;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._additionalField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalField = this._additionalField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertV2GroupOutlierCustomNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._append = undefined;
      this._prepend = undefined;
      this._subject = undefined;
      this._additionalField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._append = value.append;
      this._prepend = value.prepend;
      this._subject = value.subject;
      this._additionalField.internalValue = value.additionalField;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: string; 
  public get append() {
    return this.getStringAttribute('append');
  }
  public set append(value: string) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // prepend - computed: false, optional: true, required: false
  private _prepend?: string; 
  public get prepend() {
    return this.getStringAttribute('prepend');
  }
  public set prepend(value: string) {
    this._prepend = value;
  }
  public resetPrepend() {
    this._prepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependInput() {
    return this._prepend;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // additional_field - computed: false, optional: true, required: false
  private _additionalField = new MonitorAlertV2GroupOutlierCustomNotificationAdditionalFieldList(this, "additional_field", true);
  public get additionalField() {
    return this._additionalField;
  }
  public putAdditionalField(value: MonitorAlertV2GroupOutlierCustomNotificationAdditionalField[] | cdktf.IResolvable) {
    this._additionalField.internalValue = value;
  }
  public resetAdditionalField() {
    this._additionalField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFieldInput() {
    return this._additionalField.internalValue;
  }
}
export interface MonitorAlertV2GroupOutlierLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#href MonitorAlertV2GroupOutlier#href}
  */
  readonly href?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#id MonitorAlertV2GroupOutlier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#type MonitorAlertV2GroupOutlier#type}
  */
  readonly type: string;
}

export function monitorAlertV2GroupOutlierLinkToTerraform(struct?: MonitorAlertV2GroupOutlierLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorAlertV2GroupOutlierLinkToHclTerraform(struct?: MonitorAlertV2GroupOutlierLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertV2GroupOutlierLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertV2GroupOutlierLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertV2GroupOutlierLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // href - computed: false, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
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
}

export class MonitorAlertV2GroupOutlierLinkList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertV2GroupOutlierLink[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertV2GroupOutlierLinkOutputReference {
    return new MonitorAlertV2GroupOutlierLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertV2GroupOutlierNotificationChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#id MonitorAlertV2GroupOutlier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#main_threshold MonitorAlertV2GroupOutlier#main_threshold}
  */
  readonly mainThreshold?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#notify_on_resolve MonitorAlertV2GroupOutlier#notify_on_resolve}
  */
  readonly notifyOnResolve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#renotify_every_minutes MonitorAlertV2GroupOutlier#renotify_every_minutes}
  */
  readonly renotifyEveryMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#warning_threshold MonitorAlertV2GroupOutlier#warning_threshold}
  */
  readonly warningThreshold?: boolean | cdktf.IResolvable;
}

export function monitorAlertV2GroupOutlierNotificationChannelsToTerraform(struct?: MonitorAlertV2GroupOutlierNotificationChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    main_threshold: cdktf.booleanToTerraform(struct!.mainThreshold),
    notify_on_resolve: cdktf.booleanToTerraform(struct!.notifyOnResolve),
    renotify_every_minutes: cdktf.numberToTerraform(struct!.renotifyEveryMinutes),
    warning_threshold: cdktf.booleanToTerraform(struct!.warningThreshold),
  }
}


export function monitorAlertV2GroupOutlierNotificationChannelsToHclTerraform(struct?: MonitorAlertV2GroupOutlierNotificationChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    main_threshold: {
      value: cdktf.booleanToHclTerraform(struct!.mainThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_on_resolve: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnResolve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    renotify_every_minutes: {
      value: cdktf.numberToHclTerraform(struct!.renotifyEveryMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_threshold: {
      value: cdktf.booleanToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertV2GroupOutlierNotificationChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertV2GroupOutlierNotificationChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mainThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainThreshold = this._mainThreshold;
    }
    if (this._notifyOnResolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnResolve = this._notifyOnResolve;
    }
    if (this._renotifyEveryMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyEveryMinutes = this._renotifyEveryMinutes;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertV2GroupOutlierNotificationChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mainThreshold = undefined;
      this._notifyOnResolve = undefined;
      this._renotifyEveryMinutes = undefined;
      this._warningThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mainThreshold = value.mainThreshold;
      this._notifyOnResolve = value.notifyOnResolve;
      this._renotifyEveryMinutes = value.renotifyEveryMinutes;
      this._warningThreshold = value.warningThreshold;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // main_threshold - computed: false, optional: true, required: false
  private _mainThreshold?: boolean | cdktf.IResolvable; 
  public get mainThreshold() {
    return this.getBooleanAttribute('main_threshold');
  }
  public set mainThreshold(value: boolean | cdktf.IResolvable) {
    this._mainThreshold = value;
  }
  public resetMainThreshold() {
    this._mainThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainThresholdInput() {
    return this._mainThreshold;
  }

  // notify_on_resolve - computed: false, optional: true, required: false
  private _notifyOnResolve?: boolean | cdktf.IResolvable; 
  public get notifyOnResolve() {
    return this.getBooleanAttribute('notify_on_resolve');
  }
  public set notifyOnResolve(value: boolean | cdktf.IResolvable) {
    this._notifyOnResolve = value;
  }
  public resetNotifyOnResolve() {
    this._notifyOnResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnResolveInput() {
    return this._notifyOnResolve;
  }

  // renotify_every_minutes - computed: false, optional: true, required: false
  private _renotifyEveryMinutes?: number; 
  public get renotifyEveryMinutes() {
    return this.getNumberAttribute('renotify_every_minutes');
  }
  public set renotifyEveryMinutes(value: number) {
    this._renotifyEveryMinutes = value;
  }
  public resetRenotifyEveryMinutes() {
    this._renotifyEveryMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyEveryMinutesInput() {
    return this._renotifyEveryMinutes;
  }

  // warning_threshold - computed: false, optional: true, required: false
  private _warningThreshold?: boolean | cdktf.IResolvable; 
  public get warningThreshold() {
    return this.getBooleanAttribute('warning_threshold');
  }
  public set warningThreshold(value: boolean | cdktf.IResolvable) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }
}

export class MonitorAlertV2GroupOutlierNotificationChannelsList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertV2GroupOutlierNotificationChannels[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertV2GroupOutlierNotificationChannelsOutputReference {
    return new MonitorAlertV2GroupOutlierNotificationChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertV2GroupOutlierScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#label MonitorAlertV2GroupOutlier#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#operator MonitorAlertV2GroupOutlier#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#values MonitorAlertV2GroupOutlier#values}
  */
  readonly values: string[];
}

export function monitorAlertV2GroupOutlierScopeToTerraform(struct?: MonitorAlertV2GroupOutlierScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertV2GroupOutlierScopeToHclTerraform(struct?: MonitorAlertV2GroupOutlierScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertV2GroupOutlierScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertV2GroupOutlierScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertV2GroupOutlierScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MonitorAlertV2GroupOutlierScopeList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertV2GroupOutlierScope[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertV2GroupOutlierScopeOutputReference {
    return new MonitorAlertV2GroupOutlierScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertV2GroupOutlierTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#create MonitorAlertV2GroupOutlier#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#delete MonitorAlertV2GroupOutlier#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#read MonitorAlertV2GroupOutlier#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#update MonitorAlertV2GroupOutlier#update}
  */
  readonly update?: string;
}

export function monitorAlertV2GroupOutlierTimeoutsToTerraform(struct?: MonitorAlertV2GroupOutlierTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function monitorAlertV2GroupOutlierTimeoutsToHclTerraform(struct?: MonitorAlertV2GroupOutlierTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class MonitorAlertV2GroupOutlierTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorAlertV2GroupOutlierTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertV2GroupOutlierTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier sysdig_monitor_alert_v2_group_outlier}
*/
export class MonitorAlertV2GroupOutlier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_monitor_alert_v2_group_outlier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorAlertV2GroupOutlier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorAlertV2GroupOutlier to import
  * @param importFromId The id of the existing MonitorAlertV2GroupOutlier that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorAlertV2GroupOutlier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_monitor_alert_v2_group_outlier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_group_outlier sysdig_monitor_alert_v2_group_outlier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAlertV2GroupOutlierConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAlertV2GroupOutlierConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_monitor_alert_v2_group_outlier',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._dbscanTolerance = config.dbscanTolerance;
    this._description = config.description;
    this._enabled = config.enabled;
    this._group = config.group;
    this._groupAggregation = config.groupAggregation;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._labels = config.labels;
    this._madThreshold = config.madThreshold;
    this._madTolerance = config.madTolerance;
    this._metric = config.metric;
    this._name = config.name;
    this._noDataBehaviour = config.noDataBehaviour;
    this._observationWindowMinutes = config.observationWindowMinutes;
    this._severity = config.severity;
    this._timeAggregation = config.timeAggregation;
    this._unreportedAlertNotificationsRetentionSeconds = config.unreportedAlertNotificationsRetentionSeconds;
    this._capture.internalValue = config.capture;
    this._customNotification.internalValue = config.customNotification;
    this._link.internalValue = config.link;
    this._notificationChannels.internalValue = config.notificationChannels;
    this._scope.internalValue = config.scope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // dbscan_tolerance - computed: false, optional: true, required: false
  private _dbscanTolerance?: number; 
  public get dbscanTolerance() {
    return this.getNumberAttribute('dbscan_tolerance');
  }
  public set dbscanTolerance(value: number) {
    this._dbscanTolerance = value;
  }
  public resetDbscanTolerance() {
    this._dbscanTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbscanToleranceInput() {
    return this._dbscanTolerance;
  }

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

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_aggregation - computed: false, optional: false, required: true
  private _groupAggregation?: string; 
  public get groupAggregation() {
    return this.getStringAttribute('group_aggregation');
  }
  public set groupAggregation(value: string) {
    this._groupAggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAggregationInput() {
    return this._groupAggregation;
  }

  // group_by - computed: false, optional: false, required: true
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // mad_threshold - computed: false, optional: true, required: false
  private _madThreshold?: number; 
  public get madThreshold() {
    return this.getNumberAttribute('mad_threshold');
  }
  public set madThreshold(value: number) {
    this._madThreshold = value;
  }
  public resetMadThreshold() {
    this._madThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get madThresholdInput() {
    return this._madThreshold;
  }

  // mad_tolerance - computed: false, optional: true, required: false
  private _madTolerance?: number; 
  public get madTolerance() {
    return this.getNumberAttribute('mad_tolerance');
  }
  public set madTolerance(value: number) {
    this._madTolerance = value;
  }
  public resetMadTolerance() {
    this._madTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get madToleranceInput() {
    return this._madTolerance;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // no_data_behaviour - computed: false, optional: true, required: false
  private _noDataBehaviour?: string; 
  public get noDataBehaviour() {
    return this.getStringAttribute('no_data_behaviour');
  }
  public set noDataBehaviour(value: string) {
    this._noDataBehaviour = value;
  }
  public resetNoDataBehaviour() {
    this._noDataBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataBehaviourInput() {
    return this._noDataBehaviour;
  }

  // observation_window_minutes - computed: false, optional: false, required: true
  private _observationWindowMinutes?: number; 
  public get observationWindowMinutes() {
    return this.getNumberAttribute('observation_window_minutes');
  }
  public set observationWindowMinutes(value: number) {
    this._observationWindowMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observationWindowMinutesInput() {
    return this._observationWindowMinutes;
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

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getNumberAttribute('team');
  }

  // time_aggregation - computed: false, optional: false, required: true
  private _timeAggregation?: string; 
  public get timeAggregation() {
    return this.getStringAttribute('time_aggregation');
  }
  public set timeAggregation(value: string) {
    this._timeAggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAggregationInput() {
    return this._timeAggregation;
  }

  // unreported_alert_notifications_retention_seconds - computed: false, optional: true, required: false
  private _unreportedAlertNotificationsRetentionSeconds?: number; 
  public get unreportedAlertNotificationsRetentionSeconds() {
    return this.getNumberAttribute('unreported_alert_notifications_retention_seconds');
  }
  public set unreportedAlertNotificationsRetentionSeconds(value: number) {
    this._unreportedAlertNotificationsRetentionSeconds = value;
  }
  public resetUnreportedAlertNotificationsRetentionSeconds() {
    this._unreportedAlertNotificationsRetentionSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreportedAlertNotificationsRetentionSecondsInput() {
    return this._unreportedAlertNotificationsRetentionSeconds;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // capture - computed: false, optional: true, required: false
  private _capture = new MonitorAlertV2GroupOutlierCaptureOutputReference(this, "capture");
  public get capture() {
    return this._capture;
  }
  public putCapture(value: MonitorAlertV2GroupOutlierCapture) {
    this._capture.internalValue = value;
  }
  public resetCapture() {
    this._capture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInput() {
    return this._capture.internalValue;
  }

  // custom_notification - computed: false, optional: true, required: false
  private _customNotification = new MonitorAlertV2GroupOutlierCustomNotificationOutputReference(this, "custom_notification");
  public get customNotification() {
    return this._customNotification;
  }
  public putCustomNotification(value: MonitorAlertV2GroupOutlierCustomNotification) {
    this._customNotification.internalValue = value;
  }
  public resetCustomNotification() {
    this._customNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNotificationInput() {
    return this._customNotification.internalValue;
  }

  // link - computed: false, optional: true, required: false
  private _link = new MonitorAlertV2GroupOutlierLinkList(this, "link", true);
  public get link() {
    return this._link;
  }
  public putLink(value: MonitorAlertV2GroupOutlierLink[] | cdktf.IResolvable) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // notification_channels - computed: false, optional: true, required: false
  private _notificationChannels = new MonitorAlertV2GroupOutlierNotificationChannelsList(this, "notification_channels", true);
  public get notificationChannels() {
    return this._notificationChannels;
  }
  public putNotificationChannels(value: MonitorAlertV2GroupOutlierNotificationChannels[] | cdktf.IResolvable) {
    this._notificationChannels.internalValue = value;
  }
  public resetNotificationChannels() {
    this._notificationChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelsInput() {
    return this._notificationChannels.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new MonitorAlertV2GroupOutlierScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }
  public putScope(value: MonitorAlertV2GroupOutlierScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorAlertV2GroupOutlierTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorAlertV2GroupOutlierTimeouts) {
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
      algorithm: cdktf.stringToTerraform(this._algorithm),
      dbscan_tolerance: cdktf.numberToTerraform(this._dbscanTolerance),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      group_aggregation: cdktf.stringToTerraform(this._groupAggregation),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mad_threshold: cdktf.numberToTerraform(this._madThreshold),
      mad_tolerance: cdktf.numberToTerraform(this._madTolerance),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      no_data_behaviour: cdktf.stringToTerraform(this._noDataBehaviour),
      observation_window_minutes: cdktf.numberToTerraform(this._observationWindowMinutes),
      severity: cdktf.stringToTerraform(this._severity),
      time_aggregation: cdktf.stringToTerraform(this._timeAggregation),
      unreported_alert_notifications_retention_seconds: cdktf.numberToTerraform(this._unreportedAlertNotificationsRetentionSeconds),
      capture: monitorAlertV2GroupOutlierCaptureToTerraform(this._capture.internalValue),
      custom_notification: monitorAlertV2GroupOutlierCustomNotificationToTerraform(this._customNotification.internalValue),
      link: cdktf.listMapper(monitorAlertV2GroupOutlierLinkToTerraform, true)(this._link.internalValue),
      notification_channels: cdktf.listMapper(monitorAlertV2GroupOutlierNotificationChannelsToTerraform, true)(this._notificationChannels.internalValue),
      scope: cdktf.listMapper(monitorAlertV2GroupOutlierScopeToTerraform, true)(this._scope.internalValue),
      timeouts: monitorAlertV2GroupOutlierTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbscan_tolerance: {
        value: cdktf.numberToHclTerraform(this._dbscanTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_aggregation: {
        value: cdktf.stringToHclTerraform(this._groupAggregation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mad_threshold: {
        value: cdktf.numberToHclTerraform(this._madThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mad_tolerance: {
        value: cdktf.numberToHclTerraform(this._madTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      no_data_behaviour: {
        value: cdktf.stringToHclTerraform(this._noDataBehaviour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      observation_window_minutes: {
        value: cdktf.numberToHclTerraform(this._observationWindowMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_aggregation: {
        value: cdktf.stringToHclTerraform(this._timeAggregation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unreported_alert_notifications_retention_seconds: {
        value: cdktf.numberToHclTerraform(this._unreportedAlertNotificationsRetentionSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capture: {
        value: monitorAlertV2GroupOutlierCaptureToHclTerraform(this._capture.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlertV2GroupOutlierCaptureList",
      },
      custom_notification: {
        value: monitorAlertV2GroupOutlierCustomNotificationToHclTerraform(this._customNotification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlertV2GroupOutlierCustomNotificationList",
      },
      link: {
        value: cdktf.listMapperHcl(monitorAlertV2GroupOutlierLinkToHclTerraform, true)(this._link.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorAlertV2GroupOutlierLinkList",
      },
      notification_channels: {
        value: cdktf.listMapperHcl(monitorAlertV2GroupOutlierNotificationChannelsToHclTerraform, true)(this._notificationChannels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorAlertV2GroupOutlierNotificationChannelsList",
      },
      scope: {
        value: cdktf.listMapperHcl(monitorAlertV2GroupOutlierScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorAlertV2GroupOutlierScopeList",
      },
      timeouts: {
        value: monitorAlertV2GroupOutlierTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorAlertV2GroupOutlierTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
