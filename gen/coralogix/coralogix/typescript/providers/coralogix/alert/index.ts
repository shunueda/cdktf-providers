// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#description Alert#description}
  */
  readonly description?: string;
  /**
  * Alert enabled status. True by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#enabled Alert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Group by fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#group_by Alert#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#incidents_settings Alert#incidents_settings}
  */
  readonly incidentsSettings?: AlertIncidentsSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#labels Alert#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Alert name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_group Alert#notification_group}
  */
  readonly notificationGroup?: AlertNotificationGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#phantom_mode Alert#phantom_mode}
  */
  readonly phantomMode?: boolean | cdktf.IResolvable;
  /**
  * Alert priority. Valid values: ["P1" "P2" "P3" "P4" "P5"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#priority Alert#priority}
  */
  readonly priority?: string;
  /**
  * Alert schedule. Will be activated all the time if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#schedule Alert#schedule}
  */
  readonly schedule?: AlertSchedule;
  /**
  * Alert type definition. Exactly one of the following must be specified: logs_immediate, logs_threshold, logs_anomaly, logs_ratio_threshold, logs_new_value, logs_unique_count, logs_time_relative_threshold, metric_threshold, metric_anomaly, tracing_immediate, tracing_threshold, flow, slo_threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#type_definition Alert#type_definition}
  */
  readonly typeDefinition: AlertTypeDefinition;
}
export interface AlertIncidentsSettingsRetriggeringPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#minutes Alert#minutes}
  */
  readonly minutes: number;
}

export function alertIncidentsSettingsRetriggeringPeriodToTerraform(struct?: AlertIncidentsSettingsRetriggeringPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function alertIncidentsSettingsRetriggeringPeriodToHclTerraform(struct?: AlertIncidentsSettingsRetriggeringPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertIncidentsSettingsRetriggeringPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertIncidentsSettingsRetriggeringPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertIncidentsSettingsRetriggeringPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutes = value.minutes;
    }
  }

  // minutes - computed: true, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface AlertIncidentsSettings {
  /**
  * Notify on. Valid values: ["Triggered Only" "Triggered and Resolved"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notify_on Alert#notify_on}
  */
  readonly notifyOn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#retriggering_period Alert#retriggering_period}
  */
  readonly retriggeringPeriod: AlertIncidentsSettingsRetriggeringPeriod;
}

export function alertIncidentsSettingsToTerraform(struct?: AlertIncidentsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_on: cdktf.stringToTerraform(struct!.notifyOn),
    retriggering_period: alertIncidentsSettingsRetriggeringPeriodToTerraform(struct!.retriggeringPeriod),
  }
}


