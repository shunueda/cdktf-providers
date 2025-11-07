// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringAlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}
  */
  readonly alarmSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}
  */
  readonly destinations: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}
  */
  readonly evaluationSlackDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}
  */
  readonly isNotificationsPerMetricDimensionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}
  */
  readonly metricCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}
  */
  readonly metricCompartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}
  */
  readonly notificationTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}
  */
  readonly notificationVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}
  */
  readonly pendingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}
  */
  readonly repeatNotificationDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}
  */
  readonly resolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}
  */
  readonly severity: string;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#overrides MonitoringAlarm#overrides}
  */
  readonly overrides?: MonitoringAlarmOverrides[] | cdktf.IResolvable;
  /**
  * suppression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#suppression MonitoringAlarm#suppression}
  */
  readonly suppression?: MonitoringAlarmSuppression;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#timeouts MonitoringAlarm#timeouts}
  */
  readonly timeouts?: MonitoringAlarmTimeouts;
}
export interface MonitoringAlarmOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}
  */
  readonly pendingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}
  */
  readonly severity?: string;
}

export function monitoringAlarmOverridesToTerraform(struct?: MonitoringAlarmOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    pending_duration: cdktf.stringToTerraform(struct!.pendingDuration),
    query: cdktf.stringToTerraform(struct!.query),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function monitoringAlarmOverridesToHclTerraform(struct?: MonitoringAlarmOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pending_duration: {
      value: cdktf.stringToHclTerraform(struct!.pendingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MonitoringAlarmOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringAlarmOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._pendingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingDuration = this._pendingDuration;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlarmOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._pendingDuration = undefined;
      this._query = undefined;
      this._ruleName = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._pendingDuration = value.pendingDuration;
      this._query = value.query;
      this._ruleName = value.ruleName;
      this._severity = value.severity;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // pending_duration - computed: true, optional: true, required: false
  private _pendingDuration?: string; 
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }
  public set pendingDuration(value: string) {
    this._pendingDuration = value;
  }
  public resetPendingDuration() {
    this._pendingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationInput() {
    return this._pendingDuration;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rule_name - computed: true, optional: true, required: false
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

  // severity - computed: true, optional: true, required: false
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

export class MonitoringAlarmOverridesList extends cdktf.ComplexList {
  public internalValue? : MonitoringAlarmOverrides[] | cdktf.IResolvable

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
  public get(index: number): MonitoringAlarmOverridesOutputReference {
    return new MonitoringAlarmOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringAlarmSuppression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}
  */
  readonly timeSuppressFrom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}
  */
  readonly timeSuppressUntil: string;
}

export function monitoringAlarmSuppressionToTerraform(struct?: MonitoringAlarmSuppressionOutputReference | MonitoringAlarmSuppression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    time_suppress_from: cdktf.stringToTerraform(struct!.timeSuppressFrom),
    time_suppress_until: cdktf.stringToTerraform(struct!.timeSuppressUntil),
  }
}


export function monitoringAlarmSuppressionToHclTerraform(struct?: MonitoringAlarmSuppressionOutputReference | MonitoringAlarmSuppression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_suppress_from: {
      value: cdktf.stringToHclTerraform(struct!.timeSuppressFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_suppress_until: {
      value: cdktf.stringToHclTerraform(struct!.timeSuppressUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlarmSuppressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlarmSuppression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._timeSuppressFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSuppressFrom = this._timeSuppressFrom;
    }
    if (this._timeSuppressUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSuppressUntil = this._timeSuppressUntil;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlarmSuppression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._timeSuppressFrom = undefined;
      this._timeSuppressUntil = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._timeSuppressFrom = value.timeSuppressFrom;
      this._timeSuppressUntil = value.timeSuppressUntil;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // time_suppress_from - computed: false, optional: false, required: true
  private _timeSuppressFrom?: string; 
  public get timeSuppressFrom() {
    return this.getStringAttribute('time_suppress_from');
  }
  public set timeSuppressFrom(value: string) {
    this._timeSuppressFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSuppressFromInput() {
    return this._timeSuppressFrom;
  }

  // time_suppress_until - computed: false, optional: false, required: true
  private _timeSuppressUntil?: string; 
  public get timeSuppressUntil() {
    return this.getStringAttribute('time_suppress_until');
  }
  public set timeSuppressUntil(value: string) {
    this._timeSuppressUntil = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSuppressUntilInput() {
    return this._timeSuppressUntil;
  }
}
export interface MonitoringAlarmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}
  */
  readonly update?: string;
}

export function monitoringAlarmTimeoutsToTerraform(struct?: MonitoringAlarmTimeouts | cdktf.IResolvable): any {
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


export function monitoringAlarmTimeoutsToHclTerraform(struct?: MonitoringAlarmTimeouts | cdktf.IResolvable): any {
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

export class MonitoringAlarmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitoringAlarmTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitoringAlarmTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm oci_monitoring_alarm}
*/
export class MonitoringAlarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_monitoring_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoringAlarm to import
  * @param importFromId The id of the existing MonitoringAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoringAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_monitoring_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/monitoring_alarm oci_monitoring_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_alarm',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmSummary = config.alarmSummary;
    this._body = config.body;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._destinations = config.destinations;
    this._displayName = config.displayName;
    this._evaluationSlackDuration = config.evaluationSlackDuration;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._isNotificationsPerMetricDimensionEnabled = config.isNotificationsPerMetricDimensionEnabled;
    this._messageFormat = config.messageFormat;
    this._metricCompartmentId = config.metricCompartmentId;
    this._metricCompartmentIdInSubtree = config.metricCompartmentIdInSubtree;
    this._namespace = config.namespace;
    this._notificationTitle = config.notificationTitle;
    this._notificationVersion = config.notificationVersion;
    this._pendingDuration = config.pendingDuration;
    this._query = config.query;
    this._repeatNotificationDuration = config.repeatNotificationDuration;
    this._resolution = config.resolution;
    this._resourceGroup = config.resourceGroup;
    this._ruleName = config.ruleName;
    this._severity = config.severity;
    this._overrides.internalValue = config.overrides;
    this._suppression.internalValue = config.suppression;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_summary - computed: true, optional: true, required: false
  private _alarmSummary?: string; 
  public get alarmSummary() {
    return this.getStringAttribute('alarm_summary');
  }
  public set alarmSummary(value: string) {
    this._alarmSummary = value;
  }
  public resetAlarmSummary() {
    this._alarmSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmSummaryInput() {
    return this._alarmSummary;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // evaluation_slack_duration - computed: true, optional: true, required: false
  private _evaluationSlackDuration?: string; 
  public get evaluationSlackDuration() {
    return this.getStringAttribute('evaluation_slack_duration');
  }
  public set evaluationSlackDuration(value: string) {
    this._evaluationSlackDuration = value;
  }
  public resetEvaluationSlackDuration() {
    this._evaluationSlackDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationSlackDurationInput() {
    return this._evaluationSlackDuration;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_notifications_per_metric_dimension_enabled - computed: true, optional: true, required: false
  private _isNotificationsPerMetricDimensionEnabled?: boolean | cdktf.IResolvable; 
  public get isNotificationsPerMetricDimensionEnabled() {
    return this.getBooleanAttribute('is_notifications_per_metric_dimension_enabled');
  }
  public set isNotificationsPerMetricDimensionEnabled(value: boolean | cdktf.IResolvable) {
    this._isNotificationsPerMetricDimensionEnabled = value;
  }
  public resetIsNotificationsPerMetricDimensionEnabled() {
    this._isNotificationsPerMetricDimensionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotificationsPerMetricDimensionEnabledInput() {
    return this._isNotificationsPerMetricDimensionEnabled;
  }

  // message_format - computed: true, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // metric_compartment_id - computed: false, optional: false, required: true
  private _metricCompartmentId?: string; 
  public get metricCompartmentId() {
    return this.getStringAttribute('metric_compartment_id');
  }
  public set metricCompartmentId(value: string) {
    this._metricCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCompartmentIdInput() {
    return this._metricCompartmentId;
  }

  // metric_compartment_id_in_subtree - computed: true, optional: true, required: false
  private _metricCompartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get metricCompartmentIdInSubtree() {
    return this.getBooleanAttribute('metric_compartment_id_in_subtree');
  }
  public set metricCompartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._metricCompartmentIdInSubtree = value;
  }
  public resetMetricCompartmentIdInSubtree() {
    this._metricCompartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCompartmentIdInSubtreeInput() {
    return this._metricCompartmentIdInSubtree;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // notification_title - computed: true, optional: true, required: false
  private _notificationTitle?: string; 
  public get notificationTitle() {
    return this.getStringAttribute('notification_title');
  }
  public set notificationTitle(value: string) {
    this._notificationTitle = value;
  }
  public resetNotificationTitle() {
    this._notificationTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTitleInput() {
    return this._notificationTitle;
  }

  // notification_version - computed: true, optional: true, required: false
  private _notificationVersion?: string; 
  public get notificationVersion() {
    return this.getStringAttribute('notification_version');
  }
  public set notificationVersion(value: string) {
    this._notificationVersion = value;
  }
  public resetNotificationVersion() {
    this._notificationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationVersionInput() {
    return this._notificationVersion;
  }

  // pending_duration - computed: true, optional: true, required: false
  private _pendingDuration?: string; 
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }
  public set pendingDuration(value: string) {
    this._pendingDuration = value;
  }
  public resetPendingDuration() {
    this._pendingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationInput() {
    return this._pendingDuration;
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

  // repeat_notification_duration - computed: true, optional: true, required: false
  private _repeatNotificationDuration?: string; 
  public get repeatNotificationDuration() {
    return this.getStringAttribute('repeat_notification_duration');
  }
  public set repeatNotificationDuration(value: string) {
    this._repeatNotificationDuration = value;
  }
  public resetRepeatNotificationDuration() {
    this._repeatNotificationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatNotificationDurationInput() {
    return this._repeatNotificationDuration;
  }

  // resolution - computed: true, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // rule_name - computed: true, optional: true, required: false
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

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new MonitoringAlarmOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: MonitoringAlarmOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // suppression - computed: false, optional: true, required: false
  private _suppression = new MonitoringAlarmSuppressionOutputReference(this, "suppression");
  public get suppression() {
    return this._suppression;
  }
  public putSuppression(value: MonitoringAlarmSuppression) {
    this._suppression.internalValue = value;
  }
  public resetSuppression() {
    this._suppression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionInput() {
    return this._suppression.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitoringAlarmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitoringAlarmTimeouts) {
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
      alarm_summary: cdktf.stringToTerraform(this._alarmSummary),
      body: cdktf.stringToTerraform(this._body),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinations),
      display_name: cdktf.stringToTerraform(this._displayName),
      evaluation_slack_duration: cdktf.stringToTerraform(this._evaluationSlackDuration),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      is_notifications_per_metric_dimension_enabled: cdktf.booleanToTerraform(this._isNotificationsPerMetricDimensionEnabled),
      message_format: cdktf.stringToTerraform(this._messageFormat),
      metric_compartment_id: cdktf.stringToTerraform(this._metricCompartmentId),
      metric_compartment_id_in_subtree: cdktf.booleanToTerraform(this._metricCompartmentIdInSubtree),
      namespace: cdktf.stringToTerraform(this._namespace),
      notification_title: cdktf.stringToTerraform(this._notificationTitle),
      notification_version: cdktf.stringToTerraform(this._notificationVersion),
      pending_duration: cdktf.stringToTerraform(this._pendingDuration),
      query: cdktf.stringToTerraform(this._query),
      repeat_notification_duration: cdktf.stringToTerraform(this._repeatNotificationDuration),
      resolution: cdktf.stringToTerraform(this._resolution),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      severity: cdktf.stringToTerraform(this._severity),
      overrides: cdktf.listMapper(monitoringAlarmOverridesToTerraform, true)(this._overrides.internalValue),
      suppression: monitoringAlarmSuppressionToTerraform(this._suppression.internalValue),
      timeouts: monitoringAlarmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_summary: {
        value: cdktf.stringToHclTerraform(this._alarmSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      destinations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_slack_duration: {
        value: cdktf.stringToHclTerraform(this._evaluationSlackDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_notifications_per_metric_dimension_enabled: {
        value: cdktf.booleanToHclTerraform(this._isNotificationsPerMetricDimensionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      message_format: {
        value: cdktf.stringToHclTerraform(this._messageFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_compartment_id: {
        value: cdktf.stringToHclTerraform(this._metricCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._metricCompartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_title: {
        value: cdktf.stringToHclTerraform(this._notificationTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_version: {
        value: cdktf.stringToHclTerraform(this._notificationVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending_duration: {
        value: cdktf.stringToHclTerraform(this._pendingDuration),
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
      repeat_notification_duration: {
        value: cdktf.stringToHclTerraform(this._repeatNotificationDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
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
      overrides: {
        value: cdktf.listMapperHcl(monitoringAlarmOverridesToHclTerraform, true)(this._overrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringAlarmOverridesList",
      },
      suppression: {
        value: monitoringAlarmSuppressionToHclTerraform(this._suppression.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringAlarmSuppressionList",
      },
      timeouts: {
        value: monitoringAlarmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitoringAlarmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
