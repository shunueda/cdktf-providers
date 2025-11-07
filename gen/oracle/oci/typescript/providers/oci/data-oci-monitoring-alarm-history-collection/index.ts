// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMonitoringAlarmHistoryCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}
  */
  readonly alarmHistorytype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}
  */
  readonly alarmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}
  */
  readonly timestampGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}
  */
  readonly timestampLessThan?: string;
}
export interface DataOciMonitoringAlarmHistoryCollectionEntries {
}

export function dataOciMonitoringAlarmHistoryCollectionEntriesToTerraform(struct?: DataOciMonitoringAlarmHistoryCollectionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMonitoringAlarmHistoryCollectionEntriesToHclTerraform(struct?: DataOciMonitoringAlarmHistoryCollectionEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMonitoringAlarmHistoryCollectionEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMonitoringAlarmHistoryCollectionEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_summary - computed: true, optional: false, required: false
  public get alarmSummary() {
    return this.getStringAttribute('alarm_summary');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // timestamp_triggered - computed: true, optional: false, required: false
  public get timestampTriggered() {
    return this.getStringAttribute('timestamp_triggered');
  }
}

export class DataOciMonitoringAlarmHistoryCollectionEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference {
    return new DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection oci_monitoring_alarm_history_collection}
*/
export class DataOciMonitoringAlarmHistoryCollection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_monitoring_alarm_history_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMonitoringAlarmHistoryCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMonitoringAlarmHistoryCollection to import
  * @param importFromId The id of the existing DataOciMonitoringAlarmHistoryCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMonitoringAlarmHistoryCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_monitoring_alarm_history_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/monitoring_alarm_history_collection oci_monitoring_alarm_history_collection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMonitoringAlarmHistoryCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMonitoringAlarmHistoryCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_alarm_history_collection',
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
    this._alarmHistorytype = config.alarmHistorytype;
    this._alarmId = config.alarmId;
    this._id = config.id;
    this._timestampGreaterThanOrEqualTo = config.timestampGreaterThanOrEqualTo;
    this._timestampLessThan = config.timestampLessThan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_historytype - computed: false, optional: true, required: false
  private _alarmHistorytype?: string; 
  public get alarmHistorytype() {
    return this.getStringAttribute('alarm_historytype');
  }
  public set alarmHistorytype(value: string) {
    this._alarmHistorytype = value;
  }
  public resetAlarmHistorytype() {
    this._alarmHistorytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmHistorytypeInput() {
    return this._alarmHistorytype;
  }

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

  // entries - computed: true, optional: false, required: false
  private _entries = new DataOciMonitoringAlarmHistoryCollectionEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
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

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // timestamp_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timestampGreaterThanOrEqualTo?: string; 
  public get timestampGreaterThanOrEqualTo() {
    return this.getStringAttribute('timestamp_greater_than_or_equal_to');
  }
  public set timestampGreaterThanOrEqualTo(value: string) {
    this._timestampGreaterThanOrEqualTo = value;
  }
  public resetTimestampGreaterThanOrEqualTo() {
    this._timestampGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampGreaterThanOrEqualToInput() {
    return this._timestampGreaterThanOrEqualTo;
  }

  // timestamp_less_than - computed: false, optional: true, required: false
  private _timestampLessThan?: string; 
  public get timestampLessThan() {
    return this.getStringAttribute('timestamp_less_than');
  }
  public set timestampLessThan(value: string) {
    this._timestampLessThan = value;
  }
  public resetTimestampLessThan() {
    this._timestampLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampLessThanInput() {
    return this._timestampLessThan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_historytype: cdktf.stringToTerraform(this._alarmHistorytype),
      alarm_id: cdktf.stringToTerraform(this._alarmId),
      id: cdktf.stringToTerraform(this._id),
      timestamp_greater_than_or_equal_to: cdktf.stringToTerraform(this._timestampGreaterThanOrEqualTo),
      timestamp_less_than: cdktf.stringToTerraform(this._timestampLessThan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_historytype: {
        value: cdktf.stringToHclTerraform(this._alarmHistorytype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_id: {
        value: cdktf.stringToHclTerraform(this._alarmId),
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
      timestamp_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timestampGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_less_than: {
        value: cdktf.stringToHclTerraform(this._timestampLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
