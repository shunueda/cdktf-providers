// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemCounterLibAccountingStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#id DataThunderSystemCounterLibAccountingStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#stats DataThunderSystemCounterLibAccountingStats#stats}
  */
  readonly stats?: DataThunderSystemCounterLibAccountingStatsStats;
}
export interface DataThunderSystemCounterLibAccountingStatsStats {
  /**
  * Total blocks in hash table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_blocks_in_hash DataThunderSystemCounterLibAccountingStats#total_blocks_in_hash}
  */
  readonly totalBlocksInHash?: number;
  /**
  * Total blocks in rml in hash table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_blocks_in_rml_hash DataThunderSystemCounterLibAccountingStats#total_blocks_in_rml_hash}
  */
  readonly totalBlocksInRmlHash?: number;
  /**
  * Total counters allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_ctr_alloc DataThunderSystemCounterLibAccountingStats#total_ctr_alloc}
  */
  readonly totalCtrAlloc?: number;
  /**
  * Total counters actually freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_ctr_freed DataThunderSystemCounterLibAccountingStats#total_ctr_freed}
  */
  readonly totalCtrFreed?: number;
  /**
  * Total counters put in rml queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_ctr_in_rml DataThunderSystemCounterLibAccountingStats#total_ctr_in_rml}
  */
  readonly totalCtrInRml?: number;
  /**
  * Total counters currently allocated in system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_ctr_in_system DataThunderSystemCounterLibAccountingStats#total_ctr_in_system}
  */
  readonly totalCtrInSystem?: number;
  /**
  * Total memory blocks allocated by avro lib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_memblocks_alloc_avro DataThunderSystemCounterLibAccountingStats#total_memblocks_alloc_avro}
  */
  readonly totalMemblocksAllocAvro?: number;
  /**
  * Total memory blocks freed by avro lib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_memblocks_free_avro DataThunderSystemCounterLibAccountingStats#total_memblocks_free_avro}
  */
  readonly totalMemblocksFreeAvro?: number;
  /**
  * Total memory blocks realloc by avro lib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_memblocks_realloc_avro DataThunderSystemCounterLibAccountingStats#total_memblocks_realloc_avro}
  */
  readonly totalMemblocksReallocAvro?: number;
  /**
  * Total nodes allocated(sflow/history/telemetry/cpu-compute)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_nodes_alloc DataThunderSystemCounterLibAccountingStats#total_nodes_alloc}
  */
  readonly totalNodesAlloc?: number;
  /**
  * Total nodes freed(sflow/history/telemetry/cpu-compute)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_nodes_free DataThunderSystemCounterLibAccountingStats#total_nodes_free}
  */
  readonly totalNodesFree?: number;
  /**
  * Total nodes free failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_nodes_free_failed DataThunderSystemCounterLibAccountingStats#total_nodes_free_failed}
  */
  readonly totalNodesFreeFailed?: number;
  /**
  * Total nodes put in rml queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_nodes_in_rml DataThunderSystemCounterLibAccountingStats#total_nodes_in_rml}
  */
  readonly totalNodesInRml?: number;
  /**
  * Total nodes currently allocated in system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_nodes_in_system DataThunderSystemCounterLibAccountingStats#total_nodes_in_system}
  */
  readonly totalNodesInSystem?: number;
  /**
  * Total nodes unlink failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_nodes_unlink_failed DataThunderSystemCounterLibAccountingStats#total_nodes_unlink_failed}
  */
  readonly totalNodesUnlinkFailed?: number;
  /**
  * Total oper blocks allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_oper_alloc DataThunderSystemCounterLibAccountingStats#total_oper_alloc}
  */
  readonly totalOperAlloc?: number;
  /**
  * Total oper blocks freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#total_oper_free DataThunderSystemCounterLibAccountingStats#total_oper_free}
  */
  readonly totalOperFree?: number;
}

