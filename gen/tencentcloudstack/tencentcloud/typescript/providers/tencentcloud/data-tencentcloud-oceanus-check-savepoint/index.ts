// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudOceanusCheckSavepointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint#id DataTencentcloudOceanusCheckSavepoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Job id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint#job_id DataTencentcloudOceanusCheckSavepoint#job_id}
  */
  readonly jobId: string;
  /**
  * Snapshot type. 1:savepoint; 2:checkpoint; 3:cancelWithSavepoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint#record_type DataTencentcloudOceanusCheckSavepoint#record_type}
  */
  readonly recordType: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint#result_output_file DataTencentcloudOceanusCheckSavepoint#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Snapshot path, currently only supports COS path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint#savepoint_path DataTencentcloudOceanusCheckSavepoint#savepoint_path}
  */
  readonly savepointPath: string;
  /**
  * Snapshot resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint#serial_id DataTencentcloudOceanusCheckSavepoint#serial_id}
  */
  readonly serialId: string;
  /**
  * Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint#work_space_id DataTencentcloudOceanusCheckSavepoint#work_space_id}
  */
  readonly workSpaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint tencentcloud_oceanus_check_savepoint}
*/
export class DataTencentcloudOceanusCheckSavepoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_check_savepoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudOceanusCheckSavepoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudOceanusCheckSavepoint to import
  * @param importFromId The id of the existing DataTencentcloudOceanusCheckSavepoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudOceanusCheckSavepoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_check_savepoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/oceanus_check_savepoint tencentcloud_oceanus_check_savepoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudOceanusCheckSavepointConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudOceanusCheckSavepointConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_check_savepoint',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._jobId = config.jobId;
    this._recordType = config.recordType;
    this._resultOutputFile = config.resultOutputFile;
    this._savepointPath = config.savepointPath;
    this._serialId = config.serialId;
    this._workSpaceId = config.workSpaceId;
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: number; 
  public get recordType() {
    return this.getNumberAttribute('record_type');
  }
  public set recordType(value: number) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
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

  // savepoint_path - computed: false, optional: false, required: true
  private _savepointPath?: string; 
  public get savepointPath() {
    return this.getStringAttribute('savepoint_path');
  }
  public set savepointPath(value: string) {
    this._savepointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get savepointPathInput() {
    return this._savepointPath;
  }

  // savepoint_status - computed: true, optional: false, required: false
  public get savepointStatus() {
    return this.getNumberAttribute('savepoint_status');
  }

  // serial_id - computed: false, optional: false, required: true
  private _serialId?: string; 
  public get serialId() {
    return this.getStringAttribute('serial_id');
  }
  public set serialId(value: string) {
    this._serialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialIdInput() {
    return this._serialId;
  }

  // work_space_id - computed: false, optional: false, required: true
  private _workSpaceId?: string; 
  public get workSpaceId() {
    return this.getStringAttribute('work_space_id');
  }
  public set workSpaceId(value: string) {
    this._workSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workSpaceIdInput() {
    return this._workSpaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      record_type: cdktf.numberToTerraform(this._recordType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      savepoint_path: cdktf.stringToTerraform(this._savepointPath),
      serial_id: cdktf.stringToTerraform(this._serialId),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
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
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktf.numberToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      savepoint_path: {
        value: cdktf.stringToHclTerraform(this._savepointPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_id: {
        value: cdktf.stringToHclTerraform(this._serialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_space_id: {
        value: cdktf.stringToHclTerraform(this._workSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
