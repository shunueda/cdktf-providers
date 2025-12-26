// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudRumLogExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * End timestamp, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#end_time DataTencentcloudRumLogExport#end_time}
  */
  readonly endTime: string;
  /**
  * Log fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#fields DataTencentcloudRumLogExport#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#id DataTencentcloudRumLogExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Export flag name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#name DataTencentcloudRumLogExport#name}
  */
  readonly name: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#project_id DataTencentcloudRumLogExport#project_id}
  */
  readonly projectId: number;
  /**
  * Log Query syntax statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#query DataTencentcloudRumLogExport#query}
  */
  readonly query: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#result_output_file DataTencentcloudRumLogExport#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Start timestamp, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#start_time DataTencentcloudRumLogExport#start_time}
  */
  readonly startTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export tencentcloud_rum_log_export}
*/
export class DataTencentcloudRumLogExport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_rum_log_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudRumLogExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudRumLogExport to import
  * @param importFromId The id of the existing DataTencentcloudRumLogExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudRumLogExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_rum_log_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/rum_log_export tencentcloud_rum_log_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudRumLogExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudRumLogExportConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_rum_log_export',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endTime = config.endTime;
    this._fields = config.fields;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._query = config.query;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.stringToTerraform(this._endTime),
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      query: cdktf.stringToTerraform(this._query),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
