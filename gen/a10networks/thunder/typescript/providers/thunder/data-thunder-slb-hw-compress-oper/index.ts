// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHwCompressOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#id DataThunderSlbHwCompressOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#oper DataThunderSlbHwCompressOper#oper}
  */
  readonly oper?: DataThunderSlbHwCompressOperOper;
}
export interface DataThunderSlbHwCompressOperOperL4CpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#failure_code DataThunderSlbHwCompressOper#failure_code}
  */
  readonly failureCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#failure_count DataThunderSlbHwCompressOper#failure_count}
  */
  readonly failureCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#max_outstanding_request_count DataThunderSlbHwCompressOper#max_outstanding_request_count}
  */
  readonly maxOutstandingRequestCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#max_outstanding_submit_count DataThunderSlbHwCompressOper#max_outstanding_submit_count}
  */
  readonly maxOutstandingSubmitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#request_count DataThunderSlbHwCompressOper#request_count}
  */
  readonly requestCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#response_count DataThunderSlbHwCompressOper#response_count}
  */
  readonly responseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#ring_full_count DataThunderSlbHwCompressOper#ring_full_count}
  */
  readonly ringFullCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#submit_count DataThunderSlbHwCompressOper#submit_count}
  */
  readonly submitCount?: number;
}

export function dataThunderSlbHwCompressOperOperL4CpuListStructToTerraform(struct?: DataThunderSlbHwCompressOperOperL4CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_code: cdktf.numberToTerraform(struct!.failureCode),
    failure_count: cdktf.numberToTerraform(struct!.failureCount),
    max_outstanding_request_count: cdktf.numberToTerraform(struct!.maxOutstandingRequestCount),
    max_outstanding_submit_count: cdktf.numberToTerraform(struct!.maxOutstandingSubmitCount),
    request_count: cdktf.numberToTerraform(struct!.requestCount),
    response_count: cdktf.numberToTerraform(struct!.responseCount),
    ring_full_count: cdktf.numberToTerraform(struct!.ringFullCount),
    submit_count: cdktf.numberToTerraform(struct!.submitCount),
  }
}


