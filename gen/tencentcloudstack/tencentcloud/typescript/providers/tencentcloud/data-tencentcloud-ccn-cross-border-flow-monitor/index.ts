// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCcnCrossBorderFlowMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * CcnId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#ccn_id DataTencentcloudCcnCrossBorderFlowMonitor#ccn_id}
  */
  readonly ccnId: string;
  /**
  * CcnUin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#ccn_uin DataTencentcloudCcnCrossBorderFlowMonitor#ccn_uin}
  */
  readonly ccnUin: string;
  /**
  * DestinationRegion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#destination_region DataTencentcloudCcnCrossBorderFlowMonitor#destination_region}
  */
  readonly destinationRegion: string;
  /**
  * EndTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#end_time DataTencentcloudCcnCrossBorderFlowMonitor#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#id DataTencentcloudCcnCrossBorderFlowMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TimePeriod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#period DataTencentcloudCcnCrossBorderFlowMonitor#period}
  */
  readonly period: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#result_output_file DataTencentcloudCcnCrossBorderFlowMonitor#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * SourceRegion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#source_region DataTencentcloudCcnCrossBorderFlowMonitor#source_region}
  */
  readonly sourceRegion: string;
  /**
  * StartTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#start_time DataTencentcloudCcnCrossBorderFlowMonitor#start_time}
  */
  readonly startTime: string;
}
export interface DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorData {
}

export function dataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorDataToTerraform(struct?: DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorDataToHclTerraform(struct?: DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_bandwidth - computed: true, optional: false, required: false
  public get inBandwidth() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('in_bandwidth')));
  }

  // in_pkg - computed: true, optional: false, required: false
  public get inPkg() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('in_pkg')));
  }

  // out_bandwidth - computed: true, optional: false, required: false
  public get outBandwidth() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('out_bandwidth')));
  }

  // out_pkg - computed: true, optional: false, required: false
  public get outPkg() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('out_pkg')));
  }
}

export class DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorDataOutputReference {
    return new DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor tencentcloud_ccn_cross_border_flow_monitor}
*/
export class DataTencentcloudCcnCrossBorderFlowMonitor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn_cross_border_flow_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCcnCrossBorderFlowMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCcnCrossBorderFlowMonitor to import
  * @param importFromId The id of the existing DataTencentcloudCcnCrossBorderFlowMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCcnCrossBorderFlowMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn_cross_border_flow_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ccn_cross_border_flow_monitor tencentcloud_ccn_cross_border_flow_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCcnCrossBorderFlowMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCcnCrossBorderFlowMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn_cross_border_flow_monitor',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccnId = config.ccnId;
    this._ccnUin = config.ccnUin;
    this._destinationRegion = config.destinationRegion;
    this._endTime = config.endTime;
    this._id = config.id;
    this._period = config.period;
    this._resultOutputFile = config.resultOutputFile;
    this._sourceRegion = config.sourceRegion;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccn_id - computed: false, optional: false, required: true
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
  }

  // ccn_uin - computed: false, optional: false, required: true
  private _ccnUin?: string; 
  public get ccnUin() {
    return this.getStringAttribute('ccn_uin');
  }
  public set ccnUin(value: string) {
    this._ccnUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnUinInput() {
    return this._ccnUin;
  }

  // cross_border_flow_monitor_data - computed: true, optional: false, required: false
  private _crossBorderFlowMonitorData = new DataTencentcloudCcnCrossBorderFlowMonitorCrossBorderFlowMonitorDataList(this, "cross_border_flow_monitor_data", false);
  public get crossBorderFlowMonitorData() {
    return this._crossBorderFlowMonitorData;
  }

  // destination_region - computed: false, optional: false, required: true
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
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

  // source_region - computed: false, optional: false, required: true
  private _sourceRegion?: string; 
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }
  public set sourceRegion(value: string) {
    this._sourceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionInput() {
    return this._sourceRegion;
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
      ccn_id: cdktf.stringToTerraform(this._ccnId),
      ccn_uin: cdktf.stringToTerraform(this._ccnUin),
      destination_region: cdktf.stringToTerraform(this._destinationRegion),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      period: cdktf.numberToTerraform(this._period),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      source_region: cdktf.stringToTerraform(this._sourceRegion),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccn_id: {
        value: cdktf.stringToHclTerraform(this._ccnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ccn_uin: {
        value: cdktf.stringToHclTerraform(this._ccnUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_region: {
        value: cdktf.stringToHclTerraform(this._destinationRegion),
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
      source_region: {
        value: cdktf.stringToHclTerraform(this._sourceRegion),
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
