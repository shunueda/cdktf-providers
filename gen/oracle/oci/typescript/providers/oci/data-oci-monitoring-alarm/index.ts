// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMonitoringAlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm#alarm_id DataOciMonitoringAlarm#alarm_id}
  */
  readonly alarmId: string;
}
export interface DataOciMonitoringAlarmOverrides {
}

export function dataOciMonitoringAlarmOverridesToTerraform(struct?: DataOciMonitoringAlarmOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMonitoringAlarmOverridesToHclTerraform(struct?: DataOciMonitoringAlarmOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMonitoringAlarmOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMonitoringAlarmOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMonitoringAlarmOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // pending_duration - computed: true, optional: false, required: false
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class DataOciMonitoringAlarmOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMonitoringAlarmOverridesOutputReference {
    return new DataOciMonitoringAlarmOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMonitoringAlarmSuppression {
}

export function dataOciMonitoringAlarmSuppressionToTerraform(struct?: DataOciMonitoringAlarmSuppression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMonitoringAlarmSuppressionToHclTerraform(struct?: DataOciMonitoringAlarmSuppression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMonitoringAlarmSuppressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMonitoringAlarmSuppression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMonitoringAlarmSuppression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // time_suppress_from - computed: true, optional: false, required: false
  public get timeSuppressFrom() {
    return this.getStringAttribute('time_suppress_from');
  }

  // time_suppress_until - computed: true, optional: false, required: false
  public get timeSuppressUntil() {
    return this.getStringAttribute('time_suppress_until');
  }
}

export class DataOciMonitoringAlarmSuppressionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMonitoringAlarmSuppressionOutputReference {
    return new DataOciMonitoringAlarmSuppressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm oci_monitoring_alarm}
*/
export class DataOciMonitoringAlarm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_monitoring_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMonitoringAlarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMonitoringAlarm to import
  * @param importFromId The id of the existing DataOciMonitoringAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMonitoringAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_monitoring_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm oci_monitoring_alarm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMonitoringAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMonitoringAlarmConfig) {
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
    this._alarmId = config.alarmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_id - computed: false, optional: false, required: true
  private _alarmId?: string; 
  public get alarmId() {
    return this.getStringAttribute('alarm_id');
  }
  public set alarmId(value: string) {
    this._alarmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdInput() {
    return this._alarmId;
  }

  // alarm_summary - computed: true, optional: false, required: false
  public get alarmSummary() {
    return this.getStringAttribute('alarm_summary');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // destinations - computed: true, optional: false, required: false
  public get destinations() {
    return this.getListAttribute('destinations');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // evaluation_slack_duration - computed: true, optional: false, required: false
  public get evaluationSlackDuration() {
    return this.getStringAttribute('evaluation_slack_duration');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_notifications_per_metric_dimension_enabled - computed: true, optional: false, required: false
  public get isNotificationsPerMetricDimensionEnabled() {
    return this.getBooleanAttribute('is_notifications_per_metric_dimension_enabled');
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // metric_compartment_id - computed: true, optional: false, required: false
  public get metricCompartmentId() {
    return this.getStringAttribute('metric_compartment_id');
  }

  // metric_compartment_id_in_subtree - computed: true, optional: false, required: false
  public get metricCompartmentIdInSubtree() {
    return this.getBooleanAttribute('metric_compartment_id_in_subtree');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // notification_title - computed: true, optional: false, required: false
  public get notificationTitle() {
    return this.getStringAttribute('notification_title');
  }

  // notification_version - computed: true, optional: false, required: false
  public get notificationVersion() {
    return this.getStringAttribute('notification_version');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataOciMonitoringAlarmOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // pending_duration - computed: true, optional: false, required: false
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // repeat_notification_duration - computed: true, optional: false, required: false
  public get repeatNotificationDuration() {
    return this.getStringAttribute('repeat_notification_duration');
  }

  // resolution - computed: true, optional: false, required: false
  public get resolution() {
    return this.getStringAttribute('resolution');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // suppression - computed: true, optional: false, required: false
  private _suppression = new DataOciMonitoringAlarmSuppressionList(this, "suppression", false);
  public get suppression() {
    return this._suppression;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_id: cdktf.stringToTerraform(this._alarmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_id: {
        value: cdktf.stringToHclTerraform(this._alarmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
