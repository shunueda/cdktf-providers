// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataOpsAlarmMessagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alarm level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#alarm_level DataTencentcloudWedataOpsAlarmMessages#alarm_level}
  */
  readonly alarmLevel?: number;
  /**
  * Alert recipient Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#alarm_recipient_id DataTencentcloudWedataOpsAlarmMessages#alarm_recipient_id}
  */
  readonly alarmRecipientId?: string;
  /**
  * Specifies the Alarm end time in the format yyyy-MM-dd HH:MM:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#end_time DataTencentcloudWedataOpsAlarmMessages#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#id DataTencentcloudWedataOpsAlarmMessages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#project_id DataTencentcloudWedataOpsAlarmMessages#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#result_output_file DataTencentcloudWedataOpsAlarmMessages#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Starting Alarm time. format: yyyy-MM-dd HH:MM:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#start_time DataTencentcloudWedataOpsAlarmMessages#start_time}
  */
  readonly startTime?: string;
  /**
  * For incoming and returned filter time zone, default UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#time_zone DataTencentcloudWedataOpsAlarmMessages#time_zone}
  */
  readonly timeZone?: string;
}
export interface DataTencentcloudWedataOpsAlarmMessagesDataItems {
}

export function dataTencentcloudWedataOpsAlarmMessagesDataItemsToTerraform(struct?: DataTencentcloudWedataOpsAlarmMessagesDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmMessagesDataItemsToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmMessagesDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmMessagesDataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmMessagesDataItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmMessagesDataItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_level - computed: true, optional: false, required: false
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }

  // alarm_message_id - computed: true, optional: false, required: false
  public get alarmMessageId() {
    return this.getNumberAttribute('alarm_message_id');
  }

  // alarm_reason - computed: true, optional: false, required: false
  public get alarmReason() {
    return this.getStringAttribute('alarm_reason');
  }

  // alarm_recipients - computed: true, optional: false, required: false
  public get alarmRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_recipients'));
  }

  // alarm_rule_id - computed: true, optional: false, required: false
  public get alarmRuleId() {
    return this.getStringAttribute('alarm_rule_id');
  }

  // alarm_time - computed: true, optional: false, required: false
  public get alarmTime() {
    return this.getStringAttribute('alarm_time');
  }

  // alarm_ways - computed: true, optional: false, required: false
  public get alarmWays() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_ways'));
  }

  // cur_run_date - computed: true, optional: false, required: false
  public get curRunDate() {
    return this.getStringAttribute('cur_run_date');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
}

export class DataTencentcloudWedataOpsAlarmMessagesDataItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmMessagesDataItemsOutputReference {
    return new DataTencentcloudWedataOpsAlarmMessagesDataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmMessagesData {
}

export function dataTencentcloudWedataOpsAlarmMessagesDataToTerraform(struct?: DataTencentcloudWedataOpsAlarmMessagesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmMessagesDataToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmMessagesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmMessagesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmMessagesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmMessagesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudWedataOpsAlarmMessagesDataItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // page_number - computed: true, optional: false, required: false
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // total_page_number - computed: true, optional: false, required: false
  public get totalPageNumber() {
    return this.getNumberAttribute('total_page_number');
  }
}

export class DataTencentcloudWedataOpsAlarmMessagesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmMessagesDataOutputReference {
    return new DataTencentcloudWedataOpsAlarmMessagesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages tencentcloud_wedata_ops_alarm_messages}
*/
export class DataTencentcloudWedataOpsAlarmMessages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_ops_alarm_messages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataOpsAlarmMessages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataOpsAlarmMessages to import
  * @param importFromId The id of the existing DataTencentcloudWedataOpsAlarmMessages that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataOpsAlarmMessages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_ops_alarm_messages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/wedata_ops_alarm_messages tencentcloud_wedata_ops_alarm_messages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataOpsAlarmMessagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataOpsAlarmMessagesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_ops_alarm_messages',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmLevel = config.alarmLevel;
    this._alarmRecipientId = config.alarmRecipientId;
    this._endTime = config.endTime;
    this._id = config.id;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
    this._timeZone = config.timeZone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_level - computed: false, optional: true, required: false
  private _alarmLevel?: number; 
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }
  public set alarmLevel(value: number) {
    this._alarmLevel = value;
  }
  public resetAlarmLevel() {
    this._alarmLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmLevelInput() {
    return this._alarmLevel;
  }

  // alarm_recipient_id - computed: false, optional: true, required: false
  private _alarmRecipientId?: string; 
  public get alarmRecipientId() {
    return this.getStringAttribute('alarm_recipient_id');
  }
  public set alarmRecipientId(value: string) {
    this._alarmRecipientId = value;
  }
  public resetAlarmRecipientId() {
    this._alarmRecipientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRecipientIdInput() {
    return this._alarmRecipientId;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataOpsAlarmMessagesDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_level: cdktf.numberToTerraform(this._alarmLevel),
      alarm_recipient_id: cdktf.stringToTerraform(this._alarmRecipientId),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.stringToTerraform(this._startTime),
      time_zone: cdktf.stringToTerraform(this._timeZone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_level: {
        value: cdktf.numberToHclTerraform(this._alarmLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alarm_recipient_id: {
        value: cdktf.stringToHclTerraform(this._alarmRecipientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
