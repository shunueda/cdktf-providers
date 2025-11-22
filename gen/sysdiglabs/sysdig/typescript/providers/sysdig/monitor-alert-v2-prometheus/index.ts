// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorAlertV2PrometheusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#description MonitorAlertV2Prometheus#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#duration_seconds MonitorAlertV2Prometheus#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#enabled MonitorAlertV2Prometheus#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#group MonitorAlertV2Prometheus#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#id MonitorAlertV2Prometheus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#keep_firing_for_minutes MonitorAlertV2Prometheus#keep_firing_for_minutes}
  */
  readonly keepFiringForMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#labels MonitorAlertV2Prometheus#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#name MonitorAlertV2Prometheus#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#query MonitorAlertV2Prometheus#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#severity MonitorAlertV2Prometheus#severity}
  */
  readonly severity?: string;
  /**
  * capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#capture MonitorAlertV2Prometheus#capture}
  */
  readonly capture?: MonitorAlertV2PrometheusCapture;
  /**
  * custom_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#custom_notification MonitorAlertV2Prometheus#custom_notification}
  */
  readonly customNotification?: MonitorAlertV2PrometheusCustomNotification;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#link MonitorAlertV2Prometheus#link}
  */
  readonly link?: MonitorAlertV2PrometheusLink[] | cdktf.IResolvable;
  /**
  * notification_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#notification_channels MonitorAlertV2Prometheus#notification_channels}
  */
  readonly notificationChannels?: MonitorAlertV2PrometheusNotificationChannels[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#timeouts MonitorAlertV2Prometheus#timeouts}
  */
  readonly timeouts?: MonitorAlertV2PrometheusTimeouts;
}
export interface MonitorAlertV2PrometheusCapture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#duration_seconds MonitorAlertV2Prometheus#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#enabled MonitorAlertV2Prometheus#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#filename MonitorAlertV2Prometheus#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#filter MonitorAlertV2Prometheus#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#storage MonitorAlertV2Prometheus#storage}
  */
  readonly storage?: string;
}

