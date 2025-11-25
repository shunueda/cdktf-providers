// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudEmrJobStatusDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail#id DataTencentcloudEmrJobStatusDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * EMR Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail#instance_id DataTencentcloudEmrJobStatusDetail#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to return additional task information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail#need_extra_detail DataTencentcloudEmrJobStatusDetail#need_extra_detail}
  */
  readonly needExtraDetail?: boolean | cdktf.IResolvable;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail#result_output_file DataTencentcloudEmrJobStatusDetail#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * flow_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail#flow_param DataTencentcloudEmrJobStatusDetail#flow_param}
  */
  readonly flowParam: DataTencentcloudEmrJobStatusDetailFlowParam;
}
export interface DataTencentcloudEmrJobStatusDetailFlowDesc {
}

export function dataTencentcloudEmrJobStatusDetailFlowDescToTerraform(struct?: DataTencentcloudEmrJobStatusDetailFlowDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrJobStatusDetailFlowDescToHclTerraform(struct?: DataTencentcloudEmrJobStatusDetailFlowDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrJobStatusDetailFlowDescOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrJobStatusDetailFlowDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrJobStatusDetailFlowDesc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // p_key - computed: true, optional: false, required: false
  public get pKey() {
    return this.getStringAttribute('p_key');
  }

  // p_value - computed: true, optional: false, required: false
  public get pValue() {
    return this.getStringAttribute('p_value');
  }
}

export class DataTencentcloudEmrJobStatusDetailFlowDescList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrJobStatusDetailFlowDescOutputReference {
    return new DataTencentcloudEmrJobStatusDetailFlowDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetail {
}

export function dataTencentcloudEmrJobStatusDetailFlowExtraDetailDetailToTerraform(struct?: DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrJobStatusDetailFlowExtraDetailDetailToHclTerraform(struct?: DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // p_key - computed: true, optional: false, required: false
  public get pKey() {
    return this.getStringAttribute('p_key');
  }

  // p_value - computed: true, optional: false, required: false
  public get pValue() {
    return this.getStringAttribute('p_value');
  }
}

export class DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetailOutputReference {
    return new DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrJobStatusDetailFlowExtraDetail {
}

export function dataTencentcloudEmrJobStatusDetailFlowExtraDetailToTerraform(struct?: DataTencentcloudEmrJobStatusDetailFlowExtraDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrJobStatusDetailFlowExtraDetailToHclTerraform(struct?: DataTencentcloudEmrJobStatusDetailFlowExtraDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrJobStatusDetailFlowExtraDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrJobStatusDetailFlowExtraDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrJobStatusDetailFlowExtraDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail - computed: true, optional: false, required: false
  private _detail = new DataTencentcloudEmrJobStatusDetailFlowExtraDetailDetailList(this, "detail", false);
  public get detail() {
    return this._detail;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataTencentcloudEmrJobStatusDetailFlowExtraDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrJobStatusDetailFlowExtraDetailOutputReference {
    return new DataTencentcloudEmrJobStatusDetailFlowExtraDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrJobStatusDetailStageDetails {
}

export function dataTencentcloudEmrJobStatusDetailStageDetailsToTerraform(struct?: DataTencentcloudEmrJobStatusDetailStageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrJobStatusDetailStageDetailsToHclTerraform(struct?: DataTencentcloudEmrJobStatusDetailStageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrJobStatusDetailStageDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrJobStatusDetailStageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrJobStatusDetailStageDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // endtime - computed: true, optional: false, required: false
  public get endtime() {
    return this.getStringAttribute('endtime');
  }

  // failed_reason - computed: true, optional: false, required: false
  public get failedReason() {
    return this.getStringAttribute('failed_reason');
  }

  // had_wood_detail - computed: true, optional: false, required: false
  public get hadWoodDetail() {
    return this.getBooleanAttribute('had_wood_detail');
  }

  // is_show - computed: true, optional: false, required: false
  public get isShow() {
    return this.getBooleanAttribute('is_show');
  }

  // is_sub_flow - computed: true, optional: false, required: false
  public get isSubFlow() {
    return this.getBooleanAttribute('is_sub_flow');
  }

  // language_key - computed: true, optional: false, required: false
  public get languageKey() {
    return this.getStringAttribute('language_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // starttime - computed: true, optional: false, required: false
  public get starttime() {
    return this.getStringAttribute('starttime');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // sub_flow_flag - computed: true, optional: false, required: false
  public get subFlowFlag() {
    return this.getStringAttribute('sub_flow_flag');
  }

  // time_consuming - computed: true, optional: false, required: false
  public get timeConsuming() {
    return this.getStringAttribute('time_consuming');
  }

  // wood_job_id - computed: true, optional: false, required: false
  public get woodJobId() {
    return this.getNumberAttribute('wood_job_id');
  }
}

export class DataTencentcloudEmrJobStatusDetailStageDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrJobStatusDetailStageDetailsOutputReference {
    return new DataTencentcloudEmrJobStatusDetailStageDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrJobStatusDetailFlowParam {
  /**
  * Process Parameter Key: value range: TraceId: Query by TraceId FlowId: Query by FlowId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail#f_key DataTencentcloudEmrJobStatusDetail#f_key}
  */
  readonly fKey: string;
  /**
  * Parameter Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail#f_value DataTencentcloudEmrJobStatusDetail#f_value}
  */
  readonly fValue: string;
}

export function dataTencentcloudEmrJobStatusDetailFlowParamToTerraform(struct?: DataTencentcloudEmrJobStatusDetailFlowParamOutputReference | DataTencentcloudEmrJobStatusDetailFlowParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f_key: cdktf.stringToTerraform(struct!.fKey),
    f_value: cdktf.stringToTerraform(struct!.fValue),
  }
}


export function dataTencentcloudEmrJobStatusDetailFlowParamToHclTerraform(struct?: DataTencentcloudEmrJobStatusDetailFlowParamOutputReference | DataTencentcloudEmrJobStatusDetailFlowParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f_key: {
      value: cdktf.stringToHclTerraform(struct!.fKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    f_value: {
      value: cdktf.stringToHclTerraform(struct!.fValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudEmrJobStatusDetailFlowParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudEmrJobStatusDetailFlowParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fKey = this._fKey;
    }
    if (this._fValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fValue = this._fValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrJobStatusDetailFlowParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fKey = undefined;
      this._fValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fKey = value.fKey;
      this._fValue = value.fValue;
    }
  }

  // f_key - computed: false, optional: false, required: true
  private _fKey?: string; 
  public get fKey() {
    return this.getStringAttribute('f_key');
  }
  public set fKey(value: string) {
    this._fKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fKeyInput() {
    return this._fKey;
  }

  // f_value - computed: false, optional: false, required: true
  private _fValue?: string; 
  public get fValue() {
    return this.getStringAttribute('f_value');
  }
  public set fValue(value: string) {
    this._fValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fValueInput() {
    return this._fValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail tencentcloud_emr_job_status_detail}
*/
export class DataTencentcloudEmrJobStatusDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_emr_job_status_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudEmrJobStatusDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudEmrJobStatusDetail to import
  * @param importFromId The id of the existing DataTencentcloudEmrJobStatusDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudEmrJobStatusDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_emr_job_status_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/emr_job_status_detail tencentcloud_emr_job_status_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudEmrJobStatusDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudEmrJobStatusDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_emr_job_status_detail',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._needExtraDetail = config.needExtraDetail;
    this._resultOutputFile = config.resultOutputFile;
    this._flowParam.internalValue = config.flowParam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flow_desc - computed: true, optional: false, required: false
  private _flowDesc = new DataTencentcloudEmrJobStatusDetailFlowDescList(this, "flow_desc", false);
  public get flowDesc() {
    return this._flowDesc;
  }

  // flow_extra_detail - computed: true, optional: false, required: false
  private _flowExtraDetail = new DataTencentcloudEmrJobStatusDetailFlowExtraDetailList(this, "flow_extra_detail", false);
  public get flowExtraDetail() {
    return this._flowExtraDetail;
  }

  // flow_name - computed: true, optional: false, required: false
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }

  // flow_total_progress - computed: true, optional: false, required: false
  public get flowTotalProgress() {
    return this.getNumberAttribute('flow_total_progress');
  }

  // flow_total_status - computed: true, optional: false, required: false
  public get flowTotalStatus() {
    return this.getNumberAttribute('flow_total_status');
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

  // need_extra_detail - computed: false, optional: true, required: false
  private _needExtraDetail?: boolean | cdktf.IResolvable; 
  public get needExtraDetail() {
    return this.getBooleanAttribute('need_extra_detail');
  }
  public set needExtraDetail(value: boolean | cdktf.IResolvable) {
    this._needExtraDetail = value;
  }
  public resetNeedExtraDetail() {
    this._needExtraDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needExtraDetailInput() {
    return this._needExtraDetail;
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

  // stage_details - computed: true, optional: false, required: false
  private _stageDetails = new DataTencentcloudEmrJobStatusDetailStageDetailsList(this, "stage_details", false);
  public get stageDetails() {
    return this._stageDetails;
  }

  // flow_param - computed: false, optional: false, required: true
  private _flowParam = new DataTencentcloudEmrJobStatusDetailFlowParamOutputReference(this, "flow_param");
  public get flowParam() {
    return this._flowParam;
  }
  public putFlowParam(value: DataTencentcloudEmrJobStatusDetailFlowParam) {
    this._flowParam.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowParamInput() {
    return this._flowParam.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      need_extra_detail: cdktf.booleanToTerraform(this._needExtraDetail),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      flow_param: dataTencentcloudEmrJobStatusDetailFlowParamToTerraform(this._flowParam.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      need_extra_detail: {
        value: cdktf.booleanToHclTerraform(this._needExtraDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_param: {
        value: dataTencentcloudEmrJobStatusDetailFlowParamToHclTerraform(this._flowParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudEmrJobStatusDetailFlowParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
