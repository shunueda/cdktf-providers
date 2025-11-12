// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHwCompressStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#id DataThunderSlbHwCompressStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#stats DataThunderSlbHwCompressStats#stats}
  */
  readonly stats?: DataThunderSlbHwCompressStatsStats;
}
export interface DataThunderSlbHwCompressStatsStats {
  /**
  * Last failure code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#failure_code DataThunderSlbHwCompressStats#failure_code}
  */
  readonly failureCode?: number;
  /**
  * Total failure count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#failure_count DataThunderSlbHwCompressStats#failure_count}
  */
  readonly failureCount?: number;
  /**
  * Max queued request count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#max_outstanding_request_count DataThunderSlbHwCompressStats#max_outstanding_request_count}
  */
  readonly maxOutstandingRequestCount?: number;
  /**
  * Max queued submit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#max_outstanding_submit_count DataThunderSlbHwCompressStats#max_outstanding_submit_count}
  */
  readonly maxOutstandingSubmitCount?: number;
  /**
  * Total request count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#request_count DataThunderSlbHwCompressStats#request_count}
  */
  readonly requestCount?: number;
  /**
  * Total response count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#response_count DataThunderSlbHwCompressStats#response_count}
  */
  readonly responseCount?: number;
  /**
  * Compression queue full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#ring_full_count DataThunderSlbHwCompressStats#ring_full_count}
  */
  readonly ringFullCount?: number;
  /**
  * Total submit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#submit_count DataThunderSlbHwCompressStats#submit_count}
  */
  readonly submitCount?: number;
}

export function dataThunderSlbHwCompressStatsStatsToTerraform(struct?: DataThunderSlbHwCompressStatsStatsOutputReference | DataThunderSlbHwCompressStatsStats): any {
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


export function dataThunderSlbHwCompressStatsStatsToHclTerraform(struct?: DataThunderSlbHwCompressStatsStatsOutputReference | DataThunderSlbHwCompressStatsStats): any {
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

export class DataThunderSlbHwCompressStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHwCompressStatsStats | undefined {
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

  public set internalValue(value: DataThunderSlbHwCompressStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureCode = undefined;
      this._failureCount = undefined;
      this._maxOutstandingRequestCount = undefined;
      this._maxOutstandingSubmitCount = undefined;
      this._requestCount = undefined;
      this._responseCount = undefined;
      this._ringFullCount = undefined;
      this._submitCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats thunder_slb_hw_compress_stats}
*/
export class DataThunderSlbHwCompressStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_hw_compress_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHwCompressStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHwCompressStats to import
  * @param importFromId The id of the existing DataThunderSlbHwCompressStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHwCompressStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_hw_compress_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hw_compress_stats thunder_slb_hw_compress_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHwCompressStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHwCompressStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_hw_compress_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbHwCompressStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbHwCompressStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSlbHwCompressStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbHwCompressStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHwCompressStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