export function monitorAlertV2PrometheusCaptureToTerraform(struct?: MonitorAlertV2PrometheusCaptureOutputReference | MonitorAlertV2PrometheusCapture): any {
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


export function monitorAlertV2PrometheusCaptureToHclTerraform(struct?: MonitorAlertV2PrometheusCaptureOutputReference | MonitorAlertV2PrometheusCapture): any {
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

export class MonitorAlertV2PrometheusCaptureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertV2PrometheusCapture | undefined {
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

  public set internalValue(value: MonitorAlertV2PrometheusCapture | undefined) {
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
export interface MonitorAlertV2PrometheusCustomNotificationAdditionalField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#name MonitorAlertV2Prometheus#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#value MonitorAlertV2Prometheus#value}
  */
  readonly value: string;
}

export function monitorAlertV2PrometheusCustomNotificationAdditionalFieldToTerraform(struct?: MonitorAlertV2PrometheusCustomNotificationAdditionalField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorAlertV2PrometheusCustomNotificationAdditionalFieldToHclTerraform(struct?: MonitorAlertV2PrometheusCustomNotificationAdditionalField | cdktf.IResolvable): any {
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

export class MonitorAlertV2PrometheusCustomNotificationAdditionalFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertV2PrometheusCustomNotificationAdditionalField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorAlertV2PrometheusCustomNotificationAdditionalField | cdktf.IResolvable | undefined) {
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

export class MonitorAlertV2PrometheusCustomNotificationAdditionalFieldList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertV2PrometheusCustomNotificationAdditionalField[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertV2PrometheusCustomNotificationAdditionalFieldOutputReference {
    return new MonitorAlertV2PrometheusCustomNotificationAdditionalFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertV2PrometheusCustomNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#append MonitorAlertV2Prometheus#append}
  */
  readonly append?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#prepend MonitorAlertV2Prometheus#prepend}
  */
  readonly prepend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#subject MonitorAlertV2Prometheus#subject}
  */
  readonly subject?: string;
  /**
  * additional_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#additional_field MonitorAlertV2Prometheus#additional_field}
  */
  readonly additionalField?: MonitorAlertV2PrometheusCustomNotificationAdditionalField[] | cdktf.IResolvable;
}

export function monitorAlertV2PrometheusCustomNotificationToTerraform(struct?: MonitorAlertV2PrometheusCustomNotificationOutputReference | MonitorAlertV2PrometheusCustomNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.stringToTerraform(struct!.append),
    prepend: cdktf.stringToTerraform(struct!.prepend),
    subject: cdktf.stringToTerraform(struct!.subject),
    additional_field: cdktf.listMapper(monitorAlertV2PrometheusCustomNotificationAdditionalFieldToTerraform, true)(struct!.additionalField),
  }
}


export function monitorAlertV2PrometheusCustomNotificationToHclTerraform(struct?: MonitorAlertV2PrometheusCustomNotificationOutputReference | MonitorAlertV2PrometheusCustomNotification): any {
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
      value: cdktf.listMapperHcl(monitorAlertV2PrometheusCustomNotificationAdditionalFieldToHclTerraform, true)(struct!.additionalField),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorAlertV2PrometheusCustomNotificationAdditionalFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertV2PrometheusCustomNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertV2PrometheusCustomNotification | undefined {
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

  public set internalValue(value: MonitorAlertV2PrometheusCustomNotification | undefined) {
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
  private _additionalField = new MonitorAlertV2PrometheusCustomNotificationAdditionalFieldList(this, "additional_field", true);
  public get additionalField() {
    return this._additionalField;
  }
  public putAdditionalField(value: MonitorAlertV2PrometheusCustomNotificationAdditionalField[] | cdktf.IResolvable) {
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
export interface MonitorAlertV2PrometheusLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#href MonitorAlertV2Prometheus#href}
  */
  readonly href?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#id MonitorAlertV2Prometheus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#type MonitorAlertV2Prometheus#type}
  */
  readonly type: string;
}

export function monitorAlertV2PrometheusLinkToTerraform(struct?: MonitorAlertV2PrometheusLink | cdktf.IResolvable): any {
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


export function monitorAlertV2PrometheusLinkToHclTerraform(struct?: MonitorAlertV2PrometheusLink | cdktf.IResolvable): any {
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

export class MonitorAlertV2PrometheusLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertV2PrometheusLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorAlertV2PrometheusLink | cdktf.IResolvable | undefined) {
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

export class MonitorAlertV2PrometheusLinkList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertV2PrometheusLink[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertV2PrometheusLinkOutputReference {
    return new MonitorAlertV2PrometheusLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertV2PrometheusNotificationChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#id MonitorAlertV2Prometheus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#main_threshold MonitorAlertV2Prometheus#main_threshold}
  */
  readonly mainThreshold?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#notify_on_resolve MonitorAlertV2Prometheus#notify_on_resolve}
  */
  readonly notifyOnResolve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#renotify_every_minutes MonitorAlertV2Prometheus#renotify_every_minutes}
  */
  readonly renotifyEveryMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#warning_threshold MonitorAlertV2Prometheus#warning_threshold}
  */
  readonly warningThreshold?: boolean | cdktf.IResolvable;
}

export function monitorAlertV2PrometheusNotificationChannelsToTerraform(struct?: MonitorAlertV2PrometheusNotificationChannels | cdktf.IResolvable): any {
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


export function monitorAlertV2PrometheusNotificationChannelsToHclTerraform(struct?: MonitorAlertV2PrometheusNotificationChannels | cdktf.IResolvable): any {
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

export class MonitorAlertV2PrometheusNotificationChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertV2PrometheusNotificationChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorAlertV2PrometheusNotificationChannels | cdktf.IResolvable | undefined) {
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

export class MonitorAlertV2PrometheusNotificationChannelsList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertV2PrometheusNotificationChannels[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertV2PrometheusNotificationChannelsOutputReference {
    return new MonitorAlertV2PrometheusNotificationChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertV2PrometheusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#create MonitorAlertV2Prometheus#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#delete MonitorAlertV2Prometheus#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#read MonitorAlertV2Prometheus#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#update MonitorAlertV2Prometheus#update}
  */
  readonly update?: string;
}

export function monitorAlertV2PrometheusTimeoutsToTerraform(struct?: MonitorAlertV2PrometheusTimeouts | cdktf.IResolvable): any {
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


export function monitorAlertV2PrometheusTimeoutsToHclTerraform(struct?: MonitorAlertV2PrometheusTimeouts | cdktf.IResolvable): any {
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

export class MonitorAlertV2PrometheusTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorAlertV2PrometheusTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorAlertV2PrometheusTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus sysdig_monitor_alert_v2_prometheus}
*/
export class MonitorAlertV2Prometheus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_monitor_alert_v2_prometheus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorAlertV2Prometheus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorAlertV2Prometheus to import
  * @param importFromId The id of the existing MonitorAlertV2Prometheus that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorAlertV2Prometheus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_monitor_alert_v2_prometheus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_alert_v2_prometheus sysdig_monitor_alert_v2_prometheus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAlertV2PrometheusConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAlertV2PrometheusConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_monitor_alert_v2_prometheus',
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
    this._description = config.description;
    this._durationSeconds = config.durationSeconds;
    this._enabled = config.enabled;
    this._group = config.group;
    this._id = config.id;
    this._keepFiringForMinutes = config.keepFiringForMinutes;
    this._labels = config.labels;
    this._name = config.name;
    this._query = config.query;
    this._severity = config.severity;
    this._capture.internalValue = config.capture;
    this._customNotification.internalValue = config.customNotification;
    this._link.internalValue = config.link;
    this._notificationChannels.internalValue = config.notificationChannels;
    this._timeouts.internalValue = config.timeouts;
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

  // duration_seconds - computed: true, optional: true, required: false
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

  // keep_firing_for_minutes - computed: false, optional: true, required: false
  private _keepFiringForMinutes?: number; 
  public get keepFiringForMinutes() {
    return this.getNumberAttribute('keep_firing_for_minutes');
  }
  public set keepFiringForMinutes(value: number) {
    this._keepFiringForMinutes = value;
  }
  public resetKeepFiringForMinutes() {
    this._keepFiringForMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepFiringForMinutesInput() {
    return this._keepFiringForMinutes;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // capture - computed: false, optional: true, required: false
  private _capture = new MonitorAlertV2PrometheusCaptureOutputReference(this, "capture");
  public get capture() {
    return this._capture;
  }
  public putCapture(value: MonitorAlertV2PrometheusCapture) {
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
  private _customNotification = new MonitorAlertV2PrometheusCustomNotificationOutputReference(this, "custom_notification");
  public get customNotification() {
    return this._customNotification;
  }
  public putCustomNotification(value: MonitorAlertV2PrometheusCustomNotification) {
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
  private _link = new MonitorAlertV2PrometheusLinkList(this, "link", true);
  public get link() {
    return this._link;
  }
  public putLink(value: MonitorAlertV2PrometheusLink[] | cdktf.IResolvable) {
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
  private _notificationChannels = new MonitorAlertV2PrometheusNotificationChannelsList(this, "notification_channels", true);
  public get notificationChannels() {
    return this._notificationChannels;
  }
  public putNotificationChannels(value: MonitorAlertV2PrometheusNotificationChannels[] | cdktf.IResolvable) {
    this._notificationChannels.internalValue = value;
  }
  public resetNotificationChannels() {
    this._notificationChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelsInput() {
    return this._notificationChannels.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorAlertV2PrometheusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorAlertV2PrometheusTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      duration_seconds: cdktf.numberToTerraform(this._durationSeconds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      keep_firing_for_minutes: cdktf.numberToTerraform(this._keepFiringForMinutes),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      severity: cdktf.stringToTerraform(this._severity),
      capture: monitorAlertV2PrometheusCaptureToTerraform(this._capture.internalValue),
      custom_notification: monitorAlertV2PrometheusCustomNotificationToTerraform(this._customNotification.internalValue),
      link: cdktf.listMapper(monitorAlertV2PrometheusLinkToTerraform, true)(this._link.internalValue),
      notification_channels: cdktf.listMapper(monitorAlertV2PrometheusNotificationChannelsToTerraform, true)(this._notificationChannels.internalValue),
      timeouts: monitorAlertV2PrometheusTimeoutsToTerraform(this._timeouts.internalValue),
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
      duration_seconds: {
        value: cdktf.numberToHclTerraform(this._durationSeconds),
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
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      keep_firing_for_minutes: {
        value: cdktf.numberToHclTerraform(this._keepFiringForMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capture: {
        value: monitorAlertV2PrometheusCaptureToHclTerraform(this._capture.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlertV2PrometheusCaptureList",
      },
      custom_notification: {
        value: monitorAlertV2PrometheusCustomNotificationToHclTerraform(this._customNotification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlertV2PrometheusCustomNotificationList",
      },
      link: {
        value: cdktf.listMapperHcl(monitorAlertV2PrometheusLinkToHclTerraform, true)(this._link.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorAlertV2PrometheusLinkList",
      },
      notification_channels: {
        value: cdktf.listMapperHcl(monitorAlertV2PrometheusNotificationChannelsToHclTerraform, true)(this._notificationChannels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorAlertV2PrometheusNotificationChannelsList",
      },
      timeouts: {
        value: monitorAlertV2PrometheusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorAlertV2PrometheusTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
