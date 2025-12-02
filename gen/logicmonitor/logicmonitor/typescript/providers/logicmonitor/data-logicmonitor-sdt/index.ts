// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorSdtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#admin DataLogicmonitorSdt#admin}
  */
  readonly admin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#batch_job_name DataLogicmonitorSdt#batch_job_name}
  */
  readonly batchJobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#collector_description DataLogicmonitorSdt#collector_description}
  */
  readonly collectorDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#collector_id DataLogicmonitorSdt#collector_id}
  */
  readonly collectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#comment DataLogicmonitorSdt#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#data_source_id DataLogicmonitorSdt#data_source_id}
  */
  readonly dataSourceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#data_source_instance_id DataLogicmonitorSdt#data_source_instance_id}
  */
  readonly dataSourceInstanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#data_source_instance_name DataLogicmonitorSdt#data_source_instance_name}
  */
  readonly dataSourceInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#data_source_name DataLogicmonitorSdt#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#default_value DataLogicmonitorSdt#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_batch_job_id DataLogicmonitorSdt#device_batch_job_id}
  */
  readonly deviceBatchJobId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_data_source_id DataLogicmonitorSdt#device_data_source_id}
  */
  readonly deviceDataSourceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_data_source_instance_group_id DataLogicmonitorSdt#device_data_source_instance_group_id}
  */
  readonly deviceDataSourceInstanceGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_data_source_instance_group_name DataLogicmonitorSdt#device_data_source_instance_group_name}
  */
  readonly deviceDataSourceInstanceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_display_name DataLogicmonitorSdt#device_display_name}
  */
  readonly deviceDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_event_source_id DataLogicmonitorSdt#device_event_source_id}
  */
  readonly deviceEventSourceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_group_full_path DataLogicmonitorSdt#device_group_full_path}
  */
  readonly deviceGroupFullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_group_id DataLogicmonitorSdt#device_group_id}
  */
  readonly deviceGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#device_id DataLogicmonitorSdt#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#duration DataLogicmonitorSdt#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#end_date_time DataLogicmonitorSdt#end_date_time}
  */
  readonly endDateTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#end_date_time_on_local DataLogicmonitorSdt#end_date_time_on_local}
  */
  readonly endDateTimeOnLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#end_hour DataLogicmonitorSdt#end_hour}
  */
  readonly endHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#end_minute DataLogicmonitorSdt#end_minute}
  */
  readonly endMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#event_source_name DataLogicmonitorSdt#event_source_name}
  */
  readonly eventSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#filter DataLogicmonitorSdt#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#hour DataLogicmonitorSdt#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#id DataLogicmonitorSdt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#is_effective DataLogicmonitorSdt#is_effective}
  */
  readonly isEffective?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#minute DataLogicmonitorSdt#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#month_day DataLogicmonitorSdt#month_day}
  */
  readonly monthDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#sdt_type DataLogicmonitorSdt#sdt_type}
  */
  readonly sdtType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#start_date_time DataLogicmonitorSdt#start_date_time}
  */
  readonly startDateTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#start_date_time_on_local DataLogicmonitorSdt#start_date_time_on_local}
  */
  readonly startDateTimeOnLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#timezone DataLogicmonitorSdt#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#type DataLogicmonitorSdt#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#week_day DataLogicmonitorSdt#week_day}
  */
  readonly weekDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#week_of_month DataLogicmonitorSdt#week_of_month}
  */
  readonly weekOfMonth?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt logicmonitor_sdt}
