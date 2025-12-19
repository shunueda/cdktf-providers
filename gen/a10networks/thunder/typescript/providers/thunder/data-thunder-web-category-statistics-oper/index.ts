// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryStatisticsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#id DataThunderWebCategoryStatisticsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#oper DataThunderWebCategoryStatisticsOper#oper}
  */
  readonly oper?: DataThunderWebCategoryStatisticsOperOper;
}
export interface DataThunderWebCategoryStatisticsOperOperPerCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#req_dropped DataThunderWebCategoryStatisticsOper#req_dropped}
  */
  readonly reqDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#req_lookup_processed DataThunderWebCategoryStatisticsOper#req_lookup_processed}
  */
  readonly reqLookupProcessed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#req_processed DataThunderWebCategoryStatisticsOper#req_processed}
  */
  readonly reqProcessed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#req_queue DataThunderWebCategoryStatisticsOper#req_queue}
  */
  readonly reqQueue?: number;
}

export function dataThunderWebCategoryStatisticsOperOperPerCpuListStructToTerraform(struct?: DataThunderWebCategoryStatisticsOperOperPerCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    req_dropped: cdktf.numberToTerraform(struct!.reqDropped),
    req_lookup_processed: cdktf.numberToTerraform(struct!.reqLookupProcessed),
    req_processed: cdktf.numberToTerraform(struct!.reqProcessed),
    req_queue: cdktf.numberToTerraform(struct!.reqQueue),
  }
}


