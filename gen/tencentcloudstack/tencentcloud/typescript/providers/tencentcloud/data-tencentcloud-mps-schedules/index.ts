// generated from terraform resource schema

import { DataTencentcloudMpsSchedulesScheduleInfoSetList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataTencentcloudMpsSchedulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/mps_schedules#id DataTencentcloudMpsSchedules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/mps_schedules#result_output_file DataTencentcloudMpsSchedules#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The IDs of the schemes to query. Array length limit: 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/mps_schedules#schedule_ids DataTencentcloudMpsSchedules#schedule_ids}
  */
  readonly scheduleIds?: number[];
  /**
  * The scheme status. Valid values:`Enabled`, `Disabled`. If you do not specify this parameter, all schemes will be returned regardless of the status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/mps_schedules#status DataTencentcloudMpsSchedules#status}
  */
  readonly status?: string;
  /**
  * The trigger type. Valid values:`CosFileUpload`: The scheme is triggered when a file is uploaded to Tencent Cloud Object Storage (COS).`AwsS3FileUpload`: The scheme is triggered when a file is uploaded to AWS S3.If you do not specify this parameter or leave it empty, all schemes will be returned regardless of the trigger type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/mps_schedules#trigger_type DataTencentcloudMpsSchedules#trigger_type}
  */
  readonly triggerType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/mps_schedules tencentcloud_mps_schedules}
*/
export class DataTencentcloudMpsSchedules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_schedules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMpsSchedules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMpsSchedules to import
  * @param importFromId The id of the existing DataTencentcloudMpsSchedules that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/mps_schedules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMpsSchedules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_schedules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/mps_schedules tencentcloud_mps_schedules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMpsSchedulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMpsSchedulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_schedules',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._scheduleIds = config.scheduleIds;
    this._status = config.status;
    this._triggerType = config.triggerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // schedule_ids - computed: false, optional: true, required: false
  private _scheduleIds?: number[]; 
  public get scheduleIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('schedule_ids')));
  }
  public set scheduleIds(value: number[]) {
    this._scheduleIds = value;
  }
  public resetScheduleIds() {
    this._scheduleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdsInput() {
    return this._scheduleIds;
  }

  // schedule_info_set - computed: true, optional: false, required: false
  private _scheduleInfoSet = new DataTencentcloudMpsSchedulesScheduleInfoSetList(this, "schedule_info_set", false);
  public get scheduleInfoSet() {
    return this._scheduleInfoSet;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      schedule_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._scheduleIds),
      status: cdktf.stringToTerraform(this._status),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      schedule_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._scheduleIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_type: {
        value: cdktf.stringToHclTerraform(this._triggerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