export function alertIncidentsSettingsToHclTerraform(struct?: AlertIncidentsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_on: {
      value: cdktf.stringToHclTerraform(struct!.notifyOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retriggering_period: {
      value: alertIncidentsSettingsRetriggeringPeriodToHclTerraform(struct!.retriggeringPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertIncidentsSettingsRetriggeringPeriod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertIncidentsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertIncidentsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOn = this._notifyOn;
    }
    if (this._retriggeringPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriggeringPeriod = this._retriggeringPeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertIncidentsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifyOn = undefined;
      this._retriggeringPeriod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifyOn = value.notifyOn;
      this._retriggeringPeriod.internalValue = value.retriggeringPeriod;
    }
  }

  // notify_on - computed: true, optional: false, required: true
  private _notifyOn?: string; 
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }
  public set notifyOn(value: string) {
    this._notifyOn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnInput() {
    return this._notifyOn;
  }

  // retriggering_period - computed: true, optional: false, required: true
  private _retriggeringPeriod = new AlertIncidentsSettingsRetriggeringPeriodOutputReference(this, "retriggering_period");
  public get retriggeringPeriod() {
    return this._retriggeringPeriod;
  }
  public putRetriggeringPeriod(value: AlertIncidentsSettingsRetriggeringPeriod) {
    this._retriggeringPeriod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retriggeringPeriodInput() {
    return this._retriggeringPeriod.internalValue;
  }
}
export interface AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#field_name Alert#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#template Alert#template}
  */
  readonly template: string;
}

export function alertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesToTerraform(struct?: AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function alertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesToHclTerraform(struct?: AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._template = value.template;
    }
  }

  // field_name - computed: true, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // template - computed: true, optional: false, required: true
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
}

export class AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesList extends cdktf.ComplexList {
  public internalValue? : AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides[] | cdktf.IResolvable

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
  public get(index: number): AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesOutputReference {
    return new AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#field_name Alert#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#template Alert#template}
  */
  readonly template: string;
}

export function alertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesToTerraform(struct?: AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function alertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesToHclTerraform(struct?: AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._template = value.template;
    }
  }

  // field_name - computed: true, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // template - computed: true, optional: false, required: true
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
}

export class AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesList extends cdktf.ComplexList {
  public internalValue? : AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides[] | cdktf.IResolvable

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
  public get(index: number): AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesOutputReference {
    return new AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertNotificationGroupDestinationsResolvedRoutingOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#connector_overrides Alert#connector_overrides}
  */
  readonly connectorOverrides?: AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#payload_type Alert#payload_type}
  */
  readonly payloadType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#preset_overrides Alert#preset_overrides}
  */
  readonly presetOverrides?: AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides[] | cdktf.IResolvable;
}

export function alertNotificationGroupDestinationsResolvedRoutingOverridesToTerraform(struct?: AlertNotificationGroupDestinationsResolvedRoutingOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_overrides: cdktf.listMapper(alertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesToTerraform, false)(struct!.connectorOverrides),
    payload_type: cdktf.stringToTerraform(struct!.payloadType),
    preset_overrides: cdktf.listMapper(alertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesToTerraform, false)(struct!.presetOverrides),
  }
}


export function alertNotificationGroupDestinationsResolvedRoutingOverridesToHclTerraform(struct?: AlertNotificationGroupDestinationsResolvedRoutingOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_overrides: {
      value: cdktf.listMapperHcl(alertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesToHclTerraform, false)(struct!.connectorOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesList",
    },
    payload_type: {
      value: cdktf.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_overrides: {
      value: cdktf.listMapperHcl(alertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesToHclTerraform, false)(struct!.presetOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupDestinationsResolvedRoutingOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertNotificationGroupDestinationsResolvedRoutingOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOverrides = this._connectorOverrides?.internalValue;
    }
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._presetOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetOverrides = this._presetOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupDestinationsResolvedRoutingOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorOverrides.internalValue = undefined;
      this._payloadType = undefined;
      this._presetOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorOverrides.internalValue = value.connectorOverrides;
      this._payloadType = value.payloadType;
      this._presetOverrides.internalValue = value.presetOverrides;
    }
  }

  // connector_overrides - computed: true, optional: true, required: false
  private _connectorOverrides = new AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesList(this, "connector_overrides", false);
  public get connectorOverrides() {
    return this._connectorOverrides;
  }
  public putConnectorOverrides(value: AlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides[] | cdktf.IResolvable) {
    this._connectorOverrides.internalValue = value;
  }
  public resetConnectorOverrides() {
    this._connectorOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOverridesInput() {
    return this._connectorOverrides.internalValue;
  }

  // payload_type - computed: true, optional: false, required: true
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // preset_overrides - computed: true, optional: true, required: false
  private _presetOverrides = new AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesList(this, "preset_overrides", false);
  public get presetOverrides() {
    return this._presetOverrides;
  }
  public putPresetOverrides(value: AlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides[] | cdktf.IResolvable) {
    this._presetOverrides.internalValue = value;
  }
  public resetPresetOverrides() {
    this._presetOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetOverridesInput() {
    return this._presetOverrides.internalValue;
  }
}
export interface AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#field_name Alert#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#template Alert#template}
  */
  readonly template: string;
}

export function alertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesToTerraform(struct?: AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function alertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesToHclTerraform(struct?: AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._template = value.template;
    }
  }

  // field_name - computed: true, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // template - computed: true, optional: false, required: true
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
}

export class AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesList extends cdktf.ComplexList {
  public internalValue? : AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides[] | cdktf.IResolvable

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
  public get(index: number): AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesOutputReference {
    return new AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#field_name Alert#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#template Alert#template}
  */
  readonly template: string;
}

export function alertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesToTerraform(struct?: AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function alertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesToHclTerraform(struct?: AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._template = value.template;
    }
  }

  // field_name - computed: true, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // template - computed: true, optional: false, required: true
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
}

export class AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesList extends cdktf.ComplexList {
  public internalValue? : AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides[] | cdktf.IResolvable

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
  public get(index: number): AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesOutputReference {
    return new AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertNotificationGroupDestinationsTriggeredRoutingOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#connector_overrides Alert#connector_overrides}
  */
  readonly connectorOverrides?: AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#payload_type Alert#payload_type}
  */
  readonly payloadType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#preset_overrides Alert#preset_overrides}
  */
  readonly presetOverrides?: AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides[] | cdktf.IResolvable;
}

export function alertNotificationGroupDestinationsTriggeredRoutingOverridesToTerraform(struct?: AlertNotificationGroupDestinationsTriggeredRoutingOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_overrides: cdktf.listMapper(alertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesToTerraform, false)(struct!.connectorOverrides),
    payload_type: cdktf.stringToTerraform(struct!.payloadType),
    preset_overrides: cdktf.listMapper(alertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesToTerraform, false)(struct!.presetOverrides),
  }
}


export function alertNotificationGroupDestinationsTriggeredRoutingOverridesToHclTerraform(struct?: AlertNotificationGroupDestinationsTriggeredRoutingOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_overrides: {
      value: cdktf.listMapperHcl(alertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesToHclTerraform, false)(struct!.connectorOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesList",
    },
    payload_type: {
      value: cdktf.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_overrides: {
      value: cdktf.listMapperHcl(alertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesToHclTerraform, false)(struct!.presetOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupDestinationsTriggeredRoutingOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertNotificationGroupDestinationsTriggeredRoutingOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOverrides = this._connectorOverrides?.internalValue;
    }
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._presetOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetOverrides = this._presetOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupDestinationsTriggeredRoutingOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorOverrides.internalValue = undefined;
      this._payloadType = undefined;
      this._presetOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorOverrides.internalValue = value.connectorOverrides;
      this._payloadType = value.payloadType;
      this._presetOverrides.internalValue = value.presetOverrides;
    }
  }

  // connector_overrides - computed: true, optional: true, required: false
  private _connectorOverrides = new AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesList(this, "connector_overrides", false);
  public get connectorOverrides() {
    return this._connectorOverrides;
  }
  public putConnectorOverrides(value: AlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides[] | cdktf.IResolvable) {
    this._connectorOverrides.internalValue = value;
  }
  public resetConnectorOverrides() {
    this._connectorOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOverridesInput() {
    return this._connectorOverrides.internalValue;
  }

  // payload_type - computed: true, optional: false, required: true
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // preset_overrides - computed: true, optional: true, required: false
  private _presetOverrides = new AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesList(this, "preset_overrides", false);
  public get presetOverrides() {
    return this._presetOverrides;
  }
  public putPresetOverrides(value: AlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides[] | cdktf.IResolvable) {
    this._presetOverrides.internalValue = value;
  }
  public resetPresetOverrides() {
    this._presetOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetOverridesInput() {
    return this._presetOverrides.internalValue;
  }
}
export interface AlertNotificationGroupDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#connector_id Alert#connector_id}
  */
  readonly connectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notify_on Alert#notify_on}
  */
  readonly notifyOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#preset_id Alert#preset_id}
  */
  readonly presetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#resolved_routing_overrides Alert#resolved_routing_overrides}
  */
  readonly resolvedRoutingOverrides?: AlertNotificationGroupDestinationsResolvedRoutingOverrides;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#triggered_routing_overrides Alert#triggered_routing_overrides}
  */
  readonly triggeredRoutingOverrides?: AlertNotificationGroupDestinationsTriggeredRoutingOverrides;
}

export function alertNotificationGroupDestinationsToTerraform(struct?: AlertNotificationGroupDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_id: cdktf.stringToTerraform(struct!.connectorId),
    notify_on: cdktf.stringToTerraform(struct!.notifyOn),
    preset_id: cdktf.stringToTerraform(struct!.presetId),
    resolved_routing_overrides: alertNotificationGroupDestinationsResolvedRoutingOverridesToTerraform(struct!.resolvedRoutingOverrides),
    triggered_routing_overrides: alertNotificationGroupDestinationsTriggeredRoutingOverridesToTerraform(struct!.triggeredRoutingOverrides),
  }
}


export function alertNotificationGroupDestinationsToHclTerraform(struct?: AlertNotificationGroupDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_id: {
      value: cdktf.stringToHclTerraform(struct!.connectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_on: {
      value: cdktf.stringToHclTerraform(struct!.notifyOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_id: {
      value: cdktf.stringToHclTerraform(struct!.presetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolved_routing_overrides: {
      value: alertNotificationGroupDestinationsResolvedRoutingOverridesToHclTerraform(struct!.resolvedRoutingOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertNotificationGroupDestinationsResolvedRoutingOverrides",
    },
    triggered_routing_overrides: {
      value: alertNotificationGroupDestinationsTriggeredRoutingOverridesToHclTerraform(struct!.triggeredRoutingOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertNotificationGroupDestinationsTriggeredRoutingOverrides",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertNotificationGroupDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorId = this._connectorId;
    }
    if (this._notifyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOn = this._notifyOn;
    }
    if (this._presetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetId = this._presetId;
    }
    if (this._resolvedRoutingOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedRoutingOverrides = this._resolvedRoutingOverrides?.internalValue;
    }
    if (this._triggeredRoutingOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggeredRoutingOverrides = this._triggeredRoutingOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorId = undefined;
      this._notifyOn = undefined;
      this._presetId = undefined;
      this._resolvedRoutingOverrides.internalValue = undefined;
      this._triggeredRoutingOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorId = value.connectorId;
      this._notifyOn = value.notifyOn;
      this._presetId = value.presetId;
      this._resolvedRoutingOverrides.internalValue = value.resolvedRoutingOverrides;
      this._triggeredRoutingOverrides.internalValue = value.triggeredRoutingOverrides;
    }
  }

  // connector_id - computed: true, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // notify_on - computed: true, optional: true, required: false
  private _notifyOn?: string; 
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }
  public set notifyOn(value: string) {
    this._notifyOn = value;
  }
  public resetNotifyOn() {
    this._notifyOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnInput() {
    return this._notifyOn;
  }

  // preset_id - computed: true, optional: false, required: true
  private _presetId?: string; 
  public get presetId() {
    return this.getStringAttribute('preset_id');
  }
  public set presetId(value: string) {
    this._presetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetIdInput() {
    return this._presetId;
  }

  // resolved_routing_overrides - computed: true, optional: true, required: false
  private _resolvedRoutingOverrides = new AlertNotificationGroupDestinationsResolvedRoutingOverridesOutputReference(this, "resolved_routing_overrides");
  public get resolvedRoutingOverrides() {
    return this._resolvedRoutingOverrides;
  }
  public putResolvedRoutingOverrides(value: AlertNotificationGroupDestinationsResolvedRoutingOverrides) {
    this._resolvedRoutingOverrides.internalValue = value;
  }
  public resetResolvedRoutingOverrides() {
    this._resolvedRoutingOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedRoutingOverridesInput() {
    return this._resolvedRoutingOverrides.internalValue;
  }

  // triggered_routing_overrides - computed: true, optional: true, required: false
  private _triggeredRoutingOverrides = new AlertNotificationGroupDestinationsTriggeredRoutingOverridesOutputReference(this, "triggered_routing_overrides");
  public get triggeredRoutingOverrides() {
    return this._triggeredRoutingOverrides;
  }
  public putTriggeredRoutingOverrides(value: AlertNotificationGroupDestinationsTriggeredRoutingOverrides) {
    this._triggeredRoutingOverrides.internalValue = value;
  }
  public resetTriggeredRoutingOverrides() {
    this._triggeredRoutingOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredRoutingOverridesInput() {
    return this._triggeredRoutingOverrides.internalValue;
  }
}

export class AlertNotificationGroupDestinationsList extends cdktf.ComplexList {
  public internalValue? : AlertNotificationGroupDestinations[] | cdktf.IResolvable

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
  public get(index: number): AlertNotificationGroupDestinationsOutputReference {
    return new AlertNotificationGroupDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertNotificationGroupRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notify_on Alert#notify_on}
  */
  readonly notifyOn?: string;
}

export function alertNotificationGroupRouterToTerraform(struct?: AlertNotificationGroupRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_on: cdktf.stringToTerraform(struct!.notifyOn),
  }
}


export function alertNotificationGroupRouterToHclTerraform(struct?: AlertNotificationGroupRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_on: {
      value: cdktf.stringToHclTerraform(struct!.notifyOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertNotificationGroupRouter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOn = this._notifyOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupRouter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifyOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifyOn = value.notifyOn;
    }
  }

  // notify_on - computed: true, optional: true, required: false
  private _notifyOn?: string; 
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }
  public set notifyOn(value: string) {
    this._notifyOn = value;
  }
  public resetNotifyOn() {
    this._notifyOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnInput() {
    return this._notifyOn;
  }
}
export interface AlertNotificationGroupWebhooksSettingsRetriggeringPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#minutes Alert#minutes}
  */
  readonly minutes: number;
}

export function alertNotificationGroupWebhooksSettingsRetriggeringPeriodToTerraform(struct?: AlertNotificationGroupWebhooksSettingsRetriggeringPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function alertNotificationGroupWebhooksSettingsRetriggeringPeriodToHclTerraform(struct?: AlertNotificationGroupWebhooksSettingsRetriggeringPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupWebhooksSettingsRetriggeringPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertNotificationGroupWebhooksSettingsRetriggeringPeriod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupWebhooksSettingsRetriggeringPeriod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minutes = value.minutes;
    }
  }

  // minutes - computed: true, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface AlertNotificationGroupWebhooksSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#integration_id Alert#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Notify on. Valid values: ["Triggered Only" "Triggered and Resolved"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notify_on Alert#notify_on}
  */
  readonly notifyOn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#recipients Alert#recipients}
  */
  readonly recipients?: string[];
  /**
  * Retriggering period in minutes. 10 minutes by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#retriggering_period Alert#retriggering_period}
  */
  readonly retriggeringPeriod?: AlertNotificationGroupWebhooksSettingsRetriggeringPeriod;
}

export function alertNotificationGroupWebhooksSettingsToTerraform(struct?: AlertNotificationGroupWebhooksSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    notify_on: cdktf.stringToTerraform(struct!.notifyOn),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    retriggering_period: alertNotificationGroupWebhooksSettingsRetriggeringPeriodToTerraform(struct!.retriggeringPeriod),
  }
}


export function alertNotificationGroupWebhooksSettingsToHclTerraform(struct?: AlertNotificationGroupWebhooksSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_on: {
      value: cdktf.stringToHclTerraform(struct!.notifyOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    retriggering_period: {
      value: alertNotificationGroupWebhooksSettingsRetriggeringPeriodToHclTerraform(struct!.retriggeringPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertNotificationGroupWebhooksSettingsRetriggeringPeriod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupWebhooksSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertNotificationGroupWebhooksSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._notifyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOn = this._notifyOn;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._retriggeringPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriggeringPeriod = this._retriggeringPeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroupWebhooksSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationId = undefined;
      this._notifyOn = undefined;
      this._recipients = undefined;
      this._retriggeringPeriod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationId = value.integrationId;
      this._notifyOn = value.notifyOn;
      this._recipients = value.recipients;
      this._retriggeringPeriod.internalValue = value.retriggeringPeriod;
    }
  }

  // integration_id - computed: true, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // notify_on - computed: true, optional: false, required: true
  private _notifyOn?: string; 
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }
  public set notifyOn(value: string) {
    this._notifyOn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnInput() {
    return this._notifyOn;
  }

  // recipients - computed: true, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // retriggering_period - computed: true, optional: true, required: false
  private _retriggeringPeriod = new AlertNotificationGroupWebhooksSettingsRetriggeringPeriodOutputReference(this, "retriggering_period");
  public get retriggeringPeriod() {
    return this._retriggeringPeriod;
  }
  public putRetriggeringPeriod(value: AlertNotificationGroupWebhooksSettingsRetriggeringPeriod) {
    this._retriggeringPeriod.internalValue = value;
  }
  public resetRetriggeringPeriod() {
    this._retriggeringPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriggeringPeriodInput() {
    return this._retriggeringPeriod.internalValue;
  }
}

export class AlertNotificationGroupWebhooksSettingsList extends cdktf.ComplexList {
  public internalValue? : AlertNotificationGroupWebhooksSettings[] | cdktf.IResolvable

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
  public get(index: number): AlertNotificationGroupWebhooksSettingsOutputReference {
    return new AlertNotificationGroupWebhooksSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertNotificationGroup {
  /**
  * Link a 3rd party notification to an alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#destinations Alert#destinations}
  */
  readonly destinations?: AlertNotificationGroupDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#group_by_keys Alert#group_by_keys}
  */
  readonly groupByKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#router Alert#router}
  */
  readonly router?: AlertNotificationGroupRouter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#webhooks_settings Alert#webhooks_settings}
  */
  readonly webhooksSettings?: AlertNotificationGroupWebhooksSettings[] | cdktf.IResolvable;
}

export function alertNotificationGroupToTerraform(struct?: AlertNotificationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(alertNotificationGroupDestinationsToTerraform, false)(struct!.destinations),
    group_by_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByKeys),
    router: alertNotificationGroupRouterToTerraform(struct!.router),
    webhooks_settings: cdktf.listMapper(alertNotificationGroupWebhooksSettingsToTerraform, false)(struct!.webhooksSettings),
  }
}


export function alertNotificationGroupToHclTerraform(struct?: AlertNotificationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(alertNotificationGroupDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "AlertNotificationGroupDestinationsList",
    },
    group_by_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    router: {
      value: alertNotificationGroupRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertNotificationGroupRouter",
    },
    webhooks_settings: {
      value: cdktf.listMapperHcl(alertNotificationGroupWebhooksSettingsToHclTerraform, false)(struct!.webhooksSettings),
      isBlock: true,
      type: "set",
      storageClassType: "AlertNotificationGroupWebhooksSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertNotificationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertNotificationGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._groupByKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByKeys = this._groupByKeys;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    if (this._webhooksSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhooksSettings = this._webhooksSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertNotificationGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
      this._groupByKeys = undefined;
      this._router.internalValue = undefined;
      this._webhooksSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
      this._groupByKeys = value.groupByKeys;
      this._router.internalValue = value.router;
      this._webhooksSettings.internalValue = value.webhooksSettings;
    }
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new AlertNotificationGroupDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: AlertNotificationGroupDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // group_by_keys - computed: true, optional: true, required: false
  private _groupByKeys?: string[]; 
  public get groupByKeys() {
    return this.getListAttribute('group_by_keys');
  }
  public set groupByKeys(value: string[]) {
    this._groupByKeys = value;
  }
  public resetGroupByKeys() {
    this._groupByKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByKeysInput() {
    return this._groupByKeys;
  }

  // router - computed: true, optional: true, required: false
  private _router = new AlertNotificationGroupRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: AlertNotificationGroupRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // webhooks_settings - computed: true, optional: true, required: false
  private _webhooksSettings = new AlertNotificationGroupWebhooksSettingsList(this, "webhooks_settings", true);
  public get webhooksSettings() {
    return this._webhooksSettings;
  }
  public putWebhooksSettings(value: AlertNotificationGroupWebhooksSettings[] | cdktf.IResolvable) {
    this._webhooksSettings.internalValue = value;
  }
  public resetWebhooksSettings() {
    this._webhooksSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksSettingsInput() {
    return this._webhooksSettings.internalValue;
  }
}
export interface AlertScheduleActiveOn {
  /**
  * Days of the week. Valid values: ["Friday" "Monday" "Saturday" "Sunday" "Thursday" "Tuesday" "Wednesday"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#days_of_week Alert#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#end_time Alert#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#start_time Alert#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#utc_offset Alert#utc_offset}
  */
  readonly utcOffset?: string;
}

export function alertScheduleActiveOnToTerraform(struct?: AlertScheduleActiveOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    utc_offset: cdktf.stringToTerraform(struct!.utcOffset),
  }
}


export function alertScheduleActiveOnToHclTerraform(struct?: AlertScheduleActiveOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    utc_offset: {
      value: cdktf.stringToHclTerraform(struct!.utcOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertScheduleActiveOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertScheduleActiveOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._utcOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.utcOffset = this._utcOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertScheduleActiveOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._utcOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._utcOffset = value.utcOffset;
    }
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // utc_offset - computed: true, optional: true, required: false
  private _utcOffset?: string; 
  public get utcOffset() {
    return this.getStringAttribute('utc_offset');
  }
  public set utcOffset(value: string) {
    this._utcOffset = value;
  }
  public resetUtcOffset() {
    this._utcOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcOffsetInput() {
    return this._utcOffset;
  }
}
export interface AlertSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#active_on Alert#active_on}
  */
  readonly activeOn: AlertScheduleActiveOn;
}

export function alertScheduleToTerraform(struct?: AlertSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_on: alertScheduleActiveOnToTerraform(struct!.activeOn),
  }
}


export function alertScheduleToHclTerraform(struct?: AlertSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_on: {
      value: alertScheduleActiveOnToHclTerraform(struct!.activeOn),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertScheduleActiveOn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeOn = this._activeOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeOn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeOn.internalValue = value.activeOn;
    }
  }

  // active_on - computed: false, optional: false, required: true
  private _activeOn = new AlertScheduleActiveOnOutputReference(this, "active_on");
  public get activeOn() {
    return this._activeOn;
  }
  public putActiveOn(value: AlertScheduleActiveOn) {
    this._activeOn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnInput() {
    return this._activeOn.internalValue;
  }
}
export interface AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#id Alert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#not Alert#not}
  */
  readonly not?: boolean | cdktf.IResolvable;
}

export function alertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsToTerraform(struct?: AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    not: cdktf.booleanToTerraform(struct!.not),
  }
}


export function alertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsToHclTerraform(struct?: AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not: {
      value: cdktf.booleanToHclTerraform(struct!.not),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._not = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._not = value.not;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // not - computed: true, optional: true, required: false
  private _not?: boolean | cdktf.IResolvable; 
  public get not() {
    return this.getBooleanAttribute('not');
  }
  public set not(value: boolean | cdktf.IResolvable) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }
}

export class AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsOutputReference {
    return new AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionFlowStagesFlowStagesGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#alert_defs Alert#alert_defs}
  */
  readonly alertDefs: AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs[] | cdktf.IResolvable;
  /**
  * Alerts operation. Valid values: ["AND" "OR"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#alerts_op Alert#alerts_op}
  */
  readonly alertsOp: string;
  /**
  * Next operation. Valid values: ["AND" "OR"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#next_op Alert#next_op}
  */
  readonly nextOp: string;
}

export function alertTypeDefinitionFlowStagesFlowStagesGroupsToTerraform(struct?: AlertTypeDefinitionFlowStagesFlowStagesGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_defs: cdktf.listMapper(alertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsToTerraform, false)(struct!.alertDefs),
    alerts_op: cdktf.stringToTerraform(struct!.alertsOp),
    next_op: cdktf.stringToTerraform(struct!.nextOp),
  }
}


export function alertTypeDefinitionFlowStagesFlowStagesGroupsToHclTerraform(struct?: AlertTypeDefinitionFlowStagesFlowStagesGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_defs: {
      value: cdktf.listMapperHcl(alertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsToHclTerraform, false)(struct!.alertDefs),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsList",
    },
    alerts_op: {
      value: cdktf.stringToHclTerraform(struct!.alertsOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_op: {
      value: cdktf.stringToHclTerraform(struct!.nextOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionFlowStagesFlowStagesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionFlowStagesFlowStagesGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertDefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertDefs = this._alertDefs?.internalValue;
    }
    if (this._alertsOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsOp = this._alertsOp;
    }
    if (this._nextOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextOp = this._nextOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionFlowStagesFlowStagesGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertDefs.internalValue = undefined;
      this._alertsOp = undefined;
      this._nextOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertDefs.internalValue = value.alertDefs;
      this._alertsOp = value.alertsOp;
      this._nextOp = value.nextOp;
    }
  }

  // alert_defs - computed: false, optional: false, required: true
  private _alertDefs = new AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsList(this, "alert_defs", true);
  public get alertDefs() {
    return this._alertDefs;
  }
  public putAlertDefs(value: AlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs[] | cdktf.IResolvable) {
    this._alertDefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDefsInput() {
    return this._alertDefs.internalValue;
  }

  // alerts_op - computed: false, optional: false, required: true
  private _alertsOp?: string; 
  public get alertsOp() {
    return this.getStringAttribute('alerts_op');
  }
  public set alertsOp(value: string) {
    this._alertsOp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsOpInput() {
    return this._alertsOp;
  }

  // next_op - computed: false, optional: false, required: true
  private _nextOp?: string; 
  public get nextOp() {
    return this.getStringAttribute('next_op');
  }
  public set nextOp(value: string) {
    this._nextOp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextOpInput() {
    return this._nextOp;
  }
}

export class AlertTypeDefinitionFlowStagesFlowStagesGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionFlowStagesFlowStagesGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionFlowStagesFlowStagesGroupsOutputReference {
    return new AlertTypeDefinitionFlowStagesFlowStagesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionFlowStages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#flow_stages_groups Alert#flow_stages_groups}
  */
  readonly flowStagesGroups: AlertTypeDefinitionFlowStagesFlowStagesGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#timeframe_ms Alert#timeframe_ms}
  */
  readonly timeframeMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#timeframe_type Alert#timeframe_type}
  */
  readonly timeframeType: string;
}

export function alertTypeDefinitionFlowStagesToTerraform(struct?: AlertTypeDefinitionFlowStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_stages_groups: cdktf.listMapper(alertTypeDefinitionFlowStagesFlowStagesGroupsToTerraform, false)(struct!.flowStagesGroups),
    timeframe_ms: cdktf.numberToTerraform(struct!.timeframeMs),
    timeframe_type: cdktf.stringToTerraform(struct!.timeframeType),
  }
}


export function alertTypeDefinitionFlowStagesToHclTerraform(struct?: AlertTypeDefinitionFlowStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_stages_groups: {
      value: cdktf.listMapperHcl(alertTypeDefinitionFlowStagesFlowStagesGroupsToHclTerraform, false)(struct!.flowStagesGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertTypeDefinitionFlowStagesFlowStagesGroupsList",
    },
    timeframe_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeframeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeframe_type: {
      value: cdktf.stringToHclTerraform(struct!.timeframeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionFlowStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionFlowStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowStagesGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowStagesGroups = this._flowStagesGroups?.internalValue;
    }
    if (this._timeframeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframeMs = this._timeframeMs;
    }
    if (this._timeframeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframeType = this._timeframeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionFlowStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowStagesGroups.internalValue = undefined;
      this._timeframeMs = undefined;
      this._timeframeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowStagesGroups.internalValue = value.flowStagesGroups;
      this._timeframeMs = value.timeframeMs;
      this._timeframeType = value.timeframeType;
    }
  }

  // flow_stages_groups - computed: false, optional: false, required: true
  private _flowStagesGroups = new AlertTypeDefinitionFlowStagesFlowStagesGroupsList(this, "flow_stages_groups", false);
  public get flowStagesGroups() {
    return this._flowStagesGroups;
  }
  public putFlowStagesGroups(value: AlertTypeDefinitionFlowStagesFlowStagesGroups[] | cdktf.IResolvable) {
    this._flowStagesGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowStagesGroupsInput() {
    return this._flowStagesGroups.internalValue;
  }

  // timeframe_ms - computed: true, optional: true, required: false
  private _timeframeMs?: number; 
  public get timeframeMs() {
    return this.getNumberAttribute('timeframe_ms');
  }
  public set timeframeMs(value: number) {
    this._timeframeMs = value;
  }
  public resetTimeframeMs() {
    this._timeframeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeMsInput() {
    return this._timeframeMs;
  }

  // timeframe_type - computed: false, optional: false, required: true
  private _timeframeType?: string; 
  public get timeframeType() {
    return this.getStringAttribute('timeframe_type');
  }
  public set timeframeType(value: string) {
    this._timeframeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeTypeInput() {
    return this._timeframeType;
  }
}

export class AlertTypeDefinitionFlowStagesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionFlowStages[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionFlowStagesOutputReference {
    return new AlertTypeDefinitionFlowStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionFlow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#enforce_suppression Alert#enforce_suppression}
  */
  readonly enforceSuppression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#stages Alert#stages}
  */
  readonly stages: AlertTypeDefinitionFlowStages[] | cdktf.IResolvable;
}

export function alertTypeDefinitionFlowToTerraform(struct?: AlertTypeDefinitionFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_suppression: cdktf.booleanToTerraform(struct!.enforceSuppression),
    stages: cdktf.listMapper(alertTypeDefinitionFlowStagesToTerraform, false)(struct!.stages),
  }
}


export function alertTypeDefinitionFlowToHclTerraform(struct?: AlertTypeDefinitionFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce_suppression: {
      value: cdktf.booleanToHclTerraform(struct!.enforceSuppression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stages: {
      value: cdktf.listMapperHcl(alertTypeDefinitionFlowStagesToHclTerraform, false)(struct!.stages),
      isBlock: true,
      type: "list",
      storageClassType: "AlertTypeDefinitionFlowStagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceSuppression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceSuppression = this._enforceSuppression;
    }
    if (this._stages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforceSuppression = undefined;
      this._stages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforceSuppression = value.enforceSuppression;
      this._stages.internalValue = value.stages;
    }
  }

  // enforce_suppression - computed: true, optional: true, required: false
  private _enforceSuppression?: boolean | cdktf.IResolvable; 
  public get enforceSuppression() {
    return this.getBooleanAttribute('enforce_suppression');
  }
  public set enforceSuppression(value: boolean | cdktf.IResolvable) {
    this._enforceSuppression = value;
  }
  public resetEnforceSuppression() {
    this._enforceSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSuppressionInput() {
    return this._enforceSuppression;
  }

  // stages - computed: false, optional: false, required: true
  private _stages = new AlertTypeDefinitionFlowStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: AlertTypeDefinitionFlowStages[] | cdktf.IResolvable) {
    this._stages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }
}
export interface AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Severities. Valid values: ["Critical" "Debug" "Error" "Info" "Unspecified" "Warning"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#severities Alert#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._severities = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._severities = value.severities;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystem_name - computed: true, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#label_filters Alert#label_filters}
  */
  readonly labelFilters?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#lucene_query Alert#lucene_query}
  */
  readonly luceneQuery?: string;
}

export function alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterToTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersToTerraform(struct!.labelFilters),
    lucene_query: cdktf.stringToTerraform(struct!.luceneQuery),
  }
}


export function alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterToHclTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct!.labelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters",
    },
    lucene_query: {
      value: cdktf.stringToHclTerraform(struct!.luceneQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._luceneQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.luceneQuery = this._luceneQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._luceneQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._luceneQuery = value.luceneQuery;
    }
  }

  // label_filters - computed: true, optional: true, required: false
  private _labelFilters = new AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // lucene_query - computed: true, optional: true, required: false
  private _luceneQuery?: string; 
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
  public set luceneQuery(value: string) {
    this._luceneQuery = value;
  }
  public resetLuceneQuery() {
    this._luceneQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneQueryInput() {
    return this._luceneQuery;
  }
}
export interface AlertTypeDefinitionLogsAnomalyLogsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#simple_filter Alert#simple_filter}
  */
  readonly simpleFilter?: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter;
}

export function alertTypeDefinitionLogsAnomalyLogsFilterToTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_filter: alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterToTerraform(struct!.simpleFilter),
  }
}


export function alertTypeDefinitionLogsAnomalyLogsFilterToHclTerraform(struct?: AlertTypeDefinitionLogsAnomalyLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_filter: {
      value: alertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterToHclTerraform(struct!.simpleFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsAnomalyLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsAnomalyLogsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleFilter = this._simpleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsAnomalyLogsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = value.simpleFilter;
    }
  }

  // simple_filter - computed: true, optional: true, required: false
  private _simpleFilter = new AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
  public putSimpleFilter(value: AlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter) {
    this._simpleFilter.internalValue = value;
  }
  public resetSimpleFilter() {
    this._simpleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleFilterInput() {
    return this._simpleFilter.internalValue;
  }
}
export interface AlertTypeDefinitionLogsAnomalyRulesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#minimum_threshold Alert#minimum_threshold}
  */
  readonly minimumThreshold: number;
  /**
  * Time window to evaluate the threshold with. Valid values: ["10_MINUTES" "12_HOURS" "15_MINUTES" "1_HOUR" "20_MINUTES" "24_HOURS" "2_HOURS" "30_MINUTES" "36_HOURS" "4_HOURS" "5_MINUTES" "6_HOURS"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#time_window Alert#time_window}
  */
  readonly timeWindow: string;
}

export function alertTypeDefinitionLogsAnomalyRulesConditionToTerraform(struct?: AlertTypeDefinitionLogsAnomalyRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_threshold: cdktf.numberToTerraform(struct!.minimumThreshold),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
  }
}


export function alertTypeDefinitionLogsAnomalyRulesConditionToHclTerraform(struct?: AlertTypeDefinitionLogsAnomalyRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_threshold: {
      value: cdktf.numberToHclTerraform(struct!.minimumThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsAnomalyRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsAnomalyRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumThreshold = this._minimumThreshold;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsAnomalyRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumThreshold = undefined;
      this._timeWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumThreshold = value.minimumThreshold;
      this._timeWindow = value.timeWindow;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // minimum_threshold - computed: false, optional: false, required: true
  private _minimumThreshold?: number; 
  public get minimumThreshold() {
    return this.getNumberAttribute('minimum_threshold');
  }
  public set minimumThreshold(value: number) {
    this._minimumThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumThresholdInput() {
    return this._minimumThreshold;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface AlertTypeDefinitionLogsAnomalyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionLogsAnomalyRulesCondition;
}

export function alertTypeDefinitionLogsAnomalyRulesToTerraform(struct?: AlertTypeDefinitionLogsAnomalyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionLogsAnomalyRulesConditionToTerraform(struct!.condition),
  }
}


export function alertTypeDefinitionLogsAnomalyRulesToHclTerraform(struct?: AlertTypeDefinitionLogsAnomalyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionLogsAnomalyRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsAnomalyRulesCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsAnomalyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsAnomalyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsAnomalyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionLogsAnomalyRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionLogsAnomalyRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class AlertTypeDefinitionLogsAnomalyRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsAnomalyRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsAnomalyRulesOutputReference {
    return new AlertTypeDefinitionLogsAnomalyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsAnomaly {
  /**
  * Delay evaluation of the rules by n milliseconds. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#custom_evaluation_delay Alert#custom_evaluation_delay}
  */
  readonly customEvaluationDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_filter Alert#logs_filter}
  */
  readonly logsFilter?: AlertTypeDefinitionLogsAnomalyLogsFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionLogsAnomalyRules[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsAnomalyToTerraform(struct?: AlertTypeDefinitionLogsAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_evaluation_delay: cdktf.numberToTerraform(struct!.customEvaluationDelay),
    logs_filter: alertTypeDefinitionLogsAnomalyLogsFilterToTerraform(struct!.logsFilter),
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
    rules: cdktf.listMapper(alertTypeDefinitionLogsAnomalyRulesToTerraform, false)(struct!.rules),
  }
}


export function alertTypeDefinitionLogsAnomalyToHclTerraform(struct?: AlertTypeDefinitionLogsAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_evaluation_delay: {
      value: cdktf.numberToHclTerraform(struct!.customEvaluationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logs_filter: {
      value: alertTypeDefinitionLogsAnomalyLogsFilterToHclTerraform(struct!.logsFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsAnomalyLogsFilter",
    },
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsAnomalyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsAnomalyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsAnomaly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEvaluationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEvaluationDelay = this._customEvaluationDelay;
    }
    if (this._logsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsFilter = this._logsFilter?.internalValue;
    }
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsAnomaly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = undefined;
      this._logsFilter.internalValue = undefined;
      this._notificationPayloadFilter = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = value.customEvaluationDelay;
      this._logsFilter.internalValue = value.logsFilter;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
      this._rules.internalValue = value.rules;
    }
  }

  // custom_evaluation_delay - computed: true, optional: true, required: false
  private _customEvaluationDelay?: number; 
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }
  public set customEvaluationDelay(value: number) {
    this._customEvaluationDelay = value;
  }
  public resetCustomEvaluationDelay() {
    this._customEvaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEvaluationDelayInput() {
    return this._customEvaluationDelay;
  }

  // logs_filter - computed: true, optional: true, required: false
  private _logsFilter = new AlertTypeDefinitionLogsAnomalyLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }
  public putLogsFilter(value: AlertTypeDefinitionLogsAnomalyLogsFilter) {
    this._logsFilter.internalValue = value;
  }
  public resetLogsFilter() {
    this._logsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsFilterInput() {
    return this._logsFilter.internalValue;
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionLogsAnomalyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionLogsAnomalyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Severities. Valid values: ["Critical" "Debug" "Error" "Info" "Unspecified" "Warning"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#severities Alert#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._severities = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._severities = value.severities;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystem_name - computed: true, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#label_filters Alert#label_filters}
  */
  readonly labelFilters?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#lucene_query Alert#lucene_query}
  */
  readonly luceneQuery?: string;
}

export function alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterToTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersToTerraform(struct!.labelFilters),
    lucene_query: cdktf.stringToTerraform(struct!.luceneQuery),
  }
}


export function alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterToHclTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct!.labelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters",
    },
    lucene_query: {
      value: cdktf.stringToHclTerraform(struct!.luceneQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._luceneQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.luceneQuery = this._luceneQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._luceneQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._luceneQuery = value.luceneQuery;
    }
  }

  // label_filters - computed: true, optional: true, required: false
  private _labelFilters = new AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // lucene_query - computed: true, optional: true, required: false
  private _luceneQuery?: string; 
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
  public set luceneQuery(value: string) {
    this._luceneQuery = value;
  }
  public resetLuceneQuery() {
    this._luceneQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneQueryInput() {
    return this._luceneQuery;
  }
}
export interface AlertTypeDefinitionLogsImmediateLogsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#simple_filter Alert#simple_filter}
  */
  readonly simpleFilter?: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter;
}

export function alertTypeDefinitionLogsImmediateLogsFilterToTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_filter: alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterToTerraform(struct!.simpleFilter),
  }
}


export function alertTypeDefinitionLogsImmediateLogsFilterToHclTerraform(struct?: AlertTypeDefinitionLogsImmediateLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_filter: {
      value: alertTypeDefinitionLogsImmediateLogsFilterSimpleFilterToHclTerraform(struct!.simpleFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsImmediateLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsImmediateLogsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleFilter = this._simpleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsImmediateLogsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = value.simpleFilter;
    }
  }

  // simple_filter - computed: true, optional: true, required: false
  private _simpleFilter = new AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
  public putSimpleFilter(value: AlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter) {
    this._simpleFilter.internalValue = value;
  }
  public resetSimpleFilter() {
    this._simpleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleFilterInput() {
    return this._simpleFilter.internalValue;
  }
}
export interface AlertTypeDefinitionLogsImmediate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_filter Alert#logs_filter}
  */
  readonly logsFilter?: AlertTypeDefinitionLogsImmediateLogsFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
}

export function alertTypeDefinitionLogsImmediateToTerraform(struct?: AlertTypeDefinitionLogsImmediate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs_filter: alertTypeDefinitionLogsImmediateLogsFilterToTerraform(struct!.logsFilter),
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
  }
}


export function alertTypeDefinitionLogsImmediateToHclTerraform(struct?: AlertTypeDefinitionLogsImmediate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logs_filter: {
      value: alertTypeDefinitionLogsImmediateLogsFilterToHclTerraform(struct!.logsFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsImmediateLogsFilter",
    },
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsImmediateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsImmediate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsFilter = this._logsFilter?.internalValue;
    }
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsImmediate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logsFilter.internalValue = undefined;
      this._notificationPayloadFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logsFilter.internalValue = value.logsFilter;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
    }
  }

  // logs_filter - computed: true, optional: true, required: false
  private _logsFilter = new AlertTypeDefinitionLogsImmediateLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }
  public putLogsFilter(value: AlertTypeDefinitionLogsImmediateLogsFilter) {
    this._logsFilter.internalValue = value;
  }
  public resetLogsFilter() {
    this._logsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsFilterInput() {
    return this._logsFilter.internalValue;
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }
}
export interface AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Severities. Valid values: ["Critical" "Debug" "Error" "Info" "Unspecified" "Warning"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#severities Alert#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._severities = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._severities = value.severities;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystem_name - computed: true, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#label_filters Alert#label_filters}
  */
  readonly labelFilters?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#lucene_query Alert#lucene_query}
  */
  readonly luceneQuery?: string;
}

export function alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterToTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersToTerraform(struct!.labelFilters),
    lucene_query: cdktf.stringToTerraform(struct!.luceneQuery),
  }
}


export function alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterToHclTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct!.labelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters",
    },
    lucene_query: {
      value: cdktf.stringToHclTerraform(struct!.luceneQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._luceneQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.luceneQuery = this._luceneQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._luceneQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._luceneQuery = value.luceneQuery;
    }
  }

  // label_filters - computed: true, optional: true, required: false
  private _labelFilters = new AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // lucene_query - computed: true, optional: true, required: false
  private _luceneQuery?: string; 
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
  public set luceneQuery(value: string) {
    this._luceneQuery = value;
  }
  public resetLuceneQuery() {
    this._luceneQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneQueryInput() {
    return this._luceneQuery;
  }
}
export interface AlertTypeDefinitionLogsNewValueLogsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#simple_filter Alert#simple_filter}
  */
  readonly simpleFilter?: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter;
}

export function alertTypeDefinitionLogsNewValueLogsFilterToTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_filter: alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterToTerraform(struct!.simpleFilter),
  }
}


export function alertTypeDefinitionLogsNewValueLogsFilterToHclTerraform(struct?: AlertTypeDefinitionLogsNewValueLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_filter: {
      value: alertTypeDefinitionLogsNewValueLogsFilterSimpleFilterToHclTerraform(struct!.simpleFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsNewValueLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsNewValueLogsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleFilter = this._simpleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsNewValueLogsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = value.simpleFilter;
    }
  }

  // simple_filter - computed: true, optional: true, required: false
  private _simpleFilter = new AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
  public putSimpleFilter(value: AlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter) {
    this._simpleFilter.internalValue = value;
  }
  public resetSimpleFilter() {
    this._simpleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleFilterInput() {
    return this._simpleFilter.internalValue;
  }
}
export interface AlertTypeDefinitionLogsNewValueRulesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#keypath_to_track Alert#keypath_to_track}
  */
  readonly keypathToTrack: string;
  /**
  * Time window to evaluate the threshold with. Valid values: ["12_HOURS" "1_MONTH" "1_WEEK" "24_HOURS" "2_MONTHS" "3_MONTHS" "48_HOURS" "72_HOURS"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#time_window Alert#time_window}
  */
  readonly timeWindow: string;
}

export function alertTypeDefinitionLogsNewValueRulesConditionToTerraform(struct?: AlertTypeDefinitionLogsNewValueRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypath_to_track: cdktf.stringToTerraform(struct!.keypathToTrack),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
  }
}


export function alertTypeDefinitionLogsNewValueRulesConditionToHclTerraform(struct?: AlertTypeDefinitionLogsNewValueRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypath_to_track: {
      value: cdktf.stringToHclTerraform(struct!.keypathToTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsNewValueRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsNewValueRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypathToTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypathToTrack = this._keypathToTrack;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsNewValueRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keypathToTrack = undefined;
      this._timeWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keypathToTrack = value.keypathToTrack;
      this._timeWindow = value.timeWindow;
    }
  }

  // keypath_to_track - computed: false, optional: false, required: true
  private _keypathToTrack?: string; 
  public get keypathToTrack() {
    return this.getStringAttribute('keypath_to_track');
  }
  public set keypathToTrack(value: string) {
    this._keypathToTrack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypathToTrackInput() {
    return this._keypathToTrack;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface AlertTypeDefinitionLogsNewValueRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionLogsNewValueRulesCondition;
}

export function alertTypeDefinitionLogsNewValueRulesToTerraform(struct?: AlertTypeDefinitionLogsNewValueRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionLogsNewValueRulesConditionToTerraform(struct!.condition),
  }
}


export function alertTypeDefinitionLogsNewValueRulesToHclTerraform(struct?: AlertTypeDefinitionLogsNewValueRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionLogsNewValueRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsNewValueRulesCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsNewValueRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsNewValueRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsNewValueRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionLogsNewValueRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionLogsNewValueRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class AlertTypeDefinitionLogsNewValueRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsNewValueRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsNewValueRulesOutputReference {
    return new AlertTypeDefinitionLogsNewValueRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsNewValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_filter Alert#logs_filter}
  */
  readonly logsFilter?: AlertTypeDefinitionLogsNewValueLogsFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionLogsNewValueRules[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsNewValueToTerraform(struct?: AlertTypeDefinitionLogsNewValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs_filter: alertTypeDefinitionLogsNewValueLogsFilterToTerraform(struct!.logsFilter),
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
    rules: cdktf.listMapper(alertTypeDefinitionLogsNewValueRulesToTerraform, false)(struct!.rules),
  }
}


export function alertTypeDefinitionLogsNewValueToHclTerraform(struct?: AlertTypeDefinitionLogsNewValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logs_filter: {
      value: alertTypeDefinitionLogsNewValueLogsFilterToHclTerraform(struct!.logsFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsNewValueLogsFilter",
    },
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsNewValueRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsNewValueRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsNewValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsNewValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsFilter = this._logsFilter?.internalValue;
    }
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsNewValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logsFilter.internalValue = undefined;
      this._notificationPayloadFilter = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logsFilter.internalValue = value.logsFilter;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
      this._rules.internalValue = value.rules;
    }
  }

  // logs_filter - computed: true, optional: true, required: false
  private _logsFilter = new AlertTypeDefinitionLogsNewValueLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }
  public putLogsFilter(value: AlertTypeDefinitionLogsNewValueLogsFilter) {
    this._logsFilter.internalValue = value;
  }
  public resetLogsFilter() {
    this._logsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsFilterInput() {
    return this._logsFilter.internalValue;
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionLogsNewValueRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionLogsNewValueRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Severities. Valid values: ["Critical" "Debug" "Error" "Info" "Unspecified" "Warning"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#severities Alert#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._severities = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._severities = value.severities;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystem_name - computed: true, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#label_filters Alert#label_filters}
  */
  readonly labelFilters?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#lucene_query Alert#lucene_query}
  */
  readonly luceneQuery?: string;
}

export function alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersToTerraform(struct!.labelFilters),
    lucene_query: cdktf.stringToTerraform(struct!.luceneQuery),
  }
}


export function alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersToHclTerraform(struct!.labelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters",
    },
    lucene_query: {
      value: cdktf.stringToHclTerraform(struct!.luceneQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._luceneQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.luceneQuery = this._luceneQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._luceneQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._luceneQuery = value.luceneQuery;
    }
  }

  // label_filters - computed: true, optional: true, required: false
  private _labelFilters = new AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // lucene_query - computed: true, optional: true, required: false
  private _luceneQuery?: string; 
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
  public set luceneQuery(value: string) {
    this._luceneQuery = value;
  }
  public resetLuceneQuery() {
    this._luceneQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneQueryInput() {
    return this._luceneQuery;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdDenominator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#simple_filter Alert#simple_filter}
  */
  readonly simpleFilter?: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter;
}

export function alertTypeDefinitionLogsRatioThresholdDenominatorToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_filter: alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterToTerraform(struct!.simpleFilter),
  }
}


export function alertTypeDefinitionLogsRatioThresholdDenominatorToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdDenominator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_filter: {
      value: alertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterToHclTerraform(struct!.simpleFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdDenominatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdDenominator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleFilter = this._simpleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdDenominator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = value.simpleFilter;
    }
  }

  // simple_filter - computed: true, optional: true, required: false
  private _simpleFilter = new AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
  public putSimpleFilter(value: AlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter) {
    this._simpleFilter.internalValue = value;
  }
  public resetSimpleFilter() {
    this._simpleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleFilterInput() {
    return this._simpleFilter.internalValue;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Severities. Valid values: ["Critical" "Debug" "Error" "Info" "Unspecified" "Warning"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#severities Alert#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._severities = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._severities = value.severities;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystem_name - computed: true, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#label_filters Alert#label_filters}
  */
  readonly labelFilters?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#lucene_query Alert#lucene_query}
  */
  readonly luceneQuery?: string;
}

export function alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersToTerraform(struct!.labelFilters),
    lucene_query: cdktf.stringToTerraform(struct!.luceneQuery),
  }
}


export function alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersToHclTerraform(struct!.labelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters",
    },
    lucene_query: {
      value: cdktf.stringToHclTerraform(struct!.luceneQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._luceneQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.luceneQuery = this._luceneQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._luceneQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._luceneQuery = value.luceneQuery;
    }
  }

  // label_filters - computed: true, optional: true, required: false
  private _labelFilters = new AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // lucene_query - computed: true, optional: true, required: false
  private _luceneQuery?: string; 
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
  public set luceneQuery(value: string) {
    this._luceneQuery = value;
  }
  public resetLuceneQuery() {
    this._luceneQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneQueryInput() {
    return this._luceneQuery;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdNumerator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#simple_filter Alert#simple_filter}
  */
  readonly simpleFilter?: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter;
}

export function alertTypeDefinitionLogsRatioThresholdNumeratorToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_filter: alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterToTerraform(struct!.simpleFilter),
  }
}


export function alertTypeDefinitionLogsRatioThresholdNumeratorToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdNumerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_filter: {
      value: alertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterToHclTerraform(struct!.simpleFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdNumeratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdNumerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleFilter = this._simpleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdNumerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = value.simpleFilter;
    }
  }

  // simple_filter - computed: true, optional: true, required: false
  private _simpleFilter = new AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
  public putSimpleFilter(value: AlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter) {
    this._simpleFilter.internalValue = value;
  }
  public resetSimpleFilter() {
    this._simpleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleFilterInput() {
    return this._simpleFilter.internalValue;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdRulesCondition {
  /**
  * Condition to evaluate the threshold with. Valid values: ["LESS_THAN" "MORE_THAN"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition_type Alert#condition_type}
  */
  readonly conditionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold: number;
  /**
  * Time window to evaluate the threshold with. Valid values: ["10_MINUTES" "12_HOURS" "15_MINUTES" "1_HOUR" "24_HOURS" "2_HOURS" "30_MINUTES" "36_HOURS" "4_HOURS" "5_MINUTES" "6_HOURS"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#time_window Alert#time_window}
  */
  readonly timeWindow: string;
}

export function alertTypeDefinitionLogsRatioThresholdRulesConditionToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
  }
}


export function alertTypeDefinitionLogsRatioThresholdRulesConditionToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
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
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
      this._threshold = undefined;
      this._timeWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
      this._threshold = value.threshold;
      this._timeWindow = value.timeWindow;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdRulesOverride {
  /**
  * Alert priority. Valid values: ["P1" "P2" "P3" "P4" "P5"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#priority Alert#priority}
  */
  readonly priority?: string;
}

export function alertTypeDefinitionLogsRatioThresholdRulesOverrideToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function alertTypeDefinitionLogsRatioThresholdRulesOverrideToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdRulesOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdRulesOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
    }
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface AlertTypeDefinitionLogsRatioThresholdRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionLogsRatioThresholdRulesCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#override Alert#override}
  */
  readonly override: AlertTypeDefinitionLogsRatioThresholdRulesOverride;
}

export function alertTypeDefinitionLogsRatioThresholdRulesToTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionLogsRatioThresholdRulesConditionToTerraform(struct!.condition),
    override: alertTypeDefinitionLogsRatioThresholdRulesOverrideToTerraform(struct!.override),
  }
}


