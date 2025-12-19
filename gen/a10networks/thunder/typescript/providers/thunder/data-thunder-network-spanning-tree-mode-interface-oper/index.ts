// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkSpanningTreeModeInterfaceOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#id DataThunderNetworkSpanningTreeModeInterfaceOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#oper DataThunderNetworkSpanningTreeModeInterfaceOper#oper}
  */
  readonly oper?: DataThunderNetworkSpanningTreeModeInterfaceOperOper;
}
export interface DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#ad_in_port_cost DataThunderNetworkSpanningTreeModeInterfaceOper#ad_in_port_cost}
  */
  readonly adInPortCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_bridge DataThunderNetworkSpanningTreeModeInterfaceOper#des_bridge}
  */
  readonly desBridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_bridge_ext_priority DataThunderNetworkSpanningTreeModeInterfaceOper#des_bridge_ext_priority}
  */
  readonly desBridgeExtPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_bridge_priority DataThunderNetworkSpanningTreeModeInterfaceOper#des_bridge_priority}
  */
  readonly desBridgePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_int_cost DataThunderNetworkSpanningTreeModeInterfaceOper#des_int_cost}
  */
  readonly desIntCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_port DataThunderNetworkSpanningTreeModeInterfaceOper#des_port}
  */
  readonly desPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_reg_root DataThunderNetworkSpanningTreeModeInterfaceOper#des_reg_root}
  */
  readonly desRegRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_reg_root_ext_priority DataThunderNetworkSpanningTreeModeInterfaceOper#des_reg_root_ext_priority}
  */
  readonly desRegRootExtPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_reg_root_priority DataThunderNetworkSpanningTreeModeInterfaceOper#des_reg_root_priority}
  */
  readonly desRegRootPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#disputed DataThunderNetworkSpanningTreeModeInterfaceOper#disputed}
  */
  readonly disputed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#in_port_cost DataThunderNetworkSpanningTreeModeInterfaceOper#in_port_cost}
  */
  readonly inPortCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#instance_num DataThunderNetworkSpanningTreeModeInterfaceOper#instance_num}
  */
  readonly instanceNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#port_id DataThunderNetworkSpanningTreeModeInterfaceOper#port_id}
  */
  readonly portId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#role DataThunderNetworkSpanningTreeModeInterfaceOper#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#state DataThunderNetworkSpanningTreeModeInterfaceOper#state}
  */
  readonly state?: string;
}