export function dataThunderSlbHwCompressOperOperL4CpuListStructToHclTerraform(struct?: DataThunderSlbHwCompressOperOperL4CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_code: {
      value: cdktf.numberToHclTerraform(struct!.failureCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_count: {
      value: cdktf.numberToHclTerraform(struct!.failureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_outstanding_request_count: {
      value: cdktf.numberToHclTerraform(struct!.maxOutstandingRequestCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_outstanding_submit_count: {
      value: cdktf.numberToHclTerraform(struct!.maxOutstandingSubmitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_count: {
      value: cdktf.numberToHclTerraform(struct!.requestCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_count: {
      value: cdktf.numberToHclTerraform(struct!.responseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ring_full_count: {
      value: cdktf.numberToHclTerraform(struct!.ringFullCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    submit_count: {
      value: cdktf.numberToHclTerraform(struct!.submitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHwCompressOperOperL4CpuListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderSlbHwCompressOperOperL4CpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCode = this._failureCode;
    }
    if (this._failureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCount = this._failureCount;
    }
    if (this._maxOutstandingRequestCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOutstandingRequestCount = this._maxOutstandingRequestCount;
    }
    if (this._maxOutstandingSubmitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOutstandingSubmitCount = this._maxOutstandingSubmitCount;
    }
    if (this._requestCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCount = this._requestCount;
    }
    if (this._responseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCount = this._responseCount;
    }
    if (this._ringFullCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringFullCount = this._ringFullCount;
    }
    if (this._submitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.submitCount = this._submitCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHwCompressOperOperL4CpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCode = undefined;
      this._failureCount = undefined;
      this._maxOutstandingRequestCount = undefined;
      this._maxOutstandingSubmitCount = undefined;
      this._requestCount = undefined;
      this._responseCount = undefined;
      this._ringFullCount = undefined;
      this._submitCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCode = value.failureCode;
      this._failureCount = value.failureCount;
      this._maxOutstandingRequestCount = value.maxOutstandingRequestCount;
      this._maxOutstandingSubmitCount = value.maxOutstandingSubmitCount;
      this._requestCount = value.requestCount;
      this._responseCount = value.responseCount;
      this._ringFullCount = value.ringFullCount;
      this._submitCount = value.submitCount;
    }
  }

  // failure_code - computed: false, optional: true, required: false
  private _failureCode?: number; 
  public get failureCode() {
    return this.getNumberAttribute('failure_code');
  }
  public set failureCode(value: number) {
    this._failureCode = value;
  }
  public resetFailureCode() {
    this._failureCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCodeInput() {
    return this._failureCode;
  }

  // failure_count - computed: false, optional: true, required: false
  private _failureCount?: number; 
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }
  public set failureCount(value: number) {
    this._failureCount = value;
  }
  public resetFailureCount() {
    this._failureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountInput() {
    return this._failureCount;
  }

  // max_outstanding_request_count - computed: false, optional: true, required: false
  private _maxOutstandingRequestCount?: number; 
  public get maxOutstandingRequestCount() {
    return this.getNumberAttribute('max_outstanding_request_count');
  }
  public set maxOutstandingRequestCount(value: number) {
    this._maxOutstandingRequestCount = value;
  }
  public resetMaxOutstandingRequestCount() {
    this._maxOutstandingRequestCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutstandingRequestCountInput() {
    return this._maxOutstandingRequestCount;
  }

  // max_outstanding_submit_count - computed: false, optional: true, required: false
  private _maxOutstandingSubmitCount?: number; 
  public get maxOutstandingSubmitCount() {
    return this.getNumberAttribute('max_outstanding_submit_count');
  }
  public set maxOutstandingSubmitCount(value: number) {
    this._maxOutstandingSubmitCount = value;
  }
  public resetMaxOutstandingSubmitCount() {
    this._maxOutstandingSubmitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutstandingSubmitCountInput() {
    return this._maxOutstandingSubmitCount;
  }

  // request_count - computed: false, optional: true, required: false
  private _requestCount?: number; 
  public get requestCount() {
    return this.getNumberAttribute('request_count');
  }
  public set requestCount(value: number) {
    this._requestCount = value;
  }
  public resetRequestCount() {
    this._requestCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCountInput() {
    return this._requestCount;
  }

  // response_count - computed: false, optional: true, required: false
  private _responseCount?: number; 
  public get responseCount() {
    return this.getNumberAttribute('response_count');
  }
  public set responseCount(value: number) {
    this._responseCount = value;
  }
  public resetResponseCount() {
    this._responseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCountInput() {
    return this._responseCount;
  }

  // ring_full_count - computed: false, optional: true, required: false
  private _ringFullCount?: number; 
  public get ringFullCount() {
    return this.getNumberAttribute('ring_full_count');
  }
  public set ringFullCount(value: number) {
    this._ringFullCount = value;
  }
  public resetRingFullCount() {
    this._ringFullCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringFullCountInput() {
    return this._ringFullCount;
  }

  // submit_count - computed: false, optional: true, required: false
  private _submitCount?: number; 
  public get submitCount() {
    return this.getNumberAttribute('submit_count');
  }
  public set submitCount(value: number) {
    this._submitCount = value;
  }
  public resetSubmitCount() {
    this._submitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitCountInput() {
    return this._submitCount;
  }
}

export class DataThunderSlbHwCompressOperOperL4CpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbHwCompressOperOperL4CpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbHwCompressOperOperL4CpuListStructOutputReference {
    return new DataThunderSlbHwCompressOperOperL4CpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbHwCompressOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#cpu_count DataThunderSlbHwCompressOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#hw_compress_disabled DataThunderSlbHwCompressOper#hw_compress_disabled}
  */
  readonly hwCompressDisabled?: number;
  /**
  * l4_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#l4_cpu_list DataThunderSlbHwCompressOper#l4_cpu_list}
  */
  readonly l4CpuList?: DataThunderSlbHwCompressOperOperL4CpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbHwCompressOperOperToTerraform(struct?: DataThunderSlbHwCompressOperOperOutputReference | DataThunderSlbHwCompressOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    hw_compress_disabled: cdktf.numberToTerraform(struct!.hwCompressDisabled),
    l4_cpu_list: cdktf.listMapper(dataThunderSlbHwCompressOperOperL4CpuListStructToTerraform, true)(struct!.l4CpuList),
  }
}


export function dataThunderSlbHwCompressOperOperToHclTerraform(struct?: DataThunderSlbHwCompressOperOperOutputReference | DataThunderSlbHwCompressOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_compress_disabled: {
      value: cdktf.numberToHclTerraform(struct!.hwCompressDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbHwCompressOperOperL4CpuListStructToHclTerraform, true)(struct!.l4CpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbHwCompressOperOperL4CpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHwCompressOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHwCompressOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._hwCompressDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwCompressDisabled = this._hwCompressDisabled;
    }
    if (this._l4CpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpuList = this._l4CpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHwCompressOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._hwCompressDisabled = undefined;
      this._l4CpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._hwCompressDisabled = value.hwCompressDisabled;
      this._l4CpuList.internalValue = value.l4CpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // hw_compress_disabled - computed: false, optional: true, required: false
  private _hwCompressDisabled?: number; 
  public get hwCompressDisabled() {
    return this.getNumberAttribute('hw_compress_disabled');
  }
  public set hwCompressDisabled(value: number) {
    this._hwCompressDisabled = value;
  }
  public resetHwCompressDisabled() {
    this._hwCompressDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwCompressDisabledInput() {
    return this._hwCompressDisabled;
  }

  // l4_cpu_list - computed: false, optional: true, required: false
  private _l4CpuList = new DataThunderSlbHwCompressOperOperL4CpuListStructList(this, "l4_cpu_list", false);
  public get l4CpuList() {
    return this._l4CpuList;
  }
  public putL4CpuList(value: DataThunderSlbHwCompressOperOperL4CpuListStruct[] | cdktf.IResolvable) {
    this._l4CpuList.internalValue = value;
  }
  public resetL4CpuList() {
    this._l4CpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpuListInput() {
    return this._l4CpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper thunder_slb_hw_compress_oper}
*/
export class DataThunderSlbHwCompressOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_hw_compress_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHwCompressOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHwCompressOper to import
  * @param importFromId The id of the existing DataThunderSlbHwCompressOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHwCompressOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_hw_compress_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_hw_compress_oper thunder_slb_hw_compress_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHwCompressOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHwCompressOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_hw_compress_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbHwCompressOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHwCompressOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbHwCompressOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbHwCompressOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHwCompressOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
