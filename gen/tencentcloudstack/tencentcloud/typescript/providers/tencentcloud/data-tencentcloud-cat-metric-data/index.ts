// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCatMetricDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Analysis of task type, supported types: `AnalyzeTaskType_Network`: network quality, `AnalyzeTaskType_Browse`: page performance, `AnalyzeTaskType_Transport`: port performance, `AnalyzeTaskType_UploadDownload`: file transport, `AnalyzeTaskType_MediaStream`: audiovisual experience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#analyze_task_type DataTencentcloudCatMetricData#analyze_task_type}
  */
  readonly analyzeTaskType: string;
  /**
  * Detailed fields of metrics, specified metrics can be passed or aggregate metrics, such as avg(ping_time) means entire delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#field DataTencentcloudCatMetricData#field}
  */
  readonly field: string;
  /**
  * Filter conditions can be passed as a single filter or multiple parameters concatenated together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#filter DataTencentcloudCatMetricData#filter}
  */
  readonly filter?: string;
  /**
  * Multiple condition filtering, supports combining multiple filtering conditions for query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#filters DataTencentcloudCatMetricData#filters}
  */
  readonly filters: string[];
  /**
  * Aggregation time, such as 1m, 1d, 30d, and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#group_by DataTencentcloudCatMetricData#group_by}
  */
  readonly groupBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#id DataTencentcloudCatMetricData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metric type, metrics queries are passed with gauge by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#metric_type DataTencentcloudCatMetricData#metric_type}
  */
  readonly metricType: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#result_output_file DataTencentcloudCatMetricData#result_output_file}
  */
  readonly resultOutputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data tencentcloud_cat_metric_data}
*/
export class DataTencentcloudCatMetricData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cat_metric_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCatMetricData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCatMetricData to import
  * @param importFromId The id of the existing DataTencentcloudCatMetricData that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCatMetricData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cat_metric_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/cat_metric_data tencentcloud_cat_metric_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCatMetricDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCatMetricDataConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cat_metric_data',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyzeTaskType = config.analyzeTaskType;
    this._field = config.field;
    this._filter = config.filter;
    this._filters = config.filters;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._metricType = config.metricType;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyze_task_type - computed: false, optional: false, required: true
  private _analyzeTaskType?: string; 
  public get analyzeTaskType() {
    return this.getStringAttribute('analyze_task_type');
  }
  public set analyzeTaskType(value: string) {
    this._analyzeTaskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeTaskTypeInput() {
    return this._analyzeTaskType;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // filters - computed: false, optional: false, required: true
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // metric_set - computed: true, optional: false, required: false
  public get metricSet() {
    return this.getStringAttribute('metric_set');
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analyze_task_type: cdktf.stringToTerraform(this._analyzeTaskType),
      field: cdktf.stringToTerraform(this._field),
      filter: cdktf.stringToTerraform(this._filter),
      filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filters),
      group_by: cdktf.stringToTerraform(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      metric_type: cdktf.stringToTerraform(this._metricType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyze_task_type: {
        value: cdktf.stringToHclTerraform(this._analyzeTaskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field: {
        value: cdktf.stringToHclTerraform(this._field),
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
      filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_by: {
        value: cdktf.stringToHclTerraform(this._groupBy),
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
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
