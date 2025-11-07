// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkSpanningTreeModeInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#id DataThunderNetworkSpanningTreeModeInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#oper DataThunderNetworkSpanningTreeModeInfoOper#oper}
  */
  readonly oper?: DataThunderNetworkSpanningTreeModeInfoOperOper;
}
export interface DataThunderNetworkSpanningTreeModeInfoOperOperInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#age_time DataThunderNetworkSpanningTreeModeInfoOper#age_time}
  */
  readonly ageTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#blk_state_port DataThunderNetworkSpanningTreeModeInfoOper#blk_state_port}
  */
  readonly blkStatePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#blk_state_trunk DataThunderNetworkSpanningTreeModeInfoOper#blk_state_trunk}
  */
  readonly blkStateTrunk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#bridge_ext_priority DataThunderNetworkSpanningTreeModeInfoOper#bridge_ext_priority}
  */
  readonly bridgeExtPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#bridge_fwd_delay DataThunderNetworkSpanningTreeModeInfoOper#bridge_fwd_delay}
  */
  readonly bridgeFwdDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#bridge_hello_time DataThunderNetworkSpanningTreeModeInfoOper#bridge_hello_time}
  */
  readonly bridgeHelloTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#bridge_id DataThunderNetworkSpanningTreeModeInfoOper#bridge_id}
  */
  readonly bridgeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#bridge_priority DataThunderNetworkSpanningTreeModeInfoOper#bridge_priority}
  */
  readonly bridgePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#des_root DataThunderNetworkSpanningTreeModeInfoOper#des_root}
  */
  readonly desRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#des_root_ext_priority DataThunderNetworkSpanningTreeModeInfoOper#des_root_ext_priority}
  */
  readonly desRootExtPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#des_root_priority DataThunderNetworkSpanningTreeModeInfoOper#des_root_priority}
  */
  readonly desRootPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#fwd_state_port DataThunderNetworkSpanningTreeModeInfoOper#fwd_state_port}
  */
  readonly fwdStatePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#fwd_state_trunk DataThunderNetworkSpanningTreeModeInfoOper#fwd_state_trunk}
  */
  readonly fwdStateTrunk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#instance_num DataThunderNetworkSpanningTreeModeInfoOper#instance_num}
  */
  readonly instanceNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#int_max_age DataThunderNetworkSpanningTreeModeInfoOper#int_max_age}
  */
  readonly intMaxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#int_path_cost DataThunderNetworkSpanningTreeModeInfoOper#int_path_cost}
  */
  readonly intPathCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#last_topo_change_port DataThunderNetworkSpanningTreeModeInfoOper#last_topo_change_port}
  */
  readonly lastTopoChangePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#max_age DataThunderNetworkSpanningTreeModeInfoOper#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#max_hops DataThunderNetworkSpanningTreeModeInfoOper#max_hops}
  */
  readonly maxHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#path_cost DataThunderNetworkSpanningTreeModeInfoOper#path_cost}
  */
  readonly pathCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#regional_root DataThunderNetworkSpanningTreeModeInfoOper#regional_root}
  */
  readonly regionalRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#regional_root_ext_priority DataThunderNetworkSpanningTreeModeInfoOper#regional_root_ext_priority}
  */
  readonly regionalRootExtPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#regional_root_priority DataThunderNetworkSpanningTreeModeInfoOper#regional_root_priority}
  */
  readonly regionalRootPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#root_fwd_delay DataThunderNetworkSpanningTreeModeInfoOper#root_fwd_delay}
  */
  readonly rootFwdDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#root_port DataThunderNetworkSpanningTreeModeInfoOper#root_port}
  */
  readonly rootPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#time_since_topo_change DataThunderNetworkSpanningTreeModeInfoOper#time_since_topo_change}
  */
  readonly timeSinceTopoChange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#topo_change_count DataThunderNetworkSpanningTreeModeInfoOper#topo_change_count}
  */
  readonly topoChangeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#topo_change_port DataThunderNetworkSpanningTreeModeInfoOper#topo_change_port}
  */
  readonly topoChangePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#tx_hold_count DataThunderNetworkSpanningTreeModeInfoOper#tx_hold_count}
  */
  readonly txHoldCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#vlans DataThunderNetworkSpanningTreeModeInfoOper#vlans}
  */
  readonly vlans?: string;
}

