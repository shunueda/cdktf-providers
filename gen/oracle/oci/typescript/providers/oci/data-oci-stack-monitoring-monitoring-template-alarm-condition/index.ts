// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/stack_monitoring_monitoring_template_alarm_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringMonitoringTemplateAlarmConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/stack_monitoring_monitoring_template_alarm_condition#alarm_condition_id DataOciStackMonitoringMonitoringTemplateAlarmCondition#alarm_condition_id}
  */
  readonly alarmConditionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/stack_monitoring_monitoring_template_alarm_condition#monitoring_template_id DataOciStackMonitoringMonitoringTemplateAlarmCondition#monitoring_template_id}
  */
  readonly monitoringTemplateId: string;
}
export interface DataOciStackMonitoringMonitoringTemplateAlarmConditionConditions {
}

export function dataOciStackMonitoringMonitoringTemplateAlarmConditionConditionsToTerraform(struct?: DataOciStackMonitoringMonitoringTemplateAlarmConditionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoringTemplateAlarmConditionConditionsToHclTerraform(struct?: DataOciStackMonitoringMonitoringTemplateAlarmConditionConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoringTemplateAlarmConditionConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoringTemplateAlarmConditionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoringTemplateAlarmConditionConditions | undefined) {
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

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // should_append_note - computed: true, optional: false, required: false
  public get shouldAppendNote() {
    return this.getBooleanAttribute('should_append_note');
  }

  // should_append_url - computed: true, optional: false, required: false
  public get shouldAppendUrl() {
    return this.getBooleanAttribute('should_append_url');
  }

  // trigger_delay - computed: true, optional: false, required: false
  public get triggerDelay() {
    return this.getStringAttribute('trigger_delay');
  }
}

export class DataOciStackMonitoringMonitoringTemplateAlarmConditionConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoringTemplateAlarmConditionConditionsOutputReference {
    return new DataOciStackMonitoringMonitoringTemplateAlarmConditionConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/stack_monitoring_monitoring_template_alarm_condition oci_stack_monitoring_monitoring_template_alarm_condition}
*/
export class DataOciStackMonitoringMonitoringTemplateAlarmCondition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitoring_template_alarm_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringMonitoringTemplateAlarmCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringMonitoringTemplateAlarmCondition to import
  * @param importFromId The id of the existing DataOciStackMonitoringMonitoringTemplateAlarmCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/stack_monitoring_monitoring_template_alarm_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringMonitoringTemplateAlarmCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitoring_template_alarm_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/stack_monitoring_monitoring_template_alarm_condition oci_stack_monitoring_monitoring_template_alarm_condition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringMonitoringTemplateAlarmConditionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringMonitoringTemplateAlarmConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitoring_template_alarm_condition',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmConditionId = config.alarmConditionId;
    this._monitoringTemplateId = config.monitoringTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_condition_id - computed: false, optional: false, required: true
  private _alarmConditionId?: string; 
  public get alarmConditionId() {
    return this.getStringAttribute('alarm_condition_id');
  }
  public set alarmConditionId(value: string) {
    this._alarmConditionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmConditionIdInput() {
    return this._alarmConditionId;
  }

  // composite_type - computed: true, optional: false, required: false
  public get compositeType() {
    return this.getStringAttribute('composite_type');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataOciStackMonitoringMonitoringTemplateAlarmConditionConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // monitoring_template_id - computed: false, optional: false, required: true
  private _monitoringTemplateId?: string; 
  public get monitoringTemplateId() {
    return this.getStringAttribute('monitoring_template_id');
  }
  public set monitoringTemplateId(value: string) {
    this._monitoringTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringTemplateIdInput() {
    return this._monitoringTemplateId;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
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
      alarm_condition_id: cdktf.stringToTerraform(this._alarmConditionId),
      monitoring_template_id: cdktf.stringToTerraform(this._monitoringTemplateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_condition_id: {
        value: cdktf.stringToHclTerraform(this._alarmConditionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_template_id: {
        value: cdktf.stringToHclTerraform(this._monitoringTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
