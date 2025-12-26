// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudAntiddosBgpBizTrendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dayu sub product code (bgpip represents advanced defense IP; net represents professional version of advanced defense IP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#business DataTencentcloudAntiddosBgpBizTrend#business}
  */
  readonly business: string;
  /**
  * Statistic end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#end_time DataTencentcloudAntiddosBgpBizTrend#end_time}
  */
  readonly endTime: string;
  /**
  * 0 represents fixed time, 1 represents custom time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#flag DataTencentcloudAntiddosBgpBizTrend#flag}
  */
  readonly flag: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#id DataTencentcloudAntiddosBgpBizTrend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Antiddos InstanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#instance_id DataTencentcloudAntiddosBgpBizTrend#instance_id}
  */
  readonly instanceId: string;
  /**
  * Statistic metric name, for example: intraffic, outtraffic, inpkg, outpkg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#metric_name DataTencentcloudAntiddosBgpBizTrend#metric_name}
  */
  readonly metricName: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#result_output_file DataTencentcloudAntiddosBgpBizTrend#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Statistic start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#start_time DataTencentcloudAntiddosBgpBizTrend#start_time}
  */
  readonly startTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend tencentcloud_antiddos_bgp_biz_trend}
*/
export class DataTencentcloudAntiddosBgpBizTrend extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_bgp_biz_trend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudAntiddosBgpBizTrend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudAntiddosBgpBizTrend to import
  * @param importFromId The id of the existing DataTencentcloudAntiddosBgpBizTrend that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudAntiddosBgpBizTrend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_bgp_biz_trend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/antiddos_bgp_biz_trend tencentcloud_antiddos_bgp_biz_trend} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudAntiddosBgpBizTrendConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudAntiddosBgpBizTrendConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_bgp_biz_trend',
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
    this._business = config.business;
    this._endTime = config.endTime;
    this._flag = config.flag;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._metricName = config.metricName;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business - computed: false, optional: false, required: true
  private _business?: string; 
  public get business() {
    return this.getStringAttribute('business');
  }
  public set business(value: string) {
    this._business = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInput() {
    return this._business;
  }

  // data_list - computed: true, optional: false, required: false
  public get dataList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('data_list')));
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

  // flag - computed: false, optional: false, required: true
  private _flag?: number; 
  public get flag() {
    return this.getNumberAttribute('flag');
  }
  public set flag(value: number) {
    this._flag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // max_data - computed: true, optional: false, required: false
  public get maxData() {
    return this.getNumberAttribute('max_data');
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

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business: cdktf.stringToTerraform(this._business),
      end_time: cdktf.stringToTerraform(this._endTime),
      flag: cdktf.numberToTerraform(this._flag),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      metric_name: cdktf.stringToTerraform(this._metricName),
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
      flag: {
        value: cdktf.numberToHclTerraform(this._flag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
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
