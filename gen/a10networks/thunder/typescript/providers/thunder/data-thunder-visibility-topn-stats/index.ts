// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityTopnStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#id DataThunderVisibilityTopnStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#stats DataThunderVisibilityTopnStats#stats}
  */
  readonly stats?: DataThunderVisibilityTopnStatsStats;
}
export interface DataThunderVisibilityTopnStatsStats {
  /**
  * Total heap node alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#heap_alloc_failed DataThunderVisibilityTopnStats#heap_alloc_failed}
  */
  readonly heapAllocFailed?: number;
  /**
  * Total heap node alloc failed Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#heap_alloc_oom DataThunderVisibilityTopnStats#heap_alloc_oom}
  */
  readonly heapAllocOom?: number;
  /**
  * Total heap node allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#heap_alloc_success DataThunderVisibilityTopnStats#heap_alloc_success}
  */
  readonly heapAllocSuccess?: number;
  /**
  * Total Heap node deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#heap_deleted DataThunderVisibilityTopnStats#heap_deleted}
  */
  readonly heapDeleted?: number;
  /**
  * Total Object node deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#obj_deleted DataThunderVisibilityTopnStats#obj_deleted}
  */
  readonly objDeleted?: number;
  /**
  * Total object node alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#obj_reg_failed DataThunderVisibilityTopnStats#obj_reg_failed}
  */
  readonly objRegFailed?: number;
  /**
  * Total object node alloc failed Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#obj_reg_oom DataThunderVisibilityTopnStats#obj_reg_oom}
  */
  readonly objRegOom?: number;
  /**
  * Total object node allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#obj_reg_success DataThunderVisibilityTopnStats#obj_reg_success}
  */
  readonly objRegSuccess?: number;
}

export function dataThunderVisibilityTopnStatsStatsToTerraform(struct?: DataThunderVisibilityTopnStatsStatsOutputReference | DataThunderVisibilityTopnStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    heap_alloc_failed: cdktf.numberToTerraform(struct!.heapAllocFailed),
    heap_alloc_oom: cdktf.numberToTerraform(struct!.heapAllocOom),
    heap_alloc_success: cdktf.numberToTerraform(struct!.heapAllocSuccess),
    heap_deleted: cdktf.numberToTerraform(struct!.heapDeleted),
    obj_deleted: cdktf.numberToTerraform(struct!.objDeleted),
    obj_reg_failed: cdktf.numberToTerraform(struct!.objRegFailed),
    obj_reg_oom: cdktf.numberToTerraform(struct!.objRegOom),
    obj_reg_success: cdktf.numberToTerraform(struct!.objRegSuccess),
  }
}


