// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/monitoring_alarm_suppression
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMonitoringAlarmSuppressionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/monitoring_alarm_suppression#alarm_suppression_id DataOciMonitoringAlarmSuppressionA#alarm_suppression_id}
  */
  readonly alarmSuppressionId: string;
}
export interface DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget {
}

export function dataOciMonitoringAlarmSuppressionAlarmSuppressionTargetToTerraform(struct?: DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMonitoringAlarmSuppressionAlarmSuppressionTargetToHclTerraform(struct?: DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_id - computed: true, optional: false, required: false
  public get alarmId() {
    return this.getStringAttribute('alarm_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_id_in_subtree - computed: true, optional: false, required: false
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}

export class DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference {
    return new DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMonitoringAlarmSuppressionSuppressionConditions {
}

export function dataOciMonitoringAlarmSuppressionSuppressionConditionsToTerraform(struct?: DataOciMonitoringAlarmSuppressionSuppressionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMonitoringAlarmSuppressionSuppressionConditionsToHclTerraform(struct?: DataOciMonitoringAlarmSuppressionSuppressionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMonitoringAlarmSuppressionSuppressionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMonitoringAlarmSuppressionSuppressionConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // suppression_duration - computed: true, optional: false, required: false
  public get suppressionDuration() {
    return this.getStringAttribute('suppression_duration');
  }

  // suppression_recurrence - computed: true, optional: false, required: false
  public get suppressionRecurrence() {
    return this.getStringAttribute('suppression_recurrence');
  }
}

export class DataOciMonitoringAlarmSuppressionSuppressionConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference {
    return new DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/monitoring_alarm_suppression oci_monitoring_alarm_suppression}
*/
export class DataOciMonitoringAlarmSuppressionA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_monitoring_alarm_suppression";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMonitoringAlarmSuppressionA to import
  * @param importFromId The id of the existing DataOciMonitoringAlarmSuppressionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/monitoring_alarm_suppression#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMonitoringAlarmSuppressionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_monitoring_alarm_suppression", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/monitoring_alarm_suppression oci_monitoring_alarm_suppression} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMonitoringAlarmSuppressionAConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMonitoringAlarmSuppressionAConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_alarm_suppression',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmSuppressionId = config.alarmSuppressionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_suppression_id - computed: false, optional: false, required: true
  private _alarmSuppressionId?: string; 
  public get alarmSuppressionId() {
    return this.getStringAttribute('alarm_suppression_id');
  }
  public set alarmSuppressionId(value: string) {
    this._alarmSuppressionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmSuppressionIdInput() {
    return this._alarmSuppressionId;
  }

  // alarm_suppression_target - computed: true, optional: false, required: false
  private _alarmSuppressionTarget = new DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList(this, "alarm_suppression_target", false);
  public get alarmSuppressionTarget() {
    return this._alarmSuppressionTarget;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new cdktf.StringMap(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // suppression_conditions - computed: true, optional: false, required: false
  private _suppressionConditions = new DataOciMonitoringAlarmSuppressionSuppressionConditionsList(this, "suppression_conditions", false);
  public get suppressionConditions() {
    return this._suppressionConditions;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_suppress_from - computed: true, optional: false, required: false
  public get timeSuppressFrom() {
    return this.getStringAttribute('time_suppress_from');
  }

  // time_suppress_until - computed: true, optional: false, required: false
  public get timeSuppressUntil() {
    return this.getStringAttribute('time_suppress_until');
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
      alarm_suppression_id: cdktf.stringToTerraform(this._alarmSuppressionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_suppression_id: {
        value: cdktf.stringToHclTerraform(this._alarmSuppressionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