export function dataThunderNetworkSpanningTreeModeInfoOperOperInstancesToTerraform(struct?: DataThunderNetworkSpanningTreeModeInfoOperOperInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age_time: cdktf.numberToTerraform(struct!.ageTime),
    blk_state_port: cdktf.stringToTerraform(struct!.blkStatePort),
    blk_state_trunk: cdktf.stringToTerraform(struct!.blkStateTrunk),
    bridge_ext_priority: cdktf.numberToTerraform(struct!.bridgeExtPriority),
    bridge_fwd_delay: cdktf.numberToTerraform(struct!.bridgeFwdDelay),
    bridge_hello_time: cdktf.numberToTerraform(struct!.bridgeHelloTime),
    bridge_id: cdktf.stringToTerraform(struct!.bridgeId),
    bridge_priority: cdktf.numberToTerraform(struct!.bridgePriority),
    des_root: cdktf.stringToTerraform(struct!.desRoot),
    des_root_ext_priority: cdktf.numberToTerraform(struct!.desRootExtPriority),
    des_root_priority: cdktf.numberToTerraform(struct!.desRootPriority),
    fwd_state_port: cdktf.stringToTerraform(struct!.fwdStatePort),
    fwd_state_trunk: cdktf.stringToTerraform(struct!.fwdStateTrunk),
    instance_num: cdktf.numberToTerraform(struct!.instanceNum),
    int_max_age: cdktf.numberToTerraform(struct!.intMaxAge),
    int_path_cost: cdktf.numberToTerraform(struct!.intPathCost),
    last_topo_change_port: cdktf.stringToTerraform(struct!.lastTopoChangePort),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    max_hops: cdktf.numberToTerraform(struct!.maxHops),
    path_cost: cdktf.numberToTerraform(struct!.pathCost),
    regional_root: cdktf.stringToTerraform(struct!.regionalRoot),
    regional_root_ext_priority: cdktf.numberToTerraform(struct!.regionalRootExtPriority),
    regional_root_priority: cdktf.numberToTerraform(struct!.regionalRootPriority),
    root_fwd_delay: cdktf.numberToTerraform(struct!.rootFwdDelay),
    root_port: cdktf.stringToTerraform(struct!.rootPort),
    time_since_topo_change: cdktf.numberToTerraform(struct!.timeSinceTopoChange),
    topo_change_count: cdktf.numberToTerraform(struct!.topoChangeCount),
    topo_change_port: cdktf.stringToTerraform(struct!.topoChangePort),
    tx_hold_count: cdktf.numberToTerraform(struct!.txHoldCount),
    vlans: cdktf.stringToTerraform(struct!.vlans),
  }
}


