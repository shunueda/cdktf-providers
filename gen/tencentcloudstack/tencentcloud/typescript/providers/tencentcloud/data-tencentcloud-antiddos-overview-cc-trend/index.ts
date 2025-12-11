// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudAntiddosOverviewCcTrendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dayu sub product code (bgpip represents advanced defense IP; net represents professional version of advanced defense IP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#business DataTencentcloudAntiddosOverviewCcTrend#business}
  */
  readonly business?: string;
  /**
  * EndTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#end_time DataTencentcloudAntiddosOverviewCcTrend#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#id DataTencentcloudAntiddosOverviewCcTrend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * resource id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#ip_list DataTencentcloudAntiddosOverviewCcTrend#ip_list}
  */
  readonly ipList?: string[];
  /**
  * Indicator, values [inqps (peak total requests, dropqps (peak attack requests)), incount (number of requests), dropcount (number of attacks)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#metric_name DataTencentcloudAntiddosOverviewCcTrend#metric_name}
  */
  readonly metricName: string;
  /**
  * Statistical granularity, values [300 (5 minutes), 3600 (hours), 86400 (days)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#period DataTencentcloudAntiddosOverviewCcTrend#period}
  */
  readonly period: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#result_output_file DataTencentcloudAntiddosOverviewCcTrend#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * StartTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#start_time DataTencentcloudAntiddosOverviewCcTrend#start_time}
  */
  readonly startTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend tencentcloud_antiddos_overview_cc_trend}
*/
export class DataTencentcloudAntiddosOverviewCcTrend extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_overview_cc_trend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudAntiddosOverviewCcTrend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudAntiddosOverviewCcTrend to import
  * @param importFromId The id of the existing DataTencentcloudAntiddosOverviewCcTrend that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudAntiddosOverviewCcTrend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_overview_cc_trend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/antiddos_overview_cc_trend tencentcloud_antiddos_overview_cc_trend} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudAntiddosOverviewCcTrendConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudAntiddosOverviewCcTrendConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_overview_cc_trend',
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
    this._business = config.business;
    this._endTime = config.endTime;
    this._id = config.id;
    this._ipList = config.ipList;
    this._metricName = config.metricName;
    this._period = config.period;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business - computed: false, optional: true, required: false
  private _business?: string; 
  public get business() {
    return this.getStringAttribute('business');
  }
  public set business(value: string) {
    this._business = value;
  }
  public resetBusiness() {
    this._business = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInput() {
    return this._business;
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('data')));
  }

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

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string[]; 
  public get ipList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_list'));
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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
      business: cdktf.stringToTerraform(this._business),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipList),
      metric_name: cdktf.stringToTerraform(this._metricName),
      period: cdktf.numberToTerraform(this._period),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business: {
        value: cdktf.stringToHclTerraform(this._business),
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
      ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
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
