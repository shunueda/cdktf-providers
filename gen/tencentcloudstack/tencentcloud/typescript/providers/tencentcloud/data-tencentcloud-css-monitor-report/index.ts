// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_monitor_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCssMonitorReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_monitor_report#id DataTencentcloudCssMonitorReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_monitor_report#monitor_id DataTencentcloudCssMonitorReport#monitor_id}
  */
  readonly monitorId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_monitor_report#result_output_file DataTencentcloudCssMonitorReport#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudCssMonitorReportDiagnoseResult {
}

export function dataTencentcloudCssMonitorReportDiagnoseResultToTerraform(struct?: DataTencentcloudCssMonitorReportDiagnoseResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCssMonitorReportDiagnoseResultToHclTerraform(struct?: DataTencentcloudCssMonitorReportDiagnoseResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCssMonitorReportDiagnoseResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCssMonitorReportDiagnoseResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCssMonitorReportDiagnoseResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // low_frame_rate_results - computed: true, optional: false, required: false
  public get lowFrameRateResults() {
    return cdktf.Fn.tolist(this.getListAttribute('low_frame_rate_results'));
  }

  // stream_broken_results - computed: true, optional: false, required: false
  public get streamBrokenResults() {
    return cdktf.Fn.tolist(this.getListAttribute('stream_broken_results'));
  }

  // stream_format_results - computed: true, optional: false, required: false
  public get streamFormatResults() {
    return cdktf.Fn.tolist(this.getListAttribute('stream_format_results'));
  }
}

export class DataTencentcloudCssMonitorReportDiagnoseResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCssMonitorReportDiagnoseResultOutputReference {
    return new DataTencentcloudCssMonitorReportDiagnoseResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCssMonitorReportMpsResult {
}

export function dataTencentcloudCssMonitorReportMpsResultToTerraform(struct?: DataTencentcloudCssMonitorReportMpsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCssMonitorReportMpsResultToHclTerraform(struct?: DataTencentcloudCssMonitorReportMpsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCssMonitorReportMpsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCssMonitorReportMpsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCssMonitorReportMpsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_asr_results - computed: true, optional: false, required: false
  public get aiAsrResults() {
    return cdktf.Fn.tolist(this.getListAttribute('ai_asr_results'));
  }

  // ai_ocr_results - computed: true, optional: false, required: false
  public get aiOcrResults() {
    return cdktf.Fn.tolist(this.getListAttribute('ai_ocr_results'));
  }
}

export class DataTencentcloudCssMonitorReportMpsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCssMonitorReportMpsResultOutputReference {
    return new DataTencentcloudCssMonitorReportMpsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_monitor_report tencentcloud_css_monitor_report}
*/
export class DataTencentcloudCssMonitorReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_monitor_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCssMonitorReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCssMonitorReport to import
  * @param importFromId The id of the existing DataTencentcloudCssMonitorReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_monitor_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCssMonitorReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_monitor_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_monitor_report tencentcloud_css_monitor_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCssMonitorReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCssMonitorReportConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_monitor_report',
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
    this._id = config.id;
    this._monitorId = config.monitorId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // diagnose_result - computed: true, optional: false, required: false
  private _diagnoseResult = new DataTencentcloudCssMonitorReportDiagnoseResultList(this, "diagnose_result", false);
  public get diagnoseResult() {
    return this._diagnoseResult;
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

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // mps_result - computed: true, optional: false, required: false
  private _mpsResult = new DataTencentcloudCssMonitorReportMpsResultList(this, "mps_result", false);
  public get mpsResult() {
    return this._mpsResult;
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
      id: cdktf.stringToTerraform(this._id),
      monitor_id: cdktf.stringToTerraform(this._monitorId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      monitor_id: {
        value: cdktf.stringToHclTerraform(this._monitorId),
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