export function alertTypeDefinitionLogsRatioThresholdRulesToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionLogsRatioThresholdRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdRulesCondition",
    },
    override: {
      value: alertTypeDefinitionLogsRatioThresholdRulesOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdRulesOverride",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsRatioThresholdRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThresholdRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._override.internalValue = value.override;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionLogsRatioThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionLogsRatioThresholdRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // override - computed: false, optional: false, required: true
  private _override = new AlertTypeDefinitionLogsRatioThresholdRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: AlertTypeDefinitionLogsRatioThresholdRulesOverride) {
    this._override.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class AlertTypeDefinitionLogsRatioThresholdRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsRatioThresholdRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsRatioThresholdRulesOutputReference {
    return new AlertTypeDefinitionLogsRatioThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsRatioThreshold {
  /**
  * Delay evaluation of the rules by n milliseconds. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#custom_evaluation_delay Alert#custom_evaluation_delay}
  */
  readonly customEvaluationDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#denominator Alert#denominator}
  */
  readonly denominator?: AlertTypeDefinitionLogsRatioThresholdDenominator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#denominator_alias Alert#denominator_alias}
  */
  readonly denominatorAlias: string;
  /**
  * Group by for. Valid values: ["Both" "Denominator Only" "Numerator Only"]. 'Both' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#group_by_for Alert#group_by_for}
  */
  readonly groupByFor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#numerator Alert#numerator}
  */
  readonly numerator?: AlertTypeDefinitionLogsRatioThresholdNumerator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#numerator_alias Alert#numerator_alias}
  */
  readonly numeratorAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionLogsRatioThresholdRules[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsRatioThresholdToTerraform(struct?: AlertTypeDefinitionLogsRatioThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_evaluation_delay: cdktf.numberToTerraform(struct!.customEvaluationDelay),
    denominator: alertTypeDefinitionLogsRatioThresholdDenominatorToTerraform(struct!.denominator),
    denominator_alias: cdktf.stringToTerraform(struct!.denominatorAlias),
    group_by_for: cdktf.stringToTerraform(struct!.groupByFor),
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
    numerator: alertTypeDefinitionLogsRatioThresholdNumeratorToTerraform(struct!.numerator),
    numerator_alias: cdktf.stringToTerraform(struct!.numeratorAlias),
    rules: cdktf.listMapper(alertTypeDefinitionLogsRatioThresholdRulesToTerraform, false)(struct!.rules),
  }
}


export function alertTypeDefinitionLogsRatioThresholdToHclTerraform(struct?: AlertTypeDefinitionLogsRatioThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_evaluation_delay: {
      value: cdktf.numberToHclTerraform(struct!.customEvaluationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    denominator: {
      value: alertTypeDefinitionLogsRatioThresholdDenominatorToHclTerraform(struct!.denominator),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdDenominator",
    },
    denominator_alias: {
      value: cdktf.stringToHclTerraform(struct!.denominatorAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_for: {
      value: cdktf.stringToHclTerraform(struct!.groupByFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    numerator: {
      value: alertTypeDefinitionLogsRatioThresholdNumeratorToHclTerraform(struct!.numerator),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdNumerator",
    },
    numerator_alias: {
      value: cdktf.stringToHclTerraform(struct!.numeratorAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsRatioThresholdRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsRatioThresholdRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsRatioThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsRatioThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEvaluationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEvaluationDelay = this._customEvaluationDelay;
    }
    if (this._denominator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator?.internalValue;
    }
    if (this._denominatorAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominatorAlias = this._denominatorAlias;
    }
    if (this._groupByFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFor = this._groupByFor;
    }
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    if (this._numerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator?.internalValue;
    }
    if (this._numeratorAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.numeratorAlias = this._numeratorAlias;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsRatioThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = undefined;
      this._denominator.internalValue = undefined;
      this._denominatorAlias = undefined;
      this._groupByFor = undefined;
      this._notificationPayloadFilter = undefined;
      this._numerator.internalValue = undefined;
      this._numeratorAlias = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = value.customEvaluationDelay;
      this._denominator.internalValue = value.denominator;
      this._denominatorAlias = value.denominatorAlias;
      this._groupByFor = value.groupByFor;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
      this._numerator.internalValue = value.numerator;
      this._numeratorAlias = value.numeratorAlias;
      this._rules.internalValue = value.rules;
    }
  }

  // custom_evaluation_delay - computed: true, optional: true, required: false
  private _customEvaluationDelay?: number; 
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }
  public set customEvaluationDelay(value: number) {
    this._customEvaluationDelay = value;
  }
  public resetCustomEvaluationDelay() {
    this._customEvaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEvaluationDelayInput() {
    return this._customEvaluationDelay;
  }

  // denominator - computed: true, optional: true, required: false
  private _denominator = new AlertTypeDefinitionLogsRatioThresholdDenominatorOutputReference(this, "denominator");
  public get denominator() {
    return this._denominator;
  }
  public putDenominator(value: AlertTypeDefinitionLogsRatioThresholdDenominator) {
    this._denominator.internalValue = value;
  }
  public resetDenominator() {
    this._denominator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator.internalValue;
  }

  // denominator_alias - computed: false, optional: false, required: true
  private _denominatorAlias?: string; 
  public get denominatorAlias() {
    return this.getStringAttribute('denominator_alias');
  }
  public set denominatorAlias(value: string) {
    this._denominatorAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorAliasInput() {
    return this._denominatorAlias;
  }

  // group_by_for - computed: true, optional: true, required: false
  private _groupByFor?: string; 
  public get groupByFor() {
    return this.getStringAttribute('group_by_for');
  }
  public set groupByFor(value: string) {
    this._groupByFor = value;
  }
  public resetGroupByFor() {
    this._groupByFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByForInput() {
    return this._groupByFor;
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }

  // numerator - computed: true, optional: true, required: false
  private _numerator = new AlertTypeDefinitionLogsRatioThresholdNumeratorOutputReference(this, "numerator");
  public get numerator() {
    return this._numerator;
  }
  public putNumerator(value: AlertTypeDefinitionLogsRatioThresholdNumerator) {
    this._numerator.internalValue = value;
  }
  public resetNumerator() {
    this._numerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator.internalValue;
  }

  // numerator_alias - computed: false, optional: false, required: true
  private _numeratorAlias?: string; 
  public get numeratorAlias() {
    return this.getStringAttribute('numerator_alias');
  }
  public set numeratorAlias(value: string) {
    this._numeratorAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorAliasInput() {
    return this._numeratorAlias;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionLogsRatioThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionLogsRatioThresholdRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Severities. Valid values: ["Critical" "Debug" "Error" "Info" "Unspecified" "Warning"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#severities Alert#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._severities = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._severities = value.severities;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystem_name - computed: true, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#label_filters Alert#label_filters}
  */
  readonly labelFilters?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#lucene_query Alert#lucene_query}
  */
  readonly luceneQuery?: string;
}

export function alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterToTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersToTerraform(struct!.labelFilters),
    lucene_query: cdktf.stringToTerraform(struct!.luceneQuery),
  }
}


export function alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct!.labelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters",
    },
    lucene_query: {
      value: cdktf.stringToHclTerraform(struct!.luceneQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._luceneQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.luceneQuery = this._luceneQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._luceneQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._luceneQuery = value.luceneQuery;
    }
  }

  // label_filters - computed: true, optional: true, required: false
  private _labelFilters = new AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // lucene_query - computed: true, optional: true, required: false
  private _luceneQuery?: string; 
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
  public set luceneQuery(value: string) {
    this._luceneQuery = value;
  }
  public resetLuceneQuery() {
    this._luceneQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneQueryInput() {
    return this._luceneQuery;
  }
}
export interface AlertTypeDefinitionLogsThresholdLogsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#simple_filter Alert#simple_filter}
  */
  readonly simpleFilter?: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter;
}

export function alertTypeDefinitionLogsThresholdLogsFilterToTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_filter: alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterToTerraform(struct!.simpleFilter),
  }
}


export function alertTypeDefinitionLogsThresholdLogsFilterToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_filter: {
      value: alertTypeDefinitionLogsThresholdLogsFilterSimpleFilterToHclTerraform(struct!.simpleFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsThresholdLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsThresholdLogsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleFilter = this._simpleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdLogsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = value.simpleFilter;
    }
  }

  // simple_filter - computed: true, optional: true, required: false
  private _simpleFilter = new AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
  public putSimpleFilter(value: AlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter) {
    this._simpleFilter.internalValue = value;
  }
  public resetSimpleFilter() {
    this._simpleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleFilterInput() {
    return this._simpleFilter.internalValue;
  }
}
export interface AlertTypeDefinitionLogsThresholdRulesCondition {
  /**
  * Condition to evaluate the threshold with. Valid values: ["LESS_THAN" "MORE_THAN"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition_type Alert#condition_type}
  */
  readonly conditionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold: number;
  /**
  * Time window to evaluate the threshold with. Valid values: ["10_MINUTES" "12_HOURS" "15_MINUTES" "1_HOUR" "20_MINUTES" "24_HOURS" "2_HOURS" "30_MINUTES" "36_HOURS" "4_HOURS" "5_MINUTES" "6_HOURS"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#time_window Alert#time_window}
  */
  readonly timeWindow: string;
}

export function alertTypeDefinitionLogsThresholdRulesConditionToTerraform(struct?: AlertTypeDefinitionLogsThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
  }
}


export function alertTypeDefinitionLogsThresholdRulesConditionToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
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
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsThresholdRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
      this._threshold = undefined;
      this._timeWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
      this._threshold = value.threshold;
      this._timeWindow = value.timeWindow;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface AlertTypeDefinitionLogsThresholdRulesOverride {
  /**
  * Alert priority. Valid values: ["P1" "P2" "P3" "P4" "P5"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#priority Alert#priority}
  */
  readonly priority?: string;
}

export function alertTypeDefinitionLogsThresholdRulesOverrideToTerraform(struct?: AlertTypeDefinitionLogsThresholdRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function alertTypeDefinitionLogsThresholdRulesOverrideToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsThresholdRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsThresholdRulesOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdRulesOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
    }
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface AlertTypeDefinitionLogsThresholdRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionLogsThresholdRulesCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#override Alert#override}
  */
  readonly override: AlertTypeDefinitionLogsThresholdRulesOverride;
}

export function alertTypeDefinitionLogsThresholdRulesToTerraform(struct?: AlertTypeDefinitionLogsThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionLogsThresholdRulesConditionToTerraform(struct!.condition),
    override: alertTypeDefinitionLogsThresholdRulesOverrideToTerraform(struct!.override),
  }
}


export function alertTypeDefinitionLogsThresholdRulesToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionLogsThresholdRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsThresholdRulesCondition",
    },
    override: {
      value: alertTypeDefinitionLogsThresholdRulesOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsThresholdRulesOverride",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsThresholdRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._override.internalValue = value.override;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionLogsThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionLogsThresholdRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // override - computed: false, optional: false, required: true
  private _override = new AlertTypeDefinitionLogsThresholdRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: AlertTypeDefinitionLogsThresholdRulesOverride) {
    this._override.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class AlertTypeDefinitionLogsThresholdRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsThresholdRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsThresholdRulesOutputReference {
    return new AlertTypeDefinitionLogsThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsThresholdUndetectedValuesManagement {
  /**
  * Auto retire timeframe. Valid values: ["10_MINUTES" "12_HOURS" "1_HOUR" "24_HOURS" "2_HOURS" "5_MINUTES" "6_HOURS" "NEVER"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#auto_retire_timeframe Alert#auto_retire_timeframe}
  */
  readonly autoRetireTimeframe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#trigger_undetected_values Alert#trigger_undetected_values}
  */
  readonly triggerUndetectedValues?: boolean | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsThresholdUndetectedValuesManagementToTerraform(struct?: AlertTypeDefinitionLogsThresholdUndetectedValuesManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_retire_timeframe: cdktf.stringToTerraform(struct!.autoRetireTimeframe),
    trigger_undetected_values: cdktf.booleanToTerraform(struct!.triggerUndetectedValues),
  }
}


export function alertTypeDefinitionLogsThresholdUndetectedValuesManagementToHclTerraform(struct?: AlertTypeDefinitionLogsThresholdUndetectedValuesManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_retire_timeframe: {
      value: cdktf.stringToHclTerraform(struct!.autoRetireTimeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_undetected_values: {
      value: cdktf.booleanToHclTerraform(struct!.triggerUndetectedValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsThresholdUndetectedValuesManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsThresholdUndetectedValuesManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRetireTimeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRetireTimeframe = this._autoRetireTimeframe;
    }
    if (this._triggerUndetectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerUndetectedValues = this._triggerUndetectedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThresholdUndetectedValuesManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRetireTimeframe = undefined;
      this._triggerUndetectedValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRetireTimeframe = value.autoRetireTimeframe;
      this._triggerUndetectedValues = value.triggerUndetectedValues;
    }
  }

  // auto_retire_timeframe - computed: true, optional: true, required: false
  private _autoRetireTimeframe?: string; 
  public get autoRetireTimeframe() {
    return this.getStringAttribute('auto_retire_timeframe');
  }
  public set autoRetireTimeframe(value: string) {
    this._autoRetireTimeframe = value;
  }
  public resetAutoRetireTimeframe() {
    this._autoRetireTimeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRetireTimeframeInput() {
    return this._autoRetireTimeframe;
  }

  // trigger_undetected_values - computed: true, optional: true, required: false
  private _triggerUndetectedValues?: boolean | cdktf.IResolvable; 
  public get triggerUndetectedValues() {
    return this.getBooleanAttribute('trigger_undetected_values');
  }
  public set triggerUndetectedValues(value: boolean | cdktf.IResolvable) {
    this._triggerUndetectedValues = value;
  }
  public resetTriggerUndetectedValues() {
    this._triggerUndetectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerUndetectedValuesInput() {
    return this._triggerUndetectedValues;
  }
}
export interface AlertTypeDefinitionLogsThreshold {
  /**
  * Delay evaluation of the rules by n milliseconds. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#custom_evaluation_delay Alert#custom_evaluation_delay}
  */
  readonly customEvaluationDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_filter Alert#logs_filter}
  */
  readonly logsFilter?: AlertTypeDefinitionLogsThresholdLogsFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionLogsThresholdRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#undetected_values_management Alert#undetected_values_management}
  */
  readonly undetectedValuesManagement?: AlertTypeDefinitionLogsThresholdUndetectedValuesManagement;
}

export function alertTypeDefinitionLogsThresholdToTerraform(struct?: AlertTypeDefinitionLogsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_evaluation_delay: cdktf.numberToTerraform(struct!.customEvaluationDelay),
    logs_filter: alertTypeDefinitionLogsThresholdLogsFilterToTerraform(struct!.logsFilter),
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
    rules: cdktf.listMapper(alertTypeDefinitionLogsThresholdRulesToTerraform, false)(struct!.rules),
    undetected_values_management: alertTypeDefinitionLogsThresholdUndetectedValuesManagementToTerraform(struct!.undetectedValuesManagement),
  }
}


export function alertTypeDefinitionLogsThresholdToHclTerraform(struct?: AlertTypeDefinitionLogsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_evaluation_delay: {
      value: cdktf.numberToHclTerraform(struct!.customEvaluationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logs_filter: {
      value: alertTypeDefinitionLogsThresholdLogsFilterToHclTerraform(struct!.logsFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsThresholdLogsFilter",
    },
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsThresholdRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsThresholdRulesList",
    },
    undetected_values_management: {
      value: alertTypeDefinitionLogsThresholdUndetectedValuesManagementToHclTerraform(struct!.undetectedValuesManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsThresholdUndetectedValuesManagement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEvaluationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEvaluationDelay = this._customEvaluationDelay;
    }
    if (this._logsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsFilter = this._logsFilter?.internalValue;
    }
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._undetectedValuesManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.undetectedValuesManagement = this._undetectedValuesManagement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = undefined;
      this._logsFilter.internalValue = undefined;
      this._notificationPayloadFilter = undefined;
      this._rules.internalValue = undefined;
      this._undetectedValuesManagement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = value.customEvaluationDelay;
      this._logsFilter.internalValue = value.logsFilter;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
      this._rules.internalValue = value.rules;
      this._undetectedValuesManagement.internalValue = value.undetectedValuesManagement;
    }
  }

  // custom_evaluation_delay - computed: true, optional: true, required: false
  private _customEvaluationDelay?: number; 
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }
  public set customEvaluationDelay(value: number) {
    this._customEvaluationDelay = value;
  }
  public resetCustomEvaluationDelay() {
    this._customEvaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEvaluationDelayInput() {
    return this._customEvaluationDelay;
  }

  // logs_filter - computed: true, optional: true, required: false
  private _logsFilter = new AlertTypeDefinitionLogsThresholdLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }
  public putLogsFilter(value: AlertTypeDefinitionLogsThresholdLogsFilter) {
    this._logsFilter.internalValue = value;
  }
  public resetLogsFilter() {
    this._logsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsFilterInput() {
    return this._logsFilter.internalValue;
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionLogsThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionLogsThresholdRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // undetected_values_management - computed: true, optional: true, required: false
  private _undetectedValuesManagement = new AlertTypeDefinitionLogsThresholdUndetectedValuesManagementOutputReference(this, "undetected_values_management");
  public get undetectedValuesManagement() {
    return this._undetectedValuesManagement;
  }
  public putUndetectedValuesManagement(value: AlertTypeDefinitionLogsThresholdUndetectedValuesManagement) {
    this._undetectedValuesManagement.internalValue = value;
  }
  public resetUndetectedValuesManagement() {
    this._undetectedValuesManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undetectedValuesManagementInput() {
    return this._undetectedValuesManagement.internalValue;
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Severities. Valid values: ["Critical" "Debug" "Error" "Info" "Unspecified" "Warning"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#severities Alert#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._severities = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._severities = value.severities;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystem_name - computed: true, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#label_filters Alert#label_filters}
  */
  readonly labelFilters?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#lucene_query Alert#lucene_query}
  */
  readonly luceneQuery?: string;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersToTerraform(struct!.labelFilters),
    lucene_query: cdktf.stringToTerraform(struct!.luceneQuery),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct!.labelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters",
    },
    lucene_query: {
      value: cdktf.stringToHclTerraform(struct!.luceneQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._luceneQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.luceneQuery = this._luceneQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._luceneQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._luceneQuery = value.luceneQuery;
    }
  }

  // label_filters - computed: true, optional: true, required: false
  private _labelFilters = new AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // lucene_query - computed: true, optional: true, required: false
  private _luceneQuery?: string; 
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
  public set luceneQuery(value: string) {
    this._luceneQuery = value;
  }
  public resetLuceneQuery() {
    this._luceneQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneQueryInput() {
    return this._luceneQuery;
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#simple_filter Alert#simple_filter}
  */
  readonly simpleFilter?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_filter: alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterToTerraform(struct!.simpleFilter),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_filter: {
      value: alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterToHclTerraform(struct!.simpleFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleFilter = this._simpleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = value.simpleFilter;
    }
  }

  // simple_filter - computed: true, optional: true, required: false
  private _simpleFilter = new AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
  public putSimpleFilter(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter) {
    this._simpleFilter.internalValue = value;
  }
  public resetSimpleFilter() {
    this._simpleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleFilterInput() {
    return this._simpleFilter.internalValue;
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition {
  /**
  * Compared to a different time frame. Valid values: ["Previous Hour" "Same Day Last Month" "Same Day Last Week" "Same Hour Last Week" "Same Hour Yesterday" "Yesterday"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#compared_to Alert#compared_to}
  */
  readonly comparedTo: string;
  /**
  * Condition . Valid values: ["LESS_THAN" "MORE_THAN"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition_type Alert#condition_type}
  */
  readonly conditionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold: number;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdRulesConditionToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compared_to: cdktf.stringToTerraform(struct!.comparedTo),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdRulesConditionToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compared_to: {
      value: cdktf.stringToHclTerraform(struct!.comparedTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
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

export class AlertTypeDefinitionLogsTimeRelativeThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparedTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparedTo = this._comparedTo;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparedTo = undefined;
      this._conditionType = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparedTo = value.comparedTo;
      this._conditionType = value.conditionType;
      this._threshold = value.threshold;
    }
  }

  // compared_to - computed: false, optional: false, required: true
  private _comparedTo?: string; 
  public get comparedTo() {
    return this.getStringAttribute('compared_to');
  }
  public set comparedTo(value: string) {
    this._comparedTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparedToInput() {
    return this._comparedTo;
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride {
  /**
  * Alert priority. Valid values: ["P1" "P2" "P3" "P4" "P5"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#priority Alert#priority}
  */
  readonly priority?: string;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
    }
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#override Alert#override}
  */
  readonly override: AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdRulesToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionLogsTimeRelativeThresholdRulesConditionToTerraform(struct!.condition),
    override: alertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideToTerraform(struct!.override),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdRulesToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionLogsTimeRelativeThresholdRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition",
    },
    override: {
      value: alertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsTimeRelativeThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._override.internalValue = value.override;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionLogsTimeRelativeThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // override - computed: false, optional: false, required: true
  private _override = new AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: AlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride) {
    this._override.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class AlertTypeDefinitionLogsTimeRelativeThresholdRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsTimeRelativeThresholdRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsTimeRelativeThresholdRulesOutputReference {
    return new AlertTypeDefinitionLogsTimeRelativeThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement {
  /**
  * Auto retire timeframe. Valid values: ["10_MINUTES" "12_HOURS" "1_HOUR" "24_HOURS" "2_HOURS" "5_MINUTES" "6_HOURS" "NEVER"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#auto_retire_timeframe Alert#auto_retire_timeframe}
  */
  readonly autoRetireTimeframe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#trigger_undetected_values Alert#trigger_undetected_values}
  */
  readonly triggerUndetectedValues?: boolean | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_retire_timeframe: cdktf.stringToTerraform(struct!.autoRetireTimeframe),
    trigger_undetected_values: cdktf.booleanToTerraform(struct!.triggerUndetectedValues),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_retire_timeframe: {
      value: cdktf.stringToHclTerraform(struct!.autoRetireTimeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_undetected_values: {
      value: cdktf.booleanToHclTerraform(struct!.triggerUndetectedValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRetireTimeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRetireTimeframe = this._autoRetireTimeframe;
    }
    if (this._triggerUndetectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerUndetectedValues = this._triggerUndetectedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRetireTimeframe = undefined;
      this._triggerUndetectedValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRetireTimeframe = value.autoRetireTimeframe;
      this._triggerUndetectedValues = value.triggerUndetectedValues;
    }
  }

  // auto_retire_timeframe - computed: true, optional: true, required: false
  private _autoRetireTimeframe?: string; 
  public get autoRetireTimeframe() {
    return this.getStringAttribute('auto_retire_timeframe');
  }
  public set autoRetireTimeframe(value: string) {
    this._autoRetireTimeframe = value;
  }
  public resetAutoRetireTimeframe() {
    this._autoRetireTimeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRetireTimeframeInput() {
    return this._autoRetireTimeframe;
  }

  // trigger_undetected_values - computed: true, optional: true, required: false
  private _triggerUndetectedValues?: boolean | cdktf.IResolvable; 
  public get triggerUndetectedValues() {
    return this.getBooleanAttribute('trigger_undetected_values');
  }
  public set triggerUndetectedValues(value: boolean | cdktf.IResolvable) {
    this._triggerUndetectedValues = value;
  }
  public resetTriggerUndetectedValues() {
    this._triggerUndetectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerUndetectedValuesInput() {
    return this._triggerUndetectedValues;
  }
}
export interface AlertTypeDefinitionLogsTimeRelativeThreshold {
  /**
  * Delay evaluation of the rules by n milliseconds. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#custom_evaluation_delay Alert#custom_evaluation_delay}
  */
  readonly customEvaluationDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_filter Alert#logs_filter}
  */
  readonly logsFilter?: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionLogsTimeRelativeThresholdRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#undetected_values_management Alert#undetected_values_management}
  */
  readonly undetectedValuesManagement?: AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement;
}

export function alertTypeDefinitionLogsTimeRelativeThresholdToTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_evaluation_delay: cdktf.numberToTerraform(struct!.customEvaluationDelay),
    logs_filter: alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterToTerraform(struct!.logsFilter),
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
    rules: cdktf.listMapper(alertTypeDefinitionLogsTimeRelativeThresholdRulesToTerraform, false)(struct!.rules),
    undetected_values_management: alertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementToTerraform(struct!.undetectedValuesManagement),
  }
}


export function alertTypeDefinitionLogsTimeRelativeThresholdToHclTerraform(struct?: AlertTypeDefinitionLogsTimeRelativeThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_evaluation_delay: {
      value: cdktf.numberToHclTerraform(struct!.customEvaluationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logs_filter: {
      value: alertTypeDefinitionLogsTimeRelativeThresholdLogsFilterToHclTerraform(struct!.logsFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter",
    },
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsTimeRelativeThresholdRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdRulesList",
    },
    undetected_values_management: {
      value: alertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementToHclTerraform(struct!.undetectedValuesManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsTimeRelativeThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsTimeRelativeThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEvaluationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEvaluationDelay = this._customEvaluationDelay;
    }
    if (this._logsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsFilter = this._logsFilter?.internalValue;
    }
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._undetectedValuesManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.undetectedValuesManagement = this._undetectedValuesManagement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsTimeRelativeThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = undefined;
      this._logsFilter.internalValue = undefined;
      this._notificationPayloadFilter = undefined;
      this._rules.internalValue = undefined;
      this._undetectedValuesManagement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = value.customEvaluationDelay;
      this._logsFilter.internalValue = value.logsFilter;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
      this._rules.internalValue = value.rules;
      this._undetectedValuesManagement.internalValue = value.undetectedValuesManagement;
    }
  }

  // custom_evaluation_delay - computed: true, optional: true, required: false
  private _customEvaluationDelay?: number; 
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }
  public set customEvaluationDelay(value: number) {
    this._customEvaluationDelay = value;
  }
  public resetCustomEvaluationDelay() {
    this._customEvaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEvaluationDelayInput() {
    return this._customEvaluationDelay;
  }

  // logs_filter - computed: true, optional: true, required: false
  private _logsFilter = new AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }
  public putLogsFilter(value: AlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter) {
    this._logsFilter.internalValue = value;
  }
  public resetLogsFilter() {
    this._logsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsFilterInput() {
    return this._logsFilter.internalValue;
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionLogsTimeRelativeThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionLogsTimeRelativeThresholdRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // undetected_values_management - computed: true, optional: true, required: false
  private _undetectedValuesManagement = new AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementOutputReference(this, "undetected_values_management");
  public get undetectedValuesManagement() {
    return this._undetectedValuesManagement;
  }
  public putUndetectedValuesManagement(value: AlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement) {
    this._undetectedValuesManagement.internalValue = value;
  }
  public resetUndetectedValuesManagement() {
    this._undetectedValuesManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undetectedValuesManagementInput() {
    return this._undetectedValuesManagement.internalValue;
  }
}
export interface AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "STARTS_WITH"].'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#value Alert#value}
  */
  readonly value: string;
}

export function alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
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

export class AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Severities. Valid values: ["Critical" "Debug" "Error" "Info" "Unspecified" "Warning"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#severities Alert#severities}
  */
  readonly severities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._severities = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._severities = value.severities;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystem_name - computed: true, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#label_filters Alert#label_filters}
  */
  readonly labelFilters?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#lucene_query Alert#lucene_query}
  */
  readonly luceneQuery?: string;
}

export function alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterToTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_filters: alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersToTerraform(struct!.labelFilters),
    lucene_query: cdktf.stringToTerraform(struct!.luceneQuery),
  }
}


export function alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterToHclTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_filters: {
      value: alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct!.labelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters",
    },
    lucene_query: {
      value: cdktf.stringToHclTerraform(struct!.luceneQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilters = this._labelFilters?.internalValue;
    }
    if (this._luceneQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.luceneQuery = this._luceneQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = undefined;
      this._luceneQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelFilters.internalValue = value.labelFilters;
      this._luceneQuery = value.luceneQuery;
    }
  }

  // label_filters - computed: true, optional: true, required: false
  private _labelFilters = new AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }
  public putLabelFilters(value: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters) {
    this._labelFilters.internalValue = value;
  }
  public resetLabelFilters() {
    this._labelFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFiltersInput() {
    return this._labelFilters.internalValue;
  }

  // lucene_query - computed: true, optional: true, required: false
  private _luceneQuery?: string; 
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
  public set luceneQuery(value: string) {
    this._luceneQuery = value;
  }
  public resetLuceneQuery() {
    this._luceneQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneQueryInput() {
    return this._luceneQuery;
  }
}
export interface AlertTypeDefinitionLogsUniqueCountLogsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#simple_filter Alert#simple_filter}
  */
  readonly simpleFilter?: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter;
}

export function alertTypeDefinitionLogsUniqueCountLogsFilterToTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_filter: alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterToTerraform(struct!.simpleFilter),
  }
}


export function alertTypeDefinitionLogsUniqueCountLogsFilterToHclTerraform(struct?: AlertTypeDefinitionLogsUniqueCountLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_filter: {
      value: alertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterToHclTerraform(struct!.simpleFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsUniqueCountLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsUniqueCountLogsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleFilter = this._simpleFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsUniqueCountLogsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleFilter.internalValue = value.simpleFilter;
    }
  }

  // simple_filter - computed: true, optional: true, required: false
  private _simpleFilter = new AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
  public putSimpleFilter(value: AlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter) {
    this._simpleFilter.internalValue = value;
  }
  public resetSimpleFilter() {
    this._simpleFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleFilterInput() {
    return this._simpleFilter.internalValue;
  }
}
export interface AlertTypeDefinitionLogsUniqueCountRulesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#max_unique_count Alert#max_unique_count}
  */
  readonly maxUniqueCount: number;
  /**
  * Time window to evaluate the threshold with. Valid values: ["10_MINUTES" "12_HOURS" "15_MINUTES" "1_HOUR" "1_MINUTE" "20_MINUTES" "24_HOURS" "2_HOURS" "30_MINUTES" "36_HOURS" "4_HOURS" "5_MINUTES" "6_HOURS"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#time_window Alert#time_window}
  */
  readonly timeWindow: string;
}

export function alertTypeDefinitionLogsUniqueCountRulesConditionToTerraform(struct?: AlertTypeDefinitionLogsUniqueCountRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unique_count: cdktf.numberToTerraform(struct!.maxUniqueCount),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
  }
}


export function alertTypeDefinitionLogsUniqueCountRulesConditionToHclTerraform(struct?: AlertTypeDefinitionLogsUniqueCountRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unique_count: {
      value: cdktf.numberToHclTerraform(struct!.maxUniqueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsUniqueCountRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsUniqueCountRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUniqueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUniqueCount = this._maxUniqueCount;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsUniqueCountRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUniqueCount = undefined;
      this._timeWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUniqueCount = value.maxUniqueCount;
      this._timeWindow = value.timeWindow;
    }
  }

  // max_unique_count - computed: false, optional: false, required: true
  private _maxUniqueCount?: number; 
  public get maxUniqueCount() {
    return this.getNumberAttribute('max_unique_count');
  }
  public set maxUniqueCount(value: number) {
    this._maxUniqueCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUniqueCountInput() {
    return this._maxUniqueCount;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface AlertTypeDefinitionLogsUniqueCountRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionLogsUniqueCountRulesCondition;
}

export function alertTypeDefinitionLogsUniqueCountRulesToTerraform(struct?: AlertTypeDefinitionLogsUniqueCountRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionLogsUniqueCountRulesConditionToTerraform(struct!.condition),
  }
}


export function alertTypeDefinitionLogsUniqueCountRulesToHclTerraform(struct?: AlertTypeDefinitionLogsUniqueCountRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionLogsUniqueCountRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsUniqueCountRulesCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsUniqueCountRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionLogsUniqueCountRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsUniqueCountRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionLogsUniqueCountRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionLogsUniqueCountRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class AlertTypeDefinitionLogsUniqueCountRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionLogsUniqueCountRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionLogsUniqueCountRulesOutputReference {
    return new AlertTypeDefinitionLogsUniqueCountRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionLogsUniqueCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_filter Alert#logs_filter}
  */
  readonly logsFilter?: AlertTypeDefinitionLogsUniqueCountLogsFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#max_unique_count_per_group_by_key Alert#max_unique_count_per_group_by_key}
  */
  readonly maxUniqueCountPerGroupByKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionLogsUniqueCountRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#unique_count_keypath Alert#unique_count_keypath}
  */
  readonly uniqueCountKeypath: string;
}

export function alertTypeDefinitionLogsUniqueCountToTerraform(struct?: AlertTypeDefinitionLogsUniqueCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs_filter: alertTypeDefinitionLogsUniqueCountLogsFilterToTerraform(struct!.logsFilter),
    max_unique_count_per_group_by_key: cdktf.numberToTerraform(struct!.maxUniqueCountPerGroupByKey),
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
    rules: cdktf.listMapper(alertTypeDefinitionLogsUniqueCountRulesToTerraform, false)(struct!.rules),
    unique_count_keypath: cdktf.stringToTerraform(struct!.uniqueCountKeypath),
  }
}


export function alertTypeDefinitionLogsUniqueCountToHclTerraform(struct?: AlertTypeDefinitionLogsUniqueCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logs_filter: {
      value: alertTypeDefinitionLogsUniqueCountLogsFilterToHclTerraform(struct!.logsFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsUniqueCountLogsFilter",
    },
    max_unique_count_per_group_by_key: {
      value: cdktf.numberToHclTerraform(struct!.maxUniqueCountPerGroupByKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionLogsUniqueCountRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionLogsUniqueCountRulesList",
    },
    unique_count_keypath: {
      value: cdktf.stringToHclTerraform(struct!.uniqueCountKeypath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionLogsUniqueCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionLogsUniqueCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsFilter = this._logsFilter?.internalValue;
    }
    if (this._maxUniqueCountPerGroupByKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUniqueCountPerGroupByKey = this._maxUniqueCountPerGroupByKey;
    }
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._uniqueCountKeypath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueCountKeypath = this._uniqueCountKeypath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionLogsUniqueCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logsFilter.internalValue = undefined;
      this._maxUniqueCountPerGroupByKey = undefined;
      this._notificationPayloadFilter = undefined;
      this._rules.internalValue = undefined;
      this._uniqueCountKeypath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logsFilter.internalValue = value.logsFilter;
      this._maxUniqueCountPerGroupByKey = value.maxUniqueCountPerGroupByKey;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
      this._rules.internalValue = value.rules;
      this._uniqueCountKeypath = value.uniqueCountKeypath;
    }
  }

  // logs_filter - computed: true, optional: true, required: false
  private _logsFilter = new AlertTypeDefinitionLogsUniqueCountLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }
  public putLogsFilter(value: AlertTypeDefinitionLogsUniqueCountLogsFilter) {
    this._logsFilter.internalValue = value;
  }
  public resetLogsFilter() {
    this._logsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsFilterInput() {
    return this._logsFilter.internalValue;
  }

  // max_unique_count_per_group_by_key - computed: false, optional: true, required: false
  private _maxUniqueCountPerGroupByKey?: number; 
  public get maxUniqueCountPerGroupByKey() {
    return this.getNumberAttribute('max_unique_count_per_group_by_key');
  }
  public set maxUniqueCountPerGroupByKey(value: number) {
    this._maxUniqueCountPerGroupByKey = value;
  }
  public resetMaxUniqueCountPerGroupByKey() {
    this._maxUniqueCountPerGroupByKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUniqueCountPerGroupByKeyInput() {
    return this._maxUniqueCountPerGroupByKey;
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionLogsUniqueCountRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionLogsUniqueCountRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // unique_count_keypath - computed: false, optional: false, required: true
  private _uniqueCountKeypath?: string; 
  public get uniqueCountKeypath() {
    return this.getStringAttribute('unique_count_keypath');
  }
  public set uniqueCountKeypath(value: string) {
    this._uniqueCountKeypath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueCountKeypathInput() {
    return this._uniqueCountKeypath;
  }
}
export interface AlertTypeDefinitionMetricAnomalyMetricFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#promql Alert#promql}
  */
  readonly promql: string;
}

export function alertTypeDefinitionMetricAnomalyMetricFilterToTerraform(struct?: AlertTypeDefinitionMetricAnomalyMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function alertTypeDefinitionMetricAnomalyMetricFilterToHclTerraform(struct?: AlertTypeDefinitionMetricAnomalyMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricAnomalyMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricAnomalyMetricFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricAnomalyMetricFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}
export interface AlertTypeDefinitionMetricAnomalyRulesCondition {
  /**
  * Condition to evaluate the threshold with. Valid values: ["LESS_THAN" "MORE_THAN"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition_type Alert#condition_type}
  */
  readonly conditionType: string;
  /**
  * Percentage of metrics over the threshold. 0 means 'for at least once', 100 means 'for at least'. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#for_over_pct Alert#for_over_pct}
  */
  readonly forOverPct: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#min_non_null_values_pct Alert#min_non_null_values_pct}
  */
  readonly minNonNullValuesPct: number;
  /**
  * Time window to evaluate the threshold with. Valid values: ["10_MINUTES" "12_HOURS" "15_MINUTES" "1_HOUR" "1_MINUTE" "20_MINUTES" "24_HOURS" "2_HOURS" "30_MINUTES" "36_HOURS" "4_HOURS" "5_MINUTES" "6_HOURS"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#of_the_last Alert#of_the_last}
  */
  readonly ofTheLast: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold: number;
}

export function alertTypeDefinitionMetricAnomalyRulesConditionToTerraform(struct?: AlertTypeDefinitionMetricAnomalyRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    for_over_pct: cdktf.numberToTerraform(struct!.forOverPct),
    min_non_null_values_pct: cdktf.numberToTerraform(struct!.minNonNullValuesPct),
    of_the_last: cdktf.stringToTerraform(struct!.ofTheLast),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function alertTypeDefinitionMetricAnomalyRulesConditionToHclTerraform(struct?: AlertTypeDefinitionMetricAnomalyRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for_over_pct: {
      value: cdktf.numberToHclTerraform(struct!.forOverPct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_non_null_values_pct: {
      value: cdktf.numberToHclTerraform(struct!.minNonNullValuesPct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    of_the_last: {
      value: cdktf.stringToHclTerraform(struct!.ofTheLast),
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

export class AlertTypeDefinitionMetricAnomalyRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricAnomalyRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._forOverPct !== undefined) {
      hasAnyValues = true;
      internalValueResult.forOverPct = this._forOverPct;
    }
    if (this._minNonNullValuesPct !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNonNullValuesPct = this._minNonNullValuesPct;
    }
    if (this._ofTheLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofTheLast = this._ofTheLast;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricAnomalyRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
      this._forOverPct = undefined;
      this._minNonNullValuesPct = undefined;
      this._ofTheLast = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
      this._forOverPct = value.forOverPct;
      this._minNonNullValuesPct = value.minNonNullValuesPct;
      this._ofTheLast = value.ofTheLast;
      this._threshold = value.threshold;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // for_over_pct - computed: false, optional: false, required: true
  private _forOverPct?: number; 
  public get forOverPct() {
    return this.getNumberAttribute('for_over_pct');
  }
  public set forOverPct(value: number) {
    this._forOverPct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forOverPctInput() {
    return this._forOverPct;
  }

  // min_non_null_values_pct - computed: false, optional: false, required: true
  private _minNonNullValuesPct?: number; 
  public get minNonNullValuesPct() {
    return this.getNumberAttribute('min_non_null_values_pct');
  }
  public set minNonNullValuesPct(value: number) {
    this._minNonNullValuesPct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNonNullValuesPctInput() {
    return this._minNonNullValuesPct;
  }

  // of_the_last - computed: false, optional: false, required: true
  private _ofTheLast?: string; 
  public get ofTheLast() {
    return this.getStringAttribute('of_the_last');
  }
  public set ofTheLast(value: string) {
    this._ofTheLast = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ofTheLastInput() {
    return this._ofTheLast;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AlertTypeDefinitionMetricAnomalyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionMetricAnomalyRulesCondition;
}

export function alertTypeDefinitionMetricAnomalyRulesToTerraform(struct?: AlertTypeDefinitionMetricAnomalyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionMetricAnomalyRulesConditionToTerraform(struct!.condition),
  }
}


export function alertTypeDefinitionMetricAnomalyRulesToHclTerraform(struct?: AlertTypeDefinitionMetricAnomalyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionMetricAnomalyRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricAnomalyRulesCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricAnomalyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionMetricAnomalyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricAnomalyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionMetricAnomalyRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionMetricAnomalyRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class AlertTypeDefinitionMetricAnomalyRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionMetricAnomalyRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionMetricAnomalyRulesOutputReference {
    return new AlertTypeDefinitionMetricAnomalyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionMetricAnomaly {
  /**
  * Delay evaluation of the rules by n milliseconds. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#custom_evaluation_delay Alert#custom_evaluation_delay}
  */
  readonly customEvaluationDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#metric_filter Alert#metric_filter}
  */
  readonly metricFilter: AlertTypeDefinitionMetricAnomalyMetricFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionMetricAnomalyRules[] | cdktf.IResolvable;
}

export function alertTypeDefinitionMetricAnomalyToTerraform(struct?: AlertTypeDefinitionMetricAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_evaluation_delay: cdktf.numberToTerraform(struct!.customEvaluationDelay),
    metric_filter: alertTypeDefinitionMetricAnomalyMetricFilterToTerraform(struct!.metricFilter),
    rules: cdktf.listMapper(alertTypeDefinitionMetricAnomalyRulesToTerraform, false)(struct!.rules),
  }
}


export function alertTypeDefinitionMetricAnomalyToHclTerraform(struct?: AlertTypeDefinitionMetricAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_evaluation_delay: {
      value: cdktf.numberToHclTerraform(struct!.customEvaluationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_filter: {
      value: alertTypeDefinitionMetricAnomalyMetricFilterToHclTerraform(struct!.metricFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricAnomalyMetricFilter",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionMetricAnomalyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionMetricAnomalyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricAnomaly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEvaluationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEvaluationDelay = this._customEvaluationDelay;
    }
    if (this._metricFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricFilter = this._metricFilter?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricAnomaly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = undefined;
      this._metricFilter.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = value.customEvaluationDelay;
      this._metricFilter.internalValue = value.metricFilter;
      this._rules.internalValue = value.rules;
    }
  }

  // custom_evaluation_delay - computed: true, optional: true, required: false
  private _customEvaluationDelay?: number; 
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }
  public set customEvaluationDelay(value: number) {
    this._customEvaluationDelay = value;
  }
  public resetCustomEvaluationDelay() {
    this._customEvaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEvaluationDelayInput() {
    return this._customEvaluationDelay;
  }

  // metric_filter - computed: false, optional: false, required: true
  private _metricFilter = new AlertTypeDefinitionMetricAnomalyMetricFilterOutputReference(this, "metric_filter");
  public get metricFilter() {
    return this._metricFilter;
  }
  public putMetricFilter(value: AlertTypeDefinitionMetricAnomalyMetricFilter) {
    this._metricFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFilterInput() {
    return this._metricFilter.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionMetricAnomalyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionMetricAnomalyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface AlertTypeDefinitionMetricThresholdMetricFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#promql Alert#promql}
  */
  readonly promql: string;
}

export function alertTypeDefinitionMetricThresholdMetricFilterToTerraform(struct?: AlertTypeDefinitionMetricThresholdMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function alertTypeDefinitionMetricThresholdMetricFilterToHclTerraform(struct?: AlertTypeDefinitionMetricThresholdMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricThresholdMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricThresholdMetricFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricThresholdMetricFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}
export interface AlertTypeDefinitionMetricThresholdMissingValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#min_non_null_values_pct Alert#min_non_null_values_pct}
  */
  readonly minNonNullValuesPct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#replace_with_zero Alert#replace_with_zero}
  */
  readonly replaceWithZero?: boolean | cdktf.IResolvable;
}

export function alertTypeDefinitionMetricThresholdMissingValuesToTerraform(struct?: AlertTypeDefinitionMetricThresholdMissingValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_non_null_values_pct: cdktf.numberToTerraform(struct!.minNonNullValuesPct),
    replace_with_zero: cdktf.booleanToTerraform(struct!.replaceWithZero),
  }
}


export function alertTypeDefinitionMetricThresholdMissingValuesToHclTerraform(struct?: AlertTypeDefinitionMetricThresholdMissingValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_non_null_values_pct: {
      value: cdktf.numberToHclTerraform(struct!.minNonNullValuesPct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replace_with_zero: {
      value: cdktf.booleanToHclTerraform(struct!.replaceWithZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricThresholdMissingValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricThresholdMissingValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minNonNullValuesPct !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNonNullValuesPct = this._minNonNullValuesPct;
    }
    if (this._replaceWithZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceWithZero = this._replaceWithZero;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricThresholdMissingValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minNonNullValuesPct = undefined;
      this._replaceWithZero = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minNonNullValuesPct = value.minNonNullValuesPct;
      this._replaceWithZero = value.replaceWithZero;
    }
  }

  // min_non_null_values_pct - computed: false, optional: true, required: false
  private _minNonNullValuesPct?: number; 
  public get minNonNullValuesPct() {
    return this.getNumberAttribute('min_non_null_values_pct');
  }
  public set minNonNullValuesPct(value: number) {
    this._minNonNullValuesPct = value;
  }
  public resetMinNonNullValuesPct() {
    this._minNonNullValuesPct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNonNullValuesPctInput() {
    return this._minNonNullValuesPct;
  }

  // replace_with_zero - computed: false, optional: true, required: false
  private _replaceWithZero?: boolean | cdktf.IResolvable; 
  public get replaceWithZero() {
    return this.getBooleanAttribute('replace_with_zero');
  }
  public set replaceWithZero(value: boolean | cdktf.IResolvable) {
    this._replaceWithZero = value;
  }
  public resetReplaceWithZero() {
    this._replaceWithZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithZeroInput() {
    return this._replaceWithZero;
  }
}
export interface AlertTypeDefinitionMetricThresholdRulesCondition {
  /**
  * Condition to evaluate the threshold with. Valid values: ["LESS_THAN" "LESS_THAN_OR_EQUALS" "MORE_THAN" "MORE_THAN_OR_EQUALS"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition_type Alert#condition_type}
  */
  readonly conditionType: string;
  /**
  * Percentage of metrics over the threshold. 0 means 'for at least once', 100 means 'for at least'. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#for_over_pct Alert#for_over_pct}
  */
  readonly forOverPct: number;
  /**
  * Time window to evaluate the threshold with. Valid values: ["10_MINUTES" "12_HOURS" "15_MINUTES" "1_HOUR" "1_MINUTE" "20_MINUTES" "24_HOURS" "2_HOURS" "30_MINUTES" "36_HOURS" "4_HOURS" "5_MINUTES" "6_HOURS"].
  * Or having valid time duration - Supported units: y, w, d, h, m, s, ms.
  * Examples: `30s`, `1m`, `1h20m15s`, `15d`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#of_the_last Alert#of_the_last}
  */
  readonly ofTheLast: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold: number;
}

export function alertTypeDefinitionMetricThresholdRulesConditionToTerraform(struct?: AlertTypeDefinitionMetricThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    for_over_pct: cdktf.numberToTerraform(struct!.forOverPct),
    of_the_last: cdktf.stringToTerraform(struct!.ofTheLast),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function alertTypeDefinitionMetricThresholdRulesConditionToHclTerraform(struct?: AlertTypeDefinitionMetricThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for_over_pct: {
      value: cdktf.numberToHclTerraform(struct!.forOverPct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    of_the_last: {
      value: cdktf.stringToHclTerraform(struct!.ofTheLast),
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

export class AlertTypeDefinitionMetricThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricThresholdRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._forOverPct !== undefined) {
      hasAnyValues = true;
      internalValueResult.forOverPct = this._forOverPct;
    }
    if (this._ofTheLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofTheLast = this._ofTheLast;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricThresholdRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
      this._forOverPct = undefined;
      this._ofTheLast = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
      this._forOverPct = value.forOverPct;
      this._ofTheLast = value.ofTheLast;
      this._threshold = value.threshold;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // for_over_pct - computed: false, optional: false, required: true
  private _forOverPct?: number; 
  public get forOverPct() {
    return this.getNumberAttribute('for_over_pct');
  }
  public set forOverPct(value: number) {
    this._forOverPct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forOverPctInput() {
    return this._forOverPct;
  }

  // of_the_last - computed: false, optional: false, required: true
  private _ofTheLast?: string; 
  public get ofTheLast() {
    return this.getStringAttribute('of_the_last');
  }
  public set ofTheLast(value: string) {
    this._ofTheLast = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ofTheLastInput() {
    return this._ofTheLast;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AlertTypeDefinitionMetricThresholdRulesOverride {
  /**
  * Alert priority. Valid values: ["P1" "P2" "P3" "P4" "P5"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#priority Alert#priority}
  */
  readonly priority?: string;
}

export function alertTypeDefinitionMetricThresholdRulesOverrideToTerraform(struct?: AlertTypeDefinitionMetricThresholdRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function alertTypeDefinitionMetricThresholdRulesOverrideToHclTerraform(struct?: AlertTypeDefinitionMetricThresholdRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricThresholdRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricThresholdRulesOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricThresholdRulesOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
    }
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface AlertTypeDefinitionMetricThresholdRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionMetricThresholdRulesCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#override Alert#override}
  */
  readonly override: AlertTypeDefinitionMetricThresholdRulesOverride;
}

export function alertTypeDefinitionMetricThresholdRulesToTerraform(struct?: AlertTypeDefinitionMetricThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionMetricThresholdRulesConditionToTerraform(struct!.condition),
    override: alertTypeDefinitionMetricThresholdRulesOverrideToTerraform(struct!.override),
  }
}


export function alertTypeDefinitionMetricThresholdRulesToHclTerraform(struct?: AlertTypeDefinitionMetricThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionMetricThresholdRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricThresholdRulesCondition",
    },
    override: {
      value: alertTypeDefinitionMetricThresholdRulesOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricThresholdRulesOverride",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionMetricThresholdRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricThresholdRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._override.internalValue = value.override;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionMetricThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionMetricThresholdRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // override - computed: false, optional: false, required: true
  private _override = new AlertTypeDefinitionMetricThresholdRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: AlertTypeDefinitionMetricThresholdRulesOverride) {
    this._override.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class AlertTypeDefinitionMetricThresholdRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionMetricThresholdRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionMetricThresholdRulesOutputReference {
    return new AlertTypeDefinitionMetricThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionMetricThresholdUndetectedValuesManagement {
  /**
  * Auto retire timeframe. Valid values: ["10_MINUTES" "12_HOURS" "1_HOUR" "24_HOURS" "2_HOURS" "5_MINUTES" "6_HOURS" "NEVER"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#auto_retire_timeframe Alert#auto_retire_timeframe}
  */
  readonly autoRetireTimeframe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#trigger_undetected_values Alert#trigger_undetected_values}
  */
  readonly triggerUndetectedValues?: boolean | cdktf.IResolvable;
}

export function alertTypeDefinitionMetricThresholdUndetectedValuesManagementToTerraform(struct?: AlertTypeDefinitionMetricThresholdUndetectedValuesManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_retire_timeframe: cdktf.stringToTerraform(struct!.autoRetireTimeframe),
    trigger_undetected_values: cdktf.booleanToTerraform(struct!.triggerUndetectedValues),
  }
}


export function alertTypeDefinitionMetricThresholdUndetectedValuesManagementToHclTerraform(struct?: AlertTypeDefinitionMetricThresholdUndetectedValuesManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_retire_timeframe: {
      value: cdktf.stringToHclTerraform(struct!.autoRetireTimeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_undetected_values: {
      value: cdktf.booleanToHclTerraform(struct!.triggerUndetectedValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricThresholdUndetectedValuesManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricThresholdUndetectedValuesManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRetireTimeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRetireTimeframe = this._autoRetireTimeframe;
    }
    if (this._triggerUndetectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerUndetectedValues = this._triggerUndetectedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricThresholdUndetectedValuesManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRetireTimeframe = undefined;
      this._triggerUndetectedValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRetireTimeframe = value.autoRetireTimeframe;
      this._triggerUndetectedValues = value.triggerUndetectedValues;
    }
  }

  // auto_retire_timeframe - computed: true, optional: true, required: false
  private _autoRetireTimeframe?: string; 
  public get autoRetireTimeframe() {
    return this.getStringAttribute('auto_retire_timeframe');
  }
  public set autoRetireTimeframe(value: string) {
    this._autoRetireTimeframe = value;
  }
  public resetAutoRetireTimeframe() {
    this._autoRetireTimeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRetireTimeframeInput() {
    return this._autoRetireTimeframe;
  }

  // trigger_undetected_values - computed: true, optional: true, required: false
  private _triggerUndetectedValues?: boolean | cdktf.IResolvable; 
  public get triggerUndetectedValues() {
    return this.getBooleanAttribute('trigger_undetected_values');
  }
  public set triggerUndetectedValues(value: boolean | cdktf.IResolvable) {
    this._triggerUndetectedValues = value;
  }
  public resetTriggerUndetectedValues() {
    this._triggerUndetectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerUndetectedValuesInput() {
    return this._triggerUndetectedValues;
  }
}
export interface AlertTypeDefinitionMetricThreshold {
  /**
  * Delay evaluation of the rules by n milliseconds. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#custom_evaluation_delay Alert#custom_evaluation_delay}
  */
  readonly customEvaluationDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#metric_filter Alert#metric_filter}
  */
  readonly metricFilter: AlertTypeDefinitionMetricThresholdMetricFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#missing_values Alert#missing_values}
  */
  readonly missingValues: AlertTypeDefinitionMetricThresholdMissingValues;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionMetricThresholdRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#undetected_values_management Alert#undetected_values_management}
  */
  readonly undetectedValuesManagement?: AlertTypeDefinitionMetricThresholdUndetectedValuesManagement;
}

export function alertTypeDefinitionMetricThresholdToTerraform(struct?: AlertTypeDefinitionMetricThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_evaluation_delay: cdktf.numberToTerraform(struct!.customEvaluationDelay),
    metric_filter: alertTypeDefinitionMetricThresholdMetricFilterToTerraform(struct!.metricFilter),
    missing_values: alertTypeDefinitionMetricThresholdMissingValuesToTerraform(struct!.missingValues),
    rules: cdktf.listMapper(alertTypeDefinitionMetricThresholdRulesToTerraform, false)(struct!.rules),
    undetected_values_management: alertTypeDefinitionMetricThresholdUndetectedValuesManagementToTerraform(struct!.undetectedValuesManagement),
  }
}


export function alertTypeDefinitionMetricThresholdToHclTerraform(struct?: AlertTypeDefinitionMetricThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_evaluation_delay: {
      value: cdktf.numberToHclTerraform(struct!.customEvaluationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_filter: {
      value: alertTypeDefinitionMetricThresholdMetricFilterToHclTerraform(struct!.metricFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricThresholdMetricFilter",
    },
    missing_values: {
      value: alertTypeDefinitionMetricThresholdMissingValuesToHclTerraform(struct!.missingValues),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricThresholdMissingValues",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionMetricThresholdRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionMetricThresholdRulesList",
    },
    undetected_values_management: {
      value: alertTypeDefinitionMetricThresholdUndetectedValuesManagementToHclTerraform(struct!.undetectedValuesManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricThresholdUndetectedValuesManagement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionMetricThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionMetricThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEvaluationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEvaluationDelay = this._customEvaluationDelay;
    }
    if (this._metricFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricFilter = this._metricFilter?.internalValue;
    }
    if (this._missingValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingValues = this._missingValues?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._undetectedValuesManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.undetectedValuesManagement = this._undetectedValuesManagement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionMetricThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = undefined;
      this._metricFilter.internalValue = undefined;
      this._missingValues.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._undetectedValuesManagement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEvaluationDelay = value.customEvaluationDelay;
      this._metricFilter.internalValue = value.metricFilter;
      this._missingValues.internalValue = value.missingValues;
      this._rules.internalValue = value.rules;
      this._undetectedValuesManagement.internalValue = value.undetectedValuesManagement;
    }
  }

  // custom_evaluation_delay - computed: true, optional: true, required: false
  private _customEvaluationDelay?: number; 
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }
  public set customEvaluationDelay(value: number) {
    this._customEvaluationDelay = value;
  }
  public resetCustomEvaluationDelay() {
    this._customEvaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEvaluationDelayInput() {
    return this._customEvaluationDelay;
  }

  // metric_filter - computed: false, optional: false, required: true
  private _metricFilter = new AlertTypeDefinitionMetricThresholdMetricFilterOutputReference(this, "metric_filter");
  public get metricFilter() {
    return this._metricFilter;
  }
  public putMetricFilter(value: AlertTypeDefinitionMetricThresholdMetricFilter) {
    this._metricFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFilterInput() {
    return this._metricFilter.internalValue;
  }

  // missing_values - computed: false, optional: false, required: true
  private _missingValues = new AlertTypeDefinitionMetricThresholdMissingValuesOutputReference(this, "missing_values");
  public get missingValues() {
    return this._missingValues;
  }
  public putMissingValues(value: AlertTypeDefinitionMetricThresholdMissingValues) {
    this._missingValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get missingValuesInput() {
    return this._missingValues.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionMetricThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionMetricThresholdRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // undetected_values_management - computed: true, optional: true, required: false
  private _undetectedValuesManagement = new AlertTypeDefinitionMetricThresholdUndetectedValuesManagementOutputReference(this, "undetected_values_management");
  public get undetectedValuesManagement() {
    return this._undetectedValuesManagement;
  }
  public putUndetectedValuesManagement(value: AlertTypeDefinitionMetricThresholdUndetectedValuesManagement) {
    this._undetectedValuesManagement.internalValue = value;
  }
  public resetUndetectedValuesManagement() {
    this._undetectedValuesManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undetectedValuesManagementInput() {
    return this._undetectedValuesManagement.internalValue;
  }
}
export interface AlertTypeDefinitionSloThresholdBurnRateDualTimeDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#duration Alert#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#unit Alert#unit}
  */
  readonly unit: string;
}

export function alertTypeDefinitionSloThresholdBurnRateDualTimeDurationToTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateDualTimeDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function alertTypeDefinitionSloThresholdBurnRateDualTimeDurationToHclTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateDualTimeDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdBurnRateDualTimeDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdBurnRateDualTimeDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdBurnRateDualTimeDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface AlertTypeDefinitionSloThresholdBurnRateDual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#time_duration Alert#time_duration}
  */
  readonly timeDuration: AlertTypeDefinitionSloThresholdBurnRateDualTimeDuration;
}

export function alertTypeDefinitionSloThresholdBurnRateDualToTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateDual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_duration: alertTypeDefinitionSloThresholdBurnRateDualTimeDurationToTerraform(struct!.timeDuration),
  }
}


export function alertTypeDefinitionSloThresholdBurnRateDualToHclTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateDual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_duration: {
      value: alertTypeDefinitionSloThresholdBurnRateDualTimeDurationToHclTerraform(struct!.timeDuration),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdBurnRateDualTimeDuration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdBurnRateDualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdBurnRateDual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeDuration = this._timeDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdBurnRateDual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeDuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeDuration.internalValue = value.timeDuration;
    }
  }

  // time_duration - computed: false, optional: false, required: true
  private _timeDuration = new AlertTypeDefinitionSloThresholdBurnRateDualTimeDurationOutputReference(this, "time_duration");
  public get timeDuration() {
    return this._timeDuration;
  }
  public putTimeDuration(value: AlertTypeDefinitionSloThresholdBurnRateDualTimeDuration) {
    this._timeDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeDurationInput() {
    return this._timeDuration.internalValue;
  }
}
export interface AlertTypeDefinitionSloThresholdBurnRateRulesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold: number;
}

export function alertTypeDefinitionSloThresholdBurnRateRulesConditionToTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function alertTypeDefinitionSloThresholdBurnRateRulesConditionToHclTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlertTypeDefinitionSloThresholdBurnRateRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdBurnRateRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdBurnRateRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AlertTypeDefinitionSloThresholdBurnRateRulesOverride {
  /**
  * Alert priority. Valid values: ["P1" "P2" "P3" "P4" "P5"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#priority Alert#priority}
  */
  readonly priority?: string;
}

export function alertTypeDefinitionSloThresholdBurnRateRulesOverrideToTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function alertTypeDefinitionSloThresholdBurnRateRulesOverrideToHclTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdBurnRateRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdBurnRateRulesOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdBurnRateRulesOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
    }
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface AlertTypeDefinitionSloThresholdBurnRateRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionSloThresholdBurnRateRulesCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#override Alert#override}
  */
  readonly override: AlertTypeDefinitionSloThresholdBurnRateRulesOverride;
}

export function alertTypeDefinitionSloThresholdBurnRateRulesToTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionSloThresholdBurnRateRulesConditionToTerraform(struct!.condition),
    override: alertTypeDefinitionSloThresholdBurnRateRulesOverrideToTerraform(struct!.override),
  }
}


export function alertTypeDefinitionSloThresholdBurnRateRulesToHclTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionSloThresholdBurnRateRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdBurnRateRulesCondition",
    },
    override: {
      value: alertTypeDefinitionSloThresholdBurnRateRulesOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdBurnRateRulesOverride",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdBurnRateRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionSloThresholdBurnRateRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdBurnRateRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._override.internalValue = value.override;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionSloThresholdBurnRateRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionSloThresholdBurnRateRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // override - computed: false, optional: false, required: true
  private _override = new AlertTypeDefinitionSloThresholdBurnRateRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: AlertTypeDefinitionSloThresholdBurnRateRulesOverride) {
    this._override.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class AlertTypeDefinitionSloThresholdBurnRateRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionSloThresholdBurnRateRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionSloThresholdBurnRateRulesOutputReference {
    return new AlertTypeDefinitionSloThresholdBurnRateRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#duration Alert#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#unit Alert#unit}
  */
  readonly unit: string;
}

export function alertTypeDefinitionSloThresholdBurnRateSingleTimeDurationToTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function alertTypeDefinitionSloThresholdBurnRateSingleTimeDurationToHclTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdBurnRateSingleTimeDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface AlertTypeDefinitionSloThresholdBurnRateSingle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#time_duration Alert#time_duration}
  */
  readonly timeDuration: AlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration;
}

export function alertTypeDefinitionSloThresholdBurnRateSingleToTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateSingle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_duration: alertTypeDefinitionSloThresholdBurnRateSingleTimeDurationToTerraform(struct!.timeDuration),
  }
}


export function alertTypeDefinitionSloThresholdBurnRateSingleToHclTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRateSingle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_duration: {
      value: alertTypeDefinitionSloThresholdBurnRateSingleTimeDurationToHclTerraform(struct!.timeDuration),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdBurnRateSingleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdBurnRateSingle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeDuration = this._timeDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdBurnRateSingle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeDuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeDuration.internalValue = value.timeDuration;
    }
  }

  // time_duration - computed: false, optional: false, required: true
  private _timeDuration = new AlertTypeDefinitionSloThresholdBurnRateSingleTimeDurationOutputReference(this, "time_duration");
  public get timeDuration() {
    return this._timeDuration;
  }
  public putTimeDuration(value: AlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration) {
    this._timeDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeDurationInput() {
    return this._timeDuration.internalValue;
  }
}
export interface AlertTypeDefinitionSloThresholdBurnRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#dual Alert#dual}
  */
  readonly dual?: AlertTypeDefinitionSloThresholdBurnRateDual;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionSloThresholdBurnRateRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#single Alert#single}
  */
  readonly single?: AlertTypeDefinitionSloThresholdBurnRateSingle;
}

export function alertTypeDefinitionSloThresholdBurnRateToTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dual: alertTypeDefinitionSloThresholdBurnRateDualToTerraform(struct!.dual),
    rules: cdktf.listMapper(alertTypeDefinitionSloThresholdBurnRateRulesToTerraform, false)(struct!.rules),
    single: alertTypeDefinitionSloThresholdBurnRateSingleToTerraform(struct!.single),
  }
}


export function alertTypeDefinitionSloThresholdBurnRateToHclTerraform(struct?: AlertTypeDefinitionSloThresholdBurnRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dual: {
      value: alertTypeDefinitionSloThresholdBurnRateDualToHclTerraform(struct!.dual),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdBurnRateDual",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionSloThresholdBurnRateRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "AlertTypeDefinitionSloThresholdBurnRateRulesList",
    },
    single: {
      value: alertTypeDefinitionSloThresholdBurnRateSingleToHclTerraform(struct!.single),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdBurnRateSingle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdBurnRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdBurnRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dual = this._dual?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._single?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.single = this._single?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdBurnRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dual.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._single.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dual.internalValue = value.dual;
      this._rules.internalValue = value.rules;
      this._single.internalValue = value.single;
    }
  }

  // dual - computed: false, optional: true, required: false
  private _dual = new AlertTypeDefinitionSloThresholdBurnRateDualOutputReference(this, "dual");
  public get dual() {
    return this._dual;
  }
  public putDual(value: AlertTypeDefinitionSloThresholdBurnRateDual) {
    this._dual.internalValue = value;
  }
  public resetDual() {
    this._dual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualInput() {
    return this._dual.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionSloThresholdBurnRateRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionSloThresholdBurnRateRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // single - computed: false, optional: true, required: false
  private _single = new AlertTypeDefinitionSloThresholdBurnRateSingleOutputReference(this, "single");
  public get single() {
    return this._single;
  }
  public putSingle(value: AlertTypeDefinitionSloThresholdBurnRateSingle) {
    this._single.internalValue = value;
  }
  public resetSingle() {
    this._single.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleInput() {
    return this._single.internalValue;
  }
}
export interface AlertTypeDefinitionSloThresholdErrorBudgetRulesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold: number;
}

export function alertTypeDefinitionSloThresholdErrorBudgetRulesConditionToTerraform(struct?: AlertTypeDefinitionSloThresholdErrorBudgetRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function alertTypeDefinitionSloThresholdErrorBudgetRulesConditionToHclTerraform(struct?: AlertTypeDefinitionSloThresholdErrorBudgetRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlertTypeDefinitionSloThresholdErrorBudgetRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdErrorBudgetRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdErrorBudgetRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AlertTypeDefinitionSloThresholdErrorBudgetRulesOverride {
  /**
  * Alert priority. Valid values: ["P1" "P2" "P3" "P4" "P5"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#priority Alert#priority}
  */
  readonly priority?: string;
}

export function alertTypeDefinitionSloThresholdErrorBudgetRulesOverrideToTerraform(struct?: AlertTypeDefinitionSloThresholdErrorBudgetRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function alertTypeDefinitionSloThresholdErrorBudgetRulesOverrideToHclTerraform(struct?: AlertTypeDefinitionSloThresholdErrorBudgetRulesOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdErrorBudgetRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdErrorBudgetRulesOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdErrorBudgetRulesOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
    }
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface AlertTypeDefinitionSloThresholdErrorBudgetRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionSloThresholdErrorBudgetRulesCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#override Alert#override}
  */
  readonly override: AlertTypeDefinitionSloThresholdErrorBudgetRulesOverride;
}

export function alertTypeDefinitionSloThresholdErrorBudgetRulesToTerraform(struct?: AlertTypeDefinitionSloThresholdErrorBudgetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionSloThresholdErrorBudgetRulesConditionToTerraform(struct!.condition),
    override: alertTypeDefinitionSloThresholdErrorBudgetRulesOverrideToTerraform(struct!.override),
  }
}


export function alertTypeDefinitionSloThresholdErrorBudgetRulesToHclTerraform(struct?: AlertTypeDefinitionSloThresholdErrorBudgetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionSloThresholdErrorBudgetRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdErrorBudgetRulesCondition",
    },
    override: {
      value: alertTypeDefinitionSloThresholdErrorBudgetRulesOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdErrorBudgetRulesOverride",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdErrorBudgetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionSloThresholdErrorBudgetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdErrorBudgetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._override.internalValue = value.override;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionSloThresholdErrorBudgetRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionSloThresholdErrorBudgetRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // override - computed: false, optional: false, required: true
  private _override = new AlertTypeDefinitionSloThresholdErrorBudgetRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: AlertTypeDefinitionSloThresholdErrorBudgetRulesOverride) {
    this._override.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class AlertTypeDefinitionSloThresholdErrorBudgetRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionSloThresholdErrorBudgetRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionSloThresholdErrorBudgetRulesOutputReference {
    return new AlertTypeDefinitionSloThresholdErrorBudgetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionSloThresholdErrorBudget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionSloThresholdErrorBudgetRules[] | cdktf.IResolvable;
}

export function alertTypeDefinitionSloThresholdErrorBudgetToTerraform(struct?: AlertTypeDefinitionSloThresholdErrorBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(alertTypeDefinitionSloThresholdErrorBudgetRulesToTerraform, false)(struct!.rules),
  }
}


export function alertTypeDefinitionSloThresholdErrorBudgetToHclTerraform(struct?: AlertTypeDefinitionSloThresholdErrorBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionSloThresholdErrorBudgetRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "AlertTypeDefinitionSloThresholdErrorBudgetRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdErrorBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdErrorBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdErrorBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionSloThresholdErrorBudgetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionSloThresholdErrorBudgetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface AlertTypeDefinitionSloThresholdSloDefinition {
  /**
  * The SLO ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#slo_id Alert#slo_id}
  */
  readonly sloId: string;
}

export function alertTypeDefinitionSloThresholdSloDefinitionToTerraform(struct?: AlertTypeDefinitionSloThresholdSloDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slo_id: cdktf.stringToTerraform(struct!.sloId),
  }
}


export function alertTypeDefinitionSloThresholdSloDefinitionToHclTerraform(struct?: AlertTypeDefinitionSloThresholdSloDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slo_id: {
      value: cdktf.stringToHclTerraform(struct!.sloId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdSloDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThresholdSloDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sloId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloId = this._sloId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThresholdSloDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sloId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sloId = value.sloId;
    }
  }

  // slo_id - computed: false, optional: false, required: true
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }
}
export interface AlertTypeDefinitionSloThreshold {
  /**
  * Burn rate threshold configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#burn_rate Alert#burn_rate}
  */
  readonly burnRate?: AlertTypeDefinitionSloThresholdBurnRate;
  /**
  * Error budget threshold configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#error_budget Alert#error_budget}
  */
  readonly errorBudget?: AlertTypeDefinitionSloThresholdErrorBudget;
  /**
  * Configuration for the referenced SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#slo_definition Alert#slo_definition}
  */
  readonly sloDefinition: AlertTypeDefinitionSloThresholdSloDefinition;
}

export function alertTypeDefinitionSloThresholdToTerraform(struct?: AlertTypeDefinitionSloThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burn_rate: alertTypeDefinitionSloThresholdBurnRateToTerraform(struct!.burnRate),
    error_budget: alertTypeDefinitionSloThresholdErrorBudgetToTerraform(struct!.errorBudget),
    slo_definition: alertTypeDefinitionSloThresholdSloDefinitionToTerraform(struct!.sloDefinition),
  }
}


export function alertTypeDefinitionSloThresholdToHclTerraform(struct?: AlertTypeDefinitionSloThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burn_rate: {
      value: alertTypeDefinitionSloThresholdBurnRateToHclTerraform(struct!.burnRate),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdBurnRate",
    },
    error_budget: {
      value: alertTypeDefinitionSloThresholdErrorBudgetToHclTerraform(struct!.errorBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdErrorBudget",
    },
    slo_definition: {
      value: alertTypeDefinitionSloThresholdSloDefinitionToHclTerraform(struct!.sloDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThresholdSloDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionSloThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionSloThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burnRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.burnRate = this._burnRate?.internalValue;
    }
    if (this._errorBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorBudget = this._errorBudget?.internalValue;
    }
    if (this._sloDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloDefinition = this._sloDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionSloThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burnRate.internalValue = undefined;
      this._errorBudget.internalValue = undefined;
      this._sloDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burnRate.internalValue = value.burnRate;
      this._errorBudget.internalValue = value.errorBudget;
      this._sloDefinition.internalValue = value.sloDefinition;
    }
  }

  // burn_rate - computed: false, optional: true, required: false
  private _burnRate = new AlertTypeDefinitionSloThresholdBurnRateOutputReference(this, "burn_rate");
  public get burnRate() {
    return this._burnRate;
  }
  public putBurnRate(value: AlertTypeDefinitionSloThresholdBurnRate) {
    this._burnRate.internalValue = value;
  }
  public resetBurnRate() {
    this._burnRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateInput() {
    return this._burnRate.internalValue;
  }

  // error_budget - computed: false, optional: true, required: false
  private _errorBudget = new AlertTypeDefinitionSloThresholdErrorBudgetOutputReference(this, "error_budget");
  public get errorBudget() {
    return this._errorBudget;
  }
  public putErrorBudget(value: AlertTypeDefinitionSloThresholdErrorBudget) {
    this._errorBudget.internalValue = value;
  }
  public resetErrorBudget() {
    this._errorBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorBudgetInput() {
    return this._errorBudget.internalValue;
  }

  // slo_definition - computed: false, optional: false, required: true
  private _sloDefinition = new AlertTypeDefinitionSloThresholdSloDefinitionOutputReference(this, "slo_definition");
  public get sloDefinition() {
    return this._sloDefinition;
  }
  public putSloDefinition(value: AlertTypeDefinitionSloThresholdSloDefinition) {
    this._sloDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloDefinitionInput() {
    return this._sloDefinition.internalValue;
  }
}
export interface AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameToTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameToHclTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameOutputReference {
    return new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameToTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameToHclTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameOutputReference {
    return new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToHclTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#filter_type Alert#filter_type}
  */
  readonly filterType?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#key Alert#key}
  */
  readonly key: string;
}

export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsToTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToTerraform(struct!.filterType),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsToHclTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToHclTerraform(struct!.filterType),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType.internalValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType.internalValue = value.filterType;
      this._key = value.key;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType = new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeOutputReference(this, "filter_type");
  public get filterType() {
    return this._filterType;
  }
  public putFilterType(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType) {
    this._filterType.internalValue = value;
  }
  public resetFilterType() {
    this._filterType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType.internalValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsOutputReference {
    return new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation_name Alert#operation_name}
  */
  readonly operationName?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#service_name Alert#service_name}
  */
  readonly serviceName?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#span_fields Alert#span_fields}
  */
  readonly spanFields?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersToTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    operation_name: cdktf.listMapper(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameToTerraform, false)(struct!.operationName),
    service_name: cdktf.listMapper(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameToTerraform, false)(struct!.serviceName),
    span_fields: cdktf.listMapper(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsToTerraform, false)(struct!.spanFields),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameList",
    },
    operation_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameToHclTerraform, false)(struct!.operationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameList",
    },
    service_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameToHclTerraform, false)(struct!.serviceName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameList",
    },
    span_fields: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsToHclTerraform, false)(struct!.spanFields),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._operationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName?.internalValue;
    }
    if (this._serviceName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName?.internalValue;
    }
    if (this._spanFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanFields = this._spanFields?.internalValue;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._operationName.internalValue = undefined;
      this._serviceName.internalValue = undefined;
      this._spanFields.internalValue = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._operationName.internalValue = value.operationName;
      this._serviceName.internalValue = value.serviceName;
      this._spanFields.internalValue = value.spanFields;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: false, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName = new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameList(this, "operation_name", true);
  public get operationName() {
    return this._operationName;
  }
  public putOperationName(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName[] | cdktf.IResolvable) {
    this._operationName.internalValue = value;
  }
  public resetOperationName() {
    this._operationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName.internalValue;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName = new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameList(this, "service_name", true);
  public get serviceName() {
    return this._serviceName;
  }
  public putServiceName(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName[] | cdktf.IResolvable) {
    this._serviceName.internalValue = value;
  }
  public resetServiceName() {
    this._serviceName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName.internalValue;
  }

  // span_fields - computed: false, optional: true, required: false
  private _spanFields = new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsList(this, "span_fields", true);
  public get spanFields() {
    return this._spanFields;
  }
  public putSpanFields(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields[] | cdktf.IResolvable) {
    this._spanFields.internalValue = value;
  }
  public resetSpanFields() {
    this._spanFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanFieldsInput() {
    return this._spanFields.internalValue;
  }

  // subsystem_name - computed: false, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionTracingImmediateTracingFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#latency_threshold_ms Alert#latency_threshold_ms}
  */
  readonly latencyThresholdMs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#tracing_label_filters Alert#tracing_label_filters}
  */
  readonly tracingLabelFilters: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters;
}

export function alertTypeDefinitionTracingImmediateTracingFilterToTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latency_threshold_ms: cdktf.numberToTerraform(struct!.latencyThresholdMs),
    tracing_label_filters: alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersToTerraform(struct!.tracingLabelFilters),
  }
}


export function alertTypeDefinitionTracingImmediateTracingFilterToHclTerraform(struct?: AlertTypeDefinitionTracingImmediateTracingFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latency_threshold_ms: {
      value: cdktf.numberToHclTerraform(struct!.latencyThresholdMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracing_label_filters: {
      value: alertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersToHclTerraform(struct!.tracingLabelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateTracingFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingImmediateTracingFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latencyThresholdMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThresholdMs = this._latencyThresholdMs;
    }
    if (this._tracingLabelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingLabelFilters = this._tracingLabelFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediateTracingFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latencyThresholdMs = undefined;
      this._tracingLabelFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latencyThresholdMs = value.latencyThresholdMs;
      this._tracingLabelFilters.internalValue = value.tracingLabelFilters;
    }
  }

  // latency_threshold_ms - computed: false, optional: false, required: true
  private _latencyThresholdMs?: number; 
  public get latencyThresholdMs() {
    return this.getNumberAttribute('latency_threshold_ms');
  }
  public set latencyThresholdMs(value: number) {
    this._latencyThresholdMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdMsInput() {
    return this._latencyThresholdMs;
  }

  // tracing_label_filters - computed: false, optional: false, required: true
  private _tracingLabelFilters = new AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOutputReference(this, "tracing_label_filters");
  public get tracingLabelFilters() {
    return this._tracingLabelFilters;
  }
  public putTracingLabelFilters(value: AlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters) {
    this._tracingLabelFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingLabelFiltersInput() {
    return this._tracingLabelFilters.internalValue;
  }
}
export interface AlertTypeDefinitionTracingImmediate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#tracing_filter Alert#tracing_filter}
  */
  readonly tracingFilter: AlertTypeDefinitionTracingImmediateTracingFilter;
}

export function alertTypeDefinitionTracingImmediateToTerraform(struct?: AlertTypeDefinitionTracingImmediate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
    tracing_filter: alertTypeDefinitionTracingImmediateTracingFilterToTerraform(struct!.tracingFilter),
  }
}


export function alertTypeDefinitionTracingImmediateToHclTerraform(struct?: AlertTypeDefinitionTracingImmediate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tracing_filter: {
      value: alertTypeDefinitionTracingImmediateTracingFilterToHclTerraform(struct!.tracingFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingImmediateTracingFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingImmediateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingImmediate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    if (this._tracingFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingFilter = this._tracingFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingImmediate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationPayloadFilter = undefined;
      this._tracingFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
      this._tracingFilter.internalValue = value.tracingFilter;
    }
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }

  // tracing_filter - computed: false, optional: false, required: true
  private _tracingFilter = new AlertTypeDefinitionTracingImmediateTracingFilterOutputReference(this, "tracing_filter");
  public get tracingFilter() {
    return this._tracingFilter;
  }
  public putTracingFilter(value: AlertTypeDefinitionTracingImmediateTracingFilter) {
    this._tracingFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingFilterInput() {
    return this._tracingFilter.internalValue;
  }
}
export interface AlertTypeDefinitionTracingThresholdRulesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#span_amount Alert#span_amount}
  */
  readonly spanAmount: number;
  /**
  * Time window to evaluate the threshold with. Valid values: ["10_MINUTES" "12_HOURS" "15_MINUTES" "1_HOUR" "20_MINUTES" "24_HOURS" "2_HOURS" "30_MINUTES" "36_HOURS" "4_HOURS" "5_MINUTES" "6_HOURS"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#time_window Alert#time_window}
  */
  readonly timeWindow: string;
}

export function alertTypeDefinitionTracingThresholdRulesConditionToTerraform(struct?: AlertTypeDefinitionTracingThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    span_amount: cdktf.numberToTerraform(struct!.spanAmount),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
  }
}


export function alertTypeDefinitionTracingThresholdRulesConditionToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    span_amount: {
      value: cdktf.numberToHclTerraform(struct!.spanAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingThresholdRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spanAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanAmount = this._spanAmount;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spanAmount = undefined;
      this._timeWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spanAmount = value.spanAmount;
      this._timeWindow = value.timeWindow;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // span_amount - computed: false, optional: false, required: true
  private _spanAmount?: number; 
  public get spanAmount() {
    return this.getNumberAttribute('span_amount');
  }
  public set spanAmount(value: number) {
    this._spanAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spanAmountInput() {
    return this._spanAmount;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface AlertTypeDefinitionTracingThresholdRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#condition Alert#condition}
  */
  readonly condition: AlertTypeDefinitionTracingThresholdRulesCondition;
}

export function alertTypeDefinitionTracingThresholdRulesToTerraform(struct?: AlertTypeDefinitionTracingThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: alertTypeDefinitionTracingThresholdRulesConditionToTerraform(struct!.condition),
  }
}


export function alertTypeDefinitionTracingThresholdRulesToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: alertTypeDefinitionTracingThresholdRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingThresholdRulesCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingThresholdRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertTypeDefinitionTracingThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertTypeDefinitionTracingThresholdRulesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class AlertTypeDefinitionTracingThresholdRulesList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingThresholdRules[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingThresholdRulesOutputReference {
    return new AlertTypeDefinitionTracingThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameToTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameOutputReference {
    return new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameToTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameOutputReference {
    return new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameToTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameOutputReference {
    return new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#filter_type Alert#filter_type}
  */
  readonly filterType?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#key Alert#key}
  */
  readonly key: string;
}

export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsToTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToTerraform(struct!.filterType),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToHclTerraform(struct!.filterType),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType.internalValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType.internalValue = value.filterType;
      this._key = value.key;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType = new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeOutputReference(this, "filter_type");
  public get filterType() {
    return this._filterType;
  }
  public putFilterType(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType) {
    this._filterType.internalValue = value;
  }
  public resetFilterType() {
    this._filterType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType.internalValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsOutputReference {
    return new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName {
  /**
  * Operation. Valid values: ["ENDS_WITH" "INCLUDES" "IS" "IS_NOT" "STARTS_WITH"]. 'IS' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation Alert#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#values Alert#values}
  */
  readonly values: string[];
}

export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameToTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameList extends cdktf.ComplexList {
  public internalValue? : AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName[] | cdktf.IResolvable

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
  public get(index: number): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameOutputReference {
    return new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#application_name Alert#application_name}
  */
  readonly applicationName?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#operation_name Alert#operation_name}
  */
  readonly operationName?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#service_name Alert#service_name}
  */
  readonly serviceName?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#span_fields Alert#span_fields}
  */
  readonly spanFields?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#subsystem_name Alert#subsystem_name}
  */
  readonly subsystemName?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName[] | cdktf.IResolvable;
}

export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersToTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.listMapper(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameToTerraform, false)(struct!.applicationName),
    operation_name: cdktf.listMapper(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameToTerraform, false)(struct!.operationName),
    service_name: cdktf.listMapper(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameToTerraform, false)(struct!.serviceName),
    span_fields: cdktf.listMapper(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsToTerraform, false)(struct!.spanFields),
    subsystem_name: cdktf.listMapper(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameToTerraform, false)(struct!.subsystemName),
  }
}


export function alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameToHclTerraform, false)(struct!.applicationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameList",
    },
    operation_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameToHclTerraform, false)(struct!.operationName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameList",
    },
    service_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameToHclTerraform, false)(struct!.serviceName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameList",
    },
    span_fields: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsToHclTerraform, false)(struct!.spanFields),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsList",
    },
    subsystem_name: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameToHclTerraform, false)(struct!.subsystemName),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName?.internalValue;
    }
    if (this._operationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName?.internalValue;
    }
    if (this._serviceName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName?.internalValue;
    }
    if (this._spanFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanFields = this._spanFields?.internalValue;
    }
    if (this._subsystemName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystemName = this._subsystemName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = undefined;
      this._operationName.internalValue = undefined;
      this._serviceName.internalValue = undefined;
      this._spanFields.internalValue = undefined;
      this._subsystemName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName.internalValue = value.applicationName;
      this._operationName.internalValue = value.operationName;
      this._serviceName.internalValue = value.serviceName;
      this._spanFields.internalValue = value.spanFields;
      this._subsystemName.internalValue = value.subsystemName;
    }
  }

  // application_name - computed: false, optional: true, required: false
  private _applicationName = new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }
  public putApplicationName(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName[] | cdktf.IResolvable) {
    this._applicationName.internalValue = value;
  }
  public resetApplicationName() {
    this._applicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName.internalValue;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName = new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameList(this, "operation_name", true);
  public get operationName() {
    return this._operationName;
  }
  public putOperationName(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName[] | cdktf.IResolvable) {
    this._operationName.internalValue = value;
  }
  public resetOperationName() {
    this._operationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName.internalValue;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName = new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameList(this, "service_name", true);
  public get serviceName() {
    return this._serviceName;
  }
  public putServiceName(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName[] | cdktf.IResolvable) {
    this._serviceName.internalValue = value;
  }
  public resetServiceName() {
    this._serviceName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName.internalValue;
  }

  // span_fields - computed: false, optional: true, required: false
  private _spanFields = new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsList(this, "span_fields", true);
  public get spanFields() {
    return this._spanFields;
  }
  public putSpanFields(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields[] | cdktf.IResolvable) {
    this._spanFields.internalValue = value;
  }
  public resetSpanFields() {
    this._spanFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanFieldsInput() {
    return this._spanFields.internalValue;
  }

  // subsystem_name - computed: false, optional: true, required: false
  private _subsystemName = new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
  public putSubsystemName(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName[] | cdktf.IResolvable) {
    this._subsystemName.internalValue = value;
  }
  public resetSubsystemName() {
    this._subsystemName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemNameInput() {
    return this._subsystemName.internalValue;
  }
}
export interface AlertTypeDefinitionTracingThresholdTracingFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#latency_threshold_ms Alert#latency_threshold_ms}
  */
  readonly latencyThresholdMs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#tracing_label_filters Alert#tracing_label_filters}
  */
  readonly tracingLabelFilters: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters;
}

export function alertTypeDefinitionTracingThresholdTracingFilterToTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latency_threshold_ms: cdktf.numberToTerraform(struct!.latencyThresholdMs),
    tracing_label_filters: alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersToTerraform(struct!.tracingLabelFilters),
  }
}


export function alertTypeDefinitionTracingThresholdTracingFilterToHclTerraform(struct?: AlertTypeDefinitionTracingThresholdTracingFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latency_threshold_ms: {
      value: cdktf.numberToHclTerraform(struct!.latencyThresholdMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracing_label_filters: {
      value: alertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersToHclTerraform(struct!.tracingLabelFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdTracingFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingThresholdTracingFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latencyThresholdMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThresholdMs = this._latencyThresholdMs;
    }
    if (this._tracingLabelFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingLabelFilters = this._tracingLabelFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThresholdTracingFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latencyThresholdMs = undefined;
      this._tracingLabelFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latencyThresholdMs = value.latencyThresholdMs;
      this._tracingLabelFilters.internalValue = value.tracingLabelFilters;
    }
  }

  // latency_threshold_ms - computed: false, optional: false, required: true
  private _latencyThresholdMs?: number; 
  public get latencyThresholdMs() {
    return this.getNumberAttribute('latency_threshold_ms');
  }
  public set latencyThresholdMs(value: number) {
    this._latencyThresholdMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdMsInput() {
    return this._latencyThresholdMs;
  }

  // tracing_label_filters - computed: false, optional: false, required: true
  private _tracingLabelFilters = new AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOutputReference(this, "tracing_label_filters");
  public get tracingLabelFilters() {
    return this._tracingLabelFilters;
  }
  public putTracingLabelFilters(value: AlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters) {
    this._tracingLabelFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingLabelFiltersInput() {
    return this._tracingLabelFilters.internalValue;
  }
}
export interface AlertTypeDefinitionTracingThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#notification_payload_filter Alert#notification_payload_filter}
  */
  readonly notificationPayloadFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#rules Alert#rules}
  */
  readonly rules: AlertTypeDefinitionTracingThresholdRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#tracing_filter Alert#tracing_filter}
  */
  readonly tracingFilter: AlertTypeDefinitionTracingThresholdTracingFilter;
}

export function alertTypeDefinitionTracingThresholdToTerraform(struct?: AlertTypeDefinitionTracingThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_payload_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationPayloadFilter),
    rules: cdktf.listMapper(alertTypeDefinitionTracingThresholdRulesToTerraform, false)(struct!.rules),
    tracing_filter: alertTypeDefinitionTracingThresholdTracingFilterToTerraform(struct!.tracingFilter),
  }
}


export function alertTypeDefinitionTracingThresholdToHclTerraform(struct?: AlertTypeDefinitionTracingThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_payload_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationPayloadFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(alertTypeDefinitionTracingThresholdRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "AlertTypeDefinitionTracingThresholdRulesList",
    },
    tracing_filter: {
      value: alertTypeDefinitionTracingThresholdTracingFilterToHclTerraform(struct!.tracingFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingThresholdTracingFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionTracingThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinitionTracingThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationPayloadFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPayloadFilter = this._notificationPayloadFilter;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._tracingFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingFilter = this._tracingFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinitionTracingThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationPayloadFilter = undefined;
      this._rules.internalValue = undefined;
      this._tracingFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationPayloadFilter = value.notificationPayloadFilter;
      this._rules.internalValue = value.rules;
      this._tracingFilter.internalValue = value.tracingFilter;
    }
  }

  // notification_payload_filter - computed: false, optional: true, required: false
  private _notificationPayloadFilter?: string[]; 
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
  public set notificationPayloadFilter(value: string[]) {
    this._notificationPayloadFilter = value;
  }
  public resetNotificationPayloadFilter() {
    this._notificationPayloadFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPayloadFilterInput() {
    return this._notificationPayloadFilter;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AlertTypeDefinitionTracingThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertTypeDefinitionTracingThresholdRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tracing_filter - computed: false, optional: false, required: true
  private _tracingFilter = new AlertTypeDefinitionTracingThresholdTracingFilterOutputReference(this, "tracing_filter");
  public get tracingFilter() {
    return this._tracingFilter;
  }
  public putTracingFilter(value: AlertTypeDefinitionTracingThresholdTracingFilter) {
    this._tracingFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingFilterInput() {
    return this._tracingFilter.internalValue;
  }
}
export interface AlertTypeDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#flow Alert#flow}
  */
  readonly flow?: AlertTypeDefinitionFlow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_anomaly Alert#logs_anomaly}
  */
  readonly logsAnomaly?: AlertTypeDefinitionLogsAnomaly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_immediate Alert#logs_immediate}
  */
  readonly logsImmediate?: AlertTypeDefinitionLogsImmediate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_new_value Alert#logs_new_value}
  */
  readonly logsNewValue?: AlertTypeDefinitionLogsNewValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_ratio_threshold Alert#logs_ratio_threshold}
  */
  readonly logsRatioThreshold?: AlertTypeDefinitionLogsRatioThreshold;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_threshold Alert#logs_threshold}
  */
  readonly logsThreshold?: AlertTypeDefinitionLogsThreshold;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_time_relative_threshold Alert#logs_time_relative_threshold}
  */
  readonly logsTimeRelativeThreshold?: AlertTypeDefinitionLogsTimeRelativeThreshold;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#logs_unique_count Alert#logs_unique_count}
  */
  readonly logsUniqueCount?: AlertTypeDefinitionLogsUniqueCount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#metric_anomaly Alert#metric_anomaly}
  */
  readonly metricAnomaly?: AlertTypeDefinitionMetricAnomaly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#metric_threshold Alert#metric_threshold}
  */
  readonly metricThreshold?: AlertTypeDefinitionMetricThreshold;
  /**
  * SLO threshold alert type definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#slo_threshold Alert#slo_threshold}
  */
  readonly sloThreshold?: AlertTypeDefinitionSloThreshold;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#tracing_immediate Alert#tracing_immediate}
  */
  readonly tracingImmediate?: AlertTypeDefinitionTracingImmediate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#tracing_threshold Alert#tracing_threshold}
  */
  readonly tracingThreshold?: AlertTypeDefinitionTracingThreshold;
}

export function alertTypeDefinitionToTerraform(struct?: AlertTypeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow: alertTypeDefinitionFlowToTerraform(struct!.flow),
    logs_anomaly: alertTypeDefinitionLogsAnomalyToTerraform(struct!.logsAnomaly),
    logs_immediate: alertTypeDefinitionLogsImmediateToTerraform(struct!.logsImmediate),
    logs_new_value: alertTypeDefinitionLogsNewValueToTerraform(struct!.logsNewValue),
    logs_ratio_threshold: alertTypeDefinitionLogsRatioThresholdToTerraform(struct!.logsRatioThreshold),
    logs_threshold: alertTypeDefinitionLogsThresholdToTerraform(struct!.logsThreshold),
    logs_time_relative_threshold: alertTypeDefinitionLogsTimeRelativeThresholdToTerraform(struct!.logsTimeRelativeThreshold),
    logs_unique_count: alertTypeDefinitionLogsUniqueCountToTerraform(struct!.logsUniqueCount),
    metric_anomaly: alertTypeDefinitionMetricAnomalyToTerraform(struct!.metricAnomaly),
    metric_threshold: alertTypeDefinitionMetricThresholdToTerraform(struct!.metricThreshold),
    slo_threshold: alertTypeDefinitionSloThresholdToTerraform(struct!.sloThreshold),
    tracing_immediate: alertTypeDefinitionTracingImmediateToTerraform(struct!.tracingImmediate),
    tracing_threshold: alertTypeDefinitionTracingThresholdToTerraform(struct!.tracingThreshold),
  }
}


export function alertTypeDefinitionToHclTerraform(struct?: AlertTypeDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow: {
      value: alertTypeDefinitionFlowToHclTerraform(struct!.flow),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionFlow",
    },
    logs_anomaly: {
      value: alertTypeDefinitionLogsAnomalyToHclTerraform(struct!.logsAnomaly),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsAnomaly",
    },
    logs_immediate: {
      value: alertTypeDefinitionLogsImmediateToHclTerraform(struct!.logsImmediate),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsImmediate",
    },
    logs_new_value: {
      value: alertTypeDefinitionLogsNewValueToHclTerraform(struct!.logsNewValue),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsNewValue",
    },
    logs_ratio_threshold: {
      value: alertTypeDefinitionLogsRatioThresholdToHclTerraform(struct!.logsRatioThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsRatioThreshold",
    },
    logs_threshold: {
      value: alertTypeDefinitionLogsThresholdToHclTerraform(struct!.logsThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsThreshold",
    },
    logs_time_relative_threshold: {
      value: alertTypeDefinitionLogsTimeRelativeThresholdToHclTerraform(struct!.logsTimeRelativeThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsTimeRelativeThreshold",
    },
    logs_unique_count: {
      value: alertTypeDefinitionLogsUniqueCountToHclTerraform(struct!.logsUniqueCount),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionLogsUniqueCount",
    },
    metric_anomaly: {
      value: alertTypeDefinitionMetricAnomalyToHclTerraform(struct!.metricAnomaly),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricAnomaly",
    },
    metric_threshold: {
      value: alertTypeDefinitionMetricThresholdToHclTerraform(struct!.metricThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionMetricThreshold",
    },
    slo_threshold: {
      value: alertTypeDefinitionSloThresholdToHclTerraform(struct!.sloThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionSloThreshold",
    },
    tracing_immediate: {
      value: alertTypeDefinitionTracingImmediateToHclTerraform(struct!.tracingImmediate),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingImmediate",
    },
    tracing_threshold: {
      value: alertTypeDefinitionTracingThresholdToHclTerraform(struct!.tracingThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertTypeDefinitionTracingThreshold",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertTypeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertTypeDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flow = this._flow?.internalValue;
    }
    if (this._logsAnomaly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsAnomaly = this._logsAnomaly?.internalValue;
    }
    if (this._logsImmediate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsImmediate = this._logsImmediate?.internalValue;
    }
    if (this._logsNewValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsNewValue = this._logsNewValue?.internalValue;
    }
    if (this._logsRatioThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsRatioThreshold = this._logsRatioThreshold?.internalValue;
    }
    if (this._logsThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsThreshold = this._logsThreshold?.internalValue;
    }
    if (this._logsTimeRelativeThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsTimeRelativeThreshold = this._logsTimeRelativeThreshold?.internalValue;
    }
    if (this._logsUniqueCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsUniqueCount = this._logsUniqueCount?.internalValue;
    }
    if (this._metricAnomaly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAnomaly = this._metricAnomaly?.internalValue;
    }
    if (this._metricThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricThreshold = this._metricThreshold?.internalValue;
    }
    if (this._sloThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloThreshold = this._sloThreshold?.internalValue;
    }
    if (this._tracingImmediate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingImmediate = this._tracingImmediate?.internalValue;
    }
    if (this._tracingThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingThreshold = this._tracingThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertTypeDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flow.internalValue = undefined;
      this._logsAnomaly.internalValue = undefined;
      this._logsImmediate.internalValue = undefined;
      this._logsNewValue.internalValue = undefined;
      this._logsRatioThreshold.internalValue = undefined;
      this._logsThreshold.internalValue = undefined;
      this._logsTimeRelativeThreshold.internalValue = undefined;
      this._logsUniqueCount.internalValue = undefined;
      this._metricAnomaly.internalValue = undefined;
      this._metricThreshold.internalValue = undefined;
      this._sloThreshold.internalValue = undefined;
      this._tracingImmediate.internalValue = undefined;
      this._tracingThreshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flow.internalValue = value.flow;
      this._logsAnomaly.internalValue = value.logsAnomaly;
      this._logsImmediate.internalValue = value.logsImmediate;
      this._logsNewValue.internalValue = value.logsNewValue;
      this._logsRatioThreshold.internalValue = value.logsRatioThreshold;
      this._logsThreshold.internalValue = value.logsThreshold;
      this._logsTimeRelativeThreshold.internalValue = value.logsTimeRelativeThreshold;
      this._logsUniqueCount.internalValue = value.logsUniqueCount;
      this._metricAnomaly.internalValue = value.metricAnomaly;
      this._metricThreshold.internalValue = value.metricThreshold;
      this._sloThreshold.internalValue = value.sloThreshold;
      this._tracingImmediate.internalValue = value.tracingImmediate;
      this._tracingThreshold.internalValue = value.tracingThreshold;
    }
  }

  // flow - computed: false, optional: true, required: false
  private _flow = new AlertTypeDefinitionFlowOutputReference(this, "flow");
  public get flow() {
    return this._flow;
  }
  public putFlow(value: AlertTypeDefinitionFlow) {
    this._flow.internalValue = value;
  }
  public resetFlow() {
    this._flow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow.internalValue;
  }

  // logs_anomaly - computed: false, optional: true, required: false
  private _logsAnomaly = new AlertTypeDefinitionLogsAnomalyOutputReference(this, "logs_anomaly");
  public get logsAnomaly() {
    return this._logsAnomaly;
  }
  public putLogsAnomaly(value: AlertTypeDefinitionLogsAnomaly) {
    this._logsAnomaly.internalValue = value;
  }
  public resetLogsAnomaly() {
    this._logsAnomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsAnomalyInput() {
    return this._logsAnomaly.internalValue;
  }

  // logs_immediate - computed: false, optional: true, required: false
  private _logsImmediate = new AlertTypeDefinitionLogsImmediateOutputReference(this, "logs_immediate");
  public get logsImmediate() {
    return this._logsImmediate;
  }
  public putLogsImmediate(value: AlertTypeDefinitionLogsImmediate) {
    this._logsImmediate.internalValue = value;
  }
  public resetLogsImmediate() {
    this._logsImmediate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsImmediateInput() {
    return this._logsImmediate.internalValue;
  }

  // logs_new_value - computed: false, optional: true, required: false
  private _logsNewValue = new AlertTypeDefinitionLogsNewValueOutputReference(this, "logs_new_value");
  public get logsNewValue() {
    return this._logsNewValue;
  }
  public putLogsNewValue(value: AlertTypeDefinitionLogsNewValue) {
    this._logsNewValue.internalValue = value;
  }
  public resetLogsNewValue() {
    this._logsNewValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsNewValueInput() {
    return this._logsNewValue.internalValue;
  }

  // logs_ratio_threshold - computed: false, optional: true, required: false
  private _logsRatioThreshold = new AlertTypeDefinitionLogsRatioThresholdOutputReference(this, "logs_ratio_threshold");
  public get logsRatioThreshold() {
    return this._logsRatioThreshold;
  }
  public putLogsRatioThreshold(value: AlertTypeDefinitionLogsRatioThreshold) {
    this._logsRatioThreshold.internalValue = value;
  }
  public resetLogsRatioThreshold() {
    this._logsRatioThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsRatioThresholdInput() {
    return this._logsRatioThreshold.internalValue;
  }

  // logs_threshold - computed: false, optional: true, required: false
  private _logsThreshold = new AlertTypeDefinitionLogsThresholdOutputReference(this, "logs_threshold");
  public get logsThreshold() {
    return this._logsThreshold;
  }
  public putLogsThreshold(value: AlertTypeDefinitionLogsThreshold) {
    this._logsThreshold.internalValue = value;
  }
  public resetLogsThreshold() {
    this._logsThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsThresholdInput() {
    return this._logsThreshold.internalValue;
  }

  // logs_time_relative_threshold - computed: false, optional: true, required: false
  private _logsTimeRelativeThreshold = new AlertTypeDefinitionLogsTimeRelativeThresholdOutputReference(this, "logs_time_relative_threshold");
  public get logsTimeRelativeThreshold() {
    return this._logsTimeRelativeThreshold;
  }
  public putLogsTimeRelativeThreshold(value: AlertTypeDefinitionLogsTimeRelativeThreshold) {
    this._logsTimeRelativeThreshold.internalValue = value;
  }
  public resetLogsTimeRelativeThreshold() {
    this._logsTimeRelativeThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsTimeRelativeThresholdInput() {
    return this._logsTimeRelativeThreshold.internalValue;
  }

  // logs_unique_count - computed: false, optional: true, required: false
  private _logsUniqueCount = new AlertTypeDefinitionLogsUniqueCountOutputReference(this, "logs_unique_count");
  public get logsUniqueCount() {
    return this._logsUniqueCount;
  }
  public putLogsUniqueCount(value: AlertTypeDefinitionLogsUniqueCount) {
    this._logsUniqueCount.internalValue = value;
  }
  public resetLogsUniqueCount() {
    this._logsUniqueCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsUniqueCountInput() {
    return this._logsUniqueCount.internalValue;
  }

  // metric_anomaly - computed: false, optional: true, required: false
  private _metricAnomaly = new AlertTypeDefinitionMetricAnomalyOutputReference(this, "metric_anomaly");
  public get metricAnomaly() {
    return this._metricAnomaly;
  }
  public putMetricAnomaly(value: AlertTypeDefinitionMetricAnomaly) {
    this._metricAnomaly.internalValue = value;
  }
  public resetMetricAnomaly() {
    this._metricAnomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAnomalyInput() {
    return this._metricAnomaly.internalValue;
  }

  // metric_threshold - computed: false, optional: true, required: false
  private _metricThreshold = new AlertTypeDefinitionMetricThresholdOutputReference(this, "metric_threshold");
  public get metricThreshold() {
    return this._metricThreshold;
  }
  public putMetricThreshold(value: AlertTypeDefinitionMetricThreshold) {
    this._metricThreshold.internalValue = value;
  }
  public resetMetricThreshold() {
    this._metricThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricThresholdInput() {
    return this._metricThreshold.internalValue;
  }

  // slo_threshold - computed: false, optional: true, required: false
  private _sloThreshold = new AlertTypeDefinitionSloThresholdOutputReference(this, "slo_threshold");
  public get sloThreshold() {
    return this._sloThreshold;
  }
  public putSloThreshold(value: AlertTypeDefinitionSloThreshold) {
    this._sloThreshold.internalValue = value;
  }
  public resetSloThreshold() {
    this._sloThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloThresholdInput() {
    return this._sloThreshold.internalValue;
  }

  // tracing_immediate - computed: false, optional: true, required: false
  private _tracingImmediate = new AlertTypeDefinitionTracingImmediateOutputReference(this, "tracing_immediate");
  public get tracingImmediate() {
    return this._tracingImmediate;
  }
  public putTracingImmediate(value: AlertTypeDefinitionTracingImmediate) {
    this._tracingImmediate.internalValue = value;
  }
  public resetTracingImmediate() {
    this._tracingImmediate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingImmediateInput() {
    return this._tracingImmediate.internalValue;
  }

  // tracing_threshold - computed: false, optional: true, required: false
  private _tracingThreshold = new AlertTypeDefinitionTracingThresholdOutputReference(this, "tracing_threshold");
  public get tracingThreshold() {
    return this._tracingThreshold;
  }
  public putTracingThreshold(value: AlertTypeDefinitionTracingThreshold) {
    this._tracingThreshold.internalValue = value;
  }
  public resetTracingThreshold() {
    this._tracingThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingThresholdInput() {
    return this._tracingThreshold.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert coralogix_alert}
*/
export class Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alert to import
  * @param importFromId The id of the existing Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/alert coralogix_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_alert',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
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
    this._enabled = config.enabled;
    this._groupBy = config.groupBy;
    this._incidentsSettings.internalValue = config.incidentsSettings;
    this._labels = config.labels;
    this._name = config.name;
    this._notificationGroup.internalValue = config.notificationGroup;
    this._phantomMode = config.phantomMode;
    this._priority = config.priority;
    this._schedule.internalValue = config.schedule;
    this._typeDefinition.internalValue = config.typeDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // enabled - computed: true, optional: true, required: false
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

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incidents_settings - computed: true, optional: true, required: false
  private _incidentsSettings = new AlertIncidentsSettingsOutputReference(this, "incidents_settings");
  public get incidentsSettings() {
    return this._incidentsSettings;
  }
  public putIncidentsSettings(value: AlertIncidentsSettings) {
    this._incidentsSettings.internalValue = value;
  }
  public resetIncidentsSettings() {
    this._incidentsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentsSettingsInput() {
    return this._incidentsSettings.internalValue;
  }

  // labels - computed: true, optional: true, required: false
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

  // notification_group - computed: true, optional: true, required: false
  private _notificationGroup = new AlertNotificationGroupOutputReference(this, "notification_group");
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: AlertNotificationGroup) {
    this._notificationGroup.internalValue = value;
  }
  public resetNotificationGroup() {
    this._notificationGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }

  // phantom_mode - computed: true, optional: true, required: false
  private _phantomMode?: boolean | cdktf.IResolvable; 
  public get phantomMode() {
    return this.getBooleanAttribute('phantom_mode');
  }
  public set phantomMode(value: boolean | cdktf.IResolvable) {
    this._phantomMode = value;
  }
  public resetPhantomMode() {
    this._phantomMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phantomModeInput() {
    return this._phantomMode;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new AlertScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AlertSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // type_definition - computed: false, optional: false, required: true
  private _typeDefinition = new AlertTypeDefinitionOutputReference(this, "type_definition");
  public get typeDefinition() {
    return this._typeDefinition;
  }
  public putTypeDefinition(value: AlertTypeDefinition) {
    this._typeDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDefinitionInput() {
    return this._typeDefinition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      incidents_settings: alertIncidentsSettingsToTerraform(this._incidentsSettings.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      notification_group: alertNotificationGroupToTerraform(this._notificationGroup.internalValue),
      phantom_mode: cdktf.booleanToTerraform(this._phantomMode),
      priority: cdktf.stringToTerraform(this._priority),
      schedule: alertScheduleToTerraform(this._schedule.internalValue),
      type_definition: alertTypeDefinitionToTerraform(this._typeDefinition.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incidents_settings: {
        value: alertIncidentsSettingsToHclTerraform(this._incidentsSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertIncidentsSettings",
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
      notification_group: {
        value: alertNotificationGroupToHclTerraform(this._notificationGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertNotificationGroup",
      },
      phantom_mode: {
        value: cdktf.booleanToHclTerraform(this._phantomMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: alertScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertSchedule",
      },
      type_definition: {
        value: alertTypeDefinitionToHclTerraform(this._typeDefinition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertTypeDefinition",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