*/
export class DataLogicmonitorSdt extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_sdt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorSdt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorSdt to import
  * @param importFromId The id of the existing DataLogicmonitorSdt that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorSdt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_sdt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/sdt logicmonitor_sdt} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorSdtConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorSdtConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_sdt',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.27',
        providerVersionConstraint: '2.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._batchJobName = config.batchJobName;
    this._collectorDescription = config.collectorDescription;
    this._collectorId = config.collectorId;
    this._comment = config.comment;
    this._dataSourceId = config.dataSourceId;
    this._dataSourceInstanceId = config.dataSourceInstanceId;
    this._dataSourceInstanceName = config.dataSourceInstanceName;
    this._dataSourceName = config.dataSourceName;
    this._defaultValue = config.defaultValue;
    this._deviceBatchJobId = config.deviceBatchJobId;
    this._deviceDataSourceId = config.deviceDataSourceId;
    this._deviceDataSourceInstanceGroupId = config.deviceDataSourceInstanceGroupId;
    this._deviceDataSourceInstanceGroupName = config.deviceDataSourceInstanceGroupName;
    this._deviceDisplayName = config.deviceDisplayName;
    this._deviceEventSourceId = config.deviceEventSourceId;
    this._deviceGroupFullPath = config.deviceGroupFullPath;
    this._deviceGroupId = config.deviceGroupId;
    this._deviceId = config.deviceId;
    this._duration = config.duration;
    this._endDateTime = config.endDateTime;
    this._endDateTimeOnLocal = config.endDateTimeOnLocal;
    this._endHour = config.endHour;
    this._endMinute = config.endMinute;
    this._eventSourceName = config.eventSourceName;
    this._filter = config.filter;
    this._hour = config.hour;
    this._id = config.id;
    this._isEffective = config.isEffective;
    this._minute = config.minute;
    this._monthDay = config.monthDay;
    this._sdtType = config.sdtType;
    this._startDateTime = config.startDateTime;
    this._startDateTimeOnLocal = config.startDateTimeOnLocal;
    this._timezone = config.timezone;
    this._type = config.type;
    this._weekDay = config.weekDay;
    this._weekOfMonth = config.weekOfMonth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: false, optional: true, required: false
  private _admin?: string; 
  public get admin() {
    return this.getStringAttribute('admin');
  }
  public set admin(value: string) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // batch_job_name - computed: false, optional: true, required: false
  private _batchJobName?: string; 
  public get batchJobName() {
    return this.getStringAttribute('batch_job_name');
  }
  public set batchJobName(value: string) {
    this._batchJobName = value;
  }
  public resetBatchJobName() {
    this._batchJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchJobNameInput() {
    return this._batchJobName;
  }

  // collector_description - computed: false, optional: true, required: false
  private _collectorDescription?: string; 
  public get collectorDescription() {
    return this.getStringAttribute('collector_description');
  }
  public set collectorDescription(value: string) {
    this._collectorDescription = value;
  }
  public resetCollectorDescription() {
    this._collectorDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorDescriptionInput() {
    return this._collectorDescription;
  }

  // collector_id - computed: false, optional: true, required: false
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  public resetCollectorId() {
    this._collectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // data_source_id - computed: false, optional: true, required: false
  private _dataSourceId?: number; 
  public get dataSourceId() {
    return this.getNumberAttribute('data_source_id');
  }
  public set dataSourceId(value: number) {
    this._dataSourceId = value;
  }
  public resetDataSourceId() {
    this._dataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // data_source_instance_id - computed: false, optional: true, required: false
  private _dataSourceInstanceId?: number; 
  public get dataSourceInstanceId() {
    return this.getNumberAttribute('data_source_instance_id');
  }
  public set dataSourceInstanceId(value: number) {
    this._dataSourceInstanceId = value;
  }
  public resetDataSourceInstanceId() {
    this._dataSourceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInstanceIdInput() {
    return this._dataSourceInstanceId;
  }

  // data_source_instance_name - computed: false, optional: true, required: false
  private _dataSourceInstanceName?: string; 
  public get dataSourceInstanceName() {
    return this.getStringAttribute('data_source_instance_name');
  }
  public set dataSourceInstanceName(value: string) {
    this._dataSourceInstanceName = value;
  }
  public resetDataSourceInstanceName() {
    this._dataSourceInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInstanceNameInput() {
    return this._dataSourceInstanceName;
  }

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // device_batch_job_id - computed: false, optional: true, required: false
  private _deviceBatchJobId?: number; 
  public get deviceBatchJobId() {
    return this.getNumberAttribute('device_batch_job_id');
  }
  public set deviceBatchJobId(value: number) {
    this._deviceBatchJobId = value;
  }
  public resetDeviceBatchJobId() {
    this._deviceBatchJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceBatchJobIdInput() {
    return this._deviceBatchJobId;
  }

  // device_data_source_id - computed: false, optional: true, required: false
  private _deviceDataSourceId?: number; 
  public get deviceDataSourceId() {
    return this.getNumberAttribute('device_data_source_id');
  }
  public set deviceDataSourceId(value: number) {
    this._deviceDataSourceId = value;
  }
  public resetDeviceDataSourceId() {
    this._deviceDataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDataSourceIdInput() {
    return this._deviceDataSourceId;
  }

  // device_data_source_instance_group_id - computed: false, optional: true, required: false
  private _deviceDataSourceInstanceGroupId?: number; 
  public get deviceDataSourceInstanceGroupId() {
    return this.getNumberAttribute('device_data_source_instance_group_id');
  }
  public set deviceDataSourceInstanceGroupId(value: number) {
    this._deviceDataSourceInstanceGroupId = value;
  }
  public resetDeviceDataSourceInstanceGroupId() {
    this._deviceDataSourceInstanceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDataSourceInstanceGroupIdInput() {
    return this._deviceDataSourceInstanceGroupId;
  }

  // device_data_source_instance_group_name - computed: false, optional: true, required: false
  private _deviceDataSourceInstanceGroupName?: string; 
  public get deviceDataSourceInstanceGroupName() {
    return this.getStringAttribute('device_data_source_instance_group_name');
  }
  public set deviceDataSourceInstanceGroupName(value: string) {
    this._deviceDataSourceInstanceGroupName = value;
  }
  public resetDeviceDataSourceInstanceGroupName() {
    this._deviceDataSourceInstanceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDataSourceInstanceGroupNameInput() {
    return this._deviceDataSourceInstanceGroupName;
  }

  // device_display_name - computed: false, optional: true, required: false
  private _deviceDisplayName?: string; 
  public get deviceDisplayName() {
    return this.getStringAttribute('device_display_name');
  }
  public set deviceDisplayName(value: string) {
    this._deviceDisplayName = value;
  }
  public resetDeviceDisplayName() {
    this._deviceDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameInput() {
    return this._deviceDisplayName;
  }

  // device_event_source_id - computed: false, optional: true, required: false
  private _deviceEventSourceId?: number; 
  public get deviceEventSourceId() {
    return this.getNumberAttribute('device_event_source_id');
  }
  public set deviceEventSourceId(value: number) {
    this._deviceEventSourceId = value;
  }
  public resetDeviceEventSourceId() {
    this._deviceEventSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceEventSourceIdInput() {
    return this._deviceEventSourceId;
  }

  // device_group_full_path - computed: false, optional: true, required: false
  private _deviceGroupFullPath?: string; 
  public get deviceGroupFullPath() {
    return this.getStringAttribute('device_group_full_path');
  }
  public set deviceGroupFullPath(value: string) {
    this._deviceGroupFullPath = value;
  }
  public resetDeviceGroupFullPath() {
    this._deviceGroupFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupFullPathInput() {
    return this._deviceGroupFullPath;
  }

  // device_group_id - computed: false, optional: true, required: false
  private _deviceGroupId?: number; 
  public get deviceGroupId() {
    return this.getNumberAttribute('device_group_id');
  }
  public set deviceGroupId(value: number) {
    this._deviceGroupId = value;
  }
  public resetDeviceGroupId() {
    this._deviceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupIdInput() {
    return this._deviceGroupId;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // end_date_time - computed: false, optional: true, required: false
  private _endDateTime?: number; 
  public get endDateTime() {
    return this.getNumberAttribute('end_date_time');
  }
  public set endDateTime(value: number) {
    this._endDateTime = value;
  }
  public resetEndDateTime() {
    this._endDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTimeInput() {
    return this._endDateTime;
  }

  // end_date_time_on_local - computed: false, optional: true, required: false
  private _endDateTimeOnLocal?: string; 
  public get endDateTimeOnLocal() {
    return this.getStringAttribute('end_date_time_on_local');
  }
  public set endDateTimeOnLocal(value: string) {
    this._endDateTimeOnLocal = value;
  }
  public resetEndDateTimeOnLocal() {
    this._endDateTimeOnLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTimeOnLocalInput() {
    return this._endDateTimeOnLocal;
  }

  // end_hour - computed: false, optional: true, required: false
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  public resetEndHour() {
    this._endHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_minute - computed: false, optional: true, required: false
  private _endMinute?: number; 
  public get endMinute() {
    return this.getNumberAttribute('end_minute');
  }
  public set endMinute(value: number) {
    this._endMinute = value;
  }
  public resetEndMinute() {
    this._endMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinuteInput() {
    return this._endMinute;
  }

  // event_source_name - computed: false, optional: true, required: false
  private _eventSourceName?: string; 
  public get eventSourceName() {
    return this.getStringAttribute('event_source_name');
  }
  public set eventSourceName(value: string) {
    this._eventSourceName = value;
  }
  public resetEventSourceName() {
    this._eventSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceNameInput() {
    return this._eventSourceName;
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

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_effective - computed: false, optional: true, required: false
  private _isEffective?: boolean | cdktf.IResolvable; 
  public get isEffective() {
    return this.getBooleanAttribute('is_effective');
  }
  public set isEffective(value: boolean | cdktf.IResolvable) {
    this._isEffective = value;
  }
  public resetIsEffective() {
    this._isEffective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEffectiveInput() {
    return this._isEffective;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // month_day - computed: false, optional: true, required: false
  private _monthDay?: number; 
  public get monthDay() {
    return this.getNumberAttribute('month_day');
  }
  public set monthDay(value: number) {
    this._monthDay = value;
  }
  public resetMonthDay() {
    this._monthDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthDayInput() {
    return this._monthDay;
  }

  // sdt_type - computed: false, optional: true, required: false
  private _sdtType?: string; 
  public get sdtType() {
    return this.getStringAttribute('sdt_type');
  }
  public set sdtType(value: string) {
    this._sdtType = value;
  }
  public resetSdtType() {
    this._sdtType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdtTypeInput() {
    return this._sdtType;
  }

  // start_date_time - computed: false, optional: true, required: false
  private _startDateTime?: number; 
  public get startDateTime() {
    return this.getNumberAttribute('start_date_time');
  }
  public set startDateTime(value: number) {
    this._startDateTime = value;
  }
  public resetStartDateTime() {
    this._startDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeInput() {
    return this._startDateTime;
  }

  // start_date_time_on_local - computed: false, optional: true, required: false
  private _startDateTimeOnLocal?: string; 
  public get startDateTimeOnLocal() {
    return this.getStringAttribute('start_date_time_on_local');
  }
  public set startDateTimeOnLocal(value: string) {
    this._startDateTimeOnLocal = value;
  }
  public resetStartDateTimeOnLocal() {
    this._startDateTimeOnLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeOnLocalInput() {
    return this._startDateTimeOnLocal;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // week_day - computed: false, optional: true, required: false
  private _weekDay?: string; 
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
  public set weekDay(value: string) {
    this._weekDay = value;
  }
  public resetWeekDay() {
    this._weekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayInput() {
    return this._weekDay;
  }

  // week_of_month - computed: false, optional: true, required: false
  private _weekOfMonth?: string; 
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
  public set weekOfMonth(value: string) {
    this._weekOfMonth = value;
  }
  public resetWeekOfMonth() {
    this._weekOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: cdktf.stringToTerraform(this._admin),
      batch_job_name: cdktf.stringToTerraform(this._batchJobName),
      collector_description: cdktf.stringToTerraform(this._collectorDescription),
      collector_id: cdktf.numberToTerraform(this._collectorId),
      comment: cdktf.stringToTerraform(this._comment),
      data_source_id: cdktf.numberToTerraform(this._dataSourceId),
      data_source_instance_id: cdktf.numberToTerraform(this._dataSourceInstanceId),
      data_source_instance_name: cdktf.stringToTerraform(this._dataSourceInstanceName),
      data_source_name: cdktf.stringToTerraform(this._dataSourceName),
      default_value: cdktf.stringToTerraform(this._defaultValue),
      device_batch_job_id: cdktf.numberToTerraform(this._deviceBatchJobId),
      device_data_source_id: cdktf.numberToTerraform(this._deviceDataSourceId),
      device_data_source_instance_group_id: cdktf.numberToTerraform(this._deviceDataSourceInstanceGroupId),
      device_data_source_instance_group_name: cdktf.stringToTerraform(this._deviceDataSourceInstanceGroupName),
      device_display_name: cdktf.stringToTerraform(this._deviceDisplayName),
      device_event_source_id: cdktf.numberToTerraform(this._deviceEventSourceId),
      device_group_full_path: cdktf.stringToTerraform(this._deviceGroupFullPath),
      device_group_id: cdktf.numberToTerraform(this._deviceGroupId),
      device_id: cdktf.numberToTerraform(this._deviceId),
      duration: cdktf.numberToTerraform(this._duration),
      end_date_time: cdktf.numberToTerraform(this._endDateTime),
      end_date_time_on_local: cdktf.stringToTerraform(this._endDateTimeOnLocal),
      end_hour: cdktf.numberToTerraform(this._endHour),
      end_minute: cdktf.numberToTerraform(this._endMinute),
      event_source_name: cdktf.stringToTerraform(this._eventSourceName),
      filter: cdktf.stringToTerraform(this._filter),
      hour: cdktf.numberToTerraform(this._hour),
      id: cdktf.numberToTerraform(this._id),
      is_effective: cdktf.booleanToTerraform(this._isEffective),
      minute: cdktf.numberToTerraform(this._minute),
      month_day: cdktf.numberToTerraform(this._monthDay),
      sdt_type: cdktf.stringToTerraform(this._sdtType),
      start_date_time: cdktf.numberToTerraform(this._startDateTime),
      start_date_time_on_local: cdktf.stringToTerraform(this._startDateTimeOnLocal),
      timezone: cdktf.stringToTerraform(this._timezone),
      type: cdktf.stringToTerraform(this._type),
      week_day: cdktf.stringToTerraform(this._weekDay),
      week_of_month: cdktf.stringToTerraform(this._weekOfMonth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin: {
        value: cdktf.stringToHclTerraform(this._admin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_job_name: {
        value: cdktf.stringToHclTerraform(this._batchJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_description: {
        value: cdktf.stringToHclTerraform(this._collectorDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_id: {
        value: cdktf.numberToHclTerraform(this._collectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_id: {
        value: cdktf.numberToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_source_instance_id: {
        value: cdktf.numberToHclTerraform(this._dataSourceInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_source_instance_name: {
        value: cdktf.stringToHclTerraform(this._dataSourceInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_name: {
        value: cdktf.stringToHclTerraform(this._dataSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_batch_job_id: {
        value: cdktf.numberToHclTerraform(this._deviceBatchJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_data_source_id: {
        value: cdktf.numberToHclTerraform(this._deviceDataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_data_source_instance_group_id: {
        value: cdktf.numberToHclTerraform(this._deviceDataSourceInstanceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_data_source_instance_group_name: {
        value: cdktf.stringToHclTerraform(this._deviceDataSourceInstanceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_display_name: {
        value: cdktf.stringToHclTerraform(this._deviceDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_event_source_id: {
        value: cdktf.numberToHclTerraform(this._deviceEventSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_group_full_path: {
        value: cdktf.stringToHclTerraform(this._deviceGroupFullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_group_id: {
        value: cdktf.numberToHclTerraform(this._deviceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_date_time: {
        value: cdktf.numberToHclTerraform(this._endDateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_date_time_on_local: {
        value: cdktf.stringToHclTerraform(this._endDateTimeOnLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_hour: {
        value: cdktf.numberToHclTerraform(this._endHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_minute: {
        value: cdktf.numberToHclTerraform(this._endMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_source_name: {
        value: cdktf.stringToHclTerraform(this._eventSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hour: {
        value: cdktf.numberToHclTerraform(this._hour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_effective: {
        value: cdktf.booleanToHclTerraform(this._isEffective),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minute: {
        value: cdktf.numberToHclTerraform(this._minute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      month_day: {
        value: cdktf.numberToHclTerraform(this._monthDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdt_type: {
        value: cdktf.stringToHclTerraform(this._sdtType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date_time: {
        value: cdktf.numberToHclTerraform(this._startDateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_date_time_on_local: {
        value: cdktf.stringToHclTerraform(this._startDateTimeOnLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week_day: {
        value: cdktf.stringToHclTerraform(this._weekDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week_of_month: {
        value: cdktf.stringToHclTerraform(this._weekOfMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
