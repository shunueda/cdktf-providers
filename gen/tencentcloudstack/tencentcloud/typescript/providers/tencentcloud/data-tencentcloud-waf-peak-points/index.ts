// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWafPeakPointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain name to be queried. If all domain name data is queried, this parameter is not filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#domain DataTencentcloudWafPeakPoints#domain}
  */
  readonly domain?: string;
  /**
  * Only support sparta-waf and clb-waf. If not passed, there will be no filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#edition DataTencentcloudWafPeakPoints#edition}
  */
  readonly edition?: string;
  /**
  * Begin time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#from_time DataTencentcloudWafPeakPoints#from_time}
  */
  readonly fromTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#id DataTencentcloudWafPeakPoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * WAF instance ID, if not passed, there will be no filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#instance_id DataTencentcloudWafPeakPoints#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Twelve values are available: `access`-Peak qps trend chart; `botAccess`- bot peak qps trend chart; `down`-Downstream peak bandwidth trend chart; `up`-Upstream peak bandwidth trend chart; `attack`-Trend chart of total number of web attacks; `cc`-Trend chart of total number of CC attacks; `bw`- Black IP Attack Total Trend Chart; `tamper`- Anti Tamper Attack Total Trend Chart; `leak`- Trend chart of total number of anti leakage attacks; `acl`- Trend chart of total number of access control attacks; `http_status`- Trend chart of status code frequency; `wx_access`- WeChat Mini Program Peak QPS Trend Chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#metric_name DataTencentcloudWafPeakPoints#metric_name}
  */
  readonly metricName?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#result_output_file DataTencentcloudWafPeakPoints#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * End time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#to_time DataTencentcloudWafPeakPoints#to_time}
  */
  readonly toTime: string;
}
export interface DataTencentcloudWafPeakPointsPoints {
}

export function dataTencentcloudWafPeakPointsPointsToTerraform(struct?: DataTencentcloudWafPeakPointsPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWafPeakPointsPointsToHclTerraform(struct?: DataTencentcloudWafPeakPointsPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWafPeakPointsPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWafPeakPointsPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWafPeakPointsPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getNumberAttribute('access');
  }

  // attack - computed: true, optional: false, required: false
  public get attack() {
    return this.getNumberAttribute('attack');
  }

  // bot_access - computed: true, optional: false, required: false
  public get botAccess() {
    return this.getNumberAttribute('bot_access');
  }

  // cc - computed: true, optional: false, required: false
  public get cc() {
    return this.getNumberAttribute('cc');
  }

  // down - computed: true, optional: false, required: false
  public get down() {
    return this.getNumberAttribute('down');
  }

  // status_client_error - computed: true, optional: false, required: false
  public get statusClientError() {
    return this.getNumberAttribute('status_client_error');
  }

  // status_ok - computed: true, optional: false, required: false
  public get statusOk() {
    return this.getNumberAttribute('status_ok');
  }

  // status_redirect - computed: true, optional: false, required: false
  public get statusRedirect() {
    return this.getNumberAttribute('status_redirect');
  }

  // status_server_error - computed: true, optional: false, required: false
  public get statusServerError() {
    return this.getNumberAttribute('status_server_error');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getNumberAttribute('time');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getNumberAttribute('up');
  }

  // upstream_client_error - computed: true, optional: false, required: false
  public get upstreamClientError() {
    return this.getNumberAttribute('upstream_client_error');
  }

  // upstream_redirect - computed: true, optional: false, required: false
  public get upstreamRedirect() {
    return this.getNumberAttribute('upstream_redirect');
  }

  // upstream_server_error - computed: true, optional: false, required: false
  public get upstreamServerError() {
    return this.getNumberAttribute('upstream_server_error');
  }
}

export class DataTencentcloudWafPeakPointsPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWafPeakPointsPointsOutputReference {
    return new DataTencentcloudWafPeakPointsPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points tencentcloud_waf_peak_points}
*/
export class DataTencentcloudWafPeakPoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_peak_points";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWafPeakPoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWafPeakPoints to import
  * @param importFromId The id of the existing DataTencentcloudWafPeakPoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWafPeakPoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_peak_points", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/waf_peak_points tencentcloud_waf_peak_points} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWafPeakPointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWafPeakPointsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_peak_points',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._edition = config.edition;
    this._fromTime = config.fromTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._metricName = config.metricName;
    this._resultOutputFile = config.resultOutputFile;
    this._toTime = config.toTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // from_time - computed: false, optional: false, required: true
  private _fromTime?: string; 
  public get fromTime() {
    return this.getStringAttribute('from_time');
  }
  public set fromTime(value: string) {
    this._fromTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeInput() {
    return this._fromTime;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // points - computed: true, optional: false, required: false
  private _points = new DataTencentcloudWafPeakPointsPointsList(this, "points", false);
  public get points() {
    return this._points;
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

  // to_time - computed: false, optional: false, required: true
  private _toTime?: string; 
  public get toTime() {
    return this.getStringAttribute('to_time');
  }
  public set toTime(value: string) {
    this._toTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toTimeInput() {
    return this._toTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      edition: cdktf.stringToTerraform(this._edition),
      from_time: cdktf.stringToTerraform(this._fromTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      metric_name: cdktf.stringToTerraform(this._metricName),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      to_time: cdktf.stringToTerraform(this._toTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_time: {
        value: cdktf.stringToHclTerraform(this._fromTime),
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
      to_time: {
        value: cdktf.stringToHclTerraform(this._toTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