export function dataThunderNetworkSpanningTreeModeInfoOperOperInstancesToHclTerraform(struct?: DataThunderNetworkSpanningTreeModeInfoOperOperInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age_time: {
      value: cdktf.numberToHclTerraform(struct!.ageTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blk_state_port: {
      value: cdktf.stringToHclTerraform(struct!.blkStatePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blk_state_trunk: {
      value: cdktf.stringToHclTerraform(struct!.blkStateTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bridge_ext_priority: {
      value: cdktf.numberToHclTerraform(struct!.bridgeExtPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bridge_fwd_delay: {
      value: cdktf.numberToHclTerraform(struct!.bridgeFwdDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bridge_hello_time: {
      value: cdktf.numberToHclTerraform(struct!.bridgeHelloTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bridge_id: {
      value: cdktf.stringToHclTerraform(struct!.bridgeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bridge_priority: {
      value: cdktf.numberToHclTerraform(struct!.bridgePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    des_root: {
      value: cdktf.stringToHclTerraform(struct!.desRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    des_root_ext_priority: {
      value: cdktf.numberToHclTerraform(struct!.desRootExtPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    des_root_priority: {
      value: cdktf.numberToHclTerraform(struct!.desRootPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_state_port: {
      value: cdktf.stringToHclTerraform(struct!.fwdStatePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_state_trunk: {
      value: cdktf.stringToHclTerraform(struct!.fwdStateTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_num: {
      value: cdktf.numberToHclTerraform(struct!.instanceNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int_max_age: {
      value: cdktf.numberToHclTerraform(struct!.intMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int_path_cost: {
      value: cdktf.numberToHclTerraform(struct!.intPathCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_topo_change_port: {
      value: cdktf.stringToHclTerraform(struct!.lastTopoChangePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_hops: {
      value: cdktf.numberToHclTerraform(struct!.maxHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_cost: {
      value: cdktf.numberToHclTerraform(struct!.pathCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regional_root: {
      value: cdktf.stringToHclTerraform(struct!.regionalRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regional_root_ext_priority: {
      value: cdktf.numberToHclTerraform(struct!.regionalRootExtPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regional_root_priority: {
      value: cdktf.numberToHclTerraform(struct!.regionalRootPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_fwd_delay: {
      value: cdktf.numberToHclTerraform(struct!.rootFwdDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_port: {
      value: cdktf.stringToHclTerraform(struct!.rootPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_since_topo_change: {
      value: cdktf.numberToHclTerraform(struct!.timeSinceTopoChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topo_change_count: {
      value: cdktf.numberToHclTerraform(struct!.topoChangeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topo_change_port: {
      value: cdktf.stringToHclTerraform(struct!.topoChangePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tx_hold_count: {
      value: cdktf.numberToHclTerraform(struct!.txHoldCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlans: {
      value: cdktf.stringToHclTerraform(struct!.vlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkSpanningTreeModeInfoOperOperInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkSpanningTreeModeInfoOperOperInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ageTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ageTime = this._ageTime;
    }
    if (this._blkStatePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.blkStatePort = this._blkStatePort;
    }
    if (this._blkStateTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.blkStateTrunk = this._blkStateTrunk;
    }
    if (this._bridgeExtPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgeExtPriority = this._bridgeExtPriority;
    }
    if (this._bridgeFwdDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgeFwdDelay = this._bridgeFwdDelay;
    }
    if (this._bridgeHelloTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgeHelloTime = this._bridgeHelloTime;
    }
    if (this._bridgeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgeId = this._bridgeId;
    }
    if (this._bridgePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgePriority = this._bridgePriority;
    }
    if (this._desRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.desRoot = this._desRoot;
    }
    if (this._desRootExtPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.desRootExtPriority = this._desRootExtPriority;
    }
    if (this._desRootPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.desRootPriority = this._desRootPriority;
    }
    if (this._fwdStatePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdStatePort = this._fwdStatePort;
    }
    if (this._fwdStateTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdStateTrunk = this._fwdStateTrunk;
    }
    if (this._instanceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNum = this._instanceNum;
    }
    if (this._intMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.intMaxAge = this._intMaxAge;
    }
    if (this._intPathCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.intPathCost = this._intPathCost;
    }
    if (this._lastTopoChangePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTopoChangePort = this._lastTopoChangePort;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHops = this._maxHops;
    }
    if (this._pathCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathCost = this._pathCost;
    }
    if (this._regionalRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalRoot = this._regionalRoot;
    }
    if (this._regionalRootExtPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalRootExtPriority = this._regionalRootExtPriority;
    }
    if (this._regionalRootPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalRootPriority = this._regionalRootPriority;
    }
    if (this._rootFwdDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootFwdDelay = this._rootFwdDelay;
    }
    if (this._rootPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPort = this._rootPort;
    }
    if (this._timeSinceTopoChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSinceTopoChange = this._timeSinceTopoChange;
    }
    if (this._topoChangeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.topoChangeCount = this._topoChangeCount;
    }
    if (this._topoChangePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.topoChangePort = this._topoChangePort;
    }
    if (this._txHoldCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.txHoldCount = this._txHoldCount;
    }
    if (this._vlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkSpanningTreeModeInfoOperOperInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ageTime = undefined;
      this._blkStatePort = undefined;
      this._blkStateTrunk = undefined;
      this._bridgeExtPriority = undefined;
      this._bridgeFwdDelay = undefined;
      this._bridgeHelloTime = undefined;
      this._bridgeId = undefined;
      this._bridgePriority = undefined;
      this._desRoot = undefined;
      this._desRootExtPriority = undefined;
      this._desRootPriority = undefined;
      this._fwdStatePort = undefined;
      this._fwdStateTrunk = undefined;
      this._instanceNum = undefined;
      this._intMaxAge = undefined;
      this._intPathCost = undefined;
      this._lastTopoChangePort = undefined;
      this._maxAge = undefined;
      this._maxHops = undefined;
      this._pathCost = undefined;
      this._regionalRoot = undefined;
      this._regionalRootExtPriority = undefined;
      this._regionalRootPriority = undefined;
      this._rootFwdDelay = undefined;
      this._rootPort = undefined;
      this._timeSinceTopoChange = undefined;
      this._topoChangeCount = undefined;
      this._topoChangePort = undefined;
      this._txHoldCount = undefined;
      this._vlans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ageTime = value.ageTime;
      this._blkStatePort = value.blkStatePort;
      this._blkStateTrunk = value.blkStateTrunk;
      this._bridgeExtPriority = value.bridgeExtPriority;
      this._bridgeFwdDelay = value.bridgeFwdDelay;
      this._bridgeHelloTime = value.bridgeHelloTime;
      this._bridgeId = value.bridgeId;
      this._bridgePriority = value.bridgePriority;
      this._desRoot = value.desRoot;
      this._desRootExtPriority = value.desRootExtPriority;
      this._desRootPriority = value.desRootPriority;
      this._fwdStatePort = value.fwdStatePort;
      this._fwdStateTrunk = value.fwdStateTrunk;
      this._instanceNum = value.instanceNum;
      this._intMaxAge = value.intMaxAge;
      this._intPathCost = value.intPathCost;
      this._lastTopoChangePort = value.lastTopoChangePort;
      this._maxAge = value.maxAge;
      this._maxHops = value.maxHops;
      this._pathCost = value.pathCost;
      this._regionalRoot = value.regionalRoot;
      this._regionalRootExtPriority = value.regionalRootExtPriority;
      this._regionalRootPriority = value.regionalRootPriority;
      this._rootFwdDelay = value.rootFwdDelay;
      this._rootPort = value.rootPort;
      this._timeSinceTopoChange = value.timeSinceTopoChange;
      this._topoChangeCount = value.topoChangeCount;
      this._topoChangePort = value.topoChangePort;
      this._txHoldCount = value.txHoldCount;
      this._vlans = value.vlans;
    }
  }

  // age_time - computed: false, optional: true, required: false
  private _ageTime?: number; 
  public get ageTime() {
    return this.getNumberAttribute('age_time');
  }
  public set ageTime(value: number) {
    this._ageTime = value;
  }
  public resetAgeTime() {
    this._ageTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageTimeInput() {
    return this._ageTime;
  }

  // blk_state_port - computed: false, optional: true, required: false
  private _blkStatePort?: string; 
  public get blkStatePort() {
    return this.getStringAttribute('blk_state_port');
  }
  public set blkStatePort(value: string) {
    this._blkStatePort = value;
  }
  public resetBlkStatePort() {
    this._blkStatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blkStatePortInput() {
    return this._blkStatePort;
  }

  // blk_state_trunk - computed: false, optional: true, required: false
  private _blkStateTrunk?: string; 
  public get blkStateTrunk() {
    return this.getStringAttribute('blk_state_trunk');
  }
  public set blkStateTrunk(value: string) {
    this._blkStateTrunk = value;
  }
  public resetBlkStateTrunk() {
    this._blkStateTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blkStateTrunkInput() {
    return this._blkStateTrunk;
  }

  // bridge_ext_priority - computed: false, optional: true, required: false
  private _bridgeExtPriority?: number; 
  public get bridgeExtPriority() {
    return this.getNumberAttribute('bridge_ext_priority');
  }
  public set bridgeExtPriority(value: number) {
    this._bridgeExtPriority = value;
  }
  public resetBridgeExtPriority() {
    this._bridgeExtPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeExtPriorityInput() {
    return this._bridgeExtPriority;
  }

  // bridge_fwd_delay - computed: false, optional: true, required: false
  private _bridgeFwdDelay?: number; 
  public get bridgeFwdDelay() {
    return this.getNumberAttribute('bridge_fwd_delay');
  }
  public set bridgeFwdDelay(value: number) {
    this._bridgeFwdDelay = value;
  }
  public resetBridgeFwdDelay() {
    this._bridgeFwdDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeFwdDelayInput() {
    return this._bridgeFwdDelay;
  }

  // bridge_hello_time - computed: false, optional: true, required: false
  private _bridgeHelloTime?: number; 
  public get bridgeHelloTime() {
    return this.getNumberAttribute('bridge_hello_time');
  }
  public set bridgeHelloTime(value: number) {
    this._bridgeHelloTime = value;
  }
  public resetBridgeHelloTime() {
    this._bridgeHelloTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeHelloTimeInput() {
    return this._bridgeHelloTime;
  }

  // bridge_id - computed: false, optional: true, required: false
  private _bridgeId?: string; 
  public get bridgeId() {
    return this.getStringAttribute('bridge_id');
  }
  public set bridgeId(value: string) {
    this._bridgeId = value;
  }
  public resetBridgeId() {
    this._bridgeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeIdInput() {
    return this._bridgeId;
  }

  // bridge_priority - computed: false, optional: true, required: false
  private _bridgePriority?: number; 
  public get bridgePriority() {
    return this.getNumberAttribute('bridge_priority');
  }
  public set bridgePriority(value: number) {
    this._bridgePriority = value;
  }
  public resetBridgePriority() {
    this._bridgePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgePriorityInput() {
    return this._bridgePriority;
  }

  // des_root - computed: false, optional: true, required: false
  private _desRoot?: string; 
  public get desRoot() {
    return this.getStringAttribute('des_root');
  }
  public set desRoot(value: string) {
    this._desRoot = value;
  }
  public resetDesRoot() {
    this._desRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desRootInput() {
    return this._desRoot;
  }

  // des_root_ext_priority - computed: false, optional: true, required: false
  private _desRootExtPriority?: number; 
  public get desRootExtPriority() {
    return this.getNumberAttribute('des_root_ext_priority');
  }
  public set desRootExtPriority(value: number) {
    this._desRootExtPriority = value;
  }
  public resetDesRootExtPriority() {
    this._desRootExtPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desRootExtPriorityInput() {
    return this._desRootExtPriority;
  }

  // des_root_priority - computed: false, optional: true, required: false
  private _desRootPriority?: number; 
  public get desRootPriority() {
    return this.getNumberAttribute('des_root_priority');
  }
  public set desRootPriority(value: number) {
    this._desRootPriority = value;
  }
  public resetDesRootPriority() {
    this._desRootPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desRootPriorityInput() {
    return this._desRootPriority;
  }

  // fwd_state_port - computed: false, optional: true, required: false
  private _fwdStatePort?: string; 
  public get fwdStatePort() {
    return this.getStringAttribute('fwd_state_port');
  }
  public set fwdStatePort(value: string) {
    this._fwdStatePort = value;
  }
  public resetFwdStatePort() {
    this._fwdStatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdStatePortInput() {
    return this._fwdStatePort;
  }

  // fwd_state_trunk - computed: false, optional: true, required: false
  private _fwdStateTrunk?: string; 
  public get fwdStateTrunk() {
    return this.getStringAttribute('fwd_state_trunk');
  }
  public set fwdStateTrunk(value: string) {
    this._fwdStateTrunk = value;
  }
  public resetFwdStateTrunk() {
    this._fwdStateTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdStateTrunkInput() {
    return this._fwdStateTrunk;
  }

  // instance_num - computed: false, optional: true, required: false
  private _instanceNum?: number; 
  public get instanceNum() {
    return this.getNumberAttribute('instance_num');
  }
  public set instanceNum(value: number) {
    this._instanceNum = value;
  }
  public resetInstanceNum() {
    this._instanceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNumInput() {
    return this._instanceNum;
  }

  // int_max_age - computed: false, optional: true, required: false
  private _intMaxAge?: number; 
  public get intMaxAge() {
    return this.getNumberAttribute('int_max_age');
  }
  public set intMaxAge(value: number) {
    this._intMaxAge = value;
  }
  public resetIntMaxAge() {
    this._intMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intMaxAgeInput() {
    return this._intMaxAge;
  }

  // int_path_cost - computed: false, optional: true, required: false
  private _intPathCost?: number; 
  public get intPathCost() {
    return this.getNumberAttribute('int_path_cost');
  }
  public set intPathCost(value: number) {
    this._intPathCost = value;
  }
  public resetIntPathCost() {
    this._intPathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intPathCostInput() {
    return this._intPathCost;
  }

  // last_topo_change_port - computed: false, optional: true, required: false
  private _lastTopoChangePort?: string; 
  public get lastTopoChangePort() {
    return this.getStringAttribute('last_topo_change_port');
  }
  public set lastTopoChangePort(value: string) {
    this._lastTopoChangePort = value;
  }
  public resetLastTopoChangePort() {
    this._lastTopoChangePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTopoChangePortInput() {
    return this._lastTopoChangePort;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_hops - computed: false, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
  }

  // path_cost - computed: false, optional: true, required: false
  private _pathCost?: number; 
  public get pathCost() {
    return this.getNumberAttribute('path_cost');
  }
  public set pathCost(value: number) {
    this._pathCost = value;
  }
  public resetPathCost() {
    this._pathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathCostInput() {
    return this._pathCost;
  }

  // regional_root - computed: false, optional: true, required: false
  private _regionalRoot?: string; 
  public get regionalRoot() {
    return this.getStringAttribute('regional_root');
  }
  public set regionalRoot(value: string) {
    this._regionalRoot = value;
  }
  public resetRegionalRoot() {
    this._regionalRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalRootInput() {
    return this._regionalRoot;
  }

  // regional_root_ext_priority - computed: false, optional: true, required: false
  private _regionalRootExtPriority?: number; 
  public get regionalRootExtPriority() {
    return this.getNumberAttribute('regional_root_ext_priority');
  }
  public set regionalRootExtPriority(value: number) {
    this._regionalRootExtPriority = value;
  }
  public resetRegionalRootExtPriority() {
    this._regionalRootExtPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalRootExtPriorityInput() {
    return this._regionalRootExtPriority;
  }

  // regional_root_priority - computed: false, optional: true, required: false
  private _regionalRootPriority?: number; 
  public get regionalRootPriority() {
    return this.getNumberAttribute('regional_root_priority');
  }
  public set regionalRootPriority(value: number) {
    this._regionalRootPriority = value;
  }
  public resetRegionalRootPriority() {
    this._regionalRootPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalRootPriorityInput() {
    return this._regionalRootPriority;
  }

  // root_fwd_delay - computed: false, optional: true, required: false
  private _rootFwdDelay?: number; 
  public get rootFwdDelay() {
    return this.getNumberAttribute('root_fwd_delay');
  }
  public set rootFwdDelay(value: number) {
    this._rootFwdDelay = value;
  }
  public resetRootFwdDelay() {
    this._rootFwdDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFwdDelayInput() {
    return this._rootFwdDelay;
  }

  // root_port - computed: false, optional: true, required: false
  private _rootPort?: string; 
  public get rootPort() {
    return this.getStringAttribute('root_port');
  }
  public set rootPort(value: string) {
    this._rootPort = value;
  }
  public resetRootPort() {
    this._rootPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPortInput() {
    return this._rootPort;
  }

  // time_since_topo_change - computed: false, optional: true, required: false
  private _timeSinceTopoChange?: number; 
  public get timeSinceTopoChange() {
    return this.getNumberAttribute('time_since_topo_change');
  }
  public set timeSinceTopoChange(value: number) {
    this._timeSinceTopoChange = value;
  }
  public resetTimeSinceTopoChange() {
    this._timeSinceTopoChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSinceTopoChangeInput() {
    return this._timeSinceTopoChange;
  }

  // topo_change_count - computed: false, optional: true, required: false
  private _topoChangeCount?: number; 
  public get topoChangeCount() {
    return this.getNumberAttribute('topo_change_count');
  }
  public set topoChangeCount(value: number) {
    this._topoChangeCount = value;
  }
  public resetTopoChangeCount() {
    this._topoChangeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topoChangeCountInput() {
    return this._topoChangeCount;
  }

  // topo_change_port - computed: false, optional: true, required: false
  private _topoChangePort?: string; 
  public get topoChangePort() {
    return this.getStringAttribute('topo_change_port');
  }
  public set topoChangePort(value: string) {
    this._topoChangePort = value;
  }
  public resetTopoChangePort() {
    this._topoChangePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topoChangePortInput() {
    return this._topoChangePort;
  }

  // tx_hold_count - computed: false, optional: true, required: false
  private _txHoldCount?: number; 
  public get txHoldCount() {
    return this.getNumberAttribute('tx_hold_count');
  }
  public set txHoldCount(value: number) {
    this._txHoldCount = value;
  }
  public resetTxHoldCount() {
    this._txHoldCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txHoldCountInput() {
    return this._txHoldCount;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans?: string; 
  public get vlans() {
    return this.getStringAttribute('vlans');
  }
  public set vlans(value: string) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }
}

export class DataThunderNetworkSpanningTreeModeInfoOperOperInstancesList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkSpanningTreeModeInfoOperOperInstances[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkSpanningTreeModeInfoOperOperInstancesOutputReference {
    return new DataThunderNetworkSpanningTreeModeInfoOperOperInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkSpanningTreeModeInfoOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#mode DataThunderNetworkSpanningTreeModeInfoOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#packets_input DataThunderNetworkSpanningTreeModeInfoOper#packets_input}
  */
  readonly packetsInput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#packets_output DataThunderNetworkSpanningTreeModeInfoOper#packets_output}
  */
  readonly packetsOutput?: number;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#instances DataThunderNetworkSpanningTreeModeInfoOper#instances}
  */
  readonly instances?: DataThunderNetworkSpanningTreeModeInfoOperOperInstances[] | cdktf.IResolvable;
}

export function dataThunderNetworkSpanningTreeModeInfoOperOperToTerraform(struct?: DataThunderNetworkSpanningTreeModeInfoOperOperOutputReference | DataThunderNetworkSpanningTreeModeInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    packets_input: cdktf.numberToTerraform(struct!.packetsInput),
    packets_output: cdktf.numberToTerraform(struct!.packetsOutput),
    instances: cdktf.listMapper(dataThunderNetworkSpanningTreeModeInfoOperOperInstancesToTerraform, true)(struct!.instances),
  }
}


export function dataThunderNetworkSpanningTreeModeInfoOperOperToHclTerraform(struct?: DataThunderNetworkSpanningTreeModeInfoOperOperOutputReference | DataThunderNetworkSpanningTreeModeInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packets_input: {
      value: cdktf.numberToHclTerraform(struct!.packetsInput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_output: {
      value: cdktf.numberToHclTerraform(struct!.packetsOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instances: {
      value: cdktf.listMapperHcl(dataThunderNetworkSpanningTreeModeInfoOperOperInstancesToHclTerraform, true)(struct!.instances),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkSpanningTreeModeInfoOperOperInstancesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkSpanningTreeModeInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkSpanningTreeModeInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._packetsInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsInput = this._packetsInput;
    }
    if (this._packetsOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsOutput = this._packetsOutput;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkSpanningTreeModeInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._packetsInput = undefined;
      this._packetsOutput = undefined;
      this._instances.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._packetsInput = value.packetsInput;
      this._packetsOutput = value.packetsOutput;
      this._instances.internalValue = value.instances;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // packets_input - computed: false, optional: true, required: false
  private _packetsInput?: number; 
  public get packetsInput() {
    return this.getNumberAttribute('packets_input');
  }
  public set packetsInput(value: number) {
    this._packetsInput = value;
  }
  public resetPacketsInput() {
    this._packetsInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsInputInput() {
    return this._packetsInput;
  }

  // packets_output - computed: false, optional: true, required: false
  private _packetsOutput?: number; 
  public get packetsOutput() {
    return this.getNumberAttribute('packets_output');
  }
  public set packetsOutput(value: number) {
    this._packetsOutput = value;
  }
  public resetPacketsOutput() {
    this._packetsOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsOutputInput() {
    return this._packetsOutput;
  }

  // instances - computed: false, optional: true, required: false
  private _instances = new DataThunderNetworkSpanningTreeModeInfoOperOperInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: DataThunderNetworkSpanningTreeModeInfoOperOperInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  public resetInstances() {
    this._instances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper thunder_network_spanning_tree_mode_info_oper}
*/
export class DataThunderNetworkSpanningTreeModeInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_spanning_tree_mode_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkSpanningTreeModeInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkSpanningTreeModeInfoOper to import
  * @param importFromId The id of the existing DataThunderNetworkSpanningTreeModeInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkSpanningTreeModeInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_spanning_tree_mode_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_spanning_tree_mode_info_oper thunder_network_spanning_tree_mode_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkSpanningTreeModeInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkSpanningTreeModeInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_spanning_tree_mode_info_oper',
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
  private _oper = new DataThunderNetworkSpanningTreeModeInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkSpanningTreeModeInfoOperOper) {
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
      oper: dataThunderNetworkSpanningTreeModeInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderNetworkSpanningTreeModeInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkSpanningTreeModeInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
