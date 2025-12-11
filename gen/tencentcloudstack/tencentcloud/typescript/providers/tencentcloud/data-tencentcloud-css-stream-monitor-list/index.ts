// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/css_stream_monitor_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCssStreamMonitorListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/css_stream_monitor_list#id DataTencentcloudCssStreamMonitorList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/css_stream_monitor_list#result_output_file DataTencentcloudCssStreamMonitorList#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStruct {
}

export function dataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStructToTerraform(struct?: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStructToHclTerraform(struct?: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // input_app - computed: true, optional: false, required: false
  public get inputApp() {
    return this.getStringAttribute('input_app');
  }

  // input_domain - computed: true, optional: false, required: false
  public get inputDomain() {
    return this.getStringAttribute('input_domain');
  }

  // input_stream_name - computed: true, optional: false, required: false
  public get inputStreamName() {
    return this.getStringAttribute('input_stream_name');
  }

  // input_url - computed: true, optional: false, required: false
  public get inputUrl() {
    return this.getStringAttribute('input_url');
  }
}

export class DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStructOutputReference {
    return new DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicy {
}

export function dataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicyToTerraform(struct?: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicyToHclTerraform(struct?: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }

  // notify_policy_type - computed: true, optional: false, required: false
  public get notifyPolicyType() {
    return this.getNumberAttribute('notify_policy_type');
  }
}

export class DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicyOutputReference {
    return new DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfo {
}

export function dataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfoToTerraform(struct?: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfoToHclTerraform(struct?: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_app - computed: true, optional: false, required: false
  public get outputApp() {
    return this.getStringAttribute('output_app');
  }

  // output_domain - computed: true, optional: false, required: false
  public get outputDomain() {
    return this.getStringAttribute('output_domain');
  }

  // output_stream_height - computed: true, optional: false, required: false
  public get outputStreamHeight() {
    return this.getNumberAttribute('output_stream_height');
  }

  // output_stream_name - computed: true, optional: false, required: false
  public get outputStreamName() {
    return this.getStringAttribute('output_stream_name');
  }

  // output_stream_width - computed: true, optional: false, required: false
  public get outputStreamWidth() {
    return this.getNumberAttribute('output_stream_width');
  }
}

export class DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfoOutputReference {
    return new DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCssStreamMonitorListLiveStreamMonitors {
}

export function dataTencentcloudCssStreamMonitorListLiveStreamMonitorsToTerraform(struct?: DataTencentcloudCssStreamMonitorListLiveStreamMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCssStreamMonitorListLiveStreamMonitorsToHclTerraform(struct?: DataTencentcloudCssStreamMonitorListLiveStreamMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCssStreamMonitorListLiveStreamMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCssStreamMonitorListLiveStreamMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_asr_input_index_list - computed: true, optional: false, required: false
  public get aiAsrInputIndexList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ai_asr_input_index_list')));
  }

  // ai_format_diagnose - computed: true, optional: false, required: false
  public get aiFormatDiagnose() {
    return this.getNumberAttribute('ai_format_diagnose');
  }

  // ai_ocr_input_index_list - computed: true, optional: false, required: false
  public get aiOcrInputIndexList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ai_ocr_input_index_list')));
  }

  // allow_monitor_report - computed: true, optional: false, required: false
  public get allowMonitorReport() {
    return this.getNumberAttribute('allow_monitor_report');
  }

  // asr_language - computed: true, optional: false, required: false
  public get asrLanguage() {
    return this.getNumberAttribute('asr_language');
  }

  // audible_input_index_list - computed: true, optional: false, required: false
  public get audibleInputIndexList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('audible_input_index_list')));
  }

  // check_stream_broken - computed: true, optional: false, required: false
  public get checkStreamBroken() {
    return this.getNumberAttribute('check_stream_broken');
  }

  // check_stream_low_frame_rate - computed: true, optional: false, required: false
  public get checkStreamLowFrameRate() {
    return this.getNumberAttribute('check_stream_low_frame_rate');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // input_list - computed: true, optional: false, required: false
  private _inputList = new DataTencentcloudCssStreamMonitorListLiveStreamMonitorsInputListStructList(this, "input_list", false);
  public get inputList() {
    return this._inputList;
  }

  // monitor_id - computed: true, optional: false, required: false
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }

  // monitor_name - computed: true, optional: false, required: false
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }

  // notify_policy - computed: true, optional: false, required: false
  private _notifyPolicy = new DataTencentcloudCssStreamMonitorListLiveStreamMonitorsNotifyPolicyList(this, "notify_policy", false);
  public get notifyPolicy() {
    return this._notifyPolicy;
  }

  // ocr_language - computed: true, optional: false, required: false
  public get ocrLanguage() {
    return this.getNumberAttribute('ocr_language');
  }

  // output_info - computed: true, optional: false, required: false
  private _outputInfo = new DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputInfoList(this, "output_info", false);
  public get outputInfo() {
    return this._outputInfo;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // stop_time - computed: true, optional: false, required: false
  public get stopTime() {
    return this.getNumberAttribute('stop_time');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
}

export class DataTencentcloudCssStreamMonitorListLiveStreamMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputReference {
    return new DataTencentcloudCssStreamMonitorListLiveStreamMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/css_stream_monitor_list tencentcloud_css_stream_monitor_list}
*/
export class DataTencentcloudCssStreamMonitorList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_stream_monitor_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCssStreamMonitorList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCssStreamMonitorList to import
  * @param importFromId The id of the existing DataTencentcloudCssStreamMonitorList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/css_stream_monitor_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCssStreamMonitorList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_stream_monitor_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/css_stream_monitor_list tencentcloud_css_stream_monitor_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCssStreamMonitorListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCssStreamMonitorListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_stream_monitor_list',
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
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
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

  // live_stream_monitors - computed: true, optional: false, required: false
  private _liveStreamMonitors = new DataTencentcloudCssStreamMonitorListLiveStreamMonitorsList(this, "live_stream_monitors", false);
  public get liveStreamMonitors() {
    return this._liveStreamMonitors;
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