export function dataThunderWebCategoryStatisticsOperOperPerCpuListStructToHclTerraform(struct?: DataThunderWebCategoryStatisticsOperOperPerCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    req_dropped: {
      value: cdktf.numberToHclTerraform(struct!.reqDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_lookup_processed: {
      value: cdktf.numberToHclTerraform(struct!.reqLookupProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_processed: {
      value: cdktf.numberToHclTerraform(struct!.reqProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_queue: {
      value: cdktf.numberToHclTerraform(struct!.reqQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryStatisticsOperOperPerCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryStatisticsOperOperPerCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reqDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqDropped = this._reqDropped;
    }
    if (this._reqLookupProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqLookupProcessed = this._reqLookupProcessed;
    }
    if (this._reqProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqProcessed = this._reqProcessed;
    }
    if (this._reqQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqQueue = this._reqQueue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryStatisticsOperOperPerCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reqDropped = undefined;
      this._reqLookupProcessed = undefined;
      this._reqProcessed = undefined;
      this._reqQueue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reqDropped = value.reqDropped;
      this._reqLookupProcessed = value.reqLookupProcessed;
      this._reqProcessed = value.reqProcessed;
      this._reqQueue = value.reqQueue;
    }
  }

  // req_dropped - computed: false, optional: true, required: false
  private _reqDropped?: number; 
  public get reqDropped() {
    return this.getNumberAttribute('req_dropped');
  }
  public set reqDropped(value: number) {
    this._reqDropped = value;
  }
  public resetReqDropped() {
    this._reqDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqDroppedInput() {
    return this._reqDropped;
  }

  // req_lookup_processed - computed: false, optional: true, required: false
  private _reqLookupProcessed?: number; 
  public get reqLookupProcessed() {
    return this.getNumberAttribute('req_lookup_processed');
  }
  public set reqLookupProcessed(value: number) {
    this._reqLookupProcessed = value;
  }
  public resetReqLookupProcessed() {
    this._reqLookupProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqLookupProcessedInput() {
    return this._reqLookupProcessed;
  }

  // req_processed - computed: false, optional: true, required: false
  private _reqProcessed?: number; 
  public get reqProcessed() {
    return this.getNumberAttribute('req_processed');
  }
  public set reqProcessed(value: number) {
    this._reqProcessed = value;
  }
  public resetReqProcessed() {
    this._reqProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqProcessedInput() {
    return this._reqProcessed;
  }

  // req_queue - computed: false, optional: true, required: false
  private _reqQueue?: number; 
  public get reqQueue() {
    return this.getNumberAttribute('req_queue');
  }
  public set reqQueue(value: number) {
    this._reqQueue = value;
  }
  public resetReqQueue() {
    this._reqQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqQueueInput() {
    return this._reqQueue;
  }
}

export class DataThunderWebCategoryStatisticsOperOperPerCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryStatisticsOperOperPerCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryStatisticsOperOperPerCpuListStructOutputReference {
    return new DataThunderWebCategoryStatisticsOperOperPerCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryStatisticsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#clear_cache DataThunderWebCategoryStatisticsOper#clear_cache}
  */
  readonly clearCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#num_dplane_threads DataThunderWebCategoryStatisticsOper#num_dplane_threads}
  */
  readonly numDplaneThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#num_lookup_threads DataThunderWebCategoryStatisticsOper#num_lookup_threads}
  */
  readonly numLookupThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#total_req_dropped DataThunderWebCategoryStatisticsOper#total_req_dropped}
  */
  readonly totalReqDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#total_req_lookup_processed DataThunderWebCategoryStatisticsOper#total_req_lookup_processed}
  */
  readonly totalReqLookupProcessed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#total_req_processed DataThunderWebCategoryStatisticsOper#total_req_processed}
  */
  readonly totalReqProcessed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#total_req_queue DataThunderWebCategoryStatisticsOper#total_req_queue}
  */
  readonly totalReqQueue?: number;
  /**
  * per_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#per_cpu_list DataThunderWebCategoryStatisticsOper#per_cpu_list}
  */
  readonly perCpuList?: DataThunderWebCategoryStatisticsOperOperPerCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryStatisticsOperOperToTerraform(struct?: DataThunderWebCategoryStatisticsOperOperOutputReference | DataThunderWebCategoryStatisticsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_cache: cdktf.stringToTerraform(struct!.clearCache),
    num_dplane_threads: cdktf.numberToTerraform(struct!.numDplaneThreads),
    num_lookup_threads: cdktf.numberToTerraform(struct!.numLookupThreads),
    total_req_dropped: cdktf.numberToTerraform(struct!.totalReqDropped),
    total_req_lookup_processed: cdktf.numberToTerraform(struct!.totalReqLookupProcessed),
    total_req_processed: cdktf.numberToTerraform(struct!.totalReqProcessed),
    total_req_queue: cdktf.numberToTerraform(struct!.totalReqQueue),
    per_cpu_list: cdktf.listMapper(dataThunderWebCategoryStatisticsOperOperPerCpuListStructToTerraform, true)(struct!.perCpuList),
  }
}


export function dataThunderWebCategoryStatisticsOperOperToHclTerraform(struct?: DataThunderWebCategoryStatisticsOperOperOutputReference | DataThunderWebCategoryStatisticsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_cache: {
      value: cdktf.stringToHclTerraform(struct!.clearCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_dplane_threads: {
      value: cdktf.numberToHclTerraform(struct!.numDplaneThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_lookup_threads: {
      value: cdktf.numberToHclTerraform(struct!.numLookupThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_dropped: {
      value: cdktf.numberToHclTerraform(struct!.totalReqDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_lookup_processed: {
      value: cdktf.numberToHclTerraform(struct!.totalReqLookupProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_processed: {
      value: cdktf.numberToHclTerraform(struct!.totalReqProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_queue: {
      value: cdktf.numberToHclTerraform(struct!.totalReqQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderWebCategoryStatisticsOperOperPerCpuListStructToHclTerraform, true)(struct!.perCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryStatisticsOperOperPerCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryStatisticsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryStatisticsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearCache = this._clearCache;
    }
    if (this._numDplaneThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDplaneThreads = this._numDplaneThreads;
    }
    if (this._numLookupThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLookupThreads = this._numLookupThreads;
    }
    if (this._totalReqDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqDropped = this._totalReqDropped;
    }
    if (this._totalReqLookupProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqLookupProcessed = this._totalReqLookupProcessed;
    }
    if (this._totalReqProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqProcessed = this._totalReqProcessed;
    }
    if (this._totalReqQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqQueue = this._totalReqQueue;
    }
    if (this._perCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perCpuList = this._perCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryStatisticsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clearCache = undefined;
      this._numDplaneThreads = undefined;
      this._numLookupThreads = undefined;
      this._totalReqDropped = undefined;
      this._totalReqLookupProcessed = undefined;
      this._totalReqProcessed = undefined;
      this._totalReqQueue = undefined;
      this._perCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clearCache = value.clearCache;
      this._numDplaneThreads = value.numDplaneThreads;
      this._numLookupThreads = value.numLookupThreads;
      this._totalReqDropped = value.totalReqDropped;
      this._totalReqLookupProcessed = value.totalReqLookupProcessed;
      this._totalReqProcessed = value.totalReqProcessed;
      this._totalReqQueue = value.totalReqQueue;
      this._perCpuList.internalValue = value.perCpuList;
    }
  }

  // clear_cache - computed: false, optional: true, required: false
  private _clearCache?: string; 
  public get clearCache() {
    return this.getStringAttribute('clear_cache');
  }
  public set clearCache(value: string) {
    this._clearCache = value;
  }
  public resetClearCache() {
    this._clearCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearCacheInput() {
    return this._clearCache;
  }

  // num_dplane_threads - computed: false, optional: true, required: false
  private _numDplaneThreads?: number; 
  public get numDplaneThreads() {
    return this.getNumberAttribute('num_dplane_threads');
  }
  public set numDplaneThreads(value: number) {
    this._numDplaneThreads = value;
  }
  public resetNumDplaneThreads() {
    this._numDplaneThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDplaneThreadsInput() {
    return this._numDplaneThreads;
  }

  // num_lookup_threads - computed: false, optional: true, required: false
  private _numLookupThreads?: number; 
  public get numLookupThreads() {
    return this.getNumberAttribute('num_lookup_threads');
  }
  public set numLookupThreads(value: number) {
    this._numLookupThreads = value;
  }
  public resetNumLookupThreads() {
    this._numLookupThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLookupThreadsInput() {
    return this._numLookupThreads;
  }

  // total_req_dropped - computed: false, optional: true, required: false
  private _totalReqDropped?: number; 
  public get totalReqDropped() {
    return this.getNumberAttribute('total_req_dropped');
  }
  public set totalReqDropped(value: number) {
    this._totalReqDropped = value;
  }
  public resetTotalReqDropped() {
    this._totalReqDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqDroppedInput() {
    return this._totalReqDropped;
  }

  // total_req_lookup_processed - computed: false, optional: true, required: false
  private _totalReqLookupProcessed?: number; 
  public get totalReqLookupProcessed() {
    return this.getNumberAttribute('total_req_lookup_processed');
  }
  public set totalReqLookupProcessed(value: number) {
    this._totalReqLookupProcessed = value;
  }
  public resetTotalReqLookupProcessed() {
    this._totalReqLookupProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqLookupProcessedInput() {
    return this._totalReqLookupProcessed;
  }

  // total_req_processed - computed: false, optional: true, required: false
  private _totalReqProcessed?: number; 
  public get totalReqProcessed() {
    return this.getNumberAttribute('total_req_processed');
  }
  public set totalReqProcessed(value: number) {
    this._totalReqProcessed = value;
  }
  public resetTotalReqProcessed() {
    this._totalReqProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqProcessedInput() {
    return this._totalReqProcessed;
  }

  // total_req_queue - computed: false, optional: true, required: false
  private _totalReqQueue?: number; 
  public get totalReqQueue() {
    return this.getNumberAttribute('total_req_queue');
  }
  public set totalReqQueue(value: number) {
    this._totalReqQueue = value;
  }
  public resetTotalReqQueue() {
    this._totalReqQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqQueueInput() {
    return this._totalReqQueue;
  }

  // per_cpu_list - computed: false, optional: true, required: false
  private _perCpuList = new DataThunderWebCategoryStatisticsOperOperPerCpuListStructList(this, "per_cpu_list", false);
  public get perCpuList() {
    return this._perCpuList;
  }
  public putPerCpuList(value: DataThunderWebCategoryStatisticsOperOperPerCpuListStruct[] | cdktf.IResolvable) {
    this._perCpuList.internalValue = value;
  }
  public resetPerCpuList() {
    this._perCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perCpuListInput() {
    return this._perCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper thunder_web_category_statistics_oper}
*/
export class DataThunderWebCategoryStatisticsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_statistics_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryStatisticsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryStatisticsOper to import
  * @param importFromId The id of the existing DataThunderWebCategoryStatisticsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryStatisticsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_statistics_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_statistics_oper thunder_web_category_statistics_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryStatisticsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryStatisticsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_statistics_oper',
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
  private _oper = new DataThunderWebCategoryStatisticsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryStatisticsOperOper) {
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
      oper: dataThunderWebCategoryStatisticsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderWebCategoryStatisticsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryStatisticsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