export function dataThunderSystemCounterLibAccountingStatsStatsToTerraform(struct?: DataThunderSystemCounterLibAccountingStatsStatsOutputReference | DataThunderSystemCounterLibAccountingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_blocks_in_hash: cdktf.numberToTerraform(struct!.totalBlocksInHash),
    total_blocks_in_rml_hash: cdktf.numberToTerraform(struct!.totalBlocksInRmlHash),
    total_ctr_alloc: cdktf.numberToTerraform(struct!.totalCtrAlloc),
    total_ctr_freed: cdktf.numberToTerraform(struct!.totalCtrFreed),
    total_ctr_in_rml: cdktf.numberToTerraform(struct!.totalCtrInRml),
    total_ctr_in_system: cdktf.numberToTerraform(struct!.totalCtrInSystem),
    total_memblocks_alloc_avro: cdktf.numberToTerraform(struct!.totalMemblocksAllocAvro),
    total_memblocks_free_avro: cdktf.numberToTerraform(struct!.totalMemblocksFreeAvro),
    total_memblocks_realloc_avro: cdktf.numberToTerraform(struct!.totalMemblocksReallocAvro),
    total_nodes_alloc: cdktf.numberToTerraform(struct!.totalNodesAlloc),
    total_nodes_free: cdktf.numberToTerraform(struct!.totalNodesFree),
    total_nodes_free_failed: cdktf.numberToTerraform(struct!.totalNodesFreeFailed),
    total_nodes_in_rml: cdktf.numberToTerraform(struct!.totalNodesInRml),
    total_nodes_in_system: cdktf.numberToTerraform(struct!.totalNodesInSystem),
    total_nodes_unlink_failed: cdktf.numberToTerraform(struct!.totalNodesUnlinkFailed),
    total_oper_alloc: cdktf.numberToTerraform(struct!.totalOperAlloc),
    total_oper_free: cdktf.numberToTerraform(struct!.totalOperFree),
  }
}