export function dataThunderVisibilityTopnStatsStatsToHclTerraform(struct?: DataThunderVisibilityTopnStatsStatsOutputReference | DataThunderVisibilityTopnStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    heap_alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.heapAllocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_alloc_oom: {
      value: cdktf.numberToHclTerraform(struct!.heapAllocOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_alloc_success: {
      value: cdktf.numberToHclTerraform(struct!.heapAllocSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_deleted: {
      value: cdktf.numberToHclTerraform(struct!.heapDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_deleted: {
      value: cdktf.numberToHclTerraform(struct!.objDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_reg_failed: {
      value: cdktf.numberToHclTerraform(struct!.objRegFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_reg_oom: {
      value: cdktf.numberToHclTerraform(struct!.objRegOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    obj_reg_success: {
      value: cdktf.numberToHclTerraform(struct!.objRegSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityTopnStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityTopnStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._heapAllocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapAllocFailed = this._heapAllocFailed;
    }
    if (this._heapAllocOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapAllocOom = this._heapAllocOom;
    }
    if (this._heapAllocSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapAllocSuccess = this._heapAllocSuccess;
    }
    if (this._heapDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapDeleted = this._heapDeleted;
    }
    if (this._objDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.objDeleted = this._objDeleted;
    }
    if (this._objRegFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.objRegFailed = this._objRegFailed;
    }
    if (this._objRegOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.objRegOom = this._objRegOom;
    }
    if (this._objRegSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.objRegSuccess = this._objRegSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityTopnStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._heapAllocFailed = undefined;
      this._heapAllocOom = undefined;
      this._heapAllocSuccess = undefined;
      this._heapDeleted = undefined;
      this._objDeleted = undefined;
      this._objRegFailed = undefined;
      this._objRegOom = undefined;
      this._objRegSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._heapAllocFailed = value.heapAllocFailed;
      this._heapAllocOom = value.heapAllocOom;
      this._heapAllocSuccess = value.heapAllocSuccess;
      this._heapDeleted = value.heapDeleted;
      this._objDeleted = value.objDeleted;
      this._objRegFailed = value.objRegFailed;
      this._objRegOom = value.objRegOom;
      this._objRegSuccess = value.objRegSuccess;
    }
  }

  // heap_alloc_failed - computed: false, optional: true, required: false
  private _heapAllocFailed?: number; 
  public get heapAllocFailed() {
    return this.getNumberAttribute('heap_alloc_failed');
  }
  public set heapAllocFailed(value: number) {
    this._heapAllocFailed = value;
  }
  public resetHeapAllocFailed() {
    this._heapAllocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapAllocFailedInput() {
    return this._heapAllocFailed;
  }

  // heap_alloc_oom - computed: false, optional: true, required: false
  private _heapAllocOom?: number; 
  public get heapAllocOom() {
    return this.getNumberAttribute('heap_alloc_oom');
  }
  public set heapAllocOom(value: number) {
    this._heapAllocOom = value;
  }
  public resetHeapAllocOom() {
    this._heapAllocOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapAllocOomInput() {
    return this._heapAllocOom;
  }

  // heap_alloc_success - computed: false, optional: true, required: false
  private _heapAllocSuccess?: number; 
  public get heapAllocSuccess() {
    return this.getNumberAttribute('heap_alloc_success');
  }
  public set heapAllocSuccess(value: number) {
    this._heapAllocSuccess = value;
  }
  public resetHeapAllocSuccess() {
    this._heapAllocSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapAllocSuccessInput() {
    return this._heapAllocSuccess;
  }

  // heap_deleted - computed: false, optional: true, required: false
  private _heapDeleted?: number; 
  public get heapDeleted() {
    return this.getNumberAttribute('heap_deleted');
  }
  public set heapDeleted(value: number) {
    this._heapDeleted = value;
  }
  public resetHeapDeleted() {
    this._heapDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapDeletedInput() {
    return this._heapDeleted;
  }

  // obj_deleted - computed: false, optional: true, required: false
  private _objDeleted?: number; 
  public get objDeleted() {
    return this.getNumberAttribute('obj_deleted');
  }
  public set objDeleted(value: number) {
    this._objDeleted = value;
  }
  public resetObjDeleted() {
    this._objDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objDeletedInput() {
    return this._objDeleted;
  }

  // obj_reg_failed - computed: false, optional: true, required: false
  private _objRegFailed?: number; 
  public get objRegFailed() {
    return this.getNumberAttribute('obj_reg_failed');
  }
  public set objRegFailed(value: number) {
    this._objRegFailed = value;
  }
  public resetObjRegFailed() {
    this._objRegFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objRegFailedInput() {
    return this._objRegFailed;
  }

  // obj_reg_oom - computed: false, optional: true, required: false
  private _objRegOom?: number; 
  public get objRegOom() {
    return this.getNumberAttribute('obj_reg_oom');
  }
  public set objRegOom(value: number) {
    this._objRegOom = value;
  }
  public resetObjRegOom() {
    this._objRegOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objRegOomInput() {
    return this._objRegOom;
  }

  // obj_reg_success - computed: false, optional: true, required: false
  private _objRegSuccess?: number; 
  public get objRegSuccess() {
    return this.getNumberAttribute('obj_reg_success');
  }
  public set objRegSuccess(value: number) {
    this._objRegSuccess = value;
  }
  public resetObjRegSuccess() {
    this._objRegSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objRegSuccessInput() {
    return this._objRegSuccess;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats thunder_visibility_topn_stats}
*/
export class DataThunderVisibilityTopnStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_topn_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityTopnStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityTopnStats to import
  * @param importFromId The id of the existing DataThunderVisibilityTopnStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityTopnStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_topn_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_topn_stats thunder_visibility_topn_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityTopnStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityTopnStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_topn_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _stats = new DataThunderVisibilityTopnStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityTopnStatsStats) {
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
      stats: dataThunderVisibilityTopnStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderVisibilityTopnStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityTopnStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