export function dataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesToTerraform(struct?: DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_in_port_cost: cdktf.numberToTerraform(struct!.adInPortCost),
    des_bridge: cdktf.stringToTerraform(struct!.desBridge),
    des_bridge_ext_priority: cdktf.numberToTerraform(struct!.desBridgeExtPriority),
    des_bridge_priority: cdktf.numberToTerraform(struct!.desBridgePriority),
    des_int_cost: cdktf.numberToTerraform(struct!.desIntCost),
    des_port: cdktf.stringToTerraform(struct!.desPort),
    des_reg_root: cdktf.stringToTerraform(struct!.desRegRoot),
    des_reg_root_ext_priority: cdktf.numberToTerraform(struct!.desRegRootExtPriority),
    des_reg_root_priority: cdktf.numberToTerraform(struct!.desRegRootPriority),
    disputed: cdktf.stringToTerraform(struct!.disputed),
    in_port_cost: cdktf.numberToTerraform(struct!.inPortCost),
    instance_num: cdktf.numberToTerraform(struct!.instanceNum),
    port_id: cdktf.stringToTerraform(struct!.portId),
    role: cdktf.stringToTerraform(struct!.role),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesToHclTerraform(struct?: DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_in_port_cost: {
      value: cdktf.numberToHclTerraform(struct!.adInPortCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    des_bridge: {
      value: cdktf.stringToHclTerraform(struct!.desBridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    des_bridge_ext_priority: {
      value: cdktf.numberToHclTerraform(struct!.desBridgeExtPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    des_bridge_priority: {
      value: cdktf.numberToHclTerraform(struct!.desBridgePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    des_int_cost: {
      value: cdktf.numberToHclTerraform(struct!.desIntCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    des_port: {
      value: cdktf.stringToHclTerraform(struct!.desPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    des_reg_root: {
      value: cdktf.stringToHclTerraform(struct!.desRegRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    des_reg_root_ext_priority: {
      value: cdktf.numberToHclTerraform(struct!.desRegRootExtPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    des_reg_root_priority: {
      value: cdktf.numberToHclTerraform(struct!.desRegRootPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disputed: {
      value: cdktf.stringToHclTerraform(struct!.disputed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_port_cost: {
      value: cdktf.numberToHclTerraform(struct!.inPortCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_num: {
      value: cdktf.numberToHclTerraform(struct!.instanceNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_id: {
      value: cdktf.stringToHclTerraform(struct!.portId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adInPortCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.adInPortCost = this._adInPortCost;
    }
    if (this._desBridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.desBridge = this._desBridge;
    }
    if (this._desBridgeExtPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.desBridgeExtPriority = this._desBridgeExtPriority;
    }
    if (this._desBridgePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.desBridgePriority = this._desBridgePriority;
    }
    if (this._desIntCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.desIntCost = this._desIntCost;
    }
    if (this._desPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.desPort = this._desPort;
    }
    if (this._desRegRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.desRegRoot = this._desRegRoot;
    }
    if (this._desRegRootExtPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.desRegRootExtPriority = this._desRegRootExtPriority;
    }
    if (this._desRegRootPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.desRegRootPriority = this._desRegRootPriority;
    }
    if (this._disputed !== undefined) {
      hasAnyValues = true;
      internalValueResult.disputed = this._disputed;
    }
    if (this._inPortCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.inPortCost = this._inPortCost;
    }
    if (this._instanceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNum = this._instanceNum;
    }
    if (this._portId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portId = this._portId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adInPortCost = undefined;
      this._desBridge = undefined;
      this._desBridgeExtPriority = undefined;
      this._desBridgePriority = undefined;
      this._desIntCost = undefined;
      this._desPort = undefined;
      this._desRegRoot = undefined;
      this._desRegRootExtPriority = undefined;
      this._desRegRootPriority = undefined;
      this._disputed = undefined;
      this._inPortCost = undefined;
      this._instanceNum = undefined;
      this._portId = undefined;
      this._role = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adInPortCost = value.adInPortCost;
      this._desBridge = value.desBridge;
      this._desBridgeExtPriority = value.desBridgeExtPriority;
      this._desBridgePriority = value.desBridgePriority;
      this._desIntCost = value.desIntCost;
      this._desPort = value.desPort;
      this._desRegRoot = value.desRegRoot;
      this._desRegRootExtPriority = value.desRegRootExtPriority;
      this._desRegRootPriority = value.desRegRootPriority;
      this._disputed = value.disputed;
      this._inPortCost = value.inPortCost;
      this._instanceNum = value.instanceNum;
      this._portId = value.portId;
      this._role = value.role;
      this._state = value.state;
    }
  }

  // ad_in_port_cost - computed: false, optional: true, required: false
  private _adInPortCost?: number; 
  public get adInPortCost() {
    return this.getNumberAttribute('ad_in_port_cost');
  }
  public set adInPortCost(value: number) {
    this._adInPortCost = value;
  }
  public resetAdInPortCost() {
    this._adInPortCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adInPortCostInput() {
    return this._adInPortCost;
  }

  // des_bridge - computed: false, optional: true, required: false
  private _desBridge?: string; 
  public get desBridge() {
    return this.getStringAttribute('des_bridge');
  }
  public set desBridge(value: string) {
    this._desBridge = value;
  }
  public resetDesBridge() {
    this._desBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desBridgeInput() {
    return this._desBridge;
  }

  // des_bridge_ext_priority - computed: false, optional: true, required: false
  private _desBridgeExtPriority?: number; 
  public get desBridgeExtPriority() {
    return this.getNumberAttribute('des_bridge_ext_priority');
  }
  public set desBridgeExtPriority(value: number) {
    this._desBridgeExtPriority = value;
  }
  public resetDesBridgeExtPriority() {
    this._desBridgeExtPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desBridgeExtPriorityInput() {
    return this._desBridgeExtPriority;
  }

  // des_bridge_priority - computed: false, optional: true, required: false
  private _desBridgePriority?: number; 
  public get desBridgePriority() {
    return this.getNumberAttribute('des_bridge_priority');
  }
  public set desBridgePriority(value: number) {
    this._desBridgePriority = value;
  }
  public resetDesBridgePriority() {
    this._desBridgePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desBridgePriorityInput() {
    return this._desBridgePriority;
  }

  // des_int_cost - computed: false, optional: true, required: false
  private _desIntCost?: number; 
  public get desIntCost() {
    return this.getNumberAttribute('des_int_cost');
  }
  public set desIntCost(value: number) {
    this._desIntCost = value;
  }
  public resetDesIntCost() {
    this._desIntCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desIntCostInput() {
    return this._desIntCost;
  }

  // des_port - computed: false, optional: true, required: false
  private _desPort?: string; 
  public get desPort() {
    return this.getStringAttribute('des_port');
  }
  public set desPort(value: string) {
    this._desPort = value;
  }
  public resetDesPort() {
    this._desPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desPortInput() {
    return this._desPort;
  }

  // des_reg_root - computed: false, optional: true, required: false
  private _desRegRoot?: string; 
  public get desRegRoot() {
    return this.getStringAttribute('des_reg_root');
  }
  public set desRegRoot(value: string) {
    this._desRegRoot = value;
  }
  public resetDesRegRoot() {
    this._desRegRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desRegRootInput() {
    return this._desRegRoot;
  }

  // des_reg_root_ext_priority - computed: false, optional: true, required: false
  private _desRegRootExtPriority?: number; 
  public get desRegRootExtPriority() {
    return this.getNumberAttribute('des_reg_root_ext_priority');
  }
  public set desRegRootExtPriority(value: number) {
    this._desRegRootExtPriority = value;
  }
  public resetDesRegRootExtPriority() {
    this._desRegRootExtPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desRegRootExtPriorityInput() {
    return this._desRegRootExtPriority;
  }

  // des_reg_root_priority - computed: false, optional: true, required: false
  private _desRegRootPriority?: number; 
  public get desRegRootPriority() {
    return this.getNumberAttribute('des_reg_root_priority');
  }
  public set desRegRootPriority(value: number) {
    this._desRegRootPriority = value;
  }
  public resetDesRegRootPriority() {
    this._desRegRootPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desRegRootPriorityInput() {
    return this._desRegRootPriority;
  }

  // disputed - computed: false, optional: true, required: false
  private _disputed?: string; 
  public get disputed() {
    return this.getStringAttribute('disputed');
  }
  public set disputed(value: string) {
    this._disputed = value;
  }
  public resetDisputed() {
    this._disputed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disputedInput() {
    return this._disputed;
  }

  // in_port_cost - computed: false, optional: true, required: false
  private _inPortCost?: number; 
  public get inPortCost() {
    return this.getNumberAttribute('in_port_cost');
  }
  public set inPortCost(value: number) {
    this._inPortCost = value;
  }
  public resetInPortCost() {
    this._inPortCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inPortCostInput() {
    return this._inPortCost;
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

  // port_id - computed: false, optional: true, required: false
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  public resetPortId() {
    this._portId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstances[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesOutputReference {
    return new DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkSpanningTreeModeInterfaceOperOperPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#ad_ex_port_cost DataThunderNetworkSpanningTreeModeInterfaceOper#ad_ex_port_cost}
  */
  readonly adExPortCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#adm_edge_port DataThunderNetworkSpanningTreeModeInterfaceOper#adm_edge_port}
  */
  readonly admEdgePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#adm_p2p DataThunderNetworkSpanningTreeModeInterfaceOper#adm_p2p}
  */
  readonly admP2P?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#auto_edge_port DataThunderNetworkSpanningTreeModeInterfaceOper#auto_edge_port}
  */
  readonly autoEdgePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#ba_incon DataThunderNetworkSpanningTreeModeInterfaceOper#ba_incon}
  */
  readonly baIncon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#bpdu_guard_err DataThunderNetworkSpanningTreeModeInterfaceOper#bpdu_guard_err}
  */
  readonly bpduGuardErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#bpdu_guard_port DataThunderNetworkSpanningTreeModeInterfaceOper#bpdu_guard_port}
  */
  readonly bpduGuardPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#bridge DataThunderNetworkSpanningTreeModeInterfaceOper#bridge}
  */
  readonly bridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_ext_cost DataThunderNetworkSpanningTreeModeInterfaceOper#des_ext_cost}
  */
  readonly desExtCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_root DataThunderNetworkSpanningTreeModeInterfaceOper#des_root}
  */
  readonly desRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_root_ext_priority DataThunderNetworkSpanningTreeModeInterfaceOper#des_root_ext_priority}
  */
  readonly desRootExtPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#des_root_priority DataThunderNetworkSpanningTreeModeInterfaceOper#des_root_priority}
  */
  readonly desRootPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#enabled DataThunderNetworkSpanningTreeModeInterfaceOper#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#ex_port_cost DataThunderNetworkSpanningTreeModeInterfaceOper#ex_port_cost}
  */
  readonly exPortCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#mode DataThunderNetworkSpanningTreeModeInterfaceOper#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#net_port DataThunderNetworkSpanningTreeModeInterfaceOper#net_port}
  */
  readonly netPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#oper_edge_port DataThunderNetworkSpanningTreeModeInterfaceOper#oper_edge_port}
  */
  readonly operEdgePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#oper_p2p DataThunderNetworkSpanningTreeModeInterfaceOper#oper_p2p}
  */
  readonly operP2P?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#port_hello_time DataThunderNetworkSpanningTreeModeInterfaceOper#port_hello_time}
  */
  readonly portHelloTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#port_name DataThunderNetworkSpanningTreeModeInterfaceOper#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rcvd_ack DataThunderNetworkSpanningTreeModeInterfaceOper#rcvd_ack}
  */
  readonly rcvdAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rcvd_bpdu DataThunderNetworkSpanningTreeModeInterfaceOper#rcvd_bpdu}
  */
  readonly rcvdBpdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rcvd_rstp DataThunderNetworkSpanningTreeModeInterfaceOper#rcvd_rstp}
  */
  readonly rcvdRstp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rcvd_stp DataThunderNetworkSpanningTreeModeInterfaceOper#rcvd_stp}
  */
  readonly rcvdStp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rcvd_tcn DataThunderNetworkSpanningTreeModeInterfaceOper#rcvd_tcn}
  */
  readonly rcvdTcn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rest_role DataThunderNetworkSpanningTreeModeInterfaceOper#rest_role}
  */
  readonly restRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rest_tcn DataThunderNetworkSpanningTreeModeInterfaceOper#rest_tcn}
  */
  readonly restTcn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rx_bpdu DataThunderNetworkSpanningTreeModeInterfaceOper#rx_bpdu}
  */
  readonly rxBpdu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#rx_tcn DataThunderNetworkSpanningTreeModeInterfaceOper#rx_tcn}
  */
  readonly rxTcn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#snd_rstp DataThunderNetworkSpanningTreeModeInterfaceOper#snd_rstp}
  */
  readonly sndRstp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#tc_ack DataThunderNetworkSpanningTreeModeInterfaceOper#tc_ack}
  */
  readonly tcAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#trns_blk DataThunderNetworkSpanningTreeModeInterfaceOper#trns_blk}
  */
  readonly trnsBlk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#trns_fwd DataThunderNetworkSpanningTreeModeInterfaceOper#trns_fwd}
  */
  readonly trnsFwd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#tx_bpdu DataThunderNetworkSpanningTreeModeInterfaceOper#tx_bpdu}
  */
  readonly txBpdu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#tx_tcn DataThunderNetworkSpanningTreeModeInterfaceOper#tx_tcn}
  */
  readonly txTcn?: number;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#instances DataThunderNetworkSpanningTreeModeInterfaceOper#instances}
  */
  readonly instances?: DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstances[] | cdktf.IResolvable;
}

export function dataThunderNetworkSpanningTreeModeInterfaceOperOperPortsToTerraform(struct?: DataThunderNetworkSpanningTreeModeInterfaceOperOperPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_ex_port_cost: cdktf.numberToTerraform(struct!.adExPortCost),
    adm_edge_port: cdktf.stringToTerraform(struct!.admEdgePort),
    adm_p2p: cdktf.stringToTerraform(struct!.admP2P),
    auto_edge_port: cdktf.stringToTerraform(struct!.autoEdgePort),
    ba_incon: cdktf.stringToTerraform(struct!.baIncon),
    bpdu_guard_err: cdktf.stringToTerraform(struct!.bpduGuardErr),
    bpdu_guard_port: cdktf.stringToTerraform(struct!.bpduGuardPort),
    bridge: cdktf.stringToTerraform(struct!.bridge),
    des_ext_cost: cdktf.numberToTerraform(struct!.desExtCost),
    des_root: cdktf.stringToTerraform(struct!.desRoot),
    des_root_ext_priority: cdktf.numberToTerraform(struct!.desRootExtPriority),
    des_root_priority: cdktf.numberToTerraform(struct!.desRootPriority),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    ex_port_cost: cdktf.numberToTerraform(struct!.exPortCost),
    mode: cdktf.numberToTerraform(struct!.mode),
    net_port: cdktf.stringToTerraform(struct!.netPort),
    oper_edge_port: cdktf.stringToTerraform(struct!.operEdgePort),
    oper_p2p: cdktf.stringToTerraform(struct!.operP2P),
    port_hello_time: cdktf.numberToTerraform(struct!.portHelloTime),
    port_name: cdktf.stringToTerraform(struct!.portName),
    rcvd_ack: cdktf.stringToTerraform(struct!.rcvdAck),
    rcvd_bpdu: cdktf.stringToTerraform(struct!.rcvdBpdu),
    rcvd_rstp: cdktf.stringToTerraform(struct!.rcvdRstp),
    rcvd_stp: cdktf.stringToTerraform(struct!.rcvdStp),
    rcvd_tcn: cdktf.stringToTerraform(struct!.rcvdTcn),
    rest_role: cdktf.stringToTerraform(struct!.restRole),
    rest_tcn: cdktf.stringToTerraform(struct!.restTcn),
    rx_bpdu: cdktf.numberToTerraform(struct!.rxBpdu),
    rx_tcn: cdktf.numberToTerraform(struct!.rxTcn),
    snd_rstp: cdktf.stringToTerraform(struct!.sndRstp),
    tc_ack: cdktf.stringToTerraform(struct!.tcAck),
    trns_blk: cdktf.numberToTerraform(struct!.trnsBlk),
    trns_fwd: cdktf.numberToTerraform(struct!.trnsFwd),
    tx_bpdu: cdktf.numberToTerraform(struct!.txBpdu),
    tx_tcn: cdktf.numberToTerraform(struct!.txTcn),
    instances: cdktf.listMapper(dataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesToTerraform, true)(struct!.instances),
  }
}


export function dataThunderNetworkSpanningTreeModeInterfaceOperOperPortsToHclTerraform(struct?: DataThunderNetworkSpanningTreeModeInterfaceOperOperPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_ex_port_cost: {
      value: cdktf.numberToHclTerraform(struct!.adExPortCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adm_edge_port: {
      value: cdktf.stringToHclTerraform(struct!.admEdgePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adm_p2p: {
      value: cdktf.stringToHclTerraform(struct!.admP2P),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_edge_port: {
      value: cdktf.stringToHclTerraform(struct!.autoEdgePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ba_incon: {
      value: cdktf.stringToHclTerraform(struct!.baIncon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpdu_guard_err: {
      value: cdktf.stringToHclTerraform(struct!.bpduGuardErr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpdu_guard_port: {
      value: cdktf.stringToHclTerraform(struct!.bpduGuardPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    des_ext_cost: {
      value: cdktf.numberToHclTerraform(struct!.desExtCost),
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
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ex_port_cost: {
      value: cdktf.numberToHclTerraform(struct!.exPortCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_port: {
      value: cdktf.stringToHclTerraform(struct!.netPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper_edge_port: {
      value: cdktf.stringToHclTerraform(struct!.operEdgePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper_p2p: {
      value: cdktf.stringToHclTerraform(struct!.operP2P),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_hello_time: {
      value: cdktf.numberToHclTerraform(struct!.portHelloTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcvd_ack: {
      value: cdktf.stringToHclTerraform(struct!.rcvdAck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcvd_bpdu: {
      value: cdktf.stringToHclTerraform(struct!.rcvdBpdu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcvd_rstp: {
      value: cdktf.stringToHclTerraform(struct!.rcvdRstp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcvd_stp: {
      value: cdktf.stringToHclTerraform(struct!.rcvdStp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcvd_tcn: {
      value: cdktf.stringToHclTerraform(struct!.rcvdTcn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rest_role: {
      value: cdktf.stringToHclTerraform(struct!.restRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rest_tcn: {
      value: cdktf.stringToHclTerraform(struct!.restTcn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rx_bpdu: {
      value: cdktf.numberToHclTerraform(struct!.rxBpdu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_tcn: {
      value: cdktf.numberToHclTerraform(struct!.rxTcn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snd_rstp: {
      value: cdktf.stringToHclTerraform(struct!.sndRstp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tc_ack: {
      value: cdktf.stringToHclTerraform(struct!.tcAck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trns_blk: {
      value: cdktf.numberToHclTerraform(struct!.trnsBlk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trns_fwd: {
      value: cdktf.numberToHclTerraform(struct!.trnsFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_bpdu: {
      value: cdktf.numberToHclTerraform(struct!.txBpdu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_tcn: {
      value: cdktf.numberToHclTerraform(struct!.txTcn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instances: {
      value: cdktf.listMapperHcl(dataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesToHclTerraform, true)(struct!.instances),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkSpanningTreeModeInterfaceOperOperPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adExPortCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.adExPortCost = this._adExPortCost;
    }
    if (this._admEdgePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.admEdgePort = this._admEdgePort;
    }
    if (this._admP2P !== undefined) {
      hasAnyValues = true;
      internalValueResult.admP2P = this._admP2P;
    }
    if (this._autoEdgePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEdgePort = this._autoEdgePort;
    }
    if (this._baIncon !== undefined) {
      hasAnyValues = true;
      internalValueResult.baIncon = this._baIncon;
    }
    if (this._bpduGuardErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduGuardErr = this._bpduGuardErr;
    }
    if (this._bpduGuardPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduGuardPort = this._bpduGuardPort;
    }
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._desExtCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.desExtCost = this._desExtCost;
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
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exPortCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.exPortCost = this._exPortCost;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._netPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.netPort = this._netPort;
    }
    if (this._operEdgePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.operEdgePort = this._operEdgePort;
    }
    if (this._operP2P !== undefined) {
      hasAnyValues = true;
      internalValueResult.operP2P = this._operP2P;
    }
    if (this._portHelloTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHelloTime = this._portHelloTime;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._rcvdAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvdAck = this._rcvdAck;
    }
    if (this._rcvdBpdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvdBpdu = this._rcvdBpdu;
    }
    if (this._rcvdRstp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvdRstp = this._rcvdRstp;
    }
    if (this._rcvdStp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvdStp = this._rcvdStp;
    }
    if (this._rcvdTcn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvdTcn = this._rcvdTcn;
    }
    if (this._restRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.restRole = this._restRole;
    }
    if (this._restTcn !== undefined) {
      hasAnyValues = true;
      internalValueResult.restTcn = this._restTcn;
    }
    if (this._rxBpdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxBpdu = this._rxBpdu;
    }
    if (this._rxTcn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxTcn = this._rxTcn;
    }
    if (this._sndRstp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndRstp = this._sndRstp;
    }
    if (this._tcAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcAck = this._tcAck;
    }
    if (this._trnsBlk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trnsBlk = this._trnsBlk;
    }
    if (this._trnsFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.trnsFwd = this._trnsFwd;
    }
    if (this._txBpdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBpdu = this._txBpdu;
    }
    if (this._txTcn !== undefined) {
      hasAnyValues = true;
      internalValueResult.txTcn = this._txTcn;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkSpanningTreeModeInterfaceOperOperPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adExPortCost = undefined;
      this._admEdgePort = undefined;
      this._admP2P = undefined;
      this._autoEdgePort = undefined;
      this._baIncon = undefined;
      this._bpduGuardErr = undefined;
      this._bpduGuardPort = undefined;
      this._bridge = undefined;
      this._desExtCost = undefined;
      this._desRoot = undefined;
      this._desRootExtPriority = undefined;
      this._desRootPriority = undefined;
      this._enabled = undefined;
      this._exPortCost = undefined;
      this._mode = undefined;
      this._netPort = undefined;
      this._operEdgePort = undefined;
      this._operP2P = undefined;
      this._portHelloTime = undefined;
      this._portName = undefined;
      this._rcvdAck = undefined;
      this._rcvdBpdu = undefined;
      this._rcvdRstp = undefined;
      this._rcvdStp = undefined;
      this._rcvdTcn = undefined;
      this._restRole = undefined;
      this._restTcn = undefined;
      this._rxBpdu = undefined;
      this._rxTcn = undefined;
      this._sndRstp = undefined;
      this._tcAck = undefined;
      this._trnsBlk = undefined;
      this._trnsFwd = undefined;
      this._txBpdu = undefined;
      this._txTcn = undefined;
      this._instances.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adExPortCost = value.adExPortCost;
      this._admEdgePort = value.admEdgePort;
      this._admP2P = value.admP2P;
      this._autoEdgePort = value.autoEdgePort;
      this._baIncon = value.baIncon;
      this._bpduGuardErr = value.bpduGuardErr;
      this._bpduGuardPort = value.bpduGuardPort;
      this._bridge = value.bridge;
      this._desExtCost = value.desExtCost;
      this._desRoot = value.desRoot;
      this._desRootExtPriority = value.desRootExtPriority;
      this._desRootPriority = value.desRootPriority;
      this._enabled = value.enabled;
      this._exPortCost = value.exPortCost;
      this._mode = value.mode;
      this._netPort = value.netPort;
      this._operEdgePort = value.operEdgePort;
      this._operP2P = value.operP2P;
      this._portHelloTime = value.portHelloTime;
      this._portName = value.portName;
      this._rcvdAck = value.rcvdAck;
      this._rcvdBpdu = value.rcvdBpdu;
      this._rcvdRstp = value.rcvdRstp;
      this._rcvdStp = value.rcvdStp;
      this._rcvdTcn = value.rcvdTcn;
      this._restRole = value.restRole;
      this._restTcn = value.restTcn;
      this._rxBpdu = value.rxBpdu;
      this._rxTcn = value.rxTcn;
      this._sndRstp = value.sndRstp;
      this._tcAck = value.tcAck;
      this._trnsBlk = value.trnsBlk;
      this._trnsFwd = value.trnsFwd;
      this._txBpdu = value.txBpdu;
      this._txTcn = value.txTcn;
      this._instances.internalValue = value.instances;
    }
  }

  // ad_ex_port_cost - computed: false, optional: true, required: false
  private _adExPortCost?: number; 
  public get adExPortCost() {
    return this.getNumberAttribute('ad_ex_port_cost');
  }
  public set adExPortCost(value: number) {
    this._adExPortCost = value;
  }
  public resetAdExPortCost() {
    this._adExPortCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adExPortCostInput() {
    return this._adExPortCost;
  }

  // adm_edge_port - computed: false, optional: true, required: false
  private _admEdgePort?: string; 
  public get admEdgePort() {
    return this.getStringAttribute('adm_edge_port');
  }
  public set admEdgePort(value: string) {
    this._admEdgePort = value;
  }
  public resetAdmEdgePort() {
    this._admEdgePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admEdgePortInput() {
    return this._admEdgePort;
  }

  // adm_p2p - computed: false, optional: true, required: false
  private _admP2P?: string; 
  public get admP2P() {
    return this.getStringAttribute('adm_p2p');
  }
  public set admP2P(value: string) {
    this._admP2P = value;
  }
  public resetAdmP2P() {
    this._admP2P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admP2PInput() {
    return this._admP2P;
  }

  // auto_edge_port - computed: false, optional: true, required: false
  private _autoEdgePort?: string; 
  public get autoEdgePort() {
    return this.getStringAttribute('auto_edge_port');
  }
  public set autoEdgePort(value: string) {
    this._autoEdgePort = value;
  }
  public resetAutoEdgePort() {
    this._autoEdgePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEdgePortInput() {
    return this._autoEdgePort;
  }

  // ba_incon - computed: false, optional: true, required: false
  private _baIncon?: string; 
  public get baIncon() {
    return this.getStringAttribute('ba_incon');
  }
  public set baIncon(value: string) {
    this._baIncon = value;
  }
  public resetBaIncon() {
    this._baIncon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baInconInput() {
    return this._baIncon;
  }

  // bpdu_guard_err - computed: false, optional: true, required: false
  private _bpduGuardErr?: string; 
  public get bpduGuardErr() {
    return this.getStringAttribute('bpdu_guard_err');
  }
  public set bpduGuardErr(value: string) {
    this._bpduGuardErr = value;
  }
  public resetBpduGuardErr() {
    this._bpduGuardErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduGuardErrInput() {
    return this._bpduGuardErr;
  }

  // bpdu_guard_port - computed: false, optional: true, required: false
  private _bpduGuardPort?: string; 
  public get bpduGuardPort() {
    return this.getStringAttribute('bpdu_guard_port');
  }
  public set bpduGuardPort(value: string) {
    this._bpduGuardPort = value;
  }
  public resetBpduGuardPort() {
    this._bpduGuardPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduGuardPortInput() {
    return this._bpduGuardPort;
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // des_ext_cost - computed: false, optional: true, required: false
  private _desExtCost?: number; 
  public get desExtCost() {
    return this.getNumberAttribute('des_ext_cost');
  }
  public set desExtCost(value: number) {
    this._desExtCost = value;
  }
  public resetDesExtCost() {
    this._desExtCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desExtCostInput() {
    return this._desExtCost;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ex_port_cost - computed: false, optional: true, required: false
  private _exPortCost?: number; 
  public get exPortCost() {
    return this.getNumberAttribute('ex_port_cost');
  }
  public set exPortCost(value: number) {
    this._exPortCost = value;
  }
  public resetExPortCost() {
    this._exPortCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exPortCostInput() {
    return this._exPortCost;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // net_port - computed: false, optional: true, required: false
  private _netPort?: string; 
  public get netPort() {
    return this.getStringAttribute('net_port');
  }
  public set netPort(value: string) {
    this._netPort = value;
  }
  public resetNetPort() {
    this._netPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netPortInput() {
    return this._netPort;
  }

  // oper_edge_port - computed: false, optional: true, required: false
  private _operEdgePort?: string; 
  public get operEdgePort() {
    return this.getStringAttribute('oper_edge_port');
  }
  public set operEdgePort(value: string) {
    this._operEdgePort = value;
  }
  public resetOperEdgePort() {
    this._operEdgePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operEdgePortInput() {
    return this._operEdgePort;
  }

  // oper_p2p - computed: false, optional: true, required: false
  private _operP2P?: string; 
  public get operP2P() {
    return this.getStringAttribute('oper_p2p');
  }
  public set operP2P(value: string) {
    this._operP2P = value;
  }
  public resetOperP2P() {
    this._operP2P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operP2PInput() {
    return this._operP2P;
  }

  // port_hello_time - computed: false, optional: true, required: false
  private _portHelloTime?: number; 
  public get portHelloTime() {
    return this.getNumberAttribute('port_hello_time');
  }
  public set portHelloTime(value: number) {
    this._portHelloTime = value;
  }
  public resetPortHelloTime() {
    this._portHelloTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHelloTimeInput() {
    return this._portHelloTime;
  }

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // rcvd_ack - computed: false, optional: true, required: false
  private _rcvdAck?: string; 
  public get rcvdAck() {
    return this.getStringAttribute('rcvd_ack');
  }
  public set rcvdAck(value: string) {
    this._rcvdAck = value;
  }
  public resetRcvdAck() {
    this._rcvdAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdAckInput() {
    return this._rcvdAck;
  }

  // rcvd_bpdu - computed: false, optional: true, required: false
  private _rcvdBpdu?: string; 
  public get rcvdBpdu() {
    return this.getStringAttribute('rcvd_bpdu');
  }
  public set rcvdBpdu(value: string) {
    this._rcvdBpdu = value;
  }
  public resetRcvdBpdu() {
    this._rcvdBpdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdBpduInput() {
    return this._rcvdBpdu;
  }

  // rcvd_rstp - computed: false, optional: true, required: false
  private _rcvdRstp?: string; 
  public get rcvdRstp() {
    return this.getStringAttribute('rcvd_rstp');
  }
  public set rcvdRstp(value: string) {
    this._rcvdRstp = value;
  }
  public resetRcvdRstp() {
    this._rcvdRstp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdRstpInput() {
    return this._rcvdRstp;
  }

  // rcvd_stp - computed: false, optional: true, required: false
  private _rcvdStp?: string; 
  public get rcvdStp() {
    return this.getStringAttribute('rcvd_stp');
  }
  public set rcvdStp(value: string) {
    this._rcvdStp = value;
  }
  public resetRcvdStp() {
    this._rcvdStp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdStpInput() {
    return this._rcvdStp;
  }

  // rcvd_tcn - computed: false, optional: true, required: false
  private _rcvdTcn?: string; 
  public get rcvdTcn() {
    return this.getStringAttribute('rcvd_tcn');
  }
  public set rcvdTcn(value: string) {
    this._rcvdTcn = value;
  }
  public resetRcvdTcn() {
    this._rcvdTcn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdTcnInput() {
    return this._rcvdTcn;
  }

  // rest_role - computed: false, optional: true, required: false
  private _restRole?: string; 
  public get restRole() {
    return this.getStringAttribute('rest_role');
  }
  public set restRole(value: string) {
    this._restRole = value;
  }
  public resetRestRole() {
    this._restRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restRoleInput() {
    return this._restRole;
  }

  // rest_tcn - computed: false, optional: true, required: false
  private _restTcn?: string; 
  public get restTcn() {
    return this.getStringAttribute('rest_tcn');
  }
  public set restTcn(value: string) {
    this._restTcn = value;
  }
  public resetRestTcn() {
    this._restTcn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restTcnInput() {
    return this._restTcn;
  }

  // rx_bpdu - computed: false, optional: true, required: false
  private _rxBpdu?: number; 
  public get rxBpdu() {
    return this.getNumberAttribute('rx_bpdu');
  }
  public set rxBpdu(value: number) {
    this._rxBpdu = value;
  }
  public resetRxBpdu() {
    this._rxBpdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxBpduInput() {
    return this._rxBpdu;
  }

  // rx_tcn - computed: false, optional: true, required: false
  private _rxTcn?: number; 
  public get rxTcn() {
    return this.getNumberAttribute('rx_tcn');
  }
  public set rxTcn(value: number) {
    this._rxTcn = value;
  }
  public resetRxTcn() {
    this._rxTcn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxTcnInput() {
    return this._rxTcn;
  }

  // snd_rstp - computed: false, optional: true, required: false
  private _sndRstp?: string; 
  public get sndRstp() {
    return this.getStringAttribute('snd_rstp');
  }
  public set sndRstp(value: string) {
    this._sndRstp = value;
  }
  public resetSndRstp() {
    this._sndRstp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndRstpInput() {
    return this._sndRstp;
  }

  // tc_ack - computed: false, optional: true, required: false
  private _tcAck?: string; 
  public get tcAck() {
    return this.getStringAttribute('tc_ack');
  }
  public set tcAck(value: string) {
    this._tcAck = value;
  }
  public resetTcAck() {
    this._tcAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcAckInput() {
    return this._tcAck;
  }

  // trns_blk - computed: false, optional: true, required: false
  private _trnsBlk?: number; 
  public get trnsBlk() {
    return this.getNumberAttribute('trns_blk');
  }
  public set trnsBlk(value: number) {
    this._trnsBlk = value;
  }
  public resetTrnsBlk() {
    this._trnsBlk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trnsBlkInput() {
    return this._trnsBlk;
  }

  // trns_fwd - computed: false, optional: true, required: false
  private _trnsFwd?: number; 
  public get trnsFwd() {
    return this.getNumberAttribute('trns_fwd');
  }
  public set trnsFwd(value: number) {
    this._trnsFwd = value;
  }
  public resetTrnsFwd() {
    this._trnsFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trnsFwdInput() {
    return this._trnsFwd;
  }

  // tx_bpdu - computed: false, optional: true, required: false
  private _txBpdu?: number; 
  public get txBpdu() {
    return this.getNumberAttribute('tx_bpdu');
  }
  public set txBpdu(value: number) {
    this._txBpdu = value;
  }
  public resetTxBpdu() {
    this._txBpdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBpduInput() {
    return this._txBpdu;
  }

  // tx_tcn - computed: false, optional: true, required: false
  private _txTcn?: number; 
  public get txTcn() {
    return this.getNumberAttribute('tx_tcn');
  }
  public set txTcn(value: number) {
    this._txTcn = value;
  }
  public resetTxTcn() {
    this._txTcn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTcnInput() {
    return this._txTcn;
  }

  // instances - computed: false, optional: true, required: false
  private _instances = new DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsInstances[] | cdktf.IResolvable) {
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

export class DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkSpanningTreeModeInterfaceOperOperPorts[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsOutputReference {
    return new DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkSpanningTreeModeInterfaceOperOper {
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#ports DataThunderNetworkSpanningTreeModeInterfaceOper#ports}
  */
  readonly ports?: DataThunderNetworkSpanningTreeModeInterfaceOperOperPorts[] | cdktf.IResolvable;
}

export function dataThunderNetworkSpanningTreeModeInterfaceOperOperToTerraform(struct?: DataThunderNetworkSpanningTreeModeInterfaceOperOperOutputReference | DataThunderNetworkSpanningTreeModeInterfaceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataThunderNetworkSpanningTreeModeInterfaceOperOperPortsToTerraform, true)(struct!.ports),
  }
}


export function dataThunderNetworkSpanningTreeModeInterfaceOperOperToHclTerraform(struct?: DataThunderNetworkSpanningTreeModeInterfaceOperOperOutputReference | DataThunderNetworkSpanningTreeModeInterfaceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataThunderNetworkSpanningTreeModeInterfaceOperOperPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkSpanningTreeModeInterfaceOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkSpanningTreeModeInterfaceOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkSpanningTreeModeInterfaceOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports.internalValue = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataThunderNetworkSpanningTreeModeInterfaceOperOperPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataThunderNetworkSpanningTreeModeInterfaceOperOperPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper thunder_network_spanning_tree_mode_interface_oper}
*/
export class DataThunderNetworkSpanningTreeModeInterfaceOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_spanning_tree_mode_interface_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkSpanningTreeModeInterfaceOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkSpanningTreeModeInterfaceOper to import
  * @param importFromId The id of the existing DataThunderNetworkSpanningTreeModeInterfaceOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkSpanningTreeModeInterfaceOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_spanning_tree_mode_interface_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_spanning_tree_mode_interface_oper thunder_network_spanning_tree_mode_interface_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkSpanningTreeModeInterfaceOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkSpanningTreeModeInterfaceOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_spanning_tree_mode_interface_oper',
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
  private _oper = new DataThunderNetworkSpanningTreeModeInterfaceOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkSpanningTreeModeInterfaceOperOper) {
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
      oper: dataThunderNetworkSpanningTreeModeInterfaceOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderNetworkSpanningTreeModeInterfaceOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkSpanningTreeModeInterfaceOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