export function dataThunderSystemCounterLibAccountingStatsStatsToHclTerraform(struct?: DataThunderSystemCounterLibAccountingStatsStatsOutputReference | DataThunderSystemCounterLibAccountingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_blocks_in_hash: {
      value: cdktf.numberToHclTerraform(struct!.totalBlocksInHash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_blocks_in_rml_hash: {
      value: cdktf.numberToHclTerraform(struct!.totalBlocksInRmlHash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ctr_alloc: {
      value: cdktf.numberToHclTerraform(struct!.totalCtrAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ctr_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalCtrFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ctr_in_rml: {
      value: cdktf.numberToHclTerraform(struct!.totalCtrInRml),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ctr_in_system: {
      value: cdktf.numberToHclTerraform(struct!.totalCtrInSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_memblocks_alloc_avro: {
      value: cdktf.numberToHclTerraform(struct!.totalMemblocksAllocAvro),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_memblocks_free_avro: {
      value: cdktf.numberToHclTerraform(struct!.totalMemblocksFreeAvro),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_memblocks_realloc_avro: {
      value: cdktf.numberToHclTerraform(struct!.totalMemblocksReallocAvro),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_nodes_alloc: {
      value: cdktf.numberToHclTerraform(struct!.totalNodesAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_nodes_free: {
      value: cdktf.numberToHclTerraform(struct!.totalNodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_nodes_free_failed: {
      value: cdktf.numberToHclTerraform(struct!.totalNodesFreeFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_nodes_in_rml: {
      value: cdktf.numberToHclTerraform(struct!.totalNodesInRml),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_nodes_in_system: {
      value: cdktf.numberToHclTerraform(struct!.totalNodesInSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_nodes_unlink_failed: {
      value: cdktf.numberToHclTerraform(struct!.totalNodesUnlinkFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_oper_alloc: {
      value: cdktf.numberToHclTerraform(struct!.totalOperAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_oper_free: {
      value: cdktf.numberToHclTerraform(struct!.totalOperFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCounterLibAccountingStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemCounterLibAccountingStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalBlocksInHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBlocksInHash = this._totalBlocksInHash;
    }
    if (this._totalBlocksInRmlHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBlocksInRmlHash = this._totalBlocksInRmlHash;
    }
    if (this._totalCtrAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCtrAlloc = this._totalCtrAlloc;
    }
    if (this._totalCtrFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCtrFreed = this._totalCtrFreed;
    }
    if (this._totalCtrInRml !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCtrInRml = this._totalCtrInRml;
    }
    if (this._totalCtrInSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCtrInSystem = this._totalCtrInSystem;
    }
    if (this._totalMemblocksAllocAvro !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemblocksAllocAvro = this._totalMemblocksAllocAvro;
    }
    if (this._totalMemblocksFreeAvro !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemblocksFreeAvro = this._totalMemblocksFreeAvro;
    }
    if (this._totalMemblocksReallocAvro !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemblocksReallocAvro = this._totalMemblocksReallocAvro;
    }
    if (this._totalNodesAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodesAlloc = this._totalNodesAlloc;
    }
    if (this._totalNodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodesFree = this._totalNodesFree;
    }
    if (this._totalNodesFreeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodesFreeFailed = this._totalNodesFreeFailed;
    }
    if (this._totalNodesInRml !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodesInRml = this._totalNodesInRml;
    }
    if (this._totalNodesInSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodesInSystem = this._totalNodesInSystem;
    }
    if (this._totalNodesUnlinkFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodesUnlinkFailed = this._totalNodesUnlinkFailed;
    }
    if (this._totalOperAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalOperAlloc = this._totalOperAlloc;
    }
    if (this._totalOperFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalOperFree = this._totalOperFree;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCounterLibAccountingStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalBlocksInHash = undefined;
      this._totalBlocksInRmlHash = undefined;
      this._totalCtrAlloc = undefined;
      this._totalCtrFreed = undefined;
      this._totalCtrInRml = undefined;
      this._totalCtrInSystem = undefined;
      this._totalMemblocksAllocAvro = undefined;
      this._totalMemblocksFreeAvro = undefined;
      this._totalMemblocksReallocAvro = undefined;
      this._totalNodesAlloc = undefined;
      this._totalNodesFree = undefined;
      this._totalNodesFreeFailed = undefined;
      this._totalNodesInRml = undefined;
      this._totalNodesInSystem = undefined;
      this._totalNodesUnlinkFailed = undefined;
      this._totalOperAlloc = undefined;
      this._totalOperFree = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalBlocksInHash = value.totalBlocksInHash;
      this._totalBlocksInRmlHash = value.totalBlocksInRmlHash;
      this._totalCtrAlloc = value.totalCtrAlloc;
      this._totalCtrFreed = value.totalCtrFreed;
      this._totalCtrInRml = value.totalCtrInRml;
      this._totalCtrInSystem = value.totalCtrInSystem;
      this._totalMemblocksAllocAvro = value.totalMemblocksAllocAvro;
      this._totalMemblocksFreeAvro = value.totalMemblocksFreeAvro;
      this._totalMemblocksReallocAvro = value.totalMemblocksReallocAvro;
      this._totalNodesAlloc = value.totalNodesAlloc;
      this._totalNodesFree = value.totalNodesFree;
      this._totalNodesFreeFailed = value.totalNodesFreeFailed;
      this._totalNodesInRml = value.totalNodesInRml;
      this._totalNodesInSystem = value.totalNodesInSystem;
      this._totalNodesUnlinkFailed = value.totalNodesUnlinkFailed;
      this._totalOperAlloc = value.totalOperAlloc;
      this._totalOperFree = value.totalOperFree;
    }
  }

  // total_blocks_in_hash - computed: false, optional: true, required: false
  private _totalBlocksInHash?: number; 
  public get totalBlocksInHash() {
    return this.getNumberAttribute('total_blocks_in_hash');
  }
  public set totalBlocksInHash(value: number) {
    this._totalBlocksInHash = value;
  }
  public resetTotalBlocksInHash() {
    this._totalBlocksInHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBlocksInHashInput() {
    return this._totalBlocksInHash;
  }

  // total_blocks_in_rml_hash - computed: false, optional: true, required: false
  private _totalBlocksInRmlHash?: number; 
  public get totalBlocksInRmlHash() {
    return this.getNumberAttribute('total_blocks_in_rml_hash');
  }
  public set totalBlocksInRmlHash(value: number) {
    this._totalBlocksInRmlHash = value;
  }
  public resetTotalBlocksInRmlHash() {
    this._totalBlocksInRmlHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBlocksInRmlHashInput() {
    return this._totalBlocksInRmlHash;
  }

  // total_ctr_alloc - computed: false, optional: true, required: false
  private _totalCtrAlloc?: number; 
  public get totalCtrAlloc() {
    return this.getNumberAttribute('total_ctr_alloc');
  }
  public set totalCtrAlloc(value: number) {
    this._totalCtrAlloc = value;
  }
  public resetTotalCtrAlloc() {
    this._totalCtrAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCtrAllocInput() {
    return this._totalCtrAlloc;
  }

  // total_ctr_freed - computed: false, optional: true, required: false
  private _totalCtrFreed?: number; 
  public get totalCtrFreed() {
    return this.getNumberAttribute('total_ctr_freed');
  }
  public set totalCtrFreed(value: number) {
    this._totalCtrFreed = value;
  }
  public resetTotalCtrFreed() {
    this._totalCtrFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCtrFreedInput() {
    return this._totalCtrFreed;
  }

  // total_ctr_in_rml - computed: false, optional: true, required: false
  private _totalCtrInRml?: number; 
  public get totalCtrInRml() {
    return this.getNumberAttribute('total_ctr_in_rml');
  }
  public set totalCtrInRml(value: number) {
    this._totalCtrInRml = value;
  }
  public resetTotalCtrInRml() {
    this._totalCtrInRml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCtrInRmlInput() {
    return this._totalCtrInRml;
  }

  // total_ctr_in_system - computed: false, optional: true, required: false
  private _totalCtrInSystem?: number; 
  public get totalCtrInSystem() {
    return this.getNumberAttribute('total_ctr_in_system');
  }
  public set totalCtrInSystem(value: number) {
    this._totalCtrInSystem = value;
  }
  public resetTotalCtrInSystem() {
    this._totalCtrInSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCtrInSystemInput() {
    return this._totalCtrInSystem;
  }

  // total_memblocks_alloc_avro - computed: false, optional: true, required: false
  private _totalMemblocksAllocAvro?: number; 
  public get totalMemblocksAllocAvro() {
    return this.getNumberAttribute('total_memblocks_alloc_avro');
  }
  public set totalMemblocksAllocAvro(value: number) {
    this._totalMemblocksAllocAvro = value;
  }
  public resetTotalMemblocksAllocAvro() {
    this._totalMemblocksAllocAvro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemblocksAllocAvroInput() {
    return this._totalMemblocksAllocAvro;
  }

  // total_memblocks_free_avro - computed: false, optional: true, required: false
  private _totalMemblocksFreeAvro?: number; 
  public get totalMemblocksFreeAvro() {
    return this.getNumberAttribute('total_memblocks_free_avro');
  }
  public set totalMemblocksFreeAvro(value: number) {
    this._totalMemblocksFreeAvro = value;
  }
  public resetTotalMemblocksFreeAvro() {
    this._totalMemblocksFreeAvro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemblocksFreeAvroInput() {
    return this._totalMemblocksFreeAvro;
  }

  // total_memblocks_realloc_avro - computed: false, optional: true, required: false
  private _totalMemblocksReallocAvro?: number; 
  public get totalMemblocksReallocAvro() {
    return this.getNumberAttribute('total_memblocks_realloc_avro');
  }
  public set totalMemblocksReallocAvro(value: number) {
    this._totalMemblocksReallocAvro = value;
  }
  public resetTotalMemblocksReallocAvro() {
    this._totalMemblocksReallocAvro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemblocksReallocAvroInput() {
    return this._totalMemblocksReallocAvro;
  }

  // total_nodes_alloc - computed: false, optional: true, required: false
  private _totalNodesAlloc?: number; 
  public get totalNodesAlloc() {
    return this.getNumberAttribute('total_nodes_alloc');
  }
  public set totalNodesAlloc(value: number) {
    this._totalNodesAlloc = value;
  }
  public resetTotalNodesAlloc() {
    this._totalNodesAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodesAllocInput() {
    return this._totalNodesAlloc;
  }

  // total_nodes_free - computed: false, optional: true, required: false
  private _totalNodesFree?: number; 
  public get totalNodesFree() {
    return this.getNumberAttribute('total_nodes_free');
  }
  public set totalNodesFree(value: number) {
    this._totalNodesFree = value;
  }
  public resetTotalNodesFree() {
    this._totalNodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodesFreeInput() {
    return this._totalNodesFree;
  }

  // total_nodes_free_failed - computed: false, optional: true, required: false
  private _totalNodesFreeFailed?: number; 
  public get totalNodesFreeFailed() {
    return this.getNumberAttribute('total_nodes_free_failed');
  }
  public set totalNodesFreeFailed(value: number) {
    this._totalNodesFreeFailed = value;
  }
  public resetTotalNodesFreeFailed() {
    this._totalNodesFreeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodesFreeFailedInput() {
    return this._totalNodesFreeFailed;
  }

  // total_nodes_in_rml - computed: false, optional: true, required: false
  private _totalNodesInRml?: number; 
  public get totalNodesInRml() {
    return this.getNumberAttribute('total_nodes_in_rml');
  }
  public set totalNodesInRml(value: number) {
    this._totalNodesInRml = value;
  }
  public resetTotalNodesInRml() {
    this._totalNodesInRml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodesInRmlInput() {
    return this._totalNodesInRml;
  }

  // total_nodes_in_system - computed: false, optional: true, required: false
  private _totalNodesInSystem?: number; 
  public get totalNodesInSystem() {
    return this.getNumberAttribute('total_nodes_in_system');
  }
  public set totalNodesInSystem(value: number) {
    this._totalNodesInSystem = value;
  }
  public resetTotalNodesInSystem() {
    this._totalNodesInSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodesInSystemInput() {
    return this._totalNodesInSystem;
  }

  // total_nodes_unlink_failed - computed: false, optional: true, required: false
  private _totalNodesUnlinkFailed?: number; 
  public get totalNodesUnlinkFailed() {
    return this.getNumberAttribute('total_nodes_unlink_failed');
  }
  public set totalNodesUnlinkFailed(value: number) {
    this._totalNodesUnlinkFailed = value;
  }
  public resetTotalNodesUnlinkFailed() {
    this._totalNodesUnlinkFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodesUnlinkFailedInput() {
    return this._totalNodesUnlinkFailed;
  }

  // total_oper_alloc - computed: false, optional: true, required: false
  private _totalOperAlloc?: number; 
  public get totalOperAlloc() {
    return this.getNumberAttribute('total_oper_alloc');
  }
  public set totalOperAlloc(value: number) {
    this._totalOperAlloc = value;
  }
  public resetTotalOperAlloc() {
    this._totalOperAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalOperAllocInput() {
    return this._totalOperAlloc;
  }

  // total_oper_free - computed: false, optional: true, required: false
  private _totalOperFree?: number; 
  public get totalOperFree() {
    return this.getNumberAttribute('total_oper_free');
  }
  public set totalOperFree(value: number) {
    this._totalOperFree = value;
  }
  public resetTotalOperFree() {
    this._totalOperFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalOperFreeInput() {
    return this._totalOperFree;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats thunder_system_counter_lib_accounting_stats}
*/
export class DataThunderSystemCounterLibAccountingStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_counter_lib_accounting_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemCounterLibAccountingStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemCounterLibAccountingStats to import
  * @param importFromId The id of the existing DataThunderSystemCounterLibAccountingStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemCounterLibAccountingStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_counter_lib_accounting_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_counter_lib_accounting_stats thunder_system_counter_lib_accounting_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemCounterLibAccountingStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemCounterLibAccountingStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_counter_lib_accounting_stats',
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
  private _stats = new DataThunderSystemCounterLibAccountingStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemCounterLibAccountingStatsStats) {
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
      stats: dataThunderSystemCounterLibAccountingStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemCounterLibAccountingStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemCounterLibAccountingStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
